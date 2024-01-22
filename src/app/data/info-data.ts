import { GenericObject } from "@/types/generic-object";

export const ResumeData: GenericObject = {
    name: 'Rodrigo Chumpitaz',
    initials: "RC",
    location: "Ica, Perú, PE",
    locationLink: "https://maps.app.goo.gl/9PVBdcxqHGCQe4D76",
    about: "Desarrollador Full Stack enfocado a la creación de aplicaciones web sostenibles",
    sumary: "Soy un desarrollador web full stack con experiencia de 1 año en proyectos empresariales en Sudamérica y 2 años en proyectos personales. Mi enfoque principal incluye el uso de TypeScript, Node.js, Angular y bases de datos SQL y NoSQL. Estoy abierto a aprender nuevas tecnologías y tengo una fuerte habilidad para resolver problemas.",
    // contact: {
    //     email: "bartosz.jarocki@hey.com",
    //     tel: "+48530213401",
    //     social: [
    //       {
    //         name: "GitHub",
    //         url: "https://github.com/BartoszJarocki",
    //         // icon: '',
    //       },
    //       {
    //         name: "LinkedIn",
    //         url: "https://www.linkedin.com/in/bjarocki/",
    //         icon: LinkedInIcon,
    //       },
    //       {
    //         name: "X",
    //         url: "https://x.com/BartoszJarocki",
    //         icon: XIcon,
    //       },
    //     ],
    //   },
    avatarUrl: "assets/img/cv_perfil.jpg",
    work: [
      {
        company: "Tivit Latam",
        link: "https://tivit.com/es/home-es/",
        badges: ["Remoto"],
        title: "Practicante Profesional Full Stack",
        logo_class: "parabol-logo",
        start: "Oct 2023",
        end: "En 2024",
        description:
          "Desarrollé aplicaciones web para clientes y colaboradores de la empresa. Colaboré en el desarrollo de una aplicación web encargada de gestionar el trabajo de los empleados. Tecnologías: Angular, TypeScript, C#, .Net, SQL Server, IIS, Azure DevOps, Azure, Git, Scrum",
      },
      {
        company: "Antar Perú S.A.C.",
        link: "https://antarperusacpage.vercel.app/",
        badges: ["Temporal"],
        title: "Desarrollador Web Full Stack Freelance",
        logo_class: "someText",
        start: "Jul 2023",
        end: "En 2024",
        description:
          "Contribuí al desarrollo y mantenimiento de la página principal de la empresa, así como de sus aplicaciones web internas. Tecnologías: React, TypeScript, JWT, Git, MongoDB, NodeJs",
      },
      {
        company: "AllDev",
        link: "#",
        badges: ["Temporal"],
        title: "Practicante pre-profesional de Desarrollo de Software",
        logo_class: "someText",
        start: "Abr 2023",
        end: "Oct 2023",
        description:
          "Colaboré al desarrollo de un sistema web que hacía uso del servicio del gobierno PIDE, además fui el encargado de gestionar el servidor donde se alojaba el servicio web del PIDE para la municipalidad de Punta Hermosa. Tecnologías: NodeJs, ReactJS, TailwindCSS, MongoDB, Postman, REST, SOAP",
      },
      {
        company: "Compañía Incubadora de Soluciones Móviles S.A.C. / CULQI",
        link: "https://www.nokia.com",
        badges: ["Remoto"],
        title: "Tech Support Analyst",
        logo_class: "someText",
        start: "Dic 2022",
        end: "En 2024",
        description: "Encargado de brindar soporte a las plataformas internas y externas de la compañia. Implementé consultas NoSQL avanzadas haciendo uso de conceptos como operadores, bulks, agregaciones, etc. Mantenimiento de querys SQL en reportes de Metabase. Automatizaciones de procesos internos haciendo uso de NodeJs",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL/Mysql/MSSQL",
    ],
    education: [
      {
        school: "Instituto IDAT",
        degree: "Egresado de la carrera de Desarrollo de Sistemas de Información",
        start: "2021",
        end: "2023",
      },
    ],
    projects: [
      {
        title: "Consultly",
        techStack: [
          "Side Project",
          "TypeScript",
          "Next.js",
          "Vite",
          "GraphQL",
          "WebRTC",
        ],
        description: "A platform to build and grow your online business",
        logo: "",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Monito",
        techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
        description:
          "Browser extension that records everything happening in a web application",
        logo: "",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
      {
        title: "Jarocki.me",
        techStack: ["Side Project", "Next.js", "MDX"],
        description:
          "My personal website and blog. Built with Next.js and Notion API",
        logo: "",
        link: {
          label: "github.com",
          href: "https://jarocki.me/",
        },
      },
      {
        title: "Minimal",
        techStack: ["Side Project", "Next.js", "Puppeteer"],
        description:
          "Minimalist calendars, habit trackers and planners generator",
        logo: "",
        link: {
          label: "useminimal.com",
          href: "https://useminimal.com/",
        },
      },
      {
        title: "Barepapers",
        techStack: ["Side Project", "Next.js", "Puppeteer"],
        description:
          "Generates beautiful wallpapers using random shapes and gradients",
        logo: "",
        link: {
          label: "barepapers.com",
          href: "https://barepapers.com/",
        },
      },
      {
        title: "Year progress",
        techStack: ["Side Project", "TypeScript", "Next.js"],
        description: "Tracks current year progress and displays a countdown",
        logo: "",
        link: {
          label: "getyearprogress.com",
          href: "https://getyearprogress.com/",
        },
      },
      {
        title: "Parabol",
        techStack: [
          "Full Stack Developer",
          "TypeScript",
          "React",
          "Node.js",
          "GraphQL",
        ],
        description:
          "The Agile meeting co-pilot that delivers better meetings with less effort",
        logo: "",
        link: {
          label: "github.com",
          href: "https://parabol.co/",
        },
      },
      {
        title: "Evercast",
        techStack: [
          "Lead Frontend Developer",
  
          "TypeScript",
          "React",
          "Node.js",
          "GraphQL",
        ],
        description:
          "Creative collaboration platform that combines video conferencing and HD media streaming",
        logo: "",
        link: {
          label: "evercast.us",
          href: "https://www.evercast.us/",
        },
      },
      {
        title: "Mobile Vikings",
        techStack: ["Lead Android Developer", "Android", "Kotlin"],
        description:
          "Android application for leading virtual mobile operator in Poland",
        logo: "",
        link: {
          label: "mobilevikings.pl",
          href: "https://mobilevikings.pl/",
        },
      },
      {
        title: "Howdy",
        techStack: ["Lead Android Developer", "Android", "Kotlin"],
        description:
          "Howdy is a place for you to join communities you care about",
        logo: "",
        link: {
          label: "play.google.com",
          href: "https://howdy.co/",
        },
      },
      {
        title: "Tastycloud",
        techStack: ["Lead Android Developer", "Android", "Kotlin"],
        description:
          "Android application for managing and displaying restaurant menus in kiosk mode",
        logo: "",
        link: {
          label: "tastycloud.fr",
          href: "https://www.tastycloud.fr/",
        },
      }
    ],
}