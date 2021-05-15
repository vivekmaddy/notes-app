import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          
          <Route exact path="/" >
            <Home header_class_name="" nav_home_active="active"/>
          </Route>
          
          <Route exact path="/posts">
            <Home header_class_name="header-top" nav_post_active="active"/>
            <Posts />
          </Route>

          <Route exact path="/new">
            <Home header_class_name="header-top" nav_new_active="active"/>
            <CreatePost/>
          </Route>


        </Switch>
      </div>
    );
  }
}

export default App;