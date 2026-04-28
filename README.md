# LP_Creator_Team

Claude Code 上で動作する「大規模LP制作会社レベルのLP制作チーム」を再現したプロジェクトです。

## このプロジェクトでできること

- LP戦略設計・ペルソナ設計・訴求軸設計
- セクション構成・ワイヤーフレーム
- LPコピー全文（FV / 問題提起 / 解決策 / 証拠 / 事例 / FAQ / CTA）
- デザイン方針（PC / SP / トーン / カラー / タイポ）
- HTML / CSS / JavaScript 実装
- GA4 / GTM 計測設計・CV計測・フォーム計測
- QAチェックリスト・法務表現チェック・公開前レビュー
- 既存LP改善提案・A/Bテスト案

単なる自動生成ではなく、**戦略 → 構成 → コピー → デザイン → 実装 → 計測 → QA → 法務 → 最終承認** の制作工程を再現します。

## 想定利用者

- LP制作の依頼を受けるディレクター・プランナー
- 自社サービスのLPを設計したいマーケター・経営者
- BtoB / SaaS / 採用 / 広告 / 既存LP改善 を進めたい担当者

## 使い方

Claude Code でこのプロジェクトを開き、以下のように依頼します。

```text
LP_Creator_Team の lp-director を起点にして、LP制作を開始してください。
まずは必要事項を最大12問以内でヒアリングしてください。
```

`lp-director` が必要なエージェントだけを選定し、戦略 → 構成 → コピー → デザイン → 実装 → 計測 → QA まで統合した成果物を返します。

## 基本フロー

1. ユーザーが LP 制作依頼を出す
2. `lp-director` が初回ヒアリング（最大12問）を実施
3. ディレクターが必要なエージェントを選定
4. 戦略・構成・コピー・デザイン・実装・計測・QA を順次生成
5. 各フェーズで品質ゲートを通過判定
6. 最終承認エージェントが公開可否を判断
7. 成果物を `outputs/` 配下に統合

## ディレクトリ構成

```text
LP_Creator_Team/
├─ README.md                # このファイル
├─ CLAUDE.md                # Claude Code 用最上位ルール
├─ project-rules.md         # プロジェクト運用ルール
├─ lp-production-flow.md    # 制作フロー全体図
├─ hearing-sheet.md         # ヒアリングシート
├─ output-formats.md        # 出力フォーマット規定
├─ .gitignore
├─ .claude/
│  ├─ settings.json         # 共有設定（権限・除外）
│  └─ agents/               # 全エージェント定義（44ファイル）
├─ director/                # ディレクター運用ルール
├─ skills/                  # 作業手順書ライブラリ ★高品質化
├─ contracts/               # 成果物の出力形式 ★高品質化
├─ scoring/                 # 100点満点 採点表 ★高品質化
├─ components/              # LP部品の勝ちパターン ★高品質化
├─ industry-playbooks/      # 業種別LP攻略書 ★高品質化
├─ agent-teams/             # チーム別組織図
├─ workflows/               # 案件タイプ別フロー
├─ quality-gates/           # 9段階品質ゲート
├─ templates/               # 制作テンプレート
├─ knowledge/               # 制作ナレッジベース
├─ outputs/                 # 制作物の出力先
├─ tasks/                   # タスク管理
├─ docs/                    # 運用ドキュメント
└─ examples/                # サンプル依頼・出力
```

## 高品質化ディレクトリの役割

| ディレクトリ | 役割 |
|---|---|
| `skills/` | 各エージェントの**作業手順書**。skill 通りに作業すれば品質が安定する |
| `contracts/` | 各成果物の**出力形式の固定化**。必須セクション・受け入れ条件を定義 |
| `scoring/` | 100点満点の**品質採点表**。納品可否を判断する基準 |
| `components/` | LP部品（FV / CTA / FAQ 等）の**勝ちパターン**。実装に近い具体例 |
| `industry-playbooks/` | 業種別の**LP攻略書**。BtoB / 採用 / EC / コンサル等 |

## agentとskillの違い

| 概念 | 役割 |
|---|---|
| **agent** | 担当者・専門家（誰がやるか） |
| **skill** | 作業手順・専門技術（どうやるか） |
| **contract** | 成果物の出力形式（何を出すか） |
| **scorecard** | 品質採点表（どこまでの品質か） |
| **component** | LP部品の勝ちパターン（どう書くか） |
| **playbook** | 業種別攻略書（業種特性） |

## 高品質化された制作フロー

1. **lp-director がブリーフ + ヒアリング**（最大12問）
2. **業種 playbook を選定**
3. **必要 agent を選定**（最小構成）
4. 各 agent が **skill に沿って作業**
5. 成果物を **contract で照合**
6. **scorecard で採点**（80点未満は差し戻し）
7. **lp-final-gatekeeper が最終判定**（90点以上で納品推奨）
8. `final-delivery-contract` に沿って統合納品

## 最終納品品質基準

- **90点以上**: 納品可能
- **80〜89点**: 軽微修正後に納品可能
- **70〜79点**: 主要改善が必要
- **69点以下**: 作り直し
- **法務 Critical Fail**: 点数に関係なく公開不可

## 主要エージェント一覧

| エージェント | 役割 |
|---|---|
| `lp-director` | 統括ディレクター（最重要・最初に起動） |
| `lp-marketing-strategist` | マーケティング戦略 |
| `lp-lpo-strategist` | CVR改善・LPO |
| `lp-persona-researcher` | ペルソナ設計 |
| `lp-structure-designer` | セクション構成 |
| `lp-chief-copywriter` | コピー統括 |
| `lp-creative-director` | クリエイティブ方針 |
| `lp-frontend-engineer` | 実装統括 |
| `lp-ga4-gtm-specialist` | 計測設計 |
| `lp-qa-lead` | QA統括 |
| `lp-legal-expression-checker` | 法務表現チェック |
| `lp-final-gatekeeper` | 最終承認 |

全エージェント一覧は [.claude/agents/](.claude/agents/) を参照してください。

## LP制作依頼の例文

詳細は [docs/lp-request-examples.md](docs/lp-request-examples.md) を参照してください。

```text
BtoB SaaS の資料請求LPを作りたい。ターゲットは中小企業の人事担当者。
strategy → structure → copy → design → code → measurement → QA まで一気通貫で出してほしい。
```

## GitHub 運用時の注意

- `.env` / `.env.*` / `.claude/settings.local.json` は **コミット禁止**
- API キー・接続文字列・顧客実名・実績数値の断定表現は含めない
- `examples/` のサンプルはすべて架空サービスとして記載する
- 公開リポジトリにする場合は `outputs/` 配下の実案件成果物を別途確認

詳細は [docs/github-upload-guide.md](docs/github-upload-guide.md) を参照してください。

## 秘密情報を含めない方針

このプロジェクトは GitHub 公開を前提としています。以下を厳守してください。

- 環境変数の実値は記載しない（テンプレートのみ）
- 顧客固有の数値・社名・連絡先は含めない
- `.claude/settings.json` の `permissions.deny` で秘密ファイルへのアクセスをブロック

## 今後の拡張方針

- 業界特化型エージェント追加（医療 / 教育 / 不動産 / 金融 等）
- 多言語LP対応（英語 / 中国語）
- LP→広告クリエイティブ→SEO記事 への横展開
- 実装テンプレート（Next.js / Astro / 静的HTML）

---

License: 内部運用用テンプレート。再配布前にライセンスを定義してください。
