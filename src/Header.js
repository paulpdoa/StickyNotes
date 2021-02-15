import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,onAdd,showAdd}) => {
    
    return(
        <div>
    <h1>{title}</h1>
    <Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </div>
    )
}
Header.defaultProps = {
    title:'Sticky Notes'
}
Header.propTypes = {
    title:PropTypes.string.isRequired,
}

//Inline CSS JS
// const headerStyle={
//     color:'red',
//     backgroundColor:'black'
// }

export default Header