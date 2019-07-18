import React from 'react'
import { scrollToEl } from '@seasonedsoftware/utils'
import { Button } from '@material-ui/core'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="scrollToEl"
    code={`
import { scrollToEl } from '@seasonedsoftware/utils'

const MyComponent = () => (
  <>
    <Button onClick={() => {
      scrollToEl()
    }}>
      Scroll to Top
    </Button>
    <Button onClick={() => {
      const el = document.getElementById('Hooks')
      scrollToEl(el, 'auto') // default 'smooth'
    }}>
      Hard Scroll to Hooks
    </Button>
  </>
)`}
  >
    <p>Click the buttons bellow.</p>
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        scrollToEl()
      }}
    >
      Scroll to Top
    </Button>{' '}
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        const el = document.getElementById('Hooks')
        scrollToEl(el, 'auto')
      }}
    >
      Hard Scroll to Hooks
    </Button>
  </SampleCard>
)
