(function () {
  'use strict';

  angular
    .module('cart.list', [])
    .controller('CartListCtrl', CartListCtrl);

  CartListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function CartListCtrl($scope) {
    $scope.init = init;
    $scope.query = query;

    init();

    ////////////////

    function init() {
      query();
    }

    function query() {
      D('item')
        .select()
        .then(function(data) {
          $scope.data = data;
          $scope.$digest();
        });
    }
  }
})();
