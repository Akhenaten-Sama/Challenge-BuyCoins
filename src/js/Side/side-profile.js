import {Github} from '../Apollo/apollo -graphql'


const Side = async() => {
    const {name, bio,avatarUrl, login, repositories} = await Github()
  
    setTimeout(() => {
        const repo = document.querySelector('.repo');
        repositories.edges.map(rep=> repo.innerHTML +=`
        <hr/>
         
        <div class='sub-repo'>
        <div>
        <h3 class='repo-name'>${rep.node.name}</h3>
        <p class='description'>${rep.node.description?rep.node.description:''}</p>
        <span class='line-2'>
        <span><div class='lang-color' style='background:${rep.node.languages.edges[0].node.color}'> </div>
        ${rep.node.languages.edges[0].node.name} </span>
       <span> <i class="fas fa-code-branch"></i>  ${rep.node.forkCount}</span>
       <span> <i class="far fa-star"></i> ${rep.node.stargazerCount}</span>
       <span>Updated <relative-time datetime=${rep.node.updatedAt}></relative-time></span>
        </span>
        </div>

        <button><i class="far fa-star"></i> Star</button>
        </div>
        
        `)
    }, 1);
    
    
    const template = `
     
    <section class='main' >
    <div class='profile'>
    <img class='profile-img' src=${avatarUrl}>
    <div class='profile-name'>
    <h1>
    <span class='block name'>${name}</span>
    <span class='block grey-text'>${login}</span>
    </h1>
    <p>${bio}</p>
    </div>

    </div>

    <header>


    
    <ul class='tabs sticky'>
    <img class='tab-img' src=${avatarUrl}/ >
    <h4>${login}</h4>
    <li><i class="fa fa-book-open"></i> Overview</li>
    <li class='underline'><i class="far fa-clipboard"></i> Repositories <span class='num'>22</span></li>
    <li><i class="fas fa-poll"></i> Projects</li>
    <li><i class="fas fa-cube"></i> Packages</li>
    </ul>
    <div class="repo border">
    <input class='repo-search' type='search' placeholder='Find a repository...'>
    </div>
    </header>
      
      
    </section>


   
    
    `


    return template
}



export default Side