const gameDisplay = document.getElementById('game') as HTMLElement
const startDisplay = document.getElementById('chooseAnimal') as HTMLElement
const startGame = document.getElementById('startGame') as HTMLElement
const animal1 = document.getElementById('animal1idle') as HTMLElement
const animal2 = document.getElementById('animal2idle') as HTMLElement
const animal = document.getElementById('animal') as HTMLElement
const hpBar = document.getElementById('hpBar') as HTMLElement
const hpDisplay = document.getElementById('hpDisplay') as HTMLElement
const hungerBar = document.getElementById('hungerBar') as HTMLElement
const hungerDisplay = document.getElementById('hungerDisplay') as HTMLElement
const funBar = document.getElementById('funBar') as HTMLElement
const funDisplay = document.getElementById('funDisplay') as HTMLElement
const uiDisplay = document.getElementById('uiDisplay') as HTMLElement
const gameOverDisplay = document.getElementById('gameOver') as HTMLElement
const startAgain = document.getElementById('startAgain') as HTMLElement
const play = document.getElementById('play') as HTMLElement
const feed = document.getElementById('feed') as HTMLElement

let health:number = 100
let hunger:number = 100
let fun:number = 100
let gameActive:boolean = false
let playing:boolean = false
let animalPos:number = 50
let rightPos:boolean = true
let feeding:boolean = false

let chosenAnimal:string = ''

animal1.onclick = function () {
    chosenAnimal = 'animal1'
    if (chosenAnimal === 'animal1') {
        animal1.style.border = '3px solid yellow'
        animal2.style.border = '3px solid #2c2b62'
    }else if (chosenAnimal === 'animal2') {
        animal2.style.border = '3px solid yellow'
        animal1.style.border = '3px solid #2c2b62'
    }
}

animal2.onclick = function () {
    chosenAnimal = 'animal2'
    if (chosenAnimal === 'animal1') {
        animal1.style.border = '3px solid yellow'
        animal2.style.border = '3px solid #2c2b62'
    }else if (chosenAnimal === 'animal2') {
        animal2.style.border = '3px solid yellow'
        animal1.style.border = '3px solid #2c2b62'
    }
}


startGame.onclick = function () {
    if (chosenAnimal !== '') {
        startDisplay.style.display = 'none'
        gameDisplay.style.display = 'flex'
        gameActive = true
        if (chosenAnimal === 'animal1') {
            animal.style.animation = 'idleAnimAnimal1 0.5s infinite'
        } else if (chosenAnimal === 'animal2') {
            animal.style.animation = 'idleAnimAnimal2 0.5s infinite'
        }
        animal.style.right = `${animalPos}px`
    }
}

setInterval(function () {
    if (gameActive) {
        if (!(fun <= 0)) {
            fun --
            updateFun()
        }
        if (!(hunger <= 0)) {
            hunger --
            updateHunger()
        }
        if (fun === 0 && !(health <=0)) {
            health --
            updateHp()
        }
        if (hunger === 0 && !(health <=0)) {
            health --
            updateHp()
        }
        if (health <= 0 && chosenAnimal === 'animal1') {
            animal.style.animation = 'deathAnimAnimal1 2s linear'
            setTimeout(function (){
                gameOver()
            },2000)
        }
        if (health <= 0 && chosenAnimal === 'animal2') {
            animal.style.animation = 'deathAnimAnimal2 2s linear'
            setTimeout(function (){
                gameOver()
            },1000)
        }
    }
},1000)

function updateFun () {
    funBar.style.width = `${fun}%`
    funDisplay.innerHTML = `100/${fun}`
}
function updateHunger () {
    hungerBar.style.width = `${hunger}%`
    hungerDisplay.innerHTML = `100/${hunger}`
}
function updateHp () {
    hpBar.style.width = `${health}%`
    hpDisplay.innerHTML = `100/${health}`
}
function gameOver () {
    animal.remove()
    uiDisplay.remove()
    gameOverDisplay.style.display = 'flex'
}

startAgain.onclick = function () {
    location.reload()
}

play.onclick = function () {
    if (chosenAnimal === 'animal1' && !playing) {
        if (rightPos) {
            animal.style.transform = 'scaleX(1)'
            animalPos += 30
            console.log(animalPos)
            animal.style.right = `${animalPos}px`
            animal.style.animation = 'jumpAnimAnimal1 0.5s linear'
            playing = true
            if (animalPos >= 200) {
                rightPos = false
            }
        }else if (!rightPos){
            animal.style.transform = 'scaleX(-1)'
            animalPos -= 30
            console.log(animalPos)
            animal.style.right = `${animalPos}px`
            animal.style.animation = 'jumpAnimAnimal1 0.5s linear'
            playing = true
            if (animalPos <= -200) {
                rightPos = true
            }
        }
        setTimeout(function () {
            if (chosenAnimal === 'animal1') {
                animal.style.animation = 'idleAnimAnimal1 0.5s infinite linear'
            }
            if (chosenAnimal === 'animal2') {
                animal.style.animation = 'idleAnimAnimal2 0.5s infinite linear'
            }
            playing = false
            if (fun < 100) {
                fun += 10
            }
        },500)
    }
    if (chosenAnimal === 'animal2' && !playing) {
        if (rightPos) {
            animal.style.transform = 'scaleX(1)'
            animalPos += 30
            console.log(animalPos)
            animal.style.right = `${animalPos}px`
            animal.style.animation = 'walkAnimAnimal2 0.5s linear'
            playing = true
            if (animalPos >= 200) {
                rightPos = false
            }
        }else if (!rightPos){
            animal.style.transform = 'scaleX(-1)'
            animalPos -= 30
            console.log(animalPos)
            animal.style.right = `${animalPos}px`
            animal.style.animation = 'walkAnimAnimal2 0.5s linear'
            playing = true
            if (animalPos <= -200) {
                rightPos = true
            }
        }
        setTimeout(function () {
            animal.style.animation = 'idleAnimAnimal2 0.5s infinite linear'
            playing = false
            if (fun <= 90) {
                fun += 10
            }
        },500)
    }

}

feed.onclick = function () {
    if (!feeding) {
        feeding = true
        if (hunger < 100) {
            hunger += 10
        }
        setTimeout(function () {
            feeding = false
        },1000)
    }
}