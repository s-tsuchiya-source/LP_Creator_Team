# tests/ — 品質ベンチマークテスト

LP_Creator_Team の制作品質を検証するためのベンチマークテストです。

## 目的

- LP_Creator_Team の出力品質を客観的に評価する
- 業種別・案件タイプ別の期待出力と比較する
- scorecard で品質を採点する
- 改善ループを回す

## ディレクトリ構成

```
tests/
├─ README.md                       # このファイル
├─ lp-generation-benchmarks/       # ベンチマークテスト
│  ├─ btob-saas-test.md
│  ├─ recruiting-test.md
│  ├─ hr-ads-test.md
│  └─ ad-lp-test.md
├─ expected-outputs/               # 期待出力例
│  ├─ btob-saas-expected.md
│  ├─ recruiting-expected.md
│  ├─ hr-ads-expected.md
│  └─ ad-lp-expected.md
└─ evaluation-checklists/          # 評価チェックリスト
   ├─ director-behavior-check.md
   ├─ output-contract-check.md
   ├─ scorecard-check.md
   ├─ emotional-cvr-check.md
   └─ final-quality-check.md
```

## LP_Creator_Team の品質検証方法

### Step 1: ベンチマークテストを選定

`lp-generation-benchmarks/` から、検証したい案件タイプを選ぶ。

### Step 2: テストケースを Claude Code に投入

ベンチマークファイルの「テストインプット」を `lp-director` に渡す。

### Step 3: 期待出力との比較

`expected-outputs/` の対応ファイルと、生成された出力を比較する。

### Step 4: 評価チェックリストでチェック

`evaluation-checklists/` の5チェックリストで採点する。

### Step 5: 改善

不足項目を特定し、該当 skill / contract / scorecard / agent を更新する。

## 期待出力との比較方法

期待出力ファイルには以下が記載されている：

- 必須セクション
- 必須コピー要素
- 必須数値根拠
- 必須Emotional CVR要素

生成された出力と項目別に比較し、不足を抽出する。

## scorecard での採点方法

評価チェックリスト内の指示に従い、以下のスコアカードで採点：

- `lp-master-scorecard.md` — 総合
- `emotional-cvr-scorecard.md` — 感情CVR
- `benefit-clarity-scorecard.md` — メリット
- `expectation-scorecard.md` — 期待感
- `self-relevance-scorecard.md` — 自分ごと化

## 改善ループ

1. ベンチマークテスト実行
2. 期待出力と比較 → 不足項目特定
3. 該当 skill / contract / agent を更新
4. 再テスト
5. 90点 / 85点 達成まで繰り返す

## 利用ルール

- ベンチマークは**架空サービス**で実施
- 実顧客情報・実績数値を含めない
- 公開リポジトリへのコミットOK
- 改善があれば PR で共有
