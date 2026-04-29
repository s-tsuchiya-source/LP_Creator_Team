# Visual Expression Output Contract

## Purpose

LP の Visual Expression Layer（モーション / タイポ / 形状 / 全体ビジュアル）の設計結果を構造化された形で記録する。

## Required Sections

### 1. 参考サイト分析
- 参照URL
- 5軸分析（Why it works / Visual / Motion / Information / UI patterns）
- 抽出した原理
- 案件への翻訳
- 丸写し回避チェック

### 2. Visual Rhythm Map
- 各セクションの余白・背景・レイアウト
- 採用理由

### 3. Motion Storyboard サマリー
- motion-storyboard.md への参照
- translateY reveal 比率
- CV直前モーションの確認

### 4. Typography Rationale サマリー
- typography-rationale.md への参照
- 装飾英語ゼロ確認
- 各ラベル採用理由

### 5. Shape Language Map サマリー
- shape-language-map.md への参照
- 角丸カード比率
- 形状の使い分け

### 6. AIっぽさ排除チェック
- 4観点（モーション / タイポ / 形状 / 全体）
- 各観点の scorecard 結果
- 残るリスク

### 7. CV 貢献理由
- 各 visual 要素の CV 貢献記録

### 8. 最終判定
- visual-expression-scorecard 結果
- 各サブ scorecard 結果
- 合格 / 不合格

## Required Fields

- 参考サイト URL（あれば）
- Visual Rhythm Map 全セクション
- 4 visual scorecard スコア
- 角丸カード比率
- translateY reveal 比率
- 装飾英語チェック結果

## Format Rules

```markdown
# Visual Expression Output

## 1. 参考サイト分析
| 参考URL | 抽出原理 | 案件への翻訳 |

## 2. Visual Rhythm Map
| セクション | 余白 | 背景 | レイアウト | 形状 | モーション | 理由 |

## 3. Motion Storyboard
- 詳細: outputs/05_design/motion-storyboard.md
- translateY reveal 比率: ___%（40%以下）
- CV直前モーション: 該当なし / あり

## 4. Typography Rationale
- 詳細: outputs/05_design/typography-rationale.md
- 装飾英語: 検出 ___ 件 → 修正 ___ 件
- 残存装飾英語: 0 件

## 5. Shape Language Map
- 詳細: outputs/05_design/shape-language-map.md
- 角丸カード比率: ___%（50%以下）
- 直角・円・多角形の使い分け: あり / なし

## 6. AIっぽさ排除チェック
| 観点 | scorecard | スコア | 判定 |
| モーション | motion-variety | ___/100 | PASS/FAIL |
| タイポ | japanese-label-naturalness | ___/100 | PASS/FAIL |
| 形状 | shape-language | ___/100 | PASS/FAIL |
| 全体 | visual-expression | ___/100 | PASS/FAIL |

## 7. CV 貢献理由
| visual要素 | CV貢献理由 |

## 8. 最終判定
- visual-expression-scorecard: ___/100（必須85+）
- 合格 / 不合格
- 不合格時の差し戻し先
```

## Acceptance Criteria

- 8セクション全て記録
- 4 visual scorecard 全て 85+
- 角丸カード比率 50%以下
- translateY reveal 40%以下
- 装飾英語ゼロ
- 各要素に採用理由

## Rejection Criteria

- セクション欠落
- scorecard 未達
- 角丸カード 50%超
- translateY reveal 40%超
- 装飾英語残存
- 採用理由なき要素

## Related

- agent: `lp-human-art-reviewer` / `lp-motion-director` / `lp-typography-director` / `lp-shape-language-designer`
- skills: `skills/10_visual_expression/`
- gate: `quality-gates/visual-expression-gate.md`
