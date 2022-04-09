import React, { memo, Suspense } from 'react'
import  { renderRoutes } from 'react-router-config'

import routes from './router'

import HYAppHeader from './components/app-header'
import HYAppFooter from './components/app-footer'
import HYAppPlayerBar from './pages/player/app-player-bar'

const App = memo(() => {
  return (
    <div>
      <HYAppHeader />
      <Suspense fallback={<div>loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <HYAppFooter />
      <HYAppPlayerBar />
    </div>
  )
})

export default App