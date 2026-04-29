# Hero Art Direction Gate

## 目的

ヒーロー（FV）設計の品質を最終確認する品質ゲート。
ダッシュボード型のデフォルト化を防止し、商材文脈に合うヒーロー選定を保証する。

## 担当エージェント

- `lp-hero-art-director`
- `lp-photo-composition-director`（写真パターン採用時）
- `lp-hero-pattern-reviewer`
- `lp-final-gatekeeper`（最終承認）

## 合格条件

- [ ] `scoring/hero-art-direction-scorecard.md`: **85点以上**
- [ ] `scoring/non-dashboard-hero-scorecard.md`: **85点以上**
- [ ] `scoring/photo-annotation-hero-scorecard.md`（写真パターン時）: **85点以上**

## 不合格条件

- 1パターンしか検討していない
- ダッシュボード型をデフォルト採用（理由なし）
- 抽象グラデ単独背景
- visual に CV貢献理由なし

## Critical Fail Conditions

```
- 1パターンのみ検討（3パターン未満）
- ダッシュボード型のデフォルト化（理由なし）
- visual の役割不明
- 装飾だけの hero
- ストックフォト感のある写真採用
- 背景が抽象グラデ単独
```

## 必須出力ファイル

```
outputs/05_design/hero-pattern-selection.md
outputs/05_design/hero-art-direction.md
outputs/05_design/photo-annotation-hero-plan.md（写真パターン時）
outputs/08_review/hero-art-direction-review.md
```

## 確認チェックリスト

```markdown
## Hero Art Direction Gate チェック

### パターン選定
- [ ] 3パターン以上比較
- [ ] 5軸採点済み
- [ ] 採用 + 不採用理由記録

### Visual 要素
- [ ] 全要素に役割（context / trust / expectation / empathy / action）
- [ ] 装飾だけの要素なし
- [ ] CV貢献理由を記録

### 背景処理
- [ ] 抽象グラデ単独使用なし
- [ ] 商材文脈に合う背景
- [ ] PC / SP 視認性確保

### コピー
- [ ] メインキャッチ 15〜25文字
- [ ] サブコピー 30〜50文字
- [ ] CTAボタン 10〜15文字

### KPI / 信頼バッジ
- [ ] 数値 + 出典
- [ ] 「個人差」明記

### ダッシュボード型
- [ ] 採用しない、または強い根拠あり

### 採用理由ログ
- [ ] hero-pattern-selection.md 作成
- [ ] hero-art-direction.md 作成
```

## Related Contract / Scorecard

- **Related Contracts**:
  - `contracts/hero-art-direction-output-contract.md`
  - `contracts/hero-pattern-selection-contract.md`
  - `contracts/photo-annotation-hero-contract.md`（写真パターン時）
- **Related Scorecards**:
  - `scoring/hero-art-direction-scorecard.md`（85+ 必須）
  - `scoring/non-dashboard-hero-scorecard.md`（85+ 必須）
  - `scoring/photo-annotation-hero-scorecard.md`（写真パターン採用時 85+ 必須）
- **Required Fix Actions**:
  - `skills/11_hero_art_direction/` 該当 skill で再設計
  - `lp-hero-art-director` に差し戻し

## 通過後の次フェーズ

→ Gate 5: Design Gate / visual-expression-gate / Final Release Gate
