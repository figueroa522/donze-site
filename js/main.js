//making global variables. they will be assigned later once the data from the api comes back
var key =  "znu8wq3ksvf9qhnsaxkdh32w",
	make,  model,  items,  makeModel, putIn,
	collection = {
		stereo : false,
		speakers : false,
		subwoofers : false,
		amps : false
	}; //apiplus the key as a variable. this connects to a outside commercial server which has a list of cars.


//the object the api returns is called data
$.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=" + key, function (data){
	parseDataBuildSelect(data, "makes", "auto-list-menu");
});
 

// Create a change event and get the value and pass it into the niceName


$('.auto-select').on('click', function() {
	$('.auto-list-menu').removeClass('none');

})

//this event handler gets fired when the select box changes
$('.auto-list-menu').on('change', function () {

	//this variable gets the value of the changed element. this is where the global variable make gets assigned
	make = $(this).val();

	//this is another api call which gets the models of any make
	$.get("https://api.edmunds.com/api/vehicle/v2/" +  make + "/models?api_key=" + key, function(data){
		parseDataBuildSelect(data, "models", "model-list-menu");
			
		//this removes class none displaying element 
		$('.model-list-menu').removeClass('none');
		//$('.model-list-menu option:not(:first-child)').remove();

		//this selector removes the option from class model-list-menu

	});
})

//this gets fired when the select element with the class model-list-menu gets changed(like clicking on it)
$('.model-list').on('change', function(data){
	//this variable gets the model value of which ever model gets clicked. this is where the global vaiable model is assigned	
	model = $(this).val();
	makeModel = make + ' ' + model;
	doSearch(makeModel, 'makeModelApiCallback');
	var url = $(this).find(':checked').attr('url');

})

doSearch('car stereo', 'stereoApiCallback', 15);


$('.tab').on('click', function() {
	var apiName = $(this).attr('do-search');
	$('.tab').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').addClass('none')
		.eq($(this).index()).removeClass('none');

		console.log(window);
	if(!collection[apiName]){
		showLoader();
		doSearch('car ' + apiName, apiName + 'ApiCallback', 15);
	}else{
		hideLoader();
	}
});

function showLoader() {
	$('.loader').removeClass('none');
}

function hideLoader() {
	$('.loader').addClass('none');
}


$('.stereo-list-menu, .speakers-list-menu, .subwoofers-list-menu, .amps-list-menu')
	.on('change', settingImageText);

function settingImageText(e){
	var url = $(this).find(':selected').attr('url');
	var title = $(this).find(':selected').attr('fullName');
	$('.itemDisplay img').attr('src', url);
	$('.titleDisplay').text(title);
	$('.speakers-list-menu').addClass('none');
}

//this function is a different api call thru ebay. in this api call we are getting car stereo images and other data ie: name, price
function doSearch(keywords, callback, pagination){
	var url = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords" +
	   "&SERVICE-VERSION=1.0.0" +
	   "&SECURITY-APPNAME=figinc-caraudio-PRD-23a0284bf-8d359210" + 
	   "&RESPONSE-DATA-FORMAT=JSON" +
	   "&callback=" + callback +  
	   "&REST-PAYLOAD" +
	   "&paginationInput.entriesPerPage=" + (pagination || 1) +
	   "&keywords=" + keywords ;

	//this will create a script tag with a source of the variable url.   
	var script = $('<script>', {src : url});

	//this will append( or add onto) script to the body of the page
	$('body').append(script);
}

function makeModelApiCallback(data){
	var items = data.findItemsByKeywordsResponse[0].searchResult[0].item;
	for(var i = 0; i < items.length; i++){
		var carPics = items[i].galleryURL[0];
	}
	$('.carDisplay img').attr('src', carPics);
}
function stereoApiCallback(data){
	objApiCallback(data, 'stereo-list-menu');
	var url = $(this).find(':selected').attr('url');
	var title = $(this).find(':selected').attr('title');
	
}
function speakersApiCallback(data){
	objApiCallback(data, 'speakers-list-menu');
}
function ampsApiCallback(data){
	objApiCallback(data, 'amps-list-menu');
}
function subwoofersApiCallback(data){
	objApiCallback(data, 'subwoofers-list-menu');
}



// this is basically a stencil for filtering
// through the api to retrieve makes and models. the code for both is pretty much the same so
// we pass in parameters data, dataKey, classname. these are the only things which change when 
// retrieving makes and models.
function parseDataBuildSelect(data, dataKey, className){

	var list = data[dataKey];
	for(var i = 0; i < list.length; i++){

		var obj = list[i];

		var option = $('<option>', {text : obj.name, value : obj.niceName});

		$('.' + className).append(option);
	}
}

function objApiCallback(data, className){
	var items = data.findItemsByKeywordsResponse[0].searchResult[0].item,
	pic, titles, truncatedTitle, list;

	hideLoader();
	collection[className.split('-')[0]] = true;

	for(var i = 0; i < items.length; i++){
		pic = items[i].galleryURL[0];
		title = items[i].title[0];
		truncatedTitle = title.split(' ').splice(0,2).join('') + ('...');
		list = $('<option>', { text : truncatedTitle, url : pic, fullName : title});

		$('.' + className).append(list);
	}	

	
}
