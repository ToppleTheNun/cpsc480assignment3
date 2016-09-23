(function() {
  'use strict';

  angular.module('cpsc480assignment3')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    vm.data = {
      number1: [0, 0, 0, 0],
      number2: [0, 0, 0, 0],
      sum: [0, 0, 0, 0],
      product: [0, 0, 0, 0],
      average: [0, 0, 0, 0]
    };

    vm.sum = sum;
    vm.product = product;
    vm.average = average;
    vm.update = update;

    activate();

    function activate() {
    }

    function sum(arr) {
      var ret = 0;
      arr.forEach(function(val) {
        if (typeof val === 'number') {
          ret += val;
        }
      });
      return ret;
    }

    function product(arr) {
      var ret = 1;
      arr.forEach(function(val) {
        if (typeof val === 'number') {
          ret *= val;
        }
      });
      return ret;
    }

    function average(arr) {
      var ret = 0;
      arr.forEach(function(val) {
        if (typeof val === 'number') {
          ret += val;
        }
      });
      return ret / arr.length;
    }

    function update(index) {
      vm.data.sum[index] = sum([vm.data.number1[index], vm.data.number2[index]]);
      vm.data.product[index] = product([vm.data.number1[index], vm.data.number2[index]]);
      vm.data.average[index] = average([vm.data.number1[index], vm.data.number2[index]]);
    }
  }
})();
