import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown } from './markdown-zh';

const boomPartyZH: ProjectData = {
  id: "boom-party",
  title: "Boom! Party",
  shortDescription: "Boom! Party是一款尚未发布的多人第三人称解谜叙事游戏，正在使用公司的游戏引擎为iOS和Android平台开发，团队规模达300人。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/boom-party-img-01.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://www.youtube.com/embed/sk6lfvUOMdY",
    alt: "Boom! Party游戏视频"
  },
  
  overviewDescription: "Boom! Party是一款尚未发布的多人第三人称解谜叙事游戏，正在使用公司的游戏引擎为iOS和Android平台开发，团队规模达300人。玩家将与其他玩家合作或竞争来解决不同的神秘案件，他们将通过各种推理进行交流并投票淘汰杀手，杀手可能是NPC或其他玩家。",
  
  projectInfo: {
    genre: "模拟游戏",
    engine: "Avatar引擎",
    platform: "移动端",
    teamsize: "200+"
  },
  
  mainRole: "技术设计师",
  
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
      title: "角色和职责",
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
          items: ["Avatar引擎", "移动端开发", "插件开发", "编辑器工具", "任务系统"]
        }
      ]
    }
  ]
};

export default boomPartyZH; 