'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, ExternalLink, X } from 'lucide-react'

export default function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Bangyu Li | Web3D Developer Portfolio"
  }, [])

  const project = {
    title: "Three.js Rendering Pipeline Demo",
    description: "An interactive educational visualization of the 3D graphics rendering pipeline implemented using Three.js and React. This project provides a comprehensive visualization of the modern 3D graphics rendering pipeline. It allows students, educators, and graphics enthusiasts to explore each stage of the pipeline interactively, helping to demystify the complex processes that transform 3D data into 2D images on your screen.",
    demoLink: "https://threejs-rendering-pipeline-demo.vercel.app/",
    githubLink: "https://github.com/deep-river/ThreeJSRenderingPipelineDemo",
    images: [
      "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-01.jpg",
      "https://raw.githubusercontent.com/deep-river/ThreeJSRenderingPipelineDemo/refs/heads/main/Screenshots/ThreeJSRPD-02.jpg"
    ],
    technology: "Three.js, React, WebGL, GLSL",
    framework: "Next.js",
    styling: "Tailwind CSS",
    language: "TypeScript",
    roles: [
      {
        title: "Full Stack Developer",
        responsibilities: [
          "Designed and implemented complete 3D rendering pipeline visualization system",
          "Developed custom GLSL shaders to showcase various rendering stages",
          "Implemented user interface providing interactive controls and educational annotations"
        ]
      },
      {
        title: "Graphics Programmer",
        responsibilities: [
          "Wrote vertex and fragment shader code to visualize different stages of the rendering pipeline",
          "Implemented multiple lighting models including Phong and Physically Based Rendering (PBR)",
          "Created real-time parameter adjustment system allowing users to modify lighting parameters, camera positions, and model properties"
        ]
      }
    ],
    features: [
      "Interactive Pipeline Visualization: Step through each stage of the rendering pipeline",
      "Multiple Rendering Stages: Vertex, Fragment, Geometry, Rasterization, and Complete Rendering",
      "Environment Settings: Switch between daytime, nighttime, and rainy environments",
      "Lighting Models: Toggle between Phong and PBR (Physically Based Rendering) shading models",
      "Real-time Parameter Adjustments: Modify lighting parameters, camera position, and model properties",
      "Educational Annotations: Learn about each pipeline stage with informative overlays"
    ],
    technicalImplementation: {
      pipelineOverview: [
        "Vertex Processing: Transforms vertices from 3D object space to 2D screen space",
        "Geometry Processing: Handles primitive assembly, clipping, and culling",
        "Rasterization: Converts vector information to pixels (fragments)",
        "Fragment Processing: Determines the color of each pixel through lighting calculations and texturing",
        "Output Merging: Combines fragment colors with the frame buffer"
      ],
      vertexStage: {
        title: "Vertex Stage Visualization",
        description: "Our implementation shows how vertices are processed before rendering. Users can observe:",
        details: [
          "Model, view, and projection transformations",
          "Vertex shader operations",
          "Wireframe representation of the geometry"
        ],
        code: `vertexShader: \`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
\``
      },
      geometryStage: {
        title: "Geometry Processing",
        description: "This stage demonstrates:",
        details: [
          "Primitive assembly (how vertices form triangles)",
          "Back-face culling",
          "Clipping against the view frustum"
        ],
        code: `// PrimitiveVisualization component applies these materials
const material = new THREE.MeshBasicMaterial({
  color: wireframe ? 0x00ff00 : 0xffffff,
  wireframe: wireframe,
  side: backfaceCulling ? THREE.FrontSide : THREE.DoubleSide,
  vertexColors: false,
  transparent: true,
  opacity: wireframe ? 0.8 : 1.0,
})

// For non-wireframe mode, we create a checkerboard pattern
// by assigning alternating colors to triangles
if (!wireframe) {
  const colors = []
  
  // Alternating colors for triangles
  for (let i = 0; i < positionAttribute.count; i += 3) {
    const color = i % 6 === 0 ? new THREE.Color(0xff5555) : new THREE.Color(0x55ff55)
    colors.push(color.r, color.g, color.b)
    colors.push(color.r, color.g, color.b)
    colors.push(color.r, color.g, color.b)
  }
  
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  material.vertexColors = true
}`
      },
      rasterizationStage: {
        title: "Rasterization Stage",
        description: "Visualizes how geometric primitives are converted to fragments (potential pixels):",
        details: [
          "Triangle traversal",
          "Perspective-correct interpolation",
          "Screen-space transformation"
        ],
        code: `// Rasterization stage pixel visualization shader
fragmentShader: \`
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    // Create pixelated effect
    float pixelSize = 0.05;
    vec2 pixelatedUV = floor(vUv / pixelSize) * pixelSize;
    
    // Add grid pattern
    float gridLine = step(0.98, mod(vUv.x / pixelSize, 1.0)) + 
                    step(0.98, mod(vUv.y / pixelSize, 1.0));
    
    // Base color based on UV coordinates
    vec3 color = vec3(pixelatedUV.x, pixelatedUV.y, sin(time) * 0.5 + 0.5);
    
    // Apply grid lines
    color = mix(color, vec3(0.0), gridLine);
    
    gl_FragColor = vec4(color, 1.0);
  }
\``
      },
      fragmentStage: {
        title: "Fragment Stage",
        description: "Shows the pixel-level operations:",
        details: [
          "Texture sampling",
          "Color computation",
          "Lighting calculations (Phong model and PBR)",
          "Material properties application"
        ],
        code: `// Fragment stage shader with quadrant visualization
fragmentShader: \`
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    // Split the view into quadrants
    vec2 quadrant = step(vec2(0.5), vUv);
    float quadrantIndex = quadrant.x + quadrant.y * 2.0;
    
    vec3 color;
    
    // Quadrant 0: Base color (bottom-left)
    if (quadrantIndex < 0.5) {
      color = vec3(0.8, 0.8, 0.8);
    }
    // Quadrant 1: Normal map (bottom-right)
    else if (quadrantIndex < 1.5) {
      color = vNormal * 0.5 + 0.5;
    }
    // Quadrant 2: Roughness/metalness (top-left)
    else if (quadrantIndex < 2.5) {
      // Simulate roughness/metalness map
      float roughness = mod(vPosition.x * 10.0 + vPosition.y * 10.0 + vPosition.z * 10.0, 1.0);
      float metalness = sin(vPosition.x * 50.0 + time) * 0.5 + 0.5;
      color = vec3(roughness, metalness, 0.0);
    }
    // Quadrant 3: Lighting calculation (top-right)
    else {
      // Simple lighting calculation
      vec3 lightDir = normalize(vec3(sin(time), 1.0, cos(time)));
      float diffuse = max(dot(vNormal, lightDir), 0.0);
      vec3 baseColor = vec3(0.8, 0.8, 0.8);
      color = baseColor * diffuse;
    }
    
    // Add grid lines to separate quadrants
    float gridLine = step(0.98, mod(vUv.x, 0.5)) + step(0.98, mod(vUv.y, 0.5));
    color = mix(color, vec3(1.0), gridLine);
    
    gl_FragColor = vec4(color, 1.0);
  }
\``
      },
      customShaders: [
        {
          title: "Fragment Visualization Quadrant Shader",
          code: `// Vertex shader
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Fragment shader
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  // Split the view into quadrants
  vec2 quadrant = step(vec2(0.5), vUv);
  float quadrantIndex = quadrant.x + quadrant.y * 2.0;
  
  vec3 color;
  
  // Quadrant 0: Base color (bottom-left)
  if (quadrantIndex < 0.5) {
    color = vec3(0.8, 0.8, 0.8);
  }
  // Quadrant 1: Normal map (bottom-right)
  else if (quadrantIndex < 1.5) {
    color = vNormal * 0.5 + 0.5;
  }
  // Quadrant 2: Roughness/metalness (top-left)
  else if (quadrantIndex < 2.5) {
    // Simulate roughness/metalness map
    float roughness = mod(vPosition.x * 10.0 + vPosition.y * 10.0 + vPosition.z * 10.0, 1.0);
    float metalness = sin(vPosition.x * 50.0 + time) * 0.5 + 0.5;
    color = vec3(roughness, metalness, 0.0);
  }
  // Quadrant 3: Lighting calculation (top-right)
  else {
    // Simple lighting calculation
    vec3 lightDir = normalize(vec3(sin(time), 1.0, cos(time)));
    float diffuse = max(dot(vNormal, lightDir), 0.0);
    vec3 baseColor = vec3(0.8, 0.8, 0.8);
    color = baseColor * diffuse;
  }
  
  // Add grid lines to separate quadrants
  float gridLine = step(0.98, mod(vUv.x, 0.5)) + step(0.98, mod(vUv.y, 0.5));
  color = mix(color, vec3(1.0), gridLine);
  
  gl_FragColor = vec4(color, 1.0);
}`
        },
        {
          title: "Pixelation Rasterization Shader",
          code: `// Vertex shader
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Fragment shader
uniform float time;
varying vec2 vUv;

void main() {
  // Create pixelated effect
  float pixelSize = 0.05;
  vec2 pixelatedUV = floor(vUv / pixelSize) * pixelSize;
  
  // Add grid pattern
  float gridLine = step(0.98, mod(vUv.x / pixelSize, 1.0)) + 
                  step(0.98, mod(vUv.y / pixelSize, 1.0));
  
  // Base color based on UV coordinates
  vec3 color = vec3(pixelatedUV.x, pixelatedUV.y, sin(time) * 0.5 + 0.5);
  
  // Apply grid lines
  color = mix(color, vec3(0.0), gridLine);
  
  gl_FragColor = vec4(color, 1.0);
}`
        }
      ],
      threeJsIntegration: {
        title: "Integration with Three.js",
        code: `// Example from RasterizationVisualization
const pixelMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: timeRef.current },
  },
  vertexShader: \`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  \`,
  fragmentShader: \`
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      // Create pixelated effect
      float pixelSize = 0.05;
      vec2 pixelatedUV = floor(vUv / pixelSize) * pixelSize;
      
      // Add grid pattern
      float gridLine = step(0.98, mod(vUv.x / pixelSize, 1.0)) + 
                      step(0.98, mod(vUv.y / pixelSize, 1.0));
      
      // Base color based on UV coordinates
      vec3 color = vec3(pixelatedUV.x, pixelatedUV.y, sin(time) * 0.5 + 0.5);
      
      // Apply grid lines
      color = mix(color, vec3(0.0), gridLine);
      
      gl_FragColor = vec4(color, 1.0);
    }
  \`,
  side: THREE.DoubleSide,
})`
      },
      dynamicShaderManipulation: {
        title: "Dynamic Shader Manipulation",
        code: `// Animation for pixel material from RasterizationVisualization
useFrame(({ clock }) => {
  if (!showDepthBuffer) {
    pixelMaterial.uniforms.time.value = clock.getElapsedTime()
  }
})

// Animate the split material from FragmentVisualization
useFrame(({ clock }) => {
  if (splitView) {
    splitMaterial.uniforms.time.value = clock.getElapsedTime()
  }
})`
      }
    },
    educationalValue: [
      "Illustrate complex graphics concepts visually",
      "Provide an interactive tool for computer graphics courses",
      "Help students understand the relationship between code and visual output",
      "Demonstrate how modern GPUs process 3D data",
      "Explore different lighting models and their effects on rendering"
    ]
  }

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline font-semibold text-lg">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline font-semibold text-lg">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-8 md:px-24 lg:px-32 xl:px-48 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="max-w-screen-md mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                  <Image 
                    src={project.images[0]}
                    alt="Three.js Rendering Pipeline Demo Preview"
                    width={1200}
                    height={675}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>About the Project</CardTitle>
                  <CardDescription className="whitespace-pre-wrap">
                    {formatDescription(project.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p><span className="font-semibold">Technology:</span> {project.technology}</p>
                    <p><span className="font-semibold">Framework:</span> {project.framework}</p>
                    <p><span className="font-semibold">Styling:</span> {project.styling}</p>
                    <p><span className="font-semibold">Language:</span> {project.language}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image 
                  src={img || "/placeholder.svg"} 
                  alt={`Project screenshot ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Roles and Responsibilities</h2>
          {project.roles.map((role, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold underline mb-2">{role.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {role.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Features</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Implementation Highlights</h2>
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Graphics Rendering Pipeline Overview</h3>
                <p className="mb-2">The 3D graphics rendering pipeline is a sequence of stages that transforms 3D scene data into a 2D image. The main stages are:</p>
                <ol className="list-decimal list-inside">
                  {project.technicalImplementation.pipelineOverview.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.vertexStage.title}</h3>
                <p>{project.technicalImplementation.vertexStage.description}</p>
                <ul className="list-disc list-inside my-2">
                  {project.technicalImplementation.vertexStage.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.vertexStage.code}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.geometryStage.title}</h3>
                <p>{project.technicalImplementation.geometryStage.description}</p>
                <ul className="list-disc list-inside my-2">
                  {project.technicalImplementation.geometryStage.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.geometryStage.code}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.rasterizationStage.title}</h3>
                <p>{project.technicalImplementation.rasterizationStage.description}</p>
                <ul className="list-disc list-inside my-2">
                  {project.technicalImplementation.rasterizationStage.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.rasterizationStage.code}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.fragmentStage.title}</h3>
                <p>{project.technicalImplementation.fragmentStage.description}</p>
                <ul className="list-disc list-inside my-2">
                  {project.technicalImplementation.fragmentStage.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.fragmentStage.code}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Custom GLSL Shader Implementation</h3>
                <p>This project extensively utilizes GLSL (OpenGL Shading Language) to create custom visual effects for each pipeline stage. GLSL allows us to directly program the GPU, providing both educational insight and visual fidelity.</p>
                
                {project.technicalImplementation.customShaders.map((shader, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-lg font-medium mb-2">{shader.title}</h4>
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                      <code>{shader.code}</code>
                    </pre>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.threeJsIntegration.title}</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.threeJsIntegration.code}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.technicalImplementation.dynamicShaderManipulation.title}</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
                  <code>{project.technicalImplementation.dynamicShaderManipulation.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Educational Value</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2">This project was designed with education in mind and can be used to:</p>
              <ul className="list-disc list-inside space-y-2">
                {project.educationalValue.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full resolution image"
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}