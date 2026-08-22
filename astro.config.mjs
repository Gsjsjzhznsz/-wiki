import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://www.mysv.dpdns.org/',
  integrations: [
    starlight({
      title: '一秋小镇 Wiki',
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      sidebar: [
        {
          label: '首页',
          link: '/',
        },
        {
          label: '服务器指南',
          items: [
            { label: '快速开始', link: '/guide/getting-started' },
            { label: '多端接入', link: '/guide/join' },
            { label: '服务器规则', link: '/guide/rules' },
          ],
        },
        {
          label: '核心系统',
          items: [
            { label: 'Folia 多线程内核', link: '/core/folia' },
            { label: '版本兼容 (Via系列)', link: '/core/viaversion' },
            { label: '基岩版互通 (Geyser)', link: '/core/geyser' },
            { label: '性能监控', link: '/core/performance' },
          ],
        },
        {
          label: '经济与商店',
          items: [
            { label: 'XConomy 经济系统', link: '/economy/xconomy' },
            { label: 'QuickShop-Hikari', link: '/economy/quickshop' },
            { label: 'UltimateShop', link: '/economy/ultimateshop' },
            { label: 'ExoShopkeepers', link: '/economy/exoshopkeepers' },
            { label: 'InstaRestock 自动补货', link: '/economy/instarestock' },
          ],
        },
        {
          label: '领地与传送',
          items: [
            { label: 'Dominion 领地保护', link: '/territory/dominion' },
            { label: 'HuskHomes 传送系统', link: '/territory/huskhomes' },
            { label: 'CompassCommand 导航', link: '/territory/compass' },
          ],
        },
        {
          label: '辅助工具',
          items: [
            { label: 'WorldEdit 建筑辅助', link: '/tools/worldedit' },
            { label: 'SuperHarvest 连锁采集', link: '/tools/superharvest' },
            { label: 'FancyNpcs 自定义NPC', link: '/tools/fancynpcs' },
            { label: 'TAB 信息面板', link: '/tools/tab' },
            { label: 'SquareMap 在线地图', link: '/tools/squaremap' },
            { label: 'SkinsRestorer 皮肤修复', link: '/tools/skinsrestorer' },
          ],
        },
        {
          label: '管理与安全',
          items: [
            { label: 'LuckPerms 权限管理', link: '/admin/luckperms' },
            { label: 'AuthMe 账户安全', link: '/admin/authme' },
            { label: 'GrimAC 反作弊', link: '/admin/grimac' },
            { label: 'Sentry 日志监控', link: '/admin/sentry' },
            { label: 'vanish++ 隐身管理', link: '/admin/vanish' },
          ],
        },
        {
          label: '聊天与社交',
          items: [
            { label: 'FairyChat 聊天系统', link: '/social/fairychat' },
            { label: 'EasyBot 机器人', link: '/social/easybot' },
          ],
        },
        {
          label: '奖励与菜单',
          items: [
            { label: 'LiteSignIn 签到', link: '/rewards/litesignin' },
            { label: 'LushRewards 在线奖励', link: '/rewards/lushrewards' },
            { label: 'zMenu 快捷菜单', link: '/rewards/zmenu' },
          ],
        },
        {
          label: '其他插件',
          items: [
            { label: 'SeeMore 视距优化', link: '/misc/seemore' },
            { label: 'Worlds 多世界', link: '/misc/worlds' },
            { label: 'MiniMOTD 服务器图标', link: '/misc/minimotd' },
            { label: 'ViaAprilFools', link: '/misc/viaaprilfools' },
            { label: '插件总览', link: '/plugins/overview' },
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/Gsjsjzhznsz/-wiki',
          icon: 'github',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: '一秋小镇 Minecraft 服务器 Wiki — 纯粹生电·硬核红石·极致流畅',
          },
        },
      ],
    }),
  ],
});
