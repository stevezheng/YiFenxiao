(function () {
  'use strict';

  angular
    .module('order.add', [])
    .controller('OrderAddCtrl', OrderAddCtrl);

  OrderAddCtrl.$inject = ['$rootScope', '$scope', 'Address', 'Cart', '$yikeUtils', '$state', '$ionicHistory'];

  /* @ngInject */
  function OrderAddCtrl($rootScope, $scope, Address, Cart, $yikeUtils, $state, $ionicHistory) {
    $scope.init = init;
    $scope.pay = {
      method: 'offline'
    };
    $scope.add = add;

    init();

    ////////////////

    function init() {
      Address.own()
        .then(function(addresses) {
          if (!Address.current || Address.current === '') {
            $scope.currentAddress = '请选择地址';
            Address.current = '请选择地址';
          } else {
            $scope.currentAddress = Address.current;
          }
          $scope.addresses = addresses;
          $scope.$digest();
        });
    }

    function add() {
      if ($scope.currentAddress === '请选择地址') {
        $yikeUtils.alert('提示', '请先选择地址');
        return false;
      }

      var price = 0;
      var currentAddress = $scope.currentAddress.get('address')
        , payMethod = $scope.pay.method
        , items = Cart.sort();
      if (items.length === 0) {
        $yikeUtils.alert('提示', '请先选择要购买的产品');
        return false;
      }

      if (payMethod === 'online') {
        $yikeUtils.alert('提示', '线上支付即将开启，敬请期待');
        return false;
      } else {
        var _items = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var _item = {
            id: item.id
            , name: item.get('name')
            , count: item.count
            , price: item.get('price')
            , totalPrice: Number(item.count * item.get('price')).toFixed(2)
          };
          price += _item.totalPrice;
          _items.push(_item);
        }

        D('order')
          .add({status: '下单成功', address: currentAddress, payMethod: payMethod, items: _items, price: price, user: AV.User.current()})
          .then(function() {
            $yikeUtils.alert('提示', '添加订单成功');

            $ionicHistory.nextViewOptions({
              disableBack: true
            });

            Cart.clear();
            $rootScope.cartCount = 0;

            $state.go('app.order');
          });
      }
    }
  }
})();