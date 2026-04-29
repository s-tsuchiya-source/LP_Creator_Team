# Motion Storyboard - aggregate-visual-fullquality 4LP

## サマリー

| LP | reveal総数 | data-motion | 純reveal比率 | 判定 |
|---|---|---|---|---|
| LP1 (CPA削減) | 35 | 22 | 37.1% | ✓ 40%以下 |
| LP2 (応募数増) | 32 | 20 | 37.5% | ✓ 40%以下 |
| LP3 (運用代行) | 25 | 15 | 40.0% | ✓ 40%以下 |
| LP4 (分析改善) | 32 | 21 | 34.4% | ✓ 40%以下 |

## モーション種別

### reveal（translateY fade-in）
- **用途**: 情報の段階的展開
- **配置**: 各セクション head / リード文 / 副要素
- **時間**: 800ms / cubic-bezier(.2,.7,.2,1)

### slide-x（横スライド）
- **用途**: プロセス・時系列・横並び
- **配置**: 課題カード / フローステップ / 横展開特徴
- **時間**: 600ms / cubic-bezier(.2,.7,.2,1)
- **CV貢献**: 順序感・段階的共感

### scale（スケール拡大）
- **用途**: 数値・バッジ強調
- **配置**: 実績カード / Before-After / メトリック
- **時間**: 500ms / cubic-bezier(.2,1.2,.3,1)
- **CV貢献**: 数値の重み・信頼形成

### fade（フェードのみ）
- **用途**: CV近接・控えめ
- **配置**: FAQ / closing
- **時間**: 800ms / ease-out
- **CV貢献**: CV直前の集中・控えめ表示

## LP別モーション一覧

### LP1 (CPA削減)

| セクション | 種別 | 目的 | CV貢献 |
|---|---|---|---|
| FV head | reveal | 価値訴求 | 興味喚起 |
| FV visual | reveal delay=200 | 商材ビジュアル | 利用イメージ |
| photo-billboard copy | reveal | 副情報 | 補強 |
| pain head | reveal | 共感導入 | 緊張感 |
| pain card x5 | slide-x | 課題の段階的提示 | 共感深化 |
| compare head | reveal | 比較導入 | 期待形成 |
| compare before | scale | Before の重み | 緊張感強調 |
| compare after | scale | After の希望 | 期待感強調 |
| ledger | reveal | 詳細情報 | 補強 |
| flow head | reveal | プロセス導入 | 安心感 |
| flow step x4 | slide-x | プロセス順序 | 段階的安心 |
| proof head | reveal | 実績導入 | 信頼形成 |
| proof card x4 | scale | 数値の重み | 信頼強化 |
| FAQ head | reveal | FAQ導入 | 不安解消準備 |
| FAQ details x5 | fade | 控えめ表示 | 集中 |
| closing | fade | CV直前集中 | 決断 |

### LP2 (応募数増加)

| セクション | 種別 | 目的 | CV貢献 |
|---|---|---|---|
| FV | reveal + delay | 価値訴求 | 興味 |
| funnel head | reveal | 共感導入 | 課題提示 |
| funnel card x N | slide-x | ファネル段階 | 共感深化 |
| pain card | slide-x | 課題の段階提示 | 共感深化 |
| feature x3 | slide-x | 特徴の横展開 | 期待形成 |
| proof card | scale | 数値強調 | 信頼形成 |
| flow step | slide-x | プロセス順序 | 安心感 |
| FAQ | fade | 控えめ表示 | 集中 |
| closing | fade | CV直前集中 | 決断 |

### LP3 (運用代行)

| セクション | 種別 | 目的 | CV貢献 |
|---|---|---|---|
| FV | reveal + delay | 価値訴求 | 興味 |
| pain card | slide-x | 課題段階 | 共感 |
| board col | scale | 比較強調 | 納得 |
| takeover col | scale | 比較強調 | 納得 |
| routine item | slide-x | プロセス | 安心 |
| day row | scale | Before/After | 期待 |
| flow step | slide-x | プロセス | 安心 |
| FAQ | fade | 控えめ | 集中 |
| closing | fade | CV直前 | 決断 |

### LP4 (分析改善)

| セクション | 種別 | 目的 | CV貢献 |
|---|---|---|---|
| FV | reveal + delay | 価値訴求 | 興味 |
| problem article | slide-x | 課題段階 | 共感 |
| wall card | slide-x | 壁の段階提示 | 共感 |
| catalog table | scale | 数値強調 | 信頼 |
| cycle step | slide-x | サイクル順序 | 安心 |
| FAQ | fade | 控えめ | 集中 |
| closing | fade | CV直前 | 決断 |

## prefers-reduced-motion 対応

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal],
  [data-motion="slide-x"],
  [data-motion="scale"],
  [data-motion="fade"] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

`assets/css/common.css` に実装済み。

## 採用理由ログ

### slide-x 採用理由
- 課題リスト・プロセス・特徴は「順序感」が重要
- 横方向に流れる動きで「段階的進行」を伝える
- 同じ translateY だと飽きる → slide-x で変化を作る

### scale 採用理由
- 数値実績・比較は「重み」「強さ」が重要
- スケール拡大で視覚的に「重要性」を伝える
- 数字の説得力を高める

### fade 採用理由
- FAQ / closing は CV近接 → 控えめが必須
- translateY だと目が泳ぐ → 静かなフェードで集中
- CV直前の過剰モーション禁止ルール準拠

## CV直前モーション確認

```
LP1 closing: fade のみ ✓
LP2 closing: fade のみ ✓
LP3 closing: fade のみ ✓
LP4 closing: fade のみ ✓
```

CV直前の過剰モーションなし。

## Related

- `contracts/motion-storyboard-contract.md`
- `skills/10_visual_expression/motion-meaning-design-skill.md`
- `scoring/motion-variety-scorecard.md`
