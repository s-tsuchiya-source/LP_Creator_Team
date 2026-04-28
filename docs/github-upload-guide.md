# GitHub アップロード手順

LP_Creator_Team を GitHub に公開するための手順。

## 事前確認

### 1. 秘密情報チェック
以下が含まれていないことを確認：
- `.env` / `.env.*`（テンプレート以外）
- API キー / 接続文字列
- `.claude/settings.local.json`
- `outputs/` 配下の実案件成果物（顧客情報を含む可能性）

### 2. .gitignore 確認
`.gitignore` で以下が除外されているか確認：
```
.env
.env.*
.claude/settings.local.json
secrets/
node_modules/
*.log
```

## 初回コミット手順（PowerShell）

```powershell
cd "C:\Users\s-tsuchiya\Desktop\Webapp\LP_Creator_Team"

git init -b main
git status
git add .
git commit -m "Initial commit: add LP Creator Team"
```

## GitHub リモート追加

GitHub上で新規リポジトリを作成した後：

```powershell
git remote add origin https://github.com/USER_NAME/LP_Creator_Team.git
git branch -M main
git push -u origin main
```

## 注意点

### コミット前の最終チェック
```powershell
# ステータス確認
git status

# .env が含まれていないか
git status | Select-String "\.env"

# .claude/settings.local.json が含まれていないか
git status | Select-String "settings.local"

# 大きなファイルがないか
Get-ChildItem -Recurse -File | Sort-Object Length -Descending | Select-Object -First 10
```

### 公開前確認

- [ ] `.env` を上げない
- [ ] `.claude/settings.local.json` を上げない
- [ ] APIキーをREADMEに書かない
- [ ] 実案件の顧客情報を `examples/` に入れない
- [ ] `outputs/` 配下の実案件成果物を確認

### 公開リポジトリにする場合の追加チェック

社内情報・顧客情報・実績数値の断定表現に注意：
- 既存サービス名・社名・ロゴが残っていないか
- 顧客実績の具体数値がないか
- 連絡先（メール / 電話）が含まれていないか
- ブランドガイドライン PDF が含まれていないか

## 推奨運用

### Branches
- `main` — 安定版
- `feat/xxx` — エージェント追加・改善
- `docs/xxx` — ドキュメント更新
- `fix/xxx` — バグ修正

### Commit メッセージ
```
[type]: [概要]

詳細説明

[type]:
- feat: 機能追加
- fix: バグ修正
- docs: ドキュメント
- refactor: リファクタ
- chore: 雑務
```

例:
```
feat: lp-localization-specialist エージェントを追加

英語LP対応のための翻訳・カルチャライズ専門エージェント
```

## トラブルシューティング

### `.env` を間違ってコミットした場合
```powershell
# 履歴から完全削除（注意：履歴改変）
git rm --cached .env
git commit -m "Remove .env from tracking"

# git filter-branch / BFG Repo-Cleaner で完全削除
# → 既に push 済みなら、上記後に force push が必要
```

### Public Repository にしてはいけないファイル
- 顧客の連絡先・契約書
- 売上・商談データ
- ブランドガイドライン（NDA該当）
- 競合分析の機密情報
