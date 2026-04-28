# Final Quality Check

LP_Creator_Team が生成した最終納品物の総合品質チェック。

## 統合チェック

このチェックリストは、他の4つのチェックリストの結果を集約します。

### 1. Director Behavior Check
- 結果: ___ / ___（達成率）
- 詳細: `director-behavior-check.md`

### 2. Output Contract Check
- 結果: ___ / ___（達成率）
- 詳細: `output-contract-check.md`

### 3. Scorecard Check
- 結果（必須スコアカード）:
  - lp-master: ___ / 100
  - emotional-cvr: ___ / 100
  - benefit-clarity: ___ / 100
  - expectation: ___ / 100
  - self-relevance: ___ / 100
  - legal-risk: ___ / 100
  - final-output: ___ / 100
- 詳細: `scorecard-check.md`

### 4. Emotional CVR Check
- 結果: ___ / 8項目
- 詳細: `emotional-cvr-check.md`

## 最終納品判定

### 納品可能（90+ 推奨基準）
- [ ] lp-master 90+
- [ ] emotional-cvr 85+
- [ ] benefit-clarity 85+
- [ ] expectation 85+
- [ ] self-relevance 85+
- [ ] legal-risk 95+ / Critical Fail なし
- [ ] final-output 90+
- [ ] director behavior 95%+
- [ ] output contract 全充足
- [ ] emotional cvr 7/8 以上

→ 全て満たせば **納品可能**

### 軽微修正後納品
- 上記の1〜2項目が下回る
- ただし Critical Fail なし

→ 該当 agent / skill にフィードバック後、再評価

### 主要改善必須
- 上記の3項目以上が下回る
- または lp-master 80未満

→ 戦略フェーズから見直し

### 公開不可
- legal-risk Critical Fail
- 法令違反表現
- 個人情報の生送信
- 主要ブラウザで崩れ

→ **公開禁止**。公開フェーズに進めない

## 改善ループ

### 不足項目の特定
1. 4 チェックリストの結果を集約
2. 不足項目をリストアップ
3. 該当 skill / contract / agent / scorecard / component を特定

### 改善実施
1. 該当ファイルを更新
2. 該当 agent に再依頼
3. 再採点

### 達成基準
- lp-master 90+ かつ emotional-cvr 4 scorecards 85+ かつ legal-risk 95+

## 記録テンプレート

```markdown
# テスト実行記録

## 案件
- 案件名: [架空サービス名]
- 業種: [業種]
- テストファイル: tests/lp-generation-benchmarks/[ファイル名]

## 実行日時
- YYYY-MM-DD

## 結果
- Director Behavior: ___%
- Output Contract: ___% 充足
- Scorecards:
  - lp-master: ___
  - emotional-cvr: ___
  - benefit-clarity: ___
  - expectation: ___
  - self-relevance: ___
  - legal-risk: ___
  - final-output: ___
- Emotional CVR: ___ / 8

## 判定
- [ ] 納品可能
- [ ] 軽微修正後納品
- [ ] 主要改善必須
- [ ] 公開不可

## 改善項目
- ...

## フィードバック先
- skill: ...
- contract: ...
- agent: ...
```
