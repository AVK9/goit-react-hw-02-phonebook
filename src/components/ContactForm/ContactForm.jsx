import React, { Component } from 'react';
import css from './ContactForm.module.css'




export class ContactForm extends Component {
state = {
  name: '',
  number: ''
    }
    
handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log('e :>> ', value);
};
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
    })
    };
    
    
render(){
    return (
<div>
        <form onSubmit={this.handleSubmit}>
            <div className={css.formBox}>
                <label htmlFor="Name" className={css.formLabel}>
                        Name
                <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required />
                </label>
                <label htmlFor="Number" className={css.formLabel}>
                        Number
                <input type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    required />
                </label>
            </div>

            <button type='submit' className={css.btnAddContact}>
                Add contact
             </button>
        </form>

    </div>
    )
    }

}

