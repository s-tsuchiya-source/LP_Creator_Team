# Visual Expression Gate

## 目的

LP の Visual Expression Layer（モーション / タイポ / 形状 / 全体ビジュアル）を最終確認する品質ゲート。

## 担当エージェント

- `lp-motion-director`
- `lp-typography-director`
- `lp-shape-language-designer`
- `lp-human-art-reviewer`（統合判定）

## 合格条件

- [ ] `scoring/visual-expression-scorecard.md`: **85点以上**
- [ ] `scoring/motion-variety-scorecard.md`: **85点以上**
- [ ] `scoring/japanese-label-naturalness-scorecard.md`: **85点以上**
- [ ] `scoring/shape-language-scorecard.md`: **85点以上**
- [ ] 必須出力ファイル全て作成済み

## 不合格条件

- 4 visual scorecard のうち1つでも 85未満
- Critical Fail 該当あり

## Critical Fail Conditions（点数に関係なく差し戻し）

```
- 全セクションで同じ translateY reveal
- reveal系アニメーションが1LP内の40%超
- 装飾英語残存（FEATURE / ABOUT / FLOW 等）
- 角丸カード型コンポーネントが全セクションの50%超
- 参考サイトの丸写し（CSS 直接コピー）
- CV直前の過剰モーション
- prefers-reduced-motion 未対応
- UI部品ごとの採用理由なし
- モーションごとの「何を理解させる動きか」記録なし
- 画像・図解ごとのCV貢献理由なし
```

## 必須出力ファイル

```
outputs/05_design/visual-expression-map.md
outputs/05_design/motion-storyboard.md
outputs/05_design/typography-rationale.md
outputs/05_design/shape-language-map.md
outputs/08_review/visual-expression-review.md
outputs/08_review/visual-expression-scorecard.md
```

## 確認チェックリスト

```markdown
## Visual Expression Gate チェック

### モーション
- [ ] 各モーションに目的記載
- [ ] translateY reveal 比率 40%以下
- [ ] CV直前の過剰モーションなし
- [ ] prefers-reduced-motion 完全対応
- [ ] motion-variety-scorecard 85+

### タイポ
- [ ] 装飾英語ゼロ
- [ ] 各ラベルに採用理由
- [ ] ペルソナ語彙整合
- [ ] japanese-label-naturalness-scorecard 85+

### 形状
- [ ] 角丸カード比率 50%以下
- [ ] 4種以上の形状使い分け
- [ ] 各形状に採用理由
- [ ] shape-language-scorecard 85+

### 全体
- [ ] visual-expression-map.md 作成
- [ ] visual-expression-scorecard 85+
- [ ] 参考サイト丸写しなし
- [ ] 画像・図解にCV貢献理由
- [ ] UI部品ごとに採用理由
```

## Related Contract / Scorecard

- **Related Contracts**:
  - `contracts/visual-expression-output-contract.md`
  - `contracts/motion-storyboard-contract.md`
  - `contracts/typography-rationale-contract.md`
  - `contracts/shape-language-contract.md`
- **Related Scorecards**:
  - `scoring/visual-expression-scorecard.md`（85+ 必須）
  - `scoring/motion-variety-scorecard.md`（85+ 必須）
  - `scoring/japanese-label-naturalness-scorecard.md`（85+ 必須）
  - `scoring/shape-language-scorecard.md`（85+ 必須）
- **Minimum Passing Score**: 4 visual scorecard 全て 85+
- **Critical Fail Conditions**: 上記のリスト参照
- **Required Fix Actions**:
  - `skills/10_visual_expression/` 該当 skill で再設計
  - 該当 agent に差し戻し

## 通過後の次フェーズ

→ Gate 9: Final Release Gate
