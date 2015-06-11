(function () {
  'use strict';

  angular
    .module('item.list', [])
    .controller('ItemListCtrl', ItemListCtrl);

  ItemListCtrl.$inject = ['$rootScope', '$scope', 'Cart'];

  /* @ngInject */
  function ItemListCtrl($rootScope, $scope, Cart) {
    $scope.init = init;
    $scope.query = query;
    $scope.addToCart = addToCart;

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

    function addToCart(item) {
      var list = Cart.add(item);
      $rootScope.cartCount = list.length;
    }
  }
})();