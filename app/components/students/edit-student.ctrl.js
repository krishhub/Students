/**
 * Created by kmeet on 23/09/16.
 */
/**
 * Created by kmeet on 16/08/16.
 */
app.controller('EditStudentCtrl', ['$rootScope','$stateParams',
    '$scope','StudentService',
    function ($rootScope,$stateParams, $scope, StudentService) {
        $scope.kk ='krishna';

        $scope.currentstudent = StudentService.getStudent($stateParams.sid);

          // StudentService.getStudent($stateParams.sid)

        //TODO: name should be updateStudent
        $scope.updateStudent =  StudentService.updateStudent
    }])

;