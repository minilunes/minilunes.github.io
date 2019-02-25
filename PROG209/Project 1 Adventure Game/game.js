//Create the map
var map = [];

map[0] = "You find yourself in a room with a locked jailcell. Inside is a deceased body, in the corner is a backpack. HINT: You need a key to get inside the cell.";
map[1] = "You are finally inside that mysterious prison everyone has been talking about. In front of you is a hallway with many rooms. To your left is a jailcell. To your right, you see a bunch of guards standing around staring at you.";
map[2] = "Some guards stare at you up and down. They don't agree with you being there but comply in accordance of the Warden. They hand you a skeleton key and a pair of handcuffs, just in case.";
map[3] = "Another jail cell. Nobody is in this one and nothing out of the ordinary. It's awfully cold.";
map[4] = "You are deeper in the hallway. You hear a commotion in front of you and two ordinary rooms to your left and right. Better avoid confrontation for now.";
map[5] = "You are in the Warden's office. It's warm and cozy but nobody is here. Around you is a room with a bunch of shelves and a lonely baton leaning against the desk.";
map[6] = "There is a mysterious looking guard pacing back and forth. He has some sort of key around his belt loop but won't give it up, not without financial compensation.";
map[7] = "Uh oh! There are two guards failing to subdue an aggressive prisoner! One yells out at you, 'DON'T JUST STAND THERE. HELP US!'";
map[8] = "Finally, the records room. Inside is all the information you need on the case. Good job!";

//Set the player's start location
var mapLocation = 4;

//Set the images
var images = [];
images[0] = "jailcell.png";
images[1] = "entrance.png";
images[2] = "guards.png";
images[3] = "emptycell.png";
images[4] = "hallway.png";
images[5] = "office.png";
images[6] = "singleguard.png";
images[7] = "prisoner.png";
images[8] = "records.png";

//Set the blocked-path messages
var blockedPathMessages = [];
blockedPathMessages[0] = "It's too dangerous to move that way.";
blockedPathMessages[1] = "A mysterious force holds you back.";
blockedPathMessages[2] = "A tangle of thorns blocks your way.";
blockedPathMessages[3] = "You can't step over the dragon.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "The gate locks shut.";
blockedPathMessages[6] = "The river is too deep to cross.";
blockedPathMessages[7] = "The trees are too thick to pass.";
blockedPathMessages[8] = "You're too scared to go that way.";

//Create the items and set their locations
var items = ["Cell Key", "Money", "Baton", "Handcuffs", "Records Room Key"];
var itemLocations = [2, 0, 5, 2, 6];

//An array to store what the player is carrying
var backpack = [];

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = "";

//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow = ["north", "east", "south", "west", "take", "use", "drop"];
var action = "";

//An array of items the game understands
//and a variable to store the current item
var itemsIKnow = ["Cell Key", "Money", "Baton", "Handcuffs", "Records Room Key"];
var item = "";

//The img element
var image = document.querySelector("img");

//The input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");

//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//Display the player's location
render();

function clickHandler()
{
  playGame();
}

function playGame()
{
   //Get the player's input and convert it to lowercase
   playersInput = input.value;
   playersInput = playersInput.toLowerCase();

   //Reset these variables from the previous turn
   gameMessage = "";
   action = "";

   //Figure out the player's action
   for(i = 0; i < actionsIKnow.length; i++)

{
  if(playersInput.indexOf(actionsIKnow[i]) !== -1)
  {
    action = actionsIKnow[i];
    console.log("player's action: " + action);
    break;
  }
}

//Figure out the item the player wants
for(i = 0; i < itemsIKnow.length; i++)
{
  if(playersInput.indexOf(itemsIKnow[i]) !== -1)
  {
    item = itemsIKnow[i];
    console.log("player's item: " + item);
  }
}

//Choose the correct action
switch(action)
{
  case "north":
    if(mapLocation >= 3)
    {
      mapLocation -= 3;
    }
    else
    {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

  case "east":
    if(mapLocation % 3 != 2)
    {
      mapLocation += 1;
    }
    else
    {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

  case "south":
    if(mapLocation < 6)
    {
      mapLocation += 3;
    }
    else

      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;

    case "west":
      if(mapLocation % 3 != 0)
      {
        mapLocation -= 1;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;

    case "take":
      takeItem()
      break;

    case "drop":
      dropItem();
      break;

    case "use":
      useItem();
      break;
    default:
      gameMessage = "I don't understand that.";
  }

  //Render the game
  render();
}

function takeItem()
{
   //Find the index number of the item in the items array
   var itemIndexNumber = items.indexOf(item);

   //Does the item exist in the game world and is it at the player's current location?
   if(itemIndexNumber !== -1
   && itemLocations[itemIndexNumber] === mapLocation)
   {
     gameMessage = "You take the " + item + ".";

     //Add the item to the player's backpack
     backpack.push(item);

     //Remove the item from the game world
     items.splice(itemIndexNumber, 1);
     itemLocations.splice(itemIndexNumber, 1);

     //Display in the console for testing
     console.log("World items: " + items);
     console.log("backpack items: " + backpack);
   }
   else
   {
     //Message if the player tries to take an item that isn't in the current location
     gameMessage = "You can't do that.";
   }
}

function dropItem()
{
   //Try to drop the item only if the backpack isn't empty
   if(backpack.length !== 0)
   {
     //Find the item's array index number in the backpack
     var backpackIndexNumber = backpack.indexOf(item);

     //The item is in the backpack if the backpackIndexNumber isn't -1
     if(backpackIndexNumber !== -1)
     {

      //Tell the player that the item has been dropped
      gameMessage = "You drop the " + item + ".";

      //Add the item from the backpack to the game world
      items.push(backpack[backpackIndexNumber]);
      itemLocations.push(mapLocation);

      //Remove the item from the player's backpack
      backpack.splice(backpackIndexNumber, 1);
     }
     else
     {
       //Message if the player tries to drop something that's not in the backpack
       gameMessage = "You can't do that.";
     }
   }
   else
   {
     //Message if the backpack is empty
     gameMessage = "You're not carrying anything.";
   }
}

function useItem()
{
   //1. Find out if the item is in the backpack

   //Find the item's array index number in the backpack
   var backpackIndexNumber = backpack.indexOf(item);

   //If the index number is -1, then it isn't in the backpack.
   //Tell the player that he or she isn't carrying it.
   if(backpackIndexNumber === -1)
   {
     gameMessage = "You're not carrying that item.";
   }

   //If there are no items in the backpack, then
   //tell the player the backpack is empty
   if(backpack.length === 0)
   {
     gameMessage += " Your backpack is empty";
   }

   //2. If the item is found in the backpack
   //figure out what to do with it
   if(backpackIndexNumber !== -1)
   {

     switch(item)
     {
       case "Cell Key":
	if (mapLocation === 0)
	{
         gameMessage = "The Cell Key opens the door.";
		 backpack.splice(backpackIndexNumber, 1);
	}
	else
	{
	gameMessage
    = "A key. Bet I could use this somewhere!";
    }
         break;

       case "Baton":
         if(mapLocation === 7)
         {
           gameMessage
             = "You swing your baton and knock the prisoner out!";
		backpack.splice(backpackIndexNumber, 3);
         }
         else
         {
           gameMessage
             = "You twirl your baton, very cool.";
         }
         break;


       case "Handcuffs":
         if(mapLocation === 7)
         {
           gameMessage
             = "You take your handcuffs out and subdue the prisoner.";
	        backpack.splice(backpackIndexNumber, 4);
         }
         else
         {
           gameMessage
             = "Better not accidentally handcuff myself.";
         }
         break;

       case "Money":
         if(mapLocation === 6)
         {
           gameMessage = "You exchange your money for the key around the guards belt.";

           //Remove the item from the player's backpack
           backpack.splice(backpackIndexNumber, 2);
         }
         else
         {
           gameMessage
             = "Wonder what I need money for.";
         }
         break;

	case "Records Room Key":
	if(mapLocation === 8)
	{
	 gameMessage = "You insert the key into the door and you hear the door unlock.";
	
	 backpack.splice(backpackIndexNumber, 5);
	}
	else
	{
	  gameMessage
	   = "Another key. How many keys do these people need?";
	}
	break;
      }
   }
}

function render()
{
   //Render the location
   output.innerHTML = map[mapLocation];
   image.src = "../images/" + images[mapLocation];

   //Display an item if there's one in this location
   //1. Loop through all the game items
   for(var i = 0; i < items.length; i++)
   {
     //Find out if there's an item at this location
     if(mapLocation === itemLocations[i])
     {
       //Display it
       output.innerHTML
       += "<br>You see a <strong>"
       + items[i]
       + "</strong> here.";
     }
   }

   //Display the game message
   output.innerHTML += "<br><em>" + gameMessage + "</em>";

   //Display the player's backpack contents
   if(backpack.length !== 0)
   {
     output.innerHTML += "<br>You are carrying: " + backpack.join(", ");
   }
}