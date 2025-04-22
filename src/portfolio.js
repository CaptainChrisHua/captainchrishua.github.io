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
      "⚡ Engineered a scalable enterprise recommendation engine, processing <strong>" +
      "8M+ daily requests at 2000 TPS</strong> using multi-stage algorithms (retrieval, ranking)" +
      "on high-performance cloud infrastructure (192 vCPUs, 192GB RAM)"
    ),
    emoji(
      "⚡ Designed an MLOps workflow replacing Cloudera, saving " +
      "<strong>$300K annually</strong> in licensing cost"
    ),
    emoji(
      "⚡ Developed a healthcare platform serving " +
      "<strong>40+ facilities and 100K+ users</strong>"
    )
  ],

  softwareSkills: [
    // Programming Languages
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "C/C++", fontAwesomeClassname: "fas fa-code" }, // 通用代码图标
    { skillName: "Swift", fontAwesomeClassname: "fab fa-swift" },

    // Frontend
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },

    // DevOps & Tools
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP", fontAwesomeClassname: "fab fa-google" }, // 替代 GCP 图标
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab" },
    { skillName: "NPM", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Slack", fontAwesomeClassname: "fab fa-slack" },

    // Databases (通用图标)
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "ElasticSearch", fontAwesomeClassname: "fas fa-search" } // 搜索图标代替
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
      Stack: "AI/ML/LLM",
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Gnosis AI",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "October 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Engineer",
      company: "Qizhidao",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "December 2021 – Jan 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "FosunCare",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2020 – October 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  subtitle: "Full-stack products & tools I architected, built, and deployed.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // 建议替换成你的Code Review Copilot Logo
      projectName: "Code Review Copilot",
      projectDesc:
        "Intelligent code review assistant powered by ChatGPT and Github Actions. Improved review efficiency by 60% via an automated pipeline—fetching git diff, invoking LLMs for code review, storing results, and sending notifications. SDK packaged for seamless integration.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/yourusername/code-review-copilot" // 如果有GitHub仓库，放GitHub地址，否则删掉此按钮
        }
      ]
    },
    {
      image: require("./assets/images/la-moments.jpg"), // 建议换成LA-Moments截图
      projectName: "LA-Moments Photo Blogging Platform",
      projectDesc:
        "A full-stack MERN platform for photography blogging, featuring Google OAuth login, Redux state management, and responsive UI. Deployed on AWS EC2, supporting post creation, browsing, and interaction. CI/CD automated with GitHub Actions.",
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
      projectDesc:
        "A comprehensive RBAC system built with Java, Spring Boot, React.js, and Docker, supporting operation logs, permission management, and RESTful APIs. Integrated Spring Security and EhCache, reducing latency by 35%. Deployed via Docker on AWS EC2.",
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
