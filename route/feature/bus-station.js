var userAddress = document.getElementById("userAddress");
var nearestBusStation = document.getElementById("nearestBusStation");
var map; // Variable to store the map object
var initialCoordinates = [51.505, -0.09]; // Default initial coordinates (London)

// Create a map with initial coordinates
map = L.map("map").setView(initialCoordinates, 10);

// Add a tile layer from OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// A static list of bus stations for demonstration purposes
var busStations = [
  { name: "Bus Station 1", latitude: 51.5, longitude: -0.1 },
  { name: "Bus Station 2", latitude: 51.52, longitude: -0.12 },
  { name: "Bus Station 3", latitude: 51.49, longitude: -0.09 },
  // Add more bus stations here
];

// Function to calculate the distance between two coordinates (in meters)
function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the Earth in km
  var dLat = (lat2 - lat1) * (Math.PI / 180);
  var dLon = (lon2 - lon1) * (Math.PI / 180);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c * 1000; // Convert to meters
  return distance;
}

// Function to show the nearest bus station
function showNearestBusStation(latitude, longitude) {
  var nearestStation = null;
  var minDistance = Number.MAX_VALUE;

  // Iterate through the list of bus stations and find the nearest one
  for (var i = 0; i < busStations.length; i++) {
    var station = busStations[i];
    var distance = calculateDistance(
      latitude,
      longitude,
      station.latitude,
      station.longitude
    );

    if (distance < minDistance) {
      nearestStation = station;
      minDistance = distance;
    }
  }

  if (nearestStation) {
    // Display the nearest bus station
    nearestBusStation.innerHTML = "Nearest Bus Station: " + nearestStation.name;

    // Create a marker for the nearest bus station with a different color
    var busStationMarker = L.marker(
      [nearestStation.latitude, nearestStation.longitude],
      {
        icon: L.divIcon({ className: "bus-station-icon" }),
      }
    )
      .addTo(map)
      .bindPopup(nearestStation.name);
  } else {
    nearestBusStation.innerHTML = "No Bus Stations Found Nearby.";
  }
}

// Get user's location from the address provided on the main page
var address = userAddress.innerHTML.split("Address: ")[1];
var userLocation;

fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
  .then((response) => response.json())
  .then((data) => {
    if (data && data.length > 0) {
      userLocation = data[0];
      showNearestBusStation(userLocation.lat, userLocation.lon);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Function to display bus details when clicked
function displayBusDetails(busNumber) {
  updateBusInfo(busNumber);
}
