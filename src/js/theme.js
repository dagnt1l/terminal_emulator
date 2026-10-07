const html = document.documentElement;
const themeStorage = localStorage.getItem('theme');

if(themeStorage == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){

    html.classList.add('dark');

} else {

    html.classList.remove('dark');

}