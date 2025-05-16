import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // 确保locale有值，如果没有使用默认值'zh'
  const safeLocale = locale || 'zh';
  
  try {
    return {
      locale: safeLocale as string,
      messages: (await import(`./messages/${safeLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Error loading messages for locale: ${safeLocale}`, error);
    // 如果加载失败，尝试使用默认语言
    return {
      locale: 'zh',
      messages: (await import('./messages/zh.json')).default
    };
  }
}); 