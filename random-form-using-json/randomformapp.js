// Angular JS Code
import angular from 'angular';
var app = angular.module('randomForm',[]);
//Getform controller

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
