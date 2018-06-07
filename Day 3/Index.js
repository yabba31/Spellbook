const app = {

  init: function() {

    const form = document.querySelector('form')

    form.addEventListener('submit', ev => {

      this.handleSubmit(ev)

    })

  },



  renderProperty: function(name, value) {

    const el = document.createElement('span')

    el.textContent = value

    el.classList.add(name)

    return el

  },
  //set function for button 
  
  createDeletebutton: function(name, value){
    const button = document.createElement('button')
    button.textContent = value
    button.classList.add (name)

   button.addEventListener("click",(ev) => this.deleteElement(ev))
    return button
  },

  //creation of function for deletion

  deleteElement: function(ev){
    const button = ev.target;
    const listitem = button.parentNode
    const index= spellsA.indexOf(listitem)
    spellsA.splice (index,1)
    listitem.parentNode.removeChild(listitem)
    
  },

  renderItem: function(spell) {

    // ['name', 'level']

    properties = Object.keys(spell)




    // collect an array of renderProperty's return values

    // (an array of <span> elements)

    const childElements = properties.map(property => {

      return this.renderProperty(property, spell[property])

    })



    const item = document.createElement('li')

    item.classList.add('spell')

    spellsA.push (item)

    // append each <span> to the <li>

    childElements.forEach(el => {

      item.appendChild(el)

    })
   button= this.createDeletebutton('classbutton','deletebutton')
   
    item.appendChild(button)



    spellsA.push (item)


    return item

  },


  handleSubmit: function(ev) {

    ev.preventDefault()



    const f = ev.target



    const spell = {

      name: f.spellName.value,

      level: f.level.value,

    }



    const item = this.renderItem(spell)



    const list = document.querySelector('#spells')

    list.appendChild(item)



    f.reset()

  },

}
//create array

const spellsA = []




app.init()