# Agent Selection Log — RecruitFlow

## 案件タイプ
- 新規LP / BtoB SaaS / 計測あり / 法務リスク中（HR Tech・断定数値NG）

## 業種 playbook
- `industry-playbooks/btob-saas-playbook.md`

## 使用エージェント（必要最小構成）

| エージェント | 起動理由 |
|---|---|
| lp-director | 統括（必須） |
| lp-business-model-analyst | BtoB高単価・商談化までの設計に必要 |
| lp-marketing-strategist | 訴求軸・KPI設計が必要 |
| lp-persona-researcher | 担当者・決裁者・情シスの3層ペルソナ整理 |
| lp-offer-architect | 「資料請求」のオファー設計（無料・営業電話なし等） |
| lp-structure-designer | 16フロー準拠のセクション設計 |
| lp-chief-copywriter | コピー全体統括 |
| lp-headline-specialist | FV見出し・CTA文言 |
| lp-proof-copywriter | 機能・ベネフィット部の信頼担保コピー |
| lp-faq-copywriter | 6不安カテゴリ対応FAQ |
| lp-cta-flow-designer | CTA配置・フォーム導線 |
| lp-frontend-engineer | HTML/CSS/JS 実装統括 |
| lp-html-css-specialist | セマンティック・レスポンシブ |
| lp-accessibility-engineer | a11y（WCAG最低限） |
| lp-ga4-gtm-specialist | GA4イベント・dataLayer設計 |
| lp-legal-expression-checker | 採用関連表現・断定表現チェック（任意だが安全側で起動） |
| lp-qa-lead | QA統括 |
| lp-final-gatekeeper | 最終承認 |

合計: **18 / 44 agent** を起動。残り26 agentは除外。

## 除外エージェント

| エージェント | 除外理由 |
|---|---|
| lp-lpo-strategist | 既存LP不在のため改善観点不要 |
| lp-customer-insight-researcher | 仮置き案件のため定性調査スコープ外 |
| lp-competitor-researcher | 競合社名特定なし、playbook記載で代替 |
| lp-market-researcher | 市場文脈は playbook で代替 |
| lp-wireframe-planner | structure-designer が兼務 |
| lp-ux-designer | structure / cta-flow が代替、過剰回避 |
| lp-sales-copywriter | proof / headline で代替 |
| lp-creative-director | デザイン方針は director が要件のみ提示 |
| lp-art-director | 同上 |
| lp-web-designer | テンプレート不要、html-css-specialist が代替 |
| lp-ui-designer | UI部品は html-css-specialist が代替 |
| lp-graphic-designer | 図解・比較表のみで足りる |
| lp-responsive-specialist | html-css-specialist が兼務 |
| lp-javascript-engineer | スムーススクロール / FAQ開閉のみ、frontend が兼務 |
| lp-form-implementation-specialist | mock送信、本番接続は別 |
| lp-performance-engineer | 軽量実装方針で十分（後追いで起動可） |
| lp-conversion-tracking-specialist | ga4-gtm が兼務 |
| lp-crm-ma-integration-specialist | CRM連携要件未確定 |
| lp-heatmap-analyst | 既存LP不在 |
| lp-ab-test-planner | 公開前のためA/B不要 |
| lp-browser-test-specialist | qa-lead が兼務 |
| lp-security-checker | 個人情報送信実装は本番接続後に再起動 |
| lp-release-manager | 公開フェーズで起動、本テストはスコープ外 |
| lp-executive-reviewer | 経営観点は不要（架空案件） |
| lp-conversion-reviewer | director / final-gatekeeper が兼務 |
| lp-brand-reviewer | ブランドGL未提示 |

## 選定根拠

- `director/agent-selection-rule.md` の **5. SaaS LP** および **3. BtoB高単価LP** をベースに合成
- `industry-playbooks/btob-saas-playbook.md` の Recommended Agents（9エージェント）を全て採用
- HTML実装ありのため frontend / html-css / a11y を追加
- 法務リスク中（HR・採用領域）のため legal-expression-checker を予防的に追加
- 全44 agentを起動しない（過剰起動禁止ルール準拠）
