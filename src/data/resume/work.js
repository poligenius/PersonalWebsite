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
    name: 'Mediaset',
    position: 'Tech Product Owner',
    url: 'https://mediasetitalia.com/',
    startDate: '2023-12-11',
    summary: 'Mediaset is a prominent media corporation based in Italy, stands as a leader in the industry, known for its diversified portfolio of television channels and a steadfast commitment to innovation. \nAs a Tech Product Owner at Mediaset, I spearhead the strategic management of technological products within the realms of Software, Machine Learning, and Artificial Intelligence. \nKey aspects of my role include:',
    highlights: [
      'Coordinate teams of external developers and design the architecture of technological solutions.',
      'Innovation Leadership: Championing the integration of emerging technologies, particularly in the fields of machine learning and artificial intelligence.',
      'Stakeholder Engagement: Collaborating closely with stakeholders to align technological initiatives with organizational objectives.',
      'Proof of Concept Development: Orchestrating the production of robust proofs of concept to illustrate the feasibility and potential impact of innovative ideas.',
      'Cross-functional Collaboration: Fostering collaboration among multidisciplinary teams to ensure seamless integration of technology-driven solutions.',
    ],
  },
  {
    name: 'START Hack 2024',
    position: 'Hacker',
    url: 'https://www.startglobal.org/start-hack/home',
    startDate: '2024-03-20',
    endDate: '2024-03-22',
    summary: 'START Hack is one of the world\'s most famous hackathons that takes place every year in St. Gallen. I took part to this event with the Google Developers Club of Politecnico di Milano.'
    + ' We had to code for 36 hours in order to propose a solution for the problem of wildfires in Brazil.'
    + ' We developed a computer vision model able to detect the presence of wildfires from drone\'s footages and alert the authorities, in addition we developed an '
    + 'engaging landing page, using react, to rise awareness about this problem. You can find the link to our project in the project section of my site.',
    highlights: [],
  },
  {
    name: 'PwC',
    position: 'AI and Machine Learning Engineer - Associate',
    url: 'https://www.pwc.com/it/it/',
    startDate: '2022-10-24',
    endDate: '2023-12-10',
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
