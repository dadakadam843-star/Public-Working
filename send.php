<?php
$to=$_POST['to']??'';
$body=$_POST['body']??'';

$params=[
 'token'=>'29kqgig3hiitzxxta',
 'to'=>$to,
 'body'=>$body
];

$ch=curl_init("https://api.ultramsg.com/instance154634/messages/chat");
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_POST,true);
curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($params));
$res=curl_exec($ch);
curl_close($ch);

echo $res;
