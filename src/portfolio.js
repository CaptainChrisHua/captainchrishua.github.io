/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chris Hua",
  title: "Hi all, I'm Chris",
  subTitle: emoji(
    "A passionate Full Stack AI Engineer 🚀 with expertise in building scalable, AI-powered web and mobile applications."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/captainchrishua",
  linkedin: "https://www.linkedin.com/in/chrishua0919/",
  gmail: "job.chrishua0@gmail.com",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // kaggle: "https://gitlab.com/saadpasta",
  // gitlab: "https://gitlab.com/saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Software Engineer with 4 years of work experience",
  skills: [
    emoji(
      "⚡ Engineered a scalable enterprise recommendation engine, processing 8M+ daily requests at 2000 TPS"
    ),
    emoji(
      "⚡ Designed an MLOps workflow replacing Cloudera, saving $300K annually in licensing cost"
    ),
    emoji(
      "⚡ Developed a healthcare platform serving 40+ facilities and 100K+ users"
    )
  ],

  softwareSkills: [
    // Programming Languages
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "C/C++", fontAwesomeClassname: "fas fa-code"}, // 通用代码图标
    {skillName: "Swift", fontAwesomeClassname: "fab fa-swift"},

    // Frontend
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "React.js", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},

    // DevOps & Tools
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "GCP", fontAwesomeClassname: "fab fa-google"}, // 替代 GCP 图标
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"},
    {skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab"},
    {skillName: "NPM", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "Jira", fontAwesomeClassname: "fab fa-jira"},
    {skillName: "Slack", fontAwesomeClassname: "fab fa-slack"},

    // Databases (通用图标)
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "ElasticSearch", fontAwesomeClassname: "fas fa-search"} // 搜索图标代替
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/usc-logo.png"),
      subHeader: "Master of Science in Industrial and System Engineering",
      duration: "January 2023 - December 2024"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "GenAI/ML/DL",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set to false to hide this section
  experience: [
    {
      role: "Software Engineer",
      company: "Gnosis AI, LLC",
      companylogo: require("./assets/images/Gnosis AI logo 3-2.png"),
      date: "October 2024 – Present",
      desc: "Led the development of scalable backend services and real-time recommendation platforms in FinTech and media domains.",
      descBullets: [
        "Built a high-concurrency financial news platform with Java, Spring Boot, and Redis, reducing DB load by 18% during peak traffic",
        "Improved system scalability using Kafka-based batch notifications and async pipelines, enabling real-time delivery",
        "Developed a real-time article recommendation engine with Spark Streaming, Kafka, and Hive, boosting user engagement by 40%",
        "Replaced MySQL-based search with Elasticsearch, enabling multi-filter queries and reducing latency by 75%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Qizhidao Network Technology",
      companylogo: require("./assets/images/qizhidao.webp"),
      date: "December 2021 – January 2023",
      desc: "Architected and optimized large-scale enterprise recommendation systems and algorithm platforms.",
      descBullets: [
        "Optimized peer recommendation platform built with Python FastAPI, reducing memory usage by 40% and increasing peak TPS by 50%",
        "Managed data pipeline with PostgreSQL + ElasticSearch, leveraging NLP and custom algorithms for 97% match accuracy",
        "Led development of internal Algorithm Pipeline Platform using Vue.js, Golang/Gin, and Kubernetes, saving $300K/year"
      ]
    },
    {
      role: "Software Engineer",
      company: "FosunCare",
      companylogo: require("./assets/images/Fosun.jpeg"),
      date: "July 2020 – October 2021",
      desc: "Delivered a full-stack Healthcare Management Platform used by 40+ nursing homes and 100K+ users.",
      descBullets: [
        "Built B2B and B2C modules (RBAC, Scheduling, Medication Tracking) with Java, Spring Boot, Vue.js, and Element UI",
        "Collaborated in an agile team of 10 using JIRA for task tracking and delivery",
        "Deployed scalable services on Alibaba Cloud using Docker and Kubernetes"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const Projects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // 建议替换成你的Code Review Copilot Logo
      projectName: "Code Review Copilot",
      projectDesc: [
        emoji(
          "➤ Architected and developed an intelligent Code Review assistant based on ChatGPT, Github Actions, improving the efficiency by 60%."
        ),
        emoji(
          "➤ Orchestrated the entire process using Design Patterns (Pipeline Pattern), including pulling the SDK jar, retrieving the git diff content, invoking ChatGPT APIs for Code Review, storing the records, and sending notifications"
        ),
        emoji(
          "➤ Optimized the code by Domain-Driven Design (DDD) based on Spring Boot, and packaged the project as an SDK jar to reduce the cost of integration and usage."
        )
      ],
      tags: ["Full Stack", "GenAI"],
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/captainchrishua/code-review-copilot" // 如果有GitHub仓库，放GitHub地址，否则删掉此按钮
        }
      ]
    },
    {
      image: require("./assets/images/la-moments.png"), // 建议换成LA-Moments截图
      projectName: "LA-Moments Photo Blogging Platform",
      projectDesc: [
        emoji(
          "➤ Developed a full-stack photography blogging platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling users to create, view, and interact with photography posts."
        ),
        emoji(
          "➤ Built a responsive front-end with React.js and Material-UI, leveraging Redux for efficient state management to handle user interactions, incorporated user authentication with Google OAuth, and secured data management with MongoDB and Express.js."
        ),
        emoji(
          "➤ Deployed the platform on AWS EC2. Integrated GitHub Actions CI/CD pipelines and automated testing tools, including Jest and Mockingoose."
        )
      ],
      tags: ["Full Stack"],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://35.184.102.7"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/captainchrishua/la-moments" // 如果有GitHub仓库可加，没有可删
        }
      ]
    },
    {
      image: require("./assets/images/rbac1.png"), // 建议换成RBAC相关Logo或界面截图
      projectName: "General RBAC Platform",
      projectDesc: [
        emoji(
          "➤ Designed and implemented a comprehensive role-based access control (RBAC) system with operation logging functionality, including database schema design for tracking user activities and permissions management."
        ),
        emoji(
          "➤ Developed the front-end interface using React.js and LayUI, built back-end services with Java, SpringBoot, and MyBatis, and implemented RESTful APIs for role configuration and permission validation. Deployed the application on AWS EC2 using Docker"
        ),
        emoji(
          "➤ Integrated Spring Security for fine-grained permission controls, with EhCache memory caching, reducing interface latency by 35%"
        )
      ],
      tags: ["Full Stack"],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://35.184.102.7:8081/authman/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/captainchrishua/rbac-platform" // 如果有GitHub仓库可加，没有可删
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coursera Algorithms Specialization",
      subtitle:
        "Completed Stanford University's 'Algorithms' Specialization on Coursera, covering divide-and-conquer, graph algorithms, greedy methods, dynamic programming, and NP-completeness.",
      image: require("./assets/images/Coursera Algorithms.png"),
      imageAlt: "Stanford University Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/verify/specialization/6RV482LWW5XJ"
        }
      ]
    },
    {
      title: "Coursera Data Structures and Algorithms Specialization",
      subtitle:
        "Completed UC San Diego's 'Data Structures and Algorithms' Specialization on Coursera, mastering fundamental and advanced algorithms, data structures, graph theory, string algorithms, and a Capstone project.",
      image: require("./assets/images/Coursera Data Structures & Algorithms.png"),
      imageAlt: "UC San Diego Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/verify/specialization/67TL73BY9AEC"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "job.chrishua@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  Projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
