# Rubric: LP Structure

## 評価基準

LP Structure Blueprint の 16必須項目の網羅度を評価。

| 軸 | 5点 | 3点 | 1点 |
|---|---|---|---|
| 16項目網羅 | 全項目 or 省略項目に理由 | 1〜2項目欠落 | 主要項目欠落 |
| セクション順序 | 論理的 + 流れ自然 | 一部断絶 | 順序破綻 |
| 感情ジャーニー対応 | 9段階対応 | 一部対応 | 対応なし |
| CTA配置 | 最低3箇所 | 2箇所 | 1箇所のみ |
| FAQ | 5〜10件 + 6カテゴリ | 5件、3カテゴリ | 5件未満 |

## 採点

5点 × 5軸 = 25点満点

- 22+: 優（合格）
- 18〜21: 良（軽微修正）
- 17以下: 差し戻し

## 関連 scorecard 必須スコア

```
lp-structure-completeness-scorecard: 85+
```

## Critical Fail（点数に関係なく差し戻し）

❌ FV がない or 機能していない
❌ 最終CTAなし
❌ 証拠・実績なし
❌ FAQ なし
❌ CV後不明

## 16項目チェック

```
1. 流入意図の受け止め
2. ファーストビュー
3. 誰向けかの明示
4. 得られるメリット
5. 課題・悩みの言語化
6. 放置リスク
7. 解決策の提示
8. 解決メカニズム
9. 具体的なベネフィット
10. 証拠・実績・事例
11. 競合・代替手段との違い
12. 導入・利用の流れ
13. 不安解消FAQ
14. CTA直前の行動理由
15. CV後に何が起きるか
16. 最終CTA
```

## 案件タイプ別省略可能性

```
セミナー: 競合との違い
EC / 物販: 「導入の流れ」（即購入時）
ローカル: 「競合との違い」
採用LP: 「競合との違い」
```

省略時は理由必須（`outputs/08_review/lp-structure-validation.md`）。

## Related

- `validation/lp-structure-completeness-validation.md`
- `lp-structure-blueprint/`
- `scoring/lp-structure-completeness-scorecard.md`
- `tests/validation-scenarios/06-lp-structure-completeness-test.md`
