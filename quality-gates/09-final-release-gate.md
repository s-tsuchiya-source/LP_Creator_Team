# Gate 9: Final Release Gate

## 目的

LP公開可否を最終判定する。

## 担当エージェント

- `lp-executive-reviewer`
- `lp-conversion-reviewer`
- `lp-brand-reviewer`
- `lp-final-gatekeeper`（統合）
- `lp-release-manager`（手順）

## 合格条件

- [ ] LP目的との整合
- [ ] CV導線が機能
- [ ] コピーが完成
- [ ] デザインが完成
- [ ] 実装が完成
- [ ] 計測が動作
- [ ] QA 通過
- [ ] 法務・セキュリティ通過
- [ ] GitHub公開前の不要ファイル除外
- [ ] ロールバック計画あり

## 不合格条件

- 各ゲート未通過
- レビューボードで BLOCK が1つ以上

## 差し戻し条件

- 上記不合格条件
- 公開後監視項目が未整理

## 確認チェックリスト

```markdown
## Final Release Gate チェック
- [ ] Gate 1-8 すべて通過
- [ ] 経営レビュー: PASS
- [ ] CVレビュー: PASS
- [ ] ブランドレビュー: PASS
- [ ] 法務: PASS
- [ ] セキュリティ: PASS
- [ ] QA: PASS
- [ ] リリース手順
- [ ] ロールバック条件
- [ ] 公開後監視項目
- [ ] GitHub除外ファイル確認
```

## 通過後

→ ユーザーへ公開承認通知
→ 公開実行
→ 公開後監視（最初の1日 / 1週間）

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/final-delivery-contract.md`
- **Related Scorecard**: `scoring/lp-master-scorecard.md` / `scoring/final-output-scorecard.md` / `scoring/legal-risk-scorecard.md`
- **Minimum Passing Score**: lp-master 90+ / final-output 90+ / legal-risk 95+
- **Critical Fail Conditions**: BLOCK レビューあり / Critical Fail（法務 / 計測 / 主要動作）あり
- **Required Fix Actions**: `skills/07_review/release-readiness-review-skill.md` で再判定

---

## Emotional CVR Check（追加）

このゲートでは、Emotional CVR Layer の観点も必ず確認する：

- [ ] ユーザーが得るメリットは明確か
- [ ] 導入後の未来が想像できるか
- [ ] 不安から期待への転換があるか
- [ ] CTA直前の行動意欲が高まっているか
- [ ] CV後の流れが明確か
- [ ] ファーストビューで「自分のことだ」と感じるか
- [ ] 期待感が誇大表現でなく根拠ベース

### Required Emotional Scorecards

- `scoring/emotional-cvr-scorecard.md`: **85点以上**
- `scoring/benefit-clarity-scorecard.md`: **85点以上**
- `scoring/expectation-scorecard.md`: **85点以上**
- `scoring/self-relevance-scorecard.md`: **85点以上**

### Required References

- `experience-design/emotional-cvr-principles.md`
- `experience-design/cv-emotion-journey.md`
- `contracts/emotional-cvr-output-contract.md`

---

## Validation Layer / Human Quality Layer 通過確認

### Validation Layer
- [ ] director-behavior-validation 合格
- [ ] agent-selection-validation 合格
- [ ] emotional-cvr-validation 合格
- [ ] scorecard-enforcement-validation 合格
- [ ] code-practicality-validation 合格
- [ ] lp-structure-completeness-validation 合格
- [ ] anti-ai-output-validation 合格
- [ ] design-differentiation-validation 合格

### Human Quality Layer
- [ ] human-naturalness-scorecard 85+
- [ ] anti-ai-smell-scorecard 90+
- [ ] 競合置き換えテスト 90%以上不成立
- [ ] 業務シーン描写あり
- [ ] 担当者の本音入り
- [ ] 数字に出典付き
- [ ] 商材文脈に合うビジュアル

### LP Structure Blueprint 準拠
- [ ] 16必須項目網羅、または省略項目に理由
- [ ] セクション順序が論理的
- [ ] CTA 最低3箇所
- [ ] FAQ 6カテゴリ網羅

### 実用コード検査
- [ ] code-practicality-scorecard 85+
- [ ] LCP / CLS / INP 達成
- [ ] 計測 data 属性完備
- [ ] a11y Lighthouse 90+

### Design Differentiation Layer 通過確認（必須）

- [ ] `quality-gates/design-differentiation-gate.md` 通過
- [ ] `scoring/design-differentiation-scorecard.md` **85点以上**
- [ ] `contracts/design-differentiation-output-contract.md` の必須セクションすべて記録
- [ ] Reference Direction（参考元 + 抽出原理）あり / 丸写しなし
- [ ] Icon / UI Component / Typography / Animation Strategy が **理由付き** で明示
- [ ] Visual Hierarchy（first / second / third）が定義され、CTA到達性が確認済み
- [ ] Emotional Role（信頼 / 期待 / 安心 / 高揚 等）と Conversion Role（不安低減 / 動機強化 / 仕組み説明 / 証拠補強 / CTA推進）が明示
- [ ] Anti-Generic Design Check 通過（競合社名に置換しても成立する設計でない）
- [ ] `outputs/08_review/design-differentiation-layer-report.md` 存在

詳細は `validation/` 配下の各ファイルを参照。
