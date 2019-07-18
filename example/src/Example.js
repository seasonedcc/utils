import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { Utils } from '@seasonedsoftware/utils'

const Example = () => (
  <Card elevation={5} className="rating">
    <CardHeader title="My sample" />
    <CardContent>
      <Utils />
    </CardContent>
    <SyntaxHighlighter language="javascript" style={prism}>
      {`
import { Utils } from '@seasonedsoftware/utils'

// MyComponent
<Utils />
      `}
    </SyntaxHighlighter>
  </Card>
)

export default Example
