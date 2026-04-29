# Hero Art Direction Output Contract

## Purpose

ヒーロー（FV）の総合設計結果を構造化された形で記録する。
`outputs/05_design/hero-art-direction.md` の必須形式。

## Required Sections

### 1. 採用ヒーローパターン
- パターン名（10種から）
- 採用理由

### 2. visual 要素一覧
- 各 visual の役割（context / trust / expectation / empathy / action）
- CV貢献理由

### 3. 背景処理
- 背景方針（写真 / 単色 / 図解 / etc）
- 採用理由
- PC / SP 視認性確認

### 4. メインコピー設計
- メインキャッチ
- サブコピー
- CTAボタン文言
- 文字数チェック

### 5. 信頼バッジ・KPI
- 配置
- 数値 + 出典

### 6. 注釈（callout）
- 配置（写真パターンの場合）
- 意味のある注釈設計

### 7. PC / SP レイアウト
- PC: 左右2カラム / 中央集中 / 全幅 等
- SP: 縦並び設計
- ブレークポイント設計

### 8. アニメーション
- ヒーロー要素のモーション種別
- prefers-reduced-motion 対応

### 9. 採用理由ログ
- 全要素に採用理由

### 10. 最終判定
- hero-art-direction-scorecard
- non-dashboard-hero-scorecard
- 合格 / 不合格

## Format Rules

```markdown
# Hero Art Direction

## 1. 採用パターン
- パターン: photo-annotation-hero
- 採用理由: 採用支援サービスの文脈に最適、業務シーンで共感誘発

## 2. visual 要素
| 要素 | 役割 | CV貢献 |
|---|---|---|
| 写真背景 | empathy / context | 業務シーン共感 |
| KPIバッジ「1,200社」 | trust | 実在感 |
| 注釈「月150h→月60h」 | expectation | 未来想起 |
| CTAボタン | action | クリック直結 |

## 3. 背景処理
- 種別: 写真背景 + ブランド色オーバーレイ
- PC: 透過 60% / SP: 透過 75%
- 採用理由: 写真の業務文脈を活かしつつ文字視認性確保

## 4. メインコピー
- メインキャッチ: 「採用工数を、最大60%削減」（15文字）
- サブコピー: 「中小企業の人事担当者向け 採用管理ツール」（22文字）
- CTAボタン: 「3分で資料を受け取る」（11文字）

## 5. 信頼バッジ
- 「導入1,200社」（自社調べ・2026年4月）
- 「ISO 27001 認証」

## 6. 注釈
- 写真右上: 「月150h → 月60h（自社調べ・100社平均）」
- 写真左下: 「ダッシュボードで見える化」

## 7. PC / SP レイアウト
- PC: 写真背景全面 + テキスト中央寄せ
- SP: 写真背景縦長 + テキスト中央集中
- ブレークポイント: 640px

## 8. アニメーション
- 写真背景: 静的（モーションなし）
- KPIバッジ: scale（重み強調）
- 注釈: fade（控えめ）

## 9. 採用理由ログ
- 全要素 + 配置 + CV貢献を記録

## 10. 最終判定
- hero-art-direction-scorecard: __/100（85+ 必須）
- non-dashboard-hero-scorecard: __/100（85+ 必須）
- 合格 / 不合格
```

## Acceptance Criteria

- 10セクション全て記録
- 全 visual 要素に CV貢献理由
- ダッシュボード型ならば理由付きの強い根拠
- 採用パターン以外の比較記録あり

## Rejection Criteria

- セクション欠落
- visual 要素に CV貢献理由なし
- ダッシュボード型のデフォルト採用
- 装飾的な背景

## Related

- agent: `lp-hero-art-director` / `lp-hero-pattern-reviewer`
- skills: `skills/11_hero_art_direction/`
- gate: `quality-gates/hero-art-direction-gate.md`
