import React from 'react';
import PropTypes from 'prop-types';

const Certification = ({ data }) => (
  <article className="certification-container">
    <header>
      <h4 className="certification">{data.platform}</h4>
      <p className="name"><a href={data.url}>{data.name}</a>, {data.achievedDate}</p>
    </header>
  </article>
);

Certification.propTypes = {
  data: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    achievedDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Certification;
