// TODO Add a couple lines about each project
const data = [
  {
    title: 'Put Off Fire - START Hack 24',
    subtitle: 'Submission for Start Hack 2024',
    link: 'https://github.com/poligenius/React-No-Profi-Landing-Page-Start-Hack',
    image: '/images/projects/StartHack24-landing_page.png',
    date: '2024-03',
    desc:
      'START Hack is one of the world\'s most famous hackathons that takes place every year in St. Gallen. I took part to this event with the Google Developers Club of Politecnico di Milano.'
      + ' We had to code for 36 hours in order to propose a solution for the problem of wildfires in Brazil.'
      + ' We developed a computer vision model able to detect the presence of wildfires from drone\'s footages and alert the authorities, in addition we developed an '
      + 'engaging landing page, using react, to rise awareness about this problem.',
  },
  {
    title: 'Adrenaline',
    subtitle: '2019 bachelor degree thesis\' project',
    link: 'https://github.com/lentinip/ing-sw-2019-Lentini-Marazzi-Marini',
    image: '/images/projects/adrenaline.webp',
    date: '2019-05',
    desc:
      'Built as thesis project for my bachelor degree in a group of three students. '
      + 'Adrenaline is the Java implementation of the board game created by Filip Neduk. '
      + 'Adrenaline is a first-person shooter on your gaming table. Grab some ammo, grab a gun, and start shooting. '
      + 'Build up an arsenal for a killer turn. Combat resolution is quick and diceless. And if you get shot, you get faster! '
      + 'We implemented the game using both a CLI and a GUI, checkout our repo to download and play the game!',
  },
  {
    title: 'Extracting sensitive data from Amazon Alexa with Machine Learning',
    subtitle: 'My published master degree thesis',
    link: 'https://www.politesi.polimi.it/handle/10589/204539',
    image: '/images/projects/IoTforensics.jpeg',
    date: '2023-05',
    desc:
      'In my published master degree thesis I have investigated, with success, the possibility to extract'
      + ' sensitive information from the encrypted traffic produced by Amazon Echo IoT devices (aka Alexa).'
      + ' Click on the project to learn more about my work.',
  },
  {
    title: 'Fake handwritten signatures detector',
    subtitle: '',
    link: 'https://github.com/poligenius/SiameseNN_HandwrittenRecognition/tree/main',
    image: '/images/projects/siameseNN.jpeg',
    date: '2023-12',
    desc:
      'While I worked at PWC I developed this model as a PoC for a client who wanted to develop a model able to'
      + ' spot fake signatures in documents. I have used a siamese NN to perform the task and, even though it was just a PoC, the results'
      + ' have been really promising. Go checkout the notebook by clicking on the project.',
  },
  {
    title: 'Maize plants segmentation with Neural Networks',
    subtitle: '',
    link: 'https://colab.research.google.com/drive/1aM3h7pbGkOmPxj-OcqgsAtCmG-LJmr0k?usp=sharing',
    image: '/images/projects/MLforFarms.jpg',
    date: '2021-04',
    desc:
      'I co-developed this project with a colleague, aiming to train a CNN capable of distinguishing corn plants from invasive weeds.'
      + ' The goal was to integrate this model into robots tasked with weed removal. Our  neural network achieved an accuracy of 97% on the validation dataset.',
  },
  {
    title: 'Mask Detector',
    subtitle: 'A convolutional neural network to spot people who liked to spread covid-19 virus',
    image: '/images/projects/MaskDetector.jpeg',
    date: '2020-03',
    desc:
      'During, covid pandemic I have trained a Convolutional Neural Network able to spot people in the crowd '
      + 'which were not wearing a mask in order to fine them. I know it looks like Black Mirror, but don\'t worry'
      + ', even though the model performed really well it has never been deployed in a real use case scenario.',
  },
];

export default data;
