(function () {
  'use strict';

  angular
    .module('item.detail', [])
    .controller('ItemDetailCtrl', ItemDetailCtrl);

  ItemDetailCtrl.$inject = ['$scope', '$stateParams'];

  /* @ngInject */
  function ItemDetailCtrl($scope, $stateParams) {
    $scope.data = [];
    $scope.init = init;
    $scope.query = query;

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
  }
})();
