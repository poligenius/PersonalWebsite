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
    various industries, such as finance, technology, healthcare, consumer goods, and more. In Price I joined
    the Data & Analytics team, working on a great variety of projects to:`,
    highlights: [
      'Redesign and orchestrate the client\'s Data pipelines.',
      'Ingest large data flows.',
      'Develop backend and frontend of different applications to compute key financial risk indicators.',
      'Project clustering algorithms to spot users with anomalous accesses inside the client\'s systems.',
      'Advice clients during the architectural decision phase of Machine Learning projects.',
      'Hold many hours of lecture during a collaboration with H-Farm college teaching students the foundations of Spark, Big Data and SQL.',
    ],
  },
];

export default work;
