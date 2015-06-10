(function () {
  'use strict';

  angular
    .module('address.factory', [])
    .factory('Address', Address);

  Address.$inject = [];

  /* @ngInject */
  function Address() {
    var current;

    return {
      query: query
      , add: add
      , own: own
      , current: current
    };

    ////////////////

    function query(where, page, num) {
    }

    function add(data) {
      return D('address')
        .add({address: data, user: AV.User.current(), status: 1});
    }

    function own() {
      return D('address')
        .where({user: AV.User.current()})
        .select();
    }
  }
})();