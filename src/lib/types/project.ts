export interface ProjectRole {
  title: string;
  responsibilities: string[];
}

export interface MediaItem {
  type: 'image' | 'video' | 'code';
  src: string; // URL for image/video, or the code string itself
  alt?: string; // Alt text for images
  language?: string; // For code snippets, e.g., 'typescript', 'glsl'
  caption?: string;
}

export interface ProjectSectionContent {
  type: 'paragraph' | 'list' | 'heading' | 'mediaGroup' | 'markdown';
  text?: string; // For paragraph, heading, markdown
  items?: string[]; // For list
  level?: 1 | 2 | 3 | 4; // For heading
  media?: MediaItem[]; // For a group of images/videos/code snippets
  markdown?: string; // For markdown content
}

export interface ProjectSection {
  id: string; // e.g., 'overview', 'screenshots', 'roles', 'technical-details', 'design-highlights'
  title: string; // Section title, e.g., "Screenshots", "Role(s) and Responsibilities"
  layout?: 'single-column' | 'two-column-image-left' | 'two-column-image-right'; // Optional layout hint
  content: ProjectSectionContent[]; // Flexible content blocks within a section
  hideInDetailPage?: boolean; // 是否在详情页中隐藏该部分
}

export interface ProjectData {
  id: string; // Unique identifier (e.g., "1", "phantom-flash")
  title: string;
  shortDescription: string; // For portfolio page card
  thumbnailImage: string; // For portfolio page card
  
  // Detailed page content
  heroMedia?: MediaItem; // Main image or video at the top of the detail page
  overviewDescription: string; // Longer description for the detail page
  
  projectInfo: {
    technology?: string;
    genre?: string;
    engine?: string;
    language?: string;
    platform?: string;
    teamsize?: string;
  };

  links?: {
    liveDemo?: string;
    github?: string;
    itchio?: string;
    taptap?: string;
    steam?: string;
    bilibili?: string;
  };
  
  mainRole?: string;
  features?: string[]; // Simple list of features
  
  // For more complex, structured content
  detailedSections: ProjectSection[];
} 