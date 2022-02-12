let cheese = 0
let cps = 0
let tcm = 0


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
         clickUpgrades.pickaxes.price *=2
         console.log("purchased")
     }
     update()
 } 
 function buyRover() {
    if(cheese >= automaticUpgrades.rovers.price) {
        automaticUpgrades.rovers.quantity++
        cheese -= automaticUpgrades.rovers.price
        automaticUpgrades.rovers.price *=2
        console.log("purchased")
    }
    update()
} 
function buyRocket() {
    if(cheese >= automaticUpgrades.rocket.price) {
        automaticUpgrades.rocket.quantity++
        cheese -= automaticUpgrades.rocket.price
        automaticUpgrades.rocket.price *=2
        console.log("purchased")
    }
    update()
} 

 function buyMiner() {
    if(cheese >= clickUpgrades.cartminer.price) {
        clickUpgrades.cartminer.quantity++
        cheese -= clickUpgrades.cartminer.price
        clickUpgrades.cartminer.price *=2
        
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
    let total = 0
    for(let key in clickUpgrades) {
        eachUpgrade = clickUpgrades[key]
        total += (eachUpgrade.quantity * eachUpgrade.multiplier)
    }
    tcm = total


    document.getElementById("cheese").innerText = cheese
    document.getElementById("pickaxes").innerText = clickUpgrades.pickaxes.quantity
    document.getElementById("miners").innerText = clickUpgrades.cartminer.quantity
    document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
    document.getElementById("rockets").innerText = automaticUpgrades.rocket.quantity
    document.getElementById("pick-cost").innerText = clickUpgrades.pickaxes.price
    document.getElementById("miner-cost").innerText = clickUpgrades.cartminer.price
    document.getElementById("rover-cost").innerText = automaticUpgrades.rovers.price
    document.getElementById("rocket-cost").innerText = automaticUpgrades.rocket.price
    document.getElementById("cps").innerText = cps = (cps/3).toFixed(2)
    document.getElementById("tcm").innerText = tcm
    
}


function collectAutoUpgrades() {
    let total = 0
    for (let key in automaticUpgrades) {
        eachUpgrade = automaticUpgrades[key]
        cheese += eachUpgrade.quantity * eachUpgrade.multiplier
        total += (eachUpgrade.quantity * eachUpgrade.multiplier)
    }
          
    cps = total
    update()
}

setInterval(collectAutoUpgrades, 3000)