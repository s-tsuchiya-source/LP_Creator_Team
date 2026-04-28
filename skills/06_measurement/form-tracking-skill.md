# Form Tracking Skill

## Purpose

フォーム到達・開始・エラー・送信を計測し、ファネル分析を可能にする。

## When to Use

- フォーム実装時
- 送信完了率改善時

## Required Inputs

- フォーム HTML
- バリデーションロジック

## Step-by-Step Procedure

1. フォーム到達計測（IntersectionObserver）
2. フォーム開始計測（最初のfocusin）
3. バリデーションエラー計測（invalid イベント）
4. フォーム送信成功計測（submit イベント）
5. 各イベントを dataLayer に push
6. 個人情報をパラメータに含めない
7. サンクスページでも計測

## Output Format

```javascript
// Form View
const formEl = document.querySelector('#main_form');
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    dataLayer.push({ event: 'form_view', form_id: 'main_form' });
    observer.disconnect();
  }
});
observer.observe(formEl);

// Form Start
formEl.addEventListener('focusin', () => {
  if (!formEl.dataset.started) {
    dataLayer.push({ event: 'form_start', form_id: 'main_form' });
    formEl.dataset.started = 'true';
  }
}, { once: true });

// Form Error
formEl.addEventListener('invalid', (e) => {
  dataLayer.push({
    event: 'form_error',
    form_id: 'main_form',
    field_name: e.target.name,
    error_type: e.target.validity.valueMissing ? 'missing' : 'invalid'
  });
}, true);

// Form Submit
formEl.addEventListener('submit', () => {
  dataLayer.push({ event: 'form_submit', form_id: 'main_form' });
});
```

## Quality Criteria

- 各段階の計測実装
- 個人情報なし
- サンクスページで二重計測しない

## Common Failure Patterns

- 開始 / 送信のみで途中段階なし
- 個人情報の生送信
- サンクスページでの重複CV

## Self Check

- [ ] 5段階計測済み
- [ ] 個人情報なし

## Related Agents

- `lp-form-implementation-specialist`
- `lp-ga4-gtm-specialist`

## Knowledge 参照

- `knowledge/measurement-patterns/form-tracking.md`
