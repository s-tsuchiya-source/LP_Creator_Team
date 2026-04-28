# Test 07: AIっぽさ排除テスト

## Purpose

LP出力が「AIっぽい」テンプレート的・抽象的・無機質な仕上がりになっていないかを検証する。

## Scenario

完成した LP コピー / デザインを検証。

## Expected Behavior

### 階層別検査

#### 階層1: 単語レベル

危険語の連続使用（3つ以上）チェック：
```
- 最適化
- 革新的
- 寄り添う
- 課題解決
- シームレス
- 業界をリード
- お客様第一
```

#### 階層2: 文レベル

NG文構造チェック：
```
- 「〜を実現します」連発
- 「お客様」「ユーザー」抽象化
- 機能羅列のみ
- 文がきれいすぎる
```

#### 階層3: セクションレベル

```
- FV: ターゲット明示なし → NG
- 課題: 業界一般論 → NG
- 解決策: 機能羅列 → NG
- 実績: 出典なき数値 → NG
- FAQ: 「ご安心ください」だけ → NG
- CTA: 「お問い合わせ」だけ → NG
```

#### 階層4: 全体レベル

競合置き換えテスト：
```
LPコピーを競合社名に置き換えて成立する文の比率を計算
- 0〜10% 不成立 → 高品質
- 10〜30% → 中品質
- 30%+ → AIっぽい（差し戻し）
```

### 5つの検証軸

```
1. 競合置き換えテスト
2. 業務シーン再現テスト
3. 担当者の本音テスト
4. 数字の出典テスト
5. 商材文脈テスト
```

すべて PASS が合格。

## Failure Pattern

### Critical Fail

❌ どの会社にも当てはまるFV
❌ 抽象語だらけのコピー
❌ 意味の薄い AI風ビジュアル
❌ 実在感のない事例
❌ CTAが「お問い合わせ」だけ
❌ 出典なき断定数値

## Pass Criteria

- human-naturalness-scorecard: 85+
- anti-ai-smell-scorecard: 90+
- 競合置き換えテスト 90%以上不成立
- 5検証軸すべて PASS

## サンプル評価例

### 入力（AIっぽい）

```
## FV
最適なソリューションで業務効率を最大化

私たちは、業界をリードする革新的なサービスを提供し、
お客様のニーズに寄り添い、シームレスな体験をお届けします。

[お問い合わせ]
```

### 期待される検査結果

```
## Anti-AI Output Validation

### 階層1: 単語レベル
危険語の連続使用検出:
- 「最適」「革新」「寄り添う」「シームレス」が連続使用 → 減点

### 階層2: 文レベル
- 「お客様のニーズに応える」: 抽象すぎ
- 主語「私たち」が誰か不明

### 階層3: セクションレベル
- FV: ターゲット明示なし
- CTA: 「お問い合わせ」だけ → 行動理由なし

### 階層4: 全体レベル
- 競合置き換えテスト: 100% 成立 → AIっぽい

### scorecard
- human-naturalness-scorecard: 25 / 100
- anti-ai-smell-scorecard: 30 / 100

### Critical Fail
- どの会社にも当てはまるFV
- CTAテンプレート的
- 抽象語連続使用

### 判定: 公開不可

### 差し戻し先
- lp-headline-specialist
- lp-chief-copywriter
- skills/09_humanization/anti-ai-copy-editing-skill.md 適用
```

### 修正後（人間らしい）

```
## FV
中小企業の人事担当者へ

採用業務を最大60%削減する [サービス名]
（自社調べ・100社平均）

「月曜の朝、応募者リストを開くのが憂鬱」
そんな日々から解放されませんか？

[3分で資料を受け取る]   [無料デモを予約]

★ 14日間無料トライアル / クレジットカード不要
★ 営業からの強引な連絡なし

※ 効果には個人差・業種差があります
```

## Related Validation

- `validation/anti-ai-output-validation.md`

## Related Scorecards

- `scoring/human-naturalness-scorecard.md`
- `scoring/anti-ai-smell-scorecard.md`

## Related Rubric

- `tests/evaluation-rubrics/human-quality-rubric.md`
