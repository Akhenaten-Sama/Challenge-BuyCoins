import {Github} from '../Apollo/apollo -graphql'




const Repos = async()=> {
    const myData = await Github()
    console.log(myData)
    console.log(process.env.GITHUB_AUTHORIZATION)

    const template = `
    <section>
    
    
    
    
    </section>
    
    `

    return template

}

export default Repos