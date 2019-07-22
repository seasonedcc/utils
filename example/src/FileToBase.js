import React from 'react'
import SampleCard from './SampleCard'

import { fileToBase64 } from '@seasonedsoftware/utils/helpers'

export default () => (
  <SampleCard
    title="fileToBase64"
    code={`
import { fileToBase64 } from '@seasonedsoftware/utils/helpers'

const MyComponent = () => {
  const onFileChange = async ({ target }) => {
    if (target.files && target.files.length) {
      const [file] = target.files
      const parsed = await fileToBase64(file)
      console.log(\`Parsed file: $\{parsed}\`)
    }
  }
  return <input type="file" onChange={onFileChange} />
}`}
  >
    <p>Click the button bellow, add a file and check the logs</p>
    <input type="file" onChange={onFileChange} />
  </SampleCard>
)

async function onFileChange(event) {
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files
    const parsed = await fileToBase64(file)
    console.log(`Parsed file: ${parsed}`)
  }
}
