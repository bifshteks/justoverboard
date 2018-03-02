(function(){
	angular.module('joApp', ['ngRoute'])
		.directive('sidebar', sidebar)

	function sidebar(){
		return {
			restrict: 'EA',
			templateUrl: 'common/directives/sidebar.template.html'
		}
	}
})()