Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function(){
      alert('Harry. His real name is Harry.');
    },
    showPicture: function(){
      this.set('isPictureShowing', true);
    },
    hidePicture: function(){
      this.set('isPictureShowing', false);
    }
  }
});
