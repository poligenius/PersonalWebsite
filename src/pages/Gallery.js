import React from 'react';
import { Link } from 'react-router-dom';
import GalleryItem from '../components/GalleryItem/GalleryItem';
import data from '../data/gallery';
import Main from '../layouts/Main';
import '../static/css/pages/_gallery.scss'; // Create a CSS file to style the gallery (Gallery.css)

const Gallery = () => (
  <Main
    title="Gallery"
    description="Gallery of my favorite pics."
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2><Link to="/gallery">Some of my fav pics and food</Link></h2>
        </div>
      </header>
      <div className="gallery-container">
        {data.map((photo) => (
          <GalleryItem title={photo.title} image={photo.image} />
        ))}
      </div>
    </article>
  </Main>
);

export default Gallery;
