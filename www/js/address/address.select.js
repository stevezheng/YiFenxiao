(function () {
  'use strict';

  angular
    .module('address.select', [])
    .controller('AddressSelectCtrl', AddressSelectCtrl);

  AddressSelectCtrl.$inject = ['$scope'];

  /* @ngInject */
  function AddressSelectCtrl($scope) {
    $scope.init = init;

    init();

    ////////////////

    function init() {
    }
  }
})();