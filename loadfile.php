<?php
$target_dir = "sessions/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$audioFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$valid_extension = array('.mp3', '.mp4', '.wav', 'm4a');
$file_extension = strtolower( strrchr( $_FILES["file"]["name"], "." ) );

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {

    // Allow certain file formats
    if($imageFileType = "mp4" && $imageFileType = "m4a" && $imageFileType = "mp3"
    && $imageFileType = "wav" ) {
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "A file with this name has already been uploaded.";
            $uploadOk = 0;
        }
        else {
            $uploadOk = 1;
            move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
            echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        }
    }
    else {
        echo "Wrong filetype";
    }

}

?>