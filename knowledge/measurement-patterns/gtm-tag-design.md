# GTM タグ設計

## 基本構成
- タグ: 何を発火するか
- トリガー: いつ発火するか
- 変数: 何を取得するか

## タグ命名規則
- `[ツール名] - [イベント名]`
- 例: `GA4 - cta_click`, `Google Ads - CV`

## 標準タグ例

| タグ名 | タイプ | トリガー | 備考 |
|---|---|---|---|
| GA4 - Configuration | GA4 設定 | All Pages | 全ページ |
| GA4 - cta_click | GA4 イベント | Click - CTA | data-event |
| GA4 - form_submit | GA4 イベント | Custom Event | dataLayer |
| Google Ads - CV | Google Ads CV | Custom - form_submit | |
| Meta Pixel - PageView | カスタムHTML | All Pages | |
| Meta Pixel - Lead | カスタムHTML | Custom - form_submit | |

## 標準トリガー例

| トリガー名 | タイプ | 条件 |
|---|---|---|
| All Pages | ページビュー | All |
| Click - CTA | クリック - 全要素 | data-event = cta_click |
| Custom - form_submit | カスタム | event = form_submit |
| Scroll Depth | スクロール | 25/50/75/100% |

## 標準変数例

| 変数名 | タイプ | 取得値 |
|---|---|---|
| dlv - cta_position | データレイヤー変数 | cta_position |
| dlv - form_id | データレイヤー変数 | form_id |
| dlv - lead_score | データレイヤー変数 | lead_score |
| URL - utm_source | URL | utm_source |

## バージョン管理
- 公開前にプレビューモードで動作確認
- バージョン名・備考を記録
- 失敗時はロールバック可能
