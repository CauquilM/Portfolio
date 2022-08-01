/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mathieu CAUQUIL",
  description:
    "Un jeune développeur à la recherche de nouveaux projets passionants.",
  og: {
    title: "Mathieu CAUQUIL Portfolio",
    type: "website",
    url: "https://cauquilm.github.io/Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Mathieu CAUQUIL",
  logo_name: "AshutoshHathidara",
  nickname: "MatDev",
  subTitle:
    "Un jeune développeur à la recherche de nouveaux projets passionants.",
  resumeLink: "https://cvdesignr.com/p/608d19a94b05c?hl=fr_FR",
  portfolio_repository: "https://github.com/CauquilM/Portfolio",
  githubProfile: "https://github.com/cauquilM",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/cauquilM",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mathieu-cauquil/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mathieufc31@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MatDev31",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Front End",
      fileName: "FullStackImg",
      skills: [
        "⚡ Développement d'applications web responsive en ReactJs",
        "⚡ Développement d'applications web responsive en VueJs",
        "⚡ Développement de PWA",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJs",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#3fb984",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: ["⚡ Créations de mockups avec draw.io"],
      softwareSkills: [
        {
          skillName: "Draw.io",
          fontAwesomeClassname: "vscode-icons:file-type-drawio",
          style: {
            color: "#FF2BC2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "CodinGame",
      iconifyClassname: "simple-icons:codingame",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Titre professionnel développeur web et web mobile",
      subtitle: "Niveau 5",
      logo_path: "logo-ldnr.jpg",
      alt_name: "LDNR",
      duration: "2021-2022",
      descriptions: [
        "⚡ J'ai appris à programmer en équipe et à rédiger un cahier des charges.",
        "⚡ J'ai eu l'occasion de participer à l'élaboration d'un projet de fin de module pour chaque language de programmation.",
        "⚡ Apprentissage de méthodes pour savoir comment rechercher des informations dans la documentations.",
      ],
      website_link: "https://www.ldnr.fr/",
    },
    {
      title: "Baccalauréat Systèmes Electroniques Numériques",
      subtitle: "Niveau 6",
      logo_path: "lycee-hessel.jpg",
      alt_name: "LDNR",
      duration: "2021-2022",
      descriptions: [
        "⚡ J'ai appris à installer des systèmes d'alarmes anti-incendie et anti-vol.",
        "⚡ J'ai les lois électriques et électroniques élémentaires.",
        "⚡ Habilitation BR.",
      ],
      website_link: "https://www.ldnr.fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "EF english",
      subtitle: "Niveau C1",
      logo_path: "ef-set.png",
      certificate_link:
        "http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NzUS1&r=LTgyNzY3ODA1ODAS1&j=MjIzNzY1Nzk3NQS2&mt=1&rt=0",
      alt_name: "EF english",
      color_code: "#000080",
    },
    {
      title: "Mention européenne au baccalauréat",
      subtitle: "Section anglais",
      logo_path: "logo-educ-gov.svg",
      certificate_link:
        "http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NzUS1&r=LTgyNzY3ODA1ODAS1&j=MjIzNzY1Nzk3NQS2&mt=1&rt=0",
      alt_name: "EF english",
      color_code: "#000080",
    },
    {
      title: "Sololearn HTML",
      subtitle: "Certificat de complétion du cours HTML",
      logo_path: "sololearn.svg",
      certificate_link:
        "https://www.sololearn.com/Certificate/1014-20023164/jpg/",
      alt_name: "EF english",
      color_code: "#000080",
    },
  ],
};

// Experience Page
const experience = {
  title: "Expérience",
  subtitle: "Stage",
  description:
    "J'ai effectué mon stage de fin de formation dans une start-up toulousaine",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [],
    // },
    {
      title: "Doc2U",
      experiences: [
        {
          title: "Développeur",
          company: "Doc2U",
          company_url: "https://www.doc2u.fr/",
          logo_path: "doc2u.jpg",
          duration: "Novembre 2021 - Février 2022",
          location: "Toulouse, France",
          description:
            "En premier lieu de chaque tâche je faisais des maquettes avec draw.io pour pouvoir discuter avec mon maître de stage de la façon dont je souhaitais travailler. J'ai eu l'occasion de travailler sur plusieurs fronts, en front end  j'ai travaillé avec VueJs, Canvas et Socket.io pour la partie application web, j'ai utilisé Vuetify pour la partie design. Quant au back end j'ai travaillé sur l'api de Doc2U avec Java Spring. J'ai aussi fait toute l'internationalisation de mon travail avec i18n.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mes projets sont principalement en VueJS et ReactJS, ce sont les technologies front end que je préfère",
  // "My projects makes use of vast variety of latest technology tools.
  // My best experience is to create Data Science projects and deploy them to web applications
  // using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "moi.jpg",
    description: "Je suis disponible sur les réseaux suivants",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Adresse",
    subtitle: "4 Impasse Jim Morrison, 31200, Toulouse, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/1Gpr4vV6qsym331b9",
  },
  phoneSection: {
    title: "Numéro de téléphone",
    subtitle: "+33-7-86-85-89-48",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
