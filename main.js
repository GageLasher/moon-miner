let cheese = 0


let clickUpgrades = {
    pickaxes: {
        price: 5,
        quantity: 0,
        multiplier: 1
    },
    cartminer: {
        price: 100,
        quantity: 0,
        multiplier: 5
    }


}

let automaticUpgrades = {
    rovers: {
      price: 600,
      quantity: 0,
      multiplier: 20
    },

    rocket: {
        price: 5000,
        quantity: 0,
        multiplier: 500
    }
  }

 function buyPickAxe() {
     if(cheese >= clickUpgrades.pickaxes.price) {
         clickUpgrades.pickaxes.quantity++
         cheese -= clickUpgrades.pickaxes.price
         console.log("purchased")
     }
     update()
 } 
 function buyRover() {
    if(cheese >= automaticUpgrades.rovers.price) {
        automaticUpgrades.rovers.quantity++
        cheese -= automaticUpgrades.rovers.price
        console.log("purchased")
    }
    update()
} 
function buyRocket() {
    if(cheese >= automaticUpgrades.rocket.price) {
        automaticUpgrades.rocket.quantity++
        cheese -= automaticUpgrades.rocket.price
        console.log("purchased")
    }
    update()
} 

 function buyMiner() {
    if(cheese >= clickUpgrades.cartminer.price) {
        clickUpgrades.cartminer.quantity++
        cheese -= clickUpgrades.cartminer.price
        console.log("purchased")
    }
    update()
} 



function mine() {
    cheese += 1 + clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier
    cheese += clickUpgrades.cartminer.quantity * clickUpgrades.cartminer.multiplier
    console.log(cheese);
    update()
}

function update() {
    document.getElementById("cheese").innerText = cheese
    document.getElementById("pickaxes").innerText = clickUpgrades.pickaxes.quantity
    document.getElementById("miners").innerText = clickUpgrades.cartminer.quantity
    document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
    document.getElementById("rockets").innerText = automaticUpgrades.rocket.quantity



}



function collectAutoUpgrades() {

    for (let key in automaticUpgrades) {
        eachUpgrade = automaticUpgrades[key]
        cheese += eachUpgrade.quantity * eachUpgrade.multiplier
        
        
    }
    update()
}

setInterval(collectAutoUpgrades, 3000)