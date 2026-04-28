# skills/ — 作業手順書ライブラリ

skillsは、各エージェントが実際の作業を進めるための「実行手順書」です。

## agentとskillsの違い

| 概念 | 役割 |
|---|---|
| **agent** | 担当者・専門家（誰がやるか） |
| **skill** | 作業手順・専門技術（どうやるか） |
| **contract** | 成果物の出力形式（何を出すか） |
| **scorecard** | 品質採点表（どこまでの品質か） |
| **component** | LP部品の勝ちパターン（どう書くか） |
| **playbook** | 業種別攻略書（業種特性） |

## ディレクトリ構成

```
skills/
├─ 00_director/      # ディレクター運用skill
├─ 01_strategy/      # 戦略系skill
├─ 02_structure/     # 構成・IA系skill
├─ 03_copy/          # コピー系skill
├─ 04_design/        # デザイン系skill
├─ 05_development/   # 実装系skill
├─ 06_measurement/   # 計測系skill
└─ 07_review/        # レビュー・採点系skill
```

## 使い方

各エージェントは作業前に該当 skill を必ず読み、手順に沿って成果物を作成してください。

skill の手順を逸脱して作業を進めることは禁止します。

## 利用ルール

- 関連skillだけを参照（全読み禁止）
- skillに記載のない判断は、ディレクター or ユーザーに確認
- skill自体を更新する場合は、`docs/maintenance-guide.md` の手順に従う
