<?php
$cnt = 0;
$arr = array();
if (($handle = fopen("input.csv","r")) != false) {
	while (($data = fgetcsv($handle, 1000, ",")) != false) {
		$cnt++;
		$num = count($data);
		// check columns count
		if ($num != 4) {
			echo "Warning!! There is malformatted data on line ".$cnt;
			exit();
		}
		
		// should check email format
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
		if (!($duplicate))
			$arr[] = $data;	

	}

	fclose($handle);
}

// write file
$fp = fopen('output.csv', "w");
foreach ($arr as $field) {
	fputcsv($fp, $field);
}
fclose($fp);
// print_r($arr);