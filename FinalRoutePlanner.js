	var globalCount = 0;
	var dvDistance = document.getElementById("dvDistance");
    var distance = 500;
    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
	var DistMatrix;
	var minCost = 100000;
	var arrayLength =  arr.length;
	var route = new Array();
	for(var i = 0; i < arrayLength; i++)
	{
		route.push(i);
	}
	finalRoute = route;
	var sourceArray = new Array();
	for(var i = 0; i < arr.length; i++)
	{
		sourceArray.push(arr[i].latlong);
	}
	service.getDistanceMatrix({
        origins : sourceArray,
        destinations : sourceArray,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            DistMatrix = response;
			permute(1, arrayLength - 1);
        } 
    });
	function permute(l, r)
	{
		if (l == r)
		{
			calculateCost();
			globalCount++;
			console.log(globalCount);
			if(globalCount == fact(arrayLength - 1))
			{
				for(var i = 0; i < finalRoute.length; i++)
				{
				 dvDistance.innerHTML += arr[finalRoute[i]].name + "<br>";
				 
				}
			}
		}
		else
		{
			for (var i = l; i <= r; i++)
			{
				swap(l, i);
				permute(l + 1, r);
				swap(l, i);
			}
		}
	}
	
	function fact(n)
	{
		var fact = 1;
		for(var i = 1; i <= n; i++)
		{
			fact*=i;
		}
		return fact;
	}
	
function swap(i1, i2)
{
	var temp = route[i1];
	route[i1] = route[i2];
	route[i2] = temp; 
}

function calculateCost()
{
	var time = 10;
	var initTimeScale = 1;
	if((time > 21 && time <= 24)|| time < 7) initTimeScale = 1;
	else if(time >7 && time < 5) initTimeScale = 1.3
	else initTimeScale = 1.5;
	var cost = 0;
	for (var i = 0; i < arr.length; i++)
	{
		if (i == arr.length - 1)
		{
			var k = route[i];
			var timeCost = DistMatrix.rows[k].elements[0].duration.value/60;
			if((time > 21 && time <= 24)|| time < 7) timeCost *= 1/initTimeScale;
			else if(time >7 && time < 5) timeCost *= 1.3/initTimeScale;
			else timeCost *= 1.5/initTimeScale;
			cost += timeCost;
			break;
		}
		else{
			var k = route[i];
			var m = route[i + 1];
			var timeCost = DistMatrix.rows[k].elements[m].duration.value/60;
			if((time > 21 && time <= 24)|| time < 7) timeCost *= 1/initTimeScale;
			else if(time >7 && time < 5) timeCost *= 1.3/initTimeScale;
			else timeCost *= 1.5/initTimeScale;
			time += timeCost;
			cost += timeCost;
			if (time > arr[m].closingTime) cost += 500;
			if (time < arr[m].openingTime)
			{
				time = arr[m].openingTime + arr[m].timeSpent;
				cost += (arr[m].openingTime - time) * 120;
			}
		}
		
	}
	//console.log(cost);
		if (cost < minCost)
		{
			finalRoute = route;
			minCost = cost;
			console.log(finalRoute);
		}
	
}




	

	
	
	
