(function(){
	angular.module('joApp', ['ngRoute'])
		.directive('joheader', joheader)

	function joheader(){
		return {
			restrict: 'EA',
			templateUrl: 'common/directives/joheader.template.html'
		}
	}
})()