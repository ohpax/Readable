import React, { Component } from 'react';
import './App.css';
import PostShow from './PostShow'
import Posts from './Posts'
import CreatePost from './CreatePost'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (   
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <div> 
                <Posts></Posts>
              </div>
            )}/>
            <Route path="/posts/Create" component={CreatePost} />
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/:category" component={Posts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default  App;
