/**
 * Created by kmeet on 17/09/16.
 */
app.controller('StudentController', ['$rootScope',
        '$scope','$uibModal', 'StudentService', 'students',
        function ($rootScope,$scope,$uibModal, StudentService, students) {

            $scope.selection = {};
            $scope.workingNow = "Going good";
            $scope.selectedStudent = {};

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
                console.log('modal opned!');
                modalInstance.result.then(function () {

                });

            };


            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };

        }
    ]
);


app.controller('ModalInstanceCtrl',function ($scope, $uibModalInstance,student,StudentService) {
    console.log('modal instance!');
    $scope.student = student;

    $scope.saveChanges =  function(student){
        StudentService.saveOrUpdateStudent(student);
        $uibModalInstance.close();
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

//            var getTodos = function(){ TodoService.getTodos().then(function (todoList) {
//                console.log(todoList[0].title);
//                $scope.todoList = todoList;
//            })};
//
//            getTodos();
//
//             $scope.successCallback = function () {
//                 console.log($scope.todoList[0].title);
//             };
//
//             // .then(function(todoList){
//             //     $scope.todoList = todoList;
//            // });
//
//             $scope.addTodo = function (todo) {
//
//
//
//                 TodoService.addTodo(todo).then(function (status) {
//                     getTodos();
//                     alert('Successfully added' + status);
//                 });
//             };
//
//             $scope.removeTodo = function(todo){
//                 TodoService.removeTodo(todo);
//                 getTodos();
//             };
//
//             $scope.change = function (todo) {
//                 TodoService.updateTodo(todo);
//
//             };
//
//             $scope.clearDoneTodos = function (todoList) {
//                 TodoService.clearDoneTodos(todoList)
//                 getTodos();
//             }
//             // $scope.getAllDone = function () {
//             //         $scope.todoList= _.filter($scope.todoList,{isDone:true});
//             // }
//             //
//             // $scope.getAlltodos = function () {
//             //     getTodos();
//             //
//             //
//             // }
//         }
//     ]
// );
//
