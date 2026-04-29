# Hero Background Treatment Skill

## Purpose

ヒーロー背景に「意味のない抽象グラデーション」を排除し、商材文脈に合った背景処理を行う。

## When to Use

- ヒーロー設計時
- 背景が抽象的すぎるとき
- 「どのSaaSにも見える」感を排除したいとき

## Required Inputs

- ヒーローパターン
- 商材ブランドカラー
- 写真素材（あれば）

## Step-by-Step Procedure

### Step 1: NG 背景パターン

```
❌ 紺〜青の抽象グラデーション（SaaS 一般感）
❌ 抽象的な線・図形のみの背景
❌ 関係ない宇宙・銀河・自然
❌ 抽象未来都市
❌ 光の粒子だけの装飾
```

### Step 2: OK 背景パターン

#### A. 写真背景 + オーバーレイ
```css
.hero {
  background:
    linear-gradient(135deg, rgba(13, 71, 161, 0.78), rgba(13, 71, 161, 0.45)),
    url('hero-photo.webp') center/cover;
}
```

#### B. ブランドカラー単色 + 微妙なテクスチャ
```css
.hero {
  background-color: var(--brand-primary);
  background-image: url('subtle-pattern.svg');
  background-size: 400px;
}
```

#### C. 文脈図解を背景に
```css
.hero {
  background: var(--brand-bg);
}
.hero-visual {
  /* 業務フロー図・組織図など意味ある図解 */
}
```

#### D. プロダクト画面 + コンテンツ枠
```css
.hero {
  background: var(--brand-bg);
}
.hero-product {
  /* ダッシュボード SS（業務文脈に必要な場合のみ） */
}
```

#### E. 大胆なタイポ + 単色
```css
.hero {
  background: var(--brand-primary);
}
.hero-title {
  font-size: clamp(48px, 8vw, 96px);
  /* タイポを主役に */
}
```

### Step 3: グラデーション使用ルール

グラデーションを使う場合：

```
✅ OK:
- 写真上のオーバーレイ（視認性確保）
- 商材ブランド色の微妙な変化（10〜20% 以内）
- セクション境界の控えめな変化

❌ NG:
- 紺〜紫の SaaS 一般グラデーション
- 派手な色変化（赤→青等）
- 装飾だけのグラデーション
```

### Step 4: 背景処理の採用理由を記録

```markdown
## 採用背景: 写真 + オーバーレイ

### 採用理由
- 商材は採用業務支援
- 採用現場の写真で文脈即時伝達
- オーバーレイで文字視認性確保
- ブランドカラー（紺）でブランド統一

### 不採用にしたもの
- 抽象グラデーション: SaaS 一般感、差別化弱
- プロダクト画面: 画面UI で訴求するパターンではない
```

### Step 5: SP 表示での背景調整

PC 写真背景は SP で文字視認性が落ちることが多い：

```css
@media (max-width: 640px) {
  .hero {
    background:
      linear-gradient(135deg, rgba(13, 71, 161, 0.85), rgba(13, 71, 161, 0.65)),
      url('hero-photo.webp') center/cover;
    /* SP は濃いめのオーバーレイ */
  }
}
```

## Output Format

`outputs/05_design/hero-art-direction.md` に背景方針を記録。

## Quality Criteria

- 抽象グラデーション単独使用なし
- 商材文脈に合う背景
- SP表示で文字視認性確保
- 採用理由を記録

## Common Failure Patterns

- 紺〜紫グラデーションをデフォルト採用
- SP で文字が読めない背景
- 装飾だけの背景
- 採用理由なし

## Self Check

- [ ] 背景に意味あり
- [ ] PC / SP で視認性確保
- [ ] 抽象グラデ単独でない
- [ ] 採用理由記録

## Related

- agent: `lp-hero-art-director`
- contract: `contracts/hero-art-direction-output-contract.md`
- human-quality: `human-quality/non-generic-design-rules.md`
