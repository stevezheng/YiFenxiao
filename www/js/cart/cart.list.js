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
    $scope.minus = minus;
    $scope.plus = plus;

    init();

    ////////////////

    function init() {
      if (!AV.User.current()) {
        $scope.login();
      }

      $scope.cUser = AV.User.current();
      $scope.data = Cart.sort();
    }

    function minus(d) {
      if (d.count > 0) {
        d.count--;
      }
    }

    function plus(d) {
      d.count++;
    }
  }
})();
