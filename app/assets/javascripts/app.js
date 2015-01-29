var app;
app = angular.module('app', ["ui.router","ngRoute", "ngResource", "Devise","app.services", "kendo.directives"]);

app.config(['$routeProvider', '$locationProvider', '$stateProvider','AuthInterceptProvider',
function($routeProvider, $locationProvider, $stateProvider,AuthInterceptProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/contactsNew', {
		templateUrl : 'assets/contacts/new.html',
		controller : 'newContactCtrl'
	}).when('/contacts/new', {
		templateUrl : 'assets/contacts/new.html',
		controller : 'newContactCtrl'
	}).when('/', {
		templateUrl : 'assets/events/index.html',
		controller : 'newContactCtrl'
	}).when('/contacts/:id', {
		templateUrl : 'assets/contacts/show.html',
		controller : 'contactShowCtrl'
	}).when('/contacts/', {
		templateUrl : 'assets/contacts/index.html',
		controller : 'contactHomeCtrl'
	}).when('/contacts/:id/edit', {
		templateUrl : 'assets/contacts/edit.html',
		controller : 'contactEditCtrl'
	}).when('/users/sign_in', {
		templateUrl : 'assets/auth/login.html',
		controller : 'AuthCtrl',
	}).when('/login', {
		templateUrl : 'assets/auth/login.html',
		controller : 'AuthCtrl',
	}).when('/register', {
		templateUrl : 'assets/auth/register.html',
		controller : 'AuthCtrl',
	}).otherwise({
		redirectTo : '/books/new'
	});
	
	 // Intercept 401 Unauthorized everywhere
     AuthInterceptProvider.interceptAuth(true);
        
}]);

/*
 app.state('login', {
 url : '/login',
 templateUrl : 'auth/_login.html',
 controller : 'AuthCtrl'
 }).state('register', {
 url : '/register',
 templateUrl : 'auth/_register.html',
 controller : 'AuthCtrl'
 });

 window.AppCtrl = ['$scope','security', function($scope, security) {
 console.log('In AppCtrl');
 $scope.debug = false;
 $scope.isAuthenticated = security.isAuthenticated;
 }];
 */
