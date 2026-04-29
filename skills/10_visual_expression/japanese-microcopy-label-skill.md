# Japanese Microcopy Label Skill

## Purpose

LP内の英語ラベル・装飾英語を排除し、意味のある日本語ラベル設計を行う。

「FEATURE」「ABOUT」「FLOW」などの装飾英語は禁止。意味のある英語のみ許可。

## When to Use

- デザインフェーズ
- セクション見出し設計時
- ナビゲーション・ボタン文言設計時

## Required Inputs

- 全セクション一覧
- ペルソナの語彙
- 商材の文脈

## Step-by-Step Procedure

### Step 1: 既存英語ラベルを抽出

LP全体から以下を抽出：

```
- セクション英語見出し（FEATURE / ABOUT / FLOW 等）
- ナビゲーション英語（HOME / SERVICE / CONTACT）
- 装飾英語（BEAUTY / SMART / SOLUTION）
- 数字英語（POINT 01 / STEP 01）
- バッジ英語（NEW / RECOMMEND / LIMITED）
```

### Step 2: 削除 / 日本語化 / 残す を判定

判定ルール：

```
✅ 残す（意味がある）
- ブランド名（Apple / Notion 等）
- 業界用語（API / CMS / SaaS 等）
- 製品固有名（特定機能の正式名）

❌ 削除 or 日本語化（装飾）
- セクション英語見出し → 日本語化
- 数字英語「POINT 01」→ 日本語「01」のみ or 削除
- 装飾英語「BEAUTY」「SMART」「SOLUTION」→ 削除
- ナビゲーション英語 → 日本語化
```

### Step 3: 日本語化のパターン

#### NG パターン

```
[FEATURE] → 装飾だけ
[ABOUT] → 抽象すぎ
[FLOW] → 意味薄い
[POINT 01 BEAUTY SOLUTION] → 装飾の塊
```

#### OK パターン

```
[3つの特徴] → 内容明示
[私たちについて] → 自然
[導入の流れ] → 実用的
[01 採用工数を60%削減] → 数字 + 意味
```

### Step 4: ラベル長の最適化

- セクション見出し: 8〜15文字
- ナビゲーション: 4〜8文字
- ボタン: 10〜15文字

### Step 5: 採用理由を記録

`outputs/05_design/typography-rationale.md` に各ラベルの採用理由を記録：

```markdown
## ラベル: [3つの特徴]

### 採用理由
- 「FEATURE」を日本語化
- 「特徴」だけでは抽象 → 「3つの」で具体化
- セクション内容を見出しで予告

### 文字数
- 7文字（適正範囲内）

### NG 案との比較
- ❌「FEATURE」: 装飾英語
- ❌「特徴」: 抽象すぎ
- ❌「サービスの特徴」: 冗長
- ✅「3つの特徴」: 適正
```

## Output Format

`contracts/typography-rationale-contract.md` に準拠。

## Quality Criteria

- 装飾英語ゼロ
- セクション見出しに日本語ラベル
- 各ラベルの採用理由を記録
- ラベル長が適正範囲内
- ペルソナの語彙に合う

## Common Failure Patterns

- 「FEATURE」「ABOUT」「FLOW」乱用
- 装飾英語「BEAUTY」「SMART」配置
- ナビが全部英語
- 意味のない「POINT 01」「No.01」

## Self Check

- [ ] 装飾英語ゼロ
- [ ] 日本語ラベルが自然
- [ ] 各ラベルに採用理由
- [ ] ペルソナ語彙に合う

## Related

- agent: `lp-typography-director`
- contract: `contracts/typography-rationale-contract.md`
- scorecard: `scoring/japanese-label-naturalness-scorecard.md`
- human-quality: `human-quality/anti-ai-writing-principles.md`
