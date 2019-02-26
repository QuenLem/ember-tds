import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note= EmberObject.extend({
  content:'',
  MAX: 100,
  size: computed('content',function () {
    this.set('info', null);
    return this.MAX-this.content.length;
  })
});
export default Route.extend({
  model(){
    return Note.create();
  }

});
