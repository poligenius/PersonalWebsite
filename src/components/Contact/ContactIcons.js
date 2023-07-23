import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../static/css/layout/_footer.scss';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} className="icon-custom-color-sidebar" />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
