# 広告流入LPワークフロー

Google Ads / Meta / Yahoo 等の広告から流入するLPのフロー。計測重視・速度重視。

## 特徴

- 流入経路: 広告のみまたは広告メイン
- 期待CV: フォーム送信 / 電話 / 申込
- 計測: 媒体CVが必須
- 速度: LCP重視（広告品質スコアに影響）

## 必須エージェント

- `lp-marketing-strategist`（流入想定踏まえた訴求）
- `lp-lpo-strategist`（CVR最大化）
- `lp-headline-specialist`（広告との連動FV）
- `lp-sales-copywriter`
- `lp-cta-flow-designer`
- `lp-ga4-gtm-specialist`
- `lp-conversion-tracking-specialist`（必須）
- `lp-performance-engineer`（広告品質スコア対策）
- `lp-qa-lead`

## ステップ

### Step 1: 広告クリエイティブとの連動
- 出稿予定の広告コピー・キーワードを確認
- LP FV と広告の連続性を設計（メッセージマッチ）

### Step 2: 戦略・構成・コピー
- 通常フローと同様
- ただし FV を最重視（広告クリック直後の体験）

### Step 3: 計測設計
- GA4 イベント設計
- 媒体CV送信（Google Ads / Meta Pixel / Yahoo）
- Enhanced Conversion 設定
- UTM 取得

### Step 4: 速度最適化
- LCP < 2.5s 必達
- CLS < 0.1
- INP < 200ms

### Step 5: QA
- 主要ブラウザ・SP動作
- 計測動作確認（GTM プレビューモード）
- 広告品質スコア確認

## メッセージマッチの重要性

広告コピーとLP FVのメッセージが一致していないと離脱が増える：

- 広告: 「採用工数を50%削減」
- LP FV: 「採用工数を50%削減できる ATS」← OK
- LP FV: 「働き方改革の DX」← NG（メッセージマッチ崩壊）
