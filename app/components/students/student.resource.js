/**
 * Created by kmeet on 17/09/16.
 */
angular.module("studentapp").factory('StudentResource',['$resource',function ($resource) {


    var StudentResource = $resource('/students/:id',{id: '@id'},{
        clearOldStudents : {
            method:'DELETE',
            params:{},
            isArray:true,
            url:'/students/old'
        }
    });

    return StudentResource;
    }
//var removeTodos = $resource('/todos/delete');


//eturn $resource('/todos/:title',{title: '@title'});



    // var todoResource = {
    //      query: function(){
    //              var deferred = $q.defer();
    //              $timeout(function () {
    //                  console.log('timeout function called now....');
    //                  deferred.resolve(todoList);
    //                //  $timeout.cancel();
    //              },1000);
    //
    //              return deferred.promise;
    //      },
    //
    //      save: function (todo) {
    //          var deferred = $q.defer();
    //          $timeout(function () {
    //              todoList.push(todo);
    //              deferred.resolve(true);
    //          },1000);
    //
    //          return deferred.promise;
    //
    //      },
    //
    //      remove: function (todo) {
    //          var deferred = $q.defer();
    //
    //          $timeout(function () {
    //              _.remove(todoList,function (n) {
    //                  return n.title == todo.title;
    //              });
    //              deferred.resolve(true);
    //          },1000);
    //
    //          return deferred.promise;
    //      }
    // };


]);