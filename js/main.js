
function fetchCountryData() {
    const selectedCountry = document.getElementById("countries").value;
    const apiUrl = `https://restcountries.com/v3.1/name/${selectedCountry}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const countryInfoDiv = document.getElementById("countryInfo");
            countryInfoDiv.innerHTML = ` ${data[0].name.common}`;

            GetCountryInfo()
        })
        .catch(error => console.error('Error fetching country data:', error));
}

function GetCountryInfo() {
    const selectedCountry = document.getElementById("countries").value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCountry}&appid=f09babed287b9726539a7b1ca8882f8d`)
        .then(response => response.json())
        .then(data => {
            // Process the fetched weather data and display it
            for (let i = 0; i < 5; i++) {
                document.getElementById("descrip" + (i + 1)).innerHTML = data.list[i].weather[0].description;
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }
        })
        .catch(err => console.log(err));
}

// Populate the countries select dynamically
fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const countriesSelect = document.getElementById("countries");

                data.forEach(country => {
                    const option = document.createElement("option");
                    option.value = country.name.common;
                    option.text = country.name.common;
                    countriesSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching country list:', error));





//Getting and displaying the text for the upcoming five days of the week

const currentDate = new Date();
var weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",];

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
];
//Function to get the correct integer for the index of the days array



for(i = 0; i<5; i++){

    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);

    // Get day, month, and date components
    const dayOfWeek = weekday[nextDate.getDay()];
    const month = nextDate.toLocaleString('default', { month: 'long' });
    const date = nextDate.getDate();
    document.getElementById("day" + (i+1)).innerHTML = `${dayOfWeek}, ${month} ${date}`;

        
}
    //------------------------------------------------------------

   

    
    