// notesView.js
( function (angular) {
	var theModule = angular.module("notesView",["ui.bootstrap"]);

	theModule.controller("notesViewController",
		["$scope", "$window", "$http",
		function($scope,$window, $http){
			$scope.notes=[
			// {
			// 	note:"hello",
			// 	color: "yellow",
			// 	author: "Ali"
			// },
			];
			$scope.newNote = createBlankNote();

			// Get the category name
			var urlparts = $window.location.pathname.split("/");
			var categoryName = urlparts[urlparts.length-1];
			var notesurl = "/api/notes/" + categoryName;

			$http.get(notesurl)
			.then(function(result){
					// success
					$scope.notes = result.data;
				}, function(err){
					// Error
					// TODO
					console.log(err);
				});

			$scope.save = function(){
				$http.post(notesurl, $scope.newNote)
				.then(function(result){
					// success
					$scope.notes.push(result.data);
					$scope.newNote = createBlankNote();
				},function(err){
					// failure 
					// TODO
				});

			};

		}
		]);
	function createBlankNote(){
		return {
			note:"",
			color:"yellow",
			author:"Ali"
		};
	}
})( window.angular )