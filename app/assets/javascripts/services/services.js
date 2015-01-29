(function() {
	var app;
	app = angular.module('app.services', ['ngResource']);

	app.factory('Contact', ['$resource',
	function($resource) {
		var resource = $resource('/contacts/:id.json', null,
		  //{id: '@id'},
		  {
			query : {
				method : 'GET',
				params : {
					contactId : 'contacts'
				},
				isArray : true
			},
			index : {
				method : 'GET',
				isArray : true
			},
			get : {
				method : 'GET',
				params : {
					id : 'contact'
				}
			},
			save : {
				method : 'POST'
			},
			update : {
				method : 'PUT',
			},
			destroy : {
				method : 'delete',
			}
		});
		return resource;
	}]);

})();
