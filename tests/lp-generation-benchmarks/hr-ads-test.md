# Benchmark: HR / 求人広告連動LP（架空案件）

## テストインプット

```text
LP_Creator_Team の lp-director を起点に、求人広告連動LP制作を開始してください。

求人媒体: Indeed / Google Ads「[職種] 転職」連動
ターゲット: 30代の Webエンジニア（転職検討中）
CV: 応募
業種: HR / 求人広告

LP は LCP < 2.5s 達成必須。Google Ads CV / Meta Pixel 計測必須。
80点未満は差し戻し、90点以上を納品基準としてください。
Emotional CVR scorecards 4種は85点以上必須です。
```

## 検証ポイント

### 1. メッセージマッチ
- 広告キーワードと FV メインキャッチの整合
- 求人媒体特性に合った訴求

### 2. 計測
- Google Ads CV 設計
- Meta Pixel
- UTM 取得設計

### 3. パフォーマンス
- LCP < 2.5s（広告品質スコア対策）
- CLS < 0.1
- INP < 200ms

### 4. 構成
- FV: 職種 × 年収レンジ + 主CTA
- 「こんな経験ある方を求めています」
- 仕事内容（具体的）
- 期待役割と評価軸
- キャリアパス（5年後）
- 社員インタビュー
- 福利厚生・働き方
- 選考フロー
- FAQ
- 最終CTA

### 5. 法務
- 男女・年齢制限表現なし
- 「絶対に転職できる」NG
- 「年収XX万円保証」NG

### 6. Emotional CVR
- 「自分のスキルが活きる」期待
- 給与レンジへの期待（実態に即す）
- カルチャーフィット安心
- 応募後の流れ

## 期待出力

`tests/expected-outputs/hr-ads-expected.md` を参照。
