import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Manjunatha",
  lastName: "R",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/Manja.jpeg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada", "Hindi", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally develop a web application, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Manjunath-07-2505",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/manjunatha-r-1943612a2/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:manja.r2505@gmail.com",
  },
];


const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Manjunatha R",
  subline: (
    <>
      A Full Stack Developer builds complete web applications using Java for backend development and modern frontend technologies like HTML, CSS, JavaScript, and React.
      They design and develop server-side logic, APIs, and user interfaces to ensure smooth end-to-end functionality.
      They manage data storage and retrieval using MySQL, ensuring efficient and secure database operations
    </>
  ),
};

const about = {
  label: "About",
  title: "See More About me",
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  resume: {
    display: true,
    link: "/Manjunatharesume_R.pdf",
    text: "Download Resume",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dedicated and results-driven Full Stack Developer with hands-on experience in Java, Spring Boot, REST APIs, MySQL and frontend technologies. Experienced in building secure full-stack applications using JWT authentication, Spring Boot and React.js. Strong knowledge of OOPs, JDBC, Hibernate, and Git with internship experience in full stack and AI/ML development.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Project",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Government Engineering College - Karwar",
        description: <>B.E in Computer Science | CGPA: 7.8 | 2025</>,
      },
      {
        name: "Kampalaranga PU College - Chitradurga",
        description: <>XII (Karnataka State Board) | 81.33% | 2021</>,
      },
      {
        name: "Government High School Fort - Chitradurga",
        description: <>X (Karnataka State Board) | 82.42% | 2019</>,
      },
    ],
  },
  internships: {
    display: true,
    title: "Experience",
    companies: [
      {
        name: "Full Stack Developer | KodNest",
        description: <>June 2025 – Apr 2026. Worked on developing and integrating full-stack applications using frontend, backend, and database technologies. Gained hands-on experience in building scalable features, API development, and end-to-end application workflows.</>,
      },
      {
        name: "Data Science Intern | Compsoft, Bengaluru",
        description: <>Mar 2024 – Jun 2025. Trained on Python, SQL, Power BI, and machine learning with real-time project applications.</>,
      },
      {
        name: "AI/ML Intern | AiRobosoft, Bengaluru",
        description: <>Oct 2023 – Nov 2023. Enhanced Python-based computer vision and ML models on 5,000+ images, improving object detection accuracy by 35% across real-time applications.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        icon: "code",
        list: [
          { name: "React.js", percent: 90 },
          { name: "JavaScript (ES6+)", percent: 88 },
          { name: "HTML5", percent: 95 },
          { name: "CSS3 (Flexbox, Grid)", percent: 92 },
        ],
      },
      {
        title: "Backend Development",
        icon: "database",
        list: [
          { name: "Java", percent: 80 },
          { name: "Spring Boot", percent: 85 },
          { name: "REST APIs", percent: 90 },
          { name: "Hibernate", percent: 80 },
        ],
      },
      {
        title: "Database Management",
        icon: "layers",
        list: [
          { name: "MySQL", percent: 80 },
          { name: "SQL Queries", percent: 78 },
          { name: "MongoDB (Basic)", percent: 70 },
          { name: "Database Design", percent: 65 },
        ],
      },
      {
        title: "Full Stack Integration",
        icon: "share",
        list: [
          { name: "JWT Authentication", percent: 85 },
          { name: "MVC Architecture", percent: 80 },
          { name: "Frontend + Backend Integration", percent: 85 },
          { name: "API Documentation", percent: 75 },
        ],
      },
      {
        title: "Tools & Platforms",
        icon: "terminal",
        list: [
          { name: "Git & GitHub", percent: 85 },
          { name: "VS Code", percent: 90 },
          { name: "Postman", percent: 80 },
          { name: "Linux Basics", percent: 60 },
        ],
      },
    ],
  },

  certifications: {
    display: true,
    title: "Certifications",
    list: [
      {
        name: "Full Stack Developer",
        description: <>KodNest, Bengaluru | Jan 2025</>,
      },
      {
        name: "Data Science Intern",
        description: <>Compsoft, Bengaluru | July 2025</>,
      },
      {
        name: "Java Spring Boot",
        description: <>Infosys, Bengaluru | Apr 2023</>,
      },
      {
        name: "Artificial Intelligence and Machine Learning",
        description: <>AiRobosoft, Bengaluru | Nov 2023</>,
      },
    ],
  },
};
const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};
const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/kodnest-certificate.png",
      alt: "KodNest Full Stack Development Certificate",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i5.png",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/i6.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i7.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/i8.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/s1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/s2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/s3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const contact = {
  label: "Contact",
  title: "Get In Touch",
  description: "Ready to collaborate? Let's build something amazing together.",
  info: {
    email: "manja.r2505@gmail.com",
    phone: "+91 9036344899",
    linkedin: "linkedin.com/in/manjunatha-r-1943612a2/",
    location: "Bangalore, India",
  },
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };