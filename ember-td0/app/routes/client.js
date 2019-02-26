import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom: 'Smith',age:18,
      details: "Détails de Smith"
    };
  }
});
