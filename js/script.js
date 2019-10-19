const field = document.querySelector('.field')
let orangeCubesInPlay = 22
let greenCubesInPlay = 22
let purpleCubesInPlay = 22
let towerCubes = 0


let orangeMultiplier = 1
let greenMultiplier = 1
let purpleMultiplier = 1

let blueOrangeCubes = 0
let blueGreenCubes = 0
let bluePurpleCubes = 0
let blueBonusPoints = 0

let redOrangeCubes = 0
let redGreenCubes = 0
let redPurpleCubes = 0
let redBonusPoints = 0

let trackingTeam = 'red';


//button zones
const towers = document.querySelector('.towers')
const blue_goal = document.querySelector('.blue_goal')
const red_goal = document.querySelector('.red_goal')

//score zones
const scorebox = document.querySelector('.scorebox')
const blueScore = document.querySelector('.blue_score')
const redScore = document.querySelector('.red_score')


towers.addEventListener('click', e => {
  const orangeCubes = document.querySelector('.tower_orange_cube')
  const greenCubes = document.querySelector('.tower_green_cube')
  const purpleCubes = document.querySelector('.tower_purple_cube')

  if (e.target.matches('button')){
    const button = e.target
    const color = button.dataset.color
    const action = button.dataset.action
    if (color === "orange") {
      const cubeCount = orangeCubes.textContent
      if(action === "score" && orangeCubesInPlay > 0 && towerCubes < 7){
        orangeCubes.textContent++
        orangeCubesInPlay--
        towerCubes++
        orangeMultiplier++
      }else if(action === "de-score" && cubeCount > 0){
        orangeCubes.textContent--
        orangeCubesInPlay++
        towerCubes--
        orangeMultiplier--
      }
    }else if (color === "green") {
      const cubeCount = greenCubes.textContent
      if(action === "score" && greenCubesInPlay > 0 && towerCubes < 7){
        greenCubes.textContent++
        greenCubesInPlay--
        towerCubes++
        greenMultiplier++
      }else if(action === "de-score" && cubeCount > 0) {
        greenCubes.textContent--
        greenCubesInPlay++
        towerCubes--
        greenMultiplier--
      }
    }else if(color === "purple") {
      const cubeCount = purpleCubes.textContent
      if(action === "score" && purpleCubesInPlay > 0 && towerCubes < 7){
        purpleCubes.textContent++
        purpleCubesInPlay--
        towerCubes++
        purpleMultiplier++
      }else if(action === "de-score" && cubeCount > 0) {
        purpleCubes.textContent--
        purpleCubesInPlay++
        towerCubes--
        purpleMultiplier--
      }
    }
    updateScores()
  }
})

blue_goal.addEventListener('click', e => {
  const orangeCubes = document.querySelector('.blue_orange_cube')
  const greenCubes = document.querySelector('.blue_green_cube')
  const purpleCubes = document.querySelector('.blue_purple_cube')

  if (e.target.matches('button')){
    const button = e.target
    const color = button.dataset.color
    const action = button.dataset.action
    if (color === "orange") {
      const cubeCount = orangeCubes.textContent
      if(action === "score" && orangeCubesInPlay > 0){
        orangeCubes.textContent++
        orangeCubesInPlay--
        blueOrangeCubes++
      }else if(action === "de-score" && cubeCount > 0){
        orangeCubes.textContent--
        orangeCubesInPlay++
        blueOrangeCubes--
      }
    }else if (color === "green") {
      const cubeCount = greenCubes.textContent
      if(action === "score" && greenCubesInPlay > 0){
        greenCubes.textContent++
        greenCubesInPlay--
        blueGreenCubes++
      }else if(action === "de-score" && cubeCount > 0) {
        greenCubes.textContent--
        greenCubesInPlay++
        blueGreenCubes--
      }
    }else {
      const cubeCount = purpleCubes.textContent
      if(action === "score" && purpleCubesInPlay > 0){
        purpleCubes.textContent++
        purpleCubesInPlay--
        bluePurpleCubes++
      }else if(action === "de-score" && cubeCount > 0) {
        purpleCubes.textContent--
        purpleCubesInPlay++
        bluePurpleCubes--
      }
    }
    updateScores()
  }
})

red_goal.addEventListener('click', e => {
  const orangeCubes = document.querySelector('.red_orange_cube')
  const greenCubes = document.querySelector('.red_green_cube')
  const purpleCubes = document.querySelector('.red_purple_cube')

  if (e.target.matches('button')){
    const button = e.target
    const color = button.dataset.color
    const action = button.dataset.action
    if (color === "orange") {
      const cubeCount = orangeCubes.textContent
      if(action === "score" && orangeCubesInPlay > 0){
        orangeCubes.textContent++
        orangeCubesInPlay--
        redOrangeCubes++
      }else if(action === "de-score" && cubeCount > 0){
        orangeCubes.textContent--
        orangeCubesInPlay++
        redOrangeCubes--
      }
    }else if (color === "green") {
      const cubeCount = greenCubes.textContent

      if(action === "score" && greenCubesInPlay > 0){
        greenCubes.textContent++
        greenCubesInPlay--
        redGreenCubes++
      }else if(action === "de-score" && cubeCount > 0) {
        greenCubes.textContent--
        greenCubesInPlay++
        redGreenCubes--
      }
    }else if(color === "purple") {
      const cubeCount = purpleCubes.textContent
      if(action === "score" && purpleCubesInPlay > 0){
        purpleCubes.textContent++
        purpleCubesInPlay--
        redPurpleCubes++
      }else if(action === "de-score" && cubeCount > 0) {
        purpleCubes.textContent--
        purpleCubesInPlay++
        redPurpleCubes--
      }
    }
    updateScores()
  }
})

function reset(){
  location.reload()
}

function autonBonus(){
  const blueCheckbox = document.getElementById("blue").checked
  const redCheckbox  = document.getElementById("red").checked
  if(blueCheckbox && !redCheckbox){
    blueBonusPoints = 6
    redBonusPoints = 0
    document.getElementById('blue_icon').src="img/auto_blue_winner.png"
    document.getElementById('red_icon').src="img/auto_red.png"
  }else if(redCheckbox && !blueCheckbox){
    redBonusPoints = 6
    blueBonusPoints = 0
    document.getElementById('red_icon').src="img/auto_red_winner.png"
    document.getElementById('blue_icon').src="img/auto_blue.png"
  }else if (redCheckbox && blueCheckbox) {
    redBonusPoints = 3
    blueBonusPoints = 3
    document.getElementById('blue_icon').src="img/auto_blue_winner.png"
    document.getElementById('red_icon').src="img/auto_red_winner.png"
  }else{
    redBonusPoints = 0
    blueBonusPoints = 0
    document.getElementById('blue_icon').src="img/auto_blue.png"
    document.getElementById('red_icon').src="img/auto_red.png"
  }
  updateScores()
}


function updateScores(){
    redScore.textContent  = totalScore(redOrangeCubes,orangeMultiplier,redGreenCubes,greenMultiplier,redPurpleCubes,purpleMultiplier,redBonusPoints)
    blueScore.textContent = totalScore(blueOrangeCubes,orangeMultiplier,blueGreenCubes,greenMultiplier,bluePurpleCubes,purpleMultiplier,blueBonusPoints)
    predictAddTowers()
    predictRemoveTowers()
}

function changeTeam(){
   const teamCheckbox = document.getElementById("team_checkbox").checked
   if(!teamCheckbox){
     trackingTeam = 'red'
   }else if(teamCheckbox){
     trackingTeam = 'blue'
   }
   updateScores()
}



function outcomeCalulator(allianceScore, opponentScore, allianceDelta, opponentDelta, outcome) {
  if (allianceDelta.textContent === '-') {
    outcome.textContent = "-"
  } else if(allianceScore === 0 && opponentScore === 0){
     outcome.textContent = "-"
  } else {

    let deltaAllianceValue = parseInt(allianceDelta.textContent, 10)
    let newAllianceScore = deltaAllianceValue + allianceScore
    let newOpponentScore = opponentScore + opponentDelta
    console.log("--")
    console.log("Delta: " + allianceDelta)
    console.log("New score: " + newAllianceScore)
    console.log("New Opponent Score: " + opponentScore)


    if (newAllianceScore === newOpponentScore) {
      outcome.textContent = "Tie"
    } else if(newAllianceScore < newOpponentScore){
      outcome.textContent = "Lose"
    }else if(newAllianceScore > newOpponentScore){
      outcome.textContent = "Win"
    }
  }
}

function totalScore(orangeStacked, orangeTower, greenStacked, greenTower, purpleStacked, purpleTower, autonBonusPoints) {
  let totalScore = 0;
  let orangeScore = orangeStacked*orangeTower
  let greenScore = greenStacked*greenTower
  let purpleScore = purpleStacked*purpleTower
  totalScore = orangeScore + greenScore + purpleScore + autonBonusPoints
  return totalScore
}


function predictAddTowers() {
  let currentRedScore = totalScore(redOrangeCubes,orangeMultiplier,redGreenCubes,greenMultiplier,redPurpleCubes,purpleMultiplier,redBonusPoints)
  let currentBlueScore = totalScore(blueOrangeCubes,orangeMultiplier,blueGreenCubes,greenMultiplier,bluePurpleCubes,purpleMultiplier,blueBonusPoints)
  let allianceScore = 0
  let opponentScore = 0
  let allianceOrangeCubes = 0
  let allianceGreenCubes = 0
  let alliancePurpleCubes = 0
  let opponentOrangeCubes = 0
  let opponentGreenCubes = 0
  let opponentPurpleCubes = 0


  if(trackingTeam === 'red'){
    allianceScore = currentRedScore
    opponentScore = currentBlueScore
    allianceOrangeCubes = redOrangeCubes
    allianceGreenCubes = redGreenCubes
    alliancePurpleCubes = redPurpleCubes
    opponentOrangeCubes = blueOrangeCubes
    opponentGreenCubes = blueGreenCubes
    opponentPurpleCubes = bluePurpleCubes

  }else if (trackingTeam === 'blue'){
    allianceScore = currentBlueScore
    opponentScore = currentRedScore
    allianceOrangeCubes = blueOrangeCubes
    allianceGreenCubes = blueGreenCubes
    alliancePurpleCubes = bluePurpleCubes
    apponentOrangeCubes = redOrangeCubes
    opponentGreenCubes = redGreenCubes
    opponentPurpleCubes = redPurpleCubes
  }

  const addOrangeTowerRed = document.querySelector('.tower_add_orange_red')
  const addOrangeTowerBlue = document.querySelector('.tower_add_orange_blue')
  const addOrangeTowerDelta = document.querySelector('.tower_add_orange_delta')
  const addOrangeTowerOutcome = document.querySelector('.tower_add_orange_outcome')

  const addGreenTowerRed = document.querySelector('.tower_add_green_red')
  const addGreenTowerBlue = document.querySelector('.tower_add_green_blue')
  const addGreenTowerDelta = document.querySelector('.tower_add_green_delta')
  const addGreenTowerOutcome = document.querySelector('.tower_add_green_outcome')

  const addPurpleTowerRed = document.querySelector('.tower_add_purple_red')
  const addPurpleTowerBlue = document.querySelector('.tower_add_purple_blue')
  const addPurpleTowerDelta = document.querySelector('.tower_add_purple_delta')
  const addPurpleTowerOutcome = document.querySelector('.tower_add_purple_outcome')

  if(towerCubes < 7 && orangeCubesInPlay > 0){
    addOrangeTowerRed.textContent =   redOrangeCubes + currentRedScore
    addOrangeTowerBlue.textContent =  blueOrangeCubes + currentBlueScore
    addOrangeTowerDelta.textContent = allianceOrangeCubes
  }else{
    addOrangeTowerRed.textContent =  '-'
    addOrangeTowerBlue.textContent =  '-'
    addOrangeTowerDelta.textContent = '-'
  }

  outcomeCalulator(allianceScore, opponentScore, addOrangeTowerDelta, opponentOrangeCubes, addOrangeTowerOutcome)

  if(towerCubes < 7 && greenCubesInPlay > 0){
    addGreenTowerRed.textContent = redGreenCubes + currentRedScore
    addGreenTowerBlue.textContent = blueGreenCubes + currentBlueScore
    addGreenTowerDelta.textContent = allianceGreenCubes
  }else{
    addGreenTowerRed.textContent = '-'
    addGreenTowerBlue.textContent = '-'
    addGreenTowerDelta.textContent ='-'
  }
  outcomeCalulator(allianceScore, opponentScore, addGreenTowerDelta, opponentGreenCubes, addGreenTowerOutcome)

  if(towerCubes < 7 && purpleCubesInPlay > 0){
    addPurpleTowerRed.textContent =   redPurpleCubes + currentRedScore
    addPurpleTowerBlue.textContent =  bluePurpleCubes + currentBlueScore
    addPurpleTowerDelta.textContent = alliancePurpleCubes
  }else{
    addPurpleTowerRed.textContent =  '-'
    addPurpleTowerBlue.textContent =  '-'
    addPurpleTowerDelta.textContent = '-'
  }
  outcomeCalulator(allianceScore, opponentScore, addPurpleTowerDelta, opponentPurpleCubes, addPurpleTowerOutcome)
}

function predictRemoveTowers(){
  let currentRedScore = totalScore(redOrangeCubes,orangeMultiplier,redGreenCubes,greenMultiplier,redPurpleCubes,purpleMultiplier,redBonusPoints)
  let currentBlueScore = totalScore(blueOrangeCubes,orangeMultiplier,blueGreenCubes,greenMultiplier,bluePurpleCubes,purpleMultiplier,blueBonusPoints)
  let allianceScore = 0
  let opponentScore = 0
  let allianceOrangeCubes = 0
  let allianceGreenCubes = 0
  let alliancePurpleCubes = 0


  if(trackingTeam === 'red'){
    allianceScore = currentRedScore
    opponentScore = currentBlueScore
    allianceOrangeCubes = redOrangeCubes
    allianceGreenCubes = redGreenCubes
    alliancePurpleCubes = redPurpleCubes
    opponentOrangeCubes = blueOrangeCubes
    opponentGreenCubes = blueGreenCubes
    opponentPurpleCubes = bluePurpleCubes

  }else if (trackingTeam === 'blue'){
    allianceScore = currentBlueScore
    opponentScore = currentRedScore
    allianceOrangeCubes = blueOrangeCubes
    allianceGreenCubes = blueGreenCubes
    alliancePurpleCubes = bluePurpleCubes
    apponentOrangeCubes = redOrangeCubes
    opponentGreenCubes = redGreenCubes
    opponentPurpleCubes = redPurpleCubes
  }

  const removeOrangeTowerRed = document.querySelector('.tower_remove_orange_red')
  const removeOrangeTowerBlue = document.querySelector('.tower_remove_orange_blue')
  const removeOrangeTowerDelta = document.querySelector('.tower_remove_orange_delta')
  const removeOrangeTowerOutcome = document.querySelector('.tower_remove_orange_outcome')

  const removeGreenTowerRed = document.querySelector('.tower_remove_green_red')
  const removeGreenTowerBlue = document.querySelector('.tower_remove_green_blue')
  const removeGreenTowerDelta = document.querySelector('.tower_remove_green_delta')
  const removeGreenTowerOutcome = document.querySelector('.tower_remove_green_outcome')

  const removePurpleTowerRed = document.querySelector('.tower_remove_purple_red')
  const removePurpleTowerBlue = document.querySelector('.tower_remove_purple_blue')
  const removePurpleTowerDelta = document.querySelector('.tower_remove_purple_delta')
  const removePurpleTowerOutcome = document.querySelector('.tower_remove_purple_outcome')

  if(towerCubes > 0 && orangeMultiplier > 1){
    removeOrangeTowerRed.textContent = currentRedScore - redOrangeCubes
    removeOrangeTowerBlue.textContent = currentBlueScore - blueGreenCubes
    removeOrangeTowerDelta.textContent = (-allianceOrangeCubes)
  }else{
    removeOrangeTowerRed.textContent = '-'
    removeOrangeTowerBlue.textContent = '-'
    removeOrangeTowerDelta.textContent = '-'
  }
  outcomeCalulator(allianceScore, opponentScore, removeOrangeTowerDelta, (-opponentOrangeCubes), removeOrangeTowerOutcome)

  if(towerCubes > 0 && greenMultiplier > 1){
    removeGreenTowerRed.textContent = currentRedScore - redGreenCubes
    removeGreenTowerBlue.textContent = currentBlueScore - blueGreenCubes
    removeGreenTowerDelta.textContent = (-allianceGreenCubes)
  }else{
    removeGreenTowerRed.textContent = '-'
    removeGreenTowerBlue.textContent = '-'
    removeGreenTowerDelta.textContent = '-'
  }
  outcomeCalulator(allianceScore, opponentScore, removeGreenTowerDelta, (-opponentGreenCubes),removeGreenTowerOutcome)

  if(towerCubes > 0 && purpleMultiplier > 1){
    removePurpleTowerRed.textContent = currentRedScore - redPurpleCubes
    removePurpleTowerBlue.textContent = currentBlueScore - bluePurpleCubes
    removePurpleTowerDelta.textContent = (-alliancePurpleCubes)
  }else{
    removePurpleTowerRed.textContent = '-'
    removePurpleTowerBlue.textContent = '-'
    removePurpleTowerDelta.textContent = '-'
  }
  outcomeCalulator(allianceScore, opponentScore, removePurpleTowerDelta, (-opponentPurpleCubes),removePurpleTowerOutcome)
}
