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

## 参照ドキュメント

- [project-rules.md](project-rules.md) — プロジェクト運用ルール
- [lp-production-flow.md](lp-production-flow.md) — 制作フロー全体
- [hearing-sheet.md](hearing-sheet.md) — ヒアリングシート
- [output-formats.md](output-formats.md) — 出力フォーマット規定
- [director/direction-policy.md](director/direction-policy.md) — ディレクター運用方針
- [quality-gates/](quality-gates/) — 9段階品質ゲート
