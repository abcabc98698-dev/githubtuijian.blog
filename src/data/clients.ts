/**
 * Proxy Clients Database & Tutorials by Operating System
 * Extracted from 第三方代理客户端.txt
 */

export interface ClientApp {
  name: string;
  kernel: string;
  features: string;
  targetUser: string;
  isRecommended: boolean;
  downloadType: 'GitHub' | 'App Store' | 'Official Doc' | 'Website';
  downloadUrl: string;
}

export interface PlatformGuide {
  id: string;
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  coreKeywords: string[];
  notice?: string;
  clients: ClientApp[];
  setupSteps: string[];
}

export const PLATFORMS: PlatformGuide[] = [
  {
    id: 'windows',
    slug: 'windows',
    name: 'Windows 电脑',
    icon: 'windows',
    tagline: '支持 Windows 10/11，Mihomo 内核与 TUN 虚拟网卡接管',
    coreKeywords: [
      'Clash Verge Rev 下载',
      'v2rayN 下载',
      'Windows 机场客户端',
      '电脑代理软件',
      'Mihomo 客户端',
      'VLESS Windows 客户端',
    ],
    notice: '建议优先选用持续维护的 Clash Verge Rev 或 v2rayN，开启 TUN 模式可全局代理所有软件网络流量。',
    clients: [
      {
        name: 'Clash Verge Rev',
        kernel: 'Mihomo (Clash Meta)',
        features: '图形化界面、订阅自动更新、规则分流、系统代理与一键 TUN 虚拟网卡模式',
        targetUser: '新手与进阶首选',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
      },
      {
        name: 'v2rayN',
        kernel: 'Xray / sing-box / V2Ray',
        features: '支持 VLESS / VMess / Trojan / Shadowsocks 多协议节点与路由管理',
        targetUser: '技术开发者与多协议需求用户',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/2dust/v2rayN/releases',
      },
      {
        name: 'FlClash',
        kernel: 'Mihomo',
        features: '基于 Flutter 的现代化多平台客户端，内存占用低，界面简洁',
        targetUser: '追求极简视觉的用户',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
      },
      {
        name: 'Hiddify',
        kernel: 'sing-box',
        features: '多协议兼容、自动延迟测速优选、无需复杂配置即可导入',
        targetUser: '入门新手',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
      },
      {
        name: 'Karing',
        kernel: 'sing-box',
        features: '兼容 Clash、V2Ray 等多种订阅格式，跨平台统一配置体验',
        targetUser: '多设备跨端用户',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/KaringX/karing/releases',
      },
    ],
    setupSteps: [
      '第一步：从上方官方 Releases 渠道下载安装包（推荐 Clash Verge Rev x64 安装版）。',
      '第二步：在已购买的机场后台（如光速云）复制“Clash 订阅链接”或点击一键导入。',
      '第三步：打开客户端，进入「订阅/配置」页面粘贴订阅 URL，点击下载更新节点。',
      '第四步：切换到「代理」界面选择合适节点（如香港 IEPL 或日本），开启「系统代理」或「TUN 模式」即可畅游网络。',
    ],
  },
  {
    id: 'android',
    slug: 'android',
    name: 'Android 安卓手机',
    icon: 'android',
    tagline: '适配主流安卓手机与鸿蒙系统，支持分应用代理与无感后台运行',
    coreKeywords: [
      'v2rayNG 安卓下载',
      'FlClash Android',
      '安卓机场客户端',
      'Clash Meta 安卓版',
      '手机代理梯子软件',
    ],
    notice: '特别警告：切勿下载非官方或来路不明的第三方修改版 APK，谨防被注入恶意广告或凭证泄露。',
    clients: [
      {
        name: 'v2rayNG',
        kernel: 'Xray',
        features: '经典稳定的协议工具，原生支持剪贴板订阅导入与分应用绕行代理',
        targetUser: '安卓用户首选',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
      },
      {
        name: 'FlClash (Android)',
        kernel: 'Mihomo',
        features: '高颜值 Material Design 界面，规则分流与策略组切换方便',
        targetUser: '现代 UI 爱好者',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
      },
      {
        name: 'Hiddify Android',
        kernel: 'sing-box',
        features: '一键连接与自动优选节点，支持原生 sing-box 与 VLESS Reality 协议',
        targetUser: '新手小白',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
      },
      {
        name: 'Karing',
        kernel: 'sing-box',
        features: '规则丰富，支持跨平台统一备份，对主流机场订阅格式解析度高',
        targetUser: '多协议测试用户',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/KaringX/karing/releases',
      },
    ],
    setupSteps: [
      '第一步：下载 v2rayNG 或 FlClash APK 并在手机上安装允许运行。',
      '第二步：在机场后台复制订阅链接，在 App 内点击「+」➔「从剪贴板导入订阅」。',
      '第三步：点击右上角菜单更新全部订阅节点列表。',
      '第四步：点击主界面右下角连接按钮（首次运行需允许创建 VPN 连接），享受极速网络。',
    ],
  },
  {
    id: 'ios',
    slug: 'ios',
    name: 'iPhone / iPad (iOS)',
    icon: 'apple',
    tagline: '基于 iOS Network Extension 原生框架，低功耗持久后台分流',
    coreKeywords: [
      'Shadowrocket 小火箭下载',
      'iOS 机场客户端',
      '小火箭订阅配置教程',
      'Stash 苹果客户端',
      'Quantumult X 圈X',
    ],
    notice: '由于 App Store 区域限制，Shadowrocket、Stash、Quantumult X 等应用需使用非国区（美区/港区）Apple ID 购买下载。',
    clients: [
      {
        name: 'Shadowrocket (小火箭)',
        kernel: '自研轻量核心',
        features: '最主流且性价比最高的 iOS 代理工具，支持扫码导入订阅、规则分流与场景切换',
        targetUser: 'iOS 用户绝对首选',
        isRecommended: true,
        downloadType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
      },
      {
        name: 'Stash',
        kernel: 'Clash 兼容核心',
        features: 'iOS 上的 Clash 体验，支持策略组、按域名分流与 Web Dashboard 面板',
        targetUser: '习惯 Clash 规则的用户',
        isRecommended: true,
        downloadType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/stash/id1596063717',
      },
      {
        name: 'Quantumult X (圈X)',
        kernel: '自研高性能核心',
        features: '极低系统资源占用，强大的 MitM、脚本重写与精确的节点延迟测试',
        targetUser: '重度定制与脚本折腾玩家',
        isRecommended: false,
        downloadType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/quantumult-x/id1453926894',
      },
      {
        name: 'Surge 5',
        kernel: '专业网络分析核心',
        features: '顶级专业网络抓包与调试工具，价格较高，适合网络工程师与极客',
        targetUser: '网络调试专家',
        isRecommended: false,
        downloadType: 'App Store',
        downloadUrl: 'https://nssurge.com',
      },
    ],
    setupSteps: [
      '第一步：准备一个非国区 Apple ID，在 App Store 搜索并下载 Shadowrocket（售价 $2.99）。',
      '第二步：在手机 Safari 浏览器打开机场用户后台，点击「一键导入 Shadowrocket」或手动复制订阅 URL。',
      '第三步：打开 Shadowrocket，自动识别提示添加订阅或点击右上角「+」类型选择「Subscribe」粘贴链接。',
      '第四步：勾选需要使用的节点，打开顶部开关（首次弹出系统 VPN 配置确认选择 Allow 并验证面容），开启加速。',
    ],
  },
  {
    id: 'macos',
    slug: 'macos',
    name: 'macOS 苹果电脑',
    icon: 'mac',
    tagline: '原生适配 Apple Silicon (M1/M2/M3/M4) 与 Intel 芯片',
    coreKeywords: [
      'Clash Verge Mac 版',
      'Mac 机场客户端推荐',
      'M1/M2 Mac 代理软件',
      'Surge Mac 下载',
      'FlClash for macOS',
    ],
    notice: '下载时请根据芯片架构选择：Apple Silicon（M1/M2/M3/M4）请下载 aarch64/arm64 版本；Intel 处理器请下载 x64 版本。',
    clients: [
      {
        name: 'Clash Verge Rev for Mac',
        kernel: 'Mihomo',
        features: '双架构原生适配，支持开启系统级 TUN 模式，终端命令行代理极为平滑',
        targetUser: 'Mac 开发与日常通用首选',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
      },
      {
        name: 'FlClash (macOS)',
        kernel: 'Mihomo',
        features: '无多余依赖，单窗口极简配置，支持触控栏与系统深色模式协同',
        targetUser: '轻量办公用户',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
      },
      {
        name: 'Surge Mac',
        kernel: '专业核心',
        features: 'macOS 平台最强大的网络网关与分流利器，原生 Dashboard 抓包分析',
        targetUser: '高预算专业团队',
        isRecommended: false,
        downloadType: 'Website',
        downloadUrl: 'https://nssurge.com',
      },
    ],
    setupSteps: [
      '第一步：下载对应芯片的 Clash Verge Rev .dmg 安装包，拖入 Applications 应用程序文件夹。',
      '第二步：在机场后台复制通用订阅，在软件 Subscriptions 栏目粘贴导入。',
      '第三步：选择低延迟节点，开启 System Proxy 或 TUN 模式即可。',
    ],
  },
  {
    id: 'linux',
    slug: 'linux',
    name: 'Linux 桌面 / 服务器',
    icon: 'linux',
    tagline: '支持 Ubuntu、Debian、Arch、Fedora 及无头服务器环境',
    coreKeywords: [
      'Linux 机场客户端',
      'v2rayA 安装教程',
      'Clash Linux AppImage',
      'Linux 命令行科学上网',
    ],
    notice: '无桌面 GUI 的 Linux 服务器或轻量 VPS 环境，强烈推荐使用具备 Web UI 控制面板的 v2rayA。',
    clients: [
      {
        name: 'Clash Verge Rev (Linux)',
        kernel: 'Mihomo',
        features: '支持 AppImage、deb、rpm 等多种打包格式，图形化操作便捷',
        targetUser: 'Linux 桌面工作站用户',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
      },
      {
        name: 'v2rayA',
        kernel: 'Xray / sing-box',
        features: '提供本地 Web UI（默认 2017 端口），一键配置透明代理与全局路由',
        targetUser: '开发服务器 / 局域网网关',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/v2rayA/v2rayA/releases',
      },
    ],
    setupSteps: [
      '第一步：桌面端下载 AppImage 并赋予执行权限 `chmod +x Clash.Verge*.AppImage` 即可直接双击运行。',
      '第二步：服务器端可通过 APT/YUM 或 Docker 部署 v2rayA，通过浏览器访问 `http://ip:2017` 导入订阅并启动透明代理。',
    ],
  },
  {
    id: 'openwrt',
    slug: 'openwrt',
    name: 'OpenWrt 软路由 / 旁路由',
    icon: 'router',
    tagline: '全屋全设备无感代理，智能规避国内流量，主机游戏与电视加速',
    coreKeywords: [
      'OpenClash 安装配置教程',
      '软路由科学上网指南',
      'PassWall2 软路由插件',
      'Nikki OpenWrt 教程',
      '旁路由透明网关',
    ],
    notice: '软路由环境安装前必须确认 CPU 架构（如 x86_64、aarch64_cortex-a53）及 OpenWrt 固件版本。Nikki 需 OpenWrt 24.10 以上版本。',
    clients: [
      {
        name: 'OpenClash',
        kernel: 'Mihomo / Clash Core',
        features: '最主流的 OpenWrt 客户端，支持 Fake-IP、TUN 混合模式、全屋设备分流与 DNS 防污染',
        targetUser: '家庭软路由 / 软旁路由首选',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/vernesong/OpenClash/releases',
      },
      {
        name: 'PassWall2',
        kernel: 'Xray / sing-box',
        features: '支持多节点自动负载均衡、分流策略多样、分应用与分 IP 规则灵活',
        targetUser: '喜欢多核心切换的进阶用户',
        isRecommended: true,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/xiaorouji/openwrt-passwall',
      },
      {
        name: 'Nikki',
        kernel: 'Mihomo',
        features: '针对现代 OpenWrt 24.10+ 开发的高性能路由代理管理工具，轻量高效',
        targetUser: '最新固件用户',
        isRecommended: false,
        downloadType: 'GitHub',
        downloadUrl: 'https://github.com/nikkinikkinikki/nikki',
      },
    ],
    setupSteps: [
      '第一步：在路由器后台「系统」➔「软件包」上传对应架构的 luci-app-openclash ipk 安装包。',
      '第二步：进入 OpenClash 插件界面，在「配置订阅」中添加机场通用订阅链接并下载。',
      '第三步：运行模式选择「Fake-IP (TUN模式)」，勾选本地 DNS 劫持以防 DNS 污染。',
      '第四步：点击「启动 OpenClash」，此时内网连接该路由器的手机、电脑、电视、游戏主机均可无感访问全球互联网。',
    ],
  },
];

export function getPlatformBySlug(slug: string): PlatformGuide | undefined {
  return PLATFORMS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
