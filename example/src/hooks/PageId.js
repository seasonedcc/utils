import React from 'react'
import { usePageId, useBodyClass } from '@seasonedsoftware/utils/hooks'
import SampleCard from 'example/SampleCard'

export default () => {
  const pageId = usePageId()
  useBodyClass(pageId, true)
  return (
    <SampleCard
      title="usePageId and useBodyClass"
      code={`
import {
  usePageId,
  useBodyClass,
} from '@seasonedsoftware/utils/hooks'

const MyComponent = () => {
  const pageId = usePageId()
  // const pageId = usePageId(
  //   window.location, 'anotherdefault'
  // )
  useBodyClass(pageId, true)
  return null
}`}
    >
      <p>
        The current pageId is: <strong>{pageId}</strong>
        <br />
        Inspect the body element to see it working.
      </p>
      <p>
        It creates a pageId to apply on body class and so on.
        <br />
        It will be based on the current{' '}
        <strong>window.location.pathname</strong>.
      </p>
      <p>
        You can also send another location as the first param, like your
        favorite router custom location object.
      </p>
      <p>
        When you are on the root path, it will show the default ('home' by
        default) which is the second param.
      </p>
    </SampleCard>
  )
}
