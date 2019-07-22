import React from 'react'
import { isDev } from '@seasonedsoftware/utils/helpers'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="isDev"
    code={`
import { isDev } from '@seasonedsoftware/utils/helpers'

const MyComponent = () => {
return <p>{JSON.stringify(isDev())}</p>
}`}
  >
    <p>
      Am I on DEV environment? <strong>{JSON.stringify(isDev())}</strong>
    </p>
  </SampleCard>
)
