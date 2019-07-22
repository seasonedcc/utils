import React from 'react'
import { clipString } from '@seasonedsoftware/utils/helpers'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="clipString"
    code={`
import { clipString } from '@seasonedsoftware/utils/helpers'

const MyComponent = () => {
return (
  <p>
    {clipString('Too short to be clipped', 30)}<br />
    {clipString('Too big to be shown', 17)}
  </p>
)
}`}
  >
    <p>{clipString('Too short to be clipped', 30)}</p>
    <p>{clipString('Too big to be shown', 17)}</p>
  </SampleCard>
)
