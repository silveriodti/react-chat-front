import React from 'react'
import { Route } from "react-router-dom"

//pages
import EpisodesList from './features/EpisodesList'
import Episode from './features/Episode'

function Routes() {
  return (
    <>
      <Route exact path={'/'} component={EpisodesList} />
      <Route exact path={'/:id'} component={Episode} />
    </>
  )
}

export default Routes