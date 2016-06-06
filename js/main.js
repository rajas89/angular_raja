/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
 
app.config(['$routeProvider',  function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
	.when("/data", {templateUrl: "partials/campaign-list.html", controller: "ListCtrl"})
	.when("/add", {templateUrl: "partials/add_data.html", controller: "AddCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
	
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
app.controller('ListCtrl', function ($scope, $location, $http) {
		$scope.campaign={};
		var responsePromise = $http.get("http://192.168.100.150/api_json/admin/getkaryawan_api_angular");
		var x=0;
		responsePromise.success(function(data, status, headers, config) {
			$scope.campaign.list=data;
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed!");
		});
		$scope.myData = {};

});
/* app.controller('AddCtrl', function ($scope, $location, $http) {
	   $scope.myForm = {};
	   $scope.myForm.submitTheForm = function() {
       console.log("--> Submitting form");
       var dataObject = {
          nama : $scope.myForm.nama,
          umur : $scope.myForm.umur,
		  alamat : $scope.myForm.alamat
       };

	   var responsePromise =  $http.post("http://192.168.100.150/api_json/admin/insertdata_karyawan_angular",{'nama': $scope.myForm.nama, 'umur': $scope.myForm.umur, 'alamat': $scope.myForm.alamat})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
       responsePromise.success(function(data, status, headers, config) {
         
       });
        responsePromise.error(function(data, status, headers, config) {
          alert("gagal masuk");
       });
	} 

}); */

app.controller('AddCtrl',function($scope,$http,$location){	
    $scope.submitTheForm=function(){	
		var dataObject = {
          nama : $scope.myForm.nama,
          umur : $scope.myForm.umur,
		  alamat : $scope.myForm.alamat
       };
    $http.post("http://192.168.100.150/api_json/admin/insertdata_karyawan",{'nama': $scope.nama, 'umur': $scope.umur, 'alamat': $scope.alamat})
    
    .success(function(data,status,headers,config){
    console.log("Data Inserted Successfully");
    });
        }
/* 	$scope.processForm = function() {
	$http({
        method  : 'POST',
        url     : 'http://192.168.100.150/api_json/admin/insertdata_karyawan',
        data    : $.param($scope.formData),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
        .success(function(data) {
            console.log(data);

            if (!data.success) {
            	// if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
            	// if successful, bind success message to message
                $scope.message = data.message;
            }
        });
}; */
});