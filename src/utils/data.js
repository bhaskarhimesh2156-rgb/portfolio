export const PROFILE = {
  name: "MALLURI BHASKAR HIMESH",
  dob: "2006-05-21",
  gender: "Male",
  location: "Bhimavaram, Andhra Pradesh, India",
  status: ["EEE Student ", "VISHNU INSTITUTE OF TECHNOLOGY"],
  email: "bhaskarhimesh2156@gmail.com",
  phone: "+91-6304048505",
  linkedin: "https://www.linkedin.com/in/bhaskar-himesh-242738342",
  github: "https://github.com/bhaskarhimesh2156-rgb",
  resume: "/resume.pdf",
};

export const PROJECTS = [
  {
    id: 1,
    title: "BLDC Motor Fault Prediction",
    subtitle: "using Random Forest",
    description: "ML model detecting Normal Condition, Single Winding Fault, Double Winding Fault, and Bearing Fault in BLDC motors with 72%+ improved prediction accuracy.",
    tech: ["Python", "Random Forest", "LSTM", "Scikit-Learn", "Pandas"],
    features: ["Dataset Analysis", "Fault Prediction", "Interactive Dashboard", "Visualization Graphs", "Real-time Anomaly Detection"],
    category: "ML",
  },
  {
    id: 2,
    title: "AI-Powered ATS Resume Optimizer",
    subtitle: "LLM-Based Semantic Analysis",
    description: "LLM-based ATS evaluator using Gemini API for semantic resume-JD analysis. Improved candidate match accuracy by 65%; NLP keyword extraction boosted shortlisting scores by 50%.",
    tech: ["Python", "Gemini API", "NLP", "RAG", "LLM"],
    features: ["Semantic Analysis", "Keyword Extraction", "Score Boosting", "JD Matching"],
    github: "https://github.com/bhaskarhimesh2156-rgb/ai-ats",
    category: "AI",
  },
  {
    id: 3,
    title: "Generative AI Chatbot",
    subtitle: "Context-Aware Conversational AI",
    description: "Context-aware chatbot with advanced prompt engineering achieving 80%+ context retention in multi-turn conversations. Reduced API response latency by 35% via optimized call batching.",
    tech: ["Python", "Gemini API", "Prompt Engineering", "NLP"],
    features: ["Multi-turn Context", "Latency Optimization", "Call Batching", "Advanced Prompting"],
    github: "https://github.com/bhaskarhimesh2156-rgb/personal-chatbot",
    category: "AI",
  },
  {
    id: 4,
    title: "Battery Management System",
    subtitle: "BMS Analysis & Monitoring",
    description: "Lithium-ion battery health monitoring system automating real-time performance graphing. Reduced manual analysis time by 70%; analyzed SOC, SOH, and thermal data ensuring 100% safety compliance.",
    tech: ["Python", "Pandas", "Power Electronics", "Data Analysis"],
    features: ["SOC Monitoring", "SOH Analysis", "Thermal Management", "Safety Compliance", "Real-time Graphing"],
    github: "https://github.com/bhaskarhimesh2156-rgb/Battery-Management-System",
    category: "EE",
  },
  {
    id: 5,
    title: "Automatic Fish Feeder",
    subtitle: "IoT-Based Smart System",
    description: "ESP32-based IoT feeding system with Blynk remote scheduling. Reduced manual intervention by 90% with 99% uptime reliability over a 30-day trial with real-time alert notifications.",
    tech: ["Arduino", "ESP32", "Blynk", "Embedded C", "IoT"],
    features: ["Remote Scheduling", "Real-time Alerts", "99% Uptime", "Smart Automation"],
    category: "IoT",
  },
];

export const SKILLS = {
  "Programming": [
    { name: "Python", level: 90 },
    { name: "C", level: 75 },
    { name: "Java", level: 65 },
  ],
  "AI/ML & Data": [
    { name: "Machine Learning", level: 85 },
    { name: "LLMs & RAG", level: 80 },
    { name: "Prompt Engineering", level: 85 },
    { name: "Scikit-Learn", level: 80 },
    { name: "Data Analysis", level: 85 },
    { name: "Roboflow", level: 65 },
  ],
  "Engineering & Hardware": [
    { name: "MATLAB", level: 70 },
    { name: "Power Electronics", level: 75 },
    { name: "ESP32/Arduino", level: 80 },
    { name: "VLSI/Verilog", level: 65 },
    { name: "BMS", level: 75 },
  ],
  "Web Development": [
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
  ],
  "Tools": [
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Gemini API", level: 85 },
    { name: "Tableau", level: 75 },
  ],
};

export const CERTIFICATIONS = [
  {
    name: "NPTEL - IoT Elite Silver Certificate",
    org: "NPTEL / IIT Kharagpur",
    date: "Jan-Apr 2026",
    file: "nptel-iot.jpeg",
  },
  {
    name: "Graph Theory & Advanced Problem Solving",
    org: "AlgoUniversity",
    date: "Mar 2026",
    file: "graphtheory-algouniversity.jpeg",
  },
  {
    name: "Data Analytics Job Simulation",
    org: "Deloitte / Forage",
    date: "Jul 2025",
    file: "deloitte-data-analytics.pdf",
  },
  {
    name: "Digital Electronics & VLSI Design",
    org: "Codec Technologies / AICTE",
    date: "Jun 2025",
    file: "vlsi-internship.jpeg",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech - Electrical and Electronics Engineering",
    institution: "Vishnu Institute of Technology, Bhimavaram",
    period: "Aug 2023 - Present",
    score: "CGPA: 8.1/10",
    level: "undergraduate",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Aditya Junior College, Bhimavaram",
    period: "May 2023",
    score: "94.1%",
    level: "intermediate",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "St. Ann's E.M. High School, Bhimavaram",
    period: "Apr 2021",
    score: "99.1%",
    level: "schooling",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Research Intern",
    company: "SRM Institute of Science and Technology",
    location: "Kattankulathur, Chennai",
    period: "May 2026 - Present",
    current: true,
    highlights: [
      "Developing AI-driven Predictive Maintenance systems using Random Forest & LSTM — ~72% improved accuracy",
      "Engineered feature engineering pipelines on multivariate time-series sensor data — 40% faster training",
      "Anomaly detection modules with 85%+ precision in early fault identification",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Deloitte",
    location: "Virtual/Online",
    period: "Jul 2025",
    current: false,
    highlights: [
      "Analyzed large-scale datasets using Python (Pandas, NumPy) and SQL",
      "Designed 15+ Tableau dashboards — reduced reporting effort by 60%",
      "Automated data pipelines — improved processing efficiency by 45%",
    ],
  },
  {
    role: "Digital Electronics & VLSI Design Intern",
    company: "Codec Technologies",
    location: "Online",
    period: "Jun 2025",
    current: false,
    highlights: [
      "5+ circuit simulations achieving 95% functional accuracy",
      "HDL (Verilog/VHDL) concepts and FPGA workflows",
    ],
  },
];