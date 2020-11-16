import "core-js/stable"
import "regenerator-runtime"
import '../scss/styles.scss'
import NavBar from './NavBar/Navbar'
import Tab from './Tabs/tabs'
import Side from './Side/side-profile'
import Repos from './Repositories/repos'



const body = document.querySelector('.body');
console.log(body)

const app =  async () => {

    body.innerHTML = `
      ${NavBar()}
      ${Tab()}
       ${await Side()}
       ${await Repos()}

      `

   
}

// initialise app
app()