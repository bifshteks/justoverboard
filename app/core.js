// (function(){
 

//     // function config($routeProvider){
//     //     $routeProvider
//     //         .when('/', {
//     //             templateUrl: 'home/home.view.html',
//     //             controller: 'homeController',
//     //             // controllerAs: 'vm'
//     //         })
//     //         .otherwise({redirectTo: '/'})
//     // }

// class homeController {
//     constructor($scope, $http) {
//         this.test = 'qweqweqwe'
//         // this.trks = this.init($scope, $http);
//     }


//     // init($scope, $http){
//     //     return (async function(){

//     //             try {
//     //                 $scope.tracks = await $http.get('/api/tracks')
//     //                 console.log(tracks)
//     //                 return tracks
//     //             } catch(err) {
//     //                 console.log('Error get: ', err)
//     //             }      
//     //         })()
//     // }
// }


//     // function _isNumeric(n){
//     //     return !isNaN(parseFloat(n)) && isFinite(n)
//     // }

//     // function timeNormalize(){
//     //     return function(timeInSec){
//     //         if ( timeInSec && _isNumeric(timeInSec)){
//     //             var sec = timeInSec % 60
//     //             console.log(sec)
//     //             sec = sec === 0 ? sec + '0' : sec
//     //             console.log(sec) 
//     //             var timeNormalDisplay = Math.floor(timeInSec / 60) + ':' + sec;
//     //             return timeNormalDisplay
//     //         }
//     //     }
//     // }

//     // function russianCurrency(){
//     //     return function(cost){
//     //         return cost + '&#8381;'
//     //     }
//     // }



//     angular.module('joApp', ['ngRoute'])
//         // .filter('timeNormalize', timeNormalize)
//         // .filter('russianCurrency', russianCurrency)
//         .controller('homeController', homeController)
//         // .config(['$routeProvider', config]);
// })()

import  angular from 'angular';
import ngRoute   from 'angular-route';
// const angular = require('angular');
const ngModule = angular.module('joApp', ['ngRoute']);

import dirs from './directives';
dirs(ngModule)

import routerConfig from './route.config';
import HomeController from './controllers/home/home.controller';

ngModule.config(routerConfig)
		.controller('HomeController')

// import homeConfig from './controllers/home.config'
// ngModule.config(homeConfig)