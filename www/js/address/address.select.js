(function () {
  'use strict';

  angular
    .module('address.select', [])
    .controller('AddressSelectCtrl', AddressSelectCtrl);

  AddressSelectCtrl.$inject = ['$scope', 'Address', '$yikeUtils', '$ionicHistory'];

  /* @ngInject */
  function AddressSelectCtrl($scope, Address, $yikeUtils, $ionicHistory) {
    $scope.init = init;
    $scope.qurey = query;
    $scope.select = select;
    $scope.cUser = AV.User.current();

    init();

    ////////////////

    function init() {
      query();
    }

    function query() {
      Address.own()
        .then(function(data) {
          console.dir(data);
          $scope.data = data;
        });
    }

    function select(d) {
      Address.current = d;
      //$yikeUtils.alert('提示', '选择地址成功');
      $ionicHistory.goBack();
    }
  }
})();