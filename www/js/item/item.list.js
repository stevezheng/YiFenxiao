(function () {
  'use strict';

  angular
    .module('item.list', [])
    .controller('ItemListCtrl', ItemListCtrl);

  ItemListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function ItemListCtrl($scope) {
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