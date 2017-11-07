// Angular JS Code
import angular from 'angular';
var app = angular.module('randomForm',[]);
//Getform controller

app.controller('getFormCtrl',function($scope ,$http, $log){

  //fetch response on click
 $scope.clickButton = function(){
   $http.get("https://randomform.herokuapp.com")
   .then(function(response){
       //storing the response
        $scope.form_dt = response;
        //log the response
        $log.info(response);

   },
  function(response){
  //Handles Error
   $scope.form = "Something Went Wrong";
 })}

});
