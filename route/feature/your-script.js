const map = L.map('map').setView([28.665832, 77.212051], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const marker1 = L.marker([28.7192, 77.1007]).addTo(map);  // Rithala
marker1.bindPopup("<b>Rithala</b><br>").openPopup();
const marker2 = L.marker([28.668031, 77.293436]).addTo(map); // shadara
marker2.bindPopup("<b>Shahdara</b><br>").openPopup();
const marker3 = L.marker([28.673187, 77.067872]).addTo(map); //nangloi
marker3.bindPopup("<b>Nangloi</b><br>").openPopup();
const marker4 = L.marker([28.659179, 77.210351]).addTo(map); // sadar bazar
marker4.bindPopup("<b>Sadar Bazar</b><br>").openPopup();
const marker5 = L.marker([28.6640, 77.27121]).addTo(map); // seelampur
marker5.bindPopup("<b>Seelampur</b><br>").openPopup();
const marker6 = L.marker([28.6699, 77.2555]).addTo(map); // shastri park
marker6.bindPopup("<b>Shastri Park</b><br>").openPopup();
const marker7 = L.marker([28.7296, 77.1666]).addTo(map); // jahangirpuri
marker7.bindPopup("<b>Jahangirpuri</b><br>").openPopup();
const marker8 = L.marker([28.7163, 77.1563]).addTo(map); // shalimar bagh
marker8.bindPopup("<b>Shalimar Bagh</b><br>").openPopup();
const marker9 = L.marker([28.6910, 77.1765]).addTo(map); // ashok vihar
marker9.bindPopup("<b>Ashok Vihar</b><br>").openPopup();
const marker10 = L.marker([28.730930, 77.129562]).addTo(map); // rohini sector 15
marker10.bindPopup("<b>Rohini Sector 15</b><br>").openPopup();