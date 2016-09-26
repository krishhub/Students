/**
 * Created by kmeet on 16/08/16.
 */
app.controller('StudentFormCtrl', ['$rootScope',
    '$scope','$uibModal','StudentService', 'student',
    function ($rootScope, $scope, $uibModal, StudentService, student) {
        $scope.student = student;
        $scope.saveOrUpdateStudent = StudentService.saveOrUpdateStudent;

}]);
