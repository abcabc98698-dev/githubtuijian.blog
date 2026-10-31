import React, { useState, useMemo } from 'react';
import type { AirportBrand } from '../../data/airports';

interface Props {
  initialAirports: AirportBrand[];
}

export default function AirportFilter({ initialAirports }: Props) {
  const [search, setSearch] = useState('');
  const [selectedLine, setSelectedLine] = useState('ALL');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [sortBy, setSortBy] = useState<'rank' | 'established'>('rank');
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const handleCopy = (coupon: string) => {
    navigator.clipboard.writeText(coupon);
    setCopiedCoupon(coupon);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  const filteredAirports = useMemo(() => {
    return initialAirports
      .filter((airport) => {
        // Search filter
        if (search.trim()) {
          const q = search.toLowerCase();
          const matchName = airport.name.toLowerCase().includes(q);
          const matchDesc = airport.description.toLowerCase().includes(q);
          const matchLine = airport.lineType.toLowerCase().includes(q);
          const matchTag = airport.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchLine && !matchTag) return false;
        }

        // Line filter
        if (selectedLine !== 'ALL') {
          if (!airport.lineType.includes(selectedLine)) return false;
        }

        // Tag filter
        if (selectedTag !== 'ALL') {
          if (selectedTag === 'COUPON' && !airport.coupon) return false;
          if (selectedTag === 'FOREVER' && !airport.tags.includes('不限时套餐')) return false;
          if (selectedTag === 'CLIENT' && !airport.tags.includes('自研客户端')) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'established') {
          return parseInt(a.established || '2025', 10) - parseInt(b.established || '2025', 10);
        }
        return a.rank - b.rank;
      });
  }, [initialAirports, search, selectedLine, selectedTag, sortBy]);

  return (
    <div className="space-y-8">
      {/* Search & Control Bar */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-12 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索 42 家机场名称、专线类型、协议或特性..."
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2.5 pl-10 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
            <svg
              className="absolute left-3 top-3 h-4 w-4 text-[var(--text-tertiary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Line Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2.5 text-sm font-medium text-[var(--text-primary)] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="ALL">全部线路架构</option>
              <option value="IEPL">IEPL 专线</option>
              <option value="IPLC">IPLC 专线</option>
              <option value="BGP">BGP 智能调度</option>
            </select>
          </div>

          {/* Feature Tag Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2.5 text-sm font-medium text-[var(--text-primary)] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="ALL">全部特性</option>
              <option value="COUPON">有专属优惠码</option>
              <option value="FOREVER">含不限时/永久包</option>
              <option value="CLIENT">提供自研客户端</option>
            </select>
          </div>

          {/* Sorting */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2.5 text-sm font-medium text-[var(--text-primary)] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="rank">默认推荐排名</option>
              <option value="established">运营时间排序</option>
            </select>
          </div>
        </div>

        {/* Counter & Active Tags */}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3 text-xs text-[var(--text-secondary)]">
          <div>
            共筛选出 <strong className="text-indigo-600 dark:text-indigo-400 font-bold">{filteredAirports.length}</strong> 家机场服务商
          </div>
          {copiedCoupon && (
            <div className="text-emerald-500 font-bold animate-pulse">
              ✓ 优惠码 {copiedCoupon} 已成功复制到剪贴板！
            </div>
          )}
        </div>
      </div>

      {/* Grid of Airport Cards */}
      {filteredAirports.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--border)] p-12 text-center">
          <p className="text-base font-semibold text-[var(--text-primary)]">未找到匹配的机场服务商</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">请尝试更换搜索词或重置筛选条件</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAirports.map((airport) => {
            const isTop1 = airport.rank === 1;
            return (
              <div
                key={airport.id}
                className={`group relative flex flex-col justify-between rounded-2xl border bg-[var(--bg)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isTop1
                    ? 'border-indigo-500/80 ring-2 ring-indigo-500/20 bg-gradient-to-b from-indigo-950/20 to-[var(--bg)]'
                    : 'border-[var(--border)] hover:border-indigo-500/50'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl font-display font-black text-lg ${
                          isTop1
                            ? 'bg-gradient-to-tr from-indigo-600 to-amber-500 text-white shadow-lg shadow-indigo-500/30'
                            : 'bg-[var(--bg-secondary)] text-indigo-600 dark:text-indigo-400 border border-[var(--border)]'
                        }`}
                      >
                        {airport.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                            <a
                              href={`/airports/${airport.slug}`}
                              className="hover:text-indigo-500 transition-colors"
                            >
                              {airport.name}
                            </a>
                          </h3>
                          {isTop1 && (
                            <span className="rounded-full bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 text-[11px] font-bold text-amber-500">
                              ★ 旗舰主推
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                          {airport.established} 年运营 · {airport.lineType}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] text-[var(--text-tertiary)]">入门起步</div>
                      <div className="font-mono text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
                        {airport.entryPrice}
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {airport.protocols.map((proto) => (
                      <span
                        key={proto}
                        className="rounded-md bg-[var(--bg-secondary)] px-2 py-0.5 text-[11px] font-medium text-[var(--text-secondary)] border border-[var(--border)]"
                      >
                        {proto}
                      </span>
                    ))}
                    <span className="rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 px-2 py-0.5 text-[11px] font-medium">
                      {airport.nodeCount} 节点
                    </span>
                    {airport.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {airport.description}
                  </p>

                  {/* Coupon Box */}
                  {airport.coupon && (
                    <div className="mt-4 flex items-center justify-between rounded-lg border border-dashed border-amber-500/40 bg-amber-500/5 px-3 py-2 text-xs">
                      <span className="text-amber-600 dark:text-amber-400 font-medium">
                        专属优惠码: <strong className="font-mono font-bold">{airport.coupon}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(airport.coupon)}
                        className="font-semibold text-amber-600 dark:text-amber-300 hover:underline cursor-pointer"
                      >
                        {copiedCoupon === airport.coupon ? '已复制✓' : '复制'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-4">
                  <a
                    href={`/airports/${airport.slug}`}
                    className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2 text-center text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--border)]"
                  >
                    测速 & 详情
                  </a>
                  <a
                    href={airport.affUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className={`flex-1 rounded-xl px-3 py-2 text-center text-xs font-bold text-white transition-all shadow-sm ${
                      isTop1
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-indigo-500/25'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    直达官网 →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
