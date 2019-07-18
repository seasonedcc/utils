import React, { useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { sleep } from '@seasonedsoftware/utils'
import SampleCard from './SampleCard'

export default () => {
  const [clicked, setClicked] = useState(false)

  const onClick = async () => {
    setClicked(true)
    await sleep(2000)
    setClicked(false)
  }
  return (
    <SampleCard
      title="sleep"
      code={`
import { sleep } from '@seasonedsoftware/utils'

const MyComponent = () => {
  const [clicked, setClicked] = useState(false)
  return clicked ? (
    <CircularProgress />
  ) : (
    <Button onClick={async () => {
      setClicked(true)
      await sleep(2000)
      setClicked(false)
    }}>
      Click
    </Button>
  )
}`}
    >
      <p>Click the button bellow</p>
      {clicked ? (
        <CircularProgress />
      ) : (
        <Button onClick={onClick} variant="contained" color="primary">
          Click
        </Button>
      )}
    </SampleCard>
  )
}
