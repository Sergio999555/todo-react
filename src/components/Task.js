import React from 'react';

export default class Task extends React.Component {
    
    state = {
        completed: false,
        editing: false,
        label: ''
    };

    editTask = () => { // выход из инпута
        this.setState(({editing}) => { 
            return {
                editing: !editing
            }
        })
    };

    render() {
        const { label, onDeleted, onToggleCompleted, completed } = this.props;
        const { editing  } = this.state;
        let classNames = '';
        
        if (completed) {
            classNames += 'completed';
        };

        if (editing) {
            classNames += 'editing';
        };

        return (

        <li className={ classNames }>
            <div className='view'>
                <input 
                className='toggle' 
                type="checkbox" 
                onClick={ onToggleCompleted }/>
                <label>
                <span className='description'>{ label }</span>
                {/* <span className='created'>created 17 seconds ago</span> */}
                </label>
                <button className='icon icon-edit' onClick={ this.editTask }></button>
                <button className='icon icon-destroy' onClick={ onDeleted }></button>
            </div>
            <form onSubmit={ this.onSubmit }>
                <input 
                type='text'
                className='edit'
                onChange={ this.onLabelChange }
                autoFocus />
            </form>
        </li>
        )
    }
};