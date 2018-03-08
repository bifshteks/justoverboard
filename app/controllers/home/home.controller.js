import ModalController from '../modal/modal.controller.js'


class HomeController {
    constructor($scope, $http, $document, $uibModal) {
        this.test = 'teststring'
        this.init($scope, $http);
        this.open = (trackName, trackID)=> this.popupOpen($uibModal, trackName, trackID)
    }


    init($scope, $http){
        var self = this;
 
        $http.get('/static/data/tracks.json').then(
            (resp)=>{
                $scope.tracks = resp.data
            }, 
            (err)=>{
                console.log(err)
            })
    }

    popupOpen($uibModal, trackName, trackID) {

        console.log('trk name', trackName, trackID)
        var parentElem = undefined;
        var modalInstance = $uibModal.open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './controllers/modal/modal.template.html',
            controller: ModalController,
            controllerAs: '$ctrl',
            size: 'lg',
            appendTo: parentElem,

            resolve: {
                trackName: ()=>trackName,
                trackID: ()=>trackID
                    
            }
        });


        // обработка причин закрытия окна - нажатие "выход" или "принятие"
        modalInstance.result.then(
            (smth)=>{console.log('smth', smth)}, 
            (err)=>{console.log('err', err)}
        )


    }
}

export default HomeController








// angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
//   var $ctrl = this;
//   $ctrl.items = ['item1', 'item2', 'item3'];

//   $ctrl.animationsEnabled = true;

//   $ctrl.open = function () {
//     var parentElem = undefined;
//     var modalInstance = $uibModal.open({
//         animation: $ctrl.animationsEnabled,
//         ariaLabelledBy: 'modal-title',
//         ariaDescribedBy: 'modal-body',
//         templateUrl: '../modal/modal.template.html',
//         controller: ModalController,
//         controllerAs: '$ctrl',
//         size: 'lg',
//         appendTo: parentElem,

//     });

//     modalInstance.result.then(function () {
//         console.log('modalInstance then')
//     }, function () {
//         console.info('Modal dismissed at: ' + new Date());
//     });
//   };

  

  

  
// });

// // Please note that $uibModalInstance represents a modal window (instance) dependency.
// // It is not the same as the $uibModal service used above.

// angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance) {
//   var $ctrl = this;


//   $ctrl.ok = function () {
//     $uibModalInstance.close();
//   };

//   $ctrl.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });

// // Please note that the close and dismiss bindings are from $uibModalInstance.

// angular.module('ui.bootstrap.demo').component('modalComponent', {
//   templateUrl: 'myModalContent.html',
//   bindings: {
//     resolve: '<',
//     close: '&',
//     dismiss: '&'
//   },
//   controller: function () {
//     var $ctrl = this;

//     $ctrl.ok = function () {
//       $ctrl.close();
//     };

//     $ctrl.cancel = function () {
//       $ctrl.dismiss({$value: 'cancel'});
//     };
//   }
// });