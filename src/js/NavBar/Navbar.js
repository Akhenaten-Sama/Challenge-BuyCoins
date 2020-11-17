const Navbar = () => {
    const img = "https://avatars2.githubusercontent.com/u/65839844?u=feed274b8c188865437b0f7e82976cf347c4cfa6&v=4"
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
	const template = `
<nav class='navbar'>
<div class='container'>
<div class='nav-group1'>
<i class="fab fa-github x3"></i>
<span class='search-div'>
<input type= 'search' placeholder='Search or jump to...' />
</span>

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
<div class="topnav">
  <!-- Navigation links (hidden by default) -->
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
     </nav>
    `;

	return template;
};

export default Navbar;
