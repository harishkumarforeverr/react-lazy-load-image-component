import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

function App() {
  const [images, setimages] = useState(null);
  const url = "https://api.unsplash.com/photos/?client_id=dt8C74XDLLBosDqG3lTgKTsun4CeXC6MLnKZBLzvMGg";
  const getImages = () => {
    Axios.get(url).then((res) => {
      setimages(res.data);
    });
  }
  useEffect(() => {
    getImages();
  }, []);

  if (!images) return <h1> Loading.............. !</h1>
  return (
    <div>
      {images.map((image) => {
        return (
          <div style={{margin:"4rem", display:"inline-block"}}   key={image.id} >
            <LazyLoadImage
              key={image.id}
              effect="blur"
              src={image.urls.regular}
              alt={image.alt_description}
              width="350px"
              height="400px"
            placeholderSrc={process.env.PUBLIC_URL+"./logo192.png"}
            delayTime={1500}
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
