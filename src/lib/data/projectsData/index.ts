import { ProjectData } from "@/lib/types/project";
import phantomFlashEN from "./phantom-flash/en";
import phantomFlashZH from "./phantom-flash/zh";
import threeJSPipelineEN from "./threejs-rendering-pipeline/en";
import threeJSPipelineZH from "./threejs-rendering-pipeline/zh";
import apocalypsePartyEN from "./apocalypse-party/en";
import apocalypsePartyZH from "./apocalypse-party/zh";
import lightCatRunEN from "./light-cat-run/en";
import lightCatRunZH from "./light-cat-run/zh";
import ticTacToeEN from "./tic-tac-toe/en";
import ticTacToeZH from "./tic-tac-toe/zh";
import grapplingHookDemoEN from "./grappling-hook-demo/en";
import grapplingHookDemoZH from "./grappling-hook-demo/zh";
import fantasyRpgDemoEN from "./fantasy-rpg-demo/en";
import fantasyRpgDemoZH from "./fantasy-rpg-demo/zh";
import boomPartyEN from "./boom-party/en";
import boomPartyZH from "./boom-party/zh";

// 项目数据映射，按语言和项目ID组织
export const projectsData: Record<string, Record<string, ProjectData>> = {
  en: {
    "threejs-rendering-pipeline": threeJSPipelineEN,
    "phantom-flash": phantomFlashEN,
    "light-cat-run": lightCatRunEN,
    "apocalypse-party": apocalypsePartyEN,
    "boom-party": boomPartyEN,
    "fantasy-rpg-demo": fantasyRpgDemoEN,
    "grappling-hook-demo": grapplingHookDemoEN,
    "tic-tac-toe": ticTacToeEN,
  },
  zh: {
    "threejs-rendering-pipeline": threeJSPipelineZH,
    "phantom-flash": phantomFlashZH,
    "light-cat-run": lightCatRunZH,
    "apocalypse-party": apocalypsePartyZH,
    "tic-tac-toe": ticTacToeZH,
    "grappling-hook-demo": grapplingHookDemoZH,
    "fantasy-rpg-demo": fantasyRpgDemoZH,
    "boom-party": boomPartyZH,
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