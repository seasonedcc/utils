import React, { useState } from 'react'
import times from 'lodash/times'
import { Button, Chip } from '@material-ui/core'
import { useOnMount, useOnUnmount } from '@seasonedsoftware/utils/hooks'
import SampleCard from './SampleCard'

const MountChip = ({ onDelete }) => {
  useOnMount(() => {
    console.log('Component did mount')
  })
  useOnUnmount(() => {
    console.log('Component did unmount')
  })
  return <Chip onDelete={onDelete} label="Hello world!" />
}

export default () => {
  const [mounted, setMounted] = useState(0)
  return (
    <SampleCard
      title="useOnMount and useOnUnmount"
      code={`
import {
  useOnMount,
  useOnUnmount,
} from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  useOnMount(() =>
    console.log('Component did mount')
  )
  useOnUnmount(() =>
    console.log('Component did unmount')
  )
  return null
}`}
    >
      <p>Click the button bellow and check the logs</p>
      <p>
        <Button
          onClick={() => setMounted(mounted + 1)}
          variant="contained"
          color="primary"
        >
          Add element
        </Button>{' '}
      </p>
      {times(mounted, index => (
        <MountChip
          key={`mount-${index}`}
          onDelete={() => setMounted(mounted - 1)}
        />
      ))}
    </SampleCard>
  )
}
