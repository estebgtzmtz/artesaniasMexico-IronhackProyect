// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






mapboxgl.accessToken =
    'pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A'

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
})

const geoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    countries: 'mx'
})

map.addControl(geoCoder)

map.on('moveend', () => {
    const { lng, lat } = map.getCenter()
    if (lng !== 0 || lat !== 0) {
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
        const address = document.querySelector('input[placeholder="Search"]').value
        const addressInput = document.querySelector('input[name="address"]')
        const latInput = document.querySelector('input[name="latitude"]')
        const lngInput = document.querySelector('input[name="longitude"]')
        latInput.value = lat
        lngInput.value = lng
        addressInput.value = address
    }
})