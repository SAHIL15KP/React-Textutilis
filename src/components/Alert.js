import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }// changing the first letter to Uppercase
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {capitalize(props.alert.type)}</strong>  {props.alert.msg}
            
        </div>
    )
}// props.alert.type it will return "success" as its given in  


export default Alert
