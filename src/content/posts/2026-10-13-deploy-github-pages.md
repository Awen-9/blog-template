---
title: "部署到 GitHub Pages"
description: "仓库怎么建、Pages 怎么开，推送之后多久能看到。"
date: 2026-10-13T20:00:00+08:00
category: "部署"
tags: ["GitHub Pages", "部署"]
series: "博客使用指南"
---

模板里已经带了 `.github/workflows/deploy.yml`，推送到 `main` 分支就会自动构建和发布，你只需要在 GitHub 上做两件事。

## 建仓库

仓库名写成 `你的用户名.github.io`，网站地址就是 `https://你的用户名.github.io`。`src/config.ts` 里的 `SITE.url` 要填同一个地址。

## 打开 Pages

进入仓库的 Settings → Pages，把 Source 选成 GitHub Actions。之后每次推送，Actions 页面会出现一次 Deploy 任务，一两分钟后网站就更新了。

## 出问题时

Deploy 任务失败的话，点进去看是哪一步报错。最常见的是文章文件头写错了，比如日期格式不对、`tags` 没写成数组。在本地跑一次 `npm run build` 能看到同样的错误信息。
