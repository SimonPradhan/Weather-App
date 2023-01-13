<?php
    // cors access for all urls
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $city_name = 'Portsmouth';
    $apikey = "f8574382a8eee35737bb0614b575393c";

    $api = 'https://api.openweathermap.org/data/2.5/weather?q='.$city_name.'&units=metric&appid='.$apikey;


    $weather_data = json_decode(file_get_contents($api), true);
    // var_dump($weather_data);
    $symbol = 1;
    $name = $weather_data['name'];
    $weather_desp = $weather_data['weather'][0]['main'];
    $temperature = $weather_data['main']['temp'];
    $Humidity = $weather_data['main']['humidity'];
    $Description = $weather_data['weather'][0]['description'];
    $pressure = $weather_data['main']['pressure'];
    $icon = $weather_data['weather'][0]['icon'];
    $WindSpeed = $weather_data['wind']['speed'];
    $direction = $weather_data['wind']['deg'];
    $date = $weather_data['dt'];    
    
        //Connecting to a SQL Server

        $con = mysqli_connect('localhost','root','pradhan@lisa1');  // requires your sql root password


        // creating a database to store 
        $sql  = mysqli_query($con,"create database if not exists WeatherData");
        // selecting the database 
        mysqli_select_db($con, 'WeatherData');
        // creating a table 
        mysqli_query($con,'create table if not exists data(  name varchar(30), main varchar(30), temperature int(10), humidity int(10), description varchar(40), pressure int(10), windspeed int(10), direction int(10), icon varchar(10), dt int(20))');
        // inserting the values
        mysqli_query($con, "insert into data (name,main,temperature,humidity,description,pressure,windspeed,direction,icon,dt) values('$name','$weather_desp',$temperature, $Humidity, '$Description', $pressure,$WindSpeed, $direction, '$icon', $date)");

        // making the page to reload after 30 minutes for new value
        $page = $_SERVER['PHP_SELF'];
        $sec = "1800";
        header("Refresh: $sec; url=$page");

        $result = mysqli_query($con, 'select * from data ');
    
        $weather_data = new stdClass;
        while($row = mysqli_fetch_assoc($result)){
             $weather_data = $row;
             
             }
    
             #displays the fetched data into JSON format
        echo json_encode($weather_data);
?>