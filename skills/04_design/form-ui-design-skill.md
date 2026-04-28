# Form UI Design Skill

## Purpose

CV直前の最大の離脱箇所であるフォームを、入力負荷最小・送信完了率最大に設計する。

## When to Use

- フォーム実装前
- フォーム改善時

## Required Inputs

- フォーム項目仕様
- ペルソナ（入力リテラシー）

## Step-by-Step Procedure

1. 必須項目を最小化（5〜7項目目安）
2. 1カラムレイアウト
3. ラベルは入力欄の上
4. 必須・任意を明示
5. inputmode / autocomplete 適切に
6. リアルタイムバリデーション
7. エラーメッセージは原因明示
8. 送信ボタンを目立たせる
9. プログレス表示（マルチステップ時）
10. `outputs/05_design/form-ui.md` に保存

## Output Format

```markdown
## Form UI Design

### Layout
- 1カラム
- ラベル位置: 上
- 入力欄高さ: 48〜56px

### Fields (項目数)
- 必須:
- 任意:

### Validation
- リアルタイム緑チェック
- 送信時赤エラー + 原因明示

### Submit Button
- 文言:
- サイズ: SP高さ56px
- 押下後ローディング
- 2重押下防止
```

## Quality Criteria

- 必須項目最小限
- 1カラム
- 16px以上のフォント
- バリデーション具体的
- 送信成功フィードバック

## Common Failure Patterns

- 必須項目過多（10項目以上）
- 2カラムレイアウト
- 送信失敗の原因隠蔽
- 2重送信可能

## Self Check

- [ ] 必須項目7以下
- [ ] 1カラム
- [ ] エラー原因明示

## Related Agents

- `lp-form-implementation-specialist`
- `lp-ui-designer`

## Knowledge 参照

- `knowledge/design-patterns/form-ui-design.md`
