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
  username: "Chialin Cheng",
  title: "Hi",
  subTitle: emoji(
    "I'm Chialin. A software engineer and researcher."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ccl1616",
  linkedin: "https://www.linkedin.com/in/chialin-cheng-3412731a1/",
  gmail: "cc5210@columbia.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@julie_cheng",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Software Engineer",
  // subTitle: "Software developer and researcher",
  skills: [
    emoji(
      "⚡ Design reliable software systems"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Conduct research and experiment on state-of-the-art technology"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github-square"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2024 - December 2025",
      // desc: "xxx",
      descBullets: [
        "Course: Natural Language Processing, Cloud Computing, Algorithms for Data Science, Artificial Intelligence",
        // "xxx"
      ]
    },
    {
      schoolName: "University of Minnesota - Twin Cities",
      logo: require("./assets/images/umn.png"),
      subHeader: "Exchange Student in Computer and Information Science",
      duration: "January 2023 - May 2023",
      desc: "GPA 3.923/4.0, Dean's List",
      descBullets: ["Revelant Course: Practice of Database"]
    },
    {
      schoolName: "National Tsing Hua University",
      logo: require("./assets/images/nthu.jpeg"),
      subHeader: "Bachelor of Science in Electrical Engineering and Computer Science",
      duration: "September 2019 - June 2023",
      desc: "GPA 3.95/4.3, Dean's List(2019)",
      descBullets: ["Relevant Course: Machine Learning, Software Engineering, Operating System, Design and Analysis of Algorithms, Data Structure, Computer-Aided Design of IC, IC Design, Signals and Systems, Hardware Security"]
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
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
      company: "Institute for Information Industry",
      companylogo: require("./assets/images/iii.png"),
      date: "April 2024 – July 2024",
      desc: "Software Technology Institute",
      descBullets: [
        "Developed a Retrieval-Augmented Generation (RAG) system to streamline senior citizen healthcare assessments, integrating speech-to-text, text embedding, data processing, and AI-driven healthcare planning."
      ]
    },
    {
      role: "Software Developer",
      company: "Academia Sinica",
      companylogo: require("./assets/images/sinica.png"),
      date: "August 2023 - April 2024",
      desc: "Embedded Systems Lab (Prof. Yuan-Hao Chang)",
      descBullets: [
        "Designed the software system for simulating sanitize operations on Zone Namespace Solid State Drives (ZNS SSDs).",
        "Implemented a C++ system for a hierarchical encrypted memory system and conducted experiments using over 4TB of industrial I/O traces."
      ]
    },
    {
      role: "Research Assistant",
      company: "National Tsing Hua University",
      companylogo: require("./assets/images/nthu.jpeg"),
      date: "March 2022 - September 2022",
      desc: "Electronic Design Automation Lab (Prof. Chun-Yao Wang)",
      descBullets: [
        "Independently developed a C++ software system capable of learning arithmetic operations, shift operations, and conditional statements from gate-level netlist circuits and generating equivalent RTL files."
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

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Project A",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Project B",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "International Buddy Program @UMN",
      subtitle:
        "Held mentor-buddy language exchange program with 50+ international students. Visited the Minnesotan community and interviewed the local Hmong people to explore their cultural background.",
      image: require("./assets/images/umn.png"),
      imageAlt: "UMN Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/chialin-cheng-3412731a1/overlay/1713365449226/single-media-viewer/?profileId=ACoAAC8z9SEBJ_FG-4vIHNVOmJizMOOD_gfgF3c"
        },
        {
          name: "Issuer",
          url: "https://isss.umn.edu/"
        }
        
      ]
    },
    {
      title: "Top X Teams Award @CAD Contest 2022",
      subtitle:
        "Recognized with a top-10 international prize in the 2022 ICCAD CAD Contest, achieving a maximum 98% reduction rate.",
      image: require("./assets/images/ICCAD2022.jpeg"),
      imageAlt: "iccad2022logo",
      footerLink: [
        {
          name: "CAD Contest 2022",
          url: "https://www.iccad-contest.org/2022/index.html"
        },
        {
          name: "Demo video",
          url: "https://drive.google.com/file/d/14DSxhzYC88ZN2WKkVs6YXmTiSZBM_XD9/view"
        }
      ]
    },

    {
      title: "Software Engineering Virtual Experience Program",
      subtitle: "Constructed a full-stack website project utilizing JPMorgan Chase frameworks and tools integrated with a stock price data feed.",
      image: require("./assets/images/jpmorgan.png"),
      imageAlt: "JPM logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_qDTJ8nyvwmwA6nNXm_1658299501155_completion_certificate.pdf"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for journalizing my experience, I love to write and share others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@julie_cheng/2023%E5%B9%B4-%E6%98%8E%E5%B0%BC%E8%98%87%E9%81%94%E5%A4%A7%E5%AD%B8%E4%BA%A4%E6%8F%9B%E5%85%A8%E8%A8%98%E9%8C%84-de68a0f2b2",
      title: "Being an exchange student at UMN",
      description:
        "click to check out full story on Medium"
    }
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Feel free to connect with me.",
  // number: "+886 966453396",
  email_address: "cc5210@columbia.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
