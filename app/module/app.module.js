'use strict';

var App = angular.module("myApp", ['ngRoute']);

App.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
  when('/homeview', {
    templateUrl: 'app/view/home.view.html',
    controller: 'homeCtrl'
  }).
  when('/home', {
    templateUrl: 'app/view/feedview.html',
    controller: 'FeedCtrl'
  }).
    when('/videoandtext', {
    templateUrl: 'app/view/videoandtext.html',
    controller: 'VtCtrl'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);

App.directive('mAccord', function(){
  return {
    restrict: 'AE',
    link: function(s, e, a){
      e.collapsible({accordion:false});
    }
  };
});

var homeCtrl = App.controller("homeCtrl", function($scope){	
});
 