import { GenericObject } from "@/types/generic-object";

export const ResumeData: GenericObject = {
  name: 'Rodrigo Chumpitaz',
  initials: "RC",
  location: "Ica, Perú, PE",
  locationLink: "https://maps.app.goo.gl/9PVBdcxqHGCQe4D76",
  about: "Desarrollador Full Stack enfocado a la creación de aplicaciones web sostenibles",
  sumary: "Soy un desarrollador web full stack con experiencia de 1 año en proyectos empresariales en Sudamérica y 2 años en proyectos personales. Mi enfoque principal incluye el uso de TypeScript, Node.js, Angular y bases de datos SQL y NoSQL. Estoy abierto a aprender nuevas tecnologías y tengo una fuerte habilidad para resolver problemas.",
  contact: {
      email: "chumpitazr130@gmail.com",
      tel: "+51 934 451 702",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/RodrigoChumpitaz",
          // icon: '',
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rodrigo-chumpitaz-23a905279/",
          // icon: LinkedInIcon,
        }
      ],
    },
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
    "C# .Net",     
    "NestJs" 
  ],
  education: [
    {
      school: "Instituto IDAT",
      degree: "Egresado de la carrera de Desarrollo de Sistemas de Información",
      start: "2021",
      end: "2023",
    },
    {
      school: "Universidad Tecnológica Del Perú",
      degree: "Estudiante de Ingeniería de Software",
      start: "2023",
      end: "Actualidad",
    },
  ],
  projects: [
    {
      title: "Inel.app",
      techStack: [
        "NodeJs",
        "Javascript",
        "NextJs",
        "TailwindCSS",
        "Swipper",
        "FrameMotion"
      ],
      description: "Landing Page para la empresa Inel",
      logo: "",
      link: {
        label: "inel.app",
        href: "https://www.inel.app/",
      },
    },
    {
      title: "Antar Perú S.A.C.",
      techStack: [
        "NodeJs",
        "TypeScript",
        "NextJs",
        "TailwindCSS",
        "Swipper",
        "FrameMotion"
      ],
      description: "Landing Page para la empresa Antar Perú S.A.C.",
      logo: "",
      link: {
        label: "antarperusacpage.vercel.app",
        href: "https://antarperusacpage.vercel.app/",
      },
    },
    {
      title: "Bot - Whatsapp API",
      techStack: [
        "NodeJs",
        "TypeScript",
        "BaileysJs"
      ],
      description: "API REST para el envío de mensajes de Whatsapp",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/RodrigoChumpitaz/whatsapp-api",
      },
    },
    {
      title: "To-Do App",
      techStack: ["TypeScript", "ReactJs", "NodeJs", "TailwindCSS"],
      description:
        "Aplicación web para la gestión de tareas",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/RodrigoChumpitaz/todo-app-client",
      },
    },
    {
      title: "To-Do API",
      techStack: ["Typescript", "Express", "Docker", "TypeORM", "Mysql", "Clean Architecture"],
      description:
        "API REST para la gestión de tareas",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/RodrigoChumpitaz/todo-api",
      },
    },
    {
      title: "Control Gastos",
      techStack: ["NodeJs", "ReactJs", "CSS"],
      description:
        "Aplicación web para la gestión de gastos con gráficos estadísticos",
      logo: "",
      link: {
        label: "useminimal.com",
        href: "https://control-gastos-steel.vercel.app/",
      },
    },
    {
      title: "Juego Ahorcado",
      techStack: ["NodeJs", "Javascript", "CSS", "SQLite"],
      description:
        "Juego de ahorcado con base de datos SQLite con palabras aleatorias",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/RodrigoChumpitaz/juegos-trendinc/tree/ahorcado",
      },
    },
    {
      title: "API Rest Polleria Ñaños",
      techStack: ["NodeJs", "TypeScript", "MongoDB", "Express", "AWS S3", "JWT", "Jest", "Swagger"],
      description: "API REST para el manejo de pedidos de una pollería",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/RodrigoChumpitaz/-a-osRestApi",
      },
    }
  ],
}