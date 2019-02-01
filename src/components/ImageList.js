import React from 'react';
import "./ImageList.css"
import ImageCard from './ImageCard';

const ImageList = props =>{
    const image = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image} />
    });/* map = a 'for' query to create an array and fix the elements into it.*/

    return <div className="image-list">{image}</div>
};

export default ImageList;