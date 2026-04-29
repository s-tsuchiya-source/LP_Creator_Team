# Agent Orchestration Skill

## Purpose

LP制作工程に応じて必要最小限のエージェントを選定し、目的・入力・期待出力を明示して呼び出す。

## When to Use

- ブリーフ確定後の各フェーズ着手時
- 案件タイプ判別後

## Required Inputs

- 確定済みブリーフ
- 案件タイプ（新規 / 改善 / 広告 / BtoB 等）

## Step-by-Step Procedure

1. 案件タイプを `director/agent-selection-rule.md` で判別
2. 必要最小限のエージェントリストを抽出
3. 各エージェント呼び出し時のテンプレを準備：
   - 目的
   - 入力（参照ドキュメント）
   - 期待出力（contract指定）
   - スコアリング（scorecard指定）
   - 連携先
4. 独立タスクは並行呼び出し
5. 直列タスクは前段成果物を確定後に呼び出し
6. 各成果物を contract / scorecard で照合
7. スコア80未満は差し戻し

## Output Format

```
[エージェント名] 呼び出し:
- 目的:
- 参照: [ファイルパス]
- 期待出力: [contract名]
- スコアリング: [scorecard名]
- 連携先: [次エージェント or director]
```

## Quality Criteria

- 不要なエージェント呼び出しなし
- 並行可能なタスクは並行
- 各呼び出しに目的・入力・期待出力が明示
- contracts と scorecards の指定がある

## Common Failure Patterns

- 全エージェントを順次呼び出す
- 同観点を複数エージェントで重複
- 入力情報なしの依頼
- contract / scorecard 未指定

## Self Check

- [ ] 案件タイプに最小構成か
- [ ] 並行可能なタスクは並行か
- [ ] 各呼び出しにcontract/scorecardが紐づくか
- [ ] **デザイン関連 agent には `contracts/design-differentiation-output-contract.md` と `scoring/design-differentiation-scorecard.md` を必ず指定したか**

## Design Differentiation Orchestration

design-differentiation を必須化するため、デザイン系 agent（`lp-creative-director` / `lp-art-director` / `lp-web-designer` / `lp-ui-designer` / `lp-graphic-designer` / `lp-visual-art-director` / `lp-visual-asset-director` / `lp-cta-ui-designer` / `lp-motion-director` / `lp-mobile-visual-optimizer` / `lp-image-compositor` / `lp-infographic-designer` / `lp-responsive-specialist` / `lp-frontend-engineer`）を起動するブリーフには、以下を必ず含める：

- 商材・ターゲット・CV目的・Emotional Role の明示
- `contracts/design-differentiation-output-contract.md` への準拠を要求
- `scoring/design-differentiation-scorecard.md` 85点以上を採点条件に指定
- 汎用テンプレート（青グラデhero / 装飾アイコン羅列 / 装飾モーション）を Anti-Pattern として明示
- 該当する `industry-playbooks/[業種]-playbook.md` の Design Direction を指定
- `templates/visual-brief-template.md` を出力フォーマットとして指定

最終承認前に `lp-visual-quality-gate` および `lp-final-gatekeeper` で `quality-gates/design-differentiation-gate.md` の通過を確認する。

## Related Agents

- `lp-director`（このskillの主使用者）
- `lp-visual-asset-director`（visual orchestration の専門エージェント）
- `lp-visual-quality-gate`（visual 領域の品質ゲート）

## Related References

- `.ai-workflow/director/design-differentiation-task.md`
- `design-differentiation/mandatory-design-differentiation.md`
- `contracts/design-differentiation-output-contract.md`
- `scoring/design-differentiation-scorecard.md`
- `quality-gates/design-differentiation-gate.md`
- `validation/design-differentiation-validation.md`
- `configs/visual-agent-registry.json`
- `docs/visual-agent-architecture.md`
- `docs/visual-production-workflow.md`
