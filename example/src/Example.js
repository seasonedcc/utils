import React from 'react'
import Clipped from './Clipped'
import FileToBase from './FileToBase'
import GetByHash from './GetByHash'
import HtmlClass from './HtmlClass'
import Interval from './Interval'
import Ios from './Ios'
import IsDev from './IsDev'
import Mount from './Mount'
import Mounted from './Mounted'
import Nl2Br from './Nl2Br'
import PageId from './PageId'
import Previous from './Previous'
import Process from './Process'
import Query from './Query'
import ScrollTo from './ScrollTo'
import SetState from './SetState'
import Sleep from './Sleep'
import Toggle from './Toggle'
import WindowDimensions from './WindowDimensions'

const Title = ({ children }) => (
  <div id={children} style={{ width: '100%' }}>
    <h1>{children}</h1>
  </div>
)

const Example = () => (
  <React.Fragment>
    <Title>Utils</Title>
    <Sleep />
    <Clipped />
    <FileToBase />
    <GetByHash />
    <ScrollTo />
    <IsDev />
    <Ios />
    <Nl2Br />
    <Title>Hooks</Title>
    <HtmlClass />
    <WindowDimensions />
    <Previous />
    <Toggle />
    <SetState />
    <Process />
    <Query />
    <Interval />
    <Mount />
    <Mounted />
    <PageId />
  </React.Fragment>
)

export default Example
