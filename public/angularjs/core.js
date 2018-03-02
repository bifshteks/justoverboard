(function(){
    angular.module('joApp', ['ngRoute'])
        .filter('timeNormalize', timeNormalize)
        .filter('russianCurrency', russianCurrency)
        // .config(['$routeProvider', config]);

    function config($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'})
    }




    function _isNumeric(n){
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    function timeNormalize(){
        return function(timeInSec){
            if ( timeInSec && _isNumeric(timeInSec)){
                var sec = timeInSec % 60
                console.log(sec)
                sec = sec === 0 ? sec + '0' : sec
                console.log(sec) 
                var timeNormalDisplay = Math.floor(timeInSec / 60) + ':' + sec;
                return timeNormalDisplay
            }
        }
    }

    function russianCurrency(){
        return function(cost){
            return cost + '&#8381;'
        }
    }

})()