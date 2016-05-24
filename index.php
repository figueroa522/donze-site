<!DOCTYPE html>
<html>
<head>
	<title>The installation site</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" type="text/css"/>
		<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<?php include 'nav.php'; ?>
	<div class="container">
		
		<div class="api-selection-area">
			<div class="tabs">
				<div class="tab active" do-search="stereo">Stereo's</div>
				<div class="tab" do-search="speakers">Speakers</div>
				<div class="tab" do-search="subwoofers">Subwoofer's</div>
				<div class="tab" do-search="amps">Amps</div>
			</div>
			<div class="tab-content-area">
				<div class="loader">
					<img src="img/ajax.gif" alt="">
				</div>
				<div class="tab-content">
					<select class="tab-select stereo-list-menu">
						<option>Select Stereo</option>
					</select>
				</div>
				<div class="tab-content none">
					<select class="tab-select speakers-list-menu">
						<option>Select Speakers</option>
					</select>
				</div>
				<div class="tab-content none">
					<select class="tab-select subwoofers-list-menu">
						<option>Select subwoofers</option>
					</select>
				</div>
				<div class="tab-content none">
					<select class="tab-select amps-list-menu">
						<option>Select Amps</option>
					</select>
				</div>
			</div>
		</div>
		<div class="imageText">
			<div class="row">
			  <div id="small-img" class="col-lg-12 center">
				<div class="card col-sm-3">
				  <img class="card-img-top" data-src="..." alt="Card image cap">
				  <div class="card-block">
				  	<h4 class="card-title">Card title</h4>
				   	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
				<div class="card col-sm-3">
				  <img class="card-img-top" data-src="..." alt="Card image cap">
				  <div class="card-block">
				  	<h4 class="card-title">Card title</h4>
				   	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
				<div class="card col-sm-3">
				  <img class="card-img-top" data-src="..." alt="Card image cap">
				  <div class="card-block">
				  	<h4 class="card-title">Card title</h4>
				   	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
				<div class="card col-sm-3">
				  <img class="card-img-top" data-src="..." alt="Card image cap">
				  <div class="card-block">
				  	<h4 class="card-title">Card title</h4>
				   	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>			 
			  </div>
		</div>			
		
</div>
	</div>

	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>