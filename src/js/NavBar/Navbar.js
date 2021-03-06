
import {Github} from '../Apollo/apollo -graphql'


const Navbar = async () => {
    const myData = await Github()
    const {name,avatarUrl} = myData;
    console.log(myData)
    const img = "https://avatars2.githubusercontent.com/u/65839844?u=feed274b8c188865437b0f7e82976cf347c4cfa6&v=4"
       
    //to ensure the dom paints before adding an event listener; I use a setTimeOut
    setTimeout(() => {
            document.getElementById("hamicon").addEventListener('click', ()=>{
                const x = document.getElementById("sidenav");
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

    <li><a href='#'> Pull requests </a></li>
    <li><a href='#'> Issues </a></li>
    <li><a href='#'> Codespaces </a> </li>
    <li><a href='#'> Explore <a/></li>
    </ul>
    </div>
</div>

<!-- "Icons part" -->
    <div class='nav-group2'>
    <i class="far fa-bell"></i>
    <div style="padding-left:15px;">
    <i class="fa fa-plus"></i>
    <span class='new'></span>
    </div>
  <div style="padding-left:15px; display:flex; flex-direction:row;">
  <img  class='nav-img' src=${img} > 
    <span style="align-self:center; margin-left:5px;" class='new '></span>
    </div>
    </div>
    </div>

    
<!-- Mobile Navigation Menu -->
<div id='sidenav' class="sidenav">

  <div id="myLinks">
  
<div><input class='search' type= 'search' placeholder='Search or jump to...' /><hr></div>
  <div><a href="#news">Dashboard</a> <hr></div>
  <div><a href="#news">Pull requests</a> <hr></div>
  <div><a href="#news">Issues</a> <hr></div>
  <div><a href="#news">MarketPlace</a> <hr></div>
  <div><a href="#news">Explore</a> <hr></div>
 <a href='#'> <span style='display:inline-block; padding-right:0.5rem;'><img  class ='nav-img' src =${avatarUrl} /></span><span style="margin-top:-2rem;">${name}</span></a>  
    
   
  </div>
  
</div>
     </nav>
    `;

     //return html
	return template;
};

export default Navbar;
