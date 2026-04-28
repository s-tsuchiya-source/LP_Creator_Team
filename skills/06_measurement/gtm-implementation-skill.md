# GTM Implementation Skill

## Purpose

GA4 / Google Ads / Meta Pixel のタグを GTM で一元管理し、保守性・再利用性を高める。

## When to Use

- 計測実装フェーズ

## Required Inputs

- GA4 イベント設計
- 出稿媒体情報
- LP実装ファイル

## Step-by-Step Procedure

1. GTM コンテナを準備
2. GA4 Configuration タグを All Pages で設定
3. CTAクリック・フォーム送信などイベントごとにタグ作成
4. データレイヤー仕様に基づいて変数定義
5. トリガー条件を細かく設定
6. プレビューモードで動作確認
7. バージョン名・備考を記録
8. 公開
9. `outputs/07_measurement/gtm.md` に保存

## Output Format

```markdown
## GTM Implementation

### Container ID
- GTM-XXXXXXX

### Tags
| タグ名 | タイプ | トリガー | 備考 |

### Triggers
| トリガー名 | タイプ | 条件 |

### Variables
| 変数名 | タイプ | 取得値 |

### Version Notes
- v1.0: 初期実装
```

## Quality Criteria

- 全イベントがタグ化
- トリガー条件適切
- プレビュー検証済み
- 個人情報を計測タグに含めない

## Common Failure Patterns

- プレビュー検証なしで公開
- トリガー条件が広すぎ（誤発火）
- 個人情報の生送信

## Self Check

- [ ] プレビュー検証済み
- [ ] 個人情報なし
- [ ] バージョンメモあり

## Related Agents

- `lp-ga4-gtm-specialist`
- `lp-conversion-tracking-specialist`

## Knowledge 参照

- `knowledge/measurement-patterns/gtm-tag-design.md`
