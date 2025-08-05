import { ProjectData } from '@/lib/types/project';

const monocropMadnessEN: ProjectData = {
  id: "monocrop-madness",
  title: "CSC8599 Dissertation: (Educational Game) Monocrop Madness",
  shortDescription: "An Educational Game project for my dissertation.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Game%20level%20overview.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/MF_X1EnMc6U",
    alt: "Monocrop Madness Game Demo Video"
  },
  
  overviewDescription: "An Educational Game project for my dissertation.",
  
  projectInfo: {
    genre: "Simulation, Farming, Animal Crossing-like",
    engine: "Unreal 5.5",
    platform: "PC"
  },
  
  detailedSections: [
    {
      id: "screenshots",
      title: "Game Screenshots",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Game%20level%20overview.jpg",
              alt: "Monocrop Madness Game Level Overview"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Game%20welcome%20scene.jpg",
              alt: "Monocrop Madness Welcome Scene"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Tooltip%20UI%20when%20near%20crop%20fields.jpg",
              alt: "Monocrop Madness Tooltip UI when near crop fields"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20CropPlanningPanel.jpg",
              alt: "Monocrop Madness Crop Planning Panel UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20Unlock%20new%20plot%20panel.jpg",
              alt: "Monocrop Madness Unlock New Plot Panel UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20conversation%20with%20npc.jpg",
              alt: "Monocrop Madness NPC Conversation UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20pause%20menu.jpg",
              alt: "Monocrop Madness Pause Menu UI"
            }
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "Tech Stack",
      content: [
        {
          type: "list",
          items: ["UE5", "simulation", "Dissertation"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default monocropMadnessEN; 