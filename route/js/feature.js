var buses = [
  {
      busNumber: "HP123",
      emissionCompliance: "Bharat Stage IV",
      fuelType: "CNG",
      driver: {
          phoneNumber: "9876543210",
          driverLicense: "DL123456"
      },
      currentLocation: {
          latitude: 31.1048,
          longitude: 77.1734
      },
      speed: 40 // in km/h
  },
  {
      busNumber: "HP456",
      emissionCompliance: "Bharat Stage IV",
      fuelType: "Electricity",
      driver: {
          phoneNumber: "9876543211",
          driverLicense: "DL123457"
      },
      currentLocation: {
          latitude: 31.1010,
          longitude: 77.1720
      },
      speed: 35 // in km/h
  },
  {
      busNumber: "HP789",
      emissionCompliance: "Bharat Stage IV",
      fuelType: "CNG",
      driver: {
          phoneNumber: "9876543212",
          driverLicense: "DL123458"
      },
      currentLocation: {
          latitude: 31.0980,
          longitude: 77.1700
      },
      speed: 45 // in km/h
  }
  // Add more bus data here
];

// Export the buses array for use in other files
module.exports = buses;

// Function to display bus information
function displayBusInfo(busNumber) {
  // Find the bus by bus number
  var bus = buses.find(function (b) {
      return b.busNumber === busNumber;
  });

  if (bus) {
      // Display bus information on the HTML page
      document.getElementById("busInfo").innerHTML = `
          <strong>Bus Number:</strong> ${bus.busNumber}<br>
          <strong>Emission Compliance:</strong> ${bus.emissionCompliance}<br>
          <strong>Fuel Type:</strong> ${bus.fuelType}<br>
          <strong>Driver Phone Number:</strong> ${bus.driver.phoneNumber}<br>
          <strong>Driver License:</strong> ${bus.driver.driverLicense}<br>
          <strong>Current Speed:</strong> ${bus.speed} km/h<br>
          <strong>Current Location:</strong> Lat: ${bus.currentLocation.latitude}, Lon: ${bus.currentLocation.longitude}
      `;
  } else {
      document.getElementById("busInfo").innerHTML = "Bus not found.";
  }
}


// Function to update bus markers on the map
function updateBusMarkers() {
  // Clear existing bus markers
  busMarkers.clearLayers();

  // Add markers for each bus
  buses.forEach(function (bus) {
      var marker = L.marker([bus.currentLocation.latitude, bus.currentLocation.longitude])
          .bindPopup(`Bus Number: ${bus.busNumber}<br>Speed: ${bus.speed} km/h`)
          .addTo(busMarkers);
  });

  // Add bus markers to the map
  busMarkers.addTo(map);
}

// Update bus markers periodically (e.g., every 30 seconds)
setInterval(updateBusMarkers, 30000); // Update every 30 seconds

// Initialize the map and bus marker layer
var map = L.map("map").setView(initialCoordinates, 10);
var busMarkers = L.layerGroup().addTo(map);

// Populate bus selection dropdown with bus numbers
buses.forEach(function (bus) {
    var option = document.createElement("option");
    option.value = bus.busNumber;
    option.text = bus.busNumber;
    document.getElementById("busSelection").appendChild(option);
});

// Initial bus marker setup
updateBusMarkers();




