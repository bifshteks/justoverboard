angular.module('joApp', [])
    .controller('mainController', mainController)
    .filter('timeNormalize', timeNormalize)
    .filter('russianCurrency', russianCurrency)


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


function mainController($scope, $http) {
    
    // $scope.formData = {};
    // $scope.tracks = tracksArray;

    // when landing on the page, get all todos and show them




    $http.get('/api/tracks')
        .success(function(data) {
            $scope.tracks = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error get: ' + data);
        });


    // when submitting the add form, send the text to the node API
    $scope.createTrack = function() {
        console.log('op click')
        $http.post('/api/tracks', {name: $scope.songName})
            .success(function(data) {
                $scope.songName = 'done'; // clear the form so our user is ready to enter another
                $scope.tracks = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    // $scope.deleteTodo = function(id) {
    //     $http.delete('/api/todos/' + id)
    //         .success(function(data) {
    //             $scope.todos = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             console.log('Error: ' + data);
    //         });
    // };

}