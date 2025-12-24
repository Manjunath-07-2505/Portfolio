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
  languages: ["English", "Kannada" ,"Hindi","Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
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
    name: "X",
    icon: "x",
    link: "",
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
     A passionate Software Engineer and MERN Stack Developer crafting fast, scalable, and user-friendly web applications. I specialize in JavaScript, React, Node.js, and Next.js, blending creativity with clean code. With a strong grip on problem-solving, APIs, and databases, I'm always eager to learn and build impactful digital experiences. Let’s create something amazing together.
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
    link: "/Manjunatha R...pdf",
    text: "Download Resume",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      <h2>Hi, I'm Manjunatha R — a passionate Full Stack Developer!</h2>

Hi, I'm — A Java Full Stack Developer builds complete web applications by working on both front-end and back-end using Java-based technologies.They create responsive user interfaces using HTML, CSS, JavaScript
 and frameworks like React and develop server-side logic using Java,Spring Boot, and Hibernate.They handle authentication, business logic, APIs, and database management using MySQL and MongoDB.

I enjoy solving problems, designing clean user interfaces, and developing scalable backend systems.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
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
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kampalaranga PU College - Chitradurga.",
        description: <>Completed Higher Secondary Education (12th Standard).</>,
      },
      {
        name: "Government Engineering College - Karwar.",
        description: <>I have recently completed my Bachelor's degree in Computer Science and Engineering.</>,
      },
    ],
  },
  internships: {
    display: true, // set to false to hide this section
    title: "Internships",
    companies: [
      {
        name: "Full Stack Developer",
        description: <>A Full Stack Developer Intern supports the development of end-to-end web applications using Java, Spring Boot, HTML, CSS, JavaScript, and databases such as MySQL. They assist in building REST APIs, implementing business logic, and creating responsive front-end components and also completed my internshps AI/ML inInventeron Technology and Data Science inCompsoft Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Java, JavaScript</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Web Development",
        description: <>HTML,CSS,JavaScript,React</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Java Framework",
        description: <>JDBC,Servlet,Hibernet,spring and Springboot</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Tools & Platforms",
        description: <>GitHub,MongoDB Atlas,VS Code,Leetcode,HackerRank</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Databases",
        description: <>MySQL,MongoDB</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };