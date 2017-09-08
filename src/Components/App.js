import React, { Component } from 'react';
import './App.css';
import PostsList from './PostsList'
import PostShow from './PostShow'
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {posts:[]}

  componentWillMount(){
    this.props.getPosts();
  }

  render() {
    if(!this.props.posts){
      return <div>Loading ...</div>
    }
    return (
     
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <div> 
                <div className="App-header">
                  <h2>Readable</h2>
                </div>
                <PostsList posts={this.props.posts}></PostsList>
              </div>
            )}/>

            <Route path="/posts/:id" component={PostShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  posts: state.posts
});
const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
