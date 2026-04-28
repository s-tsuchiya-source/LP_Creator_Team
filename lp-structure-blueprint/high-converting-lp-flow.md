# High Converting LP Flow

LPとして必ず押さえるべき王道15フロー。

すべての案件で参照する基準。案件タイプにより省略可能項目はあるが、`lp-director` が理由付きで判断する。

## 15フロー

### 1. Traffic Intent Match（流入意図の受け止め）

- 流入元（広告 / SEO / メール / SNS）の検索意図と一致する
- 広告コピーと FV のメッセージマッチ
- 検索キーワードが FV に含まれる（広告流入の場合）

**良い例**: 広告「採用工数 削減」→ FV「採用工数を最大60%削減」
**悪い例**: 広告と関係ない訴求 / 流入元ごとに分けない

### 2. First View（ファーストビュー）

- 3秒で「誰向けか」「何が得られるか」「なぜ信頼できるか」が分かる
- メインCTA可視
- 信頼バッジ（実績・認証・受賞）あり

詳細は `first-view-requirements.md` を参照。

### 3. Problem Recognition（誰向けかの明示・課題提起）

- ターゲット明示「中小企業の人事担当者へ」等
- ユーザーが言語化できていない悩みを言語化
- 3〜5個の悩みリスト（チェックリスト形式推奨）

詳細は `problem-empathy-flow.md` を参照。

### 4. Empathy & Stakes（共感と放置リスク）

- 「分かってくれている」と感じる共感文
- 放置した場合の業務影響・コスト・心理負荷
- 不安煽り過剰NG（具体的な事実ベース）

### 5. Solution Promise（解決約束）

- このLPが提示する解決の核心メッセージ
- 「[業務] を [改善幅] する」型
- 数値根拠（出典付き）

### 6. Mechanism（解決メカニズム）

- なぜ解決できるのか
- 機能の裏にあるロジック
- 「ベネフィット → 機能」の順で説明

詳細は `solution-mechanism-flow.md` を参照。

### 7. Benefit Expansion（具体ベネフィット）

- 短期 / 中期 / 長期メリット
- 経済的 / 時間的 / 心理的 / 業務上 / 社内評価メリット
- ベネフィット翻訳（機能 → 業務 → 心理 → 評価 → 未来）

### 8. Proof（証拠・実績）

- 数値実績（出典付き）
- 同業種・同規模の事例
- 受賞・認証
- メディア掲載
- お客様の声（許諾済）

詳細は `proof-trust-flow.md` を参照。

### 9. Comparison（競合・代替手段との違い）

- 比較表（客観的評価軸）
- 自社の優位点 + 劣位点（信頼性）
- 既存代替（人力 / Excel / 既存ツール）との違い

詳細は `comparison-objection-flow.md` を参照。

### 10. Offer（オファー）

- 主オファー: 資料請求 / 無料相談 / 無料トライアル
- 副オファー: デモ / 個別相談
- 限定性（実態に即す）
- 保証（実行可能範囲）

詳細は `offer-cta-flow.md` を参照。

### 11. Objection Handling（不安解消）

- 6カテゴリ不安（価格 / 導入 / 効果 / 運用 / 社内説明 / 失敗）
- FAQ 5〜10件
- 「契約後も自由」設計

### 12. Process（導入・利用の流れ）

- 申込後の流れ（即時 → 数日 → 1週間 → 1ヶ月）
- 担当者・サポート体制
- 解約条件・返金条件

### 13. CTA Reinforcement（CTA直前の行動理由）

- ベネフィット再訴求
- 「今動く理由」（実態に即す）
- ハードル低い行動の強調（「資料を見るだけでもOK」）

### 14. Final CTA（最終CTA）

- 主CTA + 副CTA
- 安心要素（解約・返金・営業電話の有無）
- CV後の流れ予告

### 15. Post CV Expectation（CV後の安心設計）

- サンクスページ
- 自動返信メール内容
- 「申込後何が起きるか」の明示
- 次のアクション提示

詳細は `post-cv-experience-flow.md` を参照。

## チェックリスト

- [ ] 15フローすべて含まれている、または省略項目が理由付きで明示
- [ ] セクション順序が断絶していない
- [ ] Emotional CVR 9段階感情ジャーニーと整合
- [ ] CTA最低3箇所配置

## Related Files

- `validation/lp-structure-completeness-validation.md`
- `scoring/lp-structure-completeness-scorecard.md`
- `experience-design/cv-emotion-journey.md`
- agent: `lp-structure-designer` / `lp-director`
