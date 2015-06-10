(function () {
  'use strict';

  angular
    .module('user.factory', [])
    .factory('User', User);

  User.$inject = [];

  /* @ngInject */
  function User() {
    return {
      query: query
    };

    ////////////////

    function query(where, page, num) {
    }
  }
})();