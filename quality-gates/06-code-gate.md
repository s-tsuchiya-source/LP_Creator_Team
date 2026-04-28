# Gate 6: Code Gate

## 目的

実装コードが品質・速度・a11y・計測対応を満たすかを判定する。

## 担当エージェント

- `lp-frontend-engineer`
- `lp-performance-engineer`
- `lp-accessibility-engineer`

## 合格条件

- [ ] セマンティックHTML
- [ ] レスポンシブ対応
- [ ] 軽量CSS
- [ ] 不要JSなし
- [ ] フォーム導線が分かりやすい
- [ ] 基本アクセシビリティ対応
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] 主要ブラウザ動作

## 不合格条件

- 巨大画像直接埋め込み
- div の入れ子地獄
- a11y 違反（alt なし / コントラスト不足）
- レンダリングブロック放置

## 差し戻し条件

- 上記不合格条件
- 計測 data 属性がない

## 確認チェックリスト

```markdown
## Code Gate チェック
- [ ] HTML 構造
- [ ] CSS 設計
- [ ] JS 軽量化
- [ ] レスポンシブ
- [ ] 画像最適化
- [ ] フォント最適化
- [ ] LCP / CLS / INP
- [ ] a11y 基本対応
- [ ] 計測 data 属性
```

## 通過後の次フェーズ

→ Gate 7: Measurement Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/code-output-contract.md`
- **Related Scorecard**: `scoring/final-output-scorecard.md`（実装品質 15点満点中13+）
- **Minimum Passing Score**: 実装品質 13+ / Lighthouse a11y 90+
- **Critical Fail Conditions**: LCP > 2.5s / 計測未実装 / alt 省略
- **Required Fix Actions**: `skills/05_development/` で再実装

---

## Validation Layer / Human Quality Layer 通過確認

### Validation Layer
- [ ] director-behavior-validation 合格
- [ ] agent-selection-validation 合格
- [ ] emotional-cvr-validation 合格
- [ ] scorecard-enforcement-validation 合格
- [ ] code-practicality-validation 合格
- [ ] lp-structure-completeness-validation 合格
- [ ] anti-ai-output-validation 合格

### Human Quality Layer
- [ ] human-naturalness-scorecard 85+
- [ ] anti-ai-smell-scorecard 90+
- [ ] 競合置き換えテスト 90%以上不成立
- [ ] 業務シーン描写あり
- [ ] 担当者の本音入り
- [ ] 数字に出典付き
- [ ] 商材文脈に合うビジュアル

### LP Structure Blueprint 準拠
- [ ] 16必須項目網羅、または省略項目に理由
- [ ] セクション順序が論理的
- [ ] CTA 最低3箇所
- [ ] FAQ 6カテゴリ網羅

### 実用コード検査
- [ ] code-practicality-scorecard 85+
- [ ] LCP / CLS / INP 達成
- [ ] 計測 data 属性完備
- [ ] a11y Lighthouse 90+

詳細は `validation/` 配下の各ファイルを参照。
