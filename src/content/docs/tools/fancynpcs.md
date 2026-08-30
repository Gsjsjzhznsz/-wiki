---
title: FancyNpcs 自定义NPC
description: FancyNpcs自定义NPC系统
---

# FancyNpcs 自定义NPC

FancyNpcs 是一秋小镇服务器使用的自定义 NPC 插件，支持创建具有自定义皮肤、动作、交互菜单的非玩家角色（NPC）。无论是用于信息指引、商店交互还是纯装饰，FancyNpcs 都能提供丰富的自定义选项。

## 功能概述

| 特性 | 说明 |
|:-----|:-----|
| 自定义皮肤 | 支持通过玩家名或 URL 加载任意皮肤 |
| 动作系统 | NPC 可执行站立、行走、挥手、舞蹈等动作 |
| 交互事件 | 右键点击 NPC 触发命令、消息或打开菜单 |
| 碰撞箱控制 | 可设置 NPC 是否可穿过 |
| 发光效果 | 支持为 NPC 添加荧光效果 |
| 全息文字 | NPC 头顶可显示自定义全息文本 |
| 隐身支持 | 可将 NPC 身体设为半透明以突出装备 |
| Folia 兼容 | 完全适配 Folia 多线程架构 |

[!TIP]
FancyNpcs 创建的 NPC 是纯客户端渲染的实体，不会对服务器物理引擎产生额外负担。即便在服务器中放置上百个 NPC，也不会影响 TPS。

## 创建与管理命令

### NPC 基础命令

| 命令 | 说明 | 权限 |
|:-----|:-----|:-----|
| `/npc create <名称>` | 在当前位置创建 NPC | `fancynpcs.command.create` |
| `/npc remove <ID>` | 删除指定 NPC | `fancynpcs.command.remove` |
| `/npc list` | 列出所有 NPC | `fancynpcs.command.list` |
| `/npc select <ID>` | 选中 NPC 以进行后续编辑 | `fancynpcs.command.select` |
| `/npc info` | 查看当前选中 NPC 的详细信息 | `fancynpcs.command.info` |
| `/npc teleport <ID>` | 传送到指定 NPC 位置 | `fancynpcs.command.teleport` |
| `/npc movehere` | 将选中的 NPC 移动到当前位置 | `fancynpcs.command.movehere` |
| `/npc copy <ID>` | 复制指定 NPC 到当前位置 | `fancynpcs.command.copy` |

### NPC 外观自定义命令

| 命令 | 说明 | 示例 |
|:-----|:-----|:-----|
| `/npc skin <玩家名>` | 通过正版玩家名设置皮肤 | `/npc skin Notch` |
| `/npc skin url <链接>` | 通过 URL 设置自定义皮肤 | `/npc skin url https://...` |
| `/npc turn <偏航角>` | 设置 NPC 朝向 | `/npc turn 90` |
| `/npc glow <颜色>` | 设置发光颜色 | `/npc glow #FF0000` |
| `/npc glow remove` | 移除发光效果 | — |
| `/npc holotext <内容>` | 设置头顶全息文字 | `/npc holotext 欢迎来到一秋小镇` |
| `/npc holotext remove` | 移除头顶全息文字 | — |
| `/npc scale <大小>` | 设置 NPC 缩放比例 | `/npc scale 1.5` |
| `/npc invisible <true/false>` | 设置是否半透明 | `/npc invisible true` |
| `/npc collision <true/false>` | 设置是否有碰撞箱 | `/npc collision false` |

### NPC 动作命令

| 命令 | 说明 |
|:-----|:-----|
| `/npc pose <动作>` | 设置 NPC 的动作/姿势 |
| `/npc emote <表情>` | 设置 NPC 表情 |
| `/npc lookat <目标>` | 让 NPC 持续看向某个方向或位置 |

[!NOTE]
NPC 动作和姿势在玩家远离后不会播放动画（因为不在渲染距离内），当玩家靠近时 NPC 会恢复到设定的姿势。这是 Minecraft 客户端的正常行为。

## NPC 类型与用途

### 信息指引 NPC

信息 NPC 通常放置在出生点、交通枢纽或重要地标处，为玩家提供导航和说明。

| 设置项 | 建议配置 |
|:-----|:-----|
| 位置 | 出生点大厅、传送点旁 |
| 皮肤 | 使用穿着特定服装的皮肤（如守卫、向导） |
| 全息文字 | `「点击查看帮助」` 或 `「新手引导」` |
| 右键交互 | 发送服务器规则文本或打开帮助菜单 |
| 动作 | 站立不动或轻微摆动 |

配置示例：
```
/npc create 新手向导
/npc skin 向导皮肤名
/npc holotext 点击查看新手指南
/npc pose STANDING
```

### 商店 NPC

商店 NPC 用于提供直观的交易入口，替代传统的命令行商店体验。

| 设置项 | 建议配置 |
|:-----|:-----|
| 位置 | 商业区、市场中心 |
| 皮肤 | 商人形象皮肤 |
| 全息文字 | `「右键打开商店」` |
| 右键交互 | 执行打开商店 GUI 的命令 |
| 动作 | 可以设置为轻微摆动以吸引注意 |

配置示例：
```
/npc create 商店老板
/npc skin 商人皮肤名
/npc holotext 右键打开商店
/npc interaction add rightclick
/npc interaction command "shop open"
```

### 装饰 NPC

装饰 NPC 用于丰富城镇氛围，让一秋小镇更加生动。

| 设置项 | 建议配置 |
|:-----|:-----|
| 位置 | 广场、街道、建筑内部 |
| 皮肤 | 各种角色皮肤 |
| 全息文字 | NPC 名字或职业 |
| 右键交互 | 无（纯装饰）或简单的对话 |
| 动作 | 行走、坐下、挥手等 |
| 碰撞箱 | 关闭（`false`），避免阻挡玩家 |

[!TIP]
装饰 NPC 建议关闭碰撞箱（`/npc collision false`），这样玩家可以自由穿行，不会因为 NPC 密集而影响移动体验。

## 支持的动作与姿势

| 动作/姿势 | 说明 |
|:-----|:-----|
| `STANDING` | 标准站立姿势 |
| `SITTING` | 坐姿（需要配合椅子方块） |
| `CROUCHING` | 蹲下/潜行姿势 |
| `SLEEPING` | 躺下姿势 |
| `WAVING` | 挥手动作 |
| `DANCING` | 跳舞动作 |
| `WALKING` | 行走动作（原地踏步） |
| `ARM_SWING` | 挥手/攻击动作 |
| `CROSS_ARMS` | 抱臂站立 |
| `BOWING` | 鞠躬 |

## 常见问题

### 皮肤加载不出来？

- 如果使用玩家名方式加载，确保该玩家名在 **Minecraft 正版皮肤库** 中存在
- 如果使用 URL 方式，确保链接可直接访问且为有效的皮肤文件
- 皮肤加载需要网络请求，首次创建 NPC 时可能有几秒延迟
- 玩家需要重新进入渲染距离范围才能看到更新后的皮肤

### NPC 在某些玩家面前不显示？

- 检查玩家的渲染距离设置，NPC 可能超出了客户端的实体渲染距离
- 确认 NPC 没有被设置为仅特定权限组可见
- 尝试退出服务器重新进入

### 如何批量管理 NPC？

- 使用 `/npc list` 查看所有 NPC 及其 ID
- 使用 `/npc select <ID>` 选中后进行编辑
- 使用 `/npc copy <ID>` 可以快速复制相似的 NPC，然后修改差异部分
- 复杂的批量操作请联系管理员通过配置文件处理

## 官方文档

> 更多详细信息请参阅 [官方文档](https://github.com/HttpsShadow/FancyNpcs/wiki)。