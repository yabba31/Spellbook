const form = document.querySelector('form')



const changeHeading = function(ev) {


  ev.preventDefault()



  const f = ev.target

  const spellName = f.spellName.value 

  const spellNameA = f.spellNameA.value

  //comment out other part of program
 // const spellsDiv = document.querySelector('#spells')
    
 // const spellsDivA = document.querySelector('#spells')
  
  // assign variable 

  var spellName = document.createElement("#spells");
  var spellNameA = document.createElement("#spellsA");

  spellName.appendChild(spellNameA);
  spellNameA.appendChild(spellName)


  f.reset()

}



form.addEventListener('submit', changeHeading)