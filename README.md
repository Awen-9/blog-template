# Astro Earth Blog

[中文](#中文) · [English](#english)

一个开箱即用的个人博客模板：首页是一颗按真实时间计算晨昏线的地球，配一屏便当盒格子和底部 Dock；文章页带目录、阅读进度、全站搜索和评论。用 Astro 构建，推送到 GitHub 后自动发布到 GitHub Pages，不需要服务器。

<a id="中文"></a>

## 中文

### 功能一览

首页背后是一颗 three.js 地球，按你打开页面的这一刻计算太阳直射点，白天一面是真彩贴图，夜里一面亮着城市灯光。你所在的城市标一个橙色光点，地球可以拖着转，松手几秒后慢慢转回来，双击立刻转回。不支持 WebGL 的设备显示一个虚线圆占位，手机和省流量模式自动换成小贴图。

首页的格子依次是：名字和身份、家乡时区的时钟和太阳直射点、最新一篇、技术栈、最近几篇、近 12 个月每月写了几篇、常写的标签。底部 Dock 打开文章、分类、关于三个抽屉，抽屉状态写在地址栏的 `#posts` 这类 hash 里，刷新和前进后退都能回到原来的位置。从文章返回首页时，抽屉的滚动位置保留，刚读过的那篇会标出来，上次访问之后新发的文章标 new。

任何页面按 ⌘K（Windows 上是 Ctrl K）打开全站搜索，同时搜标题、标签、分类、摘要和正文，空格分隔的多个词要全部命中。首页的快捷键：

| 按键 | 作用 |
| --- | --- |
| `P` `C` `A` | 打开文章、分类、关于抽屉，再按一次收起 |
| `J` `K` 或方向键 | 在抽屉里上下移动 |
| `Enter` | 打开选中的文章 |
| `/` | 抽屉打开时过滤抽屉里的文章，否则打开全站搜索 |
| `Esc` | 先清空过滤，再关闭抽屉 |
| `R` `G` | 打开 RSS 和 GitHub |
| `?` | 快捷键说明，里面可以关掉单键快捷键 |

文章页有左侧目录（读到哪节高亮哪节）、顶部阅读进度条、代码块复制按钮（长代码可以切换横向滚动或自动换行）、小节链接、上一篇下一篇、按标签推荐的相关文章和系列导航。超过一年没更新的文章，开头会提示内容可能过时。另外还有归档、分类、标签、关于、404 页面和 `/atom.xml` 订阅源。

整个站只有浅色主题，不接任何统计。评论用 giscus，没填配置时页面不加载任何外部脚本。

### 准备环境

需要 Node.js 22.23 或更新的版本，以及 Git。

macOS：

1. 安装 Homebrew（已经装过可以跳过），在"终端"里运行 https://brew.sh 首页上的那行安装命令。
2. 安装 Node 和 Git：`brew install node git`。
3. 检查版本：`node -v` 应该显示 v22.23 或更高。

Windows：

1. 到 https://nodejs.org 下载 LTS 版的安装包（.msi），一路默认安装。
2. 到 https://git-scm.com/download/win 下载 Git 安装包，一路默认安装。
3. 打开 PowerShell 检查版本：`node -v`、`git --version`。

下面的命令在 macOS 的终端和 Windows 的 PowerShell 里都一样。

### 本地运行

```bash
cd 模板所在的文件夹
npm install       # 第一次运行时安装依赖
npm run dev       # 打开 http://localhost:4321 ，改文件后页面自动刷新
npm run build     # 构建到 dist/ 目录
npm run preview   # 预览构建结果
```

### 改成你自己的

个人信息都集中在 `src/config.ts`，其他文件不用动：

| 配置 | 说明 |
| --- | --- |
| `SITE.url` | 站点地址，比如 `https://your-name.github.io` |
| `SITE.title` `SITE.author` `SITE.description` | 标题、作者、站点描述，用在页面标题、RSS 和搜索引擎摘要里 |
| `SITE.github` `SITE.githubName` | GitHub 主页地址和用户名 |
| `SITE.brand` `SITE.handle` | 首页左上角的大字（`\n` 换行）和它上面的小标签 |
| `PROFILE` | 身份、关注方向、技术栈、在深入什么、关于页的介绍段落 |
| `HOME` | 城市名、经纬度（东经北纬为正，西经南纬为负）、时区 |
| `GISCUS` | 评论配置，见下文 |

经纬度可以在地图应用里长按那个位置查到。时区用 IANA 名称，比如 `Asia/Shanghai`、`Asia/Tokyo`、`America/New_York`。

网站图标是 `public/favicon.svg`，换成你自己的 SVG 即可。配色在 `src/styles/theme.css` 开头的 `:root` 里，荧光黄是 `--neon`，粉色是 `--pink`。

### 写文章

在 `src/content/posts/` 下新建一个 `.md` 文件，文件名按 `YYYY-MM-DD-slug.md` 来写，它决定文章地址：`2026-10-27-hello-world.md` 对应 `/2026/10/27/hello-world/`。slug 可以用中文，但最好不要带空格。

文件开头是一段文件头：

```yaml
---
title: "文章标题"
description: "一句话摘要，显示在列表、搜索结果和 RSS 里"
date: 2026-10-27T20:00:00+08:00
updated: 2026-10-28T10:00:00+08:00   # 可选，写了会显示更新日期
category: "随笔"                      # 一篇文章一个分类，不写默认是"随笔"
tags: ["Astro", "博客"]               # 可以写多个，必须是数组
series: "系列名"                      # 可选，同名的文章串成系列，按日期排序
draft: true                           # 可选，草稿只在 npm run dev 时显示
---
```

正文是标准 Markdown，二级标题（`##`）会进入目录。图片放进 `public/` 目录，比如 `public/images/a.png`，文章里写 `![说明](/images/a.png)`。模板自带的三篇示例文章可以直接删掉。

从新建文件到发布、修改的完整步骤，以及一篇年终总结的例子，见 [docs/writing.md](docs/writing.md)。

### 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库，名字写成 `你的用户名.github.io`。
2. 把 `src/config.ts` 里的 `SITE.url` 改成 `https://你的用户名.github.io`。
3. 在模板文件夹里推送代码：

   ```bash
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git push -u origin main
   ```

4. 进入仓库的 Settings → Pages，把 Source 选成 GitHub Actions。
5. 打开仓库的 Actions 页面，等 Deploy 任务变绿，一两分钟后访问 `https://你的用户名.github.io`。

之后每次 `git push` 到 `main` 都会自动重新发布。站里的链接和资源都按根路径 `/` 写的，所以需要发布在域名根目录：用 `用户名.github.io` 仓库，或者给其他仓库配一个自定义域名（在 `public/` 下放一个内容是域名的 `CNAME` 文件，并把 `SITE.url` 改成这个域名）。

模板没有附带 `package-lock.json`。第一次 `npm install` 后会生成一个，建议一起提交，这样 CI 上装的依赖版本和你本地一致。

### 开启评论

评论用 [giscus](https://giscus.app)，评论内容存在仓库的 GitHub Discussions 里。

1. 仓库必须是公开的。在仓库的 Settings → General → Features 里勾选 Discussions。
2. 安装 giscus 应用：https://github.com/apps/giscus ，授权给这个仓库。
3. 打开 https://giscus.app ，填入仓库名，Discussion 分类选 Announcements，页面下方生成的代码里能找到 `data-repo-id` 和 `data-category-id`。
4. 把这两个值填进 `src/config.ts` 的 `GISCUS.repoId` 和 `GISCUS.categoryId`，`GISCUS.repo` 改成 `你的用户名/仓库名`，重新发布。

### 目录结构

```
src/config.ts            个人信息和所有配置
src/content/posts/       文章
src/pages/               页面，index.astro 是首页，[y]/[m]/[d]/[slug].astro 是文章页
src/components/          文章列表、分类分组、关于、搜索框
src/layouts/             Base 是 HTML 外壳，Page 是子页面外壳
src/scripts/             earth.ts 地球，runtime.ts 首页抽屉和时钟，search.ts 全站搜索
src/styles/              base.css 基础排版，theme.css 主题
public/                  原样复制到网站根目录的文件，地球贴图在 textures/
docs/                    写文章的操作手册
.github/workflows/       自动发布到 GitHub Pages 的配置
```

### 常见问题

**`npm install` 很慢或失败**，可以换国内镜像：`npm config set registry https://registry.npmmirror.com`。

**构建报错说文件头不对**，通常是日期格式写错了，或者 `tags` 没写成 `["a", "b"]` 这样的数组。报错信息里会写是哪个文件。

**首页地球不显示**，先确认浏览器支持 WebGL（https://get.webgl.org ），不支持时会显示一个虚线圆。

**Windows 上快捷键显示 Ctrl K**，这是按系统自动换的，按 Ctrl K 就能打开搜索。

地球贴图来自 three.js 示例和 Solar System Scope，许可见 `public/textures/ATTRIBUTION.md`。

<a id="english"></a>

## English

### Features

The home page sits on a three.js Earth that computes the subsolar point for the moment you open the page: true-colour imagery on the day side, city lights on the night side. Your home city is marked with an orange dot. Drag the globe to spin it; it eases back home a few seconds after you let go, and a double-click sends it back at once. Devices without WebGL get a dashed-circle placeholder, and phones or Data Saver mode load smaller textures.

The home tiles show your name and role, a clock in your home time zone with the current subsolar point, the latest post, your tech stack, recent posts, posts per month over the last 12 months, and your most-used tags. The dock at the bottom opens three drawers (posts, categories, about). Drawer state lives in the URL hash (`#posts` and so on), so reload and back/forward land in the same place. Coming back from a post restores the drawer's scroll position and marks the post you just read; posts published since your last visit are tagged new.

Press ⌘K (Ctrl K on Windows) on any page to search titles, tags, categories, descriptions and full text. Space-separated words must all match. Home page shortcuts:

| Key | Action |
| --- | --- |
| `P` `C` `A` | Open the posts, categories or about drawer; press again to close |
| `J` `K` or arrow keys | Move up and down inside a drawer |
| `Enter` | Open the selected post |
| `/` | Filter the open drawer, or open site search when no drawer is open |
| `Esc` | Clear the filter, then close the drawer |
| `R` `G` | Open RSS and GitHub |
| `?` | Shortcut help, with a switch to turn single-key shortcuts off |

Post pages have a table of contents that highlights the current section, a reading progress bar, copy buttons on code blocks (long code can scroll sideways or wrap to the page width), section links, previous/next links, related posts by shared tags, and series navigation. Posts not updated for over a year show a note that they may be out of date. There are also archive, category, tag, about and 404 pages, plus an `/atom.xml` feed.

The site is light-theme only and has no analytics. Comments use giscus; until you fill in its settings, no external script is loaded.

The UI text is in Chinese. To translate it, edit the strings in `src/pages/`, `src/components/` and `src/layouts/`.

### Requirements

Node.js 22.23 or newer, and Git.

macOS:

1. Install Homebrew if you don't have it: run the install command from https://brew.sh in Terminal.
2. Install Node and Git: `brew install node git`.
3. Check: `node -v` should print v22.23 or higher.

Windows:

1. Download the LTS installer (.msi) from https://nodejs.org and install with the defaults.
2. Download Git from https://git-scm.com/download/win and install with the defaults.
3. Open PowerShell and check: `node -v`, `git --version`.

The commands below are the same in macOS Terminal and Windows PowerShell.

### Run locally

```bash
cd path/to/this/folder
npm install       # first time only
npm run dev       # http://localhost:4321, reloads on save
npm run build     # build into dist/
npm run preview   # preview the build
```

### Make it yours

Everything personal is in `src/config.ts`:

| Setting | Meaning |
| --- | --- |
| `SITE.url` | Site URL, e.g. `https://your-name.github.io` |
| `SITE.title` `SITE.author` `SITE.description` | Used in page titles, the feed and search-engine snippets |
| `SITE.github` `SITE.githubName` | Your GitHub profile URL and username |
| `SITE.brand` `SITE.handle` | The large text in the top-left tile (`\n` for a line break) and the small label above it |
| `PROFILE` | Role, focus, stack, what you're learning, and the about-page paragraphs |
| `HOME` | City name, longitude and latitude (east and north positive), IANA time zone such as `Europe/London` |
| `GISCUS` | Comment settings, see below |

The favicon is `public/favicon.svg`. Colours are in the `:root` block at the top of `src/styles/theme.css`: `--neon` is the yellow, `--pink` the pink.

### Writing posts

Create a `.md` file in `src/content/posts/` named `YYYY-MM-DD-slug.md`. The filename sets the URL: `2026-10-27-hello-world.md` becomes `/2026/10/27/hello-world/`. Avoid spaces in the slug.

Each post starts with front matter:

```yaml
---
title: "Post title"
description: "One-line summary for lists, search results and the feed"
date: 2026-10-27T20:00:00+08:00
updated: 2026-10-28T10:00:00+08:00   # optional, shows an "updated" date
category: "Notes"                     # one per post
tags: ["Astro", "Blog"]               # must be an array
series: "Series name"                 # optional, posts sharing it are linked in date order
draft: true                           # optional, drafts only show in npm run dev
---
```

The body is standard Markdown, and `##` headings go into the table of contents. Put images in `public/`, e.g. `public/images/a.png`, and reference them as `![alt](/images/a.png)`. Delete the three sample posts whenever you like.

A step-by-step guide covering everything from creating the file to publishing and editing, with a full example, is in [docs/writing.md](docs/writing.md) (Chinese only).

### Deploy to GitHub Pages

1. Create a GitHub repository named `your-name.github.io`.
2. Set `SITE.url` in `src/config.ts` to `https://your-name.github.io`.
3. Push the code from this folder:

   ```bash
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/your-name/your-name.github.io.git
   git push -u origin main
   ```

4. In the repository, go to Settings → Pages and set Source to GitHub Actions.
5. Wait for the Deploy run on the Actions tab to turn green, then open `https://your-name.github.io`.

Every push to `main` redeploys. Links and assets assume the site is served from the domain root, so use a `your-name.github.io` repository, or give another repository a custom domain (add a `public/CNAME` file containing the domain and set `SITE.url` to it).

The template ships without `package-lock.json`. Your first `npm install` creates one; commit it so CI installs the same versions you have locally.

### Comments

Comments use [giscus](https://giscus.app) and are stored in the repository's GitHub Discussions.

1. The repository must be public. Enable Discussions under Settings → General → Features.
2. Install the giscus app at https://github.com/apps/giscus for this repository.
3. On https://giscus.app, enter the repository and pick the Announcements category; the generated snippet contains `data-repo-id` and `data-category-id`.
4. Put them into `GISCUS.repoId` and `GISCUS.categoryId` in `src/config.ts`, set `GISCUS.repo` to `your-name/repo`, and redeploy.

### Project layout

```
src/config.ts            all personal settings
src/content/posts/       posts
src/pages/               routes; index.astro is the home page, [y]/[m]/[d]/[slug].astro the post page
src/components/          post list, category groups, about, search dialog
src/layouts/             Base is the HTML shell, Page the sub-page shell
src/scripts/             earth.ts globe, runtime.ts home drawers and clock, search.ts site search
src/styles/              base.css typography, theme.css theme
public/                  copied as-is to the site root; globe textures in textures/
docs/                    guide to writing posts
.github/workflows/       GitHub Pages deployment
```

### Troubleshooting

**The build complains about front matter.** Usually a malformed date, or `tags` not written as an array like `["a", "b"]`. The error names the file.

**The globe doesn't show.** Check WebGL support at https://get.webgl.org; without it you get a dashed-circle placeholder.

Globe textures come from the three.js examples and Solar System Scope; see `public/textures/ATTRIBUTION.md` for licences.
