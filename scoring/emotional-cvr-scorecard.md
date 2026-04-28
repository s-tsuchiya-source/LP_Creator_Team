# Emotional CVR Scorecard

## Purpose

LPの感情設計とCV直結性を採点する（100点満点）。
LP制作の最終評価で必須使用する scorecard。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 自分ごと化 | 15 | FV / 課題セクションで「これは自分のことだ」と思えるか |
| 2. メリット明確性 | 15 | 機能ではなくベネフィットで訴求できているか / 数値根拠 |
| 3. 期待感 | 15 | 導入後の未来像 / 期待感の根拠（数値・事例・プロセス） |
| 4. 不安解消 | 15 | 6カテゴリ不安（価格/導入/効果/運用/社内/失敗）に対応 |
| 5. 信頼から行動への接続 | 15 | 信頼セクションの直後に次アクション提示 |
| 6. CTA直前の行動意欲 | 15 | ハードル低い行動 / 「今動く理由」/ CV後の流れ |
| 7. CV後の安心感 | 10 | サンクスページで次の流れが明示される |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（Emotional CVR Layer の必須基準）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善が必要

※ Emotional CVR scorecard は他scorecardよりやや低い基準（85点）。ただしCritical Failがあれば点数に関係なく差し戻し。

## Critical Fail Conditions

点数に関係なく不合格：

- ユーザーが得るメリットが曖昧（機能羅列のみ）
- 期待感が誇大表現になっている（「絶対」「100%」等）
- 不安解消セクションが完全に欠落
- CTAが押す理由になっていない（「お問い合わせ」だけ等）
- CV後の流れが完全に不明
- 自分ごと化の要素が皆無（誰向けか不明）

## Review Questions

- ユーザーは「これ、自分のことだ」と感じられるか
- ベネフィットが具体数字で表現されているか
- 導入後の未来を時系列で想像できるか
- 主要不安カテゴリが網羅されているか
- 信頼セクション直後に次アクションがあるか
- CV直前のハードルが下がる工夫があるか
- サンクスページで安心できるか

## Improvement Actions

### 90点未満
1. 不足項目を特定
2. `skills/08_experience/` の該当 skill で再設計
3. 該当 component で再構成

### 75点以下
1. 戦略フェーズに戻り、ペルソナ・動機マップを見直し
2. `experience-design/cv-emotion-journey.md` で 9段階ジャーニーを再設計
3. ユーザーへの方向性確認

## Related

- contract: `contracts/emotional-cvr-output-contract.md`
- skills: `skills/08_experience/` 全カテゴリ
- experience-design: 全ファイル
- components: `components/emotion/` 全カテゴリ
