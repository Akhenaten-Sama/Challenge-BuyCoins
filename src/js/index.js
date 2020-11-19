import "core-js/stable"
import "regenerator-runtime"
import '../scss/styles.scss'
import NavBar from './NavBar/Navbar'
import Main from './Main/Main'



const body = document.querySelector('.body');
console.log(body)

const app =  async () => {

    body.innerHTML = `
      ${await NavBar()}
       ${await Main()}
      

      `

   
}

// initialise app
app()