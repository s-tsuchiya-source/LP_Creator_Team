# Persona Output Contract

## Purpose

ペルソナ設計書の出力形式を固定化する。

## Required Sections

- メインペルソナ
- サブペルソナ（必要時）
- 共感マップ
- 意思決定者構造（BtoB案件）
- 訴求軸との対応

## Required Fields

- 名前（仮）
- 業種・職種・役職
- 年齢層
- 業務内容
- 業務上のジョブ
- 感情上のジョブ
- 購買決定要因
- 主要な悩み・欲求・不安・反論

## Optional Fields

- 年収・既婚状況
- メディア接触
- 写真イメージ

## Format Rules

- 各ペルソナは別セクションで記述
- 共感マップは表形式（悩み / 欲求 / 不安 / 反論）
- BtoBは意思決定者構造を明示

## Acceptance Criteria

- 「実在する人物」として読める粒度
- 業務上 + 感情上 のジョブを両方記載
- 訴求軸との対応が明確
- BtoBは複数決裁者を整理

## Rejection Criteria

- 「30代男性」程度の浅さ
- 単一ペルソナのみ（BtoB案件で複数決裁者を無視）
- 感情上のジョブ欠落
- 自社願望ターゲット

## Related

- skill: `skills/01_strategy/persona-design-skill.md`
- scorecard: `scoring/lp-master-scorecard.md`
- agent: `lp-persona-researcher`
