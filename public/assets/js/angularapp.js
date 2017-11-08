
var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when("/",{
        templateUrl : "../../templates/main.html"
    })
    .when("/randomform",{
        templateUrl : "../../templates/randomform.html",
        controller : "getFormCtrl"
    });
});

app.controller('getFormCtrl',function($scope ,$http, $log){
    
      //fetch response on click
     $scope.getForm = function(){
       $http.get("https://randomform.herokuapp.com")
       .then(function(response){
           //storing the response
        //  $scope.form_dt = response;
          $scope.fields = response.data.data.form_fields;
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