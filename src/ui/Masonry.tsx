import React, {
  useState,
  useRef,
  memo,
  useEffect,
  cloneElement,
  MutableRefObject,
} from 'react'
import { useWindowDimensions } from '../hooks'
import times from 'lodash/times'

const boxStyles = {
  alignItems: 'stretch',
  display: 'flex',
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  minHeight: 'min-content',
}

interface MasonryProps {
  children: any[]
  minColumnWidth?: number
  fallback?: number
  adjust?: number
  [key: string]: any
}

const MasonryComponent = ({
  children,
  fallback = 2,
  adjust = 0,
  minColumnWidth = 300,
  ...props
}: MasonryProps) => {
  const wrapper: MutableRefObject<null | HTMLDivElement> = useRef(null)
  const initialWidth = fallback * minColumnWidth
  const [wrapperWidth, setWrapperWidth] = useState(initialWidth)
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (wrapper.current) {
      setWrapperWidth(wrapper.current.getBoundingClientRect().width)
    }
  }, [width])
  const columns = Math.round(wrapperWidth / minColumnWidth)

  return (
    <div {...props} style={boxStyles} ref={wrapper}>
      {times(columns, index => {
        const isLast = index === columns - 1
        return (
          <div
            style={{
              ...boxStyles,
              flexDirection: 'column',
              marginRight: isLast ? -1 : 0,
            }}
            key={`tile-${index}`}
          >
            {React.Children.toArray(children)
              .filter(
                (_child, filterIndex) =>
                  (filterIndex + index + (columns - adjust)) % columns === 0,
              )
              .map((child, idx) =>
                cloneElement(child, { ...child.props, key: idx }),
              )}
          </div>
        )
      })}
    </div>
  )
}

export const Masonry = memo(MasonryComponent)
