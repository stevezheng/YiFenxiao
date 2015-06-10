(function () {
  'use strict';

  angular
    .module('order.list', [])
    .controller('OrderListCtrl', OrderListCtrl);

  OrderListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function OrderListCtrl($scope) {
    $scope.init = init;
    $scope.data = [];
    $scope.cUser = AV.User.current();


    init();

    ////////////////

    function init() {
      query();
    }

    function query() {
      D('order')
        .where({user: AV.User.current()})
        //.include(['item'])
        .select()
        .then(function(data) {
          $scope.data = data;
          $scope.$digest();
        });
    }
  }
})();
