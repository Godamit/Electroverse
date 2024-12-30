<?php

$username = isset($_POST['  ']) ? $_POST['uname'] : '';
$isdone = isset($_POST['isdone']) ? $_POST['isdone'] : '';
// $username = isset($_POST['uname']) ? $_POST['uname'] : '';
if($username == "amit")
{
    print_r(array("amitId"=>"1234", "amitx"=>"yyy"));
    print_r($isdone);
}
else{
    echo "invalid";
}

?>