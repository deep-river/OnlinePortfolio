import { ProjectData } from '@/lib/types/project';
import { 
  overviewMarkdown, 
  rolesMarkdown, 
  developmentExperienceMarkdown 
} from './markdown-en';

const csc8508CourseworkEN: ProjectData = {
  id: "csc8508-coursework",
  title: "CSC8508 Coursework – Multiplayer Top-Down Shooter Game",
  shortDescription: "This game was developed as part of the CSC8507/8508 \"Gaming Solutions within a Team\" coursework.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-MainMenu.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/IiuYXB6oY5A",
    alt: "CSC8508 Coursework Game Demo Video"
  },
  
  overviewDescription: "This game was developed as part of the CSC8507/8508 \"Gaming Solutions within a Team\" coursework. Our 8-person team collaborated over three months to build a multiplayer top-down shooter game entirely from scratch in C++, demonstrating strong project management and teamwork capabilities.\n\nThe game features fast-paced action with multiple weapons and abilities, four unique level environments, and complete gameplay mechanics. All core systems—from rendering to networking—were implemented in pure C++.",
  
  projectInfo: {
    genre: "Multiplayer Top-Down Shooter",
    language: "C++",
    platform: "PC",
    teamsize: "8"
  },
  
  mainRole: "Team Leader/Core Gameplay Programmer",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "Project Screenshots",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-MainMenu.jpg",
              alt: "CSC8508 Coursework Screenshot 1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-Gameplay01.jpg",
              alt: "CSC8508 Coursework Screenshot 2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-Gameplay02.jpg",
              alt: "CSC8508 Coursework Screenshot 3"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "Role(s) and Responsibilities",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "overview",
      title: "Game Overview and Technical Highlights",
      content: [
        {
          type: "markdown",
          markdown: overviewMarkdown
        }
      ]
    },
    {
      id: "development-experience",
      title: "Key Experience & Engineering Takeaways",
      content: [
        {
          type: "markdown",
          markdown: developmentExperienceMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "Tech Stack",
      content: [
        {
          type: "list",
          items: ["C++", "OpenGL", "Multiplayer", "CI/CD"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default csc8508CourseworkEN; 