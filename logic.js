 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwHEvUBVTxsKuxxh-EESf4PtIbvVK2yrE",
    authDomain: "codebay-d4bfa.firebaseapp.com",
    databaseURL: "https://codebay-d4bfa.firebaseio.com",
    storageBucket: "codebay-d4bfa.appspot.com",
    messagingSenderId: "1082414080103"
  };
  firebase.initializeApp(config);

  // database reference variable
  var db = firebase.database();
  
  //initial values
  var initialBid      = 0;
  var initialBidder   = "No one :-( "
  var highPrice       = initialBid;
  var highBidder      = initialBidder;


// initial snapshot
	db.ref().on("value", function(snapshot) {
		if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){
			highBidder = snapshot.val().highBidder;
			highPrice = snapshot.val().highPrice;
			$("#highestBidder").html(highBidder);
			$("#highestPrice").html("$" + highPrice);
		} else {
			$("#highestBidder").html(highBidder);
			$("#highestPrice").html("$" + highPrice);
		}
	})



  // button click
  $("#submitBid").on("click", function() {
  	var bidderName = $("#bidderName").val().trim();
  	var bidderPrice = $("#bidderPrice").val().trim();

  	console.log(bidderName);
  	console.log(bidderPrice);

  	if(bidderPrice > highPrice){
  		alert("You are the highest bidder!");
  		db.ref().set({
  			highBidder:bidderName,
  			highPrice:bidderPrice
  		})
  	} else {
  		alert("You have to bid higher!");
  	}
// Won't allow page reload
  	return false;
  })





















