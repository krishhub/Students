/**
 * Created by kmeet on 16/08/16.
 */
app.controller('ViewStudentCtrl', ['$rootScope',
    '$scope', 'student',
    function ($rootScope, $scope, student) {
        $scope.kk ='krishna';
        $scope.student = student;
        console.log($scope.student);
    }])

;