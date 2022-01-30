<!--Vollständige Eigenleistung-->
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8"/>
  <title>PHP Login</title>
  <style>
    body {
	  text-align: center;
	}
    #content div {
	  margin-top: 1em;
	}
	#content #submit {
	  margin-top: 1em;
	}
  
  </style>
</head>

<body>

<h2>PHP Login</h2>
<div id="content">
  <form action="" method="post">
	<div>
	  E-Mail*: <input type="text" name="email">
	</div>
	<div>
	  Passwort*: <input type="text" name="password">
	</div>
	<input id="submit" type="submit" name="submit">
  </form>
</div>

<?php 
	// Read the register_data.txt before doing anything, save all data 
	$handle = fopen("../txt/register_data.txt", "r");
	$loginData = array();
	if ($handle) {
		while (($line = fgets($handle)) !== false) {
			// data = name, gender, email and password
			$data = explode(",", $line);
			array_push($loginData, $data);
		}
		fclose($handle);
	} else {
		// Error
		echo "Es gab ein Problem beim Öffnen der Datei. Stellen Sie sicher, dass
		sich die Datei im Verzeichnis befindet. Ein Login ist derzeit nicht möglich.";
	} 
	//print_r($loginData);
?>

<?php if(isset($_POST['email']) && isset($_POST['password'])): ?>
  <?php	
  
	$email = $_POST['email'];
	$password = $_POST['password'];
	$submitbutton= $_POST['submit'];
	$loggedIn = False;

	if ($submitbutton){
	if (empty($email)) {
		echo "Sie müssen eine E-Mail Adresse eingeben.<br>";
	}
	else if (empty($password)) {
		echo "Sie müssen ein Passwort eingeben.<br>";
	}
	else {
		// If all data has been put into the fields, check each email + password combination in
		// textfile
		$count = 0;
		
		foreach ($loginData as &$value) {
			if(strcmp($email, $loginData[$count][2]) == 0 && 
			   strcmp($password, $loginData[$count][3]) == 0) {
				$loggedIn = True;
				break;
			}
			else {
				$count++;
			}
		}
		if ($loggedIn) {
			echo "<b>Login erfolgreich!</b><br> Sie werden in wenigen
			Augenblicken weitergeleitet ...";	
		}
		else {
			echo "<b>Falsche E-Mail oder Passwort. Bitte überprüfen Sie ihre Daten.</b>";
		}
	}
	}
  ?>
<?php endif; ?>


</body>
</html>