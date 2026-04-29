# Implementation Notes

## ビルド不要・素のHTML/CSS/JS

すべて素のWebアセット。ビルド・トランスパイル・依存ライブラリは一切なし。

```bash
# 即座に動作確認可能
python -m http.server 8000
# → http://localhost:8000/aggregate-visual-fullquality/
```

## 共通基盤と LP 個別の責任分離

| レイヤー | ファイル | 責任 |
|---|---|---|
| Reset | `assets/css/reset.css` | ブラウザ正規化・a11y基本・`prefers-reduced-motion` |
| Foundation | `assets/css/common.css` | 構造（container/section/grid）・CTA・ヘッダー・フッター・FAQ・cross-nav |
| LP個別 | `assets/css/lp{n}.css` | hero/section視覚・配色・LP固有の演出 |
| Common JS | `assets/js/common.js` | reveal/countup/sticky-cta/anchor |
| LP個別 JS | `assets/js/lp{n}.js` | LPに固有の挙動のみ |

## CSS変数による配色適応

`common.css` 側のコンポーネント（`.btn--primary`, `.eyebrow`, `.section-title em` など）は
`var(--brand-primary)` `var(--brand-secondary)` 等を参照する。
LP個別CSSは `:root` でこれらを定義し直すだけで、
共通コンポーネントが自動的にそのLPの配色に合わせる。

```css
/* lp1.css */
:root {
  --brand-primary: #0E2A5A;
  --brand-secondary: #1F4FB4;
  --brand-accent: #C8E66A;
}
```

## SVGビジュアルの設計指針

**目的**: 「写真を差し込む」ではなく「画像を訴求装置にする」。

各SVGには次を組み合わせて統合：
- 背景グラデーション（質感）
- ノイズフィルタ（写真感）
- KPI数値（DM Serif Display）
- ラベル（モノ系）
- グラフ要素（棒/線/エリア/ヒートマップ）
- アクセントオーバーレイ（リング/編み）

ブラウザ側で部分的に HTML オーバーレイ（floater カード）を重ねて、
画像と本文を別々に保守可能にしている（画像差替は SVG だけ、コピー差替は HTML だけ）。

## アニメーション規律

### 設置基準
- 意味のあるもののみ（reveal, countup, parallax, bar fill, sparkline drawIn など）
- 装飾だけのアニメーションは設置しない
- 全アニメーションが `prefers-reduced-motion: reduce` で無効化

### 実装方法
- IntersectionObserver で viewport 入域時のみ起動
- CSS `transition` を主軸に、JS は値の操作だけに限定
- `requestAnimationFrame` でカウントアップを滑らかに
- `setTimeout` の連鎖ではなく `IntersectionObserver` でviewport基準

## レスポンシブの考え方

| breakpoint | 内容 |
|---|---|
| ≤ 760px | SP / single column / sticky CTA表示 |
| 760–879px | SP↔TB境界 / padding緩和 / sticky CTA非表示 |
| 880–979px | TB / カラム分岐開始 / グリッド3列化 |
| ≥ 980px | PC / hero 2col / タイムライン横展開 |

`clamp()` を多用して中間サイズも自然に追従させている。

## 軽量化方針

- WebFontはGoogle Fonts経由（HTTP/2でキャッシュ効率良）
- すべてのSVGはinline化せず外部ファイル化（HTTPキャッシュ + 並列DL）
- JS は defer 属性で非ブロッキング
- 大きな背景画像は使わない（CSSグラデで代替）

## GitHub反映時の注意

- 公開リポジトリへのコミット可（顧客固有情報・実数値・実名社名なし）
- `outputs/06_code/aggregate-visual-fullquality/` 全体を 1コミットで反映可
- 既存版 `aggregate-visual-composited-20260429/` は残すか削除はユーザー判断（軽量1ファイル版なので残しても害は少ない）

## 改善余地（次フェーズ候補）

| 領域 | 追加候補 |
|---|---|
| フォーム | お問い合わせフォーム（現在は mailto:）を Pardot/HubSpot に接続 |
| 計測 | GA4 / GTM タグ実装、CV計測、ヒートマップ連携 |
| OG画像 | 各LPに og:image を別途生成 |
| 文言精査 | 法務・薬機法/景品法等チェック |
| Core Web Vitals | Lighthouse 計測・LCP最適化 |
| 多言語 | 必要に応じて英語版作成 |
