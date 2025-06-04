import { ProjectData } from '@/lib/types/project';
import { 
  overviewMarkdown, 
  rolesMarkdown, 
  developmentExperienceMarkdown 
} from './markdown-zh';

const csc8508CourseworkZH: ProjectData = {
  id: "csc8508-coursework",
  title: "CSC8508课程作业 - 多人俯视角射击游戏",
  shortDescription: "使用纯C++实现的联机游戏项目，类型为俯视角射击游戏。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-MainMenu.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/IiuYXB6oY5A",
    alt: "CSC8508课程作业游戏演示视频"
  },
  
  overviewDescription: "CSC8507/8508 Gaming Solutions within a Team的课程项目。在该课程中，我们以小组的形式从0到1完成了该游戏项目的开发，并展示了出色的项目管理和团队合作能力。\n\n该游戏为使用纯C++实现的联机游戏项目，类型为俯视角射击游戏。玩家可以使用多种武器与技能同怪物战斗，游戏包括4个独特的关卡场景，实现了完整的游戏流程与功能。",
  
  projectInfo: {
    genre: "多人俯视角射击游戏",
    language: "C++",
    platform: "PC",
    teamsize: "8"
  },
  
  mainRole: "团队负责人/核心程序开发",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "项目截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-MainMenu.jpg",
              alt: "CSC8508课程项目截图1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-Gameplay01.jpg",
              alt: "CSC8508课程项目截图2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/8503Coursework-Gameplay02.jpg",
              alt: "CSC8508课程项目截图3"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "项目职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "overview",
      title: "项目概述与技术亮点",
      content: [
        {
          type: "markdown",
          markdown: overviewMarkdown
        }
      ]
    },
    {
      id: "development-experience",
      title: "项目经验总结",
      content: [
        {
          type: "markdown",
          markdown: developmentExperienceMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "技术栈",
      content: [
        {
          type: "list",
          items: ["C++", "OpenGL", "多人联机", "CI/CD"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default csc8508CourseworkZH; 