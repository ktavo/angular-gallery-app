app.factory('photos', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json').then(successCallback, errorCallback);
	function successCallback(data){
    return data;
	}
	function errorCallback(error){
    return err;
	}
}]);