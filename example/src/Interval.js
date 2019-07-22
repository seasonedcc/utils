import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useInterval } from '@seasonedsoftware/utils/hooks'
import SampleCard from './SampleCard'

export default () => {
  const [delay, setDelay] = useState(null)

  useInterval(() => {
    console.log('Hello world!')
  }, delay)
  return (
    <SampleCard
      title="useInterval"
      code={`
import { useInterval } from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  useInterval(() => {
    console.log('foo')
  }, 1000) // null to disable
  return null
}`}
    >
      <p>Click the button bellow and check the logs</p>
      <Button
        onClick={() => setDelay(delay ? null : 1000)}
        variant="contained"
        color="primary"
      >
        {delay ? 'Disable' : 'Enable'}
      </Button>
    </SampleCard>
  )
}
