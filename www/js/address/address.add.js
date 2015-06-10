(function () {
  'use strict';

  angular
    .module('address.add', [])
    .controller('AddressAddCtrl', AddressAddCtrl);

  AddressAddCtrl.$inject = ['$ionicHistory', '$scope', 'Address', '$yikeUtils'];

  /* @ngInject */
  function AddressAddCtrl($ionicHistory, $scope, Address, $yikeUtils) {
    $scope.init = init;
    $scope.add = add;
    $scope.data = {};

    init();

    ////////////////

    function init() {
    }

    function add(data) {
      if (!data) {
        $yikeUtils.alert('提示', '请填写详细地址');
        return false;
      }

      if (!AV.User.current()) {
        $scope.login();
        return false;
      }

      Address
        .add(data)
        .then(function(address) {
          $yikeUtils.alert('提示', '添加地址成功');
          $ionicHistory.goBack();
        }, function(address, err) {
          $yikeUtils.alert('提示', '添加地址失败');
        });
    }
  }
})();