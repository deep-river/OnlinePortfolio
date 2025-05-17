import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-en';

const threeJSPipelineEN: ProjectData = {
  id: "threejs-rendering-pipeline",
  title: "Three.js Rendering Pipeline Demo",
  shortDescription: "An interactive educational visualization of the 3D graphics rendering pipeline implemented using Three.js and React.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
    alt: "Three.js Rendering Pipeline Demo Screenshot"
  },
  
  overviewDescription: "An interactive educational visualization of the 3D graphics rendering pipeline implemented using Three.js and React. This project allows students, educators, and graphics enthusiasts to explore each stage of the pipeline interactively, helping to demystify the complex processes that transform 3D data into 2D images.",
  
  projectInfo: {
    genre: "Educational Visualization",
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
      title: "Full Stack Developer & Graphics Programmer",
      responsibilities: [
        "Implemented the 3D rendering pipeline visualization using Three.js",
        "Created interactive UI components with React",
        "Developed custom shaders with GLSL"
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
              src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
              alt: "Overview of the rendering pipeline visualization"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-02.jpg",
              alt: "Interactive 3D model manipulation interface"
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
          items: ["Three.js", "React", "WebGL", "GLSL", "TypeScript"]
        }
      ]
    }
  ]
};

export default threeJSPipelineEN; 