/*
 *	Nearby search :<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
 *
 */

 	var map;
	var service;
	var infowindow;
	var results_global;
	var latitude;
	var longitude;

		function places_search_list(type) 
			{
				type = 'library';
				getLocation();
			  var client_location = {lat:26.872903 , lng: 80.881776};
			  //var client_location = {lat: latitude , lng: longitude };


			  map = new google.maps.Map(document.getElementById('map'), 
																	  	{
																	      center: client_location,
																	      zoom: 15
																	    });
			  var x = document.getElementById("demo");

			  var request = {
			    location: client_location,
			    radius: '7500',
			    //types: ['store' , 'atm']
			    type: type
			  };

			  infowindow = new google.maps.InfoWindow();
			  
			  service = new google.maps.places.PlacesService(map);
			  service.nearbySearch(request, process_searches);
			}

		function process_searches(results, status) 
		{
	        if (status === google.maps.places.PlacesServiceStatus.OK) 
	        {
		           results_global = results;
		           $("#fill").empty();
		           var fill_place = document.getElementById('fill');
		           fill_place.innerHTML = "<div id="+"test"+"></div>";

		           if(results.length < 1)
		           {
		           	fill_place.innerHTML = "<div id="+"test"+"> No results found.</div>";
		           }

		        for(var i = 0; i < results.length; i++)
		          {
		          		var ind_result = results_global[i];
		          		display(ind_result , i);
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
	    latitude = position.coords.latitude; 
	    longitude =  position.coords.longitude; 
	}

	//UNDER CONSTRUCTION
	//function to display the data in block format
	function display(data , index)
	{		
		if(data)
		{	
			var name = data.name;
			
			if(data.rating)
			{
				var rating = "Ratings : " + data.rating ;		
			}
			else
			{
				rating = " ";
			}

			 //$($('#change').first().clone().prop('id' , 'abc'+index )).appendTo("#test");

			 $('<a href=".query" id="'+index+'" class="query">'+
                    '<div class="row pane">'+

                        '<div class="col-xs-2">'+'<img class="img-responsive" src="http:/'+'/placehold.it/100x70">'+
                        '</div>'+
                        '<div class="col-xs-4">'+
                            '<h4 class="product-name">'+
                            '<strong> '+ name
                            +' </strong></h4><h4><small>' + rating
                            + '</small></h4>'+
                        '</div>'+
                        '<div class="col-xs-6">'+
                            '<div class="col-xs-6 text-right">'+
                                '<h6><strong>25.00 <span class="text-muted">x</span></strong></h6>'+
                            '</div>'+
                            '<div class="col-xs-4">'+
                                '<input type="text" class="form-control input-sm" value="1">'+
                            '</div>'+
                            '<div class="col-xs-2">'+
                                '<button type="button" class="btn btn-link btn-xs">'+
                                    '<span class="glyphicon glyphicon-trash"> </span>'+
                                '</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '</a>').appendTo('#test')

		}
	}

		function add_to_list(time_spent)
		{
			var place_num = caller.id()
			var this_place = results[place_num];

			var open_hours = this_place.opening_hours.periods[0].open.time;
			var close_hours = this_place.opening_hours.periods[0].close.time;
			if (!close_hours) 
			{
				close_hours = 24;
			}
			var latitude = this_place.geometry.location.lat;
			var longitude = this_place.geometry.location.long;

			arr.push(new AddrObj(open_hours , close_hours , time_spent , latitude , longitude));
		}


		function process2()
		{
			$("#fill").empty();
			places_search_list() ;
		}