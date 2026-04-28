# Mobile First Structure Skill

## Purpose

LP流入の70〜80%を占めるスマホ体験を最優先にした構成を設計する。

## When to Use

- 構成フェーズ
- 広告流入LP
- BtoCサービス

## Required Inputs

- セクション構成
- ターゲット流入経路

## Step-by-Step Procedure

1. SP表示でのセクション順序を再確認
2. 各セクションをSP1スクロール内で完結させる
3. 追従CTAの表示・非表示ルールを決定
4. ハンバーガーメニュー要否を判定
5. 画像 / 動画 / 図解 のSP最適化方針
6. フォームをSP1カラムレイアウトで設計
7. `outputs/03_structure/mobile-first.md` に保存

## Output Format

```markdown
## Mobile First Structure

### Breakpoints
- SP: 〜639px
- Tablet: 640〜1023px
- PC: 1024px〜

### SP Section Order
1. ロゴ（小）
2. メインキャッチ（短縮版）
3. CTA
4. ...

### Sticky CTA
- FV外でON
- フォーム到達でOFF
- 高さ60〜72px

### Form
- 1カラム
- 16px以上のフォント
- 入力欄高さ48〜56px
```

## Quality Criteria

- 主要セクションがSPで完結
- 追従CTAがフォームと衝突しない
- フォーム入力が容易
- 文字サイズ16px以上

## Common Failure Patterns

- PC設計のSP流用
- 単位体系の不統一（vw と % 混在）
- 追従CTAの常時表示でフォーム阻害
- 文字小さすぎ（ズーム発生）

## Self Check

- [ ] SPブレークポイント設計
- [ ] 追従CTAルール明確
- [ ] フォーム1カラム

## Related Agents

- `lp-responsive-specialist`
- `lp-wireframe-planner`
