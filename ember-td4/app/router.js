import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit',{path:'edit/:developer_id'});
    this.route('delete');
  });
  this.route('delete-route');
  this.route('projects', function() {
    this.route('new');
    this.route('edit');
    this.route('delete');
  });
});

export default Router;
