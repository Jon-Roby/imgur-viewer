var React = require('react');
var ReactRouter = require('react-router'); /* actual library */
var HashHistory = require('react-router/lib/hashhistory'); /* an object tells router how to keep track of which page user is on */
var Router = ReactRouter.Router; /* actual router that decides which content is on the page at a given time */
var Route = ReactRouter.Route; /* object used to configure router */

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
)

// topics/asdf => Inside Topic, this.props will contain an id "asdf"
// topics/2 => Inside Topic, this.props will contain id: "2"
