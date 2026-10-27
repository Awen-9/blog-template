// 站点的全部个人信息都在这里，改完重新构建即可
export const SITE = {
  /** 站点地址。用户名.github.io 仓库填 https://用户名.github.io */
  url: 'https://your-name.github.io',
  title: 'My Blog',
  author: 'Your Name',
  description: '一个用 Astro 搭的个人博客。',
  github: 'https://github.com/your-name',
  githubName: 'your-name',
  /** 首页左上角的大字，用 \n 换行 */
  brand: 'My\nBlog',
  /** 首页左上角那一格的路径标签 */
  handle: '~/me',
};

// 首页技术栈格子和关于页共用
export const PROFILE = {
  role: '开发者，在北京，主要写 TypeScript',
  focus: '前端、工程化、可视化',
  stack: ['TypeScript', 'Astro', 'Node.js', 'CSS', 'Git'],
  learning: 'WebGL、浏览器渲染原理',
  intro: ['你好，这里是我的博客。', '这段介绍在 src/config.ts 的 PROFILE.intro 里，一项是一段。'],
};

// 地球上的橙色光点、双击回正的位置，以及首页时钟用的时区
export const HOME = {
  city: '北京',
  lon: 116.4,
  lat: 39.9,
  timeZone: 'Asia/Shanghai',
};

// giscus 评论：在 https://giscus.app 生成配置后填上 repoId 和 categoryId 才会显示，留空时不加载任何外部脚本
export const GISCUS = {
  repo: 'your-name/your-name.github.io',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
};
