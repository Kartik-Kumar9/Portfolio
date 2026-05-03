// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio!
//  Every section of the site pulls from this single file.
// ============================================================

export const personalInfo = {
  name: "Kartik Kumar",
  tagline: "Computer Science Student", // shown below name
  roles: [                             // typing effect cycles through these
    "Data Science ",
    "Machine Learning ",
    "Python ",
    "Web Development",
    "Artificial Intelligence",
    "Data Visualization",
  ],
  shortBio: "Bridging the gap between raw data and actionable intelligence. I engineer scalable machine learning models and high-performance applications that drive real-world impact.",
  bio: "I am a Computer Science student specializing in Data Science and Machine Learning. I am passionate about extracting actionable intelligence from raw data through advanced statistical analysis, predictive modeling, and deep learning. From exploratory data analysis and feature engineering to deploying robust ML pipelines, I thrive on solving complex problems by uncovering hidden patterns and building intelligent, data-driven solutions.",
  location: "Chandigarh, India",
  availability: "Available for freelance work",
  email: "heykartik9@gmail.com",
  github: "https://github.com/Kartik-Kumar9",
  linkedin: "https://www.linkedin.com/in/kartik-kumar-89a19a3a7/",
  resumeFile: "/Kartik_2337809.pdf",
  photo: "/profilepic.jpeg",   // drop photo in public/ — served at root
  heroImages: [                // images that cycle in the home section circle
    "hero_images/1.gif",
    "hero_images/2.gif",
    "hero_images/3.gif",
    "hero_images/4.gif"
  ],
  coreCompetencies: [
    { title: "Machine Learning", desc: "Engineering scalable predictive models and implementing data pipelines." },
    { title: "Data Analysis", desc: "Transforming complex datasets into actionable strategic insights." },
    { title: "Backend Systems", desc: "Building robust architectures and efficient REST APIs." }
  ],
  currentlyLearning: ["FastAPI", "Generative AI", "Cloud Architecture"],
};

// ============================================================
export const education = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    specialization: "Specialization: Data Science",
    institution: "Chandigarh Group of Colleges, Landran",
    duration: "2023 – 2027",
    score: "7.91 CGPA",
  },
  {
    degree: "Intermediate (CBSE)",
    specialization: "",
    institution: "Government Model Senior Secondary School, Sector 16, Chandigarh",
    duration: "2022 – 2023",
    score: "91.2%",
  },
  {
    degree: "Matriculation (CBSE)",
    specialization: "",
    institution: "KBDAV Senior Secondary Public School, Sector 7B, Chandigarh",
    duration: "2020 – 2021",
    score: "95%",
  },
];

// ============================================================
export const stats = [
  { value: "7.91", label: "CGPA" },
  { value: "3+", label: "Projects Built" },
  { value: "3+", label: "Certifications" },
  { value: "95%", label: "Matric Score" },
];

// ============================================================
export const projects = [
  {
    title: "Customer Churn Prediction System",
    description:
      "Built a machine learning model to predict customer churn using behavioral and financial features like age, account balance, and transaction activity. Developed a prediction pipeline to analyze new customer data and estimate churn risk to support customer retention strategies.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Kartik-Kumar9/Customer-Churn-Bank",
    live: "https://churnsight.onrender.com/",
    image: "/churn2.png",
    imageCover: "/churn1.png",
    imageAlt: "Customer Churn Prediction System preview",
  },
  {
    title: "Handwritten Digit Recognizer",
    description:
      "Built a Convolutional Neural Network to recognize handwritten digits using the MNIST and EMNIST datasets. Applied image preprocessing techniques such as grayscale conversion, normalization, and orientation correction, and integrated the model with a GUI for end-to-end digit prediction.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Pillow", "CNN"],
    github: "https://github.com/Kartik-Kumar9/Handwritten-Digit-Recognizer-",
    live: null,
    image: "/hdr2.png",
    imageCover: "/hdr1.png",
    imageAlt: "Handwritten Digit Recognizer preview",
  },

];

// ============================================================
export const skills = [
  {
    category: "Languages & Programming",
    icon: "</>",
    items: ["Python", "C", "C++", "JavaScript", "R", "SQL"],
  },
  {
    category: "ML / AI & Data Science",
    icon: "◈",
    items: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "NLTK", "OpenCV"],
  },
  {
    category: "Web & Databases",
    icon: "⬡",
    items: ["HTML", "CSS", "React", "MySQL", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    icon: "⚙",
    items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Tableau", "Power BI"],
  },
  {
    category: "Operating Systems",
    icon: "▣",
    items: ["Windows", "Linux"],
  },
];

// ============================================================
// NOTE: certifications are kept here for reference but the
// Certifications section has been removed from the site.
export const certifications = [
  { title: "Machine Learning I", issuer: "Columbia University (COLUMBIA+)", year: "2026" },
  { title: "AWS Academy Cloud Operations", issuer: "AWS Academy", year: "2025" },
  { title: "Machine Learning using Python", issuer: "TechLive", year: "2025" },
];

export const achievements = [
  "Smart India Hackathon Contender [2023] [2024]",
  "Participation in National Voter's Day [2024] and National Science Day [2024] Poster Making Competitions",
];
