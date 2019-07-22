import React from 'react'
import { useMounted } from '@seasonedsoftware/utils/hooks'
import SampleCard from 'example/SampleCard'

export default () => {
  const isMounted = useMounted()
  return (
    <SampleCard
      title="useMounted"
      code={`
import { useMounted } from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const isMounted = useMounted()
  return isMounted ? 'Mounted' : 'Loading...'
}`}
    >
      <p>
        Am I mounted? <strong>{isMounted ? 'Yes' : 'No'}</strong>
      </p>
    </SampleCard>
  )
}
