<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $phone = $_POST['phone'];
    $msg   = $_POST['message'];

    $params = array(
      'token' => '29kqgig3hiitzxxta',
      'to' => $phone,
      'body' => $msg
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
    curl_close($curl);

    echo "Message Sent ✅";
}
?>

<!DOCTYPE html>
<html>
<body>
<h3>Send WhatsApp Message</h3>

<form method="POST">
  <input name="phone" placeholder="919607023105" required><br><br>
  <textarea name="message" placeholder="Message" required></textarea><br><br>
  <button type="submit">Send</button>
</form>

</body>
</html>
