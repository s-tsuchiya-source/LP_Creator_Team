# Quality Assurance Team — QAチーム

LP公開前の品質保証を担当。

## メンバー

| エージェント | 役割 |
|---|---|
| [lp-qa-lead](../.claude/agents/lp-qa-lead.md) | QA統括 |
| [lp-browser-test-specialist](../.claude/agents/lp-browser-test-specialist.md) | クロスブラウザ |
| [lp-legal-expression-checker](../.claude/agents/lp-legal-expression-checker.md) | 法務表現 |
| [lp-security-checker](../.claude/agents/lp-security-checker.md) | セキュリティ |
| [lp-release-manager](../.claude/agents/lp-release-manager.md) | リリース |

## 担当範囲

- QAチェックリスト
- 主要ブラウザ・デバイス検証
- 法務・薬機法・景表法チェック
- セキュリティ（HTTPS / 個人情報 / 外部スクリプト）
- リリース手順 / ロールバック

## 主要な成果物

- QAレポート
- ブラウザテストレポート
- 法務監査レポート
- セキュリティ監査書
- リリースチェックリスト

保存先: `outputs/06_code/[案件名]/` または `outputs/08_review/`

## 連携先

- 上流: Development
- 下流: Review Board / `lp-final-gatekeeper`
