<?php
        // login_ajax.php
        require 'database.php';
        header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

        //Because you are posting the data via fetch(), php has to retrieve it elsewhere.
        $json_str = file_get_contents('php://input');
        //This will store the data into an associative array
        $json_obj = json_decode($json_str, true);

        // Check to see if the username and password are valid.  (You learned how to do this in Module 3.)
        // Use a prepared statement
        $stmt = $mysqli->prepare("SELECT COUNT(*), username, hashed_password FROM users WHERE username=?");

        // Bind the parameter
        $stmt->bind_param('s', $user);
        $user = $json_obj['username'];
        $stmt->execute();

        // Bind the results
        $stmt->bind_result($cnt, $user_id, $pwd_hash);
        $stmt->fetch();

        $pwd_guess = $json_obj['password'];
        
        // Compare the submitted password to the actual password hash
        if (empty($json_obj['username']) | empty($json_obj['password'])){
            echo json_encode(array(
                "success" => false,
                "message" => "Invalid username or password"
            ));
            exit;
        }
        else if($cnt == 1 && password_verify($pwd_guess, $pwd_hash)){
            ini_set("session.cookie_httponly",1);
            session_start();
            $_SESSION['username'] = $user_id;

            //create token for csrf
            $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32)); 

            echo json_encode(array(
                "success" => true
            ));
            exit;
        }else{
            echo json_encode(array(
                "success" => false,
                "message" => "Incorrect Username or Password"
            ));
            exit;
        }
    ?>


