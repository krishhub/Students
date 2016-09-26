/**
 * Created by kmeet on 14/08/16.
 */
var app = angular.module('studentapp',['ngResource','ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('students',{
        url:'/students',
        templateUrl:'components/students/all-student.html',
        controller:'StudentController',
        resolve: {
            students: ['StudentService',function (StudentService) {
                return StudentService.getStudents();
            }]
        }
        })
         .state('students.new',{
             url:'/new',
             views:{
                 'newstudent':{
                     controller:'StudentFormCtrl as studentFormCtrl',
                     templateUrl:'components/students/new-student.html'
                 }
             },
             resolve:{
                 student: ['StudentResource',function (StudentResource) {
                     return {};
                 }]
             }

         })
        .state('view',{
            url:'/viewdetails/:sid',
            controller:'ViewStudentCtrl',
            templateUrl:'components/students/view-student.html',
            resolve: {
                student: ['$stateParams','StudentService', function($stateParams, StudentService){
                    return StudentService.getStudent($stateParams.sid);
                }]
            }
        })
        // .state('edit',{
        //     url:'/editdetails/:sid',
        //     controller:'myModalController',
        //     templateUrl:'components/students/myModal.html',
        //      resolve: {
        //          student: ['$stateParams','StudentService', function($stateParams, StudentService){
        //
        //              return StudentService.getStudent($stateParams.sid);
        //          }]
        //      }
        // }
        // );

    $urlRouterProvider.otherwise("/students");


       // $urlRouterProvider.otherwise('/');
}]);
