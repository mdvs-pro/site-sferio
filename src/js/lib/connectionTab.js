'use strict';
var connectionTab = {
  className: '.js-connection-tab',
  clickableEl: '.connection__item',
  imageClass: '.connection__image',
  activeClass: 'connection__item' + '--active',
  activeClassImages: 'connection__image' + '--active',
  init: function(){
    this.elemenets = $(this.className).find(this.clickableEl);
    this.images = $(this.className).find(this.imageClass);
    
    this.elemenets.each((i,el)=>{
      $(el).on('click', ()=>{this.changeTab(i)})
      console.log($);
    });
  },
  changeTab: function(index) {
    this.deactiveAll();
    this.activateTab(index);
  },
  activateTab: function(index){
    this.elemenets.eq(index).addClass(this.activeClass);
    this.images.eq(index).addClass(this.activeClassImages);
  },
  deactiveAll: function() {
    this.elemenets.removeClass(this.activeClass);
    this.images.removeClass(this.activeClassImages);
  }
}
module.exports = connectionTab;