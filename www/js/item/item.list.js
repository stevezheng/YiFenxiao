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
    }

    function query() {
      D('item')
        .where({status: 1})
        .select()
        .then(function(data) {
          $scope.data = data;
          $scope.$digest();
        });
    }
  }
})();