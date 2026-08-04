export interface Project {
  id: string;
  number: string;
  title: string;
  highlightTitle: string;
  description: string;
  tags: string[];
  isDark: boolean;
  gridSpan: string; // Tailored Bento grid spanning
  caseStudy: {
    overview: string;
    techDetails: string[];
    githubUrl: string;
    liveUrl?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "landslide-prediction",
    number: "01",
    title: "FLOOD & LANDSLIDE",
    highlightTitle: "PREDICTION SYSTEM",
    description: "AI-powered early warning system using IoT telemetry and ML time-series models to predict environmental risks in real time.",
    tags: ["Python", "Machine Learning", "IoT", "Time Series"],
    isDark: true,
    gridSpan: "md:col-span-2",
    caseStudy: {
      overview: "Built a predictive pipeline ingesting live soil moisture and rain sensor telemetry, feeding a time-series ML regression model for early hazard alerts.",
      techDetails: ["Python & Pandas for data streaming", "Real-time IoT telemetry ingestion", "Scikit-Learn predictive modeling"],
      githubUrl: "https://github.com/sam27peter"
    }
  },
  {
    id: "hand-gesture",
    number: "02",
    title: "HAND GESTURE",
    highlightTitle: "RECOGNITION",
    description: "Real-time gesture recognition engine powered by computer vision and deep learning.",
    tags: ["Python", "CNN", "OpenCV", "TensorFlow"],
    isDark: false,
    gridSpan: "md:col-span-1",
    caseStudy: {
      overview: "Custom computer vision model analyzing keypoint skeletal structures using MediaPipe and classifying gesture sets for touchless interface control.",
      techDetails: ["Convolutional Neural Network (CNN)", "OpenCV real-time frame processing", "TensorFlow model deployment"],
      githubUrl: "https://github.com/sam27peter"
    }
  },
  {
    id: "sentiment-analysis",
    number: "03",
    title: "SENTIMENT",
    highlightTitle: "ANALYSIS ENGINE",
    description: "NLP classification tool analyzing text feedback and user intent with high accuracy.",
    tags: ["Python", "NLP", "Scikit-Learn"],
    isDark: false,
    gridSpan: "md:col-span-1",
    caseStudy: {
      overview: "Natural language classifier mapping multi-source feedback feeds to emotional polarities and intent metrics.",
      techDetails: ["TF-IDF Tokenization", "Naïve Bayes & Logistic Regression", "Clean NLP text pipelines"],
      githubUrl: "https://github.com/sam27peter"
    }
  },
  {
    id: "ev-range",
    number: "04",
    title: "EV RANGE",
    highlightTitle: "PREDICTOR",
    description: "Regression model predicting real-world electric vehicle range based on driving conditions.",
    tags: ["Python", "ML", "Regression", "Streamlit"],
    isDark: true,
    gridSpan: "md:col-span-2",
    caseStudy: {
      overview: "Interactive machine learning application factoring battery health, vehicle weight, and climate variables to accurately forecast true EV battery range.",
      techDetails: ["Streamlit UI integration", "Multivariate regression framework", "Pandas & NumPy data manipulation"],
      githubUrl: "https://github.com/sam27peter"
    }
  },
  {
    id: "fish-tank",
    number: "05",
    title: "FISH TANK",
    highlightTitle: "SIMULATOR",
    description: "Interactive simulation featuring hand tracking and AI aquatic entity behaviors.",
    tags: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    isDark: true,
    gridSpan: "md:col-span-2",
    caseStudy: {
      overview: "Interactive ecosystem simulation where rendered entities react dynamically to live user hand gestures captured via webcam.",
      techDetails: ["Pygame 60fps rendering engine", "MediaPipe skeletal landmark tracking", "Autonomous flocking steering algorithms"],
      githubUrl: "https://github.com/sam27peter"
    }
  },
  {
    id: "smart-surveillance",
    number: "06",
    title: "SMART SURVEILLANCE",
    highlightTitle: "DETECTOR",
    description: "Computer vision anomaly detection system for automated camera feeds.",
    tags: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    isDark: false,
    gridSpan: "md:col-span-1",
    caseStudy: {
      overview: "Automated video stream monitor leveraging YOLO object detection to flag unauthorized security entry and movement anomalies.",
      techDetails: ["YOLO real-time object identification", "OpenCV frame analysis", "Automated alert triggers"],
      githubUrl: "https://github.com/sam27peter"
    }
  }
];