var config = {
    apiKey: "AIzaSyCYN0_IunAItRs_0cclw8IIX1L7LhKF6cE",
    authDomain: "train-calculator.firebaseapp.com",
    databaseURL: "https://train-calculator.firebaseio.com",
    storageBucket: "train-calculator.appspot.com",
    messagingSenderId: "722243997669"
  };
  
	firebase.initializeApp(config);

var database = firebase.database();
var train = '';
var	destination = '';
var	frequency = '';
	
$("#addTrainBtn").on("click", function(){
		
	train = $("#trainField").val();
	destination = $("desField").val();
	frequency = $("freqField").val();
		
	database.ref().push({
		train: train,
		destination: destination,
		frequency: frequency,
	});

	$("#trainField").val("");
	$("desField").val("");
	$("freqField").val("");

	return false;
});

database.ref().on("child_added", function(snapshot){
	var trainRow = $("<tr>");
	var trainCell = $("<td>");
		trainCell.append(snapshot.val().train);

	trainRow.append(trainCell);
	trainRow.appendTo($("#tbody"));
});

