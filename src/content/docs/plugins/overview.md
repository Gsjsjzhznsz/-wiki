---
title: 插件总览
description: 一秋小镇全部插件分类总览
---

# 插件总览

> 一秋小镇 | 全部插件分类一览

一秋小镇服务器共安装了 **48** 个插件，覆盖了版本兼容、经济商店、领地保护、传送家园、社交聊天、奖励系统、性能优化、世界管理、视觉展示和基础服务等多个方面。以下按类别对所有插件进行详细分组介绍。

[!TIP]
点击各插件名称旁的链接可查看该插件的详细 Wiki 页面。部分插件可能暂无独立页面，管理员会逐步完善文档。每个插件页面底部均附有**官方文档链接**，可查阅更详细的使用说明。

---

## 🔌 版本兼容与跨平台

处理不同 Minecraft 版本客户端的连接兼容性，支持跨平台游戏。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| ViaVersion | （核心） | 核心版本转换，支持新版客户端连接 |
| ViaBackwards | （核心） | 向后兼容，支持旧版客户端连接 |
| ViaRewind | 4.1.4-SNAPSHOT | 深层旧版协议回退支持 |
| ViaRewind-Legacy-Support | （核心） | 更早期的旧版协议支持 |
| AutoViaUpdater | 10.1.0 | Via 系列插件自动更新 |
| [ViaAprilFools](/docs/misc/viaaprilfools) | 4.2.3-SNAPSHOT | 愚人节版本彩蛋支持 |
| Geyser-Spigot | （核心） | 基岩版客户端连接支持 |
| GeyserUpdater | 1.6.4 | Geyser 自动更新 |
| ProtocolLib | （核心） | 协议库，其他插件的基础依赖 |
| packetevents | 2.13.0 | 数据包事件处理库 |

[!NOTE]
ViaVersion 系列和 Geyser 是一秋小镇跨版本兼容的核心。无论你使用 Java 版还是基岩版客户端，也无论你使用的是较新还是较旧的版本，都可以通过这些插件正常连接服务器。

---

## 💰 经济与商店

管理游戏内经济系统、玩家交易和商店功能。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| VaultUnlocked | 2.20.2 | 经济/权限/聊天 API 统一接口 |
| XConomy | 2.26.3 | 轻量级经济系统，管理玩家余额 |
| QuickShop-Hikari | 6.3.0.1 | 玩家商店系统，支持创建个人商店 |
| UltimateShop | 4.7.4 | 服务器商店系统，管理员配置商品 |
| ExoShopkeepers | （扩展） | NPC 商人扩展，增强商店功能 |
| InstaRestock | 1.1.1 | 村民交易自动补货 |

[!TIP]
你可以在主世界找到其他玩家创建的 QuickShop 商店进行买卖交易，也可以通过 `/ushop` 命令或 zMenu 菜单打开 UltimateShop 服务器商店购买各种物品和特殊道具。

---

## 🛡️ 领地与安全

保护玩家的建筑和领地免受其他玩家的破坏，并提供安全防护。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [Dominion](/docs/territory/dominion) | 4.9.4-release-lite | 轻量级领地保护系统 |
| [Orebfuscator](/docs/admin/orebfuscator) | 5.6.1 | 矿石混淆反 X 射线 |

---

## 🏠 传送与家园

管理玩家的传送、家园设置和导航功能。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [HuskHomes](/docs/territory/huskhomes) | 4.11 | 玩家家园与传送点管理系统 |
| HuskHomesGUI | 2.5.1 | HuskHomes 的 GUI 图形界面 |
| [CompassCommand](/docs/territory/compass) | 1.2JE17 | 指南针导航命令 |

---

## 💬 社交与聊天

管理服务器内的聊天系统和社区互动功能。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [FairyChat](/docs/social/fairychat) | 0.7.7 | 聊天优化与多频道系统 |
| [EasyBot](/docs/social/easybot) | 2.4.0 | 服务器智能机器人 |

---

## 🎁 奖励与界面

管理签到奖励、在线奖励、抽奖和快捷菜单界面。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [LiteSignIn](/docs/rewards/litesignin) | 1.9.0.0 | 每日签到奖励系统 |
| [LushRewards](/docs/rewards/lushrewards) | 3.3.2 | 在线时间奖励系统 |
| [zMenu](/docs/rewards/zmenu) | 1.1.1.4 | 自定义快捷 GUI 菜单 |
| [BlueDream Lottery](/docs/misc/lottery) | 1.2.2 | 蓝梦抽奖系统 |

---

## 🔐 认证与权限

管理玩家登录验证和权限分组。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [AuthMe](/docs/admin/authme) | 5.7.0-FORK | 玩家登录验证（正版/离线模式） |
| [LuckPerms](/docs/admin/luckperms) | 5.5.49 | 高级权限管理系统 |

[!WARNING]
首次进入服务器的玩家需要使用 `/register <密码> <确认密码>` 命令注册账号，之后每次登录使用 `/login <密码>` 进行验证。请务必牢记你的密码，丢失密码将需要联系管理员重置。

---

## ⚡ 性能优化与反作弊

提升服务器运行性能和防止作弊行为。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [GrimAC](/docs/admin/grimac) | 2.3.74 | GrimAC 反作弊系统 |
| PerfoBooster | 2.9 | 服务器性能提升优化 |
| [SeeMore](/docs/misc/seemore) | 1.0.2 | 视距渲染优化 |
| [Chunky](/docs/core/chunky) | 1.5.3 | 区块预生成工具 |
| DynRegionPerf | （核心） | 动态区域性能优化 |
| [Sentry](/docs/admin/sentry) | 1.5.4 | 错误监控与报告系统 |

[!NOTE]
GrimAC 是一秋小镇的反作弊系统，它会监控玩家的游戏行为并检测可疑的作弊操作。如果你的操作被系统误判，请联系管理员进行申诉。

---

## 🗺️ 世界管理与建造

管理多世界系统和世界编辑功能。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [Worlds](/docs/misc/worlds) | 4.4.0 | 多世界管理系统 |
| [WorldEdit](/docs/tools/worldedit) | 7.4.5 | 世界编辑工具 |
| WorldEditSelectionVisualizer | 2.1.10 | WorldEdit 选区可视化 |
| SuperHarvest | （核心） | 快速采集增强 |

---

## 🎨 视觉与展示

增强服务器的视觉效果和地图展示。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [squaremap](/docs/tools/squaremap) | 1.3.13 | 在线网页地图 |
| [FancyNpcs](/docs/tools/fancynpcs) | 2.11.0 | 自定义 NPC 系统 |
| [SkinsRestorer](/docs/tools/skinsrestorer) | （核心） | 皮肤恢复与管理 |

---

## 🔧 基础服务与杂项

提供各类基础功能服务和杂项工具。

| 插件名称 | 版本 | 说明 |
| :--- | :--- | :--- |
| [MiniMOTD](/docs/misc/minimotd) | 2.2.4 | 服务器列表 MOTD 与图标 |
| [TAB](/docs/tools/tab) | 6.1.0 | Tab 列表自定义 |
| PlaceholderAPI | 2.12.3 | 变量占位符 API |
| item-nbt-api | 2.16.0 | 物品 NBT 数据操作库 |
| [vanish++](/docs/admin/vanish) | 1.1.8 | 隐身模式增强 |
| [OmniTrack](/docs/admin/omnitrack) | 1.0-beta | 全能行为追踪系统 |

[!TIP]
PlaceholderAPI 是许多插件的依赖项，它提供了大量的变量占位符，可以在聊天、Tab 列表、计分板等多个地方显示动态信息。你可以通过 `/papi list` 命令查看所有可用的变量。

---

## 📊 插件统计

| 类别 | 插件数量 | 占比 |
| :--- | :--- | :--- |
| 版本兼容与跨平台 | 10 | 20.8% |
| 经济与商店 | 6 | 12.5% |
| 领地与安全 | 2 | 4.2% |
| 传送与家园 | 3 | 6.3% |
| 社交与聊天 | 2 | 4.2% |
| 奖励与界面 | 4 | 8.3% |
| 认证与权限 | 2 | 4.2% |
| 性能优化与反作弊 | 6 | 12.5% |
| 世界管理与建造 | 4 | 8.3% |
| 视觉与展示 | 3 | 6.3% |
| 基础服务与杂项 | 6 | 12.5% |
| **合计** | **48** | **100%** |