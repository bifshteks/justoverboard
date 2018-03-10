// module.exports = function(ngModule){
// 	ngModule.directive('joplayer', joplayerFn)

// 	function joplayerFn(){
// 		return {
// 			restrict: 'EA',
// 			templateUrl: 'directives/joplayer/joplayer.template.html'
// 		}
// 	}
// }

class PlayerDirective {
    constructor() {
        this.restrict = 'EA'
        this.templateUrl = 'directives/joplayer/joplayer.template.html'
        this.scope = {}
    }

    controller() {
        
    }
}

export default PlayerDirective