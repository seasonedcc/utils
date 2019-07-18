import React from 'react'
import { Button } from '@material-ui/core'
import { useHtmlClass, useToggle } from '@seasonedsoftware/utils'
import SampleCard from './SampleCard'

export default () => {
  const [enabled, toggle] = useToggle()
  useHtmlClass('super-class', enabled)
  return (
    <SampleCard
      title="useHtmlClass"
      code={`
import {
  useHtmlClass,
  useToggle,
} from '@seasonedsoftware/utils'

const MyComponent = () => {
  const [enabled, toggle] = useToggle()
  useHtmlClass('super-class', enabled)
  return <Button onClick={toggle}>Toggle class</Button>
}`}
    >
      <p>Click the button bellow and inspect the HTML element</p>
      <Button onClick={toggle} variant="contained" color="primary">
        Toggle class
      </Button>
    </SampleCard>
  )
}
