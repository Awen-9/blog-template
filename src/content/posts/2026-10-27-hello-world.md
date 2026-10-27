---
title: "你好，世界"
description: "模板自带的第一篇文章，顺便说明文章文件怎么写。删掉它，开始写你自己的。"
date: 2026-10-27T10:00:00+08:00
category: "随笔"
tags: ["博客", "开始"]
---

这是模板自带的示例文章，放在 `src/content/posts/` 下面。文件名 `2026-10-27-hello-world.md` 决定了它的地址 `/2026/10/27/hello-world/`。

## 文件头

每篇文章开头是一段 YAML，夹在两行 `---` 之间：

```yaml
---
title: "你好，世界"
description: "显示在列表、搜索结果和 RSS 里的一句话摘要"
date: 2026-10-27T10:00:00+08:00
category: "随笔"
tags: ["博客", "开始"]
---
```

`updated`、`series`、`draft` 是可选的。写了 `updated`，文章页会显示更新日期；`draft: true` 的文章只在本地 `npm run dev` 时能看到，构建发布时会被跳过。

## 接下来

1. 打开 `src/config.ts`，把名字、简介、城市坐标换成你自己的。
2. 删掉这几篇示例文章。
3. 按 README 里的步骤推送到 GitHub。

在任何页面按 ⌘K（Windows 上是 Ctrl K）可以全站搜索，首页按 `?` 可以看全部快捷键。
