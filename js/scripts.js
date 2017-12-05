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
      return (this.cuddly[Math.floor(Math.random() * this.cuddly.length)])
  } else if (this.personalityAnswer === "curious") {
      return (this.curious[Math.floor(Math.random() * this.curious.length)])
  } else if (this.personalityAnswer === "playful") {
      return (this.playful[Math.floor(Math.random() * this.playful.length)])
  } else (this.personalityAnswer === "independent")
      return (this.independent[Math.floor(Math.random() * this.independent.length)])
};

Cat.prototype.randomImg = function() {
  if (this.catColor === "orange") {
      var orangePic = this.orange[Math.floor(Math.random() * this.orange.length)];
			// $("#show-cat").html(orangePic);
			return (orangePic);
		} else if (this.catColor === "black") {
	    var blackPic = this.black[Math.floor(Math.random() * this.black.length)];
			// $("#show-cat").html(blackPic);
			return (blackPic);
		} else if (this.catColor === "white") {
		  var whitePic = this.white[Math.floor(Math.random() * this.white.length)];
			// $("#show-cat").html(whitePic);
			return (whitePic);
		} else if (this.catColor === "grey") {
		  var greyPic = this.grey[Math.floor(Math.random() * this.grey.length)];
			// $("#show-cat").html(greyPic);
			return (greyPic);
		} else {
			var brownPic = this.brown[Math.floor(Math.random() * this.brown.length)];
			// $("#show-cat").html(brownPic);
			return (brownPic);
		}
};


//user interface logic
$(document).ready(function(){
  $("form#cat-form").submit(function(event){
    event.preventDefault();
    var personName = $("#name").val();
    var age = $("#age").val();
		var catColor = $("input:radio[name=color]:checked").val();
    var catName = $("#catName").val();
    var personalityAnswer = $("input:radio[name=personality]:checked").val();
		newCat = new Cat(catName, age, personalityAnswer, catColor);
		// newCat.Random();
		// newCat.randomImg();
		$("#fam-name").text(personName);
		$("#name-header").show();
		// $("#show-cat").html(newCat.randomImg())
		$("#results").prepend("<div id='catResults' class='row'>" + "<div class='col-md-4'>" + newCat.randomImg() + "</div>" + "<div class='col-md-8'>" + "<p>Name: " + newCat.catName + "</p>" + "<p>Age: " + newCat.age + "</p>" + "<p>Favorite Thing: " + newCat.Random() + "</p></div></div>" )
		// $("#returnCatName").text(newCat.catName);
		// $("#returnAge").text(newCat.age);
		// $("#returnPersonality").text(newCat.Random());

  });
});
