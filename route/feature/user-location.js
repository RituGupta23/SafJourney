var x = document.getElementById("demo");
var userAddress = document.getElementById("userAddress");
var map; // Variable to store the map object
var initialCoordinates = [28.7041, 77.1025]; // Default initial coordinates

// Create a map with initial coordinates
map = L.map("map").setView(initialCoordinates, 10);

// Add a tile layer from OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Update the map view to the user's location
    map.setView([latitude, longitude], 15);

    // Create a marker at the specified coordinates
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup("Your Location").openPopup();

    // Display coordinates
    x.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

    // Fetch and display the address
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            // Extract the formatted address from the API response
            var address = data.display_name;
            userAddress.innerHTML = "Address: " + address;
        })
        .catch(error => {
            console.error('Error:', error);
            userAddress.innerHTML = "An error occurred while fetching the address.";
        });
}


// ... (Your existing user location code)

// Function to update the bus information
function updateBusInfo(busNumber) {
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

// Function to display bus details when clicked
function displayBusDetails(busNumber) {
    updateBusInfo(busNumber);
}
