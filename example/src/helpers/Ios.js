import React from 'react'
import { isIOS } from '@seasonedsoftware/utils/helpers'
import SampleCard from 'example/SampleCard'

export default () => (
  <SampleCard
    title="isIOS"
    code={`
import { isIOS } from '@seasonedsoftware/utils/helpers'

const MyComponent = () => {
return <p>{JSON.stringify(isIOS())}</p>
}`}
  >
    <p>
      Am I using an iOS device? <strong>{JSON.stringify(isIOS())}</strong>
    </p>
  </SampleCard>
)
