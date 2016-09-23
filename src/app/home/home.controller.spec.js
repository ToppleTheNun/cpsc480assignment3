(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('cpsc480assignment3'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));
  });
})();
