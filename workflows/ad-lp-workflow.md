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

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-marketing-strategist, lp-lpo-strategist, lp-headline-specialist, lp-cta-flow-designer, lp-frontend-engineer, lp-performance-engineer, lp-ga4-gtm-specialist, lp-conversion-tracking-specialist, lp-qa-lead
- **skills**: 01_strategy, 02_structure, 03_copy (headline), 05_development (performance), 06_measurement (全)
- **contracts**: strategy / structure / copy / code / measurement
- **scorecards**: first-view / cta-form / measurement / final-output
- **components**: first-view/fv-ad-lp / cta / form
- **playbook**: 該当業種 + ad-lp-workflow

## 完了条件

- LCP < 2.5s 達成
- 媒体CV送信動作確認
- メッセージマッチ整合
- final-output-scorecard 90点以上

---

## Emotional CVR Check（追加）

このフロー完了時に、Emotional CVR Layer の観点で追加確認する。

### 完了条件（Emotional CVR）

- `scoring/emotional-cvr-scorecard.md` で **85点以上**
- `scoring/benefit-clarity-scorecard.md` で **85点以上**
- `scoring/expectation-scorecard.md` で **85点以上**
- `scoring/self-relevance-scorecard.md` で **85点以上**

### 使用する Emotional CVR 要素

- **experience-design**: cv-emotion-journey / benefit-realization / expectation / future-state / anxiety-to-expectation
- **skills/08_experience**: benefit-translation / expectation-building / future-state-copy / self-relevance-design / trust-to-action / cv-motivation-boost
- **contracts**: experience-value-output-contract / emotional-cvr-output-contract
- **components/emotion**: benefit-before-feature / future-state-section / expectation-copy / emotional-proof / anxiety-to-confidence / action-motivation-cta / cv-after-experience

### Emotional CVR フェーズ統合

通常フローに加えて、以下を実施する：

1. ペルソナ確定後、`experience-design/user-motivation-map.md` で動機マップを作成
2. 構成フェーズで `experience-design/cv-emotion-journey.md` の 9段階を反映
3. コピーフェーズで `skills/08_experience/` 全カテゴリを参照
4. デザインフェーズで `components/emotion/` を参照
5. 最終承認時に Emotional CVR 4 scorecard を全て採点
