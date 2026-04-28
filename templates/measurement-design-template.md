# 計測設計書: [案件名]

## 計測ツール
- GA4 プロパティID: G-XXXXXXX
- GTM コンテナID: GTM-XXXXXXX
- Google Ads アカウント:
- Meta Pixel ID:
- Yahoo!広告 タグ:

## GA4 イベント設計

| イベント名 | 発火条件 | パラメータ | 主用途 |
|---|---|---|---|
| `page_view` | ページビュー | page_title, page_path | 流入計測 |
| `cta_click` | CTAボタンクリック | cta_position, cta_text | CTRS |
| `form_start` | フォーム入力開始 | form_id | 開始率 |
| `form_submit` | フォーム送信成功 | form_id, lead_score | CV |
| `form_error` | バリデーションエラー | form_id, field_name, error_type | 阻害要因 |
| `phone_click` | tel: リンクタップ | phone_position | 補助CV |
| `scroll_depth` | スクロール25/50/75/100% | scroll_percent | エンゲージメント |
| `faq_open` | FAQ開閉 | faq_id, faq_question | 不安箇所 |
| `video_play` | 動画再生 | video_id | エンゲージメント |

## GTM タグ

| タグ名 | タイプ | トリガー | 備考 |
|---|---|---|---|
| GA4 - Configuration | GA4 設定 | All Pages | 全ページ |
| GA4 - cta_click | GA4 イベント | Click - CTA | data-event="cta_click" |
| GA4 - form_submit | GA4 イベント | Custom Event | dataLayer push |
| Google Ads - CV | Google Ads CV | Custom Event | form_submit |
| Meta Pixel - PageView | カスタムHTML | All Pages | |
| Meta Pixel - Lead | カスタムHTML | Custom Event | form_submit |

## トリガー

| トリガー名 | タイプ | 条件 |
|---|---|---|
| All Pages | ページビュー | All |
| Click - CTA | クリック - 全要素 | data-event equals cta_click |
| Custom Event - form_submit | カスタムイベント | event equals form_submit |
| Custom Event - form_start | カスタムイベント | event equals form_start |

## 変数

| 変数名 | タイプ | 取得値 |
|---|---|---|
| dlv - cta_position | データレイヤー変数 | cta_position |
| dlv - form_id | データレイヤー変数 | form_id |
| dlv - lead_score | データレイヤー変数 | lead_score |

## データレイヤー仕様

```javascript
// CTA クリック時
dataLayer.push({
  event: 'cta_click',
  cta_position: 'fv',
  cta_text: '無料で資料請求'
});

// フォーム開始時
dataLayer.push({
  event: 'form_start',
  form_id: 'main_form'
});

// フォーム送信成功時
dataLayer.push({
  event: 'form_submit',
  form_id: 'main_form',
  lead_score: 'A'
});
```

## CV 設定

### GA4
- 主要なイベント（Key Event）に設定:
  - form_submit
- カスタムディメンション:
  - cta_position
  - lead_score

### Google Ads
- インポートCV: form_submit
- Enhanced Conversion: 有効（メールハッシュ送信）

### Meta
- 主要なイベント: Lead

## 個人情報の取扱
- 個人情報（氏名・メール・電話）はGA4パラメータに送らない
- Enhanced Conversion はクライアント側でハッシュ化
- プライバシーポリシーに計測利用を明記

## 確認手順
1. GTM プレビューモードでイベント発火確認
2. GA4 リアルタイムレポートで確認
3. Google Ads / Meta タグのテストイベント確認
