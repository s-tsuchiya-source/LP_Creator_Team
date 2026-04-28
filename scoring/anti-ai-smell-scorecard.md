# Anti AI Smell Scorecard

## Purpose

LPに「AIっぽさ」がどれだけ残っているかを採点する（100点満点）。
減点方式で評価し、90点以上を必須とする。

## Score Breakdown（減点方式）

開始 100点。以下に該当するごとに減点：

| 減点項目 | 減点 |
|---|---|
| 危険語の連続使用（3つ以上） | -10 |
| 競合置き換えで成立する文（1つ） | -5 |
| 「〜を実現します」連発（3つ以上） | -10 |
| 「お客様」「ユーザー」抽象化 | -5 |
| 機能羅列のみのセクション | -10 |
| 抽象的な hero（青グラデ + 抽象3D） | -15 |
| AI生成画像の不自然さ（手・顔・光沢） | -10 |
| 関係ないストックフォト | -5 |
| 出典なき数値（1つ） | -5 |
| 「業界No.1」根拠なし | -10 |
| 「絶対」「100%」表現（1つ） | -10 |
| FAQ「ご安心ください」だけ | -10 |
| CTA「お問い合わせ」だけ | -10 |
| 営業電話の有無を明示なし | -5 |
| CV後の流れなし | -10 |

最終スコア = 100 - 減点合計

## Passing Score

- **90点以上**: 納品可能（必須）
- **80〜89点**: 軽微修正
- **79点以下**: 主要改善必須

## Critical Fail Conditions

**点数に関係なく差し戻し**：

- どの会社にも当てはまるFV（ターゲット明示なし + 抽象キャッチ）
- 抽象語だらけのコピー（5語以上連続）
- 意味の薄い AI 風ビジュアル（FV が抽象3D / 抽象未来都市）
- 実在感のない事例（「A社では〜」だけで詳細なし）
- CTAがテンプレート的で行動理由がない
- 出典なき断定数値（「業界No.1」「100%」等）

## Review Questions

- 危険語の連続使用がないか
- 競合置き換えテスト合格か
- 機能羅列で終わっていないか
- 商材文脈に合うビジュアルか
- 数字に出典があるか
- 「絶対」「100%」を使っていないか
- CTA に行動理由があるか

## Improvement Actions

### 95点以下
- `skills/09_humanization/anti-ai-copy-editing-skill.md` で修正

### 85点以下
- 全コピー再編集
- 全画像再選定
- `skills/09_humanization/final-human-review-skill.md` で総点検

### 70点以下
- 戦略・ペルソナから見直し
- ユーザーに方向性確認

## Related

- `human-quality/ai-smell-detection-list.md`
- `human-quality/anti-ai-writing-principles.md`
- `validation/anti-ai-output-validation.md`
- `skills/09_humanization/` 全 skill
- agent: `lp-chief-copywriter` / `lp-creative-director` / `lp-final-gatekeeper`
