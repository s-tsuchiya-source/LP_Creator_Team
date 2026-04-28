# Responsive Design Skill

## Purpose

PC / Tablet / SP の各ブレークポイントで一貫したUI / UXを実現する。

## When to Use

- デザインフェーズ
- レスポンシブ実装前

## Required Inputs

- ワイヤー（PC / SP）
- ビジュアル方針

## Step-by-Step Procedure

1. ブレークポイントを決定（SP〜639 / Tablet 640〜1023 / PC 1024〜）
2. モバイルファースト設計
3. 各ブレークポイントの差分を最小化（単位体系を統一）
4. SP表示で価値が3秒で伝わる構成
5. 追従CTAルール（FV外でON / Form到達でOFF）
6. 単位は %, vw, clamp() を統一して使う（混在NG）
7. `outputs/05_design/responsive.md` に保存

## Output Format

```markdown
## Responsive Design

### Breakpoints
- SP: 〜639px
- Tablet: 640〜1023px
- PC: 1024px〜

### 単位体系
- レイアウト: clamp() / %
- フォント: rem
- コンテナ最大幅: 1200px

### 各ブレークポイントの差分
- SP: 1カラム
- Tablet: 主要セクションは PC 同等
- PC: マルチカラム

### 追従CTA
- 表示条件: FV外
- 非表示条件: フォーム到達 / フッター到達
```

## Quality Criteria

- 単位体系統一
- ブレークポイント境界で段差なし
- SP表示で破綻なし
- 追従CTAがフォーム阻害しない

## Common Failure Patterns

- 単位体系混在（vw と % で段差）
- PC設計のSP流用
- 追従CTAの常時表示

## Self Check

- [ ] 単位統一済み
- [ ] 境界で段差なし
- [ ] 追従CTAルール明確

## Related Agents

- `lp-responsive-specialist`

## Knowledge 参照

- `knowledge/design-patterns/mobile-first-design.md`
