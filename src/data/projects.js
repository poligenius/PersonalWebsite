// TODO Add a couple lines about each project
const data = [
  {
    title: 'Adrenalina',
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
