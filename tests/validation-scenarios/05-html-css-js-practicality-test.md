# Test 05: HTML/CSS/JS 実用性テスト

## Purpose

LP実装が「見た目だけ」ではなく「実用レベル」であるかを検証する。

## Scenario

実装フェーズで生成された `outputs/06_code/[案件名]/` を検証：

```
- index.html
- style.css
- script.js
- images/
```

## Expected Behavior

### 必須チェック

#### 1. ファイル存在
```
- [ ] index.html
- [ ] style.css
- [ ] script.js
```

#### 2. HTML構造
```
- [ ] DOCTYPE html
- [ ] lang="ja"
- [ ] meta viewport
- [ ] セマンティック要素（header / main / section / footer）
- [ ] h1 単一
- [ ] 見出し階層正常（h1 → h2 → h3）
```

#### 3. アクセシビリティ
```
- [ ] 全画像 alt
- [ ] フォーム label
- [ ] フォーカスリング :focus-visible
- [ ] キーボード操作OK
- [ ] aria-label 適切
```

#### 4. レスポンシブ
```
- [ ] SP（〜639px）動作
- [ ] Tablet（640〜1023）動作
- [ ] PC（1024〜）動作
- [ ] 320pxで横スクロール発生なし
```

#### 5. 計測
```
- [ ] CTA に data-event / data-position
- [ ] フォーム送信に dataLayer push
- [ ] 電話クリック計測
```

#### 6. パフォーマンス
```
- [ ] LCP < 2.5s（実測）
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] 画像 WebP / AVIF
- [ ] フォント preload + font-display: swap
```

#### 7. Lighthouse スコア
```
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

## Failure Pattern

### Critical Fail（点数に関係なく差し戻し）

❌ SP（モバイル）で表示崩れ
❌ フォームが送信できない
❌ CTAが機能しない（リンク切れ / クリック不能）
❌ 計測 data 属性が完全になし
❌ HTML構造破綻
❌ キーボード操作不能

### 通常の失敗

❌ alt 一部欠落
❌ フォーム label 一部欠落
❌ LCP > 2.5s
❌ a11y Lighthouse 80未満

## Pass Criteria

- code-practicality-scorecard 85+
- Critical Fail なし
- 主要ブラウザ動作OK
- LCP / CLS / INP 達成
- Lighthouse 全項目 90+

## サンプル評価例

### 入力（NG実装）

```html
<!-- alt なし -->
<img src="hero.jpg">

<!-- フォーム label なし -->
<input type="text" name="name">

<!-- CTA に計測属性なし -->
<a href="#form" class="cta">資料請求</a>

<!-- h1 が複数 -->
<h1>...</h1>
<h1>...</h1>
```

### 期待される検査結果

```
## Code Practicality Review

### Critical Fail 検出
- フォーム label なし → 差し戻し
- 計測 data 属性なし → 差し戻し
- h1 複数 → 差し戻し

### 通常 Fail
- alt 欠落 1件

### scorecard
- code-practicality-scorecard: 50 / 100
- 判定: Critical Fail（差し戻し）

### 差し戻し先
- lp-frontend-engineer
- lp-html-css-specialist
- lp-form-implementation-specialist
```

## Related Validation

- `validation/code-practicality-validation.md`

## Related Scorecard

- `scoring/code-practicality-scorecard.md`

## Related Rubric

- `tests/evaluation-rubrics/code-quality-rubric.md`
