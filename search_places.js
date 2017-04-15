/*
 *	Nearby search :<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
 *
 */

 	var map;
	var service;
	var infowindow;
	var results_global;

	function places_search_list() 
			{
			  var client_location = {lat:26.872903 , lng: 80.881776};


			  map = new google.maps.Map(document.getElementById('map'), 
																	  	{
																	      center: client_location,
																	      zoom: 15
																	    });
			  var x = document.getElementById("demo");


			  var request = {
			    location: client_location,
			    radius: '5000',
			    //types: ['store']
			    type: 'atm'
			  };

			  infowindow = new google.maps.InfoWindow();
			  
			  service = new google.maps.places.PlacesService(map);
			  service.nearbySearch(request, process_searches);
			}

	function process_searches(results, status) 
	{
		//var x = document.getElementById("demo");
        if (status === google.maps.places.PlacesServiceStatus.OK) 
        {
	           results_global = results;
	        for(var i = 0; i < results.length; i++)
	          {
	          		var ind_result = results_global[i];
	          		//console.log(ind_result.formatted_address);
	          		//document.write(ind_result.formatted_address);
	          		/*x.innerHTML += "Index : " + i + "  ";
	          		x.innerHTML += "Name  : " + ind_result.name + "<br>";
	          		x.innerHTML += "lat long (" + ind_result.geometry.location + " , " + ind_result.geometry.location + "<br>";
	          		x.innerHTML += "Address : " + ind_result.formatted_address + "<br><br>";*/

	          		display(ind_result);

	          		//render on screen

	          }
        }
      }

    function createMarker(place) 
    {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() 
												        {
												          infowindow.setContent(place.name);
												          infowindow.open(map, this);
												        });
     }

/*
      var x = document.getElementById("map");
	function getLocation() 
	{
	    if (navigator.geolocation) 
	    {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else 
	    {
	        x.innerHTML = "Location feature is not supported by this browser. Please use a different browser.";
	    }
	}
	function showPosition(position) 
	{
	    x.innerHTML = "Latitude: " + position.coords.latitude + 
	    "<br>Longitude: " + position.coords.longitude; 
	}
	*/

	//UNDER CONSTRUCTION
	//function to display the data in block format
	function display(data , index)
	{
		//var x = document.getElementById("demo");
		
		if(data)
		{	//x.innerHTML += 'amrendra';
			 /*var outer_div = document.createElement('div');
			 outer_div.class = 'row pane';
			 outer_div.id = index;

			 var img_div = document.createElement('div');
			 img_div.class = 'col-xs-2';

			 var myimg = document.createElement('img');
			 myimg.class = 'img-responsive';
			 myimg.src = 'http://placehold.it/100x70';

			 var place_div = document.createElement('div');
			 place_div.class = 'col-xs-4';

			 var place_head = document.createElement('h4');
			 place_head.class = 'product-name';

			 var strng = document.createElement('strong');
			 strng.innerHTML = data.name;
			 strng.innerHTML += "ashking";*/

			 //var o_div = document.createElement()

			 var itm = document.getElementById("change");
			 var cln = itm.cloneNode(true);
			 itm.appendChild(cln);

		}

		function add_to_list()
		{
			var place_ok = caller.id()

			arr.push(new AddrObj());
		}


	}