import React from 'react'

function ConditionalRendering(props) {
    // NORMAL IF CONDITION
    // if(props.isLoggedIn){
    //     return(
    //         <h2 className='welcomeMessage'>Welcome {props.userName}</h2>
    //     )
    // }
    // return <h2 className='errorMessage' >Please Log in for continue</h2>    

    // TERNERY OPERATOR
    // return props.isLoggedIn ? <h2 className='welcomeMessage'>Welcome {props.userName}</h2>
    //                  : <h2 className='errorMessage' >Please Log in for continue</h2>  

    // TERNERY USING VARIABLE
    const loggedIn = <h2 className='welcomeMessage'>Welcome {props.userName}</h2>
    const newUser = <h2 className='errorMessage' >Please Log in for continue</h2>  
    return props.isLoggedIn ? loggedIn : newUser
}

export default ConditionalRendering