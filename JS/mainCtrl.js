angular.module('friendsList').controller('mainCtrl', function($scope){

    $scope.name = "Amanda";
    $scope.friends = [
      "Amy",
      "Ashley",
      "Madison",
      "Deanna"
    ]



    $scope.addFriend = function (newFriend){
      $scope.friends.push(newFriend)
      console.log(newFriend);
    }

});
