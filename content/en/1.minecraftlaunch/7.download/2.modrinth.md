---
title: Modrinth资源下载
icon: hugeicons:resources-add
description: 从Modrinth获取资源，下载资源。
---

# 初始化下载器
```cs
ModrinthProvider modrinthProvider = new();
```
# 获取资源
```cs
var tokiModInfo = (await modrinthProvider.SearchAsync("Toki")).First();
```
# 从文件指纹获取资源文件
```cs
var tokiFiles = await modrinthProvider.GetModFilesByProjectIdAsync(tokiModInfo.ProjectId);
```
