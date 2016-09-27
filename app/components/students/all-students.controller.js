/**
 * Created by kmeet on 17/09/16.
 */


app.controller('StudentController', ['$rootScope',
        '$scope','$uibModal', 'StudentService', 'students',
        function ($rootScope,$scope,$uibModal, StudentService, students) {

            $scope.selection = {};
            $scope.workingNow = "Going good";
            $scope.selectedStudent = {};

            $scope.animationsEnabled = true;
            console.log("from The scope" + $scope.workingNow);

            $scope.students = students;
            $scope.removeStudent = StudentService.removeStudent;

            $scope.open = function (size,sid) {


                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'components/students/myModal.html',
                    controller: 'ModalInstanceCtrl',
                    size: size,
                    resolve: {
                        student: ['$stateParams','StudentService', function($stateParams, StudentService){
                            return StudentService.getStudent(sid);
                        }]
                    }

                });
                console.log('modal opened!');
                modalInstance.result.then(function () {

                });

            };


            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };



        }
    ]
);

app.controller('ToastShowCtrl'['$scope','$mdToast', function($scope, $mdToast) {
    $scope.closeToast = function() {
        $mdToast.hide();
    };
}]);


app.controller('ModalInstanceCtrl',function ($scope, $uibModalInstance,student,StudentService) {
    console.log('modal instance!');
    $scope.student = student;

    $scope.saveChanges =  function(student){
        StudentService.saveOrUpdateStudent(student);
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// app.controller('ToastCtrl',function ($scope,ngToast) {
// ngToast.create("welcome to my application");
//
//     $scope.openNotice = function (text, type) {
//         console.log('opening!');
//         ngToast.open({
//             template: '<div class="ngtoast-notice">Notice: {{text}}</div>',
//             className: 'ngtoast-default ' + 'ngtoast-notice--' + type,
//             controller: ['$scope', function($scope) {
//                 $scope.text = text;
//             }]
//         });
//     };
// });

