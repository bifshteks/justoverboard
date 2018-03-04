import HomeController from './controllers/home/home.controller';

export default function routerConfig ($provide, $routeProvider) {
  $provide.factory('$routeProvider', function () {
      return $routeProvider;
  });

  $routeProvider
    .when('/', {
      name: 'home',
      templateUrl: './controllers/home/home.view.html',//HomeController.getTemplateUrl(),
      controllerAs: 'controller',//HomeController.getControllerTemplateName(),
      controller: HomeController,
    })
    .otherwise({
      redirectTo: '/'
    });
}

