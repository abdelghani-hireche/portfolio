// ---------------------------------------------------------------------------
// Central content file. Edit the values here to update the whole site.
// To add a real certificate/badge image: drop it in /public and set `image`
// to e.g. "./certs/deep-learning.png".
// ---------------------------------------------------------------------------

export const profile = {
  name: "Abdelghani Hireche",
  firstName: "Abdelghani",
  lastName: "HIRECHE",
  handle: "@Abdelghani_hr",
  role: "Software & AI Engineer ",
  quote:
    "A result of preparation, hard work, and learning from failure. There are no secrets to success.",
  // Rotating one-liners for the scrolling banner on the home page
  taglines: [
    "Turning complex problems into elegant solutions.",
    "Curious by nature, engineer by profession.",
    "From ideas to production, one problem at a time.",
    "Making software smarter, cleaner, and a little less boring.",
  ],
  photo: "",
  resumeUrl: "./resume.zip",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdelghani-hireche/",
    credly: "https://www.credly.com/users/abdelghani-hireche",
  },
};

export const about = {
  intro: [
    "Hello, my name is Abdelghani Hireche, a Software & AI Engineer based in Paris. I currently work as a Software Engineer at Engie, where I design and build scalable software systems across cloud, distributed, and data-driven environments, with a strong focus on clean architecture and maintainable engineering.",
    "Over the past few years, I have had the opportunity to work across different industries and technical environments, from railway and AI systems at SNCF Réseau to software engineering at Mozilla, academic research, and freelance development. These experiences have shaped a versatile engineering mindset, allowing me to work across the full software lifecycle, from architecture and backend development to frontend, cloud, and DevOps.",
    "I am particularly passionate about Artificial Intelligence, Generative AI, and emerging technologies. I enjoy exploring new ideas, solving complex problems, and turning them into reliable, production-ready solutions. I also value knowledge sharing and continuous learning, both as an engineer and as part of a team.",
  ],
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "Engie",
    status: "Full-time",
    period: "09/2025 — Present",
    location: "Paris, France",
    logo: "./companies/engie.webp",
    website: "https://www.engie.com",
    summary:
      "Working on software engineering, cloud, data processing, and distributed systems within an Agile environment. Contributing to the evolution of internal APIs and platforms, with a focus on scalable architectures, event-driven systems, data pipelines, and maintainable software design.",
    projects: [
      {
        title: "Common Data Hub (CDH) — Data Export & Processing",
        description:
          "Designed and implemented a data export pipeline to make Wattson Contract data available through the internal Common Data Hub (CDH), built around AWS S3 and Databricks.",
        responsibilities: [
          "Implemented an event-driven export mechanism for contracts and invoices, decoupling data export from the core application workflow.",
          "Developed a worker responsible for consuming business events and publishing the corresponding data to Azure Service Bus for downstream processing.",
          "Built Databricks jobs to clean, transform, and structure data through Bronze, Silver, and Gold (Medallion Architecture) layers before storing it in Unity Catalog.",
          "Contributed to a scalable data architecture providing consumers with governed access to business data through CDH instead of directly querying the transactional PostgreSQL database.",
        ],
        links: [
          {
            label: "Medallion Architecture",
            url: "https://www.databricks.com/glossary/medallion-architecture",
          },
          {
            label: "Event-Driven Architecture",
            url: "https://learn.microsoft.com/azure/architecture/guide/architecture-styles/event-driven",
          },
        ],
        technologies: [
          "Python 3.12",
          "Flask",
          "AWS S3",
          "AWS Athena",
          "Databricks",
          "Unity Catalog",
          "Azure Service Bus",
          "PostgreSQL",
        ],
      },
      {
        title: "Event-Driven Architecture between WOOT & BCV",
        description:
          "Redesigned the communication between the WOOT and BCV APIs by replacing synchronous HTTP-based exchanges with an asynchronous event-driven architecture using Azure Service Bus.",
        responsibilities: [
          "Designed the messaging architecture by studying message ordering, sessions, concurrency, retries, lock duration, and failure-handling strategies.",
          "Developed a dedicated worker to asynchronously consume and process business events from Azure Service Bus.",
          "Deployed multiple worker instances on Kubernetes to support parallel message processing and horizontal scalability.",
          "Implemented event-driven autoscaling with KEDA, allowing the number of workers to dynamically adapt to the message load.",
        ],
        links: [
          {
            label: "Azure Service Bus",
            url: "https://learn.microsoft.com/azure/service-bus-messaging/service-bus-messaging-overview",
          },
          {
            label: "KEDA Autoscaling",
            url: "https://keda.sh/docs/latest/concepts/",
          },
        ],
        technologies: [
          "Python 3.12",
          "FastAPI",
          "Azure Service Bus",
          "Kubernetes",
          "KEDA",
          "Rancher",
        ],
      },
      {
        title: "Risk Modeler & WOOT Feeder — API Architecture Refactoring",
        description:
          "Contributed to a major architectural refactoring of the Risk Modeler (RM) and WOOT Feeder APIs, moving from supplier-specific business logic toward a generic, configuration-driven architecture.",
        responsibilities: [
          "Analyzed the existing architecture and business use cases to identify supplier-specific logic and define the requirements for the new architecture.",
          "Contributed to the design and implementation of a Clean Architecture approach, improving separation of concerns, maintainability, and extensibility.",
          "Developed new backend use cases and event-driven flows covering key business operations such as contract signing, cancellation, point management, and order processing.",
          "Developed frontend interfaces for managing supplier configuration data, including auditing and monitoring capabilities, enabling new suppliers to be integrated primarily through database configuration rather than application code.",
        ],
        links: [
          {
            label: "Clean Architecture",
            url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
          },
        ],
        technologies: [
          "Python 3.12",
          "FastAPI",
          "Clean Architecture",
          "PostgreSQL",
          "SQLAlchemy",
          "Pydantic 2",
          "React",
          "Postman",
        ],
      },
      {
        title: "AI Knowledge Sharing & Technical Presentations",
        description:
          "Took the initiative to organize technical knowledge-sharing sessions around Artificial Intelligence and modern software engineering practices within the development team.",
        responsibilities: [
          "Prepared and presented technical sessions covering Machine Learning, Large Language Models, Retrieval-Augmented Generation (RAG), GitHub Copilot, and other AI-related concepts.",
          "Used practical examples and demonstrations to make complex AI concepts accessible to developers with different levels of expertise.",
          "Encouraged technical discussions and knowledge sharing within the team around the practical use of AI in software development.",
          "Strengthened communication and technical presentation skills by translating complex concepts into clear and structured explanations.",
        ],
        links: [
          {
            label: "Retrieval-Augmented Generation (RAG)",
            url: "https://arxiv.org/abs/2005.11401",
          },
        ],
        technologies: [
          "Machine Learning",
          "LLMs",
          "RAG",
          "Generative AI",
          "GitHub Copilot",
          "Python",
        ],
      },
    ],
  },
  {
    role: "AI Developer",
    company: "SNCF Réseau",
    status: "Apprenticeship",
    period: "09/2023 — 09/2025",
    location: "Paris, France",
    logo: "./companies/sncf.webp",
    website: "https://www.sncf-reseau.com",
    summary:
      "Working on cutting-edge AI and railway systems within the European Rail Traffic Management System (ERTMS), in an Agile environment.",
    projects: [
      {
        title: "Retrieval-Augmented Generation (RAG) for ETCS Specifications",
        description:
          "Implementing a Retrieval-Augmented Generation (RAG) solution using the European Train Control System (ETCS) specifications as source data. The goal is a question-and-answer solution powered by an LLM specifically trained on ETCS. Deployed as a Platform as a Service (PaaS) on Azure, in close collaboration with cloud and AI experts.",
        links: [
          { label: "GitHub repository", url: "#" },
          { label: "Architecture overview", url: "#" },
        ],
        technologies: [
          "Python",
          "ViteJS / React",
          "Azure",
          "Cosmos DB",
          "Mistral LLM",
          "Azure Document Intelligence",
          "Docker",
        ],
      },
      {
        title: "CI/CD Pipelines in a DevSecOps Environment",
        description:
          "Contributed to reliable CI/CD pipelines for development and production, following DevOps and DevSecOps best practices, and containerized/deployed applications with Docker.",
        responsibilities: [
          "Implemented robust CI/CD pipelines using Git, Jenkins, and Docker for dev and production environments.",
          "Containerized and deployed applications with Docker to support continuous integration and delivery.",
          "Contributed to technical architecture urbanization through documentation and DevSecOps compliance.",
          "Collaborated in a cross-functional Agile team using Scrum rituals, focusing on unit testing and code review.",
        ],
        technologies: [
          "Ansible",
          "Git",
          "Jenkins",
          "Docker",
          "Scrum",
          "GitLab CI",
          "AWS CodePipeline",
          "AWS CodeCommit",
        ],
      },
      {
        title: "Communication Frame Encoder/Decoder for Train-to-Track Data",
        description:
          "Developed a tool that encodes and decodes communication frames exchanged between on-board systems and trains, following the Subset 36 and Subset 26 specifications. Data is stored in trackside Eurobalises and retrieved by the train's sensors, with encryption applied throughout to secure the transmission.",
        responsibilities: [
          "Developed the encoding/decoding tool for secure Eurobalise-to-train communication.",
          "Collaborated with Hitachi for encoding validation and Alstom for secure decoding on the train.",
          "Wrote comprehensive tests and documentation.",
          "Delivered the tool in an Agile environment, from development through testing to production.",
        ],
        technologies: ["C++", "Python (Pytest, Pydoc)", "Git / GitLab"],
      },
      {
        title: "API for Automating System Model Generation",
        description:
          "Built a system based on the Capella modeling tool, using its Python API to automatically generate system models. Designed a database consolidating descriptions of systems and subsystems; the API retrieves data from it to generate graphical models with multiple variants for simulating system behavior. These models are delivered to industrial partners such as Siemens and Alstom (e.g. simulating the communication protocol between a train and the Radio Block Center).",
        technologies: [
          "Java",
          "Python",
          "Git / GitLab",
          "Capella",
          "MongoDB",
          "Docker",
        ],
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Mozilla",
    status: "Internship",
    period: "02/2023 — 08/2023",
    location: "Remote",
    logo: "./companies/mozilla.webp",
    website: "https://www.mozilla.org",
    projects: [
      {
        title: "Java Module for Bugzilla Integration",
        description:
          "Developed a Java module to integrate Bugzilla (primarily written in Perl) with third-party tools and Java services, enabling better interaction via APIs and automation for teams needing continuous integration or advanced bug tracking.",
        responsibilities: [
          "Designed and developed a Java module communicating with the Bugzilla API to streamline bug submission, retrieval, and management.",
          "Optimized API calls between Bugzilla and Java services to reduce latency and improve connection handling under high traffic.",
          "Improved team efficiency by automating bug-tracking workflows and integrating with Java-based pipelines.",
        ],
        technologies: ["Java", "Maven", "SonarQube", "Jenkins", "Git / GitLab"],
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "CFAO Technology & Energy",
    status: "Internship",
    period: "01/2022 — 06/2022",
    location: "Algiers, Algeria",
    logo: "./companies/cfao.webp",
    website: "https://www.cfaogroup.com",
    projects: [
      {
        title: "Training Management Tool for the Internal Training Center",
        description:
          "Developed a management tool for the company's internal training center to streamline the organization of sessions, offer a course catalog, and provide a dashboard for statistical analysis via KPIs.",
        responsibilities: [
          "Developed a training management system to schedule sessions, manage registrations, and provide a course catalog.",
          "Created a dashboard for KPI analysis to visualize training statistics and support data-driven decisions.",
          "Collaborated in an Agile environment with software and database architects for seamless integration.",
          "Implemented both frontend and backend, ensuring responsiveness and performance.",
        ],
        technologies: [
          "Django (Python)",
          "HTML",
          "CSS",
          "jQuery",
          "JavaScript",
          "PostgreSQL",
          "Git / GitLab",
          "Figma",
        ],
      },
    ],
  },
];

export const stats = [
  { value: "+3", label: "Years professional experience" },
  { value: "+20", label: "professional certifications" },
  { value: "Bac+5", label: "Master 2 degree" },
];

export const education = [
  {
    school: "Université Paris Cité",
    location: "Paris, France",
    period: "2023 — 2025",
    logo: "./schools/paris-cite.webp",
    website: "https://u-paris.fr/",
    programs: [
      {
        title: "2nd Year Master's Degree in Computer Science Engineering",
        period: "2024 — 2025",
        courses: [
          "Distributed Algorithms: Design, Analysis, and Applications",
          "Database System Architectures: Design, Implementation, and Optimization",
          "Large Interaction Networks: Analysis, Dynamics, and Applications",
          "Embedded Computing: Systems, Design, and Applications",
          "Comparative Programming: Language Features, Paradigms, and Implementations",
          "High-Performance Computing: Techniques, Architectures, and Applications",
          "Scientific English",
          "Hackathon 01",
          "Hackathon 02",
        ],
      },
      {
        title: "1st Year Master's Degree in Computer Software Engineering",
        period: "2023 — 2024",
        courses: [
          "Advanced Algorithm Design and Analysis",
          "Network Protocols: Principles, Design, and Implementation",
          "Advanced Object-Oriented Programming Languages: Concepts and Techniques",
          "Mobile Component Programming: Design, Development, and Integration",
          "Advanced Database Systems: Concepts, Design, and Optimization",
          "Advanced Software Engineering: Principles, Practices, and Methodologies",
          "Information Security: Principles, Practices, and Risk Management",
          "Scientific English for Computer Science",
        ],
      },
    ],
  },
  {
    school: "Université Paris-Est Créteil (UPEC)",
    location: "Créteil, France",
    period: "2022 — 2023",
    logo: "./schools/upec.webp",
    website: "https://www.u-pec.fr/",
    programs: [
      {
        title: "3rd Year Bachelor's Degree in Computer Science",
        period: "2022 — 2023",
        courses: [
          "Artificial Intelligence and Big Data: Techniques, Applications, and Ethical Considerations",
          "Systems and Tools: Design, Integration, and Applications",
          "Concurrent Programming: Concepts, Techniques, and Multithreading",
          "Mobile Application Development: Design, Frameworks, and Deployment",
          "Database Design: Modeling, Implementation, and Management",
          "Object-Oriented Design: Principles, Patterns, and Best Practices",
          "Scientific English for Computer Science",
          "Professional Integration: Knowledge, Skills, and Career Development",
          "Algorithms and Complexity: Design, Analysis, and Applications",
          "Algebraic Grammars: Theory, Structures, and Applications",
        ],
      },
    ],
  },
  {
    school: "University of Science and Technology (USTHB)",
    location: "Algiers, Algeria",
    period: "2019 — 2022",
    logo: "./schools/usthb.webp",
    website: "https://www.usthb.dz/",
    programs: [
      {
        title:
          "3rd Year Bachelor's — Information Systems and Software Engineering",
        period: "2021 — 2022",
        courses: [
          "Database Systems and Data Management Techniques 2",
          "Software Engineering and Application Development 2",
          "Advanced Information Systems and Data Management 2",
          "Computer Networks and Communication Systems 1",
          "Introduction to Compiler Design and Implementation Techniques",
          "Operating Systems and System Resource Management 2",
          "English",
          "Rapid Application Development Tools and Methodologies",
          "Advanced Information Systems and Data Management 3",
          "Computer Networks and Communication Systems 2",
        ],
      },
      {
        title:
          "2nd Year Bachelor's — Information Systems and Software Engineering",
        period: "2020 — 2021",
        courses: [
          "Introduction to Information Systems and Business Processes",
          "Fundamentals of Computer Architecture and Hardware Design",
          "Algorithms and Data Structures: Design and Analysis",
          "Numerical Analysis and Computational Methods",
          "Mathematical Logic and Formal Reasoning",
          "Probability Theory and Statistical Methods",
          "Object-Oriented Programming Principles and Design",
          "English",
          "Graph Theory: Concepts, Algorithms, and Applications",
          "Web Programming: Technologies, Frameworks, and Development Practices",
        ],
      },
      {
        title: "1st Year Bachelor's — Computer Science and Mathematics",
        period: "2019 — 2020",
        courses: [
          "Algebra: Foundations, Techniques, and Applications",
          "Mathematical Analysis: Theory and Applications",
          "Machine Structures: Architecture and Organization",
          "Algorithm Design and Analysis: Techniques and Strategies",
          "Physics: Principles of Mechanics and Dynamics",
          "History of Programming Languages: Evolution and Impact on Computing",
          "English",
          "Probability and Statistical Methods",
        ],
      },
    ],
  },
];

// Google Developer profile URL — replace "#" with the real URL when available.
export const googleDeveloperProfileUrl =
  "https://me.developers.google.com/u/102179777930627385462";

// Community involvement, learning programs, and technical contributions.
export const community = [
  {
    title: "Google Cloud Arcade Facilitator Champion",
    org: "Google Cloud",
    accent: "#4285F4",
    // Add the logo to /public/community/google-cloud.webp
    logo: "./community/google-cloud.webp",
    website: "https://cloud.google.com",
    description:
      "Selected to participate in the Google Cloud Arcade program, a hands-on learning initiative focused on Google Cloud technologies. Successfully completed the program's challenges and earned the Google Cloud Arcade Facilitator Champion recognition. This experience strengthened my practical knowledge of cloud infrastructure, data, AI, and modern Google Cloud technologies through hands-on challenges.",
    tags: ["Google Cloud", "Cloud", "Data", "AI"],
    resources: [
      {
        label: "View Google Cloud Badges",
        url: "https://www.skills.google/public_profiles/1653eb60-68d7-4d5a-812a-2c94c6c73b33",
      },
      {
        label: "Google Developer Profile",
        url: googleDeveloperProfileUrl,
      },
    ],
  },
  {
    title: "AWS Emerging Talent Community Member",
    org: "Amazon Web Services",
    accent: "#FF9900",
    logo: "./community/aws.webp",
    website: "https://aws.amazon.com/es/",
    description:
      "Member of the AWS Emerging Talent Community, a community focused on connecting and supporting emerging cloud and technology professionals. Through the community, I continue to expand my knowledge of AWS technologies, cloud architecture, and AI while engaging with learning opportunities and the broader AWS ecosystem.",
    tags: ["AWS", "Cloud Architecture", "AI", "Community"],
    resources: [
      {
        label: "View My Skill Builder Profile",
        url: "https://skillsprofile.skillbuilder.aws/user/abdelghani/certification-badges",
      },
    ],
  },
  {
    title: "NASA Open Science Program — Member & Contributor",
    org: "NASA",
    accent: "#0B3D91",
    logo: "./community/nasa.webp",
    website: "https://www.nasa.gov/es/",
    description:
      "Participating in NASA's Open Science community, supporting the principles of open, collaborative, and accessible scientific research. This experience reflects my interest in applying software engineering and modern technologies beyond traditional software development, while contributing to a community focused on making scientific knowledge more open and reproducible.",
    tags: ["Open Science", "Research", "Collaboration"],
    resources: [
      {
        label: "NASA Open Science 101",
        url: "https://www.credly.com/badges/4d8b4f3d-01fd-4512-bc3c-c5fbac84d26d/public_url",
      },
      {
        label: "NASA Open Science Essentials",
        url: "https://www.credly.com/badges/74ca324c-6969-443d-aced-7e4bcdc312a5/public_url",
      },
    ],
  },
];

// image: optional path to a real certificate scan in /public
export const certificates = [
  {
    title: "Kubernetes Engine",
    issuer: "Google Cloud",
    accent: "#d97757",
    image: "./certs/kubernetes-engine.webp",
    link: "https://coursera.org/share/d4e1591be212b1ffb31b39cc97c50e62",
  },
  {
    title: "Deep Learning",
    issuer: "DeepLearning.AI",
    accent: "#d97757",
    image: "./certs/deep-learning.webp",
    link: "https://coursera.org/share/58e6f6ea48599d0c3a351884868a224a",
  },
  {
    title: "Machine Learning",
    issuer: "DeepLearning.AI",
    accent: "#d97757",
    image: "./certs/machine-learning.webp",
    link: "https://coursera.org/share/4d3615b9e07fd3c0cfcccd6f77281f3c",
  },
  {
    title: "Gen AI with LLMs",
    issuer: "DeepLearning.AI",
    accent: "#d97757",
    image: "./certs/gen-ai-with-llms.webp",
    link: "https://coursera.org/share/62865cec746f7f71e55baeb46a0b444c",
  },
  {
    title: "Transformer Models",
    issuer: "DeepLearning.AI",
    accent: "#d97757",
    image: "./certs/transformer-models.webp",
    link: "https://coursera.org/share/8cf9a2d2162902ed53a1262ce0c7c916",
  },
  {
    title: "NLP",
    issuer: "Google Cloud",
    accent: "#d97757",
    image: "./certs/nlp.webp",
    link: "https://coursera.org/share/c752ef01a29ad2bfb19bd261a3a0c876",
  },
  {
    title: "Agile Scrum",
    issuer: "Google",
    accent: "#d97757",
    image: "./certs/agile-scrum.webp",
    link: "https://coursera.org/share/ae631e6acd16f591ac6ea90bc0fe7156",
  },
  {
    title: "DevOps on AWS",
    issuer: "AWS Training & Certification",
    accent: "#d97757",
    image: "./certs/devops-on-aws.webp",
    link: "https://coursera.org/share/25e6f172011f33016d1ad00b733d2b73",
  },
  {
    title: "Big Data with Spark",
    issuer: "IBM",
    accent: "#d97757",
    image: "./certs/big-data-with-spark.webp",
    link: "https://coursera.org/share/11b947b8d99cbe699c0a9eaad6c8a31f",
  },
  {
    title: "Jira",
    issuer: "Atlassian",
    accent: "#d97757",
    image: "./certs/jira.webp",
    link: "https://coursera.org/share/b3c646d6ec092282ff23442be710d8a7",
  },
  {
    title: "Data Analytics",
    issuer: "IBM",
    accent: "#d97757",
    image: "./certs/data-analytics.webp",
    link: "https://coursera.org/share/a1f356a7407d17c1c3cc553adf02eb52",
  },
  {
    title: "The Right Role",
    issuer: "University of California",
    accent: "#d97757",
    image: "./certs/the-right-role.webp",
    link: "https://coursera.org/share/a08213e14b2d6d28986ead3b157d312c",
  },
];

// Verified skill badges. Drop the compressed .webp images in /public/badges
// using the file names referenced below, and each card links to its Credly page.
export const badges = [
  {
    title: "AWS Agentic AI",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-agentic-ai.webp",
    link: "https://www.credly.com/badges/b60352da-e25d-4418-9402-39b55e1256d1/public_url",
  },
  {
    title: "AWS Serverless",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-serverless.webp",
    link: "https://www.credly.com/badges/9309d9c4-11b1-422f-8e89-d1fbefe3c03a/public_url",
  },
  {
    title: "AWS Application Networking",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-application-networking.webp",
    link: "https://www.credly.com/badges/5aa7b88f-a47b-4ba4-9142-c1f7e8d841b3/public_url",
  },
  {
    title: "AWS Incident Response",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-incident-response.webp",
    link: "https://www.credly.com/badges/1900cc50-efca-4fda-bbfb-4bb1b97ae2ef/public_url",
  },
  {
    title: "Chainguard AI/ML Guardian",
    issuer: "Chainguard",
    accent: "#d97757",
    image: "./badges/chainguard-ai-ml-guardian.webp",
    link: "https://www.credly.com/badges/420b4e64-a9d9-4acc-bacf-0d1c83b072aa/public_url",
  },
  {
    title: "Databriks Fundamentals",
    issuer: "Databriks",
    accent: "#d97757",
    image: "./badges/databriks.webp",
    link: "https://credentials.databricks.com/1c3e83c0-77e7-49b2-a5f4-8d74a58aa869#acc.DPpBWuXx",
  },
  {
    title: "Well-Architected Proficient",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-well-architected-proficient.webp",
    link: "https://www.credly.com/badges/21280d0b-ab08-401b-848d-c091e8d5b7e2/public_url",
  },
  {
    title: "AWS Generative AI Practitioner",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-generative-ai-practitioner.webp",
    link: "https://www.credly.com/badges/ceb66db8-708a-499f-9a50-50a98fcd7525/public_url",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/aws-cloud-practitioner.webp",
    link: "https://www.credly.com/badges/dcc990f8-9560-487e-8901-9e0028c0802b/public_url",
  },
  {
    title: "AI for Product Management",
    issuer: "Pendo",
    accent: "#d97757",
    image: "./badges/ai-for-product-management.webp",
    link: "https://www.credly.com/badges/1324eded-ef45-45b2-bac7-1c3dd75c1c03/public_url",
  },
  {
    title: "Chainguard Vulnslayer",
    issuer: "Chainguard",
    accent: "#d97757",
    image: "./badges/chainguard-vulnslayer.webp",
    link: "https://www.credly.com/badges/37c9c9f9-caa1-4d83-b05e-c1f93e5250f1/public_url",
  },
  {
    title: "Amazon EKS",
    issuer: "Amazon Web Services",
    accent: "#d97757",
    image: "./badges/amazon-eks.webp",
    link: "https://www.credly.com/badges/7fc1ff91-42a7-4c7d-845b-01886571e40a/public_url",
  },
];

export const contact = {
  email: "h.ghanou2002@gmail.com",
  phone: "+33 7 58 97 08 67",
  location: ["Paris, France"],
};

export const testimonials = [
  {
    author: "Fabien Demazeau",
    role: "Senior Developer",
    quote:
      "Excellent niveau technique, en particulier sur Python, avec de solides connaissances en Intelligence Artificielle — un véritable atout pour l’équipe — ainsi que sur les sujets DevOps, Cloud et Kubernetes. Attentif aux bonnes pratiques, il produit un code propre, maintenable et de qualité.",
    highlights: [
      {
        label: "Hard skill",
        text: "Conception et mise en œuvre d’une Clean Architecture lors du refactoring des projets RM et WOOT, parfaitement intégrée au projet.",
      },
      {
        label: "Soft skill",
        text: "Coordination des différents intervenants au démarrage du refactoring : animation des réunions de spécification et facilitation des échanges techniques entre équipes.",
      },
    ],
    strengths: [
      "Niveau technique (Python, IA, DevOps, Cloud, Kubernetes)",
      "Qualité de code propre et maintenable",
      "Collaboration, disponibilité et communication claire",
    ],
  },
];
