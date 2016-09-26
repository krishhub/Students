/**
 * Created by kmeet on 25/09/16.
 */

app.controller('myModalController', [
    '$scope','$state', '$uibModal', 'student',
    function ($scope, $state, $uibModal, student) {

    $scope.student = student;


// $scope.open = function (size) {
//
//
//     var modalInstance = $uibModal.open({
//         animation: $scope.animationsEnabled,
//         templateUrl: 'myModal.html',
//         controller: 'ModalInstanceCtrl',
//         size: size,
//          resolve: {
//              student: ['$stateParams','StudentService', function($stateParams, StudentService){
//                  return StudentService.getStudent($stateParams.sid);
//              }]
//         }
//
//     });
//
//     console.log('modal opned!');
//     modalInstance.result.then(function (selectedItem) {
//         $scope.selected = selectedItem;
//     });
// };
//
//
// $scope.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
// };
}]
);

