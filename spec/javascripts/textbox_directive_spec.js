// var angular = require('./app/assets/javascripts/angular/angular.js');
// var app = require('./app/assets/javascripts/directives/app.js');
//var app = angular.app
describe('Sample Directive', function(){
  var injector;
  var element;
  var scope;

  beforeEach(function() {
    /// Create a new dependency injector using the 'myApp' module
    injector = angular.injector(['app']);

    injector.invoke(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
	  element = $compile('<sampledir></sampledir>')(scope);
      scope.$digest();
    });
    //return element;
  });

  
    it('should return Sample directive', function(){
      expect(element.text()).to.equal('This is a sample Directive');
      var innerEle = element.find('p');
      expect(innerEle).to.be.defined;
    });
 
});


describe('Text Box Directive', function(){
  var injector;
  var element;
  var scope;

  beforeEach(function() {
    /// Create a new dependency injector using the 'myApp' module
    injector = angular.injector(['app']);

    injector.invoke(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
	  element = $compile('<text-box labelname="Name" user-role="Admin" isrequired="true" value="Sriram"></text-box>')(scope);
      scope.$digest();
    });
  });

  
    it('should return Sample directive', function(){
    	expect(element.find('label')).to.be.defined;
    	expect(element.find('input[type="text"]')).to.be.defined;
    	expect(element.find('input')[0].getAttribute('required')).to.equal('true');
    });
 
});