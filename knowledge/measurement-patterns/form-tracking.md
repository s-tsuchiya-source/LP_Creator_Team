# フォーム計測

## 計測ポイント
1. **フォーム到達**: フォームセクションが viewport に入った
2. **フォーム開始**: 最初のフィールドにフォーカス
3. **フォームエラー**: バリデーションエラー発生
4. **フォーム送信**: 送信ボタン押下＆成功
5. **サンクスページ到達**: 送信後のページビュー

## 実装

### dataLayer push 例

```javascript
// フォーム到達
const formEl = document.querySelector('#main_form');
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    dataLayer.push({ event: 'form_view', form_id: 'main_form' });
    observer.disconnect();
  }
});
observer.observe(formEl);

// フォーム開始
formEl.addEventListener('focusin', () => {
  if (!formEl.dataset.started) {
    dataLayer.push({ event: 'form_start', form_id: 'main_form' });
    formEl.dataset.started = 'true';
  }
}, { once: true });

// フォームエラー
formEl.addEventListener('invalid', (e) => {
  dataLayer.push({
    event: 'form_error',
    form_id: 'main_form',
    field_name: e.target.name,
    error_type: e.target.validity.valueMissing ? 'missing' : 'invalid'
  });
}, true);

// フォーム送信
formEl.addEventListener('submit', () => {
  dataLayer.push({ event: 'form_submit', form_id: 'main_form' });
});
```

## 漏斗分析
- フォーム到達率 = 到達 / セッション
- 開始率 = 開始 / 到達
- 完了率 = 送信 / 開始
- 各段階のドロップオフを見て改善

## エラー分析
- どのフィールドでエラーが多いか
- バリデーションメッセージの改善対象を特定
