<?php
$cnt = 0;
$arr = array();
if (($handle = fopen("input.csv","r")) != false) {
	while (($data = fgetcsv($handle, 1000, ",")) != false) {
		$cnt++;
		$num = count($data);

		// check columns count
		if (($num != 4) && ($cnt > 2)) {
			echo "Warning!! There is malformatted row on line ".$cnt;
			exit();
		}
		
		// should check email format
		if (!(isValidEmailAddress($data[1])) && ($cnt > 3) && ($data[1] != '')) {
			echo "Warning!! Email format error ".$cnt;
			exit();	
		} else {
			// lowercase email
			$data[1] = strtolower($data[1]);
		}
		// end of email format check
		
		$duplicate = false;
		$index = 0;
		foreach ($arr as $item) {
			if ($item[0] == $data[0]) {			
				// update current data if new data contains no-blank data
				if ($data[1] != '')
					$arr[$index][1] = $data[1];
				if ($data[2] != '')
					$arr[$index][2] = $data[2];
				if ($data[3] != '')
					$arr[$index][3] = $data[3];
				// set duplicate to true
				$duplicate = true;
			} 
			$index++;
		}
		// if not duplicate, add to array
		if (!($duplicate) && $cnt > 2)
			$arr[] = $data;	
	}

	fclose($handle);
}

// write file
$fp = fopen('output.csv', "w");
// foreach record 
foreach ($arr as $field) {
	fputcsv($fp, $field);
}
fclose($fp);

echo "Process Done !! File saved as output.csv";

function isValidEmailAddress($email) {
	$regex = "/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/";
	if ( preg_match( $regex, $email ) ) {
	    return true;
	}
	return false;
}