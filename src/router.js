import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Arizona from './components/Arizona/Arizona';
import California from './components/California/California';
import Colorado from './components/Colorado/Colorado';
import Utah from './components/Utah/Utah';

export default (
    <Switch>
        <Route component={Landing} exact path='/' />
        <Route component={Arizona} path='/AZ'/>
        <Route component={California} path='/CA'/>
        <Route component={Colorado} path='/CO'/>
        <Route component={Utah} path='/UT'/>
    </Switch>
);