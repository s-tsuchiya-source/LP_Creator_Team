# Gate 3: Structure Gate

## 目的

セクション構成・ワイヤーがCV最大化に向けて機能するかを判定する。

## 担当エージェント

- `lp-structure-designer`
- `lp-wireframe-planner`
- `lp-cta-flow-designer`

## 合格条件

- [ ] ファーストビューで価値が3秒で伝わる
- [ ] セクション順序が自然（PASONA / AIDA 等のフレーム整合）
- [ ] CTA導線が複数（最低3箇所）配置
- [ ] 不安解消セクション（FAQ）がある
- [ ] 証拠提示（実績・事例）がある
- [ ] スマホで読みやすい

## 不合格条件

- FVに価値訴求がない
- CTA が最終1箇所のみ
- 証拠なしで強みだけ並べる
- セクション数が極端（3以下 / 20以上）

## 差し戻し条件

- 上記不合格条件
- ワイヤーがPCのみ・SPなし
- 視線誘導が不明

## 確認チェックリスト

```markdown
## Structure Gate チェック
- [ ] FV: 価値・CTA・信頼要素
- [ ] 中盤: 問題→解決→証拠
- [ ] FAQ
- [ ] 最終CTA
- [ ] PC / SP 両ワイヤー
- [ ] CTA配置 ≥ 3箇所
- [ ] 視線誘導指示
```

## 通過後の次フェーズ

→ Gate 4: Copy Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/structure-output-contract.md` / `contracts/wireframe-output-contract.md`
- **Related Scorecard**: `scoring/first-view-scorecard.md`
- **Minimum Passing Score**: first-view-scorecard 90+
- **Critical Fail Conditions**: FVなし / CTA配置1箇所 / 証拠セクションなし
- **Required Fix Actions**: `skills/02_structure/` で再設計
