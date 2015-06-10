(function () {
  'use strict';

  angular
    .module('order.factory', [])
    .factory('Order', Order);

  Order.$inject = [];

  /* @ngInject */
  function Order() {
    return {
      query: query
      , add: add
    };

    ////////////////

    function query(where, page, num) {
    }

    function add(data) {

    }
  }
})();