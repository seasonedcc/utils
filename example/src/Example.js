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
import ScrollAfter from './ScrollAfter'
import ScrollTo from './ScrollTo'
import SetState from './SetState'
import Sleep from './Sleep'
import Toggle from './Toggle'
import WindowDimensions from './WindowDimensions'

const Title = ({ children }) => (
  <div id={children} style={{ margin: '6rem 0 3rem', width: '100%' }}>
    <h1>{children}</h1>
  </div>
)

const Example = () => (
  <React.Fragment>
    <Title>Utils</Title>
    <div className="grid">
      <Sleep />
      <Clipped />
      <FileToBase />
      <GetByHash />
      <ScrollTo />
      <IsDev />
      <Ios />
      <Nl2Br />
    </div>
    <Title>Hooks</Title>
    <div className="grid">
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
      <ScrollAfter />
    </div>
  </React.Fragment>
)

export default Example
