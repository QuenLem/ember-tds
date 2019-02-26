import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ex1');
  this.route('client');
  this.route('client-d');
  this.route('clients');
  this.route('user');
  this.route('ex2');
});

export default Router;
