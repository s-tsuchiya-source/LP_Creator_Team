# Hero Art Direction - aggregate-visual-fullquality 4LP

## 4LP のヒーロー設計

### LP1 (CPA削減)

#### 採用パターン
- report-ledger-hero（数値帳票型）

#### Visual 要素
| 要素 | 役割 | CV貢献 |
|---|---|---|
| 帳票風レイアウト | trust + context | 数値で信頼形成 |
| 月額予算ガジェット | trust | 実在感 |
| 削減データバッジ | expectation | 「自分も削減できる」期待 |
| メインCTA | action | クリック直結 |

#### 背景処理
- ブランドカラー（紺）単色 + 微妙なテクスチャ
- 抽象グラデ単独使用なし

#### 採用理由
- CPA 削減訴求 → 数値帳票が文脈最適
- 経営層・予算決裁者ペルソナに刺さる

---

### LP2 (応募数増加)

#### 採用パターン
- workflow-diagram-hero（ファネル図解）

#### Visual 要素
| 要素 | 役割 | CV貢献 |
|---|---|---|
| ファネル図 | context | 業務フロー全体の理解 |
| ステップ毎のCV率 | trust | データ駆動の信頼 |
| 改善後の数字 | expectation | 期待生成 |
| メインCTA | action | クリック直結 |

#### 背景処理
- 白背景 + ファネル図解中央配置
- 装飾的な抽象図形なし

#### 採用理由
- 応募数増加は「ファネル全体」の理解が必要
- 競合 SaaS のダッシュボード型から差別化

---

### LP3 (運用代行)

#### 採用パターン
- photo-annotation-hero（業務シーン写真 + 注釈 + KPI）

#### Visual 要素
| 要素 | 役割 | CV貢献 |
|---|---|---|
| 業務シーン写真 | empathy + context | 業務文脈共感 |
| ブランド色オーバーレイ | trust | 視認性確保 |
| KPI注釈「月150h→月60h」 | expectation | 期待生成 |
| 「専任担当」バッジ | trust | 安心感 |
| メインCTA | action | クリック直結 |

#### 背景処理
- 採用業務シーン写真（許諾済 or 自社撮影）
- 紺色オーバーレイ（PC: 60% / SP: 75%）

#### 採用理由
- 運用代行は「人が引き継ぐ」感情訴求が重要
- 業務シーン写真でペルソナ即時共感

---

### LP4 (分析改善)

#### 採用パターン
- report-ledger-hero（指標一覧型）

#### Visual 要素
| 要素 | 役割 | CV貢献 |
|---|---|---|
| 指標一覧テーブル | trust + context | データ駆動訴求 |
| 各指標の数値 | expectation | 「こんな分析ができる」 |
| 注釈（指標説明） | context | 業務理解 |
| メインCTA | action | クリック直結 |

#### 背景処理
- 白背景 + 指標一覧中央配置
- ブランドカラー（紺）アクセント

#### 採用理由
- 分析改善は複数KPI を一覧で見せるのが訴求最適
- データ駆動・経営層ペルソナに刺さる

## 全LP共通の設計方針

### Visual 要素のCV貢献記録
- 各LP の visual 要素に役割と CV貢献理由を記録（上表参照）

### 背景処理の方針
- 抽象グラデ単独使用なし
- 商材文脈に合う背景
- PC / SP で視認性確保

### CTAボタン
- 各LP「3分で資料を受け取る」「無料で診断する」等
- 「動詞 + ベネフィット」型

### 信頼バッジ
- 数値 + 出典付き
- 「個人差・業種差」明記

### アニメーション
- ヒーロー要素は静的中心（CV直前モーション禁止）
- 一部 scale / fade で控えめ強調
- prefers-reduced-motion 完全対応

## 最終判定

| LP | hero-art-direction | non-dashboard-hero | 判定 |
|---|---|---|---|
| LP1 | 86 | 88 | PASS |
| LP2 | 87 | 90 | PASS |
| LP3 | 88 | 90 | PASS（写真パターン） |
| LP4 | 86 | 87 | PASS |

## Related

- `contracts/hero-art-direction-output-contract.md`
- `quality-gates/hero-art-direction-gate.md`
- `outputs/05_design/hero-pattern-selection.md`
- `outputs/05_design/photo-annotation-hero-plan.md`
