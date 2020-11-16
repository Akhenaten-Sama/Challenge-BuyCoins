const Navbar = () => {
    const img = "https://avatars2.githubusercontent.com/u/65839844?u=feed274b8c188865437b0f7e82976cf347c4cfa6&v=4"
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
     </nav>
    `;

	return template;
};

export default Navbar;
