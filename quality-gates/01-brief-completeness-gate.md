# Gate 1: Brief Completeness Gate

## 目的

ヒアリング結果が後段の戦略・構成・コピー・実装に進める粒度かを判定する。

## 担当エージェント

- `lp-director`

## 合格条件

すべて Yes:

- [ ] 商材・サービス名 が明確
- [ ] LPの目的（CV種別）が明確
- [ ] 最終CV地点が確定
- [ ] 主ターゲット が確定
- [ ] ターゲットの主要悩み が言語化されている
- [ ] 提供価値（メインベネフィット）が明確
- [ ] 出力形式（戦略のみ / コピー込み / 実装込み）が確定

## 不合格条件

- 商材が不明
- CV地点が複数候補のまま
- ターゲット像が「20〜60代男女」レベルの広範囲
- 法務リスク該当業界で確認なし

## 差し戻し条件

- 上記不合格条件に該当
- 重要不明点が3件以上残っている

## 確認チェックリスト

```markdown
## Brief Completeness Gate チェック
- [ ] 商材確定
- [ ] 目的確定
- [ ] CV地点確定
- [ ] ターゲット確定
- [ ] 悩み言語化
- [ ] 提供価値明確
- [ ] 出力形式確定
- [ ] 仮置き項目を明示
- [ ] 法務リスク確認
```

## 通過後の次フェーズ

→ Gate 2: Strategy Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/brief-output-contract.md`
- **Related Scorecard**: `scoring/lp-master-scorecard.md`（戦略明確性 / ターゲット適合）
- **Minimum Passing Score**: contract の Acceptance Criteria 全件PASS
- **Critical Fail Conditions**: 商材・目的・CV・ターゲット のいずれか不明 / 法務リスク確認なし
- **Required Fix Actions**: `skills/00_director/lp-briefing-skill.md` で再ヒアリング
