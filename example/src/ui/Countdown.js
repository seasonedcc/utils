import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useToggle } from '@seasonedsoftware/utils/hooks'
import { Countdown } from '@seasonedsoftware/utils/ui'
import SampleCard from 'example/SampleCard'

export default () => {
  const [count, setCount] = useState(10)
  const [time, setTime] = useState(10)
  const [active, toggle] = useToggle()
  function add10() {
    setTime(time => time + 10)
    setCount(count => count + 10)
  }
  return (
    <SampleCard
      title="Countdown"
      code={`
import {
  Countdown,
} from '@seasonedsoftware/utils/ui'

const MyComponent = () => {
  const [count, setCount] = useState(10)
  return (
    <>
      <Countdown
        active
        time={10}
        onTick={setCount} // will be called every 1000ms
        // timeout={1000} can be changed
        onFinish={() => {
          console.log('Finished!')
        }}
      />
      <p>{count}</p>
    </>
  )
}`}
    >
      <p>
        Click the button below to start the Countdown.
        <br />
        <strong>{count || 'Finished'}</strong>
      </p>
      <Countdown
        onTick={setCount}
        onFinish={() => {
          toggle()
          console.log('Finished!')
        }}
        active={active}
        time={time}
      />
      {active || (
        <Button
          onClick={() => {
            toggle()
            count === 0 && add10()
          }}
          variant="contained"
          color="primary"
        >
          Start
        </Button>
      )}{' '}
      {active && (
        <Button onClick={toggle} variant="contained" color="primary">
          Stop
        </Button>
      )}{' '}
      {active && (
        <Button onClick={add10} variant="contained" color="primary">
          +10s
        </Button>
      )}
    </SampleCard>
  )
}
