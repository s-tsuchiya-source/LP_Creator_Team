# aggregate.eole.co.jp 課題別LP 4案 — Visual Asset Workflow

このディレクトリは、`lp-visual-asset-director` を使って、画像・イラスト・UIモックを組み込む前提のLP制作を進めるための運用メモです。

## 目的

前回までのLPは、カードUI・グラデーション・ダッシュボード風UIに依存しており、AI生成感が残りやすい状態でした。

今回からは、LPごとに以下の画像アセットを前提化します。

- FV画像
- 課題セクション画像
- 解決・画面モック画像
- CTA前の相談シーン画像

## 4つのLP訴求軸

| No | LP | 画像トーン | 主な画像役割 |
|---|---|---|---|
| 1 | 応募単価・広告費改善 | 写真風 / BtoB会議室 / レポート確認 | 採用費を説明できる安心感 |
| 2 | 応募数不足・母集団形成 | 半リアルイラスト / 候補者導線 | 露出→クリック→応募の流れの理解 |
| 3 | 媒体運用工数・まるごと代行 | 写真風 / 採用担当者のデスク / タスク整理 | 任せられそうな安心感 |
| 4 | データ可視化・改善サイクル | UIモック中心 / データダッシュボード | 数字が次の打ち手に変わる期待感 |

## 画像生成後の配置方針

HTML側では以下のようなファイル名を参照する前提にする。

```text
assets/images/cpa-cost-hero.webp
assets/images/cpa-cost-problem.webp
assets/images/cpa-cost-dashboard.webp
assets/images/cpa-cost-consultation.webp

assets/images/application-volume-hero.webp
assets/images/application-volume-problem.webp
assets/images/application-volume-journey.webp
assets/images/application-volume-consultation.webp

assets/images/operation-outsourcing-hero.webp
assets/images/operation-outsourcing-problem.webp
assets/images/operation-outsourcing-process.webp
assets/images/operation-outsourcing-consultation.webp

assets/images/analytics-improvement-hero.webp
assets/images/analytics-improvement-problem.webp
assets/images/analytics-improvement-dashboard.webp
assets/images/analytics-improvement-consultation.webp
```

## 画像プロンプト設計ルール

画像生成時は以下を守る。

- 実在企業ロゴを入れない
- 求人媒体ロゴを入れない
- 読める日本語文字を画像内に入れない
- 実績数値を画像内で断定しない
- 不自然な手・顔・過度な笑顔を避ける
- 汎用AIイラストにしない
- 採用担当者の現場感、相談しやすさ、業務の実在感を重視する

## 使用エージェント

- `lp-director`
- `lp-creative-director`
- `lp-visual-asset-director`
- `lp-web-designer`
- `lp-frontend-engineer`
- `lp-qa-lead`
- `lp-legal-expression-checker`

## 画像生成後レビュー

`lp-visual-asset-director` は生成後、以下をチェックする。

- AIっぽい顔・手・構図がないか
- BtoBとして安っぽくないか
- コピーと画像が矛盾していないか
- スマホで意味が伝わるか
- CV導線に貢献しているか
- 権利・商標・法務リスクがないか

## 次工程

1. `docs/image-prompts.md` 相当のプロンプトで画像生成
2. 生成画像をユーザーから受領
3. ファイル名を上記に合わせて保存
4. LP HTMLへ画像を組み込み
5. `lp-visual-asset-director` がレビュー
6. `lp-final-gatekeeper` が公開可否を判定
