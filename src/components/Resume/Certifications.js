import React from 'react';
import PropTypes from 'prop-types';

import Certification from './Certifications/Certification';

const Certifications = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((certification) => (
      <Certification
        data={certification}
        key={certification.name}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    platform: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    achievedDate: PropTypes.number,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
