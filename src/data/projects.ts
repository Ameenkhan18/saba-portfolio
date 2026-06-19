export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "online-voting-system",

    title: "Online Voting System",

    description:
      "Developed a secure online voting platform with authentication, role-based access control, vote validation and real-time result handling. Built scalable backend logic and optimized workflows using modular architecture principles.",

    tags: [
      "Python",
      "Flask",
      "SQL",
      "Authentication",
      "REST API",
      "Backend",
    ],

    github:
      "https://github.com/Ameenkhan18/online-voting-system",

    demo:
      "https://online-voting-system-production-269e.up.railway.app/login",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-violet-500/30 via-fuchsia-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/48/f5/4e/48f54efd4f42259a382551eb4353d0fc.jpg",
    ],
  },

  {
    id: "arrhythmia-classification",

    title: "Arrhythmia ECG Classification",

    description:
      "Built a machine learning pipeline to classify cardiac arrhythmias using ECG datasets. Applied preprocessing, exploratory data analysis, feature engineering and predictive modeling to improve classification accuracy and healthcare insights.",

    tags: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Scikit-learn",
      "Data Analysis",
      "Healthcare AI",
    ],

    github:
      "https://github.com/Ameenkhan18/Classification-of-Arrhythmia-ECG",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-cyan-500/30 via-blue-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/1200x/3a/61/fb/3a61fb3c32ea4667641bdb218df0e3a1.jpg",
    ],
  },

  {
    id: "permission-scanner",

    title: "Permission Scanner",

    description:
      "Developed a full-stack application for permission analysis and secure data handling with responsive UI components, API integrations and scalable backend architecture for smooth real-time workflows.",

    tags: [
      "React",
      "Node.js",
      "API Integration",
      "Full Stack",
      "Authentication",
      "MongoDB",
    ],

    github:
      "https://github.com/Ameenkhan18/app",

    featured: true,

    deviceType: "mobile",

    bgColor:
      "from-emerald-500/30 via-teal-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/736x/74/8a/14/748a14384a92263c7135a7398c76fc25.jpg",
      "https://i.pinimg.com/1200x/f1/ac/84/f1ac84056426e23988f00604ebee89ce.jpg",
      "/projects/permission-3.png",
    ],
  },

  {
    id: "movie-recommendation-system",

    title: "Movie Recommendation System",

    description:
      "Created a machine learning-based recommendation engine using content-based filtering and cosine similarity algorithms. Integrated interactive search and personalized recommendations with responsive deployment using Streamlit.",

    tags: [
      "Python",
      "Streamlit",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Recommendation System",
    ],

    github:
      "https://github.com/Ameenkhan18/movie-recommendation",

    featured: true,

    deviceType: "desktop",

    bgColor:
      "from-pink-500/30 via-rose-500/20 to-black",

    screenshots: [
      "https://i.pinimg.com/236x/d4/6b/42/d46b4289ff825958755372a7e57b993c.jpg",
    ],
  },
];
