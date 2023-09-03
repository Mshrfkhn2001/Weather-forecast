const apikey="3e62548176baa3624014cded41fd1a49";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        // const searchbtn=document.getElementById("submit-btn");
        const weatherIcon=document.querySelector(".wheather-icon");
        async function checkweather(city){
            const response=await fetch(apiUrl + city + `&appid=${apikey}`);
            if(response.status==404)
            {
                document.querySelector(".error").style.display="block";
                document.querySelector(".wheather").style.display="none";
            }
            else if(searchbox.value!=="")
            {
                var data=await response.json();
            // console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src = "images/clouds.png";
            } 
            else if(data.weather[0].main == "Clear")
            {
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle")
            {
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Humidity")
            {
                weatherIcon.src = "images/humidity.png";
            }
            else if(data.weather[0].main == "Mist")
            {
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Rain")
            {
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Snow")
            {
                weatherIcon.src = "images/snow.png";
            }
            else if(data.weather[0].main == "Haze")
            {
                weatherIcon.src = "images/drizzle.png";
            }
            document.querySelector(".wheather").style.display=" block";
            document.querySelector(".error").style.display="none";
            }
            else 
            {
                // document.querySelector(".error").style.display="block";
                document.querySelector(".wheather").style.display="none";
                document.querySelector(".error").style.display="none";
                setTimeout(()=>{
                    alert("Please enter city name");
                },30)
                
            }
        }
        searchbtn.addEventListener("click",()=>{
            checkweather(searchbox.value);
        })
        