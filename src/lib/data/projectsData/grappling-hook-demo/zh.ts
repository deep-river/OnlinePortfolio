import { ProjectData } from '@/lib/types/project';

const grapplingHookDemoZH: ProjectData = {
  id: "grappling-hook-demo",
  title: "抓钩机制Demo",
  shortDescription: "使用Unity复现了《只狼：影逝二度》中的抓钩机制。实现了动态绳索物理和落点检测功能，模拟了逼真的抓钩行为。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
    alt: "抓钩演示截图"
  },
  
  overviewDescription: "使用Unity复现了《只狼：影逝二度》中的抓钩机制。实现了动态绳索物理和落点检测功能，模拟了逼真的抓钩行为。",
  
  projectInfo: {
    genre: "动作，机制演示",
    engine: "Unity",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/UnityGrapplingDemoLite"
  },
  
  mainRole: "Unity程序",
  
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
      title: "主要功能",
      content: [
        {
          type: "list",
          items: [
            "动态的绳索物理模拟系统",
            "灵活的落点检测功能，确保抓取路径不会被物体遮挡",
            "流畅的角色移动和摆动效果"
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
          items: ["Unity", "C#", "物理模拟"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default grapplingHookDemoZH; 