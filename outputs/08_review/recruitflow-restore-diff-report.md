# RecruitFlow Stash Restore — 差分整理レポート

- 実施日: 2026-04-29
- 目的: 直前セッションで stash に退避された RecruitFlow テスト案件成果物と、リモートで先行追加された別バージョンとの差分を整理し、適用方針を判断するための材料を提示する。
- 担当: lp-director（Claude Code）

## 保全状態

### Git ブランチ（永続化）

```
recruitflow-backup-2026-04-29  (commit c586701)
  ├─ main から分岐
  ├─ design-differentiation Layer 強化（5b59f1e）含む
  └─ 14ファイル / +1458行 を Backup commit として追加保全
```

main には影響なし。`git checkout recruitflow-backup-2026-04-29` でいつでも復元可能。

### 物理コピー（目視確認用）

```
c:/tmp/recruitflow-stash-restore/outputs/
```

→ git管理外の独立コピー。ファイル単位のエディタ閲覧・diff ツールでの比較に使用可能。

### Stash 削除済

`stash@{0}` は branch 化したため drop 済（重複保全のため安全）。

---

## 私版 vs リモート版 — 比較サマリ

| 項目 | 私版（backup branch） | リモート版（main） |
|---|---|---|
| 実装パス | `outputs/06_code/recruitflow/` | `outputs/06_code/test-lp-20260429-01-recruitflow-ai/` |
| 商材コンセプト | **採用管理クラウド**（応募・選考・連絡履歴を一画面に集約） | **求人原稿改善AI**（原稿スコアリング × AIレビュー × チーム標準化） |
| ターゲット | 中堅企業の人事・採用担当（媒体5つ以上運用） | 採用チーム（原稿改善が課題） |
| FV キャッチ | 「応募から内定まで、別々の画面を行き来しない採用管理に。」 | 「求人原稿の改善を、担当者の勘からチームの仕組みへ。」 |
| デザイン傾向 | シンプル・業務SaaS的（最小装飾 / mock window） | リッチ・装飾的（gradient / orb / panel / dash UI） |
| HTML 行数 | 309 行（複数 `<section>` 分割 / セマンティック明示） | 35 行（minified inline CSS / single-line セクション） |
| ファイル数 | **14ファイル**（brief / strategy / structure / copy / design / code 3 / measurement / 4 review log） | **1ファイル**（HTML単体） |
| Design Differentiation 適用 | 当時未策定のため未適用 | リモートで策定された design-differentiation を実装 |

### 結論：**両者は別商材の別 LP**

「RecruitFlow」という名前は同じだが、**商材の中核機能が異なる**：

- 私版 = 「応募者管理（ATS）」
- リモート版 = 「求人原稿改善 AI（原稿レビュー）」

→ どちらかを採用 / 廃棄する判断ではなく、**両方の独立 LP として共存可能**。

---

## ファイル単位の差分

### 私版にしか存在しないファイル（14ファイル）

| カテゴリ | パス | 用途 |
|---|---|---|
| ヒアリング | `outputs/01_brief/recruitflow-hearing.md` | 12問ヒアリング記録 / 仮置き宣言 |
| ブリーフ | `outputs/01_brief/recruitflow-brief.md` | LP制作ブリーフ |
| 戦略 | `outputs/02_strategy/strategy.md` | CV戦略・ターゲット階層・訴求軸 |
| 構成 | `outputs/03_structure/sections.md` | 16必須項目チェック / 9段階感情ジャーニー反映 |
| コピー | `outputs/04_copy/copy.md` | コピー全文（FV〜CV後流れまで） |
| デザイン | `outputs/05_design/design-direction.md` | デザイン方針書 |
| 実装 | `outputs/06_code/recruitflow/index.html` | HTML（309行 / セマンティック） |
| 実装 | `outputs/06_code/recruitflow/style.css` | CSS（435行） |
| 実装 | `outputs/06_code/recruitflow/script.js` | JS（83行 / GA4 dataLayer 連携） |
| 計測 | `outputs/07_measurement/measurement.md` | GA4イベント・GTM 設定 |
| レビュー | `outputs/08_review/agent-selection-log.md` | 18/44 agent選定理由 |
| レビュー | `outputs/08_review/scorecard-summary.md` | 11 scorecard採点 / 差し戻し→修正履歴 |
| レビュー | `outputs/08_review/lp-structure-validation.md` | 16必須項目チェック詳細 |
| レビュー | `outputs/08_review/human-quality-review.md` | AIっぽさ検出 / 修正一覧 |

### リモート版にしか存在しないファイル

| パス | 内容 |
|---|---|
| `outputs/06_code/test-lp-20260429-01-recruitflow-ai/index.html` | 求人原稿改善AI コンセプトの単体HTML LP |
| `outputs/06_code/test-lp-20260429-02-ads-bridge/index.html` | 別案件（広告ブリッジLP） |
| `outputs/06_code/test-lp-20260429-03-mirai-english/index.html` | 別案件（英会話LP） |
| `outputs/09_visual_assets/aggregate-visual-lps-20260429/README.md` | aggregate visual LP asset workflow |

### 名称が衝突するファイル

なし。私版は `recruitflow/`, リモート版は `test-lp-20260429-01-recruitflow-ai/` で配置パスが異なるため、**同時存在で衝突しない**。

---

## 整理・適用方針の選択肢

### 選択肢 A: 両方残す（私版を main に取り込む / 推奨）

- 私版を main の `outputs/06_code/recruitflow/`（または改称）に取り込む
- 14ファイルすべてを main に commit
- 「採用管理クラウド」と「求人原稿改善AI」の **2バージョンの RecruitFlow テスト LP** が並存
- design-differentiation Layer の効果検証材料として、**異なる商材軸の作例** を持つ価値がある

```bash
# backup branch から outputs/ 配下のテスト案件ファイルだけ main に取り込む
git checkout recruitflow-backup-2026-04-29 -- \
  outputs/01_brief/recruitflow-brief.md \
  outputs/01_brief/recruitflow-hearing.md \
  outputs/02_strategy/strategy.md \
  outputs/03_structure/sections.md \
  outputs/04_copy/copy.md \
  outputs/05_design/design-direction.md \
  outputs/06_code/recruitflow/ \
  outputs/07_measurement/measurement.md \
  outputs/08_review/agent-selection-log.md \
  outputs/08_review/scorecard-summary.md \
  outputs/08_review/lp-structure-validation.md \
  outputs/08_review/human-quality-review.md
git commit -m "Add RecruitFlow ATS test case (parallel to RecruitFlow AI sample)"
```

### 選択肢 B: 取り込まずブランチ保全のみ（保留）

- main は触らず、`recruitflow-backup-2026-04-29` ブランチでのみ保持
- 後日必要になったらマージ可能
- main の commit history を増やさない

→ 何もしないだけ。

### 選択肢 C: 私版を design-differentiation Layer に準拠させて再生成 → 取り込み

- 旧版（design-differentiation 未適用）はリファレンスとして branch 保持
- 新たに `lp-visual-asset-director` を起動して design-differentiation を反映した v2 を作成
- v2 を main に commit

→ 工数が増えるが、最高品質の作例が得られる。

### 選択肢 D: 全廃棄

- ブランチも archive コピーも削除
- `git branch -D recruitflow-backup-2026-04-29 && rm -rf c:/tmp/recruitflow-stash-restore/`
- 保全価値がない場合のみ

→ **非推奨**（既に commit 済みのため復元不可になる）。

---

## 推奨判断

**A（両方残す）** を推奨する理由：

1. リモート版とは商材コンセプトが異なるため、「同じ名前の別 LP」として並存可能
2. 私版は **14ファイルの全フェーズ成果物セット** が揃っており、validation の検証材料として価値が高い（前タスクの直前で `validation-report.md` 作成手前まで進んでいた）
3. design-differentiation Layer 適用前後の比較材料になる
4. main に取り込んでも他ファイルとの衝突なし（パス独立）
5. backup branch は段階的に削除可能（main 取り込み後に `git branch -D` 可）

ただし、「Codex 自動レビューの対象になる」「outputs/ の肥大化」が気になる場合は B（保留）が無難。

---

## 次のアクション候補

ユーザーの判断が必要：

1. **A 採用**: 私版14ファイルを main に取り込み、`validation-report.md` を最後に作成して前タスク完了とする
2. **B 採用**: backup branch のみ残し、main は触らない（保留）
3. **C 採用**: design-differentiation 準拠で v2 を新規生成
4. **D 採用**: 全廃棄

どれで進めますか？

---

## 関連ファイル

- backup branch: `recruitflow-backup-2026-04-29` (commit c586701)
- 物理コピー: `c:/tmp/recruitflow-stash-restore/`
- 比較対象（リモート版）: `outputs/06_code/test-lp-20260429-01-recruitflow-ai/index.html`
- 直前タスク報告: `outputs/08_review/design-differentiation-layer-report.md`
