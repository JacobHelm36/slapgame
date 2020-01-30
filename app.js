let cookieObj = {
  health: 100,
  hitCount: 0,
}
let clicker = { attacks: {
  slap: 1,
  punch: 5,
  kick: 10,},
  items: []
}
let items = {
  knife: {name:"Knife", modifier: 5, description:"cut the crumbles!!"},
  battleScream: {name: "Battle Cry", modifier: 2, description:"scream for your anscestors strength"},
  butter: {name: "Butter", modifier: 3, description:"butter good"},
}

let healthElem = document.getElementById("health").innerHTML
let hitcountElem = document.getElementById("hit-count").textContent


let modifiers = 0
//loops thru the clicker items and adds them
function addMods(){
  modifiers = 0;
  for(let i = 0; i < clicker.items.length; i++) {
    modifiers += clicker.items[i].modifier;
    console.log(modifiers)
    return modifiers;
  }
}


//pushes items into the clicker items array
function knifers() {
  document.getElementById("knife").textContent
  clicker.items.push(items.knife)
  addMods()
}

function battleScream() {
  document.getElementById("battle-cry").textContent
  clicker.items.push(items.battleScream)
  addMods()
}

function butters() {
  document.getElementById("but").textContent
  clicker.items.push(items.butter)
  addMods()
}

//Which one is better?
//Why doesnt this work?
//Add this damage to an object?
function attacks(slappy){
  if (slappy == "slap") {
    cookieObj.health -= modifiers+1;
    cookieObj.hitCount++
    update()
  }
  if (slappy == "punch") {
    cookieObj.health-= modifiers+5;
    cookieObj.hitCount++
    update()
  }
  if (slappy == "kick") {
    cookieObj.health-=modifiers+10;
    cookieObj.hitCount++
    update()
  }
  if (cookieObj.health<0){
    cookieObj.health=0;
    knockedOut()
  }
}
attacks()

function knockedOut(){
  document.getElementById("").textContent
  //get a KO'd picture here
}

//location.reload() restarts the page, set it after an alert.


function update() {
  document.getElementById("health").textContent = cookieObj.health.toString()
  document.getElementById("hit-count").textContent = cookieObj.hitCount.toString()
  if (cookieObj.health<=0) {
    cookieObj.health = 0;
  }
}
update()

function wearyCookie() {
  let weary = document.getElementById("weariness").innerHTML
  if (cookieObj.health <75) {
    weary = "I can take more than that";
  }
  if (cookieObj.health <50) {
    weary = "Okay, take it easy"
  }
  if (cookieObj.health <25) {
    weary = "I'm crumbling to pieces"
  }
  if (cookieObj.health == 0) {
    weary = "I'm crumbled, but I'll be back!!"
  }
}