# LP Briefing Skill

## Purpose

LP制作依頼を受けた直後に、ヒアリング・前提整理・仮置き補完を行い、後段エージェントが作業可能なブリーフを作成する。

## When to Use

- ユーザーから新規LP制作依頼を受領したとき
- 既存LP改善で背景情報を整理するとき

## Required Inputs

- ユーザーからの依頼文
- 既存LP（改善案件）
- ブランドガイドライン（あれば）

## Step-by-Step Procedure

1. ユーザー依頼文を精読
2. 既に明示されている項目を抽出（商材 / 目的 / CV / ターゲット 等）
3. 不足項目をリストアップ
4. **最大12問以内** でヒアリングを1メッセージで提示
5. ユーザー回答を整理
6. 補完可能項目は仮置き（明示）
7. 法務リスクの該当業種なら追加質問
8. ブリーフを `outputs/01_brief/YYYY-MM-DD_案件名_brief.md` に保存
9. `contracts/brief-output-contract.md` の必須セクションを満たすか確認
10. ディレクターへ渡す

## Output Format

`templates/lp-brief-template.md` に準拠。`contracts/brief-output-contract.md` の必須セクションを必ず満たす。

## Quality Criteria

- 商材・目的・CV・ターゲットが確定
- 不足項目が明示されている
- 仮置き項目に「仮置き」ラベル
- 法務リスクの有無を判定済み

## Common Failure Patterns

- 12問を超える質問
- 仮置きと確定値の混同
- 重要不明点（CV / 商材 / 法務）を仮置きで進める
- 既存情報を再質問する

## Self Check

- [ ] 質問は12問以内か
- [ ] 重要不明点は確認済みか
- [ ] 仮置きはラベル付きか
- [ ] contractsの必須項目を満たすか

## Related Agents

- `lp-director`（このskillの主使用者）
