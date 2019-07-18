import React from 'react'
import { getElByHash } from '@seasonedsoftware/utils'
import { Button } from '@material-ui/core'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="getElByHash"
    code={`
import { getElByHash } from '@seasonedsoftware/utils'

const MyComponent = () => (
  <Button onClick={() => console.log(getElByHash())}>
    Get el
  </Button>
)`}
  >
    <p>Click the button bellow and check the logs.</p>
    <Button
      onClick={() => {
        window.location.hash = 'get-el-by-hash'
        console.log(getElByHash())
      }}
      color="primary"
      variant="contained"
    >
      Change hash
    </Button>
  </SampleCard>
)
