import React from 'react';

class SearchBar extends React.Component{

    state = {term:''};

    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.RunMeWhenSubmit(this.state.term);//send the term by props by using the callback function from parent
    };

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
               <label>Image Search</label>
               <input 
               type="text" 
               value={this.state.term}
               onChange={e=>this.setState({term:e.target.value})}
               />
            </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;