<?php

if($_SERVER["REQUEST_METHOD"] !== "POST"){
    echo "Invalid Request";
    exit;
}

$to = $_POST['to'] ?? '';
$body = $_POST['body'] ?? '';

if($to == '' || $body == ''){
    echo "Phone or message missing";
    exit;
}

$params = array(
  'token' => '29kqgig3hiitzxxta',
  'to' => $to,
  'body' => $body
);

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.ultramsg.com/instance154634/messages/chat",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => http_build_query($params),
  CURLOPT_HTTPHEADER => array(
    "content-type: application/x-www-form-urlencoded"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if($err){
    echo "Error: ".$err;
}else{
    echo "Message Sent ✅";
}
