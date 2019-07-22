import React from 'react'
import { useWindowDimensions } from '@seasonedsoftware/utils/hooks'
import SampleCard from './SampleCard'

export default () => {
  const { width, height } = useWindowDimensions()
  return (
    <SampleCard
      title="useWindowDimensions"
      code={`
import {
  useWindowDimensions,
} from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const { width, height } = useWindowDimensions()
  return (
    <p>{width} - {height}</p>
  )
}`}
    >
      <p>
        Resize the window to see it working
        <br />
        Width: <strong>{width}</strong>
        <br />
        Height: <strong>{height}</strong>
        <br />
      </p>
      <p>
        You can pass a number argument to change the{' '}
        <a
          rel="noopener noreferrer"
          href="https://lodash.com/docs/4.17.14#throttle"
          target="_blank"
        >
          throttle
        </a>
        .
      </p>
    </SampleCard>
  )
}
