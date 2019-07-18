import React from 'react'
import { isIOS } from '@seasonedsoftware/utils'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="isIOS"
    code={`
import { isIOS } from '@seasonedsoftware/utils'

const MyComponent = () => {
return <p>{JSON.stringify(isIOS())}</p>
}`}
  >
    <p>
      Am I using an iOS device? <strong>{JSON.stringify(isIOS())}</strong>
    </p>
  </SampleCard>
)
