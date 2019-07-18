import React from 'react'
import { useToggle } from '@seasonedsoftware/utils'
import { Switch } from '@material-ui/core'
import SampleCard from './SampleCard'

export default () => {
  const [on, toggle] = useToggle(true)
  return (
    <SampleCard
      title="useToggle"
      code={`
import { useToggle } from '@seasonedsoftware/utils'

const MyComponent = () => {
  const [on, toggle] = useToggle(true)
  return <Switch checked={on} onChange={toggle} />
}`}
    >
      <Switch checked={on} onChange={toggle} />
    </SampleCard>
  )
}
