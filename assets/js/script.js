function getTicker (){
	fetch(
		'https://thawing-anchorage-52506.herokuapp.com/https://dashboard.nbshare.io/api/v1/apps/reddit'
	)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			var i = 0;
			while(i < 10){
				console.log(data[i].ticker)
				i++
			}
		});
}

	fetch(
		'https://thawing-anchorage-52506.herokuapp.com/https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?'
	)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			
			}
		)