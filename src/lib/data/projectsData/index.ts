import { ProjectData } from "@/lib/types/project";
import phantomFlashEN from "./phantom-flash/en";
import phantomFlashZH from "./phantom-flash/zh";

// 项目数据映射，按语言和项目ID组织
export const projectsData: Record<string, Record<string, ProjectData>> = {
  en: {
    "phantom-flash": phantomFlashEN,
    // 其他项目...
  },
  zh: {
    "phantom-flash": phantomFlashZH,
    // 其他项目...
  }
};

// 获取特定语言的所有项目
export const getProjectsByLocale = (locale: string): ProjectData[] => {
  const localeProjects = projectsData[locale] || projectsData["en"]; // 默认使用英文
  return Object.values(localeProjects);
};

// 获取特定语言的特定项目
export const getProjectByLocaleAndId = (locale: string, id: string): ProjectData | null => {
  const localeProjects = projectsData[locale] || projectsData["en"]; // 默认使用英文
  return localeProjects[id] || null;
};

// 获取所有可用的项目ID
export const getAllProjectIds = (): string[] => {
  // 使用英文数据作为基准获取所有项目ID
  return Object.keys(projectsData["en"]);
}; 