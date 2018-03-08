
import angular from 'angular';
import ngRoute from 'angular-route';
import ui_bootstrap from './libs/ui-bootstrap-custom-tpls-2.5.0.min.js'

const ngModule = angular.module('joApp', ['ngRoute', 'ui.bootstrap']);

import dirs from './directives';
dirs(ngModule)

import routerConfig from './route.config';
import HomeController from './controllers/home/home.controller';
import sec2minFilter from './filters/sec2min.filter.js';



ngModule.config(routerConfig)
		.controller('HomeController')
		.filter('sec2min', () => sec2minFilter)

// import homeConfig from './controllers/home.config'
// ngModule.config(homeConfig)