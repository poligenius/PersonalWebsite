import React, { useState, useEffect } from 'react';

const tick = (startDateTime) => {
  const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
  return ((Date.now() - startDateTime) / divisor).toFixed(11);
};

const Age = () => {
  const [age, setAge] = useState();

  const birthTime = new Date('1997-10-22T09:24:00');

  useEffect(() => {
    const timer = setInterval(() => setAge(tick(birthTime)), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const WorkYears = () => {
  const [workYears, setWorkYears] = useState();

  const workStart = new Date('2022-10-24T09:09:00');

  useEffect(() => {
    const timer = setInterval(() => setWorkYears(tick(workStart)), 25);
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
    key: 'universityYears',
    label: 'Years of university',
    value: 5,
  },
  {
    key: 'workYears',
    label: 'Years of work',
    value: <WorkYears />,
  },
  {
    key: 'salary',
    label: 'Current salary',
    value: '40.000 €',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Milan, Italy',
  },
];

export default data;
