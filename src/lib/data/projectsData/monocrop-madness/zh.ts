import { ProjectData } from '@/lib/types/project';

const monocropMadnessZH: ProjectData = {
  id: "monocrop-madness",
  title: "CSC8599毕设项目：（教育游戏）Monocrop Madness",
  shortDescription: "我的毕业设计项目，关于单一种植问题的教育游戏。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20CropPlanningPanel.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=114977297928366&bvid=BV1tM4RzSERT&cid=31510167686&p=1",
    alt: "Monocrop Madness 游戏演示视频"
  },
  
  overviewDescription: "我在纽卡斯尔大学的毕业设计项目，内容为关于单一种植问题的教育游戏。项目采用UE5.5实现，基于真实的农业问题进行建模，通过种植玩法引导玩家理解单一种植的危害和应对措施，实现了较为完整的游戏流程。",
  
  projectInfo: {
    genre: "模拟经营，种田，类动森",
    engine: "Unreal 5.5",
    platform: "PC"
  },
  
  detailedSections: [
    {
      id: "screenshots",
      title: "游戏截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Game%20level%20overview.jpg",
              alt: "Monocrop Madness 游戏场景概览"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Game%20welcome%20scene.jpg",
              alt: "Monocrop Madness 欢迎场景"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-Tooltip%20UI%20when%20near%20crop%20fields.jpg",
              alt: "Monocrop Madness 作物区域提示UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20CropPlanningPanel.jpg",
              alt: "Monocrop Madness 作物规划面板UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20Unlock%20new%20plot%20panel.jpg",
              alt: "Monocrop Madness 解锁新地块面板UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20conversation%20with%20npc.jpg",
              alt: "Monocrop Madness NPC对话UI"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/CSC8599-UI%20pause%20menu.jpg",
              alt: "Monocrop Madness 暂停菜单UI"
            }
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "技术栈",
      content: [
        {
          type: "list",
          items: ["UE5", "模拟经营", "动森like"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default monocropMadnessZH; 