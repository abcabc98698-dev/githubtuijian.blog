import rss from '@astrojs/rss';
import { SITE } from '../config/site';
import { AIRPORTS } from '../data/airports';

export async function GET(context) {
  const items = AIRPORTS.map((airport) => ({
    title: `${airport.name} · ${airport.lineType} 评测与测速报告`,
    pubDate: new Date('2026-10-31'),
    description: airport.description,
    link: `/airports/${airport.slug}`,
  }));

  return rss({
    title: `${SITE.name} - 42家机场品牌测速与评测数据库`,
    description: SITE.description,
    site: context.site || SITE.url,
    items,
    customData: `<language>zh-cn</language>`,
  });
}
