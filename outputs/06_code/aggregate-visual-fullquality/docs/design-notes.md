# Design Notes — aggregate-visual-fullquality

## 共通設計

### タイポ階層
- 見出し: Noto Sans JP 800 / serif accents (DM Serif Display, Noto Serif JP)
- 本文: Noto Sans JP 400 / 1.85-2.0 line-height
- 数値: DM Sans / DM Serif Display (LP別に使い分け)
- 機能ラベル: JetBrains Mono (LP1 帳票 / LP4 ダッシュボード)

### モーション原則
- prefers-reduced-motion: reduce 完全尊重
- IntersectionObserver による viewport 入域でのみ再生
- 装飾アニメーションは禁止、意味のある演出のみ

## 4本のLP差別化マトリクス

|  | LP1 採用費 | LP2 母集団 | LP3 運用代行 | LP4 データ可視化 |
|---|---|---|---|---|
| **コンセプト** | 経営層が読める「採用費の台帳」 | 見つけてもらう→選ばれる "母集団の設計" | 業務の混雑を整列に変える | 数字を「次の改善」につなげる |
| **トーン** | シリアス・抑制 | 未来感・成長感 | 温かみ・安心感 | 知的・洗練・エディトリアル |
| **配色** | 濃紺 #0E2A5A × ライム #C8E66A | インディゴ #4F46E5 × マゼンタ #EC4899 × アンバー #F59E0B | ティール #0F766E × オレンジ #F97316 | navy #0F172A × シアン #06B6D4 |
| **ヒーロービジュアル** | Dashboard + Ledger overlay card | Network ring map + 浮遊 floater カード×3 | Kanban Task Board (3列) | Editorial Dashboard モック |
| **見出しタイポ** | 800 + DM Serif Display italic | 900 ボールド + グラデtext | 800 + 下線ハイライト | Noto Serif JP + hl underline |
| **強調装置** | 大数値（serif）・帳票線・ライム下線 | グラデtext / floating cards | チェックマーク・ステッカー | エディトリアル罫線・mono labels |
| **モーション** | hero parallax / bar fill | floater bobbing / countup | timeline block stagger | sparkline draw-in |
| **ビジュアル合成** | KPIカード + barグラフ + ラインチャート | リング + ドット + 角度別接続線 | Kanban カード + 完了マーク | 4種チャート同居（KPI/エリア/棒/ヒートマップ） |
| **セクション順序** | FV→共感→Before/After→台帳→フロー→根拠→FAQ→CTA | FV→課題→ファネル→3打ち手→チャネル→FAQ→CTA | FV→1日比較→引取/保持→週次→FAQ→CTA | FV→KPIウォール→4課題→PDCA→指標カタログ→FAQ→CTA |
| **CTA口調** | "見直す""読める""正しく下げる" | "設計""壁を抜く""作る" | "整える""すっと外す""任せる" | "つなげる""読む""動かす" |
| **HEROの差** | 帳票/dashboard | Network/floater | Kanban board | Editorial magazine |

## 各LP詳細

### LP1 — 応募単価・広告費改善
**ターゲット**: 経営層・採用責任者・媒体担当
**心理状態**: 採用費の説明責任を負っている、なんとなくCPA高い、説明資料が足りない
**訴求軸**: 構造を読む → 改善余地を出す → 経営説明資料に変える
**ビジュアル特徴**:
- セリフ大数値（DM Serif Display）で「金額の重み」を視覚化
- 帳票風横罫線で台帳の世界観
- ライムアクセント（#C8E66A）で「節約・改善」の方向性を表現
**訴求装置**:
- Hero: ¥3.18M ¥4,820 のセリフ数値カード
- Compare: ¥7,050 → ¥4,820 の Before/After 大数値
- Ledger Table: L-001 〜 L-005 形式で台帳化

### LP2 — 応募数不足・母集団形成
**ターゲット**: 採用担当・人事担当
**心理状態**: 求人を出しても応募が来ない、母集団がそもそも薄い
**訴求軸**: 露出 → 閲覧 → 詳細 → 応募の歩留まりを可視化、8チャネルで網羅
**ビジュアル特徴**:
- 同心円リング + 周辺ドット = "到達範囲"の感覚
- Floating cards 3枚で動きと訴求点の追加
- マゼンタ→アンバーのグラデーションで成長感
**訴求装置**:
- Hero: Network Ring + 12,400 imp / 38% / 8 channels の浮遊カード
- Funnel: 4階層ファネル + 歩留まり率バー
- Channel: 中心放射型ネットワーク（8チャネル）

### LP3 — 媒体運用工数・まるごと代行
**ターゲット**: 採用担当（疲弊している）、人事責任者
**心理状態**: 運用業務に追われて本来業務ができない、属人化への懸念
**訴求軸**: 業務分担明確化 → 引取範囲を明示 → 週次サイクル可視化
**ビジュアル特徴**:
- Kanban Task Board でビフォー/アフターを視覚化
- 横タイムラインで1日の使い方を比較
- ティール → オレンジのグラデーションで「冷静→温かみ」
**訴求装置**:
- Hero: 3列カンバン（自社 → 引取 → 完了）
- Day Compare: 8時間タイムライン Before/After
- Takeover: 自社が持つ業務 vs aggregate が引き取る業務の対称構造

### LP4 — データ可視化・改善サイクル
**ターゲット**: 採用担当・データ分析担当・経営層
**心理状態**: レポートはあるが改善につながらない、属人的、次の打ち手が見えない
**訴求軸**: 指標カタログ → PDCA → 次のアクション
**ビジュアル特徴**:
- エディトリアル新聞風 masthead、罫線、コラム構成
- 6種KPIカード + sparkline で「ダッシュボード感」
- Noto Serif JP の見出しで知的・洗練さ
**訴求装置**:
- Hero: KPI 4枚 + 複合チャート + ヒートマップの全部入りダッシュボード
- Metrics Wall: 6カード、各 sparkline で trend 表現
- PDCA: 4色アーク循環 + 中央 DATA の視覚化

## 共通CSS変数体系

```css
:root {
  --c-ink-{100..900}      /* グレー段階 */
  --c-paper, --c-white    /* 背景 */
  --content-w: 1180px     /* メイン幅 */
  --gutter: clamp(20px, 4vw, 36px)
  --radius{-sm,-lg,-xl}
  --shadow-{soft,mid,deep}
  --font-{jp,en,num,mono,serif}
  /* LP個別 */
  --brand-primary
  --brand-secondary
  --brand-accent
  --brand-tint
  --brand-shadow
}
```

各 LP CSS が `:root` を上書きすることで、`.btn--primary` などの共通コンポーネントが自動的にLPカラーに適応する。

## アクセシビリティ対策

- `<a class="skip-link">` 本文へスキップ
- 全 SVG に `role="img"` と `aria-label`
- `:focus-visible` outline カスタム
- 色だけに依存しない情報伝達（アイコン + テキスト併用）
- `prefers-reduced-motion: reduce` で全アニメーション無効化
- セマンティック HTML（main / section / article / details / summary）
- フォントサイズはすべて `clamp()` でスケーラブル
- `font-feature-settings: "palt" 1` で日本語の詰めを最適化

## レスポンシブ戦略

- ≤ 760px: SP / single column / sticky CTA 表示
- 760–879px: padding/gap 緩和 / sticky CTA 非表示
- 880–979px: タブレット相当 / カラム分け開始
- ≥ 980px: PC / 2カラム hero / 横タイムライン展開

## 画像戦略

- すべての主要ビジュアルは SVG（解像度フリー、編集容易）
- 写真風の質感は SVG 内で `<feTurbulence>` ノイズ + ラジアルグラデーションで再現
- KPIカード・ラベル・矢印などは SVG 内テキストで保守可能に
- 必要に応じてHTMLからオーバーレイ（floater）を上乗せ

## 明確な差別化チェックリスト

✅ レイアウト構造: 4種すべて違う（2col / Network / Kanban / Editorial）
✅ ヒーロービジュアル: 4種完全に違う合成
✅ カラー: 4種異なる主役カラー
✅ アクセント装飾: 帳票線 / リング / チェック / 罫線 でそれぞれ異なる
✅ アニメーション: 4種異なる挙動（parallax / bobbing / stagger / draw-in）
✅ タイポ強調: serif / グラデ / 下線 / ハイライトでそれぞれ違う方法
✅ セクション順序: 4本完全に異なるストーリー設計
✅ CTAコピー: 4本ともターゲット心理に合わせて違う動詞
