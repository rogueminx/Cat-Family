//backend logic
function Cat (catName, age, personality, color) {
	this.catName = catName;
	this.age = age;
	this.personalityAnswer = personality;
	this.catColor = color;
	this.catPhoto = 0;
	this.catTrait = 0;
	this.catLocation = 0;
	this.independent = ["Staring out windows", "Hiding in boxes", "Being fed treats", "Meowing at 3AM", "Sitting on the highest shelf of the cat tree", "Rubbing around your ankles and then running away", "Watching you sleep", "Long naps"];
	this.playful = ["Attacking ankles", "Playing with toy mice", "Chasing laser pointers", "Rolling around on the floor for no reason", "Eating house plants", "Playing fetch", "Eating catnip, and then running around the house"];
	this.cuddly = ["Sitting on your lap", "Being held like a baby", "Laying on your computer when you are trying to work", "Purring", "Waking you up by putting their paw on your face", "Sleeping under the blankets", "Baking bread", "Good ear scratches"];
	this.curious = ["Trying to catch birds through windows", "Climbing onto the refridgerator", "Batting breakables off of shelves", "Greeting visitors", "Trying to escape out the front door", "Eating food you left on out on the counter", "Getting lost in walls"];
	this.orange = ["<img src='img/orange/orange01.jpg' width='100%'>", "<img src='img/orange/orange02.jpg' width='100%'>", "<img src='img/orange/orange03.jpg' width='100%'>", "<img src='img/orange/orange04.jpg' width='100%'>", "<img src='img/orange/orange05.jpg' width='100%'>"];
	this.white = ["<img src='img/white/white01.jpg' width='100%'>", "<img src='img/white/white02.jpg' width='100%'>", "<img src='img/white/white03.jpg' width='100%'>", "<img src='img/white/white04.jpg' width='100%'>", "<img src='img/white/white05.jpg' width='100%'>"];
	this.black = ["<img src='img/black/black01.jpg' width='100%'>", "<img src='img/black/black02.jpg' width='100%'>", "<img src='img/black/black03.jpg' width='100%'>", "<img src='img/black/black04.jpg' width='100%'>", "<img src='img/black/black05.jpg' width='100%'>"];
	this.brown = ["<img src='img/brown/brown01.jpg' width='100%'>", "<img src='img/brown/brown02.jpg' width='100%'>", "<img src='img/brown/brown03.jpg' width='100%'>", "<img src='img/brown/brown04.jpg' width='100%'>", "<img src='img/brown/brown05.jpg' width='100%'>"];
	this.grey = ["<img src='img/grey/grey01.jpg' width='100%'>", "<img src='img/grey/grey02.jpg' width='100%'>", "<img src='img/grey/grey05.jpg' width='100%'>", "<img src='img/grey/grey04.jpg' width='100%'>", "<img src='img/grey/grey01.jpg' width='100%'>"];
	this.location = ["Oregon Humane Society, 1067 NE Columbia Blvd, Portland", "The Pixie Project, 510 NE Martin Luther King Jr Blvd, Portland", "Cat Adoption Team, 14175 SW Galbreath Dr, Sherwood", "Furry Friends Cat Rescue, 6715 NE 63rd St #450, Vancouver", "Animal Aid Inc, 5335 SW 42nd Ave, Portland"]
};

	function catFamily () {
		this.catName = new Array(1);
		this.catColor = new Array(1);
		this.catPersonality = new Array(1);
		this.catPersonalityType = new Array(1);
		this.catAge = new Array(1)
		this.catPhoto = new Array(1)
		this.numberOfCats = 0;
};

Cat.prototype.Random = function() {
  if (this.personalityAnswer === "cuddly") {
		 	this.catTrait = (this.cuddly[Math.floor(Math.random() * this.cuddly.length)]);
			return (this.catTrait);
  } else if (this.personalityAnswer === "curious") {
			this.catTrait = (this.curious[Math.floor(Math.random() * this.curious.length)]);
			return (this.catTrait);
  } else if (this.personalityAnswer === "playful") {
			this.catTrait = (this.playful[Math.floor(Math.random() * this.playful.length)]);
			// catFamily.catPersonality.push(playfulTrait);
			return (this.catTrait);
  } else (this.personalityAnswer === "independent")
			this.catTrait = (this.independent[Math.floor(Math.random() * this.independent.length)]);
			// catFamily.catPersonality.push(independentTrait);
			return (this.catTrait);
};

Cat.prototype.randomImg = function() {
  if (this.catColor === "orange") {
      this.catPhoto = this.orange[Math.floor(Math.random() * this.orange.length)];
			// catFamily.catPhoto.push(orangePic);
			return (this.catPhoto);
		} else if (this.catColor === "black") {
	    this.catPhoto = this.black[Math.floor(Math.random() * this.black.length)];
			// catFamily.catPhoto.push(blackPic);
			return (this.catPhoto);
		} else if (this.catColor === "white") {
		  this.catPhoto = this.white[Math.floor(Math.random() * this.white.length)];
			// catFamily.catPhoto.push(whitePic);
			return (this.catPhoto);
		} else if (this.catColor === "grey") {
		  this.catPhoto = this.grey[Math.floor(Math.random() * this.grey.length)];
			// catFamily.catPhoto.push(greyPic);
			return (this.catPhoto);
		} else {
			this.catPhoto = this.brown[Math.floor(Math.random() * this.brown.length)];
			// catFamily.catPhoto.push(brownPic);
			return (this.catPhoto);
		}
};

Cat.prototype.randomLoc = function() {
	this.catLocation = this.location[Math.floor(Math.random() * this.location.length)];
	return (this.catLocation);
};

catFamily.prototype.allLocations = function() {
	var catNumber = this.numberOfCats;
	if (this.numberOfCats >= 1)
		for (index = 0; index < catNumber ; index += 1){
			$("#locations").append("<p><b>" + this.catName[index] + ":</b> " + newCat.randomLoc() + "</p>");
		};
};

catFamily.prototype.addtoFamily = function() {
	if (this.numberOfCats < 1){
		this.catPhoto.unshift(newCat.catPhoto);
		this.catName.unshift(newCat.catName);
		this.catAge.unshift(newCat.age);
		this.catColor.unshift(newCat.catColor);
		this.catPersonalityType.unshift(newCat.personalityAnswer);
		this.catPersonality.unshift(newCat.catTrait);
		this.catPhoto.pop();
		this.catName.pop();
		this.catAge.pop();
		this.catColor.pop();
		this.catPersonalityType.pop();
		this.catPersonality.pop();
	} else {
		this.catPhoto.unshift(newCat.catPhoto);
		this.catName.unshift(newCat.catName);
		this.catAge.unshift(newCat.age);
		this.catColor.unshift(newCat.catColor);
		this.catPersonalityType.unshift(newCat.personalityAnswer);
		this.catPersonality.unshift(newCat.catTrait);
	};
	this.numberOfCats += 1;
};

catFamily.prototype.showFamily = function() {
	var currentCatNumber = this.numberOfCats;
	if (this.numberOfCats >= 1)
		for (index = 0; index < currentCatNumber ; index += 1){
			$("#catFamilySectionRight").append("<div class='row' id='catFamRow'><div class='col-md-3' id='familyPhotoResults'>" + this.catPhoto[index] + "</div><div class='col-md-9' id='familyResults'><p>Name: " + this.catName[index] + "</p><p>Age: " + this.catAge[index] + "</p><p>Personality Type: " + this.catPersonalityType[index] + "</p><p>Favorite Thing: " + this.catPersonality[index] + "</p></div></div>");
		};
};

function resetform() {
	$("#check").prop("checked", true);
	$("#alsocheck").prop("checked", true);
	$("#catName").val("");
	$("#age").val(1);
};


//user interface logic
$(document).ready(function(){
	newcatFamily = new catFamily();

	$("#addACat").click(function(event){
    event.preventDefault();
		resetform();
    $("#addACatSection").fadeIn(900);
		$("#landingSection").fadeOut(900);
		$("#catFamilySection").fadeOut(900);
		$("#aboutUsSection").fadeOut(900);
		$("#catFamilySectionRight").empty();
  });

	$("#start").click(function(event){
    event.preventDefault();
    $("#addACatSection").fadeIn(900);
		$("#landingSection").fadeOut(900);
  });

	$("#yourFamily").click(function(event){
    event.preventDefault();
		if (newcatFamily.numberOfCats >= 1) {
			$("#catFamilySectionRight").empty();
			newcatFamily.showFamily();
	    $("#catFamilySection").fadeIn(900);
			$("#resultSection").fadeOut(900);
			$("#addACatSection").fadeOut(900);
			$("#landingSection").fadeOut(900);
			$("#aboutUsSection").fadeOut(900);
		}
  });

	$("#aboutUs").click(function(event){
		event.preventDefault();
		$("#catFamilySection").hide();
		$("#resultSection").fadeOut(900);
		$("#addACatSection").fadeOut(900);
		$("#landingSection").fadeOut(900);
		$("#aboutUsSection").fadeIn(900);
	});

	$("#showFormAgain").click(function(event){
    event.preventDefault();
		resetform();
    $("#addACatSection").fadeIn(900);
		$("#resultSection").fadeOut(900);
		$("#catFamilySectionRight").empty();
  });

	$("#addtoFamily").click(function(event){
    event.preventDefault();
		newcatFamily.addtoFamily();
		newcatFamily.showFamily();
    $("#catFamilySection").fadeIn(900);
		$("#resultSection").fadeOut(900);
		$("#adoptionLocations").fadeOut(900);
		$("#catFamilySectionLeftInner").fadeIn(900);
		resetform();
  });

	$("#addAnotherCat").click(function(event){
    event.preventDefault();
		resetform();
    $("#addACatSection").fadeIn(900);
		$("#resultSection").fadeOut(900);
		$("#catFamilySection").fadeOut(900);
		$("#catFamilySectionRight").empty();
  });

	$("form#cat-form").submit(function(event){
    event.preventDefault();
    var personName = $("#name").val();
    var age = $("#age").val();
		var catColor = $("#color").val();
    var catName = $("#catName").val();
    var personalityAnswer = $("#personality").val();
		newCat = new Cat(catName, age, personalityAnswer, catColor);
		$("#fam-name").text(personName + ", we'd like you to meet:");
		$("#results").html("<span id='catResults'>" + "<p>Name: " + newCat.catName + "</p>" + "<p>Age: " + newCat.age + "</p>" + "<p>Favorite Thing: " + newCat.Random() + "</p></span>");
		$("#photoResults").html(newCat.randomImg());
		$("#name-section").fadeOut(900);
		$("#resultSection").fadeIn(900);
		$("#addACatSection").fadeOut(900);
  });

	$("#adopt").click(function(event) {
		$("#catFamilySectionLeftInner").hide();
		$("#adoptionLocations").fadeIn(900);
		$("#locations").html(newcatFamily.allLocations());
	});
	
});
