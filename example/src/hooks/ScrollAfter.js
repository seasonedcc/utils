import React from 'react'
import { useScrollAfterLoad, useToggle } from '@seasonedsoftware/utils/hooks'
import { Button, CircularProgress } from '@material-ui/core'
import SampleCard from 'example/SampleCard'

export default () => {
  const [loaded, toggle] = useToggle()
  useScrollAfterLoad(loaded)
  return (
    <SampleCard
      title="useScrollAfterLoad"
      code={`
import {
  useScrollAfterLoad,
  useToggle,
} from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const [loaded, toggle] = useToggle()
  useScrollAfterLoad(loaded)
  return (
    <>
      <Button onClick={toggle}>
        {loaded ? 'Load again' : 'Finish loading'}
      </Button>
      {loaded || <CircularProgress />}
    </>
  )
}`}
    >
      <p>
        Window will scroll to hash when you pass <em>true</em> as argument.
        <br />
        Change the window hash to test it differently.
      </p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={toggle}>
          {loaded ? 'Load again' : 'Finish loading'}
        </Button>{' '}
        {loaded || <CircularProgress style={{ marginLeft: 10 }} size={25} />}
      </div>
    </SampleCard>
  )
}
