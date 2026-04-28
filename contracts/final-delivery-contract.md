# Final Delivery Contract

## Purpose

最終納品成果物の出力形式を固定化する。LP制作プロジェクトの最終アウトプット規定。

## Required Sections

すべて必須。1つでも欠落していれば納品不可。

1. **制作前提**
2. **仮置き事項**
3. **LP戦略**
4. **ターゲット**
5. **訴求軸**
6. **LP構成**
7. **ワイヤーフレーム**
8. **コピー全文**
9. **デザイン方針**
10. **実装ファイル**
11. **計測設計**
12. **QA結果**
13. **法務チェック結果**
14. **改善提案**
15. **次アクション**

## Required Fields

### 制作前提
- 案件名 / 制作期間 / ディレクター
- 公開日 / 公開後監視項目

### 仮置き事項
- ペルソナの細部
- 競合社名
- 数値の幅 等

### LP戦略
- メインCV
- KPI設計
- ファネル設計

### ターゲット
- メインペルソナ
- サブペルソナ（あれば）

### 訴求軸
- 主訴求
- 副訴求

### LP構成
- セクション順序
- 各セクションの目的

### ワイヤーフレーム
- PC / SP

### コピー全文
- FV / 全セクション本文 / FAQ / 最終CTA

### デザイン方針
- カラー / タイポ / レイアウト

### 実装ファイル
- index.html / style.css / script.js
- 計測 data 属性

### 計測設計
- GA4 イベント一覧
- GTM タグ仕様
- CV 設定

### QA結果
- ブラウザ確認 / レスポンシブ / リンク / フォーム / 計測 / 速度 / a11y

### 法務チェック結果
- 業界該当法令
- リスク表現の有無
- 修正済みの記録

### 改善提案
- 公開後のA/Bテスト案
- 中長期改善ロードマップ

### 次アクション
- 公開準備
- 実本番への差し替え（環境変数 / API キー / フォーム送信先）
- 公開後監視・初期チェック

## Optional Fields

- ロゴ素材
- 写真素材
- メディア掲載リスト

## Format Rules

- 1ファイルにまとめる場合は `outputs/08_review/final-delivery.md`
- 複数ファイルに分割する場合は目次として `final-delivery.md` を作成
- 全項目を網羅
- 仮置きと確定値を明示

## Acceptance Criteria

- 15項目すべて含まれている
- `scoring/lp-master-scorecard.md` で 90点以上
- 法務リスク Critical Fail なし
- 仮置き事項が明示
- 公開後監視項目あり

## Rejection Criteria

- 必須セクション欠落
- 総合スコア90点未満
- 法務 Critical Fail
- 計測未実装
- 仮置きと確定値の混同

## Related

- skill: `skills/00_director/final-integration-skill.md`
- scorecard: `scoring/lp-master-scorecard.md`, `scoring/final-output-scorecard.md`
- gate: `quality-gates/09-final-release-gate.md`
- agent: `lp-final-gatekeeper`, `lp-director`
