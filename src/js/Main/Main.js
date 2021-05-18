import {Github} from '../Apollo/apollo -graphql'
import '@github/g-emoji-element'

const Side = async() => {
    const {name, bio,avatarUrl, login, repositories} = await Github()

    //This is an async function, To ensure the dom paints before adding/getting elements and adding an event listener; I use a setTimeOut with 1 millisecond interval
    setTimeout(() => {
        var observer = new IntersectionObserver(function(entries) {
            var x = document.getElementById("hi");
            // no intersection with screen, remove class. intersection? add class
            entries[0].intersectionRatio === 0?x.classList.add('hi')
                :x.classList.remove("hi")
                
            
            
        }, { threshold: [0,1] });
        
        observer.observe(document.querySelector(".profile-img"));
    
       }, 1);  

    // Dom must paint first.
    setTimeout(() => {

        //I use this to isolate our entry point
        const repo = document.querySelector('.repo');

        //loop through each repo received from querying github, create a component and add component into the repo div, using the 
        repositories.edges.map(rep=> repo.innerHTML +=`
        <hr/>
         
        <div class='sub-repo'>
        <div>
        <a href=${rep.node.url}><h3 class='repo-name'>${rep.node.name}</h3> </a>
        <p class='description'>${rep.node.description?rep.node.description:''}</p>
        <span class='line-2'>
        <span><div class='lang-color' style='background:${rep.node.languages.edges[0]?rep.node.languages.edges[0].node.color:""}'> </div>
        ${rep.node.languages.edges[0]?rep.node.languages.edges[0].node.name:""} </span>
       <span> <i class="fas fa-code-branch"></i>  ${rep.node.forkCount}</span>
       <span> <i class="far fa-star"></i> ${rep.node.stargazerCount}</span>
       <span>Updated <relative-time datetime=${rep.node.updatedAt}></relative-time></span>
        </span>
        </div>

        <button style='display:flex'><span display='flex'><i class="far fa-star"></i> Star</span></button>
        </div>
        
        `)
    }, 1);
    
    
    const template = `
     
    <section class='main' >
    <div class='profile'>
    <div>
    <img class='profile-img' src=${avatarUrl}>
    </div>
    
    <div class='profile-name'>
    <h1>
    <span class='block name'>${name}</span>
    <span class='block grey-text'>${login}</span>
    </h1>
    <p>${bio}</p>
    </div>

    </div>

    <header>


     <div class='hide'></div>

     <!-- Sticky Header with Name -->
    <ul class='tabs sticky'>
    <div id='hi'>

    <span><img class='tab-img' src=${avatarUrl}/ ></span>
    <h4 >${login}</h4>
    </div>
    
    <!-- Sub Header-->
    <li><i class="fa fa-book-open"></i> Overview</li>
    <li class='underline'><i class="far fa-clipboard"></i> Repositories <span class='num'>22</span></li>
    <li><i class="fas fa-poll"></i> Projects</li>
    <li><i class="fas fa-cube"></i> Packages</li>
    </ul>
    <div class="repo border">
    <input class='repo-search' type='search' placeholder='Find a repository...'>


    <!-- Injection Point For Repos, this will be my entry point for repos -->

    </div>
    </header>
      
      
    </section>


   
    
    `

    //return html
    return template
}



export default Side