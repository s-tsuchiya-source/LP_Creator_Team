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

## LP_Creator_Team が考える最高品質LPの定義

最高品質のLPとは、綺麗なLPでも、情報網羅でも、装飾がかっこいいLPでもありません。

最高品質のLPとは、**見たユーザーが**
- 「自分に関係がある」
- 「メリットがある」
- 「期待できる」
- 「安心できる」
- 「まず資料を見てみたい」

**と思い、CVに進む心理状態を作れるLP**です。

```text
LPの品質 = 情報品質 × 信頼品質 × 体験価値 × 期待感 × CV導線
```

## Emotional CVR Layer

LP_Creator_Team では、戦略・コピー・デザイン・実装・計測に加えて、
**ユーザーの感情変化を設計します**。

```text
流入
  ↓
自分ごと化（「これは自分のためのサービスだ」）
  ↓
課題共感（「分かってくれている」）
  ↓
期待（「自分の課題が解決しそう」）
  ↓
信頼（「実在の会社が、実在の成果」）
  ↓
不安解消（「失敗しないと思える」）
  ↓
行動意欲（「今動く理由がある」）
  ↓
CV直前の決断（「資料くらいなら見てみよう」）
  ↓
CV後の安心（「申込後の流れが見える」）
```

この 9段階の感情ジャーニーを、全 LP の設計対象にします。

詳細は [experience-design/cv-emotion-journey.md](experience-design/cv-emotion-journey.md) を参照。

## Emotional CVR 必須スコア

| Scorecard | 必須スコア | 役割 |
|---|---|---|
| `scoring/emotional-cvr-scorecard.md` | 85+ | 感情とCVの接続 |
| `scoring/benefit-clarity-scorecard.md` | 85+ | メリットの分かりやすさ |
| `scoring/expectation-scorecard.md` | 85+ | 期待感の質 |
| `scoring/self-relevance-scorecard.md` | 85+ | 自分ごと化 |
| `scoring/lp-master-scorecard.md` | 90+ | 総合品質 |
| `scoring/legal-risk-scorecard.md` | 95+ | 法務安全性 |

## 高品質化レイヤーの完全構成

```
LP_Creator_Team/
├─ experience-design/   # ★体験価値・感情・CV接続
├─ skills/08_experience/ # ★感情設計手順
├─ contracts/experience-value-output-contract.md  # ★体験価値型
├─ contracts/emotional-cvr-output-contract.md     # ★感情ジャーニー型
├─ scoring/emotional-cvr-scorecard.md             # ★感情CVR採点
├─ scoring/benefit-clarity-scorecard.md           # ★メリット採点
├─ scoring/expectation-scorecard.md               # ★期待感採点
├─ scoring/self-relevance-scorecard.md            # ★自分ごと化採点
├─ components/emotion/   # ★感情に届く部品
└─ tests/                # ★品質ベンチマーク
```

## Validation Layer

LP_Creator_Team は、LPを生成するだけでなく、以下を検証します。

- ヒアリングから始まったか
- 必要 agent だけを使ったか
- Emotional CVR Layer が反映されているか
- 80点未満を差し戻したか
- HTML/CSS/JS が実用レベルか
- LP構成が網羅されているか
- AIっぽさが排除されているか

詳細は [validation/](validation/) を参照。

## Human Quality Layer

AIっぽい文章・構成・画像・デザインを排除し、人間が現場を理解して作ったようなLPへ磨きます。

チェック観点：

- 具体性
- 現場感
- 自然な文体
- 読み手の本音
- テンプレート臭のなさ
- 商材文脈に合う画像・デザイン
- CVへ進む自然な理由

詳細は [human-quality/](human-quality/) を参照。

## LP Structure Blueprint

LP構成として必ず押さえる王道15フローを定義しています。

詳細は [lp-structure-blueprint/](lp-structure-blueprint/) を参照。

## Validation 必須スコア

最終納品前に以下を全達成：

| Scorecard | 必須スコア |
|---|---|
| lp-master-scorecard | 90+ |
| emotional-cvr-scorecard | 85+ |
| benefit-clarity-scorecard | 85+ |
| expectation-scorecard | 85+ |
| self-relevance-scorecard | 85+ |
| human-naturalness-scorecard | 85+ |
| anti-ai-smell-scorecard | 90+ |
| code-practicality-scorecard | 85+ |
| lp-structure-completeness-scorecard | 85+ |
| legal-risk-scorecard | 95+（Critical Fail なし） |
| final-output-scorecard | 90+ |

## Visual Expression Layer

LPのアニメーション・タイポ・形状を「装飾」ではなく「意味の伝達」として設計します。

### 必須制約

```
1. translateY reveal 連発禁止（40%以下）
2. 装飾英語禁止（FEATURE / ABOUT / FLOW 等）
3. 角丸カード比率 50%以下
4. CV直前の過剰モーション禁止
5. 参考サイト丸写し禁止（原理のみ抽出）
```

### 必須出力

```
outputs/05_design/visual-expression-map.md
outputs/05_design/motion-storyboard.md
outputs/05_design/typography-rationale.md
outputs/05_design/shape-language-map.md
outputs/08_review/visual-expression-review.md
outputs/08_review/visual-expression-scorecard.md
```

### 担当エージェント

- `lp-motion-director` — モーション意味設計
- `lp-typography-director` — 日本語ラベル設計
- `lp-shape-language-designer` — 形状言語設計
- `lp-human-art-reviewer` — 人間品質審査

詳細は [skills/10_visual_expression/](skills/10_visual_expression/) を参照。
