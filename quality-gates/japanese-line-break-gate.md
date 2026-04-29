# Japanese Line Break Gate

## 目的

日本語コピーの改行・リズム品質を最終確認する品質ゲート。

## 担当エージェント

- `lp-japanese-copy-rhythm-editor`
- `lp-chief-copywriter`
- `lp-html-css-specialist`（br クラス実装）
- `lp-final-gatekeeper`（最終承認）

## 合格条件

- [ ] `scoring/japanese-line-break-scorecard.md`: **85点以上**

## 不合格条件

- 助詞分断あり
- 複合語分断あり
- 修飾語分断あり
- ランダム改行多数
- br タグ乱用

## Critical Fail Conditions

```
- 助詞の途中で改行（「を」「が」「に」の前後）
- 複合語の分断（「採用業務」を「採用」と「業務」に分ける等）
- 連続 br による空行作成（<br><br><br>）
- 段落区切りに br 使用（<p>を使うべき）
- PC / SP 検証なし
```

## 必須出力ファイル

```
outputs/05_design/japanese-line-break-review.md
outputs/08_review/japanese-line-break-review.md
```

## 確認チェックリスト

```markdown
## Japanese Line Break Gate チェック

### 改行ルール
- [ ] 助詞分断ゼロ
- [ ] 複合語分断ゼロ
- [ ] 修飾語分断ゼロ
- [ ] ランダム改行ゼロ

### br タグ使用
- [ ] 連続 br ゼロ（<br><br>）
- [ ] 装飾的 br ゼロ
- [ ] 段落区切りは <p>
- [ ] PC / SP 分離は class 制御（br.pc / br.sp）

### PC / SP 改行
- [ ] PC 改行設計記録
- [ ] SP 改行設計記録
- [ ] 320 / 375 / 640 / 1024px で確認

### リズム
- [ ] 文字数の使い分け（短・中・長）
- [ ] 句読点の適切配置
- [ ] 体言止めと動詞終わりの混在

### 採用理由ログ
- [ ] japanese-line-break-review.md 作成
- [ ] 各改行修正に理由
```

## Related Contract / Scorecard

- **Related Contracts**: `contracts/japanese-line-break-output-contract.md`
- **Related Scorecards**: `scoring/japanese-line-break-scorecard.md`（85+ 必須）
- **Required Fix Actions**:
  - `skills/12_japanese_copy_rhythm/` 該当 skill で再編集
  - `lp-japanese-copy-rhythm-editor` に差し戻し

## 通過後の次フェーズ

→ Gate 4: Copy Gate / Gate 5: Design Gate
