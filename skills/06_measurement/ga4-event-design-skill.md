# GA4 Event Design Skill

## Purpose

LPのCVファネルを完全に追えるGA4イベント設計を行う。

## When to Use

- 計測フェーズ
- LPローンチ前

## Required Inputs

- LP仕様
- フォーム仕様
- CV種別

## Step-by-Step Procedure

1. 計測対象イベントをリストアップ
2. イベント名を snake_case で命名
3. 推奨イベント（page_view / scroll 等）を優先利用
4. カスタムイベントの命名統一
5. パラメータ（cta_position / form_id / lead_score 等）を定義
6. 個人情報をパラメータに含めない確認
7. 主要なイベント（Key Event）を選定
8. `outputs/07_measurement/ga4-events.md` に保存

## Output Format

```markdown
## GA4 Events

| イベント名 | 発火条件 | パラメータ | Key Event |
|---|---|---|---|
| page_view | ロード | page_path | - |
| cta_click | CTAクリック | cta_position, cta_text | - |
| form_view | Form到達 | form_id | - |
| form_start | Form入力開始 | form_id | - |
| form_error | バリデーションエラー | form_id, field_name, error_type | - |
| form_submit | Form送信成功 | form_id, lead_score | ◯ |
| phone_click | tel:クリック | phone_position | ◯ |
| faq_open | FAQ開閉 | faq_id | - |
```

## Quality Criteria

- 主要ファネルが追える
- イベント名統一
- 個人情報を含まない
- Key Event選定済み

## Common Failure Patterns

- 過剰計測（イベント30以上）
- 個人情報の生送信
- 命名不統一（CamelCase + snake_case 混在）

## Self Check

- [ ] ファネル網羅
- [ ] 命名統一
- [ ] 個人情報なし

## Related Agents

- `lp-ga4-gtm-specialist`

## Knowledge 参照

- `knowledge/measurement-patterns/ga4-event-design.md`
