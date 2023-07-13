import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App () {
    const formatUserName = userName => `@${userName}`
    const midudev = { isFollowing:true, userName:'midudev', formatUserName : formatUserName}
    return(
        <>
        <div className='tw-followCard-container'>
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="masteronly23" 
        name="Juan Felipe Daza" 
        isFollowing 
        /> 
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="pipedaza23" 
        name="Juan Felipe Daza" 
        isFollowing={false} 
        /> 
        <TwitterFollowCard {...midudev}
        />
        <TwitterFollowCard formatUserName={formatUserName} 
        isFollowing={false} 
        /> 
        </div>
        </>
    )
}