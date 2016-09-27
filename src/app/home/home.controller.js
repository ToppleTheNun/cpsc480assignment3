(function () {
  'use strict';

  angular.module('cpsc480assignment3')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, _) {
    var vm = this;

    vm.data = {
      number1: [0, 0, 0, 0],
      number2: [0, 0, 0, 0],
      sum: [0, 0, 0, 0],
      product: [0, 0, 0, 0],
      average: [0, 0, 0, 0]
    };
    vm.ascendSort = ['asc', 'asc', 'asc', 'asc', 'asc'];
    vm.currentSort = -1;

    vm.sum = sum;
    vm.product = product;
    vm.average = average;
    vm.update = update;
    vm.sortByNumber1 = sortByNumber1;
    vm.sortByNumber2 = sortByNumber2;
    vm.sortBySum = sortBySum;
    vm.sortByProduct = sortByProduct;
    vm.sortByAverage = sortByAverage;
    vm.randomizeData = randomizeData;

    activate();

    function activate() {
    }

    function sum(arr) {
      var ret = 0;
      arr.forEach(function (val) {
        if (typeof val === 'number') {
          ret += val;
        }
      });
      return ret;
    }

    function product(arr) {
      var ret = 1;
      arr.forEach(function (val) {
        if (typeof val === 'number') {
          ret *= val;
        }
      });
      return ret;
    }

    function average(arr) {
      var ret = 0;
      arr.forEach(function (val) {
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

    function sortByNumber1() {
      var sorted = _.orderBy(vm.data.number1, _.identity, vm.ascendSort[0]);
      vm.currentSort = 0;
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      vm.ascendSort[0] = (vm.ascendSort[0] === 'asc') ? 'desc' : 'asc';
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      $log.debug('sortByNumber1() - sorted: ', sorted);
      vm.data.number1 = sorted;
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }

    function sortByNumber2() {
      var sorted = _.orderBy(vm.data.number2, _.identity, vm.ascendSort[1]);
      vm.currentSort = 1;
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      vm.ascendSort[1] = (vm.ascendSort[1] === 'asc') ? 'desc' : 'asc';
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      $log.debug('sortByNumber2() - sorted: ', sorted);
      vm.data.number2 = sorted;
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }

    function sortBySum() {
      var combined = [];
      vm.data.sum.forEach(function (value, index) {
        combined.push({number1: vm.data.number1[index], number2: vm.data.number2[index], sum: value});
      });
      var sorted = _.orderBy(combined, _.property('sum'), vm.ascendSort[2]);
      vm.currentSort = 2;
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      vm.ascendSort[2] = (vm.ascendSort[2] === 'asc') ? 'desc' : 'asc';
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      $log.debug('sortBySum() - sorted: ', sorted);
      sorted.forEach(function (value, indexInSorted) {
        vm.data.number1[indexInSorted] = value.number1;
        vm.data.number2[indexInSorted] = value.number2;
        vm.data.sum[indexInSorted] = value.sum;
      });
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }

    function sortByProduct() {
      var combined = [];
      vm.data.product.forEach(function (value, index) {
        combined.push({number1: vm.data.number1[index], number2: vm.data.number2[index], product: value});
      });
      var sorted = _.orderBy(combined, _.property('product'), vm.ascendSort[3]);
      vm.currentSort = 3;
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      vm.ascendSort[3] = (vm.ascendSort[3] === 'asc') ? 'desc' : 'asc';
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      $log.debug('sortByProduct() - sorted: ', sorted);
      sorted.forEach(function (value, indexInSorted) {
        vm.data.number1[indexInSorted] = value.number1;
        vm.data.number2[indexInSorted] = value.number2;
        vm.data.product[indexInSorted] = value.product;
      });
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }

    function sortByAverage() {
      var combined = [];
      vm.data.average.forEach(function (value, index) {
        combined.push({number1: vm.data.number1[index], number2: vm.data.number2[index], average: value});
      });
      var sorted = _.orderBy(combined, _.property('average'), vm.ascendSort[4]);
      vm.currentSort = 4;
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      vm.ascendSort[4] = (vm.ascendSort[4] === 'asc') ? 'desc' : 'asc';
      $log.debug('vm.ascendSort[' + vm.currentSort + ']: ', vm.ascendSort[vm.currentSort]);
      $log.debug('sortByAverage() - sorted: ', sorted);
      sorted.forEach(function (value, indexInSorted) {
        vm.data.number1[indexInSorted] = value.number1;
        vm.data.number2[indexInSorted] = value.number2;
        vm.data.average[indexInSorted] = value.average;
      });
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }

    function randomizeData() {
      vm.data.number1 = _.map(vm.data.number1, function () {
        return Math.floor(Math.random() * 100);
      });
      vm.data.number2 = _.map(vm.data.number2, function () {
        return Math.floor(Math.random() * 100);
      });
      _.range(vm.data.number1.length).forEach(function (n) {
        update(n);
      });
    }
  }
})();
