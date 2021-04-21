let p1Status = 0;
let p1Punch = "p1punch";

let p2Status = 1;
let p2Punch = "p2punch";

let p3Status = 2;
let p3Punch = "p3punch";



function player(status1, status2, status3, punch, punch2, punch3) {
    if (classes.hero[status1].status != "dead" && classes.hero[status1].status != "done") {
        classes.hero[status1].status = "active";
        document.getElementById(punch).classList.remove('ready');
        document.getElementById(punch).classList.add('active');
        document.getElementById(punch2).classList.remove('active');
        document.getElementById(punch3).classList.remove('active');
        if (classes.hero[status2].status == "active") {
            classes.hero[status2].status = "done"
        };
        if (classes.hero[status3].status == "active") {
            classes.hero[status3].status = "done"
        };
    }
};


function upAndDownShake() {

    //Shake the sprite while the `counter` is less than 
    //the `numberOfShakes`
    if (counter < numberOfShakes) {

      //Reset the sprite's position at the start of each shake
      sprite.x = startX;
      sprite.y = startY;

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Randomly change the sprite's position
      sprite.x += randomInt(-magnitude, magnitude);
      sprite.y += randomInt(-magnitude, magnitude);

      //Add 1 to the counter
      counter += 1;
    }

    //When the shaking is finished, restore the sprite to its original 
    //position and remove it from the `shakingSprites` array
    if (counter >= numberOfShakes) {
      sprite.x = startX;
      sprite.y = startY;
      shakingSprites.splice(shakingSprites.indexOf(sprite), 1);
    }
  }
