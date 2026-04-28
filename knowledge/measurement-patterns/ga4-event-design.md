# GA4 イベント設計

## 基本原則
- イベント名は snake_case
- 推奨イベント名（GA4 標準）を優先利用
- カスタムイベントは命名規則を統一
- 個人情報をパラメータに含めない

## 推奨イベント

| イベント名 | 種別 | 用途 |
|---|---|---|
| `page_view` | 自動 | 流入計測 |
| `scroll` | 拡張計測 | スクロール率 |
| `click` | 拡張計測 | 外部リンク |
| `view_search_results` | 推奨 | サイト内検索 |

## カスタムイベント例

```javascript
// CTAクリック
gtag('event', 'cta_click', {
  cta_position: 'fv',          // FV / mid / final
  cta_text: '無料で資料請求'
});

// フォーム開始
gtag('event', 'form_start', {
  form_id: 'main_form'
});

// フォーム送信
gtag('event', 'form_submit', {
  form_id: 'main_form',
  lead_score: 'A'              // A / B / C
});

// FAQ開閉
gtag('event', 'faq_open', {
  faq_id: 'pricing_q1'
});
```

## カスタムディメンション
- `cta_position`
- `lead_score`
- `form_id`
- `utm_*`（UTMから取得）

## 主要なイベント（Key Event）に設定
- `form_submit`
- `phone_click`
- 該当する補助CV

## プライバシー
- 氏名・メール・電話を直接パラメータに送らない
- Enhanced Conversion はクライアント側でハッシュ化
