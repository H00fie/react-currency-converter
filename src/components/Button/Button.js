import React from "react";

function Button(props) { // function Button ({ label, color })
    // const { label } = props;
    return (
        <button>{props.children}</button>
    );
}
Button.defaultProps = {
    label: 'Enter label for button'
}

export default Button;
