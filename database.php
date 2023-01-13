<?php
    // cors access for all urls
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    //Connecting to a SQL Server

    $con = mysqli_connect('localhost','root','pradhan@lisa1');  // requires your sql root password
    // selecting the database 
    mysqli_select_db($con, 'WeatherData');
    // $descending = mysqli_query($con, 'select * from data where Order by date,time DESC limit 1');
    $result = mysqli_query($con, 'select * from data ');
    // var_dump($result);
    $weather_data = new stdClass;
    while($row = mysqli_fetch_assoc($result)){
         $weather_data = $row;
         
         }

         #displays the fetched data into JSON format
    echo json_encode($weather_data);
?>

