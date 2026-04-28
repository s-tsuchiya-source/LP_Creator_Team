# Gate 9: Final Release Gate

## 目的

LP公開可否を最終判定する。

## 担当エージェント

- `lp-executive-reviewer`
- `lp-conversion-reviewer`
- `lp-brand-reviewer`
- `lp-final-gatekeeper`（統合）
- `lp-release-manager`（手順）

## 合格条件

- [ ] LP目的との整合
- [ ] CV導線が機能
- [ ] コピーが完成
- [ ] デザインが完成
- [ ] 実装が完成
- [ ] 計測が動作
- [ ] QA 通過
- [ ] 法務・セキュリティ通過
- [ ] GitHub公開前の不要ファイル除外
- [ ] ロールバック計画あり

## 不合格条件

- 各ゲート未通過
- レビューボードで BLOCK が1つ以上

## 差し戻し条件

- 上記不合格条件
- 公開後監視項目が未整理

## 確認チェックリスト

```markdown
## Final Release Gate チェック
- [ ] Gate 1-8 すべて通過
- [ ] 経営レビュー: PASS
- [ ] CVレビュー: PASS
- [ ] ブランドレビュー: PASS
- [ ] 法務: PASS
- [ ] セキュリティ: PASS
- [ ] QA: PASS
- [ ] リリース手順
- [ ] ロールバック条件
- [ ] 公開後監視項目
- [ ] GitHub除外ファイル確認
```

## 通過後

→ ユーザーへ公開承認通知
→ 公開実行
→ 公開後監視（最初の1日 / 1週間）
