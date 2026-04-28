# Experience Value Output Contract

## Purpose

LP内でユーザーに提供する**体験価値**を明示するための出力 contract。
「ユーザーは何を得られるのか」を 10要素で網羅する。

## Required Sections

### 1. ユーザーが得る主要メリット
- 商材の中心的なベネフィット（1〜2個）
- 数値・出典付き

### 2. 短期メリット（導入直後）
- 申込の手軽さ
- 即時の利便性
- 初期効果

### 3. 中期メリット（1〜3ヶ月）
- 業務効率
- 数値改善
- チーム評価

### 4. 長期メリット（半年〜1年）
- 組織レベルの変化
- 経営指標への影響
- 業界ポジション

### 5. 心理的メリット
- 不安解放
- 失敗回避
- 安心感
- 達成感

### 6. 業務上のメリット
- 抜け漏れ防止
- データ可視化
- 属人化解消

### 7. 社内評価・説明上のメリット
- 上司に推せる
- 経営層への報告が楽
- 部門間調整減

### 8. 導入後の未来像
- 1日の流れ
- 1ヶ月後 / 3ヶ月後 / 6ヶ月後
- 周囲の反応

### 9. 不安から期待への変化
- 価格 / 導入 / 効果 / 運用 / 社内 / 失敗 不安への対応
- 各不安に対応する解消策

### 10. CVする理由
- ハードル低い行動（資料DL等）
- CV後の流れ
- 限定性（実態に即す）

## Required Fields

- 短期 / 中期 / 長期 の各メリット最低1個ずつ
- 心理的メリットを明示
- 社内評価メリット（BtoBのみ）
- 「個人差・業種差」明記
- 数値根拠の出典

## Optional Fields

- 失敗回避メリット
- キャリア向上メリット
- 詳細時系列（半年・1年）

## Format Rules

- Markdown形式
- 各セクションを明確に区切る
- 数値には全て出典
- 一人称（「あなたは〜」）で書く
- 五感に訴える表現を使う

## Acceptance Criteria

- 10セクション全て埋まる
- 短期 / 中期 / 長期 のバランスが取れている
- 心理面・業務面の両方を網羅
- BtoBは社内評価メリット明記
- 数値は出典付き
- 誇大表現なし

## Rejection Criteria

- セクション欠落
- 抽象的（「効率化できる」だけ）
- 数値出典なし
- 心理面メリット欠如
- 「絶対」「100%」の保証
- BtoBで社内評価メリットなし

## Related

- skill: `skills/08_experience/benefit-translation-skill.md`
- skill: `skills/08_experience/future-state-copy-skill.md`
- experience-design: `experience-design/benefit-realization-design.md`
- experience-design: `experience-design/future-state-design.md`
- scorecard: `scoring/benefit-clarity-scorecard.md`
- agent: `lp-chief-copywriter`, `lp-sales-copywriter`
