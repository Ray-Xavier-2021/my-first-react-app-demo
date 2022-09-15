// THIS FILE IS USED FOR PROFILE CARD COMPONENT
import React from 'react'

// Import profiles database
import profiles from '../fakeData'
console.log(profiles)


const ProfileCard = ({image, name, title, description}) => {
    
  return (
    <div 
    style={{
        backgroundColor: 'white', 
        margin: 10,
        padding: 5,
        borderRadius: 15,
        }}>
        <div style={{display: 'flex'}}>
            <img 
            style={{borderRadius: '5px'}}
            src={image}
            alt=''
            width='80px'
            height='50px' />
            <div>
                <h2 style={{marginLeft: '10px'}}>{name}</h2>
                <h5 style={{marginLeft: '10px'}}>{title}</h5>
            </div>
        </div>
        <div>
            <p style={{padding: 10, fontSize: '14px'}}>{description}</p>
        </div>
    </div>
  )
}

export default ProfileCard