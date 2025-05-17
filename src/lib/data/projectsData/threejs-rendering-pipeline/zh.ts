import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-zh';

const threeJSPipelineZH: ProjectData = {
  id: "threejs-rendering-pipeline",
  title: "Three.js 渲染管线演示",
  shortDescription: "使用Three.js和React实现的3D图形渲染管线交互式教育可视化工具。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
    alt: "Three.js渲染管线演示截图"
  },
  
  overviewDescription: "使用Three.js和React实现的3D图形渲染管线交互式教育可视化工具。该项目允许学生、教育工作者和图形爱好者交互式地探索管线的每个阶段，帮助揭示将3D数据转换为2D图像的复杂过程。",
  
  projectInfo: {
    genre: "教育可视化",
    engine: "Three.js",
    platform: "Web",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/ThreeJSRenderingPipelineDemo",
    liveDemo: "https://threejsrenderingpipelinedemo.vercel.app/"
  },
  
  roles: [
    {
      title: "全栈开发者与图形程序员",
      responsibilities: [
        "使用Three.js实现3D渲染管线可视化",
        "使用React创建交互式UI组件",
        "用GLSL开发自定义着色器"
      ]
    }
  ],
  
  detailedSections: [
    {
      id: "screenshots",
      title: "项目截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
              alt: "渲染管线可视化概览"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-02.jpg",
              alt: "交互式3D模型操作界面"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "角色与职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "features",
      title: "项目特点",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "技术栈",
      content: [
        {
          type: "list",
          items: ["Three.js", "React", "WebGL", "GLSL", "TypeScript"]
        }
      ]
    }
  ]
};

export default threeJSPipelineZH; 