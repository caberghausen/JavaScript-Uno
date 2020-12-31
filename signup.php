<?php
        require 'database.php';
        //set cookie to httponly
        ini_set("session.cookie_httponly",1);
        session_start();
        header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

        //Because you are posting the data via fetch(), php has to retrieve it elsewhere.
        $json_str = file_get_contents('php://input');
        //This will store the data into an associative array
        $json_obj = json_decode($json_str, true);

        $user = $json_obj['username'];
        $pwd = $json_obj['password'];
        $pwd_hash = password_hash($pwd, PASSWORD_BCRYPT);

        //check for csrf
        // if(!hash_equals($_SESSION['token'], $_POST['token'])){
        //     die("Request forgery detected");
        // }
        
        $check = $mysqli->prepare("SELECT COUNT(*), username, hashed_password FROM users WHERE username=?");

        // Bind the parameter
        $check->bind_param('s', $user);
        $check->execute();

        // Bind the results
        $check->bind_result($cnt, $user_id, $pwd_hash);
        $check->fetch();
        $check->close();

        if (empty($json_obj['username']) | empty($json_obj['password'])){
            echo json_encode(array(
                "success" => false,
                "message" => "Invalid username or password"
            ));
            exit;
        }
        else if ($cnt > 0){
            echo json_encode(array(
                "success" => false,
                "message" => "Username is taken"
            ));
            exit;
        }
        else{
            // Use a prepared statement
            $pwd_hash = password_hash($pwd, PASSWORD_BCRYPT);

            $stmt = $mysqli->prepare("insert into users (username, hashed_password) values ('$user', '$pwd_hash')");
            if(!$stmt){
                printf("Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }

            $stmt->execute();

            $stmt->close();

            $_SESSION['username'] = $user;
            $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32)); 
    
            echo json_encode(array(
                "success" => true
            ));
            exit;
        }
    ?>



