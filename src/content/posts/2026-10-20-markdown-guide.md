---
title: "Markdown 写法速查"
description: "标题、代码块、表格、引用、图片在这个主题里分别长什么样。"
date: 2026-10-20T20:00:00+08:00
category: "写作"
tags: ["Markdown", "博客"]
series: "博客使用指南"
---

这篇列出常用的 Markdown 写法，方便你看看它们在这个主题里的样子。文章里的二级标题会自动进入左侧目录。

## 文字

普通段落直接写。**加粗**、*斜体*、`行内代码`、[链接](https://astro.build) 都是标准写法。

> 引用用 `>` 开头。

## 代码块

代码块右上角有复制按钮，高亮主题是 github-light：

```ts
export function greet(name: string) {
  return `你好，${name}`;
}
```

## 表格

| 写法 | 效果 |
| --- | --- |
| `**文字**` | 加粗 |
| `` `代码` `` | 行内代码 |
| `[文字](地址)` | 链接 |

## 图片

图片放进 `public/` 目录，比如 `public/images/a.png`，文章里写 `![说明](/images/a.png)`。

## 系列

这篇和《部署到 GitHub Pages》的文件头里都写了 `series: "博客使用指南"`，所以两篇的开头会出现系列导航，按日期排序。
