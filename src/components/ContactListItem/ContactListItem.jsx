// import React from 'react';
import css from './ContactListItem.module.css'

export const ContactListItem = ({ name, number, id, deleteContact }) => {
    const handleDel = () => {
        deleteContact(id);
        // console.log(id);
    };
    
    
    return (
        <li className={css.contactItem}>
            <span>{name}</span>
            <span>{number}</span>
            
            <button
                className={css.buttonDel}
                onClick={handleDel}
            ><i className={css.icon} class="icon ion-md-trash"></i>
            Delete
            </button>
        </li>
    )
}

