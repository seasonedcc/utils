import React from 'react'
import Clipped from 'helpers/Clipped'
import FileToBase from 'helpers/FileToBase'
import GetByHash from 'helpers/GetByHash'
import HtmlClass from 'hooks/HtmlClass'
import Interval from 'hooks/Interval'
import Ios from 'helpers/Ios'
import IsDev from 'helpers/IsDev'
import Mount from 'hooks/Mount'
import Mounted from 'hooks/Mounted'
import Nl2Br from 'helpers/Nl2Br'
import PageId from 'hooks/PageId'
import Previous from 'hooks/Previous'
import Process from 'hooks/Process'
import Query from 'hooks/Query'
import ScrollAfter from 'hooks/ScrollAfter'
import ScrollTo from 'helpers/ScrollTo'
import SetState from 'hooks/SetState'
import Sleep from 'helpers/Sleep'
import Toggle from 'hooks/Toggle'
import WindowDimensions from 'hooks/WindowDimensions'
import Title from './Title'

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
