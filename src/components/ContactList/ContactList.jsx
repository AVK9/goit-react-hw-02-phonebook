import css from './ContactList.module.css'
import {ContactListItem} from '../ContactListItem/ContactListItem'
import { nanoid } from 'nanoid'

export const ContactList = ({ contacts }) => (
    <div className={css.contactsBox}>
        <ul className={css.contactsList}>
        {contacts.map(({name, number}) => (
                <ContactListItem
                    name={name}
                    number={number}
                    key={nanoid()}
                />
                ))
        }
        </ul>
    </div>
)