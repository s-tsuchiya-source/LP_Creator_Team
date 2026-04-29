# Typography Rationale - aggregate-visual-fullquality 4LP

## サマリー

- 検出英語ラベル: 37 件
- 文脈付き英語（残置）: 約20件（PDCA / Before / After / API 等）
- 装飾英語（要修正）: 約17件
- 既存LP段階修正方針: 次回 release-batch で実施

## 検出英語ラベル

```
ACT / AFTER / APPLICATIONS / APPLY RATE / AXIS
BEFORE / CHANNEL COVERAGE / CHANNELS ACTIVE / CHANNELS / CHECK
COMPANY / CONSULTATION / CPA / DASHBOARD AT A GLANCE
FRI / FUNNEL CV / HANDOVER / HIRE RATE
INTEGRATED / METRICS CATALOG / METRICS
MON / MONTHLY SPEND / MTG / OUTPUT
PDCA / PLAN / RECLAIMED / RESOURCES / REVIEW
```

## 判定一覧

### 残置（業界用語・固有名・略語）

| 英語 | 判定 | 理由 |
|---|---|---|
| CPA | 残置 | 広告業界用語（コスト指標） |
| CV | 残置 | 業界略語（コンバージョン） |
| KPI | 残置 | 業界用語 |
| API | 残置 | 業界用語 |
| PDCA | 残置 | 経営用語 |
| BEFORE / AFTER | 残置 | 比較表現として一般的 |
| MON / FRI | 残置 | 曜日略記（業務文脈） |
| MTG | 残置 | 業務略語 |
| PLAN / ACT / CHECK / REVIEW | 残置 | PDCAサイクル要素 |

### 修正推奨（装飾英語）

| 英語 | 判定 | 修正案 |
|---|---|---|
| DASHBOARD AT A GLANCE | 装飾 | 「ダッシュボード一覧」 |
| METRICS CATALOG | 装飾 | 「指標一覧」 |
| METRICS | 状況による | コンテキストで「指標」 |
| CHANNELS ACTIVE | 装飾 | 「稼働中の媒体」 |
| CHANNEL COVERAGE | 装飾 | 「媒体カバー率」 |
| MONTHLY SPEND | 装飾 | 「月額予算」 |
| INTEGRATED | 装飾 | 「統合済み」or 削除 |
| HANDOVER | 装飾 | 「引き継ぎ」 |
| CONSULTATION | 装飾 | 「相談」 |
| HIRE RATE | 状況による | 「採用成功率」 |
| APPLY RATE | 装飾 | 「応募率」 |
| FUNNEL CV | 装飾 | 「ファネルCV」 or 削除 |
| RECLAIMED | 装飾 | 「削減できた」 |
| RESOURCES | 装飾 | 「リソース」 |
| OUTPUT | 装飾 | 「成果物」 |
| AXIS | 装飾 | 「軸」 |
| COMPANY | 装飾 | 「自社」 or 削除 |
| APPLICATIONS | 装飾 | 「応募者」 |

## ペルソナ語彙整合

ターゲット: 採用担当者・人事責任者

業界用語整合性：
- ✓ CPA / CV / KPI（採用業界一般）
- ✓ PDCA（業務改善文脈）
- ✗ DASHBOARD AT A GLANCE（装飾的）
- ✗ FUNNEL CV（業界用語だが装飾的配置）

## 文字数チェック

| ラベル | 文字数 | 適正 |
|---|---|---|
| CPA | 3 | バッジ用（OK） |
| BEFORE/AFTER | 6/5 | 比較ラベル（OK） |
| METRICS CATALOG | 15 | やや長い装飾（修正推奨） |

## 段階的修正方針

本フェーズでは Visual Expression Layer の基盤導入を優先し、
既存装飾英語の日本語化は次回リリース時に段階適用する。

### 次回フェーズで実施

1. 各LP内の装飾英語を該当日本語に置換
2. CSS の英語ラベル装飾（letter-spacing 等）も合わせて見直し
3. japanese-label-naturalness-scorecard 85+ 達成

## NG判定された装飾英語の根拠

### 「DASHBOARD AT A GLANCE」
- セクション見出しとして配置
- 装飾感が強く、ペルソナの業務語彙と不整合
- 「ダッシュボード一覧」「ひと目で見える指標」が自然

### 「METRICS CATALOG」
- セクション見出し
- 「指標カタログ」「指標一覧」のほうが自然
- 装飾としての英語使用

### 「INTEGRATED」
- バッジ的配置
- 形容詞単独で意味希薄
- 「統合済み」or 削除

## Related

- `contracts/typography-rationale-contract.md`
- `skills/10_visual_expression/japanese-microcopy-label-skill.md`
- `scoring/japanese-label-naturalness-scorecard.md`
- `human-quality/anti-ai-writing-principles.md`
