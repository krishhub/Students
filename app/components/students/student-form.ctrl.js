/**
 * Created by kmeet on 16/08/16.
 */
app.controller('StudentFormCtrl', ['$rootScope',
    '$scope','$uibModal','StudentService', 'student',
    function ($rootScope, $scope, $uibModal, StudentService, student) {
        $scope.student = student;

        $scope.saveOrUpdateStudent = StudentService.saveOrUpdateStudent;

}]);

app.controller('CityTypeaheadCtrl',function ($scope,$http) {
    $scope.student.city = undefined;

  $scope.cities =['Ahmeadabad','Rajkot','Jamnagar','Bhavnagar','Jasdan','Dehradun','Chandigarh','Agra','New Delhi','Pune'];


    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };

})
