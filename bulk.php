<?php

$instance = "instance154634";
$token = "29kqgig3hiitzxta";
$apiUrl = "https://api.ultramsg.com/$instance/messages/chat";

// Delay in seconds
$delay = 5;  // प्रत्येक नंबर दरम्यान 5 सेकंद थांबेल

// Message to send
$message = "नमस्कार! UltraMsg WhatsApp API वरून टेस्ट मेसेज पाठवला आहे.";

// Read numbers from file (one number per line)
$numbers = file("numbers.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

foreach ($numbers as $number) {

    $payload = json_encode([
        "token" => $token,
        "to"    => $number,
        "body"  => $message,
        "priority" => 1
    ]);

    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

    $response = curl_exec($ch);
    curl_close($ch);

    echo "Sent to: $number → Response: $response<br>";

    sleep($delay);  // delay (sec)
}

echo "<br><b>Bulk Sending Completed!</b>";
?>
