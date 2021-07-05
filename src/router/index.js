import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UsersContainer from '../features/Users/Container';
import UserProfile from '../features/UserProfile/Container';
import Header from "../common/components/Header";
import {
    USERS_LIST_ROUTE,
    USER_PROFILE_ROUTE
} from "../constants";

const Router = () => {
    return (
        <BrowserRouter>
            <Route render={() => <Header />} />
            <Switch>
                <Route path={USERS_LIST_ROUTE} exact component={UsersContainer} />
                <Route path={USER_PROFILE_ROUTE} exact component={UserProfile} />
            </Switch>
        </BrowserRouter>
    )
}

export { Router }
