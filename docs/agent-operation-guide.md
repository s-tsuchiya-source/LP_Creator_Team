# エージェント運用ガイド

各エージェントの呼び出し方・連携の指針。

## 基本原則

1. **lp-director を起点とする** — 直接他エージェントを呼ばない
2. **最小構成で動かす** — 必要なエージェントだけ
3. **目的を明示** — 何を達成したいか
4. **入力情報を渡す** — どのドキュメントを参照するか
5. **期待出力を明示** — 形式・粒度・制約

## エージェントの探し方

| 用途 | エージェント |
|---|---|
| 戦略 | `lp-marketing-strategist` |
| CVR改善 | `lp-lpo-strategist` |
| ペルソナ | `lp-persona-researcher` |
| 構成 | `lp-structure-designer` |
| FVコピー | `lp-headline-specialist` |
| 本文コピー | `lp-sales-copywriter` |
| FAQ | `lp-faq-copywriter` |
| デザイン方針 | `lp-creative-director` |
| 実装 | `lp-frontend-engineer` |
| 計測 | `lp-ga4-gtm-specialist` |
| QA | `lp-qa-lead` |
| 法務 | `lp-legal-expression-checker` |
| 最終承認 | `lp-final-gatekeeper` |

全エージェント一覧は [.claude/agents/](../.claude/agents/) を参照。

## 呼び出しテンプレ

```
[エージェント名] へ依頼:

## 目的
[何を達成したいか]

## 入力
- [参照すべきドキュメント / ファイルパス]
- [前提情報]

## 期待出力
- [形式: Markdown / コード / 表]
- [粒度: 概要 / 詳細]
- [保存先: outputs/...]

## 制約
- [トーン: BtoB / カジュアル]
- [分量: A4 1枚程度 / 詳細]
- [期限: なし]

## 連携先
- 次に渡す: [次のエージェント]
- 並行: [同時に動かすエージェント]
```

## 並行実行

独立した複数エージェントは並行呼び出し可能：

```
以下を並行で実行してください：
- lp-persona-researcher: ペルソナ作成
- lp-competitor-researcher: 競合3社分析
- lp-market-researcher: 業界トレンド
```

## エージェント間の連携

### 直列連携（前段の出力を後段が読む）
```
戦略 → 構成 → コピー → デザイン → 実装 → 計測
```

### 並行連携
```
ペルソナ + 競合 + 市場（リサーチ）
↓
戦略統合
```

### レビュー連携
```
完成LP
  ↓
経営 + CV + ブランド（並行）
  ↓
最終承認
```

## エージェントの再呼び出し

最初の出力が物足りない場合：

```
[エージェント名] に再依頼:
- 前回の出力: [ファイル名]
- 改善要望:
  - [具体的に]
- 期待粒度: [より詳細 / より簡潔]
```

## 禁止パターン

- 全43エージェントを一度に起動
- 同じ観点を複数エージェントで重複
- 入力情報なしで依頼
- 期待出力が曖昧な依頼
- 中間成果物を毎回再生成

---

## 高品質化アップデートに関する追記

このプロジェクトは `skills/` `contracts/` `scoring/` `components/` `industry-playbooks/` を活用した高品質化アップデートが適用されています。

### 高品質化要素

| 要素 | 役割 | 場所 |
|---|---|---|
| skills | 作業手順 | `skills/` |
| contracts | 成果物の型 | `contracts/` |
| scoring | 品質採点 | `scoring/` |
| components | LP部品パターン | `components/` |
| industry-playbooks | 業種別攻略書 | `industry-playbooks/` |

### LP制作依頼時の推奨プロンプト

```
LP_Creator_Team の lp-director を起点にして、LP制作を開始してください。

まずは必要事項を最大12問以内でヒアリングしてください。
その後、回答内容をもとに、contracts と scorecards に準拠して、
戦略設計、構成、コピー、デザイン方針、HTML/CSS/JS、GA4/GTM計測設計、QAチェックリストまで作成してください。

80点未満の成果物は差し戻し、90点以上を納品推奨基準としてください。
```

### agent選定の考え方

- 案件タイプに応じて最小構成（director/agent-selection-rule.md）
- 全agent呼び出しは禁止
- 法務リスク該当業種では `lp-legal-expression-checker` が必須

### 品質スコアリングの運用

- 各フェーズ完了時: 該当 scorecard で採点
- 80点未満: 該当 agent に差し戻し
- 90点以上: 納品推奨
- 法務 Critical Fail: 点数に関係なく公開不可

### GitHub に上げてはいけない情報

- `.env` / `.env.*`
- `.claude/settings.local.json`
- API キー / 接続文字列
- 顧客実名・連絡先・ロゴ（許諾なし）
- 顧客実績数値の断定
- ブランドガイドライン PDF（NDA該当）
- 実案件の `outputs/` 配下成果物（公開リポジトリの場合）

詳細は `docs/github-upload-guide.md` を参照。
