import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown } from './markdown-zh';

const boomPartyZH: ProjectData = {
  id: "boom-party",
  title: "Boom! Party 生活派对",
  shortDescription: "上海莉莉丝游戏的在研项目，前身为达芬奇UGC编辑器，基于自研Avatar引擎开发。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=1605250369&bvid=BV1rm421N7Cm&cid=1572245219&p=1",
    alt: "Boom! Party游戏宣传视频"
  },
  
  overviewDescription: "欢迎来到《生活派对》，逃离日常，疯玩开场。《生活派对》是一款超好玩的电子轰趴App。在这里，自由创造虚拟形象，鬼屋打工，戏精飙戏，怪趣问答，怎么玩都可以。\n\n上海莉莉丝游戏的在研项目，前身为达芬奇UGC编辑器，基于自研Avatar引擎开发。",
  
  projectInfo: {
    genre: "模拟经营",
    engine: "Avatar引擎",
    platform: "移动端",
    teamsize: "200+"
  },
  
  links: {
    taptap: "https://www.taptap.cn/app/387202?os=android"
  },

  mainRole: "技术策划",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-01.jpg",
              alt: "Boom! Party截图1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-02.jpg",
              alt: "Boom! Party截图2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-03.jpg",
              alt: "Boom! Party截图3"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-04.jpg",
              alt: "Boom! Party截图4"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["插件开发", "编辑器工具开发", "Lua", "Javascript"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default boomPartyZH; 