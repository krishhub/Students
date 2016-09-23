/**
 * Created by kmeet on 14/08/16.
 */
var app = angular.module('studentapp',['ngResource','ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('students',{
        url:'/students',
        templateUrl:'components/students/all-student.html',
        controller:'StudentController'
        })
        // .state('app.details',{
        //     url:'/details',
        //     views:{
        //         'details@':{
        //             controller:'StudentFormCtrl',
        //             templateUrl:'components/students/view-student.html'
        //         }
        //     }
        // })
         .state('students.new',{
             url:'/new',
             views:{
                 'newstudent':{
                     controller:'StudentFormCtrl as studentFormCtrl',
                     templateUrl:'components/students/new-student.html'
                 }
             }

         })
        .state('view',{
            url:'/viewdetails/:sid',
            controller:'ViewStudentCtrl',
            templateUrl:'components/students/view-student.html'
        })
        .state('edit',{
            url:'/editdetails/:sid',
            controller:'EditStudentCtrl',
            templateUrl:'components/students/edit-student.html'
        })
    $urlRouterProvider.otherwise("/students");

    ;
       // $urlRouterProvider.otherwise('/');
}]);
