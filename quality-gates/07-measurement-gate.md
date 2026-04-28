# Gate 7: Measurement Gate

## 目的

計測設計が実装可能で、CVファネルを完全に追えるかを判定する。

## 担当エージェント

- `lp-ga4-gtm-specialist`
- `lp-conversion-tracking-specialist`

## 合格条件

- [ ] CTAクリック計測
- [ ] フォーム到達計測
- [ ] フォーム開始計測
- [ ] フォーム送信計測
- [ ] サンクスページ計測
- [ ] GA4 / GTM 設計が完成
- [ ] 広告CV設計（媒体出稿あり時）
- [ ] 個人情報を計測タグに送らない

## 不合格条件

- ファネル途中の計測欠落
- 個人情報の生送信
- イベント名の不統一

## 差し戻し条件

- 上記不合格条件
- データレイヤー仕様が不明

## 確認チェックリスト

```markdown
## Measurement Gate チェック
- [ ] GA4 イベント定義
- [ ] GTM タグ・トリガー・変数
- [ ] データレイヤー仕様
- [ ] CV設定
- [ ] 媒体CV送信
- [ ] Enhanced Conversion
- [ ] プライバシー準拠
```

## 通過後の次フェーズ

→ Gate 8: Legal Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/measurement-output-contract.md`
- **Related Scorecard**: `scoring/measurement-scorecard.md`
- **Minimum Passing Score**: measurement-scorecard 85+
- **Critical Fail Conditions**: 個人情報の生送信 / ファネル中間欠落 / プレビュー検証なし
- **Required Fix Actions**: `skills/06_measurement/` で再設計
