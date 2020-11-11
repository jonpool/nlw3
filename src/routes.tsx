import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import orphanagesMap from './pages/OrphanagesMap'
import createOrphanage from './pages/CreateOrphanage'
import Orphanage from './pages/Orphanage'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/app" component={orphanagesMap}/>
      <Route path="/orphanages/create" component={createOrphanage}/>
      <Route path="/orphanage/:id" component={Orphanage}/>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;