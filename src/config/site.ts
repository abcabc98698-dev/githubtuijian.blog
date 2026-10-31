/**
 * Site Configuration
 * Single source of truth for site-wide metadata, canonical domain,
 * Open Graph defaults, and branding.
 *
 * All canonical URLs, sitemaps, and absolute resource paths MUST derive from here.
 */

export const SITE = {
  name: 'GitHubTuijian',
  title: 'GitHub推荐 - 全球高速专线测速实验室与全平台客户端中心',
  description:
    '收录42家主流高速网络加速机场与6大平台官方代理客户端。提供2026晚高峰真实测速、IEPL/IPLC专线横评、ChatGPT与流媒体原生解锁矩阵及保姆级配置指南。',
  url: 'https://githubtuijian.blog',
  author: {
    name: 'GitHubTuijian Team',
    url: 'https://githubtuijian.blog',
    email: 'contact@githubtuijian.blog',
  },
  contact: {
    email: 'contact@githubtuijian.blog',
    telegram: 'https://t.me/githubtuijian',
    address: 'Global Remote Community',
  },
  social: {
    github: 'https://githubtuijian.blog',
    twitter: 'https://x.com/githubtuijian',
    rss: '/rss.xml',
  },
  verifications: {
    google: '', // Google Search Console: google-site-verification
    bing: '',   // Bing Webmaster Tools: msvalidate.01
    shenma: '', // 神马站长平台: shenma-site-verification
    baidu: '',  // 百度搜索资源平台: baidu-site-verification
  },
} as const;

export type SiteConfig = typeof SITE;

export function getSiteBaseUrl(astroSite?: URL | string): string {
  if (astroSite) {
    return astroSite.toString().replace(/\/$/, '');
  }
  return SITE.url;
}

export function buildCanonicalUrl(pathname: string, astroSite?: URL | string): string {
  const base = getSiteBaseUrl(astroSite);
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(cleanPath, base).toString();
}

export function buildOgImageUrl(imagePath?: string, astroSite?: URL | string): string {
  const base = getSiteBaseUrl(astroSite);
  const path = imagePath ?? '/og-default.png';
  return new URL(path, base).toString();
}
