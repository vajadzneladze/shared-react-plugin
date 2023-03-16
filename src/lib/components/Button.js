import React from 'react';

const Button = ({ value, ...props }) => {



    return (

        <button type = 'submit' { ...props} > 
            { value }
        </button>
    )
}

export default Button;