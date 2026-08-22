---
title: LuckPerms 权限管理
description: LuckPerms-Bukkit-5.5.49 权限管理系统
---

# LuckPerms 权限管理

> **插件版本**：LuckPerms-Bukkit-5.5.49
> **适用服务端**：一秋小镇主服务器

LuckPerms 是一秋小镇服务器的核心权限管理插件，负责管理所有玩家和权限组的权限分配。它提供了一个灵活、高性能的权限系统，是服务器安全和管理的基础设施。

## 核心功能概述

| 功能 | 说明 |
|------|------|
| 权限节点系统 | 支持细粒度的权限节点控制，精确到每个命令和功能 |
| 权限组管理 | 通过组层级关系管理权限，支持继承和权重 |
| 上下文系统 | 根据世界、游戏模式等条件动态调整权限 |
| Web 编辑器 | 提供可视化在线权限编辑器 |
| 前缀/后缀 | 支持聊天前缀、后缀及 Tab 列表格式化 |
| 数据持久化 | 支持 MySQL、MariaDB、PostgreSQL、SQLite 等多种存储 |
| 网络同步 | 多服务器间实时权限同步（网络权限） |

[!TIP]
> LuckPerms 的权限节点采用点分隔的层级结构，例如 `essentials.home`。通配符 `*` 可以匹配所有子节点，如 `essentials.*` 匹配所有 essentials 下的权限。

## 权限组架构

一秋小镇服务器采用层级化的权限组架构，权限从低到高依次继承：

| 权限组 | 权重 | 说明 | 主要权限 |
|--------|------|------|----------|
| `default` | 0 | 默认组，所有新玩家自动加入 | 基础生存权限、聊天、TPA 请求 |
| `vip` | 10 | VIP 玩家组 | 多个 home 点、彩色聊天、飞行动画 |
| `vip+` | 20 | 高级 VIP | 更多 home 点、粒子效果、专属指令 |
| `svip` | 30 | 超级 VIP | 最大 home 数量、特殊皮肤、优先加入 |
| `mod` | 50 | 版主 | 封禁/踢出玩家、查看举报、回滚操作 |
| `admin` | 90 | 管理员 | 服务器配置、插件管理、权限分配 |
| `owner` | 100 | 服务器拥有者 | 所有权限（`*`） |

[!NOTE]
> 权限组的**权重（weight）**决定了权限继承的优先级。权重越高的组，其权限设置会覆盖低权重组的同名权限。默认组的权重为 0，是最基础的权限层级。

## 权限继承关系

```
owner
  └── admin
        └── mod
              └── svip
                    └── vip+
                          └── vip
                                └── default
```

每个上级组自动继承下级组的所有权限。例如，`admin` 组自动拥有 `mod`、`svip`、`vip+`、`vip` 和 `default` 的全部权限。

## 常用命令

### 用户管理命令

| 命令 | 说明 | 权限要求 |
|------|------|----------|
| `/lp user <玩家> info` | 查看玩家权限信息 | `luckperms.user.info` |
| `/lp user <玩家> permission set <节点> [true\|false]` | 设置玩家权限 | `luckperms.user.permission.set` |
| `/lp user <玩家> permission unset <节点>` | 移除玩家权限 | `luckperms.user.permission.unset` |
| `/lp user <玩家> permission check <节点>` | 检查玩家是否拥有某权限 | `luckperms.user.permission.check` |
| `/lp user <玩家> parent set <组>` | 设置玩家主组 | `luckperms.user.parent.set` |
| `/lp user <玩家> parent add <组>` | 为玩家添加附加组 | `luckperms.user.parent.add` |
| `/lp user <玩家> parent remove <组>` | 移除玩家附加组 | `luckperms.user.parent.remove` |
| `/lp user <玩家> parent clear` | 清除所有父组 | `luckperms.user.parent.clear` |

### 权限组管理命令

| 命令 | 说明 | 权限要求 |
|------|------|----------|
| `/lp group <组> info` | 查看权限组信息 | `luckperms.group.info` |
| `/lp group <组> permission set <节点>` | 为组设置权限 | `luckperms.group.permission.set` |
| `/lp group <组> permission unset <节点>` | 移除组权限 | `luckperms.group.permission.unset` |
| `/lp group <组> listmembers` | 列出组成员 | `luckperms.group.listmembers` |
| `/lp group <组> setweight <权重>` | 设置组权重 | `luckperms.group.setweight` |
| `/lp group <组> create` | 创建新权限组 | `luckperms.group.create` |
| `/lp group <组> delete` | 删除权限组 | `luckperms.group.delete` |

### 编辑器与同步命令

| 命令 | 说明 |
|------|------|
| `/lp editor` | 打开 Web 在线权限编辑器 |
| `/lp sync` | 手动同步权限数据到存储后端 |
| `/lp reload` | 重新加载配置文件 |
| `/lp export` | 导出权限数据 |
| `/lp import` | 导入权限数据 |
| `/lp tree` | 查看权限树结构 |
| `/lp verbose on|off` | 开启/关闭权限调试模式 |
| `/lp debug <玩家>` | 实时调试玩家的权限解析过程 |

[!WARNING]
> `/lp verbose` 和 `/lp debug` 命令会输出大量日志信息，仅在排查权限问题时使用，排查完毕后务必关闭。长期开启会导致服务器控制台刷屏，影响性能。

## 网络权限同步

一秋小镇使用 MySQL 作为 LuckPerms 的存储后端，实现多服务器间的权限实时同步。

### 配置要点

```yaml
# storage-config.yml
storage-method: mysql
mysql:
  address: localhost:3306
  database: yiqiu_luckperms
  username: luckperms
  password: "<secure_password>"
  table-prefix: "lp_"
``n
### 同步机制

| 同步类型 | 说明 | 间隔 |
|----------|------|------|
| 即时同步 | 权限变更后立即推送到数据库 | 实时 |
| 定时同步 | 定期从数据库拉取最新数据 | 可配置（默认 30 秒） |
| 热重载 | 玩家切换子服务器时重新加载权限 | 登录时 |

[!TIP]
> 当玩家在主服务器修改权限后，切换到子服务器时权限会自动生效，无需手动同步。如果遇到权限延迟，可以使用 `/lp sync` 命令强制同步。

## 与 Vault 的集成

LuckPerms 通过 Vault API 与其他插件进行权限交互。一秋小镇服务器上以下插件依赖 Vault 进行权限检查：

| 插件 | 用途 | 集成方式 |
|------|------|----------|
| EssentialsX | 命令权限控制 | Vault 权限检查 |
| PlaceholderAPI | 变量解析 | 前缀/后缀/组名变量 |
| WorldGuard | 区域权限 | 区域权限节点检查 |
| WorldEdit | 编辑权限 | 方块操作权限检查 |
| Chat plugins | 聊天格式化 | 前缀/后缀/组名 |

[!NOTE]
> LuckPerms 自带 Vault 集成，无需额外安装 Vault 附属插件。确保服务器安装了 Vault 插件本身，LuckPerms 会自动注册为权限提供者。

## 管理员操作指南

### 为新玩家设置 VIP
```bash
# 设置玩家主组为 VIP
/lp user 玩家名 parent set vip

# 或者保留默认组，添加 VIP 为附加组
/lp user 玩家名 parent add vip
```

### 授予特定权限
```bash
# 给玩家临时飞行权限（有效期 7 天）
/lp user 玩家名 permission set essentials.fly true 7d

# 给 VIP 组设置多 home 权限
/lp group vip permission set essentials.sethome.multiple.vip
```

### 排查权限问题
```bash
# 1. 检查玩家信息
/lp user 玩家名 info

# 2. 检查特定权限
/lp user 玩家名 permission check essentials.fly

# 3. 开启调试模式
/lp verbose on
/lp debug 玩家名

# 4. 让玩家执行相关操作，观察控制台输出

# 5. 关闭调试
/lp verbose off
```

[!WARNING]
> **切勿**直接授予玩家 `*` 权限节点！这会给予该玩家所有权限，包括控制台命令和危险操作。管理员权限应通过 `admin` 或 `owner` 组来分配，而非直接设置通配符权限。

## 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 权限修改后不生效 | 缓存未刷新 | 执行 `/lp sync` 或重启服务器 |
| 玩家看不到前缀 | PlaceholderAPI 未正确配置 | 检查 Vault 和 PAPI 的集成状态 |
| Web 编辑器无法连接 | 端口未开放或地址配置错误 | 检查 `config.yml` 中的 web 编辑器配置 |
| 权限继承冲突 | 多组之间存在同名权限 | 使用权重系统调整优先级 |
| MySQL 连接失败 | 数据库凭证或网络问题 | 检查 `storage-config.yml` 配置 |
