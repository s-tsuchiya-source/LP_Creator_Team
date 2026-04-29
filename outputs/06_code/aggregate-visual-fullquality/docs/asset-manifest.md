# Asset Manifest

## HTML

| パス | 役割 |
|---|---|
| `index.html` | 4本ハブページ |
| `lp1-cpa-cost/index.html` | LP1 |
| `lp2-application-volume/index.html` | LP2 |
| `lp3-operation-outsourcing/index.html` | LP3 |
| `lp4-analytics-improvement/index.html` | LP4 |

## CSS

| パス | 用途 |
|---|---|
| `assets/css/reset.css` | モダンreset、a11y、`prefers-reduced-motion` |
| `assets/css/common.css` | 構造・タイポ・CTA・ヘッダー・フッター・FAQ・cross-nav 共通 |
| `assets/css/lp1.css` | LP1 経営層トーン（帳票/serif/濃紺ライム） |
| `assets/css/lp2.css` | LP2 未来感（浮遊カード/グラデ/ボールド） |
| `assets/css/lp3.css` | LP3 業務改善（Kanban/タイムライン/温かみ） |
| `assets/css/lp4.css` | LP4 エディトリアル（罫線/PDCA/モノラベル） |

## JavaScript

| パス | 用途 |
|---|---|
| `assets/js/common.js` | reveal IO / countup / sticky CTA / smooth anchor |
| `assets/js/lp1.js` | hero overlay parallax / bar fill animation |
| `assets/js/lp2.js` | floating cards bobbing |
| `assets/js/lp3.js` | timeline blocks staggered draw |
| `assets/js/lp4.js` | sparkline path drawIn |

## SVG ビジュアル

| パス | 役割 | サイズ目安 |
|---|---|---|
| `assets/icons/icons.svg` | 共通アイコン sprite (20種) | ~3KB |
| `assets/images/lp1/hero-cost-control.svg` | LP1 hero ダッシュボード合成 | ~6KB |
| `assets/images/lp1/diagram-budget-allocation.svg` | LP1 予算再配分 Before/After | ~3KB |
| `assets/images/lp2/hero-funnel-growth.svg` | LP2 hero ネットワークリング | ~5KB |
| `assets/images/lp2/funnel-diagram.svg` | LP2 4階層ファネル + 歩留り | ~4KB |
| `assets/images/lp2/channel-coverage.svg` | LP2 8チャネル放射図 | ~3KB |
| `assets/images/lp3/process-flow.svg` | LP3 日次/週次/月次フロー | ~3KB |
| `assets/images/lp4/dashboard-hero.svg` | LP4 hero 複合ダッシュボード | ~7KB |
| `assets/images/lp4/pdca-cycle.svg` | LP4 PDCA 循環図 | ~3KB |

## 外部依存

| 依存先 | 用途 |
|---|---|
| Google Fonts | Noto Sans JP / Noto Serif JP / DM Sans / DM Serif Display / Inter / JetBrains Mono |

CDN フォントは `<link rel="preconnect">` で優先接続。

## 画像戦略
- ストック写真等の外部バイナリ画像は **使用していない**（base64 埋め込みも禁止）
- すべての主要ビジュアルは SVG として手作り
- 写真質感は SVG 内 `<feTurbulence>` + radialGradient で代替

## サイズ目安
- HTML 5本: 合計 ~80KB
- CSS 6本: 合計 ~40KB
- JS 5本: 合計 ~6KB
- SVG 9本: 合計 ~37KB

## ファイル数

```
HTML : 5
CSS  : 6
JS   : 5
SVG  : 9
MD   : 5 (README + 4 docs)
合計  : 30 ファイル
```
