app.controller('contactShowCtrl', ['$scope', '$routeParams', '$http', '$location', 'Auth','ContactService', '$rootScope',
function($scope, $routeParams, $http, $location, Auth,ContactService, $rootScope) {
	Auth.currentUser().then(function(user) {
		console.log(user);
	}, function(error) {
		console.log('Not Authenticated');
	});

	// Using service to get data
	ContactService.showContact($routeParams.id).then(
		function(response){
			$scope.contact = response;
			console.log('Root Scope var '+$rootScope.count);
			$rootScope.count += 1;
			console.log('After Root Scope var '+$rootScope.count);
		},
		function(response){
			if(response.error == 'Server Error') {
				alert('Server Error');
			} 
			else if (response.error == 'Validation Error'){
				alert('Validation Error');
			}	
		});

	// Below code is commented as Service has been used above.
	// $http({
	// 	method : 'GET',
	// 	url : '/contacts/' + $routeParams.id + '.json',
	// }).success(function(response) {
	// 	console.log(response);
	// 	$scope.contact = response;
	// }).error(function(data, status, headers, config) {
	// 	console.log(data);
	// });
}]);


app.controller('contactEditCtrl', ['$scope', '$routeParams', '$http', '$location', 'Auth', 'Contact', '$rootScope',
function($scope, $routeParams, $http, $location, Auth, Contact, $rootScope) {
	console.log('In Edit ctrl Root Scope var '+$rootScope.count);
	$rootScope.count += 1;
	$scope.contact = Contact.get({
		id : $routeParams.id
	});

	// $scope.contact = new Contact();
	//updateContact = this.contact;

	$scope.submitContact = function() {
	/*
		$http({
			method : 'PUT',
			url : '/contacts/' + $routeParams.id + '.json',
			data : {
				contact : {"mobile_num" : $scope.contact.mobile_num}
			}
		}).success(function(response) {
			console.log(response);
			$location.path("/contacts/" + $routeParams.id);
		}).error(function(data, status, headers, config) {
			console.log(data);
		});
 	*/
		 Contact.update({
			 id : $routeParams.id
		}, $scope.contact, function(response) {
			 			console.log(response);
			 			$location.path('/contacts/' + $routeParams.id);
		 		});
		
	};
}]);

app.controller('newContactCtrl', ['$scope', '$routeParams', '$http', '$location', 'Auth', 'Contact',
function($scope, $routeParams, $http, $location, Auth, Contact) {
	console.log('newContactCtrl');
	Auth.currentUser().then(function(user) {
		console.log(user);
	}, function(error) {
		console.log('/');
	});

	$scope.contact = new Contact({
		"name": "",
		"mobile_num": ""
	});

	$scope.submitContact = function() {
		newContact = this.contact;
		console.log(newContact);
		Contact.save(newContact, function(response) {
			$location.path('/');
		});
	};

	
	$scope.getSeries = function (series) {
		if ($scope.contact.mobile_num) {
			var series = $scope.contact.mobile_num.substr(0,4);
			if ( series== "9963") {
				$scope.contact.name = "AIRTEL AP"
			}else if (series == "9952") {
				$scope.contact.name = "AIRTEL TN"
			}else if (series == "9912") {
				$scope.contact.name = "IDEA AP"
			}else {
				$scope.contact.name = "";	
			}
		}else {
			$scope.contact.name = "";
		}								
	}

	$scope.$watch(function () {
		return $scope.contact.mobile_num;
	}, $scope.getSeries); 

}]);

app.controller('navigationCtrl', ['$scope', '$routeParams', '$http', '$location',
function($scope, $routeParams, $http, $location) {
	console.log('navigationCtrl');
}]);

app.controller('contactHomeCtrl', ['$scope', '$http', '$resource',
function($scope, $http, $resource) {
	$scope.mainGridOptions = {
		toolbar : ['excel'],
		excel : {
			fileName : 'Kendo UI Grid Export.xlsx',
			//proxyURL : "http://demos.telerik.com/kendo-ui/service/export",
			filterable : true
		},
		dataSource : {
			type : 'odata',
			transport : {
				read : {
					url : '/contacts/get_all_contacts.json',
					dataType : 'json'
				}
			},
			pageSize : 20,
			schema : {
				data : 'results',
				total : 'pageSize'
			}
		},

		height : 550,
		groupable : true,
		sortable : true,
		pageable : {
			refresh : true,
			pageSizes : true,
			buttonCount : 5
		},
		columns : [{
			field : 'name',
			title : 'Name',
			width : '200px'
		}, {
			field : 'mobile_num',
			title : 'mobile_num',
			width : '200px'
		}, {
			field : 'status',
			title : 'status',
			width : '200px'
		}, {
			field : 'city',
			title : 'city',
			width : '200px'
		}, {
			field : 'membership',
			width : 150
		}, {
			field : 'URL',
			template : '<a class="btn btn-primary" href="/contacts/#=id#/edit">Edit</a>',
			title : ' ',
			width : '100px'
		}, {
			field : 'URL',
			template : '<a class="btn btn-primary" href="/contacts/#=id#/">View Details</a>',
			title : ' ',
			width : '100px'
		}]
	};

}]);
