# 計測設計 — RecruitFlow 資料請求LP

## 主CV / 副CV

- **主CV**: `form_submit`（cv = `resource_request`）
- **副CV**: なし

## GA4 イベント

| イベント名 | 発火条件 | パラメータ |
|---|---|---|
| `page_view` | ページ読み込み（GA4標準） | — |
| `cta_click` | `[data-event="cta_click"]` クリック | `position` (header / fv / mid_howit / mid_compare / floating) |
| `form_start` | フォーム入力開始（最初のinput時） | `form_id` |
| `form_validation_error` | バリデーション失敗時 | `form_id` |
| `form_submit` | バリデーション通過後の送信 | `form_id`, `cv: resource_request` |

## GTM 設定

- カスタムイベントトリガー: `cta_click` / `form_start` / `form_validation_error` / `form_submit`
- GA4 イベントタグ4本に紐付け（GTM変数で `position`, `form_id`, `cv` を渡す）
- Consent Mode v2 推奨（同意取得後に発火）

## ファネル

```
page_view
  ↓
section_view（FV / 機能 / 比較 / FAQ）※ optional, IO
  ↓
cta_click
  ↓
form_start
  ↓
form_submit (cv=resource_request)
```

## 測定上の注意

- `data-event` 属性をHTML側のCTA・送信ボタンに付与済み
- 個人情報をGA4 / dataLayer に送らない（メール・氏名を payload に乗せない）
- IP 匿名化はGA4の標準動作で担保
