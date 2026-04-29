# Scorecard Summary — RecruitFlow

## 初稿スコア（v1）

| Scorecard | スコア | 必須スコア | 判定 |
|---|---|---|---|
| lp-master-scorecard | 87 | 90+ | FAIL |
| emotional-cvr-scorecard | 86 | 85+ | PASS |
| benefit-clarity-scorecard | 88 | 85+ | PASS |
| expectation-scorecard | 85 | 85+ | PASS |
| self-relevance-scorecard | 87 | 85+ | PASS |
| human-naturalness-scorecard | 87 | 85+ | PASS |
| anti-ai-smell-scorecard | 91 | 90+ | PASS |
| code-practicality-scorecard | 89 | 85+ | PASS |
| legal-risk-scorecard | 96 | 95+ | PASS |
| **lp-structure-completeness-scorecard** | **78** | **85+** | **FAIL** |
| final-output-scorecard | 86 | 90+ | FAIL |

### Critical Fail Conditions（v1）
| Condition | 該当 | 詳細 |
|---|---|---|
| 法務 No.1表現 | なし | 断定表現を使用していない |
| 個人情報生送信 | なし | dataLayer に PII を送らない |
| 主要動作 | なし | フォーム動作・スムーススクロール OK |
| AIっぽさ Critical Fail | なし | 「お問い合わせ」だけのCTAなし |

### 不合格理由（v1）

- **lp-structure-completeness 78/100（必須85未満）**: 必須16項目 #10「証拠・実績・事例」が、HTML上で実体セクションとして配置されていない（コピー側ではプレースホルダ言及のみ）。導入企業コメント / 受賞 / 認証 / メディア掲載 のいずれも具体ブロックなし。
- **lp-master 87/100（必須90未満）**: 上記の波及で総合スコアが下振れ
- **final-output 86/100（必須90未満）**: 上記の波及

## 差し戻し履歴

| 日時 | 差し戻し scorecard | スコア | 差し戻し先 | 修正内容 |
|---|---|---|---|---|
| 2026-04-29 | lp-structure-completeness | 78 | `lp-structure-designer` + `lp-proof-copywriter` | 「導入企業の声」セクションを HTML に追加。テスト案件のため実名を出さない注意書き付き。許諾済データに差し替えできるプレースホルダ構造で実装。 |

## 修正後スコア（v2）

| Scorecard | スコア | 必須スコア | 判定 |
|---|---|---|---|
| lp-master-scorecard | 92 | 90+ | PASS |
| emotional-cvr-scorecard | 88 | 85+ | PASS |
| benefit-clarity-scorecard | 89 | 85+ | PASS |
| expectation-scorecard | 87 | 85+ | PASS |
| self-relevance-scorecard | 88 | 85+ | PASS |
| human-naturalness-scorecard | 88 | 85+ | PASS |
| anti-ai-smell-scorecard | 92 | 90+ | PASS |
| code-practicality-scorecard | 90 | 85+ | PASS |
| legal-risk-scorecard | 96 | 95+ | PASS |
| lp-structure-completeness-scorecard | **88** | 85+ | PASS |
| final-output-scorecard | 91 | 90+ | PASS |

## 最終判定

- **全 PASS**（v2）
- 公開可（テスト案件のため、実運用時は導入企業コメントの実名・許諾を再確認）
