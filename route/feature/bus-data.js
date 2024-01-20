var buses = [
  {
    busNumber: "HP123",
    emissionCompliance: "Bharat Stage IV",
    fuelType: "CNG",
    driver: {
      phoneNumber: "9876543210",
      driverLicense: "DL123456",
    },
    currentLocation: {
      latitude: 31.1048,
      longitude: 77.1734,
    },
    speed: 40, // in km/h
  },
  {
    busNumber: "HP456",
    emissionCompliance: "Bharat Stage IV",
    fuelType: "Electricity",
    driver: {
      phoneNumber: "9876543211",
      driverLicense: "DL123457",
    },
    currentLocation: {
      latitude: 31.101,
      longitude: 77.172,
    },
    speed: 35, // in km/h
  },
  {
    busNumber: "HP789",
    emissionCompliance: "Bharat Stage IV",
    fuelType: "CNG",
    driver: {
      phoneNumber: "9876543212",
      driverLicense: "DL123458",
    },
    currentLocation: {
      latitude: 31.098,
      longitude: 77.17,
    },
    speed: 45, // in km/h
  },
  // Add more bus data here
];

// Export the buses array for use in other files
module.exports = buses;

// Function to update bus markers on the map
function updateBusMarkers() {
  // ... (Your existing bus marker update code)
}

// ... (Your existing bus data code)

// Initial bus marker setup
updateBusMarkers();
