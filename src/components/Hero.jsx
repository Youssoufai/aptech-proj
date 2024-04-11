import React from 'react'
import Cards from './Cards'

const Hero = () => {
    return (
        <>
            <main>
                <div>
                    <ul>
                        <li>Home</li>
                        <li> {'>'} </li>
                        <li>Collection</li>
                        <li> {'>'} </li>
                        <li>Archies</li>
                    </ul>
                </div>
                <p>
                    Explore our collection of Invitations Beatiful cards you can choose from
                </p>
                <Cards />
            </main>
        </>
    )
}

export default Hero