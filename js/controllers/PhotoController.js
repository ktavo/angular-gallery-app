console.log('Inside photocontroller');
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.then(function(data) {
    $scope.detail = data[$routeParams.id];
    console.log('Inside photocontroller');
    console.log($scope.detail);
  });
}]);