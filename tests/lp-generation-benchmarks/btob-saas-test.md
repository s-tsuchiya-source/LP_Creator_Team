# Benchmark: BtoB SaaS LP（架空サービス）

## テストインプット

```text
LP_Creator_Team の lp-director を起点に、LP制作を開始してください。

商材: TalentFlow（架空 / 採用管理SaaS）
ターゲット: 中小企業（50〜300名）の人事担当者
CV: 資料請求 + 14日間無料トライアル
業種: BtoB SaaS

戦略 → 構成 → コピー → デザイン方針 → 計測 まで一気通貫で出してください。
80点未満は差し戻し、90点以上を納品基準としてください。
emotional-cvr-scorecard / benefit-clarity-scorecard / expectation-scorecard / self-relevance-scorecard
は85点以上必須です。
```

## 検証ポイント

### 1. lp-director の挙動
- 最大12問のヒアリングを提示したか
- 仮置き事項を明示したか
- 業種 playbook（btob-saas-playbook.md）を参照したか

### 2. 戦略フェーズ
- ペルソナ（人事担当者）が「実在感」あるか
- 訴求軸が差別化されているか
- KPIツリーが連結しているか

### 3. 構成フェーズ
- セクション数 10〜13
- FV / 課題 / 解決 / 機能 / 実績 / 比較 / セキュリティ / 価格 / 導入フロー / FAQ / 最終CTA を含む
- CTA最低3箇所

### 4. コピーフェーズ
- メインキャッチが3秒で意味取れるか
- ベネフィット翻訳ができているか
- 数値に出典付きか
- 法務リスクなし

### 5. Emotional CVR
- 9段階感情ジャーニーが反映されているか
- 「自分ごと化」要素（FV ターゲット明示・悩みリスト）
- 「期待感」要素（数値・事例・プロセス・第三者）
- 「不安解消」要素（6カテゴリ）
- CV直前のハードル下げ

## 評価方法

`tests/evaluation-checklists/` の5チェックリストで採点。

## 期待出力

`tests/expected-outputs/btob-saas-expected.md` を参照。

## 注意

実在のサービス名・実績数値を含めない（架空のまま検証）。
