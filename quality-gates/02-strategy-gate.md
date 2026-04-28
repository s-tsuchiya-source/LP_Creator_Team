# Gate 2: Strategy Gate

## 目的

戦略書がLP制作の指針として機能する粒度かを判定する。

## 担当エージェント

- `lp-marketing-strategist`
- `lp-lpo-strategist`
- `lp-director`（最終判定）

## 合格条件

- [ ] ターゲットが明確（「誰の」「どんな状況」まで）
- [ ] 訴求軸が明確（主訴求 / 副訴求）
- [ ] 競合との差別化が明確
- [ ] CVに直結している（KPIツリーが描ける）
- [ ] オファーが弱くない（行動理由がある）

## 不合格条件

- ターゲットが抽象的
- 訴求軸が「品質が良い」「便利」レベル
- 差別化が他社模倣
- KPIが測定不能

## 差し戻し条件

- 上記不合格条件に該当
- ペルソナ未確定
- 競合分析がない

## 確認チェックリスト

```markdown
## Strategy Gate チェック
- [ ] ペルソナ（メイン / サブ）
- [ ] 訴求軸（主・副）
- [ ] 差別化マトリクス
- [ ] KPIツリー
- [ ] オファー設計
- [ ] CTA方針
```

## 通過後の次フェーズ

→ Gate 3: Structure Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/strategy-output-contract.md` / `contracts/persona-output-contract.md`
- **Related Scorecard**: `scoring/lp-master-scorecard.md`（戦略明確性 / ターゲット適合）/ `scoring/offer-scorecard.md`
- **Minimum Passing Score**: lp-master 80+ / offer 80+
- **Critical Fail Conditions**: ターゲット抽象 / 訴求軸が抽象 / 計測不能なKPI
- **Required Fix Actions**: `skills/01_strategy/` で再設計
