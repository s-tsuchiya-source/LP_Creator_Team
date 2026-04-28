# LP Structure Completeness Scorecard

## Purpose

LP構成として必須16項目の網羅度を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 流入意図の受け止め | 5 | 広告 / SEO 等との整合 |
| 2. ファーストビュー | 10 | 6条件すべて満たす |
| 3. 誰向けかの明示 | 5 | ターゲット明示 |
| 4. 得られるメリット | 5 | FV / 解決策で訴求 |
| 5. 課題・悩みの言語化 | 8 | 3〜5個のリスト |
| 6. 放置リスク | 5 | 暗示で配置 |
| 7. 解決策の提示 | 8 | 解決約束 + アプローチ |
| 8. 解決メカニズム | 5 | 「なぜ」の説明 |
| 9. 具体的なベネフィット | 8 | 数値 + 4軸分解 |
| 10. 証拠・実績・事例 | 10 | 最低3種類配置 |
| 11. 競合・代替手段との違い | 5 | 比較表 |
| 12. 導入・利用の流れ | 5 | 4〜5ステップ |
| 13. 不安解消FAQ | 8 | 6カテゴリ網羅 |
| 14. CTA直前の行動理由 | 5 | 「今動く理由」 |
| 15. CV後に何が起きるか | 5 | 流れ予告 |
| 16. 最終CTA | 3 | ハードル段階別CTA |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

- ファーストビューがない、または機能していない
- 最終CTAがない
- 証拠・実績がない
- 不安解消FAQがない
- CV後に何が起きるかが完全に不明

## 案件タイプ別の省略可能性

`lp-director` が理由付きで省略可能：

### セミナー / ウェビナー
- 省略可: 競合との違い

### EC / 物販
- 省略可: 「導入・利用の流れ」（即購入時）

### ローカルサービス
- 省略可: 「競合との違い」（地域訴求時）

### 採用LP（カジュアル面談）
- 省略可: 「競合との違い」

省略する場合は、必ず理由を `lp-director` の判断ログに記録。

## Review Questions

- 16項目すべて含まれているか
- 省略項目に理由があるか
- セクション順序が論理的か
- 9段階感情ジャーニーと整合するか

## Improvement Actions

### 85点未満
- `lp-structure-blueprint/high-converting-lp-flow.md` で再設計
- 不足項目を追加

### 75点以下
- `lp-structure-designer` で全構成見直し
- 業種 playbook を再選定

## Related

- `lp-structure-blueprint/` 全ファイル
- `validation/lp-structure-completeness-validation.md`
- `contracts/lp-structure-blueprint-contract.md`
- agent: `lp-structure-designer` / `lp-director`
