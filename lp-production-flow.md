# lp-production-flow.md — LP制作フロー全体

## 全体フロー図

```
[ユーザー依頼]
     ↓
[1. Brief Gate]      ← lp-director が初回ヒアリング（最大12問）
     ↓
[2. Strategy Gate]   ← marketing / lpo / persona / offer
     ↓
[3. Structure Gate]  ← structure-designer / wireframe-planner / cta-flow-designer
     ↓
[4. Copy Gate]       ← chief-copywriter / sales / headline / proof / faq
     ↓
[5. Design Gate]     ← creative-director / art-director / web-designer / responsive
     ↓
[6. Code Gate]       ← frontend-engineer / html-css / js / form / performance / a11y
     ↓
[7. Measurement Gate] ← ga4-gtm / conversion / heatmap / ab-test
     ↓
[8. Legal Gate]      ← legal-expression-checker / security-checker
     ↓
[9. Final Release Gate] ← executive / conversion / brand / final-gatekeeper
     ↓
[公開準備完了]
```

## 各フェーズの所要工程

### Phase 1: Brief
- 依頼内容整理
- 初回ヒアリング（最大12問）
- 不足情報は仮置き補完
- 出力: `outputs/01_brief/` にブリーフ

### Phase 2: Strategy
- 目的・CV・ターゲット確定
- ペルソナ作成
- 訴求軸決定
- 競合・差別化整理
- オファー設計
- 出力: `outputs/02_strategy/`

### Phase 3: Structure
- セクション構成
- ワイヤーフレーム（PC / SP）
- 視線誘導・CTA配置
- 出力: `outputs/03_structure/`

### Phase 4: Copy
- FV / サブコピー / CTA文言
- 各セクション本文
- FAQ / 反論処理
- 最終CTA
- 出力: `outputs/04_copy/`

### Phase 5: Design
- トーン・カラー・タイポ
- レイアウト方針
- ビジュアル指示
- 出力: `outputs/05_design/`

### Phase 6: Code
- index.html / style.css / script.js
- レスポンシブ実装
- フォーム実装
- パフォーマンス最適化
- 出力: `outputs/06_code/`

### Phase 7: Measurement
- GA4 イベント設計
- GTM タグ・トリガー・変数
- CV 設定
- フォーム計測
- 出力: `outputs/07_measurement/`

### Phase 8: QA & Legal
- 表示・リンク・フォーム確認
- 法務・薬機法・景表法チェック
- セキュリティチェック
- 公開前チェックリスト

### Phase 9: Review & Release
- 経営視点レビュー
- CV最大化レビュー
- ブランドレビュー
- 最終承認

## ゲート間の差し戻し

各ゲートで不合格時は以下の対応：

1. 不合格理由を `outputs/08_review/` に記録
2. 該当フェーズに差し戻し
3. 修正後、再度ゲート判定
4. 通過後に次フェーズへ

## 案件タイプ別のフロー差分

詳細は `workflows/` 配下を参照：

- 新規LP: `workflows/new-lp-workflow.md`
- 改善LP: `workflows/lp-renewal-workflow.md`
- 広告LP: `workflows/ad-lp-workflow.md`
- BtoB LP: `workflows/btob-lp-workflow.md`
- 採用LP: `workflows/recruiting-lp-workflow.md`
- SaaS LP: `workflows/saas-lp-workflow.md`
