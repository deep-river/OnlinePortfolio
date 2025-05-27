import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown } from './markdown-en';

const boomPartyEN: ProjectData = {
  id: "boom-party",
  title: "Boom! Party",
  shortDescription: "Boom! Party is an unreleased life simulation game developed by Lilith Games promising a mix of familiar life sim and in-game socialising, it'll also come with a packaged game editor.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/sk6lfvUOMdY",
    alt: "Boom! Party Gameplay Video"
  },
  
  overviewDescription: "Boom! Party is an unreleased life simulation game developed by Lilith Games promising a mix of familiar life sim and in-game socialising, it'll also come with a packaged game editor.",
  
  projectInfo: {
    genre: "Simulation",
    engine: "Avatar Engine",
    platform: "Mobile",
    teamsize: "200+"
  },
  
  mainRole: "Technical Designer",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-01.jpg",
              alt: "Boom! Party Screenshot 1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-02.jpg",
              alt: "Boom! Party Screenshot 2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-03.jpg",
              alt: "Boom! Party Screenshot 3"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-04.jpg",
              alt: "Boom! Party Screenshot 4"
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
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Javascript", "Lua", "CrossPlatform", "Editor Tools", "Network Programming"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default boomPartyEN; 