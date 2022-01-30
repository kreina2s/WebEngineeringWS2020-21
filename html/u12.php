<!--kreina2s-->
<!--Vollständige Eigenleistung, Registration funktioniert nicht. -->
<!DOCTYPE HTML>
<html lang="de">
  <head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="../css/flex.css">
  <title>PHP Registrierung</title>
	<style>
  .info {
	  color: gray;
	}
  #registration_content div {
	  margin-top: 1em;
	}
	#registration_content #submit {
	  margin-top: 1em;
	}
	</style>
  </head>
  <body>
    <div class="container">
	  <div class="header">
	    <a href="../index.html">
		  <h1>Web Engineering</h1>
		  <h2>von kreina2s</h2>
		</a>
	  </div>
	  <div class="navigation">
	    <a href="u1.html">Übung 1</a>
	    <a href="u2.html">Übung 2</a>
	    <a href="u3.html">Übung 3</a>
	    <a href="u4.html">Übung 4</a>
	    <a href="u5.html">Übung 5</a>
	    <a href="u6.html">Übung 6</a>
	    <a href="u7.html">Übung 7</a>
	    <a href="u8.html">Übung 8</a>
	    <a href="u9.html">Übung 9</a>
	    <a href="u10.html">Übung 10</a>
	    <a href="u11.html">Übung 11</a>
	    <a href="u12.php">Übung 12</a>
	  </div>
	  <div class="content">
			<h1>PHP</h1>
		  <h2>12.1 Registrierung mit PHP</h2>
			<h3>Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular.</h3>

			<div id="registration_content">
			  <span class="info"><p>Mit * markierte Felder müssen ausgefüllt werden</p></span>
			  <form action="" method="post">
			    <div>
			      Name*: <input type="text" name="name">
					</div>
					<div>
					  Geschlecht*: 
					  <input type="radio" name="gender" value="maennlich">Männlich
					  <input type="radio" name="gender" value="weiblich">Weiblich
					  <input type="radio" name="gender" value="divers">Divers
					</div>
					<div>
				  	E-Mail*: <input type="text" name="email">
					</div>
					<div>
				  	Passwort*: <input type="text" name="password">
					</div>
					<input id="submit" type="submit" name="submit">
			  </form>
			</div>

		  <h2>12.2 Login PHP</h2>
			<h3>Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de einen Login.</h3>
			<a href="12-2-login.php">Bitte hier klicken, um zum Login zu gelangen.</a>
			
			<?php 
			  $name = $_POST['name'];
			  $gender = @$_POST['gender'];
			  $email = $_POST['email'];
			  $pw = $_POST['password'];
			  $submitbutton= $_POST['submit'];
			  
			  if(isset($_POST['name']) && 
			     isset($_POST['gender']) && 
				 isset($_POST['email']) && 
				 isset($_POST['password'])):
				 {
					
					// Write file
					$stringToWrite = $name . "," . $gender . "," . $email . "," . $pw . ",";

					$myfile = fopen("../txt/register_data.txt", "a");
					fwrite($myfile, $stringToWrite.PHP_EOL);
					fclose($myfile);
						
					echo "<br>";
					echo "<b>Registrierung erfolgreich! Ihre Daten lauten:</b><br>";
					echo "Name: ". $name; echo "<br>";
					echo "Geschlecht: ". $gender; echo "<br>";
					echo "Email: ". $email; echo "<br>";
					echo "Passwort: ".$pw; echo "<br>";
					echo "Sie können sich nun jederzeit einloggen.";

				 }
			  else: {
					if ($submitbutton){
						if (empty($name)) {
							echo "Sie müssen einen Namen eingeben.<br>"; 
						}
						if (empty($gender)) {
							echo "Sie müssen ein Geschlecht angeben.<br>";
						}
						if (empty($email)) {
							echo "Sie müssen eine E-Mail Adresse eingeben.<br>";
						}
						if (empty($pw)) {
							echo "Sie müssen ein Passwort eingeben.<br>";
						}
				  }
			  }
			  endif;
			?>
		</div>
	  <div class="divider left-divider"></div>
	  <div class="divider mid-divider"></div>
	  <div class="divider right-divider"></div>
	  <div class="divider bottom-divider"></div>
	</div>
  </body>
</html>
