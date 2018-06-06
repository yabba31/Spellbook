const form = document.querySelector('form')



const changeHeading = function(ev) {


  ev.preventDefault()



  const f = ev.target

  const spellName = f.spellName.value 

  const spellNameA = f.spellNameA.value
  const spellsDiv = document.querySelector('#spells')
    
  const spellsDivA = document.querySelector('#spells')
  
  spellsDiv.innerHTML += `<li>${spellName}</li>`
  spellsDivA.innerHTML += `<li>${spellNameA}</li>`



  f.reset()

}



form.addEventListener('submit', changeHeading)