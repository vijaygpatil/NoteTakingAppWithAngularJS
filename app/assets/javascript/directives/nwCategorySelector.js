angular.module('NoteWrangler').directive('nwCategorySelector', function(Category){
	return {
		replace: true,
		restrict: 'E',
		templateUrl: '/assets/templates/directives/nwCategorySelector.html',
		link: function(scope, element, attrs){
			scope.categories = Category.query();
		}
	}
})