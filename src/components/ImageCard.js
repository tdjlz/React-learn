import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state={spansOfImage:0};

        this.imageRef = React.createRef();
    }//gouzaofangfa

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }//After load the images 

    setSpans=()=>{
        const heightOfImage=this.imageRef.current.clientHeight;

        const spansOfImage=Math.ceil(heightOfImage/10+1);

        this.setState({spansOfImage});
    }
    render(){
        const {description,urls}=this.props.image;


        return (
            <div style={{gridRowEnd:`span ${this.state.spansOfImage}`}}>
                <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;