import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import { Card, CardHeader, CardContent } from '@material-ui/core'

import { LIBRARY_NAME } from 'new-react-lib'

const Example = () => (
  <Card elevation={5} className="rating">
    <CardHeader title="My sample" />
    <CardContent>
      <LIBRARY_NAME />
      <SyntaxHighlighter language="javascript" style={prism}>
        {`
import { LIBRARY_NAME } from 'seasoned-evaluator'

// MyComponent
<LIBRARY_NAME />
        `}
      </SyntaxHighlighter>
    </CardContent>
  </Card>
)

export default Example
