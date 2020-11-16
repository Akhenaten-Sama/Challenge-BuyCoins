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
        <p>${rep.node.description?rep.node.description:''}</p>
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
    <h1>${name}</h1>
    <p>${login}</p>
    <h4>${bio}</h4>
    </div>

    <header>
    <ul class='tabs'>
    <li><i class="fa fa-book-open"></i>    Overview</li>
    <li><i class="far fa-clipboard"></i>    Repositories 645</li>
    <li>Projects</li>
    <li>Packages</li>
    </ul>
    <hr class='tabs-hr'>
    <div class="repo"></div>
    </header>
      
      
    </section>


   
    
    `


    return template
}



export default Side