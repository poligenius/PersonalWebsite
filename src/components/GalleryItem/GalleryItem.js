import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ title, image, onClick }) => (
  <div className="photo-item" onClick={onClick}>
    <img src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
  </div>
);

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
