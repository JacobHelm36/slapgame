let cookieObj = {
  health: 100,
  hitCount: 0,
  status: [
    {
      level: "strong",
      img: ""
    },
    {
      level: "Taking hits",
      img: "",
    },
    {
      level: "Falling apart",
      img: ""
    },
    {
      level: "Thats a tough cookie",
      img: ""
    }
  ]
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

let healthElem = document.getElementById("health").textContent
let hitcountElem = document.getElementById("hit-count").textContent
let cookieLevelElem = document.getElementById("cookie-level")
let cookieImgElem = document.getElementById("cookie-image")

let modifiers = 0
//loops thru the clicker items and adds them
function addMods(){
  for(let i = 0; i < clicker.items.length; i++) {
    modifiers += clicker.items[i].modifier;
    console.log(modifiers)
    return modifiers;
  }
}
//Getting items damage to stack on top of eachother?
//First item chose is the only one that will add?

let itemCount = 0
//pushes items into the clicker items array, all my items line (94)
function knifers() {
  if (itemCount == 1){
    document.getElementById("item-limit").textContent = "You can only take this item once"
    itemCount--
    clicker.items.pop
  } else {
  itemCount++
  document.getElementById("knife")
  clicker.items.push(items.knife)
  console.log(modifiers)
  addMods()
  }
}


function battleScream() {
  if (itemCount == 1){
    document.getElementById("item-limit").textContent = "You can only take one item"
    itemCount--
    clicker.items.pop
  } else {
  itemCount++
  document.getElementById("battle-cry")
  clicker.items.push(items.battleScream)
  console.log(modifiers)
  addMods()
  }
}

function butters() {
  if (itemCount == 1){
    document.getElementById("item-limit").textContent = "You can only take this item once"
    itemCount--
    clicker.items.pop()
  } else {
  document.getElementById("but").textContent
  clicker.items.push(items.butter)
  console.log(modifiers)
  addMods()
  }
}


//attacks end line (118)
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
  //get a KO'd picture here
  document.getElementById("weariness").textContent = "Defeated"
  document.getElementById("cookie-level").textContent = "A picture of a defeated cookie!"
  alert(location.reload())
}


function update() {
  document.getElementById("health").textContent = cookieObj.health.toString()
  document.getElementById("hit-count").textContent = cookieObj.hitCount.toString()
}


//for the status images of the cookie
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


//location.reload() restarts the page, set it after an alert.
//google search transparent background images