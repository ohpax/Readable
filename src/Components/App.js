import React, { Component } from 'react';
import './App.css';
import PostShow from './PostShow'
import Posts from './Posts'
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
            
            <Route path="/posts/:id" component={PostShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default  App;
