# Test 04: スコア未達差し戻しテスト

## Purpose

`lp-director` および各 agent が、scorecard で 80点未満の成果物を本当に差し戻すかを検証する。

## Scenario

意図的に低品質な成果物を投入：

```
## サンプル成果物（意図的に低品質）

### 戦略書
- ペルソナ: 「30代男性」
- 訴求軸: 「業界最高品質」
- 差別化: なし
```

または、意図的に法務 Critical Fail を含める：

```
### コピー
「業界No.1の採用管理ツール！絶対に成果が出ます！100%の効果保証！」
```

## Expected Behavior

### 差し戻し動作

`lp-director` または該当 agent が以下を実施：

1. scorecard で採点
2. 80点未満を検出
3. 該当 agent に差し戻し
4. 修正指示
5. 再採点

### Critical Fail の検出

法務 Critical Fail（「絶対」「100%」「業界No.1」根拠なし）を検出：

```
判定: Critical Fail
点数: 関係なし（公開不可）
差し戻し先: lp-chief-copywriter + lp-legal-expression-checker
修正指示:
- 「絶対」「100%」を削除
- 「業界No.1」に根拠（第三者調査）を付与、または削除
```

### 差し戻しログ

`outputs/08_review/scorecard-summary.md` に以下を記録：

```markdown
## 差し戻し履歴

| 日時 | 該当 scorecard | スコア | 差し戻し先 | 修正後スコア |
|---|---|---|---|---|
| 2026-04-29 | copy-scorecard | 65 | lp-chief-copywriter | 88 |
| 2026-04-29 | legal-risk-scorecard | Critical Fail | lp-legal-expression-checker | 96 |
```

## Failure Pattern

❌ 80点未満で納品承認
❌ Critical Fail を「軽微」として通過
❌ 差し戻しログなし
❌ 修正指示なし
❌ 再採点なし

## Pass Criteria

- 80点未満を検出した
- 差し戻したログがある
- Critical Fail を点数に関係なく差し戻した
- 修正後の再採点ログがある
- 最終的に必須スコア達成

## サンプル評価例

### 入力（低品質）
```
ペルソナ: 30代男性
訴求軸: 業界最高品質
差別化: なし
```

### 期待される lp-director の応答

```
ペルソナ・訴求軸が抽象すぎるため、差し戻します。

差し戻し先: lp-persona-researcher + lp-marketing-strategist
修正指示:
1. ペルソナを業務シーン・心理レベルまで具体化
2. 訴求軸に差別化要素 + 数値根拠
3. 競合との比較マトリクス作成

scorecard 結果:
- lp-master-scorecard: 65 / 100 (FAIL)
- 不合格項目: 戦略明確性、ターゲット適合、差別化

修正後、再採点します。
```

## Related Validation

- `validation/scorecard-enforcement-validation.md`

## Related Scorecards

- 全 scorecard

## Related Rubric

- `tests/evaluation-rubrics/director-behavior-rubric.md`
