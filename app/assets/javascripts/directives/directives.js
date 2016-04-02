//  Text Box Directive whcih will return a Label and a Text Box
app.directive('textBox', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			labelname: '@', // creates new directive level scope for labalename
			'userRole': '@',
			value: '='
		},
		template: function(elem, attrs) {
			// var textInpVal = attrs.value ? attrs.value : '';
			return '<div class="form-group"> <label>{{labelname}}<span class="redStar">*</span> </label> <div class="formInputWrap"><input class="form-control accessLevel" type="text" user-role="Admin" ng-click="textBoxClick($event)" ng-model="value" required="'+attrs.isrequired+'"/></div></div>';
		},
		// Attaching events to the DOM rendered by the directive
		link: function (scope, elem, attrs) {

			// Below code has been moved to directive's controller which is a better way.
			// elem.bind('click', function (){
			// 	elem.css('background-color', '#ccc');
			// 	console.log("Clicked the Text Box directive");
			// });

			// You can write events insie Link function
			// Here elem referes to angular element. Hence, you can do jQuery DOM ops directly.
			elem.bind('mouseover', function() {
        		elem.css('cursor', 'pointer');
  			});
		},
		controller: function ($scope) {
			$scope.textBoxClick = function (event) {

				// event.target return DOM element.
				// We need to convert it to JQLite element using angular.element and then perform DOM Ops
				angular.element(event.target).css('background-color', '#aaa');
				console.log("Clicked the Text Box directive");
			}
		}
	}
}).directive('userRole', function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			var role = scope.userRole;
			elem.attr('data-role', role);
			if (role != "Admin") {
				elem.attr('readOnly', 'true');
			}
		}
	}
}).directive('accessLevel', function () {
	return {
		restrict: 'C',
		link: function (scope, elem, attrs) {

			var role = attrs.userRole;
			className = ((role == "Admin") ? "unrestricted" : "restricted");

			// addng desied class based on logic
			elem.addClass(className);
		}
	}
}).directive('sampledir', function () {
	return {
		//restrict: 'E',
		transclude: true,
		template: function(elem, attrs) {
			return '<p>This is a sample Directive</p>';
		}
	}
});