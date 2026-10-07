export const commands = {
  whoami: whoami,
  theme: switchTheme,
  help: help,
  math: math,
  clear: null,
}

function help(option = null){
  return `<p>${Object.keys(commands).toString().replaceAll(',', '<br/>')}</p>`;
}

function whoami(option = null){
  return `<a target="_blank" href="https://www.x.com/dagnt2l">Saad Al Juhani</a>`
}

function switchTheme(option){

  const html = document.documentElement;
  const options = {'-light': 'light', '-dark': 'dark'}
  
  if(option in options){

    if(options[option] == 'light'){

      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return `<p>Switched to ${option}</p>`;

    } else {

      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return `<p>Switched to ${option}</p>`;
    }

  }

  return '<p>theme <span class="text-dimmed">-light or -dark</span></p>';

}

function math(option){
  return `<p>${eval(option)}</p>`;
}