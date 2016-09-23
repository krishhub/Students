/**
 * Created by kmeet on 17/09/16.
 */
/**
 * Created by kmeet on 17/09/16.
 */
app.controller('StudentController', ['$rootScope',
        '$scope', 'StudentService',
        function ($rootScope, $scope, StudentService) {

            $scope.selection = {};
            $scope.workingNow = "Going good";
            $scope.selectedStudent = {};

            console.log("from The scope" + $scope.workingNow);

            $scope.students = StudentService.getStudents();

            $scope.removeStudent = StudentService.removeStudent;

        }
    ]
);


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
