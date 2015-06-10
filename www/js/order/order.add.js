(function () {
  'use strict';

  angular
    .module('order.add', [])
    .controller('OrderAddCtrl', OrderAddCtrl);

  OrderAddCtrl.$inject = ['$scope', 'Address', 'Cart', '$yikeUtils', '$state', '$ionicViewService'];

  /* @ngInject */
  function OrderAddCtrl($scope, Address, Cart, $yikeUtils, $state, $ionicViewService) {
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
            $scope.currentAddress = addresses[0];
            Address.current = addresses[0];
          } else {
            $scope.currentAddress = Address.current;
          }
          $scope.addresses = addresses;
          $scope.$digest();
        });
    }

    function add() {
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
          price += Number(_item.price);
          _items.push(_item);
        }

        D('order')
          .add({status: '下单成功', address: currentAddress, payMethod: payMethod, items: _items, price: price, user: AV.User.current()})
          .then(function() {
            $yikeUtils.alert('提示', '添加订单成功');

            $ionicViewService.nextViewOptions({
              disableBack: true
            });

            $state.go('app.order');
          });
      }
    }
  }
})();