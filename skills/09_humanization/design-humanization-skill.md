# Design Humanization Skill

## Purpose

AIっぽい・テンプレート的なデザインを排除し、商材文脈に合うデザインに修正する。

## When to Use

- デザイン完成後の最終チェック
- AIっぽいビジュアルが検出されたとき
- 「どのSaaSにも見える」状態のとき

## Required Inputs

- デザイン仕様 / 完成デザイン
- 商材情報
- ペルソナ
- 業種 playbook

## Step-by-Step Procedure

### 5つのチェック

```
1. ビジュアルの役割を確認
2. 商材文脈に合うか確認
3. 汎用SaaS感を排除
4. 図解・画面・プロセスで理解を助ける
5. CTA周辺に安心材料を置く
```

### 詳細手順

#### Step 1: ビジュアルの役割を確認

各画像に対して問う：

```
- この画像は何を伝えたいか？
- 文章では伝わらないか？
- なくても成立するか？
```

「装飾」目的の画像は排除。「理解促進」目的に絞る。

#### Step 2: 商材文脈チェック

業種別の推奨ビジュアル：

| 業種 | 推奨ビジュアル |
|---|---|
| BtoB SaaS | プロダクト管理画面 |
| 採用LP | 実在社員写真・オフィス |
| EC / 物販 | 商品写真・利用シーン |
| コンサル | コンサルタント写真・著書 |
| ローカルサービス | 店舗写真・施術風景 |

商材文脈と合わない画像は差し替え。

#### Step 3: 汎用 SaaS 感の排除

NG パターン：

```
- 紺〜青のグラデーション hero（どのSaaSにも見える）
- 抽象3Dイラスト（人物・図形）
- 抽象未来都市 / 銀河 / 光の粒子
- パステルカラーのキャラクター
```

これらを以下に差し替え：

```
- プロダクト画面（実画面ベース）
- 実際の業務シーン
- 業務フロー図解
- 比較表・チャート
```

#### Step 4: 図解で理解促進

文章だけで分かりにくい部分を図解化：

- ベネフィット → 機能 のフロー図
- Before / After 比較
- 業務フローの可視化
- 競合比較表
- 価格プラン比較

#### Step 5: CTA周辺の安心材料

CTA直下に必ず：

```
★ クレジットカード不要
★ いつでも解約可能
★ 営業からの強引な連絡なし
★ プライバシーポリシー: [リンク]
```

これらをバッジ風に視覚化。

## Output Format

### デザイン人間化ログ

```markdown
# Design Humanization Log

## ビジュアル役割チェック
| 画像 | 役割 | 判定（残す/削除/置換） |
|---|---|---|

## 商材文脈チェック
| 画像 | 商材との整合 | 修正 |

## 汎用 SaaS 感の排除
| 元の画像 | 置換先 |

## 追加した図解
- ベネフィットフロー図
- Before/After
- 業務フロー
- ...

## CTA周辺の安心材料
- 配置位置
- 内容
```

## Quality Criteria

- 装飾目的の画像なし
- 商材文脈に合うビジュアル
- 汎用 SaaS 感なし
- 理解促進のための図解
- CTA周辺の安心材料

## Common Failure Patterns

- 画像を全部削除して殺風景に
- 図解を作りすぎて重い
- CTA周辺に文字を詰め込みすぎ

## Self Check

- [ ] 全画像の役割を明示
- [ ] 商材文脈に合うか確認
- [ ] 汎用 SaaS 感の排除
- [ ] 図解の追加
- [ ] CTA周辺の安心材料

## Related Agents

- `lp-creative-director`
- `lp-art-director`
- `lp-web-designer`
- `lp-graphic-designer`

## Related References

- `human-quality/non-generic-design-rules.md`
- `human-quality/image-direction-rules.md`
- `validation/anti-ai-output-validation.md`
- `scoring/anti-ai-smell-scorecard.md`
