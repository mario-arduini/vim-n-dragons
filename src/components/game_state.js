
function getPlayer(){
  const playerName = localStorage.getItem('playerName')
  const playerGender = localStorage.getItem('playerGender')
  const nextLevel = localStorage.getItem('nextLevel')
  if(playerName && playerGender && nextLevel){
    return {
      name: playerName, gender: playerGender, nextLevel: nextLevel
    }
  } else {
    return null
  }
}

function setPlayer(name,genderLabel){
  localStorage.setItem('playerName',name)
  localStorage.setItem('playerGender',genderLabel)
  localStorage.setItem('nextLevel',1)
}

export { getPlayer, setPlayer, }
