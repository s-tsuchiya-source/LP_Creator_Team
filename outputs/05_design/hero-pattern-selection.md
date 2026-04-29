# Hero Pattern Selection - aggregate-visual-fullquality 4LP

## 案件
- 対象: aggregate-visual-fullquality 配下 4LP
- 業種: 採用支援関連 BtoB
- 適用日: 2026-04-29

## 現状ヒーロー分析

| LP | 現ヒーロー | 判定 |
|---|---|---|
| LP1 (CPA削減) | report-ledger-hero（数値ダッシュボード型） | 妥当 |
| LP2 (応募数増) | workflow-diagram-hero（ファネル図） | 妥当 |
| LP3 (運用代行) | photo-billboard-hero（写真型） | photo-annotation-hero に変更推奨 |
| LP4 (分析改善) | report-ledger-hero（指標カタログ型） | 妥当 |

## 4LP のヒーローパターン再選定

### LP1 (CPA削減) - 採用: report-ledger-hero

#### 比較した3パターン

| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| A. report-ledger（数値帳票） | 5 | 4 | 5 | 4 | 4 | 22 |
| B. before-after | 4 | 4 | 5 | 4 | 4 | 21 |
| C. photo-annotation | 4 | 4 | 4 | 4 | 4 | 20 |

#### 採用理由
- 商材は CPA 削減訴求 → 数値帳票の形式が文脈に最適
- 月額予算ガジェット + 削減データで瞬間的な信頼形成
- 既存実装と整合
- 「数字で意思決定する経営層」ペルソナに刺さる

#### 不採用理由
- B (before-after): 既に数値帳票内で対比表現済み
- C (photo-annotation): 数字訴求の重みが薄れる

### LP2 (応募数増加) - 採用: workflow-diagram-hero（ファネル）

#### 比較した3パターン

| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| A. workflow-diagram（ファネル） | 5 | 4 | 5 | 5 | 4 | 23 |
| B. problem-visualization | 4 | 5 | 4 | 5 | 3 | 21 |
| C. before-after | 4 | 4 | 4 | 4 | 4 | 20 |

#### 採用理由
- 応募数増加は「ファネル改善」訴求 → ファネル図解が文脈に最適
- 「Apply → Selection → Hire」を可視化することで業務フロー全体の改善が一目で伝わる
- 競合がダッシュボード型ばかりで差別化

#### 不採用理由
- B (problem-visualization): 制作工数高い（インフォグラフィック必要）
- C (before-after): ファネル全体の改善訴求が単純化されすぎる

### LP3 (運用代行) - 採用: photo-annotation-hero

#### 比較した3パターン

| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| A. photo-annotation（採用採用） | 5 | 5 | 4 | 5 | 4 | 23 |
| B. customer-scene | 5 | 5 | 4 | 4 | 3 | 21 |
| C. workflow-diagram | 4 | 4 | 5 | 4 | 4 | 21 |

#### 採用理由
- 運用代行は「人が業務を引き継ぐ」訴求 → 採用担当者の業務シーン写真が最適
- 写真背景 + 「業務時間 月150h → 月60h」KPI + 「専任担当が引き受け」注釈
- 競合 SaaS が画面UI 中心 → 写真 + 注釈で差別化

#### 不採用理由
- B (customer-scene): 顧客許諾取得の手間（次回案件で実装）
- C (workflow-diagram): 「人が引き継ぐ」感情訴求が弱い

### LP4 (分析改善) - 採用: report-ledger-hero（指標カタログ）

#### 比較した3パターン

| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| A. report-ledger（指標一覧） | 5 | 4 | 5 | 4 | 5 | 23 |
| B. problem-visualization | 4 | 5 | 4 | 5 | 3 | 21 |
| C. workflow-diagram（PDCA） | 4 | 4 | 4 | 4 | 4 | 20 |

#### 採用理由
- 分析改善は「データ駆動の意思決定」訴求 → 指標一覧の形式が最適
- 「採用CPA / 応募数 / 採用成功率」など複数KPI を一覧で見せる
- 経営層・分析者ペルソナに刺さる

#### 不採用理由
- B (problem-visualization): 制作工数高い
- C (workflow-diagram): PDCA セクションで別途使用済み

## ダッシュボード型回避記録

各LPで「画面 SS をデフォルト採用」していないか検証：

```
LP1 report-ledger: 数値帳票（ダッシュボード型ではない、独自形式）
LP2 workflow-diagram: ファネル図解
LP3 photo-annotation: 業務シーン写真
LP4 report-ledger: 指標カタログ
```

→ 4LP のいずれもダッシュボード型のデフォルト採用ではない。

## 採用パターン サマリー

| LP | 採用パターン | 5軸合計 | 主訴求 |
|---|---|---|---|
| LP1 | report-ledger-hero | 22 | CPA削減数値 |
| LP2 | workflow-diagram-hero | 23 | ファネル改善 |
| LP3 | photo-annotation-hero | 23 | 業務シーン共感 |
| LP4 | report-ledger-hero | 23 | 指標一覧 |

## Related

- `contracts/hero-pattern-selection-contract.md`
- `quality-gates/hero-art-direction-gate.md`
- `outputs/05_design/hero-art-direction.md`
- `hero-pattern-library/`
