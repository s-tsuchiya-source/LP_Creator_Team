# Visual Direction Skill

## Purpose

LP全体のビジュアル方針（トーン / カラー / タイポ / 写真 / イラスト）を決定する。

## When to Use

- デザインフェーズ序盤

## Required Inputs

- ブランドガイドライン（あれば）
- ペルソナ
- 訴求軸
- 業種playbook

## Step-by-Step Procedure

1. **Design Differentiation 必須事前確認**: `.ai-workflow/director/design-differentiation-task.md` と `design-differentiation/mandatory-design-differentiation.md` を読む（汎用テンプレート禁止）
2. トーンを形容詞3つで定義（商材文脈・Emotional Role と紐付け）
3. **Reference Direction**: 外部リファレンス（pa-tu icons / UI Dictionary / Material / craftwork）から原理を抽出（丸写し禁止）
4. カラーパレット決定（メイン / アクセント / ベース / テキスト）+ それぞれの Emotional Role
5. コントラスト比を確認（4.5:1以上）
6. **Typography Strategy**: 主軸を1つ（trustworthy / energetic / premium / friendly / technical / editorial / recruitment-oriented から選定）
7. **Icon Strategy**: line / filled / duotone / pictogram / illustration / none を1つに統一し採用理由を明示
8. 写真テイスト（自然光 / モノクロ / カラフル / プロダクトUI / なし）+ ストック写真依存度の判断
9. **Animation Strategy**: micro / scroll-reveal / CTA emphasis / FAQ / process / なし のうち採用するものとその理由
10. **Visual Hierarchy**: first / second / third を定義し、CTA到達性を確認
11. **Anti-Generic Design Check**: 競合社名に置換しても成立する設計でないかを精査
12. NG表現リスト
13. `outputs/05_design/visual-direction.md` に保存（`contracts/design-differentiation-output-contract.md` 必須セクションを満たす）

## Output Format

`templates/lp-design-brief-template.md` に準拠。

## Quality Criteria

- ブランドガイドライン準拠
- コントラスト比4.5:1以上
- タイポ階層明確
- ペルソナ感性に合う
- **Design Differentiation の必須セクションすべて記録**
- **`scoring/design-differentiation-scorecard.md` 85点以上**

## Common Failure Patterns

- ガイドライン違反
- コントラスト不足
- トーン定義が曖昧
- ターゲット感性ズレ
- 汎用SaaS風の青グラデーション
- アイコン / フォント / アニメに採用理由なし
- Visual Hierarchy 未定義
- 競合置換可能なデザイン

## Self Check

- [ ] ガイドライン準拠
- [ ] コントラスト合格
- [ ] トーン3形容詞で定義
- [ ] Reference Direction（参考元 + 抽出原理）あり
- [ ] Icon Strategy 採用理由あり
- [ ] Typography Strategy 主軸決定
- [ ] Animation Strategy 採用理由あり
- [ ] Visual Hierarchy first / second / third 定義
- [ ] Emotional Role / Conversion Role 明示
- [ ] Anti-Generic Design Check 通過

## Related Agents

- `lp-creative-director`
- `lp-art-director`
- `lp-web-designer`
- `lp-ui-designer`
- `lp-graphic-designer`
- `lp-visual-art-director`
- `lp-visual-asset-director`
- `lp-cta-ui-designer`
- `lp-motion-director`
- `lp-mobile-visual-optimizer`
- `lp-visual-quality-gate`

## Related References

- `.ai-workflow/director/design-differentiation-task.md`
- `design-differentiation/mandatory-design-differentiation.md`
- `contracts/design-differentiation-output-contract.md`
- `scoring/design-differentiation-scorecard.md`
- `quality-gates/design-differentiation-gate.md`
- `validation/design-differentiation-validation.md`
- `templates/visual-brief-template.md`
- `templates/visual-review-sheet.md`
- `docs/visual-agent-architecture.md`
- `docs/visual-production-workflow.md`
