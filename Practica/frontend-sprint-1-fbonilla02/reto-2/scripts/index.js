import { data } from '../data/data.js'
import { Getdata } from '../module/Getdata.js';
const html = document.documentElement
const themeButtons = document.querySelectorAll('[data-set-theme]');
const thema = localStorage.getItem('theme')
const todos = document.querySelectorAll("[id='todos']")
const productos = document.getElementById('productos')
const imgLogo = document.getElementById('img-logo')
//THEME
console.log(themeButtons);
themeButtons.forEach((button) => {
  const theme = button.dataset.setTheme;

  button.addEventListener('click', () => {
    html.dataset.theme = theme;
    
    if ( html.dataset.theme == 'dark' ) {
      console.log(thema);
      imgLogo.setAttribute('src', '../images/logoWhite.png')
      console.log('si es');
  }else{
    imgLogo.setAttribute('src', '../images/logo.png')
    console.log('no es');
  }

    localStorage.setItem('theme',theme)
  })
})

if (thema) {
  html.dataset.theme = thema;

}

//Data
Getdata(data, productos)

//BOTONES

todos.forEach((cli) =>{

  cli.addEventListener('click', () => {
    const  tipo =  cli.innerText.toLowerCase();
    console.log(tipo);
      const filtro = data.filter(dato => dato.tipo == tipo)

      if(tipo == 'todos'){
        Getdata(data, productos)
      }else{
        Getdata(filtro, productos)
      }
  })
})

