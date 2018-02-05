'use strict';
import connectionTab from './lib/connectionTab.js';
require('./lib/selectize.jquery.js');

let selectizeOptions = {
  onFocus: function(){
    $(this.$input[0]).parents('.s-form__group').addClass('s-form__group--active');
  },
  onBlur: function() {
    $(this.$input[0]).parents('.s-form__group').removeClass('s-form__group--active');
  }
};

$('.s-form__select').selectize(selectizeOptions);
connectionTab.init();