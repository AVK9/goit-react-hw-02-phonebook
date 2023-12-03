import css from './ContactListItem.module.css'

export const ContactListItem = ({ name, number }) => (
    <li className={css.contactItem}>
        {name}......{number}
        <button className={css.buttonDel}>x</button>
    </li>
)