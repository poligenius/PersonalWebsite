const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools', 'Data Engineering', 'Data Science'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter Notebook',
    competency: 3,
    category: ['Data Science', 'Python', 'ML Engineering', 'Data Engineering', 'Tools'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Spark',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Databases'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Big Query',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'ML Engineering', 'Tools', 'Databases'],
  },
  {
    title: 'Vertex AI',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'ML Engineering', 'Tools'],
  },
  {
    title: 'Palantir Foundry',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'ML Engineering', 'Tools'],
  },
  {
    title: 'Google Colaboratory',
    competency: 3,
    category: ['Data Science', 'ML Engineering', 'Tools'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Databases', 'Data Engineering', 'Tools'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'AWS buckets',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Tools'],
  },
  {
    title: 'AWS SageMakers',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Tools'],
  },
  {
    title: 'Qlik Sense',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
