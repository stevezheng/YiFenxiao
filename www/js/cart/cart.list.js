(function () {
  'use strict';

  angular
    .module('cart.list', [])
    .controller('CartListCtrl', CartListCtrl);

  CartListCtrl.$inject = ['$scope', 'Cart'];

  /* @ngInject */
  function CartListCtrl($scope, Cart) {
    $scope.init = init;
    $scope.data = [];

    init();

    ////////////////

    function init() {
      $scope.data = Cart.sort();
    }
  }
})();
