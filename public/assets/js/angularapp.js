import angular from 'angular';
import ngRoute from 'angular-route'; 

var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
   $routeProvider
    .when("/",{
        templateUrl : "../../templates/main.html"
    })
    .when("/randomform",{
        templateUrl : "../../templates/randomform.html",
        controller : "getFormCtrl"
    })
    .otherwise({
         redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
});

app.controller('getFormCtrl',function($scope ,$http, $log){
    
      //fetch response on click
     $scope.getForm = function(){
       $http.get("https://randomform.herokuapp.com")
       .then(function(response){
           //storing the response
        //  $scope.form_dt = response;
          $scope.fields = response.data.data.form_fields;
          $scope.text = response.data.data.form_fields.description;
          $scope.form_id = response.data.data.form_id;
          $scope.form_name = response.data.data.form_name;
        
            //log the response
            $log.info(response);
    
       },
      function(response){
      //Handles Error
       $scope.form = "Something Went Wrong";
     })}
    
    });