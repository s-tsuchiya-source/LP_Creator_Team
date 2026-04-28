# CTA Placement Patterns

## Role in LP

CTAをLP内に複数配置し、訪問者の心理段階ごとにCV機会を提供する。

## Best Use Cases

- 全LP共通

## Required Elements

- FV CTA
- 中盤CTA（最低1箇所）
- 最終CTA
- 追従CTA（SP）

## High Conversion Pattern

### 配置箇所（推奨5箇所）

1. **FV直後**: ベネフィット理解直後
2. **強み末尾**: 興味喚起後
3. **実績末尾**: 信頼形成後
4. **価格末尾**: 価値理解後
5. **最終CTA**: 決断段階

### 追従CTA（SP）

- FV外でON
- フォーム到達でOFF
- 高さ60〜72px

## Bad Pattern

- CTA1箇所のみ（最終のみ）
- 同一CTAの連続配置（5セクション連続でCTA）
- 追従CTAがフォームと重なる

## Copy Examples

各位置で文言を微調整：

- FV: 「無料で資料請求」（行動誘発）
- 中盤: 「詳細を確認する」（情報追加）
- 価格直下: 「無料で試す」（決断促進）
- 最終: 「今すぐ申し込む」（最終決断）

## Design Notes

- CTAサイズ統一（混乱防止）
- メインCTA / 副CTA の階層を明確に
- 色は統一（メインカラー）

## Measurement Notes

- 各位置に `data-position` 属性
  - `fv` / `mid-1` / `mid-2` / `pricing` / `final`
- 位置別CTRを GA4 で集計

## Checklist

- [ ] CTA最低3箇所
- [ ] 主CTA / 副CTA の階層
- [ ] 追従CTA設計（SP）
- [ ] 位置別計測属性
