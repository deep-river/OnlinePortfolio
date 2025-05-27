import { ProjectData } from '@/lib/types/project';

const grapplingHookDemoZH: ProjectData = {
  id: "grappling-hook-demo",
  title: "抓钩演示",
  shortDescription: "使用Unity重现《只狼：影逝二度》中的抓钩机制。实现了动态绳索物理和钩子检测，创造逼真的抓钩行为。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
    alt: "抓钩演示截图"
  },
  
  overviewDescription: "使用Unity重现《只狼：影逝二度》中的抓钩机制。实现了动态绳索物理和钩子检测，创造逼真的抓钩行为。",
  
  projectInfo: {
    genre: "动作游戏",
    engine: "Unity引擎",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/UnityGrapplingDemoLite"
  },
  
  mainRole: "Unity程序员",
  
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
              src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
              alt: "抓钩演示截图1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo03.png",
              alt: "抓钩演示截图2"
            }
          ]
        }
      ]
    },
    {
      id: "features",
      title: "主要特点",
      content: [
        {
          type: "list",
          items: [
            "动态绳索物理模拟",
            "逼真的抓钩机制",
            "钩子检测和附着系统",
            "灵感来自《只狼：影逝二度》",
            "流畅的角色移动和摆动"
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["Unity引擎", "C#", "物理模拟", "绳索物理"]
        }
      ]
    }
  ]
};

export default grapplingHookDemoZH; 