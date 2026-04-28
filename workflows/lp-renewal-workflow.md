# 既存LP改善ワークフロー

既存LPのCVR改善を行うフロー。

## 想定インプット

- 既存LP URL
- アクセス解析データ（GA4 / 直近3〜6ヶ月）
- ヒートマップ（あれば）
- 広告流入データ（あれば）

## ステップ詳細

### Step 1: 現状分析
- `lp-director` がブリーフ整理
- `lp-lpo-strategist` で診断
- `lp-heatmap-analyst` で行動分析（データあれば）
- 出力: `outputs/02_strategy/lpo-diagnosis.md`

### Step 2: 改善仮説
- 離脱要因リストアップ
- ICE / RICE で優先度付け
- 上位3〜5施策を選定
- 出力: `outputs/02_strategy/improvement-plan.md`

### Step 3: 改善実装
- 該当箇所のコピー: `lp-chief-copywriter`
- CTA改善: `lp-cta-flow-designer`
- フォーム改善: `lp-form-implementation-specialist`
- 必要に応じて `lp-frontend-engineer`

### Step 4: A/Bテスト計画
- `lp-ab-test-planner` でテスト設計
- パターン定義
- サンプルサイズ計算
- 出力: `outputs/07_measurement/ab-test.md`

### Step 5: 実装・公開
- 改善版を実装
- A/Bテスト開始
- `lp-qa-lead` で QA

### Step 6: 効果測定
- テスト期間中のデータ確認
- 統計的有意性判定
- 採用判断 → 本番反映

## 注意点

- 既存LPの良い部分を壊さない（CV観点での退行回避）
- 同時に複数要素を変えない（原因特定不能）
- ブランドガイドラインがあれば準拠

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-lpo-strategist, lp-heatmap-analyst, lp-ab-test-planner, lp-chief-copywriter, lp-cta-flow-designer, lp-form-implementation-specialist, lp-qa-lead
- **skills**: 02_structure (cta-flow), 03_copy, 04_design (form-ui), 06_measurement (form-tracking), 07_review
- **contracts**: copy-output / code-output / measurement-output / qa-output
- **scorecards**: cta-form / copy / measurement / final-output
- **components**: cta / form / faq
- **playbook**: 既存LP業種に応じて選定

## 完了条件

- 改善版 final-output-scorecard 85点以上
- A/Bテスト設計完了
- 計測実装完了

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
