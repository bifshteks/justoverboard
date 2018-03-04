module.exports = function(ngModule){
	ngModule.directive('joheader', joheaderFn)

	function joheaderFn(){
		return {
			restrict: 'EA',
			templateUrl: 'directives/joheader/joheader.template.html'
		}
	}
}