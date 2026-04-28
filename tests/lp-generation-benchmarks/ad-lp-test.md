# Benchmark: 広告流入LP（架空サービス）

## テストインプット

```text
LP_Creator_Team の lp-director を起点に、広告流入LP制作を開始してください。

商材: LegalCheckPro（架空 / 法務文書AIチェックSaaS）
広告キーワード: 「契約書 チェック」「リーガルチェック AI」
ターゲット: 中小企業の法務担当者・経営者
CV: 資料請求 + デモ予約
業種: BtoB SaaS / 広告流入LP

LCP < 2.5s 必達。GA4 / Google Ads / Meta Pixel 計測必須。
80点未満は差し戻し、90点以上を納品基準としてください。
Emotional CVR scorecards 4種は85点以上必須です。
```

## 検証ポイント

### 1. メッセージマッチ
- 広告キーワード「契約書 チェック」と FV の整合
- 「AI で一次チェック → 弁護士で最終チェック」の整理

### 2. 計測（広告連動LPの最重要要素）
- GA4 イベント（page_view / cta_click / form_submit）
- Google Ads CV（form_submit + Enhanced Conversion）
- Meta Pixel Lead
- UTM 取得

### 3. パフォーマンス
- LCP < 2.5s
- 画像 WebP / フォント最適化
- クリティカルCSS

### 4. 構成
- FV（強烈なベネフィット + 主CTA + 補助CTA「電話」）
- 課題（広告キーワードと連動）
- 解決策（AI機能のベネフィット）
- 導入実績
- 比較表（既存代替: 弁護士のみ / 自社人力）
- 価格
- FAQ
- 最終CTA

### 5. 法務
- 「弁護士業務との誤認」回避
- 「絶対に法的リスクなし」NG
- 「最終チェックは弁護士へ」注釈必須

### 6. Emotional CVR
- 「契約書チェック工数」削減期待（数値根拠付き）
- 「弁護士費用節約」期待
- 「失敗したくない」不安への対応
- 「上司に推せる」社内説明素材

## 期待出力

`tests/expected-outputs/ad-lp-expected.md` を参照。
