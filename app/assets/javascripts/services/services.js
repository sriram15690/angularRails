(function() {
	var app;
	app = angular.module('app.services', ['ngResource']);


	// Using Factory to create RESTful Contact Data Model and interact with RESTful Server Side architecture.
	app.factory('Contact', ['$resource',
	function($resource) {
		var resource = $resource('/contacts/:id.json', null,
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
					method : 'PUT'
				},
				destroy : {
					method : 'delete'
				}
			});
		return resource;
	}]);

	// Using Angular Service to get Contact Data
	app.service('ContactService',['$http', '$q', function($http, $q){
		this.showContact = function(contactId){
			var self = this;
			var deffered = $q.defer();
			$http.get('/contacts/'+contactId+'.json').then(function(response) {
				if (self.validateContact(response.data)) {
					deffered.resolve(response.data);
				}else {
					deffered.reject({'error': 'Validation Failed'});	
				}
			}, 
				function(){
					deffered.reject({'error': 'Server Failed'});	
				});
			return deffered.promise;
		},
		this.validateContact = function(contact) {
			if (contact) {
				return true;
			}else {
				return false;
			}
		};
	}]);
})();




// Internally Javascript creates the below funciton for the save method.
// Contact.save = function (payload) {
// 	$.ajax({
// 	url: /contacts/:id
// 	type: "post",
// 	data: JSON.stringify(payload),
// 	success: funciton(response) {
// 				return response
// 			}
// 	error: funciton (response){
// 		return respinse;
// 	}
// 	});
// };



