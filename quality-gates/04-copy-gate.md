# Gate 4: Copy Gate

## 目的

LPコピー全体がCV最大化に向けて機能するかを判定する。

## 担当エージェント

- `lp-chief-copywriter`
- `lp-legal-expression-checker`（並行）

## 合格条件

- [ ] 「誰向け」が分かる
- [ ] 「何が得られる」が分かる
- [ ] 「なぜ信頼できる」が分かる
- [ ] 「なぜ今行動すべきか」が分かる
- [ ] ベネフィットと証拠がセット
- [ ] CTAが具体的（「お問い合わせ」だけでない）
- [ ] 誇大表現がない
- [ ] トーンが一貫

## 不合格条件

- 抽象的すぎる訴求
- ベネフィット欠如
- 証拠なき断定
- 法令違反表現
- CTA文言が抽象

## 差し戻し条件

- 上記不合格条件
- ペルソナの言葉と乖離
- FAQ未作成

## 確認チェックリスト

```markdown
## Copy Gate チェック
- [ ] FV: メインキャッチ・サブ・CTA
- [ ] 問題提起・共感・解決策
- [ ] ベネフィット明確
- [ ] 実績・お客様の声
- [ ] FAQ ≥ 5件
- [ ] 最終CTA
- [ ] トーン一貫
- [ ] 誇大表現なし
```

## 通過後の次フェーズ

→ Gate 5: Design Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/copy-output-contract.md`
- **Related Scorecard**: `scoring/copy-scorecard.md` / `scoring/legal-risk-scorecard.md`
- **Minimum Passing Score**: copy-scorecard 85+ / legal-risk 95+
- **Critical Fail Conditions**: 法令違反表現 / 出典なき断定数値 / 機能羅列のみ
- **Required Fix Actions**: `skills/03_copy/` で再執筆 / `lp-legal-expression-checker` を通す
