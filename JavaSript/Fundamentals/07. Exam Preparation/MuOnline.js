function muOnline(commonArr) {
    let healt = 100;
    let counter = 0;
    let splitArr = commonArr.split("|");
    let bitcoins = 0;
	
    for (room of splitArr) {
      let [command, points] = room.split(" ");
	  
      points = Number(points);
      counter++;
	  
      if (command == "potion") {
        let healedWith = healt + points > 100 ? 100 - healt : points;
		
        console.log(`You healed for ${healedWith} hp.`);
        healt += points;
		
        if (healt > 100) {
          healt = 100;
        }
		
        console.log(`Current health: ${healt} hp.`);
      } else if (command == "chest") {
        bitcoins += points;
        console.log(`You found ${points} bitcoins.`);
      } else {
        healt -= points;
		
        if (healt > 0) {
          console.log(`You slayed ${command}.`);
        } else if (healt <= 0) {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${counter}`);
          return;
        }
      }
    }
	
    if (healt > 0) {
      console.log("You've made it!");
    }
	
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${healt}`);
  }

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');