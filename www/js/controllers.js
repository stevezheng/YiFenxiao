angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $yikeUtils, $state) {
    $scope.title = '用户登录';
    $rootScope.cartCount = 0;
  $rootScope.go = $yikeUtils.go;
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    AV.User.logIn($scope.loginData.username, $scope.loginData.password, {
      success: function (user) {
        $yikeUtils.alert('提示', '登录成功');
        $state.reload();
        $timeout(function () {
          $scope.closeLogin();
        }, 1000);
      },
      error: function (user, err) {
        console.log(err);
        if (err.code === 210) {
          $yikeUtils.alert('提示', '账号密码不正确');
        } else if (err.code === 211) {
          $yikeUtils.alert('提示', '找不到该用户');
        }
      }
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  };

    $scope.doReg= function() {
      if ($scope.loginData.username.length !== 11) {
        $yikeUtils.alert('提示', '请输入正确地手机号码');
        return false;
      }

      if (!$scope.loginData.password) {
        $yikeUtils.alert('提示', '请输入用户密码');
        return false;
      }

      var user = new AV.User();
      user.set('username', $scope.loginData.username);
      user.set('password', $scope.loginData.password);
      user.setMobilePhoneNumber($scope.loginData.username);


      user.signUp(null, {
        success: function(user) {
          $scope.title = '用户登录';
          $yikeUtils.alert('提示', '注册成功');
        },
        error: function(user, err) {
          if (err.code === 214) {
            $yikeUtils.alert('提示', '注册失败,该用户已存在');
          }
        }
      });
    };
});
