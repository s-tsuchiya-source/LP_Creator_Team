# Expected: 80点未満差し戻し

## 期待される lp-director / 各 agent の挙動

### Step 1: 採点

各成果物に対して該当 scorecard で採点。

### Step 2: 80点未満を検出

```
例: copy-scorecard 65 / 100
判定: FAIL（80点未満）
```

### Step 3: 差し戻し

```
差し戻し先: lp-chief-copywriter
修正指示:
- ベネフィット翻訳（機能 → 業務 → 心理 → 評価 → 未来）
- 数値根拠の追加
- 誇大表現「絶対」「100%」削除
参照: skills/03_copy/high-conversion-copy-skill.md
```

### Step 4: 修正後の再採点

```
再採点: copy-scorecard 88 / 100
判定: PASS
```

### Step 5: ログ記録

`outputs/08_review/scorecard-summary.md` に：

```markdown
## 差し戻し履歴
| 日時 | 該当 scorecard | スコア | 差し戻し先 | 修正後スコア |
|---|---|---|---|---|
| 2026-04-29 | copy-scorecard | 65 | lp-chief-copywriter | 88 |
```

### Critical Fail の検出

法務 Critical Fail（「絶対」「100%」「業界No.1」根拠なし）：

```
判定: Critical Fail
点数: 関係なし（公開不可）
差し戻し先: lp-chief-copywriter + lp-legal-expression-checker
修正指示:
- 「絶対」「100%」削除
- 「業界No.1」に根拠付与、または削除
```

## NG パターン

❌ 80点未満で納品承認
❌ Critical Fail を「軽微」として通過
❌ 差し戻しログなし
❌ 修正指示なし
❌ 再採点なし

## 採点基準

| 項目 | 配点 |
|---|---|
| 80点未満を検出 | 25 |
| 差し戻したログ | 25 |
| Critical Fail を点数に関係なく差し戻し | 25 |
| 再採点ログ | 25 |

合計 80+ で合格。

## Related

- `tests/validation-scenarios/04-scorecard-rejection-test.md`
- `validation/scorecard-enforcement-validation.md`
