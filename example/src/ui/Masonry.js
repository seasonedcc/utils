import React from 'react'
import { Masonry } from '@seasonedsoftware/utils/ui'
import SampleCard from 'example/SampleCard'

export default () => (
  <SampleCard
    title="Masonry"
    code={`
import {
  Masonry,
} from '@seasonedsoftware/utils/ui'

const MyComponent = () => (
  <Masonry
    minColumnWidth={200} // defaults to 300
  >
    <p>Foo</p>
    <p>Bar</p>
    <p>Fizz</p>
    <p>Buzz</p>
  </Masonry>
)`}
  >
    <p>Resize the window to see it working.</p>
    <Masonry minColumnWidth={200}>
      <p className="masonry-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <p className="masonry-p">
        Ut aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <p className="masonry-p">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p className="masonry-p">
        Lorem ipsum dolor sit amet enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi.
      </p>
      <p className="masonry-p">
        Ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <p className="masonry-p">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </Masonry>
  </SampleCard>
)
