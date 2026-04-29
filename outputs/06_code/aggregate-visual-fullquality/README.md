# aggregate-visual-fullquality

aggregate.eole.co.jp に流入する企業担当者向けの**課題別LP 4本** のフルクオリティ実装。

既存版（`aggregate-visual-composited-20260429/`）が base64 埋め込み 1 ファイル軽量版だったため、本番品質で再構築。

## 目的

- aggregate.eole.co.jp 流入ユーザーに、自分の課題に合うLPを当てる
- 「資料請求」「無料相談」のCV取得を最大化
- AIっぽい雑なLP感を排除し、制作会社品質に整える

## 4本のLP

| No. | 課題 | コンセプト | 配色 | ヒーロー演出 |
|---|---|---|---|---|
| LP1 | 応募単価・広告費改善 | 経営層向けシリアス・帳票/台帳美学 | 濃紺 × ライム | Dashboard + KPI Ledger Card |
| LP2 | 応募数不足・母集団形成 | 未来感・成長感・ファネル可視化 | インディゴ × マゼンタ × アンバー | Network Map + Floating Cards |
| LP3 | 媒体運用工数・まるごと代行 | 業務改善・タイムライン・安心感 | ティール × ウォームオレンジ | Task Board (Kanban) |
| LP4 | データ可視化・改善サイクル | エディトリアル・知的・PDCA循環 | navy × シアン | Editorial Dashboard |

## 起動

```bash
# ハブから
open index.html

# 個別LP
open lp1-cpa-cost/index.html
open lp2-application-volume/index.html
open lp3-operation-outsourcing/index.html
open lp4-analytics-improvement/index.html
```

## ディレクトリ構成

```
aggregate-visual-fullquality/
├── index.html                       # 4本ハブページ
├── README.md                        # このファイル
├── lp1-cpa-cost/index.html          # LP1
├── lp2-application-volume/index.html
├── lp3-operation-outsourcing/index.html
├── lp4-analytics-improvement/index.html
├── assets/
│   ├── css/
│   │   ├── reset.css                # モダンreset
│   │   ├── common.css               # 共通レイアウト/タイポ/CTA/sticky/footer
│   │   ├── lp1.css                  # LP1専用（経営層トーン）
│   │   ├── lp2.css                  # LP2専用（未来感）
│   │   ├── lp3.css                  # LP3専用（業務改善）
│   │   └── lp4.css                  # LP4専用（エディトリアル）
│   ├── js/
│   │   ├── common.js                # reveal/countup/sticky-cta/anchor
│   │   ├── lp1.js                   # hero parallax + bar fill
│   │   ├── lp2.js                   # floating bobbing
│   │   ├── lp3.js                   # timeline stagger
│   │   └── lp4.js                   # sparkline draw-in
│   ├── images/
│   │   ├── lp1/hero-cost-control.svg
│   │   ├── lp1/diagram-budget-allocation.svg
│   │   ├── lp2/hero-funnel-growth.svg
│   │   ├── lp2/funnel-diagram.svg
│   │   ├── lp2/channel-coverage.svg
│   │   ├── lp3/process-flow.svg
│   │   ├── lp4/dashboard-hero.svg
│   │   └── lp4/pdca-cycle.svg
│   └── icons/icons.svg              # アイコンsprite
└── docs/
    ├── design-notes.md              # デザイン設計詳細
    ├── asset-manifest.md            # アセット一覧
    ├── review.md                    # セルフレビュー結果
    └── implementation-notes.md      # 実装メモ
```

## 設計原則

### 軽量逃げ禁止
- ❌ base64 埋め込み画像
- ❌ 1ファイルに全LP押し込み
- ❌ ベタ書きスタイル
- ✅ 外部CSS / JS / SVG 分離
- ✅ LP個別 + 共通基盤の2層

### 画像 = 訴求装置
画像は「差し込む」ではなく、グラデーション・編み・KPIカード・図解・UIモック合成を統合した SVG として設計。

### 4本の差別化レイヤー
配色だけではなく、レイアウト構造・タイポ・モーション・ビジュアル合成・訴求順序すべてを差別化。

### a11y / レスポンシブ
- skip-link / role / aria-label
- prefers-reduced-motion 完全対応
- viewport meta + viewport-fit cover
- 760px / 880px / 980px の段階的レスポンシブ

## 詳細ドキュメント

- [docs/design-notes.md](docs/design-notes.md)
- [docs/asset-manifest.md](docs/asset-manifest.md)
- [docs/review.md](docs/review.md)
- [docs/implementation-notes.md](docs/implementation-notes.md)
