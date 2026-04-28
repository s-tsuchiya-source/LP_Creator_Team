# contracts/ — 成果物の出力形式

contracts は、各成果物の必須項目・形式を固定化するためのファイルです。

## 役割

- agent や skill が生成する成果物の品質下限を保証する
- 成果物の比較・採点の基準
- 後段エージェントが安心して読める

## ファイル一覧

| Contract | 対応フェーズ |
|---|---|
| brief-output-contract.md | Brief |
| strategy-output-contract.md | Strategy |
| persona-output-contract.md | Persona（戦略フェーズ） |
| structure-output-contract.md | Structure |
| wireframe-output-contract.md | Wireframe |
| copy-output-contract.md | Copy |
| design-output-contract.md | Design |
| code-output-contract.md | Code |
| measurement-output-contract.md | Measurement |
| qa-output-contract.md | QA |
| final-delivery-contract.md | 最終納品 |

## 使い方

各エージェントは、成果物作成前に該当 contract を確認し、出力前に Acceptance Criteria を満たすかセルフチェックする。
