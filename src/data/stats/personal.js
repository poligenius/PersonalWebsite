import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-10-22T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const WorkYears = () => {
  const [workYears, setWorkYears] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const workStart = new Date('2022-10-24T09:9:00');
    setWorkYears(((Date.now() - workStart) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{workYears}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'workYears',
    label: 'Years of work',
    value: <WorkYears />,
  },
  {
    key: 'salary',
    label: 'Current salary',
    value: '28.000 €',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Milan, Italy',
  },
];

export default data;
