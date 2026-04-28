# Brief Output Contract

## Purpose

LP制作ブリーフの出力形式を固定化し、後段フェーズが必要な情報を確実に受け取れるようにする。

## Required Sections

- 基本情報（案件名 / 作成日 / ディレクター / 公開時期）
- 商材
- 目的・KPI
- ターゲット
- ターゲットの悩み・欲求
- 提供価値
- 競合・差別化
- 実績・証拠
- 制約
- 出力形式
- 仮置き項目
- 確認が必要な項目

## Required Fields

- 商材名（必須）
- LP目的（必須）
- 主要CV（必須）
- 主ターゲット（必須）
- 法務リスク有無（必須）
- 出力形式（必須）

## Optional Fields

- 副ターゲット
- ペルソナ詳細
- 競合社名
- 参考LP
- 公開期日
- ブランドガイドライン

## Format Rules

- Markdown形式
- `templates/lp-brief-template.md` に準拠
- 仮置き項目には「仮置き」ラベル
- 確認項目には「要確認」ラベル

## Acceptance Criteria

- 必須フィールドすべて記入済み
- 仮置きと確定値が区別されている
- 法務リスクの有無が判定済み
- 後段エージェントが戦略立案できる粒度

## Rejection Criteria

- 商材・目的・CV・ターゲットのいずれかが不明
- 仮置きと確定値が混在
- 法務リスク該当業種で確認なし
- 重要不明点が3件以上

## Related

- skill: `skills/00_director/lp-briefing-skill.md`
- scorecard: `scoring/lp-master-scorecard.md`
- gate: `quality-gates/01-brief-completeness-gate.md`
- template: `templates/lp-brief-template.md`
