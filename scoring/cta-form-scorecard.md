# CTA / Form Scorecard

## Purpose

CTA・フォームの採点（100点満点）。CV直結率の最重要要素。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. CTA配置数 | 15 | 最低3箇所（FV / 中盤 / 最終） |
| 2. CTA文言 | 10 | 「動詞+ベネフィット」 |
| 3. CTA可視性 | 15 | コントラスト・サイズ・タップ44px |
| 4. CTA状態管理 | 5 | hover / focus / pressed |
| 5. 追従CTA | 10 | SPで適切ON/OFF |
| 6. フォーム項目数 | 15 | 必須5〜7項目 |
| 7. フォーム入力負荷 | 10 | inputmode/autocomplete 適切 |
| 8. バリデーション | 10 | リアルタイム+原因明示 |
| 9. 送信フィードバック | 5 | ローディング+完了 |
| 10. スパム対策 | 5 | reCAPTCHA / honeypot |

合計: **100点**

## Passing Score

- **85以上**: PASS
- **75〜84**: 軽微修正
- **74以下**: 作り直し

## Critical Fail Conditions

- CTAクリック不能
- フォーム送信失敗
- 「お問い合わせ」だけのCTA
- 必須項目10以上

## Review Questions

- CTAは目立つか
- フォーム入力に何分かかるか
- エラー時に何をすればいいか分かるか
- 送信後にCV成功が分かるか

## Improvement Actions

- CTA配置追加（`skills/02_structure/cta-flow-design-skill.md`）
- フォーム項目削減（`skills/04_design/form-ui-design-skill.md`）
- エラーメッセージ具体化（`skills/03_copy/microcopy-skill.md`）
