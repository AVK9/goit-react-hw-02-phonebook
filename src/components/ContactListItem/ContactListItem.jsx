// import React from 'react';
import css from './ContactListItem.module.css'

export const ContactListItem = ({ name, number, id, deleteContact }) => {
    const handleDel = () => {
        deleteContact(id);
        // console.log(id);
    };
    
    
    return (
        <li className={css.contactItem}>
            {name}......{number}
            <button
                className={css.buttonDel}
                onClick={handleDel}
            >x</button>
        </li>
    )
}