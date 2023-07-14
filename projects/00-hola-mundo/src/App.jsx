import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {
        userName:'midudev',
        name:'Miguel Angel Duran',
        isFollowing:true
    },
    {
        userName:'masteronly23',
        name:'Juan Felipe Daza',
        isFollowing:false
        
    },
    {
        userName:'unknown',
        name:'unknown',
        isFollowing:false
    },
    {
        userName:'pipedaza23',
        name:'Juan Felipe Daza',
        isFollowing:true
    }


]

export function App () {
    // const formatUserName = userName => `@${userName}`
    // const midudev = { userName:'midudev', formatUserName : formatUserName, initialIsFollowing:true}
    //suponiendo que tomamos de un api los datos de los usuarios

    return(
        
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return(
                    <TwitterFollowCard key={userName} userName={userName} name={name} initialIsFollowing={isFollowing} />
                    )
                })
            }
        </section>
        
    )
}


{/* 
<>
<div className='tw-followCard-container'>
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="masteronly23" 
        name="Juan Felipe Daza"  
        initialIsFollowing
        /> 
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="pipedaza23" 
        name="Juan Felipe Daza" 
        initialIsFollowing={false}
        /> 
        <TwitterFollowCard formatUserName={formatUserName}  
        initialIsFollowing={false}
        /> 
        </div> 
    </>*/}