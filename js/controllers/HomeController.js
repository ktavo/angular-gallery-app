app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
  photos.then(function(data) {
    $scope.photos = data;
    console.log(JSON.stringify($scope.photos));
  });
}]);