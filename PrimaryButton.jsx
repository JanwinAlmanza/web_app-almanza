import React from 'react';
import PrimaryButton from './components/PrimaryButton';


//creating and nesting components
function MyButton()
{
    <>
    <button>
        Im a button 
    </button>
    </>
}



const user = {
    name: 'Janwin',
    age: 20,
}
    



export default function PrimaryButton()
{
    return(
    <div>
        <h1 className="avatar">
            Welcome to my app {user.name + '' + user.age}
        </h1>
        <MyButton/>
    </div>
    );

}

