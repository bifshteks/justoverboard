// import BaseController from '../base.controller';


// export default class HomeController extends BaseController {
//   constructor (InjectedService) {
//     super();
//     this.InjectedService = InjectedService;
//   }


//   static getTemplateUrl() {
//     return 'app/controllers/compiler/compiler.html';
//   }
// }





class HomeController {
    constructor($scope, $http) {
        this.test = 'teststring'
        this.init($scope, $http);
    }


    async init($scope, $http){
        var self = this;
 
        $http.get('/static/data/tracks.json').then(
            (resp)=>{
                $scope.tracks = resp.data
            }, 
            (err)=>{
                console.log(err)
            })
    }
}

export default HomeController