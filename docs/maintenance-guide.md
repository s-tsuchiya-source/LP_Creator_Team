# メンテナンスガイド

LP_Creator_Team の継続改善・運用方法。

## 改善対象

### 1. ナレッジ追加
新しい業界・新しい訴求パターンが出てきた場合：

- `knowledge/lp-patterns/[業界].md` を追加
- `knowledge/copy-frameworks/[フレームワーク].md` を追加
- `knowledge/section-patterns/[セクション].md` を追加
- 既存ファイルの更新を優先（重複回避）

### 2. エージェント追加・改善
新しい役割が必要な場合：

- `.claude/agents/[エージェント名].md` を追加
- YAML frontmatter を必ず付与
- `name` は英小文字 + ハイフンのみ
- `description` は「いつ使うべきか」を明示
- `agent-teams/` の該当チームファイルにも追加
- `director/agent-selection-rule.md` の案件タイプ表を更新

### 3. 品質ゲート更新
基準・チェックリストの調整：

- `quality-gates/0X-xxx-gate.md` を更新
- 既存案件の振り返りから学びを反映

### 4. ワークフロー追加
新しい案件タイプ：

- `workflows/[タイプ]-workflow.md` を追加
- `director/agent-selection-rule.md` を更新

### 5. テンプレート改善
- `templates/` 配下のテンプレートを実案件で使った気付きから更新
- 例: 必須項目の追加・削除

## 振り返りプロセス

### 案件完了時
1. `tasks/done.md` に学びを記録
2. 共通課題があれば該当ナレッジを更新
3. エージェントの応答品質に問題があれば改善

### 月次振り返り
1. 直近の案件成果物を見直し
2. ナレッジ追加候補をリストアップ
3. エージェントの応答ばらつきを修正
4. 品質ゲートの追加・更新

## バージョニング

GitHub 管理時：

- `main` ブランチ: 安定版
- `feat/*`: 機能追加
- `docs/*`: ドキュメント
- `fix/*`: 修正

## ナレッジの整理ルール

### 追加時
- 既存ファイルとの重複を確認
- 重複なら既存を更新、新ファイル禁止
- 1ファイル = 1主題
- 700行以内目安

### 削除時
- ナレッジが古くなった場合は更新
- 完全に陳腐化した場合のみ削除（履歴は git で残る）

## 秘密情報の継続的なチェック

定期的に以下を確認：

```powershell
# .env がコミットされていないか
git log --all --full-history -- .env

# 顧客情報・連絡先らしき文字列の検索
git grep -i "@example.com\|03-1234"

# 外部APIキーらしきパターン
git grep -E "[A-Z0-9]{32,}" -- "*.md"
```

## 拡張アイデア

### 短期
- 業界特化エージェント追加（医療 / 不動産 / 金融）
- 多言語LP対応エージェント
- 実装テンプレート（Astro / Next.js / 静的HTML）

### 中期
- LP→広告クリエイティブ自動連携
- A/Bテスト自動分析
- 実案件の成功事例ライブラリ

### 長期
- マルチプロダクト展開（LP + サイト + 広告 + メール）
- ロールプレイ型ヒアリング（営業疑似）
- ビジュアル生成連携（画像生成エージェント）

## メンテナンス時の禁止事項

- 公開リポジトリへ顧客固有情報を追加
- API キー・接続文字列のコミット
- ブランドガイドラインPDF など NDA該当資料の追加
- 大規模な構造変更（破壊的変更）を main へ直接マージ

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
