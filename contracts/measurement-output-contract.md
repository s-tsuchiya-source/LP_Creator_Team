# Measurement Output Contract

## Purpose

LP計測設計の出力形式を固定化する。

## Required Sections

- 計測ツール（GA4 / GTM / 媒体）
- GA4 イベント一覧
- GTM タグ・トリガー・変数
- データレイヤー仕様
- CV 設定
- 媒体CV送信
- 個人情報の取扱
- 確認手順

## Required Fields

- GA4 プロパティID（プレースホルダー可）
- GTM コンテナID（プレースホルダー可）
- 主要イベント（page_view / cta_click / form_submit 最低）
- Key Event 指定
- データレイヤー サンプルコード

## Optional Fields

- Server Side Tagging
- Enhanced Conversion 設定
- BigQuery エクスポート

## Format Rules

- `templates/measurement-design-template.md` に準拠
- イベント名は snake_case
- 個人情報を計測パラメータに含めない

## Acceptance Criteria

- 主要ファネル（FV → 中盤 → CTA → Form到達 → 開始 → 送信）が追える
- 個人情報の生送信なし
- プレビュー検証手順あり
- データレイヤー仕様が実装可能粒度

## Rejection Criteria

- ファネル中間段階の計測欠落
- 個人情報の生送信
- イベント名の不統一
- 検証手順なし

## Related

- skill: `skills/06_measurement/`
- scorecard: `scoring/measurement-scorecard.md`
- gate: `quality-gates/07-measurement-gate.md`
- template: `templates/measurement-design-template.md`
- agent: `lp-ga4-gtm-specialist`
