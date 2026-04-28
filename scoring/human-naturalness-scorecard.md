# Human Naturalness Scorecard

## Purpose

LPの「人間らしさ」を採点する（100点満点）。
AIっぽい完璧さではなく、現場感・自然さ・実在感を評価。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 具体性 | 20 | 数値・場面・人物が具体化されている |
| 2. 読み手の本音 | 15 | ペルソナの本音が織り込まれている |
| 3. 現場感 | 15 | 業務の特定瞬間が描けている |
| 4. 自然な文体 | 15 | きれいすぎず、余白とテンポがある |
| 5. 売り込み臭の低さ | 10 | 「資料を見るだけOK」的な余裕がある |
| 6. 画像・デザインの自然さ | 15 | 商材文脈に合うビジュアル |
| 7. CTAの自然さ | 10 | 「動詞 + ベネフィット」、安心要素 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

点数に関係なく不合格：

- 競合置き換えテストで90%以上成立（汎用すぎ）
- 業務シーン描写ゼロ
- 担当者の本音ゼロ
- 数値出典なし
- AI生成画像の不自然さ多数

## Review Questions

- LPコピーを競合社名に置き換えたら成立してしまうか
- 担当者の業務瞬間が描けているか
- 「これ、自分のことだ」と感じる粒度か
- 数字に出典があるか
- 「営業されすぎないか」不安への対応があるか
- 商材文脈に合うビジュアルか

## Improvement Actions

### 90点未満
1. 該当 skill で再編集
2. `skills/09_humanization/anti-ai-copy-editing-skill.md`
3. `skills/09_humanization/human-tone-rewrite-skill.md`
4. `skills/09_humanization/concrete-detail-injection-skill.md`

### 75点以下
1. ペルソナ再精査（`lp-persona-researcher`）
2. 業務シーンを再ヒアリング
3. 担当者の本音を追加取材

## Related

- skills: `skills/09_humanization/`
- human-quality: 全ファイル
- validation: `validation/anti-ai-output-validation.md`
- contract: `contracts/human-quality-output-contract.md`
- agent: `lp-chief-copywriter` / `lp-final-gatekeeper`
