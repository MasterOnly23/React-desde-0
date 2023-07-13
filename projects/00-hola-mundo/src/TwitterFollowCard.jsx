export function TwitterFollowCard ({formatUserName,userName='unknown', name, isFollowing}) {
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
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}