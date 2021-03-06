/**
 * Created by kmeet on 17/09/16.
 */
angular.module('studentapp').service('StudentService', ['StudentResource','$mdToast', function (StudentResource,$mdToast) {

        var students = [];
        var self = this;

        this.getStudents = function () {

            StudentResource.query().$promise.then(function(newstudents){
                console.log(newstudents);
                // It is very important to note that "students" reference should never be updated.
                // Because the object refered by "students" reference is bound with all controllers and UI.
                // We must update the same object whenever we get the new data.
                students.splice(0,students.length);
                Array.prototype.push.apply(students, newstudents);
            });

            return students;
            // in the result of then you get normal response(without the wrapper of promise)
        };

        this.getStudent = function (sid) {

            var s = _.find(students,{id:sid});
            if(!s){
                s = StudentResource.get({id:sid});
            }
            return s;
        };

        this.saveOrUpdateStudent = function (student) {

            var promise = StudentResource.save(student);

            //When "this" is used within a function, it is better to assign "this" to a variable and then use the variable to refer to this
            promise.$promise.then(function(){
                $mdToast.show({
                    template: '<md-toast class="md-toast-success"><span class="md-toast-text" flex> Saved successfully!</span>&nbsp; </md-toast>',
                    hideDelay: 3000,
                    position: 'top right',
                    toastClass:'md-toast-success'
                });
                self.getStudents();
            })
        };


        this.removeStudent = function (student) {
            var promise = StudentResource.remove(student);
            promise.$promise.then(function(){
                self.getStudents();
            });
            return promise;
        };


    //     this.addTodo = function (todo) {
    //
    //
    //         var promise = TodoResource.save(
    //             {
    //                 "title": todo,
    //                 "isDone": false
    //             });
    //
    //         return promise.$promise;
    //     };
    //
    //     this.removeTodo = function (todo) {
    //         return TodoResource.remove(todo);
    //
    //     };
    //
    //     this.clearDoneTodos = function (todoList) {
    //
    //         todoList.forEach(function (todo) {
    //             if (todo.isDone == true) {
    //                 TodoResource.remove(todo)
    //
    //             }
    //         })
    //     }
    //
    //     this.updateTodo = function (todo) {
    //         todo.$save();
    //         // todo is model as well as instance of $resource.
    //         // So when you call action on todo, it passes data of that todo object as request body.
    //     }
    //
    }]
);