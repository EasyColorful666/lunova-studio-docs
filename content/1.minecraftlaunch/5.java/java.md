---
title: Java 运行时管理
icon: ri:java-line
description: ML 提供了完整的 Java 运行时检测和管理功能，帮助您正确选择和使用 Java 运行时。
---

## 列出系统中安装的 Java

```csharp [CSharp]
using MinecraftLaunch.Utilities;

var asyncJavas = JavaUtil.EnumerableJavaAsync();
await foreach (var java in asyncJavas)
    Console.WriteLine(java);

```

::alert{type="info" icon="lucide:info"}
  此方法不能 100% 获取所有的 Java，如果你的 Java 安装位置比较偏僻导致找不到就别问了
::

## 自动选择 Java

此功能可以根据选择的游戏版本自动选择合适的 Java 供游戏启动
```csharp [CSharp]
var javas = await JavaUtil.EnumerableJavaAsync().ToListAsync();

var minecraft = minecraftParser.GetMinecraft("1.12.2");
var java = minecraft.GetAppropriateJava(javas);

```

::alert{type="info" icon="lucide:info"}
此示例所用的 `ToListAsync` 方法需要单独安装包 `System.Linq.Async`
::

## 兼容性对照表

| Minecraft 版本 | 推荐 Java 版本 | 最低要求 |
|----------------|----------------|----------|
| 1.17+ | Java 17 | Java 16 |
| 1.16.5 | Java 8/11 | Java 8 |
| 1.12.2 及以下 | Java 8 | Java 8 |