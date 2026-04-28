# 計測設計ワークフロー

GA4 / GTM / 広告CVの計測設計を行うフロー。

## ステップ

### Step 1: 計測要件定義
- 主要CV（フォーム送信 / 電話 / 申込）
- 補助CV（資料DL / 動画再生 / FAQクリック）
- 出稿媒体（Google Ads / Meta / Yahoo）
- CRM / MA連携要否

### Step 2: GA4 イベント設計
- イベント名（snake_case）
- 発火条件
- パラメータ
- ユーザープロパティ

### Step 3: データレイヤー仕様
- フォーム送信時のpush
- CTAクリック時のpush
- ページビュー拡張
- 個人情報を含めない

### Step 4: GTM 構成
- タグ（GA4 / Google Ads / Meta Pixel / Yahoo）
- トリガー（ページビュー / クリック / フォーム送信 / カスタム）
- 変数（DataLayer / 1st-party Cookie）

### Step 5: 媒体CV
- Google Ads: gtag / GTM
- Meta Pixel: イベント設定
- Yahoo: コンバージョン測定タグ
- Enhanced Conversion 対応

### Step 6: 実装
- LPに data 属性付与
- GTM プレビューで動作確認
- リアルタイムでGA4確認

### Step 7: CV設定
- GA4 でCVイベント指定
- Google Ads でインポート
- Meta で「主要なイベント」設定

### Step 8: ドキュメント化
- 計測仕様書
- GTM コンテナ設定
- イベント一覧

## 推奨イベント

| イベント名 | 発火条件 | 用途 |
|---|---|---|
| `page_view` | ページビュー | 流入計測 |
| `cta_click` | CTAクリック | CTRS算出 |
| `form_start` | フォーム入力開始 | 開始率 |
| `form_submit` | フォーム送信 | CV |
| `form_error` | バリデーションエラー | 阻害要因 |
| `phone_click` | 電話番号クリック | 補助CV |
| `scroll_depth` | スクロール25/50/75/100% | エンゲージメント |
| `video_play` | 動画再生 | エンゲージメント |
| `faq_open` | FAQ開閉 | 不安箇所特定 |

## 個人情報の取扱

- フォーム送信時に氏名・メールをGAパラメータに送らない
- Enhanced Conversion はハッシュ化必須
- プライバシーポリシーに計測利用を明記
