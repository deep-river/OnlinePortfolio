import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-en';

const projectPartyEN: ProjectData = {
  id: "project-party",
  title: "Project Party by Lilith Games",
  shortDescription: "Project Party is a new life simulation by Lilith Games promising a mix of familiar life sim and in-game socialising with a packaged game editor.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
    alt: "Project Party by Lilith Games"
  },
  
  overviewDescription: "Project Party(a.k.a. Boom! Party) is the new life simulation just announced by Lilith Games promising a mix of familiar life sim and in-game socialising, it'll also come with a packaged game editor. You'll be able to enjoy experiences ranging from shooter to horror and even more, Lilith promises.",
  
  projectInfo: {
    genre: "Life Simulation",
    platform: "Mobile, PC",
    teamsize: "10+"
  },
  
  roles: [
    {
      title: "Technical Designer",
      responsibilities: [
        "Developed gameplay systems using a mix of Python, JavaScript, and Lua",
        "Implemented network programming features for multiplayer functionality",
        "Contributed to the in-game editor design and development"
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
              alt: "Project Party Cover"
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
          items: ["Python", "Javascript", "Lua", "Network Programming"]
        }
      ]
    }
  ]
};

export default projectPartyEN; 