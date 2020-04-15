import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from 'views/Homepage';
import Notes from 'views/Notes';
import WeatherView from 'views/WeatherView';
import Currencies from 'views/Currencies';
import NotFound from 'views/NotFound';

const Root = () => {
    return (
        <Router>
            <MainTemplate>
                <Switch>
                    <Route exact path='/dashboard/' component={Homepage} />
                    <Route path='/notes' component={Notes} />
                    {/* <Route path='/weather' component={WeatherView} />
                    <Route path='/currencies' component={Currencies} /> */}
                    <Route path='*' component={NotFound} />
                </Switch>
            </MainTemplate>
        </Router>
    );
}

export default Root;