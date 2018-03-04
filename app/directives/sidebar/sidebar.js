module.exports = function(ngModule){
	ngModule.directive('sidebar', sidebarFn)

	function sidebarFn(){
		return {
			restrict: 'EA',
			templateUrl: 'directives/sidebar/sidebar.template.html'
		}
	}
}