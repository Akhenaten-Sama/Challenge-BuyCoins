
import {Github} from '../Apollo/apollo -graphql'


const Navbar = async () => {
    const myData = await Github()
    const {name, bio,avatarUrl, login, repositories} = await Github()
    const img = "https://avatars2.githubusercontent.com/u/65839844?u=feed274b8c188865437b0f7e82976cf347c4cfa6&v=4"
        setTimeout(() => {
            document.getElementById("hamicon").addEventListener('click', ()=>{
                const x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                  } else {
                    x.style.display = "block";
                  }
             })
        }, 1);
         
        
    
	const template = `
<nav class='navbar'>
<div class='container'>
<div class='nav-group1'>
<i class="fab fa-github x3"></i>
<span class='search-div'>
<input type= 'search' placeholder='Search or jump to...' />
</span>

<!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
  <a href="javascript:void(0);" id='hamicon' class="ham-icon" >
    <i class="fa fa-bars"></i>
  </a>
     <div class='links'>
     <ul class='nav-links'>

    <li> Pull requests </li>
    <li> Issues </li>
    <li> Codespaces </li>
    <li> Explore </li>
    </ul>
    </div>
</div>


    <div class='nav-group2'>
    <i class="far fa-bell"></i>
    <i class="fa fa-plus"></i>
    <i class="fas fa-caret-down"></i>
    <img class='nav-img'  src=${img} />
    <i class="fas fa-caret-down"></i>
    </div>
    </div>

    
<!-- Top Navigation Menu -->
<div class="sidenav">

  <div id="myLinks">
  
<div><input class='search' type= 'search' placeholder='Search or jump to...' /><hr></div>
  <div><a href="#news">Dashboard</a> <hr></div>
  <div><a href="#news">Pull requests</a> <hr></div>
  <div><a href="#news">Issues</a> <hr></div>
  <div><a href="#news">MarketPlace</a> <hr></div>
  <div><a href="#news">Explore</a> <hr></div>
 <a href='#'> <img  class ='nav-img' src =${avatarUrl}>${name}</a>  
    
   
  </div>
  
</div>
     </nav>
    `;

	return template;
};

export default Navbar;
