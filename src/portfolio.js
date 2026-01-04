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
  username: "Akshay Ravi",
  title: "Hi all, I'm Akshay",
  subTitle: emoji(
    "I build scalable AI systems that solve real business problems. Currently a Master's in Data Science student at the University of Washington with a focus on Generative AI and ML Engineering."
  ),
  resumeLink: "https://drive.google.com/file/d/10vogWfydd6gbu41GErsrXY-LA24ScI1v/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akshayravi13",
  linkedin: "https://linkedin.com/in/akshayravi13",
  gmail: "akshayravi13@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@akshayravi13",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data Scientist experienced in building autonomous data pipelines, AI agents, and business intelligence solutions",
  skills: [
    emoji(
      "⚡ Engineering Scalable High-Speed Data Pipelines"
    ),
    emoji(
      "⚡ Architecting Advanced Generative AI & RAG Agents"
    ),
    emoji(
      "⚡ Optimizing Deep Learning Models for Real-Time Performance"
    ),
    emoji(
      "⚡ Building Automated Business Intelligence Dashboards"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain" // FA doesn't have a TF logo, 'brain' is standard for ML [cite: 55, 66]
    },
    {
      skillName: "Tableau/PowerBI",
      fontAwesomeClassname: "fas fa-chart-bar" // Represents your dashboarding expertise [cite: 56, 64]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/uw_logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2024 - March 2026",
      desc: "GPA: 3.90",
      descBullets: []
    },
    {
      schoolName: "Narsee Monjee Institute of Management Studies",
      logo: require("./assets/images/nmims_logo.png"),
      subHeader: "Bachelor of Technology in Data Science",
      duration: "July 2020 - May 2024",
      desc: "GPA: 3.71",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & AI", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering & Pipelines",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data & Cloud Systems",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Capstone Project - UW MSDS",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft_logo.png"),
      date: "October 2025 – March 2026",
      desc: "Seattle, WA, USA",
      descBullets: [
        "Built an automated correction agent using RAG and Gemini 2.5 to fix erroneous PostgreSQL queries by retrieving context from official documentation and historical error patterns.",
        "Implemented a rigorous validation loop that tests proposed fixes using the PostgreSQL EXPLAIN command within a sandbox, ensuring all outputs are syntactically valid and safe to execute.",
        "Designed a feedback-driven system where successful repairs are automatically indexed back into the vector store, enabling the model to continuously learn and improve its accuracy over time"
      ]
    },
    {
      role: "Data Science & Analytics Intern",
      company: "ASML",
      companylogo: require("./assets/images/asml_logo.png"),
      date: "June 2025 – September 2025",
      desc: "Hillsboro, OR, USA",
      descBullets: [
        "Engineered a scalable data pipeline to securely fetch and parse over 2,000 unstructured data files daily using asynchronous Python, achieving a 5x speed increase for product analytics.",
        "Developed an automated product usage tracker and Power BI dashboard to provide business intelligence on customer adoption of software products, saving 80 hours in development and 20 hours of weekly reporting."
      ]
    },
    {
      role: "Data Science Intern",
      company: "AkzoNobel",
      companylogo: require("./assets/images/akzonobel_logo.png"),
      date: "June 2023 – June 2024",
      desc: "Amsterdam, Netherlands",
      descBullets: [
        "Implemented a Python optimizer function using a physics-based model and neural networks, reducing color recipe optimization processing time from 100 seconds to 0.1 seconds.",
        "Developed neural network architectures using spectrophotometric color data to perform toner prediction for automotive refinishing, improving model speed by 2x.",
        "Experimented with image processing models to extrapolate information from microscopic images for toner prediction, created custom image generators using Keras for data augmentation and improved model accuracy by 22%."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Lumiq AI",
      companylogo: require("./assets/images/lumiq_logo.png"),
      date: "June 2022 – July 2022",
      desc: "Noida, India",
      descBullets: [
        "Performed data gathering and cleaning for classification of different ID proofs and medical forms.",
        "Gained competency about processes involved in creating an OCR model."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Acxiom Technologies",
      companylogo: require("./assets/images/acxiom_logo.png"),
      date: "May 2021 – June 2021",
      desc: "Mumbai, India",
      descBullets: [
        "Developed proficiency in using Pandas, Seaborn, and Scikit-Learn libraries, contributing to more efficient data processing.",
        "Applied statistical techniques, including K-Nearest Neighbors, Logistic Regression, and Linear Regression models, to analyze diverse datasets and derive insights."
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
  title: "Projects",
  subtitle: "SOME COOL PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/project_kallipolis_logo.png"), // Placeholder
      projectName: "Project Kallipolis",
      projectDesc: "Project Kallipolis is a research simulation that utilizes LLM agents to recreate Plato's ideal city, Kallipolis, in order to investigate whether social class bias and inequality spontaneously emerge in a theoretically virtuous AI society.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/akshayravi13/Project-Kallipolis"
        }
      ]
    },

    {
      image: require("./assets/images/quizzatron_logo.png"), // Placeholder
      projectName: "Quizzatron",
      projectDesc: "Generative AI-based application to generate and play dynamic quizzes based on any topic or PDF, leveraging large language models like Gemini and Deepseek.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/akshayravi13/Quizzatron"
        }
      ]
    },
    {
      image: require("./assets/images/car_brand_recommender.png"), // Placeholder
      projectName: "Car Brand Recommender",
      projectDesc: "Analyzed thousands of car reviews using sentiment analysis and topic modeling. Developed a recommendation system using SVM to suggest car brands.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/akshayravi13/Car-Recommender-Using-Sentiment-Analysis-Bertopic-SVM"
        }
      ]
    },
    {
      image: require("./assets/images/fire_detection_logo.jpg"), // Placeholder
      projectName: "Fire Detection",
      projectDesc: "Trained a YOLOv4-tiny model for fire detection (36% mAP@0.50). Built inference pipelines for images, video files, and live video feeds.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/akshayravi13/fire-detection-yolov4tiny"
        }
      ]
    },
    {
      image: require("./assets/images/football_detection.png"), // Placeholder
      projectName: "Football Goal Detection",
      projectDesc: "Created a dataset of football goal-line images and trained models for auto-detection using TensorFlow. Visualized feature extraction using Grad-CAM.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/akshayravi13/Goal-Line-Detection-Football"
        }
      ]
    },
    {
      image: require("./assets/images/content_wars_logo.png"), // Placeholder
      projectName: "Content Wars",
      projectDesc: "Engineered interactive Tableau dashboards tailored to three distinct user personas by aggregating diverse OTT datasets via BeautifulSoup and TMDb API, providing comparative insights for casual viewers and analysts alike.",
      footerLink: [
        {
          name: "View on Tableau",
          url: "https://public.tableau.com/views/ContentWars-OTTPlatformsAnalysisDashboard_17348962695070/Home?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
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

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (206) 837-3900",
  email_address: "akshayravi13@gmail.com"
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
