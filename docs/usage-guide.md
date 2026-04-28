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
