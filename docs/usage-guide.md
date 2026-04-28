# 使い方ガイド

LP_Creator_Team を Claude Code から使う手順。

## 前提
- Claude Code がインストール済み
- このリポジトリをローカルにクローン済み

## 起動

```powershell
cd "C:\Users\s-tsuchiya\Desktop\Webapp\LP_Creator_Team"
claude
```

## 基本フロー

### 1. LP制作依頼を出す

Claude Code に以下のように依頼：

```
LP_Creator_Team の lp-director を起点にLP制作を開始してください。
```

または具体的に：

```
BtoB SaaS の資料請求LPを作りたいです。
ターゲットは中小企業の人事担当者。
戦略 → 構成 → コピー → デザイン → 実装 → 計測 → QA まで一気通貫で出してください。
```

### 2. ヒアリングに回答

`lp-director` が最大12問のヒアリングを実施するので、回答する。
不明な項目は「仮置きでお願いします」と伝えてもよい。

### 3. 各フェーズの成果物を確認

各フェーズの成果物が `outputs/` 配下に生成される：
- `outputs/01_brief/` — ブリーフ
- `outputs/02_strategy/` — 戦略
- `outputs/03_structure/` — 構成
- `outputs/04_copy/` — コピー
- `outputs/05_design/` — デザイン方針
- `outputs/06_code/[案件名]/` — 実装
- `outputs/07_measurement/` — 計測
- `outputs/08_review/` — レビュー

### 4. 最終承認

`lp-final-gatekeeper` が公開可否を判定し、ユーザーに通知。

## 案件タイプ別の依頼例

### 新規LP
```
新規でBtoB SaaS のLPを作りたい。
詳細はヒアリングで答えます。
```

### 既存LP改善
```
既存LP（URL: https://example.com/lp）のCVRを改善したい。
直近3ヶ月のGA4データもあります。
```

### 広告LP
```
Google広告流入用のLPを作りたい。
広告キーワードは「採用管理 ツール」「ATS」。
速度重視・計測重視で。
```

### 採用LP
```
エンジニア採用LPを作りたい。
ターゲットは3〜5年経験のWebエンジニア。
カジュアル面談予約をCV地点に。
```

### 部分的な依頼
```
構成だけ提案してください。実装は不要です。
```

## ヒアリング時のヒント

- 不明な箇所は「仮置きで」と言ってOK
- ただし以下は確実に答える：
  - 商材・サービス名
  - LPの目的（CV種別）
  - ターゲット（業種 / 役職）
  - 法務リスクの有無

## 中断・再開

セッションを中断する場合：

```
現在の状態を outputs/ と tasks/active-task.md に保存してください。
```

再開時：

```
tasks/active-task.md を読んで、続きから進めてください。
```

## トラブル

### エージェントが多すぎてセッション消費が大きい
→ `lp-director` に「最小構成で」と伝える

### 中間成果物の質が物足りない
→ 該当エージェントに「より具体的に」「ペルソナの言葉で」と指示

### 法務リスクが心配
→ `lp-legal-expression-checker` を必ず通す

### GitHub に上げる前
→ [github-upload-guide.md](github-upload-guide.md) を参照

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
