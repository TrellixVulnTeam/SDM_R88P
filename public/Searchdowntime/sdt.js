/*global angular*/
var app = angular.module('sdt', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider.when('/sdt', {
        templateUrl: 'searchdowntime/sdt.html',
        controller: 'sdtCtrl',
        resolve: {
      // controller will not be loaded until $waitForSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the factory below
      "currentAuth": ["Auth", function(Auth) {
        // $waitForSignIn returns a promise so the resolve waits for it to complete
        return Auth.$requireSignIn();
      }]
    }
    });
}]);

app.controller('sdtCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
    'use strict';
    
    $('#remove').datetimepicker('remove');
        
    //export Canvas to PDF
    $('#month').datetimepicker({
        //language:  'fr',
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1,
        format: 'MM yyyy',
        startView: 4,
        minView: 3,
        endDate: '+0d'
    });
    
    $('#year').datetimepicker({
        //language:  'fr',
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1,
        format: 'yyyy',
        startView: 4,
        minView: 4,
        endDate: '+0d'
    });
    
    $('#day').datetimepicker({
//        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
        endDate: '+0d'
    });
    
    
    
    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1,
        orientation: "top left"
    });
	$('.form_date').datetimepicker({
//        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
//        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
    });
    
    //////////Disable datetimepicker
    
//    $scope.disableYear = false;
//    $scope.disableMonth = false;
//    $scope.disableDay = false;
//    
//    if ($scope.yearFilter === undefined){
//        $scope.disableMonth = false;
//        $scope.disableDay = false;
//    } else {
//        $scope.disableMonth = true;
//        $scope.disableDay = true;
//    }
    
//    $(document).ready(function () {
//    
//
//        $('#datetimepicker2').datetimepicker({
//            viewMode: 'years'
//        }); 
//        
//        $('#datetimepicker10').datetimepicker({
//                viewMode: 'years',
//                format: 'MM/YYYY'
//            });
//        
//        $('#datetimepicker11').datetimepicker({
//                viewMode: 'years',
//                format: 'YYYY'
//            });
//        
//        $("#datetimepicker11").on("dp.change", function() {
//
//        $scope.yearFilter = $("#datetimepicker11").val();
//
//    });
//        
//        $("#datetimepicker10").on("dp.change", function() {
//
//        $scope.monthFilter = $("#datetimepicker10").val();
//
//    });
//        
//        $("#datetimepicker2").on("dp.change", function() {
//
//        $scope.dateFilter = $("#datetimepicker2").val();
//
//    });
//});
//      
}]);