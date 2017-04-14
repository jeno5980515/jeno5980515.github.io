var options, canvas , DataUrl ;
DataUrl = 'http://board.weigreen.com/message' ;

google.load("jquery", "1.3.2");
google.setOnLoadCallback(function(){
	options = {
		url: DataUrl ,
		async: false,
		type: 'get',
		crossDomain: true,
		data: ''
	};
	canvas = $('#canvas');
});


var DataCtrl = function($scope){

	$scope.DataLists = [
	];
	
	$scope.PostData = function(){
		options.url = DataUrl ;
		options.type = 'POST' ;
		options.data = 'name='+$scope.pName+'&'+'text='+$scope.pText ;
		canvas.html( $.ajax(options).respinseText );
		$scope.ShowData() ;
	};
	
	$scope.ShowData = function(){
		$.ajax({
			url: DataUrl ,
			type: "GET",
			dataType: "json",
			crossDomain: true,
			success: function(data) {
				var i = 0;
				$.each(data, function() {
 					var d = { name: data[i].name , text: data[i].text , id: data[i].id} ;
					$scope.DataLists[i] = d ;
					i++;
				});
			},
		});
	}

	$scope.Put = function(index,id){
		options.url = DataUrl + '/' + $scope.DataLists[index].id;
		options.data = 'name='+$scope.DataLists[index].name+'&'+'text='+$scope.DataLists[index].text ;
		options.type = 'Put' ;
		$.ajax(options) ;
	};

	$scope.Delete = function(index){
		options.url = DataUrl + '/' + $scope.DataLists[index].id;
		options.type = 'Delete' ;
		$.ajax(options) ;
		$scope.DataLists.splice(index, 1);
	};
	
	
	//setInterval($scope.ShowData,1000);

};



 