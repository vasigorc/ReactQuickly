const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const History = require('history')

const Home = require('./home.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')
const { withRouter } = require('react-router')

const posts = require('../posts.js')

let {
  Router,
  Route
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} >
      <Route path="/posts" component={Posts} posts={posts} />
      <Route path="/posts/:id" component={Post} posts={posts} />
    </Route>
  </Router>
), document.getElementById('content'))