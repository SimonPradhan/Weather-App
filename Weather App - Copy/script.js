// this if else statement checks if the data in the weather key is null and the data is of more than 5 min then it fetches new data
function fetching_Weather() {
    if (localStorage.when != null
        && parseInt(localStorage.when) + 300000
        > Date.now()) {
        // gets the data from the local storage stored in the key weather
        weather = JSON.parse(localStorage.weather_data);
        const { name, icon, description, main, temperature, humidity, pressure, windspeed, direction, dt } = weather;

        const tempC = Math.round(temperature)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#main").innerText = main;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = tempC + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + windspeed + "m/s";
        document.querySelector(".direction").innerText = "Wind Direction: " + direction + "°";
        let d = new Date(dt * 1000);
        document.querySelector(".date").innerHTML = d.toDateString();

        // this statements checks the 'main' weather description and changes the background according to the condition.
        if (main == 'Rain') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
        }
        else if (main == 'Clear') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
        }
        else if (main == 'Clouds') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";
        }
        else if (main == 'Snow') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNub3dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ')";
        }
        else if (main == 'Thunderstorm') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
        }
        else if (main == 'Mist') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603807617654-89b25101a00e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
        }
        else {
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/05/18/19/53/rain-3411982_1280.jpg')";
        }
    }

    else {
        // this function fetches the api and finds the data of the city from the value in the "city" variable
        fetch("http://localhost/api.php")
            .then((response) => response.json())  // here the data fetched from the api is changed into json data format
            .then((data) => {

                // sets the data fetched from the api in the local storage
                localStorage.setItem('weather_data', JSON.stringify(data));

                weather = JSON.parse(localStorage.weather_data)
                const { name, icon, description, main, temperature, humidity, pressure, windspeed, direction, dt } = weather;

                const tempC = Math.round(temperature)
                document.querySelector(".city").innerText = "Weather in " + name;
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector("#main").innerText = main;
                document.querySelector(".description").innerText = description;
                document.querySelector(".temp").innerText = tempC + "°C";
                document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
                document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
                document.querySelector(".wind").innerText = "Wind Speed: " + windspeed + "m/s";
                document.querySelector(".direction").innerText = "Wind Direction: " + direction + "°";
                let d = new Date(dt * 1000);
                document.querySelector(".date").innerHTML = d.toDateString();

                // this statements checks the 'main' weather description and changes the background according to the condition.
                if (main == 'Rain') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
                }
                else if (main == 'Clear') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1612251276789-9b1a8f2add8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
                }
                else if (main == 'Clouds') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";
                }
                else if (main == 'Snow') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNub3dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ')";
                }
                else if (main == 'Thunderstorm') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
                }
                else if (main == 'Mist') {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603807617654-89b25101a00e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')";
                }
                else {
                    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/05/18/19/53/rain-3411982_1280.jpg')";
                }
            });
      
      }
}
fetching_Weather("Portsmouth");


