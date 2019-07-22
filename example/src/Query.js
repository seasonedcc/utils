import React from 'react'
import { useQueryParam } from '@seasonedsoftware/utils/hooks'
import { Button } from '@material-ui/core'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="useQueryParam"
    code={`
import { useQueryParam } from '@seasonedsoftware/utils/hooks'

const MyComponent = () => (
  <Button onClick={() =>
    console.log(useQueryParam('foo'))
  }>
    Get param
  </Button>
)`}
  >
    <p>
      Add <em>"?foo=bar"</em> to the URL, click the button bellow and check the
      logs.
    </p>
    <Button
      onClick={() => {
        console.log(useQueryParam('foo'))
      }}
      color="primary"
      variant="contained"
    >
      Get param
    </Button>
  </SampleCard>
)
