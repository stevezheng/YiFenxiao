(function () {
  'use strict';

  angular
    .module('address.factory', [])
    .factory('Address', Address);

  Address.$inject = [];

  /* @ngInject */
  function Address() {
    return {
      query: query
      , add: add
    };

    ////////////////

    function query(where, page, num) {
    }

    function add(data) {
      return D('address')
        .add({address: data, user: AV.User.current(), status: 1});
    }
  }
})();