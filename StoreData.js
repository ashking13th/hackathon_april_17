function AddrObj(nam, opening, closing, timeS, lat, lon)
{
	this.name = nam;
	this.openingTime = opening;
	this.closingTime = closing;
	this.timeSpent = timeS;
	this.latlong = new google.maps.LatLng(lat, lon);
}

arr.push(new AddrObj("Home", 0, 100, 0, 17.362917, 78.527169));
arr.push(new AddrObj("Taj Banjara", 12, 14, 1.5, 17.409768, 78.448721));
arr.push(new AddrObj("Priyadarshini Park", 15, 20, 2.5, 17.422460, 78.455644));
arr.push(new AddrObj("Vasan Eye Care", 10, 20, 2, 17.369237, 78.519204));
arr.push(new AddrObj("Store", 11, 17, 1.5, 17.354937, 78.530413));