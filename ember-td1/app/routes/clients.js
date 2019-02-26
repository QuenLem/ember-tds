import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {nom: "Valdentin", age: 20, details: "rappeur dut info"},
      {nom: "Melo", age: 20, details: "Enculé"},
      {nom: "Adama", age: 20, details: "from Dkr"}
    ];
  }
});
