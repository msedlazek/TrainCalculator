var config = {
    apiKey: "AIzaSyCYN0_IunAItRs_0cclw8IIX1L7LhKF6cE",
    authDomain: "train-calculator.firebaseapp.com",
    databaseURL: "https://train-calculator.firebaseio.com",
    storageBucket: "train-calculator.appspot.com",
    messagingSenderId: "722243997669"
  };
  
	firebase.initializeApp(config);

	var database = firebase.database();
	var train = "";
	var	destination = "";
	var	frequency = ""
	
	$("#addTrainBtn").on("click", function(){
		trainCounter++;
		database.ref().push({
			train: train,
			destination: destination,
			frequency: frequency
		});
	});

