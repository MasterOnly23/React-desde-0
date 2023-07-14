import { useState } from "react"

export function TwitterFollowCard ({formatUserName,userName='unknown', name, initialIsFollowing}) {
    //2 maneras de escribirlo
    // const state = useState(false)
    // const isFollowing = state[0] //el valor del estado
    // const setIsFollowig = state[1] // el interruptor del estado

    const [isFollowing, setIsFollowig] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowig(!isFollowing) //la funcion pasa el estado de true a false o viceversa
    }

    const imageSrc = `https://unavatar.io/${userName}`
    const altAvatar = `avatar ${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir' //ternaria, Como hacer un if corto
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={imageSrc} alt={altAvatar} className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-info-userName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}