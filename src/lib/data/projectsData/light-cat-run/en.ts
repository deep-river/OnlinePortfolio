import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-en';

const lightCatRunEN: ProjectData = {
  id: "light-cat-run",
  title: "Light Cat Run",
  shortDescription: "An adorable puzzle adventure where you use your laser pointer to lure a group of cats, interact with the environment, and plan the perfect escape from roaming monsters.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/Di3FPUJvcQ4",
    alt: "Light Cat Run Gameplay Video"
  },
  
  overviewDescription: "An adorable puzzle adventure where you use your laser pointer to lure a group of cats, interact with the environment, and plan the perfect escape from roaming monsters. An award-winning entry for the 2024 TapTap Spotlight GameJam, celebrated for its Best Visual & Audio.",
  
  projectInfo: {
    genre: "2D, Casual, Puzzle",
    engine: "Unity",
    platform: "PC",
    teamsize: "5"
  },
  
  mainRole: "Unity Programmer & System Designer",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "Screenshots",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
              alt: "Light Cat Run Title Screen"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-Gameplay.jpg",
              alt: "Light Cat Run Gameplay Screenshot"
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
      id: "features",
      title: "Game Features",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Unity", "GameJam", "2D Game", "AI Systems"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default lightCatRunEN; 