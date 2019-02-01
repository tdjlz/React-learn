import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar'
 


class App extends React.Component {

    state = {images:[]};

    onSearchSubmit = async (term)=>{
        const responseValue = await unsplash.get('/search/photos',{
            params:{query: term},
           
        });

        console.log(this);
        
        this.setState({images:responseValue.data.results});

    }
    /*get the data and set the state*/


    render(){
    return (
    <div className="ui container" style={{marginTop: '10px'}}>

    <SearchBar RunMeWhenSubmit={this.onSearchSubmit} guseewhat="OHY"/>
    {/*This is the prop pass to the child, SearchBar, the prop has RunMeWhenSubmit and guesswhat*/}
    {/*In here, RunMeWhenSubmit is assigned a function, onSearchSubmit which can modify the state of App component so that child function can access the App state*/}

    Found:{this.state.images.length} images{/*Render the state value */}

    <ImageList images={this.state.images}/>
    </div>
    )
}
}

export default App;