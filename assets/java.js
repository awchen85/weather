var userInput = $( "#city-search" );



//Set up api key
var APIKey="4f9f77fa9ffcd99798bf3e2b55a1989d";

//Display current and future weather after grabbing the city from input text
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
function currentWeather(city){
var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


}