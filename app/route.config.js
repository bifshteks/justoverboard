import HomeController from './controllers/home/home.controller';
import CartController from './controllers/cart/cart.controller';

export default function routerConfig ($provide, $routeProvider, $locationProvider) {
  $provide.factory('$routeProvider', function () {
      return $routeProvider;
  });

  $routeProvider
    .when('/', {
      name: 'home',
      templateUrl: './controllers/home/home.view.html',
      controller: HomeController,
      controllerAs: 'controller'
    })
    .when('/cart', {
      name: 'cart',
      templateUrl: './controllers/cart/cart.view.html',
      controller: CartController,
      controllerAs: 'controller'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

