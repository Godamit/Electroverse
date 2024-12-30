<?php
    $name = $_POST['name'];
    $pass = $_POST['pass'];

    // Encode 'Amians' to base64 for comparison
    $encodedName = base64_encode($name);

    // Decode the $pass value
    $decodedPass = base64_decode($pass);

    // Check if encoded name matches and if decoded pass matches '786786'
    if(base64_encode($name) == $encodedName && $decodedPass == '786786'){
        echo "success";
    } else {
        echo "invalid";
    }
?>
