---
title: CurseForge资源下载
icon: hugeicons:resources-add
description: 从CurseForge获取资源，下载资源。
---

# 初始化下载器
```cs
CurseforgeProvider curseforgeProvider = new();
```
# 获取资源
使用`CurseforgeSearchOptions`指定搜索的参数。调用搜索方法时将返回一个包含每个资源的列表。
```cs
var options = new CurseforgeSearchOptions {
    SearchFilter = "JEI", // 搜索文本
    SortOrder = SortOrder.Desc, // 升序（Asc）或降序（Desc）
    SortField = SortField.TotalDownloads // 陪列方式
};
var resources = await curseforgeProvider.SearchResourcesAsync(options);
```
# 从文件指纹获取资源文件
```cs
var files = await curseforgeProvider.GetResourceFilesByFingerprintsAsync([568671043]); // 传入文件指纹列表
```
