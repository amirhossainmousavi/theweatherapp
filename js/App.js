// Get element
var temp = document.querySelector('.temp');
var city = document.querySelector('.city')
var buttonvalue = document.querySelector('#buttonvalue');
var DateParagraph = document.querySelector('.date');
var VideoBackground = document.getElementById('videobackground')
var Cloudy = document.querySelector('.clo')
var Humidity = document.querySelector('.Hum')
var Wind = document.querySelector('.win')
var TempMax = document.querySelector('.temp-max')
var TempMin = document.querySelector('.temp-min')
    // Get date
var DateAndMonth = new Date()
var Month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var DateSentence = `${day[DateAndMonth.getDay()]}, ${DateAndMonth.getDate()} ${Month[DateAndMonth.getMonth()]} ${DateAndMonth.getFullYear()} `
DateParagraph.textContent = DateSentence
document.querySelector('.city-container').addEventListener('click', targetparagraph)
buttonvalue.addEventListener('click', Searchparameter)
    // Use openweathermap Fetch
function Weather(citys) {
    // Api Key
    var key = 'c69ed7becffcc3265225364fc29f6add';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + citys + '&appid=' + key)
        .then(function(resp) { return resp.json() })
        // Detalis Weather
        .then(function(data) {
            city.innerHTML = data.name;
            var deg = `${Math.round(parseFloat(data.main.temp - '273.15'))}&deg;`
            temp.innerHTML = deg;
            //Change backgeound
            if (data.weather[0].main === "Thunderstorm") {
                VideoBackground.src = 'image-video/Thunderstorm.mp4'
            } else if (data.weather[0].main === "Snow") {
                VideoBackground.src = 'image-video/Snowy.mp4'
            } else if (data.weather[0].main === "Atmosphere") {
                VideoBackground.src = 'image-video/Atmosphere.mp4'
            } else if (data.weather[0].main === "Clouds") {
                VideoBackground.src = 'image-video/Clouds.mp4'
            } else if (data.weather[0].main === "Drizzle") {
                VideoBackground.src = 'image-video/Rainy.mp4'
            } else if (data.weather[0].main === "Rain") {
                VideoBackground.src = 'image-video/Rainy.mp4'
            } else {
                VideoBackground.src = 'image-video/Sunny.mp4'
            }
            //write detalis in Html
            Cloudy.innerHTML = `${data.clouds.all}%`
            Humidity.innerHTML = ` ${data.main.humidity}%`
            Wind.innerHTML = `${Math.round(data.wind.speed)}km/h`
            TempMax.innerHTML = `${Math.round(parseFloat(data.main.temp_max - '273.15'))}&deg;`
            TempMin.innerHTML = `${Math.round(parseFloat(data.main.temp_min - '273.15'))}&deg;`
        })
        //Error
        .catch(function() {
            iziToast.warning({
                title: 'Oops',
                message: 'We did not find the city we are looking for. Please enter the name of the city correctly!',
                rtl: false,
                position: 'bottomCenter'
            });
            city.innerHTML = ""
            temp.innerHTML = ""
        });
}
//Search in input
function Searchparameter() {
    var inputvalue = document.querySelector('input').value
    var a = `<a>${inputvalue}</a>`
    document.querySelector('.city-container').insertAdjacentHTML('beforeend', a)
    Weather(inputvalue)
}
//windows load
window.addEventListener('load', function() {
        Weather('Tehran')
        console.log('Application has started.');
    })
    // Write template in input
function targetparagraph(event) {
    if (event.target.text !== undefined) {
        document.querySelector('input').value = event.target.text;

    }
}
