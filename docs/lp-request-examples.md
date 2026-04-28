# LP制作依頼の例文集

Claude Code に LP_Creator_Team で依頼するときの例文。

## 基本フォーマット

```
LP_Creator_Team の lp-director を起点にして、LP制作を開始してください。
[案件の概要]
```

## 案件タイプ別の依頼例

### 例1: 新規LP（一気通貫）
```
新規でBtoB SaaS のLPを作ってください。

商材: 採用管理ツール
ターゲット: 中小企業の人事担当者
目的: 資料請求獲得
法務リスク: なし

戦略 → 構成 → コピー → デザイン → 実装 → 計測 → QA まで一気通貫で出してください。
```

### 例2: 既存LP改善
```
既存LP（https://example.com/lp）のCVR改善を依頼します。

直近3ヶ月のデータ:
- 月間セッション: 5,000
- フォーム到達率: 30%
- フォーム送信率: 10%
- CV: 150件 / 月
- CPA: 8,000円

改善目標: CVRを3% → 5% に。

施策提案 → A/Bテスト計画まで作ってください。
```

### 例3: 広告流入LP
```
Google広告流入用のLPを作ってください。

広告キーワード: 「採用管理 ツール」「ATS 比較」
ターゲット: 中堅企業の人事責任者
目的: 資料請求 + デモ予約

速度重視（LCP < 2.5s）、計測重視（GA4 / Google Ads CV）でお願いします。
```

### 例4: 採用LP
```
採用LPを作ってください。

ポジション: バックエンドエンジニア（3〜5年経験）
CV: カジュアル面談予約
会社規模: 50名 / SaaS / 創業5年
押し出したい価値: モダンな技術スタック / リモートワーク / 成長機会

法務観点（年齢制限・性別等）も注意して。
```

### 例5: SaaS LP
```
SaaS LP を作ってください。

商材: プロジェクト管理ツール
ターゲット: 中小企業の事業責任者
CV: 14日間無料トライアル登録

機能差別化が難しいので、ベネフィット訴求を強化してください。
価格3プラン提示、競合比較表必須。
```

### 例6: セミナーLP
```
オンラインセミナーのLPを作ってください。

セミナー: 「BtoBマーケティング最新トレンド 2026」
日時: 2026年5月15日 14:00〜16:00（オンライン）
講師: マーケティング会社代表
ターゲット: BtoBマーケター
CV: 申込フォーム送信
参加費: 無料
```

### 例7: 部分依頼（戦略のみ）
```
戦略設計だけ依頼します。実装は不要です。

商材: 法人向けクラウド会計
ターゲット: 中小企業経理担当者
競合: freee / マネーフォワード / 弥生

ペルソナ・訴求軸・差別化マトリクス・CTA方針 を出してください。
```

### 例8: 部分依頼（コピーのみ）
```
コピーだけ書いてください。

戦略は確定しています（添付参照）。
構成は10セクション（添付参照）。

ファーストビュー・全セクション本文・FAQ・最終CTA を執筆してください。
```

### 例9: 部分依頼（実装のみ）
```
HTML / CSS / JS の実装だけ依頼します。

コピー・デザイン仕様は確定済み（outputs/04_copy/, outputs/05_design/）。

セマンティックHTML、レスポンシブ、軽量CSS、計測 data 属性付与で実装してください。
LCP < 2.5s 目標。
```

### 例10: 法規制業界LP
```
医療系LPを作ってください。

商材: クリニック向け予約システム（医療機器ではない）
ターゲット: 開業医
CV: 資料請求

医療機器ではないが、医療文脈での誤認に注意。薬機法違反表現がないかしっかりチェックしてください。
```

## 依頼時のチェックポイント

依頼時に以下を含めると、ヒアリング工数が減ります：

- [ ] 商材名・カテゴリ
- [ ] LP目的（CV種別）
- [ ] ターゲット（業種・職種）
- [ ] 主要悩み or 提供価値
- [ ] 競合（あれば）
- [ ] 出力形式（戦略 / コピー / 実装 / 全部）
- [ ] 法務リスク（業界該当法令）
- [ ] 公開期日（あれば）

## 不明点が多い場合

```
詳細はあまり決まっていません。
まずヒアリング項目を提示してください。
```

→ `lp-director` が最大12問のヒアリングを実施します。

---

## 高品質化アップデートに関する追記

このプロジェクトは `skills/` `contracts/` `scoring/` `components/` `industry-playbooks/` を活用した高品質化アップデートが適用されています。

### 高品質化要素

| 要素 | 役割 | 場所 |
|---|---|---|
| skills | 作業手順 | `skills/` |
| contracts | 成果物の型 | `contracts/` |
| scoring | 品質採点 | `scoring/` |
| components | LP部品パターン | `components/` |
| industry-playbooks | 業種別攻略書 | `industry-playbooks/` |

### LP制作依頼時の推奨プロンプト

```
LP_Creator_Team の lp-director を起点にして、LP制作を開始してください。

まずは必要事項を最大12問以内でヒアリングしてください。
その後、回答内容をもとに、contracts と scorecards に準拠して、
戦略設計、構成、コピー、デザイン方針、HTML/CSS/JS、GA4/GTM計測設計、QAチェックリストまで作成してください。

80点未満の成果物は差し戻し、90点以上を納品推奨基準としてください。
```

### agent選定の考え方

- 案件タイプに応じて最小構成（director/agent-selection-rule.md）
- 全agent呼び出しは禁止
- 法務リスク該当業種では `lp-legal-expression-checker` が必須

### 品質スコアリングの運用

- 各フェーズ完了時: 該当 scorecard で採点
- 80点未満: 該当 agent に差し戻し
- 90点以上: 納品推奨
- 法務 Critical Fail: 点数に関係なく公開不可

### GitHub に上げてはいけない情報

- `.env` / `.env.*`
- `.claude/settings.local.json`
- API キー / 接続文字列
- 顧客実名・連絡先・ロゴ（許諾なし）
- 顧客実績数値の断定
- ブランドガイドライン PDF（NDA該当）
- 実案件の `outputs/` 配下成果物（公開リポジトリの場合）

詳細は `docs/github-upload-guide.md` を参照。

---

## Emotional CVR Layer の使い方

### LPの目的は CV最大化である

このプロジェクトのLP制作の最終目的は、見たユーザーをCVへ進ませることです。
情報を伝えるだけのLPは「中品質」、CVを最大化できるLPが「最高品質」です。

### CV最大化に必要な4要素

1. **メリット**: 機能ではなくベネフィットで、自分にとっての価値が見える
2. **期待感**: 導入後の未来が想像でき、根拠ある期待が持てる
3. **安心**: 不安カテゴリ全てが解消され、失敗回避が見える
4. **自分ごと化**: 「これは自分のためのサービスだ」と感じる

### Emotional CVR Layer の実行順

1. **ペルソナ精査**: `experience-design/user-motivation-map.md` で4分類動機を整理
2. **感情ジャーニー設計**: `experience-design/cv-emotion-journey.md` の 9段階を描く
3. **メリット翻訳**: `skills/08_experience/benefit-translation-skill.md` で 7段階変換
4. **期待感設計**: `skills/08_experience/expectation-building-skill.md` で根拠ある期待
5. **未来像設計**: `skills/08_experience/future-state-copy-skill.md` で時系列描写
6. **不安解消**: `skills/08_experience/emotional-objection-handling-skill.md` で 7不安カテゴリ対応
7. **自分ごと化**: `skills/08_experience/self-relevance-design-skill.md` でターゲット明示
8. **CV直前ブースト**: `skills/08_experience/cv-motivation-boost-skill.md` で行動意欲最大化
9. **採点**: 4 scorecard で 85+ 全達成

### lp-director への依頼例

```text
LP_Creator_Team の lp-director を起点にして、LP制作を開始してください。

最高品質のLPとは、見たユーザーにメリット・期待・安心・わくわく感を与え、
CVを最大化するLPである、という前提で進めてください。

まずは必要事項を最大12問以内でヒアリングしてください。

その後、contracts / scorecards / Emotional CVR Layer に準拠して、
戦略設計、構成、コピー、デザイン方針、HTML/CSS/JS、GA4/GTM計測設計、QAチェックリストまで作成してください。

80点未満の成果物は差し戻し、90点以上を納品推奨基準としてください。
また、emotional-cvr-scorecard / benefit-clarity-scorecard / expectation-scorecard / self-relevance-scorecard
は85点以上を必須にしてください。
```

### 期待感を誇張ではなく根拠で作るルール

| ❌ NG（誇張） | ✅ OK（根拠） |
|---|---|
| 「絶対に成功」 | 「導入企業の85%が継続利用（自社調べ・2025年）」 |
| 「業界の常識を覆す」 | 「同業種事例 5社を資料に収録」 |
| 「100%の効果保証」 | 「14日間無料トライアル / 月単位解約OK」 |
| 「劇的に変わる」 | 「3ヶ月で60%の工数削減（自社調べ・100社平均）」 |

期待感は **数値・事例・プロセス・第三者** の4種根拠で作ります。

### 関連ファイル

- `experience-design/` — 体験価値・感情の中核ナレッジ
- `skills/08_experience/` — 感情設計手順
- `contracts/experience-value-output-contract.md`
- `contracts/emotional-cvr-output-contract.md`
- `scoring/emotional-cvr-scorecard.md` 等
- `components/emotion/`

---

## Validation / Human Quality Layer の使い方

### Validation Layer

LP制作プロセスを8つの観点で検証：

```
1. director-behavior-validation - ヒアリングから始まるか
2. agent-selection-validation - 必要 agent だけか
3. emotional-cvr-validation - Emotional CVR Layer 反映
4. scorecard-enforcement-validation - 80点未満を差し戻し
5. code-practicality-validation - HTML/CSS/JS 実用性
6. lp-structure-completeness-validation - LP構成 16項目
7. anti-ai-output-validation - AIっぽさ排除
8. final-acceptance-validation - 最終納品判定
```

### Human Quality Layer

AIっぽさを排除する手順：

```
1. 抽象語をリストアップ → skills/09_humanization/anti-ai-copy-editing-skill.md
2. 競合置き換えテスト → 90%以上不成立で合格
3. 業務シーン描写を追加 → skills/09_humanization/concrete-detail-injection-skill.md
4. 商材文脈に合うビジュアル → skills/09_humanization/design-humanization-skill.md
5. 最終人間レビュー → skills/09_humanization/final-human-review-skill.md
```

### LP Structure Blueprint の使い方

LP構成の必須16項目を `lp-structure-blueprint/high-converting-lp-flow.md` で確認。

### 最終納品前の検証手順

1. すべての Validation を実行
2. すべての必須 scorecard で必須スコア達成
3. lp-final-gatekeeper の Final Acceptance Requirements を全項目チェック
4. `outputs/08_review/final-acceptance-report.md` に記録

### テストシナリオの実行方法

`tests/validation-scenarios/` 配下の7つのテストを実行し、`tests/evaluation-rubrics/` で採点。

### AIっぽさを検査する方法

`human-quality/ai-smell-detection-list.md` の4階層検査：

- 階層1: 単語レベル（危険語）
- 階層2: 文レベル（NG文構造）
- 階層3: セクションレベル
- 階層4: 全体レベル（競合置き換えテスト）
