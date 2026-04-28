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
