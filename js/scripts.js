//backend logic
function Cat (catName, age, personality, color) {
	this.catName = catName;
	this.age = age;
	this.personalityAnswer = personality;
	this.independent = ["Staring out windows", "Hiding in boxes", "Being fed treats", "Meowing at 3AM", "Sitting on the highest shelf of the cat tree", "Rubbing around your ankles and then running away", "Watching you sleep", "Long naps"];
	this.playful = ["Attacking ankles", "Playing with toy mice", "Chasing laser pointers", "Rolling around on the floor for no reason", "Eating house plants", "Playing fetch", "Eating catnip, and then running around the house"];
	this.cuddly = ["Sitting on your lap", "Being held like a baby", "Laying on your computer when you are trying to work", "Purring", "Waking you up by putting their paw on your face", "Sleeping under the blankets", "Baking bread", "Good ear scratches"];
	this.curious = ["Trying to catch birds through windows", "Climbing onto the refridgerator", "Batting breakables off of shelves", "Greeting visitors", "Trying to escape out the front door", "Eating food you left on out on the counter", "Getting lost in walls"];
	this.catColor = color;
	this.orange = ["<img src='img/orange/orange01.jpg' width='100%'>", "<img src='img/orange/orange02.jpg' width='100%'>"];
	this.white = ["<img src='img/white/white01.jpg' width='100%'>", "<img src='img/white/white02.jpg' width='100%'>", "<img src='img/white/white03.jpg' width='100%'>"];
	this.black = ["<img src='img/black/black01.jpg' width='100%'>", "<img src='img/black/black02.jpg' width='100%'>"];
	this.brown = ["<img src='img/brown/brown01.jpg' width='100%'>", "<img src='img/brown/brown02.jpg' width='100%'>", "<img src='img/brown/brown03.jpg' width='100%'>"];
	this.grey = ["<img src='img/grey/grey01.jpg' width='100%'>", "<img src='img/grey/grey02.jpg' width='100%'>", "<img src='img/grey/grey03.jpg' width='100%'>"];
	};

Cat.prototype.Random = function() {
  if (this.personalityAnswer === "cuddly") {
			var = cuddleTrait;
			cuddleTrait = (this.cuddly[Math.floor(Math.random() * this.cuddly.length)]);
			catFamily.catPersonality.push(cuddleTrait);
			return (cuddleTrait);
  } else if (this.personalityAnswer === "curious") {
			var = curiousTrait;
			curiousTrait = (this.curious[Math.floor(Math.random() * this.curious.length)]);
			catFamily.catPersonality.push(curiousTrait);
			return (curiousTrait);
  } else if (this.personalityAnswer === "playful") {
			var = playfulTrait;
			playfulTrait = (this.playful[Math.floor(Math.random() * this.playful.length)]);
			catFamily.catPersonality.push(playfulTrait);
			return (playfulTrait);
  } else (this.personalityAnswer === "independent")
			var = independentTrait;
			independentTrait = (this.independent[Math.floor(Math.random() * this.independent.length)]);
			catFamily.catPersonality.push(independentTrait);
			return (independentTrait);
};

Cat.prototype.randomImg = function() {
  if (this.catColor === "orange") {
      var orangePic = this.orange[Math.floor(Math.random() * this.orange.length)];
			catFamily.catPhoto.push(orangePic);
			return (orangePic);
		} else if (this.catColor === "black") {
	    var blackPic = this.black[Math.floor(Math.random() * this.black.length)];
			catFamily.catPhoto.push(blackPic);
			return (blackPic);
		} else if (this.catColor === "white") {
		  var whitePic = this.white[Math.floor(Math.random() * this.white.length)];
			catFamily.catPhoto.push(whitePic);
			return (whitePic);
		} else if (this.catColor === "grey") {
		  var greyPic = this.grey[Math.floor(Math.random() * this.grey.length)];
			catFamily.catPhoto.push(greyPic);
			return (greyPic);
		} else {
			var brownPic = this.brown[Math.floor(Math.random() * this.brown.length)];
			catFamily.catPhoto.push(brownPic);
			return (brownPic);
		}
};


function catFamily () {
	catName = [];
	catColor = [];
	catPersonality = [];
	catAge = []
	catPhoto = []
	numberOfCats = 0;
}

catFamily.prototype.addtoFamily = function() {
	this.catName.push(brownPic);
}

//user interface logic
$(document).ready(function(){
	$("#addACat").click(function(event){
    event.preventDefault();
    $("#addACatSection").show();
		$("#landingSection").hide();
  });
	$("#start").click(function(event){
    event.preventDefault();
    $("#addACatSection").show();
		$("#landingSection").hide();
  });
	$("#showFormAgain").click(function(event){
    event.preventDefault();
    $("#addACatSection").show();
		$("#resultSection").hide();
  });
	$("#addtoFamily").click(function(event){
    event.preventDefault();
    $("#catFamilySection").show();
		$("#resultSection").hide();
  });
	$("form#cat-form").submit(function(event){
    event.preventDefault();
    var personName = $("#name").val();
    var age = $("#age").val();
		var catColor = $("input:radio[name=color]:checked").val();
    var catName = $("#catName").val();
    var personalityAnswer = $("input:radio[name=personality]:checked").val();
		newCat = new Cat(catName, age, personalityAnswer, catColor);
		$("#fam-name").text(personName + ", we'd like you to meet:");
		$("#results").html("<span id='catResults'>" + "<p>Name: " + newCat.catName + "</p>" + "<p>Age: " + newCat.age + "</p>" + "<p>Favorite Thing: " + newCat.Random() + "</p></span>");
		$("#photoResults").html(newCat.randomImg());
		$("#name").hide();
		$("#resultSection").show();
		$("#addACatSection").hide();
  });

});
