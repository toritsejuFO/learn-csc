const questions = {
  ml: [
    {
      number: '1',
      question: 'What is one way that businesses can benefit from machine learning and AI technologies without directly involving data scientists?',
      options: [
        'Embedding machine learning into chatbots and other types of applications',
        'Uncovering information in large data sets that can be sold to other companies',
        'Using machine learning to find ways to make business operations more effective',
        'Not using machone learning at all',
      ],
      answer: 0,
    },
    {
      number: '2',
      question: 'Machine learning can be used on many types of data, structured and unstructured. All of the following are examples of effective uses of machine learning except ...',
      options: [
        'Personalizing marketing campaigns based on customer demographics and purchase history',
        'Detecting possible fraudulent activity in financial transaction data',
        'Examining internet of things (IoT) data to predict equipment issues before they arise',
        'Analyzing previous product revenue data to determine the cause of dropping sales',
      ],
      answer: 3,
    },
    {
      number: '3',
      question: 'Which of the following is a technique frequently used in machine learning and AI programs?',
      options: [
        'Classification of data into categories based on attributes',
        'Grouping similar objects into clusters of related events',
        'Identifying relationships between events to predict when one will follow the other',
        'All of the above are common machine learning techniques',
      ],
      answer: 3,
    },
    {
      number: '4',
      question: 'There are three ways in which machines learn except ...',
      options: [
        'Supervised Learning',
        'Unreinforcement Learning',
        'Reinforcement Learning',
        'Unsupervised Learning',
      ],
      answer: 2,
    },
    {
      number: '5',
      question: 'Inductive learning is the process of using observations to draw conclusions?',
      options: [
        'True',
        'False',
      ],
      answer: 1,
    },
    {
      number: '6',
      question: 'Deductive learning is the process of using conclusions to form observations',
      options: [
        'False',
        'True',
      ],
      answer: 0,
    },
  ],
  networking: [
    {
      number: '1',
      question: 'What type of wireless network adapter do you need to have to access the internet?',
      options: [
        'You need to have an internal network adapter',
        'You need to have an external network adapter',
        'You can have either answer one or two',
        'You don\'t need to have a network adapter',
      ],
      answer: 2,
    },
    {
      number: '2',
      question: 'What is an IP address?',
      options: [
        'It is a general numerical label, which most computers share',
        'It is a unique numerical label, which is different for each device',
        'It is a general alphabetical label, which most computers share',
        'It is a unique alphabetical label, which is different for each device',
      ],
      answer: 1,
    },
    {
      number: '3',
      question: 'For the dynamic allocation of IP address we use:',
      options: [
        'TTL',
        'DHCP',
        'DNS',
        'TCP/IP',
      ],
      answer: 1,
    },
    {
      number: '4',
      question: 'In which way are LAN and WAN different?',
      options: [
        'LAN uses a faster internet protocol',
        'WAN uses a faster internet protocol',
        'LAN needs a router to be able to work',
        'WAN needs a router to be able to work',
      ],
      answer: 0,
    },
    {
      number: '5',
      question: 'What does the router do?',
      options: [
        'It provides internet connectivity',
        'It transfers the packets of data between two networks',
        'It generates IPv4 codes',
        'It generates IPv6 codes'
      ],
      answer: 1,
    },
    {
      number: '6',
      question: 'What Internet speed can be achieved through optical fibers?',
      options: [
        'Around 64 Mb/s',
        'At max 1 Gb/s',
        'Around 64 Kb/s',
        'More than 1 Gb/s',
      ],
      answer: 1,
    },
    {
      number: '7',
      question: 'What is one function of a Layer 2 switch?',
      options: [
        'Forwards data based on logical addressing',
        'Learns the port assigned to a host by examining the destination MAC address',
        'Duplicates the electrical signal of each frame to every port',
        'Determines which interface is used to forward a frame based on the destination MAC address',
      ],
      answer: 3,
    },
    {
      number: '8',
      question: 'How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?',
      options: [
        'SW1 forwards the frame directly to SW2. SW2 floods the frame to all ports connected to SW2, excluding the port through which the frame entered the switch',
        'SW1 floods the frame on all ports on the switch, excluding the interconnected port to switch SW2 and the port through which the frame entered the switch',
        'SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch',
        'SW1 drops the frame because it does not know the destination MAC address',
      ],
      answer: 2,
    },
    {
      number: '9',
      question: 'What is a basic function of the Cisco Borderless Architecture distribution layer?',
      options: [
        'Aggregating Layer 3 routing boundaries',
        'Aggregating all the campus blocks',
        'Acting as a backbone',
        'Providing access to the user'
      ],
      answer: 0,
    },
    {
      number: '10',
      question: 'What does the term "port density" represent for an Ethernet switch?',
      options: [
        'The numbers of hosts that are connected to each switch port',
        'The speed of each port',
        'The memory space that is allocated to each switch port',
        'The number of available ports',
      ],
      answer: 3,
    },
  ],
  webdev: [
    {
      number: '1',
      question: 'Which of the following is the proper HTML5 doctype?',
      options: [
        '<doctype html>',
        '<Doctype html5>',
        '<!doctype html5>',
        '<!doctype html>',
      ],
      answer: 3,
    },
    {
      number: '2',
      question: 'To ensure rules and a structure are enforced on a XML document a XML Schema can be applied.  What is the file extension used for an XML Schema Document?',
      options: [
        '.Schema',
        '.XSD',
        '.XML',
        '.XHTML',
      ],
      answer: 1,
    },
    {
      number: '3',
      question: 'What is the correct HTML for creating a hyperlink?',
      options: [
        '<a url="http://www.w3schools.com">W3Schools.com</a>',
        '<a name="http://www.w3schools.com">W3Schools.com</a>',
        '<a href="http://www.w3schools.com">W3Schools</a>',
        '<a>http://www.w3schools.com</a>',
      ],
      answer: 2,
    },
    {
      number: '4',
      question: 'Which of these tags are all <table> tags?',
      options: [
        '<table><head><tfoot>',
        '<table><tr><td>',
        '<thead><body><tr>',
        '<table><tr><tt>',
      ],
      answer: 1,
    },
    {
      number: '5',
      question: 'What is the correct HTML for inserting an image?',
      options: [
        '<img alt="MyImage">image.gif</img>',
        '<img src="image.gif" alt="MyImage">',
        '<image src="image.gif" alt="MyImage">',
        '<img href="image.gif" alt="MyImage">',
      ],
      answer: 1,
    },
    {
      number: '6',
      question: 'What is the correct HTML for referring to an external style sheet?',
      options: [
        '<stylesheet>mystyle.css</stylesheet>',
        '<style src="mystyle.css">',
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        '<link rel="style" type="text/css" src="mystyle.css">'
      ],
      answer: 2,
    },
    {
      number: '7',
      question: 'Which is the correct CSS syntax?',
      options: [
        'body {color: black;}',
        '{body:color=black;}',
        'body:color=black;',
        '{body;color:black;}',
      ],
      answer: 0,
    },
    {
      number: '8',
      question: 'Which property is used to change the background color in css?',
      options: [
        'color',
        'background-color',
        'bgcolor',
        'backgroundColor'
      ],
      answer: 1,
    },
    {
      number: '9',
      question: 'With jQuery, look at the following selector: $("div"). What does it select?',
      options: [
        'All div elements',
        'The first div element',
        'The last div element'
      ],
      answer: 0,
    },
    {
      number: '10',
      question: 'What is the correct jQuery code to set the background color of all p elements to red?',
      options: [
        '$("p").css("background-color","red");',
        '$("p").manipulate("background-color","red");',
        '$("p").layout("background-color","red");',
        '$("p").style("background-color","red");',
      ],
      answer: 3,
    },
    {
      number: '11',
      question: 'With jQuery, look at the following selector: $("div.intro"). What does it select?',
      options: [
        'All div elements with id="intro"',
        'The first div element with id="intro"',
        'The first div element with class="intro"',
        'All div elements with class="intro"',
      ],
      answer: 3,
    },
    {
      number: '12',
      question: 'Which jQuery method is used to hide selected elements?',
      options: [
        'hidden()',
        'visible(false)',
        'hide()',
        'display(none)',
      ],
      answer: 2,
    },
    {
      number: '13',
      question: 'What is a Web Service?',
      options: [
        'The equivalent of HTML for Windows',
        'Allows us to run a Web Server',
        'Provides easy access to required data, night and day on demand.',
        'Allows us to serve Web Pages',
      ],
      answer: 2,
    },
    {
      number: '14',
      question: 'What does client-side mean?',
      options: [
        'Allows us to talk to a server',
        'Code which is executed on the client web page rather than the server',
        'Allows us to split our web page in two, one for the client and one for the server',
        'It\'s HTML code on the client',
      ],
      answer: 1,
    },
    {
      number: '15',
      question: 'What provides additional functionality into a traditional web page and is completely open source?',
      options: [
        'VBScript',
        'CSS',
        'JavaScript',
        'Internet Explorer',
      ],
      answer: 2,
    },
  ],
  cloud: [
    {
      number: '1',
      question: '________ describes a cloud service that can only be accessed by a limited amount of people.',
      options: [
        'Data center',
        'Private cloud',
        'Virtualization',
        'Public cloud',
      ],
      answer: 1,
    },
    {
      number: '2',
      question: '________ describes a distribution model in which applications are hosted by a service provider and made available to users.',
      options: [
        'Infrastructure-as-a-Service (IaaS)',
        'Platform-as-a-Service (PaaS)',
        'Software-as-a-Service (SaaS)',
        'Cloud service',
      ],
      answer: 2,
    },
    {
      number: '3',
      question: 'Access to a Cloud environment always costs more money compared to a traditional desktop environment.',
      options: [
        'True',
        'False',
      ],
      answer: 1,
    },
    {
      number: '4',
      question: '_________ is the feature of cloud computing that allows the service to change in size or volume in order to meet a user’s needs.',
      options: [
        'Scalability',
        'Virtualization',
        'Security',
        'Cost-savings',
      ],
      answer: 0,
    },
    {
      number: '5',
      question: '_______ provides virtual machines, virtual storage, virtual infrastructure, and other hardware assets.',
      options: [
        'SaaS',
        'Service Provider',
        'Paas',
        'IaaS',
      ],
      answer: 3,
    },
    {
      number: '6',
      question: 'What is the disadvantage of cloud computing?',
      options: [
        'It does not support group collaboration.',
        'It requires constant internet connection.',
        'It provides limited storage.',
        'None of these.',
      ],
      answer: 1,
    },
    {
      number: '7',
      question: 'Which cloud infrastructure is composed of some combination of cloud services from different service providers?',
      options: [
        'public cloud',
        'private cloud',
        'hybrid cloud',
        'distributed cloud',
      ],
      answer: 2,
    },
    {
      number: '8',
      question: 'Which delivery model is an example of a cloud computing environment that provides users with a web based email service?',
      options: [
        'PaaS',
        'Saas',
        'IaaS',
        'Email as a Service',
      ],
      answer: 1,
    },
    {
      number: '9',
      question: 'Which billing model allows companies to have a predetermined and recurring costs for services used in a cloud environment?',
      options: [
        'utility',
        'metered',
        'resource based',
        'subscription',
      ],
      answer: 3,
    },
  ],
  mobile: [
    {
      number: '1',
      question: 'Which is not a mobile OS',
      options: [
        'Android',
        'OSX',
        'iOS',
        'HarmonyOS',
      ],
      answer: 1,
    },
    {
      number: '2',
      question: 'Play Store is available in which operating system',
      options: [
        'Android',
        'Unix',
        'iOS',
        'HarmonyOS',
      ],
      answer: 0,
    },
    {
      number: '3',
      question: 'Native Mobile Applications run directly from your smartphone or tablet. These are mobile OS/platform-based applications',
      options: [
        'true',
        'false',
      ],
      answer: 0,
    },
    {
      number: '4',
      question: 'Which operating system is the Android OS based off of?',
      options: [
        'MAC OSX',
        'Unix',
        'Windows NT Kernel',
        'Linux',
      ],
      answer: 3,
    },
    {
      number: '5',
      question: 'What does SDK stand for?',
      options: [
        'Software Design Kit',
        'Specific Developed Keys',
        'Software Development Kit',
        'Stand-alone Desk Kit',
      ],
      answer: 2,
    },
    {
      number: '6',
      question: 'Which of these Virtual Assistants is designed for Android',
      options: [
        'Google',
        'Siri',
        'Cortana',
        'Yahoo',
      ],
      answer: 0,
    },
    {
      number: '7',
      question: 'Which of the following controls the orientation of your phone?',
      options: [
        'Gyroscope',
        'Geotracking',
        'Accelerometer',
        'Capacitive',
      ],
      answer: 2,
    },
    {
      number: '8',
      question: 'Which operating system is iOS based off of?',
      options: [
        'Linux',
        'Mac OSX',
        'Windows NT Kernel',
        'Unix',
      ],
      answer: 3,
    },
    {
      number: '9',
      question: 'What is an advantage of Action Launcher?',
      options: [
        'Increases the bandwidth of your apps',
        'Allows quicker access to applications',
        'Manages Application',
        'Calibrates your screen',
      ],
      answer: 1,
    },
    {
      number: '10',
      question: 'Which of these mobile operating system are open source?',
      options: [
        'Windows Mobile',
        'Linux',
        'Android',
        'Apple iOS',
      ],
      answer: 2,
    },
    {
      number: '11',
      question: 'What technology makes WiFi calling possible?',
      options: [
        'VOIP',
        'Wifi',
        'WiMax',
        'WWAN',
      ],
      answer: 0,
    },
    {
      number: '12',
      question: 'What format is an Android Application gonna be created as?',
      options: [
        'SDK',
        'APK',
        'xCode',
        'Android Studio',
      ],
      answer: 1,
    },
    {
      number: '13',
      question: 'Which touchscreens need to be constantly calibrated?',
      options: [
        'Resistive Touchscreen',
        'Capacitive Touchscreen',
        'New Touchscreens',
        'Gyroscope Screens',
      ],
      answer: 0,
    },
    {
      number: '14',
      question: 'Which operating system are iOS applications designed in?',
      options: [
        'Windows 8.1/10',
        'Unix',
        'MAC OSX',
        'Linux',
      ],
      answer: 2,
    },
    {
      number: '15',
      question: 'Which type of screen relies on the electrical properties of the human body to detect where a display was tapped?',
      options: [
        'Resistive Touchscreen',
        'Capacitive Touchscreen',
        'SAW',
        'Infrared',
      ],
      answer: 1,
    },
    {
      number: '16',
      question: 'Which of the following is required to create Apple iOS apps?',
      options: [
        'SDK',
        'Xcode',
        'Google IDE',
        'Apple Development',
      ],
      answer: 1,
    },
    {
      number: '17',
      question: 'WiFi calling is integrated into every mobile operating system',
      options: [
        'false',
        'true',
      ],
      answer: 0,
    },
    {
      number: '18',
      question: 'Windows Mobile is open sourced',
      options: [
        'true',
        'false',
      ],
      answer: 1,
    },
  ],
  design: [
    {
      number: '1',
      question: 'RGB is to ppi as CMYK is to _________.',
      options: [
        'Pixels per inch',
        'Dots per inch',
        'Screen resolution',
        'Lpi',
      ],
      answer: 1,
    },
    {
      number: '2',
      question: 'The complement of blue is __________.',
      options: [
        'Red',
        'Yellow',
        'Orange',
        'Yellow-orange',
      ],
      answer: 2,
    },
    {
      number: '3',
      question: 'When a design calls for a spiraling text, this application would facilitate the job.',
      options: [
        'PhotoShop',
        'Bridge',
        'Flash',
        'Illustrator',
      ],
      answer: 3,
    },
    {
      number: '4',
      question: 'The placement of graphics and text on a graphic design is known as _________.',
      options: [
        'Balanced',
        'Framing',
        'Asymmetrical',
        'Simplicity',
      ],
      answer: 3,
    },
    {
      number: '5',
      question: 'A graphic image with a central figure is an example of this type of composition:',
      options: [
        'Balanced',
        'Framing',
        'Asymmetrical',
        'Simplicity',
      ],
      answer: 3,
    },
    {
      number: '6',
      question: 'Which of the following is not true about package designs?',
      options: [
        'All package designs are designed flat and later folded in 3D',
        'Graphic designers always consider the inherent symbolism of color when designing a package',
        'Package designers always consider the 3 second rule',
        'Convenience and recognition are key considerations',
      ],
      answer: 2,
    },
    {
      number: '7',
      question: 'Vector based graphic work is _____.',
      options: [
        'Limited by large file sizes',
        'Scalable',
        'Used by most digital photographers',
        'Only used in Flash and PhotoShop',
      ],
      answer: 1,
    },
    {
      number: '8',
      question: 'The following is not an element of design:',
      options: [
        'Line',
        'Shape',
        'Texture',
        'Unity',
      ],
      answer: 3,
    },
    {
      number: '9',
      question: 'Which of the following is not included in a style sheet?',
      options: [
        'Type face (font)',
        'CMYK colors',
        'RGB colors',
        'None of the above',
      ],
      answer: 3,
    },
    {
      number: '10',
      question: 'This artist was our inspiration for the Pop Art work we did as a triptych.',
      options: [
        'Bierut',
        'Warhol',
        'Fairey',
        'Maxx',
      ],
      answer: 3,
    },
    {
      number: '11',
      question: 'This is the first color that the human eye reacts to when it comes into vision.',
      options: [
        'Red',
        'Green',
        'Blue',
        'White',
      ],
      answer: 0,
    },
    {
      number: '12',
      question: 'One of the golden rules of graphic design is to keep the design asymmetrically balanced. To do so, this is one of the best rules to help organize the design:',
      options: [
        'Rule of opposition',
        'Rules of odds',
        'Rule of proximity',
        'Rule of selective focus',
      ],
      answer: 1,
    },
    {
      number: '13',
      question: 'What is the primary function of a critique of your design?',
      options: [
        'To point out the flaws in the design.',
        'To make the designer feel good about the design.',
        'To improve the overall design.',
        'To improve the designer.',
      ],
      answer: 2,
    },
    {
      number: '14',
      question: 'Which of the following formats should never be given to the client?',
      options: [
        '.png',
        '.psd',
        '.gif',
        '.jpeg',
      ],
      answer: 1,
    },
  ],
}

const topics = [
  {
    name: 'Machine Learning',
    shortname: 'ML',
    imagePath: require('../images/ml.jpeg'),
    questions: questions.ml,
  },
  {
    name: 'Networking',
    shortname: 'Networking',
    imagePath: require('../images/networking.jpeg'),
    questions: questions.networking,
  },
  {
    name: 'Web Development',
    shortname: 'Web Dev',
    imagePath: require('../images/webdev.jpeg'),
    questions: questions.webdev,
  },
  {
    name: 'Cloud Computing',
    shortname: 'Cloud',
    imagePath: require('../images/cloud.jpeg'),
    questions: questions.cloud,
  },
  {
    name: 'Mobile App Development',
    shortname: 'Mobile',
    imagePath: require('../images/mobile.jpeg'),
    questions: questions.mobile,
  },
  {
    name: 'Graphic Design',
    shortname: 'Design',
    imagePath: require('../images/graphics.jpeg'),
    questions: questions.design,
  }
]

export default {
  topics
}
