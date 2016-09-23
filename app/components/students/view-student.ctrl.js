/**
 * Created by kmeet on 16/08/16.
 */
app.controller('ViewStudentCtrl', ['$rootScope','$stateParams',
    '$scope','StudentService',
    function ($rootScope,$stateParams, $scope, StudentService) {
        $scope.kk ='krishna';

        $scope.student = StudentService.getStudent($stateParams.sid)
        console.log($scope.student);
    }])

;