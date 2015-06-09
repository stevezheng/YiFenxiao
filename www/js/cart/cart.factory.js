(function () {
  'use strict';

  angular
    .module('cart.factory', [])
    .factory('Cart', Cart);

  Cart.$inject = [];

  /* @ngInject */
  function Cart() {
    var list = [];
    return {
      add: add
      , all: all
    };

    ////////////////

    function add(item) {
      list.push(item);
      return list;
    }

    function all() {
      return list;
    }
  }
})();
