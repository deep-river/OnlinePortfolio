import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, gameDesignMarkdown } from './markdown-en';

const phantomFlashEN: ProjectData = {
  id: "phantom-flash",
  title: "Phantom Flash",
  shortDescription: "A first-person horror puzzle game where you explore a haunted house using a special camera that reveals supernatural entities.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Thumbnail.jpg",
  
  heroMedia: {
    type: "video",
    src: "https://www.youtube.com/embed/MMQU5rFLW-M",
    alt: "Phantom Flash Gameplay Trailer"
  },
  
  overviewDescription: "Embark on a unique horror puzzle adventure. In this game, you will follow the clues in your investigation note and use your camera to explore the mist-covered house. Encounter eerie events and face terrifying spirits in your quest to uncover the truth. Can you survive the mystery and defeat the evil forces lurking within?\n\nA submission to the NUGDS Winter Jam 2025, hosted by the Newcastle University Game Dev Society. Ranked 1st among 8 entries.",
  
  projectInfo: {
    genre: "3D, Indie, Horror, Puzzle",
    engine: "Unity",
    platform: "PC",
    teamsize: "5",
  },

  links: {
    itchio: "https://oguri-ridge.itch.io/phantomflash",
  },
  
  roles: [
    {
      title: "Gameplay Programmer",
      responsibilities: [
        "Implemented multiple puzzle mechanics.",
        "Developed UI system including Start Screen, Pause Menu, and HUD interfaces with UGUI."
      ]
    },
    {
      title: "System Designer",
      responsibilities: [
        "Designed core gameplay loop and interactive experience balancing exploration/puzzle pacing.",
        "Crafted all in-game puzzles with progression balancing and contextual feedback.",
        "Designed UI components for pause menu and HUD."
      ]
    }
  ],
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Entrance.jpg",
              alt: "Game entrance scene"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-DarkHallway.jpg",
              alt: "Dark hallway scene"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Hallway.jpg",
              alt: "Red hallway scene"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Kitchen.jpg",
              alt: "Kitchen scene"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-RankPage.jpg",
              alt: "Game ranking page"
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
      id: "design-highlights",
      title: "Game Design Highlights",
      content: [
        {
          type: "markdown",
          markdown: gameDesignMarkdown
        }
      ]
    }
  ]
};

export default phantomFlashEN; 