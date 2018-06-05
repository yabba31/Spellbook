
const changeText = function(ev) {
    ev.target.textContent = 'The most excellent Java Script'
  }


  const button = document.querySelector('#greeting2')
  button.context('click', changeText)










