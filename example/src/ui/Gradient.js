import React from 'react'
import { LinearGradient } from '@seasonedsoftware/utils/ui'
import SampleCard from 'example/SampleCard'

export default () => (
  <SampleCard
    title="LinearGradient"
    code={`
import {
  LinearGradient,
} from '@seasonedsoftware/utils/ui'

const MyComponent = () => (
  <LinearGradient
    colors={['#6132CE', '#B73D97', '#DD4E44']}
    deg={315} // defaults to 90
  >
    <p>A child container.</p>
  </LinearGradient>
)`}
  >
    <LinearGradient colors={['#6132CE', '#B73D97', '#DD4E44']} deg={315}>
      <div style={{ padding: '1rem' }}>
        <p>This gradient will be applied to the child container.</p>
        <p>Minimum of 2 colors, you can apply as many as you want though.</p>
      </div>
    </LinearGradient>
  </SampleCard>
)
