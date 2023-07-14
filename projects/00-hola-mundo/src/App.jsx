import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App () {
    const formatUserName = userName => `@${userName}`
    const midudev = { userName:'midudev', formatUserName : formatUserName, initialIsFollowing:true}
    return(
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
        <TwitterFollowCard {...midudev}
        
        />
        <TwitterFollowCard formatUserName={formatUserName}  
        initialIsFollowing={false}
        /> 
        </div>
        </>
    )
}