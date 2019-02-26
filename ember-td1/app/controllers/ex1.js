import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      alert("Sauvegarde : " + note.get('content'));
      note.set('info','note sauvegardée')
    },
    clear(note){
      note.set('content','');
      note.set('info','note effacée')
    }

  }
});
