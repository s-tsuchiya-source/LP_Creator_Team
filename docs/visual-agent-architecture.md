# Visual Agent Architecture for LP_Creator_Team

## 目的

LP内の画像・イラスト・UIモック・図解・数値カードを、単なる装飾ではなく **CVに効く訴求装置** として設計するための専門エージェント構成です。

## 追加エージェント

| Agent | 役割 |
|---|---|
| `lp-visual-art-director` | LP全体のビジュアル戦略責任者 |
| `lp-image-compositor` | 写真・UI・数値・短コピーを統合する合成担当 |
| `lp-infographic-designer` | 複雑な情報を図解・比較・ファネル・フローへ変換 |
| `lp-cta-ui-designer` | CTA周辺・フォーム周辺・安心訴求UIを設計 |
| `lp-motion-director` | スクロール演出・微アニメーションを設計 |
| `lp-mobile-visual-optimizer` | スマホ表示の視認性・構図・CTAを最適化 |
| `lp-visual-quality-gate` | ビジュアル品質の最終審査 |

## 標準フロー

1. `lp-visual-art-director` がビジュアル戦略を作る
2. `lp-image-compositor` が写真・UI・数値・コピーの合成方針を作る
3. `lp-infographic-designer` が図解化する情報を整理する
4. `lp-cta-ui-designer` がCTA周辺UIを設計する
5. `lp-motion-director` が動きの方針を決める
6. `lp-mobile-visual-optimizer` がスマホ表示を最適化する
7. `lp-visual-quality-gate` が本番品質かを判定する

## 必須品質思想

- 画像をそのまま置かない
- 画像ごとに役割を持たせる
- 写真、図解、数値、コピーを必要に応じて統合する
- FVは3秒で価値が伝わる状態にする
- CTA前は行動の不安を減らす状態にする
- SPで見えない表現は採用しない
- 未検証の実績数値やNo.1表現は使わない

## セクション別ルール

### FV

- 写真だけで終わらせない
- 必要に応じてグラデーション、カード、バッジ、短コピーを重ねる
- コピーとCTAの可読性を最優先する

### 課題

- 悩みを視覚化する
- 課題ラベル、警告アイコン、ボトルネック図などを使って理解を早める

### 解決

- UIモック、フロー図、Before/After、3ステップ図を使う
- 抽象説明だけで終わらせない

### CTA前

- 相談しやすさを伝える
- 相談無料、現状整理からOK、資料だけ確認OKなどの安心要素を視覚化する

## 合格条件

- FVで何のLPか即時に分かる
- セクション画像が文章の要点を補強している
- CTAが画像や装飾に埋もれない
- スマホで意味が伝わる
- AIっぽい汎用感が減っている
