(function () {
  'use strict';

  angular
    .module('item.detail', [])
    .controller('ItemDetailCtrl', ItemDetailCtrl);

  ItemDetailCtrl.$inject = ['$rootScope', '$scope', '$stateParams', 'Cart'];

  /* @ngInject */
  function ItemDetailCtrl($rootScope, $scope, $stateParams, Cart) {
    $scope.data = [];
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
        .where({objectId: $stateParams.id})
        .find()
        .then(function(data) {
          $scope.data = data;
          $scope.$digest();
        });
    }

    function addToCart(item) {
      var list = Cart.add(item);
      $rootScope.cartCount = list.length;
      console.log(Cart.all());
    }
  }
})();
