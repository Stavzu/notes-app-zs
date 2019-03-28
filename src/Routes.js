import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './containers/home/Home'
import Layout from './hoc/Layout'
import Note from './containers/notes/Note'
import EditNote from './containers/notes/EditNote'
import AddNote from './containers/notes/AddNote'


const Routes = () => {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/notes/add" exact component={AddNote} />
            <Route path="/notes/:id" exact component={Note} />
            <Route path="/notes/edit/:id" exact component={EditNote} />
        </Switch>
      </Layout>
    );
};

export default Routes