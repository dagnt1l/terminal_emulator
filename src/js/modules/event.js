import { checkFromSpell } from './writing.js'
const terminalInput = document.getElementById('terminal-input')
const terminalContent = document.getElementById('content');

export function start() {

  terminalInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {

      if(event.currentTarget.value == 'clear'){

        document.getElementById('content').innerHTML = '';

      } else {

        terminalContent.innerHTML += checkFromSpell(event.currentTarget.value)

      }
      
      terminalInput.value = null

    }
  })
}
