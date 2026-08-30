---
title: FairyChat 聊天系统
description: FairyChat-0.7.7 聊天优化系统
---

# FairyChat 聊天系统

> FairyChat-0.7.7 | 一秋小镇聊天体验的核心组件

FairyChat 是一秋小镇服务器使用的聊天优化系统，它为玩家提供了丰富的聊天格式自定义、多频道管理和与 PlaceholderAPI 的深度集成。通过 FairyChat，玩家可以享受更加美观、有条理的聊天体验。

## 📋 功能概览

FairyChat 提供以下核心功能：

| 功能 | 说明 |
| :--- | :--- |
| 聊天格式自定义 | 支持通过配置文件完全自定义聊天消息的显示格式 |
| 多频道系统 | 支持多个独立聊天频道，玩家可自由切换 |
| PlaceholderAPI 集成 | 完美支持 PlaceholderAPI 变量替换 |
| 跨服聊天支持 | 支持在多服务器环境中进行聊天同步（如已配置） |
| 聊天过滤 | 内置基础聊天内容过滤机制 |
| 私聊系统 | 提供便捷的玩家间私密消息功能 |
| 冷却系统 | 可设置消息发送冷却时间，防止刷屏 |

## 💬 聊天格式

FairyChat 允许管理员通过配置文件自定义聊天消息的显示格式。服务器当前使用的聊天格式如下：

### 公共频道格式

```
[前缀] 玩家名 §7: §f消息内容
```

[!TIP]
你可以在聊天中使用颜色代码来美化消息。使用 `&` 符号加上颜色代码（如 `&a` 表示绿色，`&b` 表示水蓝色）即可在部分情况下为文字上色。不过，普通玩家的聊天颜色权限由 LuckPerms 控制。

### 格式变量

FairyChat 支持以下格式变量，可与 PlaceholderAPI 联合使用：

| 变量 | 说明 | 示例输出 |
| :--- | :--- | :--- |
| `%player%` | 玩家显示名 | Steve |
| `%prefix%` | 玩家前缀（由 LuckPerms 提供） | `§a[会员]§r` |
| `%suffix%` | 玩家后缀（由 LuckPerms 提供） | `§7§r` |
| `%message%` | 聊天消息内容 | 大家好！ |
| `%world%` | 玩家所在世界 | world |
| `%server%` | 服务器名称 | 一秋小镇 |

## 📡 频道系统

FairyChat 支持多个聊天频道，玩家可以加入不同的频道进行交流。频道之间相互隔离，互不干扰。

### 可用频道

| 频道名称 | 说明 | 默认加入 |
| :--- | :--- | :--- |
| `public` / 全局 | 全服公共聊天频道，所有玩家可见 | ✅ 是 |
| `trade` / 交易 | 交易相关讨论频道 | ❌ 否 |
| `help` / 求助 | 玩家互助与提问频道 | ❌ 否 |

### 频道命令

| 命令 | 说明 | 权限 |
| :--- | :--- | :--- |
| `/ch <频道名>` | 切换到指定频道 | 无特殊要求 |
| `/ch list` | 查看所有可用频道 | 无特殊要求 |
| `/ch join <频道名>` | 加入指定频道 | 无特殊要求 |
| `/ch leave <频道名>` | 离开指定频道 | 无特殊要求 |
| `/msg <玩家> <消息>` | 向指定玩家发送私聊 | 无特殊要求 |
| `/r <消息>` | 回复上一条私聊 | 无特殊要求 |

[!NOTE]
切换频道后，你发送的消息只会发送到当前激活的频道中。请确保你在正确的频道中发送消息，以免造成信息发送到错误的频道。

## 🔗 PlaceholderAPI 集成

FairyChat 与 PlaceholderAPI-2.12.3 深度集成，可以在聊天格式中使用大量由其他插件提供的变量。这使得聊天消息可以显示丰富的玩家信息。

### 常用集成变量

| 变量 | 来源插件 | 说明 |
| :--- | :--- | :--- |
| `%luckperms_prefix%` | LuckPerms | 玩家权限组前缀 |
| `%luckperms_suffix%` | LuckPerms | 玩家权限组后缀 |
| `%player_ping%` | PlaceholderAPI | 玩家当前延迟（ms） |
| `%player_exp%` | PlaceholderAPI | 玩家当前经验值 |
| `%player_level%` | PlaceholderAPI | 玩家当前经验等级 |
| `%xconomy_balance%` | XConomy | 玩家当前余额 |
| `%huskhomes_homes%` | HuskHomes | 玩家已设置的家数量 |

[!TIP]
管理员可以通过修改 FairyChat 配置文件中的格式字符串来自定义聊天样式。格式字符串支持所有 PlaceholderAPI 提供的变量，以及 FairyChat 自带的变量系统。修改后使用重载命令即可生效。

## ⚙️ 格式自定义（管理员）

管理员可以通过编辑配置文件来自定义聊天格式。FairyChat 的配置文件位于 `plugins/FairyChat/config.yml`。

### 基本配置结构

```yaml
formats:
  public:
    format: "[&a{prefix}&r] {player} &7: &f{message}"
    cooldown: 3  # 消息冷却时间（秒）
  trade:
    format: "&6[交易] &e{player} &7: &f{message}"
    cooldown: 5
```

### 管理员命令

| 命令 | 说明 | 权限 |
| :--- | :--- | :--- |
| `/fairychat reload` | 重新加载 FairyChat 配置文件 | `fairychat.admin` |
| `/fairychat setformat <频道> <格式>` | 动态设置频道格式 | `fairychat.admin` |

[!WARNING]
修改配置文件前请务必备份原始文件。错误的格式配置可能导致聊天系统无法正常工作。建议在测试环境中验证配置后再应用到正式服务器。

## 🛡️ 聊天规范

在一秋小镇使用 FairyChat 聊天时，请遵守以下规范：

- **禁止刷屏**：系统设有冷却时间，请不要恶意刷屏
- **文明交流**：尊重其他玩家，禁止使用侮辱性语言
- **正确使用频道**：将消息发送到对应主题的频道
- **禁止广告**：未经允许不得在聊天中发布广告信息

[!WARNING]
违反聊天规范的玩家可能会被暂时禁言或永久封禁聊天权限。管理员有权根据违规程度采取相应措施。

## 官方文档

> 更多详细信息请参阅 [Modrinth 项目页](https://modrinth.com/project/gnSidBpb)。
