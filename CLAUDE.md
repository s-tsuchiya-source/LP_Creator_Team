# CLAUDE.md — LP_Creator_Team プロジェクト最上位ルール

このファイルは LP_Creator_Team で Claude Code が作業する際の最上位ルールです。グローバルルールよりプロジェクト個別ルールを優先します。

## プロジェクトの定義

- このプロジェクトは **LP制作専用チーム** である
- すべての制作物は **CV最大化** を目的とする
- ディレクター主導型で、`lp-director` が全体を統括する
- 戦略 → 構成 → コピー → デザイン → 実装 → 計測 → QA → 法務 → 最終承認 の工程を踏む

## 絶対ルール

### 1. ディレクター主導
- LP制作依頼は必ず `lp-director` を起点とする
- 他エージェントを単独で呼び出さない（ディレクター経由で選定）
- ディレクターが必要最小限のエージェントだけを選ぶ

### 2. 全エージェントを毎回使わない
- 全エージェントを毎回起動することは **禁止**
- 案件タイプに応じた最小構成で進める
- 不要なレビューチェーンを作らない

### 3. ヒアリングファースト（質問しすぎない）
- 初回ヒアリングは **最大12問まで**
- 不明点は「仮置き」で補完して前進
- ただし以下は必ず確認：CV地点 / ターゲット / 商材内容 / 法務リスク

### 4. 品質ゲート通過必須
- 制作物は `quality-gates/` の各ゲートを通過してから最終出力
- 不合格時は差し戻し → 修正 → 再判定

### 5. 実務粒度
- 抽象論ではなく、制作現場でそのまま使える粒度
- コピーは全文、コードは動作する形、計測はGA4イベント名・GTMトリガーまで

### 6. 言語ルール
- ユーザー応答は **日本語**
- 内部処理は英語で思考可
- ドキュメント・コメント・成果物は日本語

### 7. GitHub 公開前提
- 秘密情報・API キー・顧客実名・断定的実績数値を成果物・ドキュメントに含めない
- `.env` / `.env.*` / `.claude/settings.local.json` を作成・読み取り・出力しない
- 公開可能な Markdown ナレッジとして整理する

### 8. 検証必須
- Write/Edit 操作後は変更内容を確認
- システムリマインダーは誤りの可能性あり、検証したもののみ信頼
- 仮定する前に実際の状態を確認

## 出力方針

成果物は以下の優先順位で出力先を決定：

1. **戦略・構成・コピー・デザイン方針 等**: `outputs/` 配下の該当フェーズディレクトリ
2. **実装コード**: `outputs/06_code/` 配下に index.html / style.css / script.js
3. **計測設計**: `outputs/07_measurement/` 配下
4. **レビュー結果**: `outputs/08_review/` 配下

## 禁止事項

- 全エージェント一括呼び出し
- 12問を超える初回ヒアリング
- 検証なしの数値・実績の記載
- No.1表現・最高表現の根拠なし使用
- `.env` / 秘密情報ファイルの作成・読み取り
- 顧客固有情報の examples への混入
- 品質ゲートをスキップした最終出力

## エージェント選定の指針

詳細は [director/agent-selection-rule.md](director/agent-selection-rule.md) を参照。

| 案件タイプ | 主要エージェント |
|---|---|
| 簡易LP | director / structure / copy / design / frontend / qa |
| 広告LP | director / marketing / lpo / copy / ga4-gtm / qa |
| BtoB高単価LP | director / business-model / offer / persona / proof-copy / cta / qa |
| 採用LP | director / recruiting / persona / customer-insight / copy / faq / qa |
| 既存LP改善 | director / lpo / heatmap / ab-test / copy / qa |
| 法規制リスクあり | + legal-checker 必須 |
| HTML実装あり | + frontend / performance / accessibility / qa |

## セッション節約ルール

- ディレクターが先に仮説を立てる
- エージェント呼び出しは目的を明確にする
- 中間成果物を冗長化しない
- 重複レビューを避ける
- 不明点は仮説補完を優先

## 高品質化ルール（必須遵守）

すべての制作物は以下に準拠する：

- **すべての制作物は contracts に準拠する**（`contracts/` 配下）
- **主要成果物は scorecard で採点する**（`scoring/` 配下）
- **80点未満は差し戻す**
- **90点以上を納品推奨とする**
- **法務 Critical Fail は点数に関係なく公開不可**
- **agent は Required References を確認してから作業する**
- **skills は作業手順として使う**（`skills/` 配下）
- **contracts は成果物の型として使う**（`contracts/` 配下）
- **scoring は品質判定として使う**（`scoring/` 配下）
- **components は LP部品の勝ちパターンとして使う**（`components/` 配下）
- **industry-playbooks は業種別攻略書として使う**（`industry-playbooks/` 配下）
- **実案件情報を GitHub へ不用意にコミットしない**
- **outputs 配下に実案件成果物を保存する場合は公開リポジトリであることを確認する**

## ディレクター必須ワークフロー

`lp-director` は以下の順番で進める：

```
1. ユーザー依頼を読む
2. LPタイプ分類
3. 必要情報の充足率を判定
4. 最大12問のヒアリング
5. 仮置き事項を明示
6. 目的・CV・ターゲット・訴求軸を確定
7. 業種 playbook を選定
8. 必要 agent だけを選定
9. agent に渡すブリーフを作る（contract / scorecard を指定）
10. 各 agent の成果物を contract に照合
11. scoring で 80点未満なら差し戻し
12. legal-risk が高い場合は法務チェック必須
13. final-gatekeeper で最終判定
14. final-delivery-contract に沿って統合出力
```

詳細は `.claude/agents/lp-director.md` の「Director Mandatory Workflow」を参照。

## 参照ドキュメント

- [project-rules.md](project-rules.md) — プロジェクト運用ルール
- [lp-production-flow.md](lp-production-flow.md) — 制作フロー全体
- [hearing-sheet.md](hearing-sheet.md) — ヒアリングシート
- [output-formats.md](output-formats.md) — 出力フォーマット規定
- [director/direction-policy.md](director/direction-policy.md) — ディレクター運用方針
- [skills/README.md](skills/README.md) — 作業手順書
- [contracts/README.md](contracts/README.md) — 成果物の型
- [scoring/README.md](scoring/README.md) — 採点表
- [components/README.md](components/README.md) — LP部品パターン
- [industry-playbooks/README.md](industry-playbooks/README.md) — 業種別攻略書
- [quality-gates/](quality-gates/) — 9段階品質ゲート

## Emotional CVR Layer（最優先）

このプロジェクトにおけるLPの目的は、単に情報を伝えることではなく、
**見たユーザーにメリット・期待・安心・わくわく感を与え、CVを最大化すること**である。

LP制作時は常に以下を確認する：

- ユーザーは何を得られるのか
- ユーザーの未来はどう良くなるのか
- ユーザーは何に期待できるのか
- ユーザーの不安はどう解消されるのか
- なぜ今CVする必要があるのか
- CV後に何が起きるのか
- このLPを見て、ユーザーは前向きな気持ちになるか

ただし、期待感やわくわく感は、**誇張・煽り・派手な装飾で作るのではなく**、
具体的なメリット、信頼できる証拠、導入後の未来、安心できるプロセスで作る。

## 最高品質LPの定義

```txt
最高品質のLPとは、見た目が綺麗でも、情報が網羅されていても、装飾がかっこよくてもない。

最高品質のLPとは、見たユーザーが
「これは自分のためのサービスだ」
「導入後の未来が想像できる」
「期待・安心・納得を得られる」
「まず資料を見てみたい」
と思い、CVに進む心理状態を作れるLPである。

LPの品質 = 情報品質 × 信頼品質 × 体験価値 × 期待感 × CV導線
```

## Emotional CVR Layer 必須スコア

最終納品前に、以下を満たすこと：

- `scoring/emotional-cvr-scorecard.md`: **85点以上 必須**
- `scoring/benefit-clarity-scorecard.md`: **85点以上 必須**
- `scoring/expectation-scorecard.md`: **85点以上 必須**
- `scoring/self-relevance-scorecard.md`: **85点以上 必須**

総合スコア（lp-master-scorecard）: **90点以上 推奨**
法務リスク（legal-risk-scorecard）: **95点以上 必須・Critical Fail なし**

## Emotional CVR 関連ディレクトリ

- `experience-design/` — 体験価値・感情・CV接続レイヤー（中核ナレッジ）
- `skills/08_experience/` — 感情設計の作業手順
- `contracts/experience-value-output-contract.md` — 体験価値の出力形式
- `contracts/emotional-cvr-output-contract.md` — 感情ジャーニーの出力形式
- `components/emotion/` — 感情に届く部品の勝ちパターン

## Validation Layer / Human Quality Layer 必須運用

このプロジェクトでは、LP制作時に必ず Validation Layer と Human Quality Layer を通す。

最高品質のLPは、情報が揃っているだけでは不十分。
見たユーザーにメリット・期待・安心・自分ごと化を与え、かつAIっぽさを感じさせず、人間が現場を理解して作ったような具体性・自然さ・実在感が必要である。

以下を納品前の必須条件とする：

- 初回は必ずヒアリングから始める
- 使用agentは必要最小限とし、選定理由を残す
- Emotional CVR Layer を反映する
- 80点未満は差し戻す
- LP Structure Blueprint に沿って構成を確認する
- Human Quality Layer でAIっぽさを排除する
- HTML/CSS/JS は実用レベルで検証する
- final-gatekeeper が全項目を承認するまで納品しない

## Validation 必須スコア（追加）

- `scoring/human-naturalness-scorecard.md`: **85点以上**
- `scoring/anti-ai-smell-scorecard.md`: **90点以上**
- `scoring/lp-structure-completeness-scorecard.md`: **85点以上**
- `scoring/code-practicality-scorecard.md`: **85点以上**

## 関連ディレクトリ

- `validation/` — 検証基盤
- `lp-structure-blueprint/` — LP王道構成
- `human-quality/` — 人間品質ナレッジ
- `skills/09_humanization/` — Anti-AI 編集手順
- `tests/validation-scenarios/` — テストシナリオ
- `tests/expected-behaviors/` — 期待動作
- `tests/evaluation-rubrics/` — 評価ルーブリック

## Visual Expression Layer 必須運用

このプロジェクトでは、LP制作時に Visual Expression Layer を必ず通す。

### 必須制約

1. 全セクションで同じ translateY reveal を使わない
2. reveal系アニメーションは1LP内の最大40%まで
3. 英語ラベルは意味がある場合のみ許可
4. 装飾英語は禁止
5. 角丸カード型コンポーネントが全セクションの50%を超えたら差し戻し
6. UI部品ごとに採用理由を記録する
7. モーションごとに「何を理解させる動きか」を記録する
8. 画像・図解ごとにCVへの貢献理由を記録する
9. 参考サイトは丸写し禁止。原理のみ抽出する
10. CV前の過剰モーションは禁止

### 必須スコア（追加）

- `scoring/visual-expression-scorecard.md`: **85点以上 必須**
- `scoring/motion-variety-scorecard.md`: **85点以上 必須**
- `scoring/japanese-label-naturalness-scorecard.md`: **85点以上 必須**
- `scoring/shape-language-scorecard.md`: **85点以上 必須**

### 関連ディレクトリ

- `skills/10_visual_expression/` — 視覚表現スキル
- `contracts/visual-expression-output-contract.md`
- `contracts/motion-storyboard-contract.md`
- `contracts/typography-rationale-contract.md`
- `contracts/shape-language-contract.md`
- `quality-gates/visual-expression-gate.md`

### 担当エージェント（新規）

- `lp-motion-director` — モーション意味設計
- `lp-typography-director` — 日本語ラベル設計
- `lp-shape-language-designer` — 形状言語設計
- `lp-human-art-reviewer` — 人間品質審査

## Hero Art Direction + Japanese Line Break Layer 必須運用

このプロジェクトでは、LP制作時に Hero Art Direction Layer と Japanese Line Break Layer を必ず通す。

### Hero Art Direction 必須制約

1. ダッシュボード型ヒーローをデフォルトにしない
2. LP制作時に最低3つのヒーローパターンを比較して選定する
3. 選定理由を `outputs/05_design/hero-pattern-selection.md` に残す
4. ヒーロー画像は装飾ではなくCVに貢献する役割を持たせる
5. 写真を使う場合は、網掛け・注釈・KPI・短コピーで訴求装置化する
6. ヒーロー背景に意味のない抽象グラデーションだけを使わない

### Japanese Line Break 必須制約

7. 日本語見出しは意味単位で改行する
8. PC / SP で改行位置を分ける
9. brタグを乱用しない
10. 助詞・修飾語・名詞の分断を禁止する

### 必須スコア（追加）

- `scoring/hero-art-direction-scorecard.md`: **85点以上**
- `scoring/non-dashboard-hero-scorecard.md`: **85点以上**
- `scoring/photo-annotation-hero-scorecard.md`（写真パターン採用時）: **85点以上**
- `scoring/japanese-line-break-scorecard.md`: **85点以上**

### 関連ディレクトリ

- `skills/11_hero_art_direction/` — Hero Art Direction skill
- `skills/12_japanese_copy_rhythm/` — Japanese Line Break skill
- `hero-pattern-library/` — 10種ヒーローパターン
- `quality-gates/hero-art-direction-gate.md`
- `quality-gates/japanese-line-break-gate.md`

### 担当エージェント（新規）

- `lp-hero-art-director` — ヒーロー統括
- `lp-photo-composition-director` — 写真ヒーロー
- `lp-hero-pattern-reviewer` — ヒーロー審査
- `lp-japanese-copy-rhythm-editor` — 日本語改行・リズム
