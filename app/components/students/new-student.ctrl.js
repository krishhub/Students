/**
 * Created by kmeet on 16/08/16.
 */
app.controller('StudentFormCtrl', ['$rootScope',
    '$scope','StudentService',
    function ($rootScope, $scope, StudentService) {
       $scope.me = 'krishna';
        $scope.addStudent = StudentService.addStudent

    }]);