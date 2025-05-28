import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown, highlightsMarkdown } from './markdown-zh';

const threeJSPipelineZH: ProjectData = {
  id: "threejs-rendering-pipeline",
  title: "Three.js 模拟图形渲染管线交互式演示",
  shortDescription: "使用Three.js和React实现的图形渲染管线交互式演示项目。用于展示3D图形渲染管线中不同阶段的可视化效果，具有多个可配置的参数以展示对于顶点、片元、光照与后处理的不同处理过程。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
    alt: "Three.js渲染管线演示截图"
  },
  
  overviewDescription: "使用Three.js和React实现的图形渲染管线交互式演示项目。用于展示3D图形渲染管线中不同阶段的可视化效果，具有多个可配置的参数以展示对于顶点、片元、光照与后处理的不同处理过程。",
  
  projectInfo: {
    technology: "Three.js, React, GLSL",
    language: "TypeScript",
    platform: "Web",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/ThreeJSRenderingPipelineDemo",
    liveDemo: "https://threejs-rendering-pipeline-demo.vercel.app/"
  },

  mainRole: "全栈开发",
  
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
      title: "项目职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "features",
      title: "实现功能",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "highlights",
      title: "技术亮点",
      content: [
        {
          type: "markdown",
          markdown: highlightsMarkdown
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
      ],
      hideInDetailPage: true
    }
  ]
};

export default threeJSPipelineZH; 