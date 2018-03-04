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
        this.tracks = this.init($scope, $http).then((data)=>(data));
        console.log(this.tracks)
    }


    async init($scope, $http){
        return 
        $http.get('/static/data/tracks.json').then(
                    (tracksJson)=>{ console.log('tracksJson')}, 
                    (err)=>console.log(err))

        // async function getTracks(url){
        //     try {
        //         var tracksJSON = await $http.get(url);
        //         var tracks = await JSON.parse(tracksJSON)
        //         console.log(tracks)
        //         return tracks
        //     } catch(err) {
        //         console.log('Error get: ', err)
        //     }    
        // }    



        // var result = await getTracks('/static/data/tracks.json')
        // await console.log('res', result)
        // return result
    }
}

export default HomeController