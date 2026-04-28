# Review Board — レビューボード

LP公開前の最終レビューを担当する3観点のレビュアーと最終承認者。

## メンバー

| エージェント | 役割 |
|---|---|
| [lp-executive-reviewer](../.claude/agents/lp-executive-reviewer.md) | 経営観点 |
| [lp-conversion-reviewer](../.claude/agents/lp-conversion-reviewer.md) | CV観点 |
| [lp-brand-reviewer](../.claude/agents/lp-brand-reviewer.md) | ブランド観点 |
| [lp-final-gatekeeper](../.claude/agents/lp-final-gatekeeper.md) | 最終承認 |

## 担当範囲

- 経営: 事業KPI整合・売上貢献
- CV: 訴求 → CTA → フォーム の整合
- ブランド: ガイドライン準拠・トーン整合
- 最終承認: 全観点を統合し、公開可否を判定

## 判定区分

- **PASS** — そのまま公開可能
- **NEEDS WORK** — 修正後に公開可能
- **BLOCK** — 公開不可

## 主要な成果物

- 経営レビュー
- CVレビュー
- ブランドレビュー
- 最終判定書

保存先: `outputs/08_review/`

## 連携先

- 上流: 全チーム
- 下流: `lp-director`（公開判定通知）
- 並行: `lp-legal-expression-checker` / `lp-security-checker` / `lp-qa-lead`

## 運用ルール

詳細は [../director/final-review-rule.md](../director/final-review-rule.md) を参照。
