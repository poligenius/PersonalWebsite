/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'PwC',
    position: 'AI and Machine Learning Engineer - Associate',
    url: 'https://www.pwc.com/it/it/',
    startDate: '2022-10-24',
    summary: `PwC stands for PricewaterhouseCoopers, which is one of the world's leading professional services networks.
    It is a multinational firm that provides a wide range of services to clients,
    including auditing, consulting, tax advisory, and assurance services. PwC serves clients from
    various industries, such as finance, technology, healthcare, consumer goods, and more.
    \nIn Price I joined the Data & Analytics team, working on a great variety of projects, here is a list of my favorite ones:`,
    highlights: [
      'Managed Big Data flows for a financial client, from data ingestion to scheduling and data transformation, speeding up the build update time by approximately 50% and significantly reducing both computational costs and data storage space.',
      'Developed a complex application that allows for the calculation and scheduling of risk indicators. I implemented the backend using Python and the frontend with React. This application integrates seamlessly with a forecasting model for these indicators, enabling the client to anticipate market trends and take proactive or corrective actions.',
      'Oversaw the development of a clustering algorithm designed to identify users with anomalous permissions within the client’s database. This initiative resulted in reducing the auditor’s workload by more than fivefold and significantly improving the precision of anomalous user detection.',
      'Adviced clients during the architectural decision phase of Machine Learning projects.',
      'Held many hours of lecture during a collaboration with H-Farm college teaching students the foundations of Spark, Big Data and Machine Learning.',
    ],
  },
];

export default work;
