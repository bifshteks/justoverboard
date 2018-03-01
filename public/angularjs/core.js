var JOApp = angular.module('joApp', []);


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