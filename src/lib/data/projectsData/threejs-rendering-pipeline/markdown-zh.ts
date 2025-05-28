// 角色与职责Markdown内容
export const rolesMarkdown = `
# 全栈开发

- 使用Three.js设计和实现了动态的3D渲染管线的可视化效果
- 创建了多种React交互式UI组件与响应式Web界面
- 实现了自定义GLSL着色器以展示多种后处理效果
`;

// 项目特点的Markdown内容
export const featuresMarkdown = `
- **交互式渲染管线可视化:** 使用Three.js进行3D渲染和WebGL集成，通过响应式页面设计与可交互的3D场景设计，直观展示渲染管线的流程。
- **完整渲染阶段展示:** 模拟了顶点着色、片元着色、光栅化及后处理阶段的全流程效果。同时可通过自定义的GLSL着色器实现更多后处理效果。
- **实时光照参数调整:** 实时修改光照参数和模型属性。可在不同光照预设与不同着色模型间实时切换。
- **全面的注释信息:** 通过UI中的Tip组件详细介绍了管线中每个阶段的实现原理，并提供代码示例。

`; 

export const highlightsMarkdown = `
## 图形渲染管线概览

3D图形渲染管线是将3D场景数据转换为2D图像的一系列阶段。主要阶段包括：

1.  **顶点处理**: 将顶点从3D物体空间转换到2D屏幕空间。
2.  **几何处理**: 处理图元装配、裁剪和剔除。
3.  **光栅化**: 将矢量信息转换为像素（片段）。
4.  **片元处理**: 通过光照计算和纹理映射确定每个像素的颜色。
5.  **输出合并**: 将片段颜色与帧缓冲区合并。

---

## 顶点阶段可视化

此实现展示了顶点在渲染前的处理方式。用户可以观察：

-   模型、视图和投影变换
-   顶点着色器操作
-   几何体的线框表示

~~~typescript
vertexShader: \`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
\`
~~~

---

## 几何处理

此阶段演示了：

-   图元装配（顶点如何组成三角形）
-   背面剔除
-   视锥体裁剪

~~~typescript
// PrimitiveVisualization component applies these materials
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
}
~~~

---

## 光栅化阶段

可视化几何图元如何转换为片段（潜在像素）：

-   三角形遍历
-   透视校正插值
-   屏幕空间变换

~~~typescript
// Rasterization stage pixel visualization shader
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
\`
~~~

---

## 片元阶段

展示像素级别的操作：

-   纹理采样
-   颜色计算
-   光照计算（Phong模型和PBR）
-   材质属性应用

~~~typescript
// Fragment stage shader with quadrant visualization
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
\`
~~~

---

## 自定义GLSL着色器实现

本项目广泛利用**GLSL (OpenGL着色语言)** 为每个管线阶段创建自定义视觉效果。GLSL使我们能够直接编程GPU，从而提供教育性洞察和视觉保真度。

### 片元可视化象限着色器

~~~glsl
// Vertex shader
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
}
~~~

### 像素化光栅化着色器

~~~glsl
// Vertex shader
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
}
~~~

### 与Three.js集成

~~~typescript
// Example from RasterizationVisualization
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
})
~~~

`