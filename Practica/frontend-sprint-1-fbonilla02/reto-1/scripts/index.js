const sharing = document.getElementById('Sharing')
const simple = document.getElementById('simple')
const searching = document.getElementById('searching')
const content = document.getElementById('content')
const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')



//navbar
hamburger.addEventListener('click', ()=>{
    const icon = document.getElementById('icon')

    if (menu.classList.contains('ocultar')) {
        menu.classList.remove('ocultar')
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-xmark')
    }else{
        icon.classList.replace('fa-xmark', 'fa-bars')
        menu.classList.add('ocultar')
    }
})


// slides
simple.addEventListener('click', () =>{
    content.innerHTML = `
<section><img src="./images/illustration-features-tab-1.svg" alt=""></section>
                <section class="flex flex-col  md:justify-center md:items-start text-center md:text-left">
                    <h3 class="text-2xl pb-5 font-darl-blue font-bold pt-10">Bookmark in one click</h3>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button class="mt-5 py-2 px-5  text-white rounded bg-color-soft hidden md:block">More info</button>
                </section>`;

                simple.classList.add('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                sharing.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                searching.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                
})

searching.addEventListener('click', () =>{
    content.innerHTML = `
    <section><img src="./images/illustration-features-tab-2.svg" alt=""></section>
                    <section class="flex flex-col  md:justify-center md:items-start text-center md:text-left">
                        <h3 class="text-2xl pb-5 font-darl-blue font-bold pt-10">Intelligent search</h3>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button class="mt-5 py-2 px-5  text-white rounded bg-color-soft hidden md:block">More info</button>
                    </section>`;
                    searching.classList.add('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                    simple.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                    sharing.classList.add('border-gray-500', 'border-b-2','md:border-b-red-500', 'md:border-b-1')
                    sharing.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                    simple.classList.add('border-gray-500', 'border-b-2')

})


sharing.addEventListener('click', () =>{
    content.innerHTML = `
<section><img src="./images/illustration-features-tab-3.svg" alt=""></section>
                <section class="flex flex-col  md:justify-center md:items-start text-center md:text-left">
                    <h3 class="text-2xl pb-5 font-darl-blue font-bold pt-10">Share your bookmarks</h3>
                    <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <button class="mt-5 py-2 px-5  text-white rounded bg-color-soft hidden md:block">More info</button>
                </section>`;

                sharing.classList.add('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                simple.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')
                searching.classList.add('border-gray-500', 'border-b-2','md:border-b-red-500', 'md:border-b-1')
                searching.classList.remove('border-b-red-500', 'border-b-2', 'md:border-b-red-500','md:border-b-2')

})





//PREGUNTAS FRECUENTES
const acordeon = document.querySelectorAll("[id^='acordeon']")
const acordeonContainer = document.querySelectorAll("[id^='AcordeonContainer']")
const flecha = document.querySelectorAll("[id^='flecha']")



acordeon.forEach((cadaConteiner, i) => {
    
    acordeon[i].addEventListener('click', ()=>{
        
        acordeonContainer.forEach( ( contenido, i) =>{
            acordeonContainer[i].classList.remove('mostrar')
            flecha[i].classList.remove('rotate')
        } )
        
        acordeonContainer[i].classList.add('mostrar')
        flecha[i].classList.add('rotate')
       
    })
});


//validacion email

const email = document.getElementById('email')
const formEmail = document.getElementById('formEmail')
const textEmail = document.getElementById('textEmail')

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const $buttonMailto = document.querySelector('#trucazo')

formEmail.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    
        event.preventDefault()
        if (email.value === '' || !email.value.match(pattern)) {
            alert('Ha ocurrido un error con su correo por favor valide')
        }
            const form = new FormData(this)
            
            $buttonMailto.setAttribute('href', `mailto:me@francisco.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
            $buttonMailto.click()
        
    
}

// const $form = document.querySelector('#form')
// const $buttonMailto = document.querySelector('#trucazo')

// $form.addEventListener('submit', handleSubmit)

// function handleSubmit(event) {
//   event.preventDefault()
//   const form = new FormData(this)
//   $buttonMailto.setAttribute('href', `mailto:me@leonidasesteban.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
//   $buttonMailto.click()
// }

// /\S+@\S+\.\S+/

email.onkeydown = validacion;

function validacion(e){
    
    if (email.value.match(pattern)) {
        email.classList.add('rounded-t-lg')
        textEmail.classList.remove('bg-red-500')
        textEmail.classList.add('bg-green-500')
        textEmail.innerHTML = "Your Email Adress is valid"
    }else{
        email.classList.add('rounded-t-lg', 'border-red-500', 'border-solid')
        email.classList.add('border-red-500')
        textEmail.classList.remove('bg-green-500')
        textEmail.classList.add('bg-red-500')
        textEmail.innerHTML = "Your Email Adress is invalid"
    }


if(email == ""){
    formEmail.classList.remove('valid')
    formEmail.classList.remove('invalid')
    textEmail.innerHTML = ""
}
}
