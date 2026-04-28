# Scorecard Check

各 scorecard でのスコアを集計し、納品可否を判断。

## 必須スコアカード

### 総合
- [ ] `scoring/lp-master-scorecard.md`: ___ / 100点（**90+ 必須**）

### Emotional CVR Layer
- [ ] `scoring/emotional-cvr-scorecard.md`: ___ / 100点（**85+ 必須**）
- [ ] `scoring/benefit-clarity-scorecard.md`: ___ / 100点（**85+ 必須**）
- [ ] `scoring/expectation-scorecard.md`: ___ / 100点（**85+ 必須**）
- [ ] `scoring/self-relevance-scorecard.md`: ___ / 100点（**85+ 必須**）

### 専門スコアカード
- [ ] `scoring/first-view-scorecard.md`: ___ / 100点（90+ 推奨）
- [ ] `scoring/offer-scorecard.md`: ___ / 100点（80+ 推奨）
- [ ] `scoring/copy-scorecard.md`: ___ / 100点（85+ 推奨）
- [ ] `scoring/design-scorecard.md`: ___ / 100点（85+ 推奨）
- [ ] `scoring/cta-form-scorecard.md`: ___ / 100点（85+ 推奨）
- [ ] `scoring/measurement-scorecard.md`: ___ / 100点（85+ 推奨）

### 安全性
- [ ] `scoring/legal-risk-scorecard.md`: ___ / 100点（**95+ 必須・Critical Fail なし**）

### 最終
- [ ] `scoring/final-output-scorecard.md`: ___ / 100点（**90+ 必須**）

## 判定

### 全 scorecard 合格
→ 納品可能

### Emotional CVR scorecards のうち1つでも 85未満
→ Emotional CVR 差し戻し（該当 skill / agent で再設計）

### lp-master 90未満
→ 主要改善が必要

### legal-risk 95未満 or Critical Fail
→ **公開不可**（点数に関係なく差し戻し）

### final-output 90未満
→ 統合品質で再採点

## Critical Fail Conditions（点数に関係なく差し戻し）

- 法令違反表現
- 出典なき断定数値
- 個人情報の生送信
- メインCV不在
- 計測完全欠落
- 主要ブラウザで崩れ
- ベネフィットが機能羅列レベルに留まる
- 期待感が誇大表現で作られている
- 自分ごと化要素が皆無
- CV後の流れが完全に不明

## 改善アクション

90点未満の項目を、該当 skill / agent / contract にフィードバック。
