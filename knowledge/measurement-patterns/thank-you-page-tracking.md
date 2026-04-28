# サンクスページ計測

## 役割
- CV計測の確実な発火地点
- 媒体CV送信
- Enhanced Conversion 送信

## 設計
- フォーム送信成功時にサンクスページへ遷移
- URL: `/thanks/` or 動的に変更

## 計測タグ

### GA4 CV
```javascript
// サンクスページ ロード時
gtag('event', 'form_submit', {
  form_id: 'main_form'
});
```

### Google Ads CV
```javascript
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXXXX/YYYYYYYYY'
});
```

### Meta Pixel
```javascript
fbq('track', 'Lead');
```

## Enhanced Conversion
- メールアドレス・電話番号をハッシュ化して送信
- 計測精度向上

```javascript
gtag('set', 'user_data', {
  email_address: hashedEmail,
  phone_number: hashedPhone
});
```

## 注意点
- サンクスページのURLが「フォーム送信」のみで到達されるよう保証
- 直接アクセスでも CV 計測されないように制御（URLパラメータチェック等）
- 重複計測を避ける

## 公開前の検証
- GTM プレビューモード
- GA4 リアルタイムレポート
- Google Ads / Meta のテストイベント
