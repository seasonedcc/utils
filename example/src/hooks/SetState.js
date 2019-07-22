import React from 'react'
import { useSetState } from '@seasonedsoftware/utils/hooks'
import { Button } from '@material-ui/core'
import SampleCard from 'example/SampleCard'

export default () => {
  const [state, setState] = useSetState({
    first: false,
    second: false,
  })
  return (
    <SampleCard
      title="useSetState"
      code={`
import { useSetState } from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const [state, setState] = useSetState({
    first: false,
    second: false,
  })
  return (
    <>
      <Button
        color={state.first ? 'primary' : 'secondary'}
        onClick={() => {
          setState({ first: !state.first })
        }}
      >
        First
      </Button>
      <Button
        color={state.second ? 'primary' : 'secondary'}
        onClick={() => {
          setState({ second: !state.second })
        }}
      >
        Second
      </Button>
    </>
  )
}`}
    >
      <p>
        A replacement for the old <em>this.setState</em>.
      </p>
      <p>
        <strong>useSafeState</strong> is the very same but will avoid calling
        setState when the component is unmounted.
      </p>
      <p>Good to avoid those warnings when dealing with Promises.</p>
      <p>
        <Button
          variant="contained"
          color={state.first ? 'primary' : 'secondary'}
          onClick={() => {
            setState({ first: !state.first })
          }}
        >
          First
        </Button>{' '}
        <Button
          variant="contained"
          color={state.second ? 'primary' : 'secondary'}
          onClick={() => {
            setState({ second: !state.second })
          }}
        >
          Second
        </Button>
      </p>
    </SampleCard>
  )
}
