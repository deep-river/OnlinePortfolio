import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-en';

const apocalypsePartyEN: ProjectData = {
  id: "apocalypse-party",
  title: "Apocalypse Party on Steam",
  shortDescription: "Apocalypse Party is a 3D top-down action Roguelike game. Embark on a new mission to traverse through the Middle Ages and become the strongest survivor.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
    alt: "Apocalypse Party on Steam"
  },
  
  overviewDescription: "Apocalypse Party is a 3D top-down action Roguelike game. In this game, you will embark on a new mission to traverse through the Middle Ages and gradually master abilities, and arm yourself to become the strongest survivor through numerous choices.",
  
  projectInfo: {
    genre: "Action Roguelike",
    engine: "Unreal Engine 5",
    platform: "PC (Steam)",
    teamsize: "5+"
  },
  
  links: {
    steam: "https://store.steampowered.com/app/2599800/Apocalypse_Party/"
  },
  
  mainRole: "UE5 Technical Designer",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
              alt: "Apocalypse Party Cover"
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
      title: "Project Features",
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
          items: ["Unreal 5", "Blueprint", "Able Ability System", "Game Design"]
        }
      ]
    }
  ]
};

export default apocalypsePartyEN; 