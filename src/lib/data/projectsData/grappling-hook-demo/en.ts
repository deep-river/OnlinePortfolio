import { ProjectData } from '@/lib/types/project';

const grapplingHookDemoEN: ProjectData = {
  id: "grappling-hook-demo",
  title: "Grappling Hook Demo",
  shortDescription: "Recreation of the grappling hook mechanics from Sekiro: Shadows Die Twice using Unity. Implemented dynamic rope physics and hook detection to create realistic grappling behavior.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
    alt: "Grappling Hook Demo Screenshot"
  },
  
  overviewDescription: "Recreation of the grappling hook mechanics from Sekiro: Shadows Die Twice using Unity. Implemented dynamic rope physics and hook detection to create realistic grappling behavior.",
  
  projectInfo: {
    genre: "Action",
    engine: "Unity Engine",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/UnityGrapplingDemoLite"
  },
  
  mainRole: "Unity Programmer",
  
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
              src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
              alt: "Grappling Hook Demo Screenshot 1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo03.png",
              alt: "Grappling Hook Demo Screenshot 2"
            }
          ]
        }
      ]
    },
    {
      id: "features",
      title: "Key Features",
      content: [
        {
          type: "list",
          items: [
            "Dynamic rope physics simulation",
            "Realistic grappling hook mechanics",
            "Hook detection and attachment system",
            "Inspired by Sekiro: Shadows Die Twice",
            "Smooth character movement and swinging"
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Unity", "C#", "Physics Simulation"]
        }
      ]
    }
  ]
};

export default grapplingHookDemoEN; 