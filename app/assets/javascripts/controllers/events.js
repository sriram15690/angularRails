// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

app.controller('MainHomeCtrl', ['$scope', '$routeParams', '$http', '$location','Auth',
function($scope, $routeParams, $http, $location,Auth) {
	$scope.newContactLnk = function() {
		console.log("csame in ng click");
		$location.path('contactsNew');
	};
	Auth.currentUser().then(function(user) {
		// User was logged in, or Devise returned
		// previously authenticated session.
		console.log(user);
		// => {id: 1, ect: '...'}
	}, function(error) {
		// unauthenticated error
		console.log("Not Authenticated");
	});
}]); 