import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './Home'
import RealTeamSelect from './RealTeamSelect'
import CustomTeamSelect from './CustomTeamSelect'

export default() => (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/teamstats" exact component={RealTeamSelect} />
            <Route path="/customstats" exact component={CustomTeamSelect} />
        </div>
    </BrowserRouter>
);