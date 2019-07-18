import React from 'react'
import { nl2Br } from '@seasonedsoftware/utils'
import SampleCard from './SampleCard'

export default () => (
  <SampleCard
    title="nl2Br"
    code={`
import { nl2Br } from '@seasonedsoftware/utils'

const MyComponent = () => {
return nl2Br(
        \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\`
      )
}`}
  >
    <p>
      {nl2Br(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      )}
    </p>
  </SampleCard>
)
