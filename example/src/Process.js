import React, { useState } from 'react'
import { useProcessOnce, useInterval } from '@seasonedsoftware/utils/hooks'
import shuffle from 'lodash/shuffle'
import SampleCard from './SampleCard'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default () => {
  const [, setCount] = useState(0)
  const random = useProcessOnce(shuffle, numbers)
  const random2 = shuffle(numbers)
  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)
  return (
    <SampleCard
      title="useProcessOnce"
      code={`
import {
  useProcessOnce,
  useInterval,
} from '@seasonedsoftware/utils/hooks'
import shuffle from 'lodash/shuffle'

const numbers = [0,1,2,3,4,5,6,7,8,9]

const MyComponent = () => {
  const [, setCount] = useState(0)
  const random = useProcessOnce(shuffle, numbers)
  const random2 = shuffle(numbers)
  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)
  // return ...
}`}
    >
      <p>
        The random value is: <strong>{JSON.stringify(random)}</strong>
      </p>
      <p>
        Without the hook: <strong>{JSON.stringify(random2)}</strong>
      </p>
    </SampleCard>
  )
}
