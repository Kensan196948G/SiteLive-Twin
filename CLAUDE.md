# SiteLive Twin — CLAUDE.md

## Mission
現場の状況・工程・原価をつなぎ、遅れにその日のうちに気づき、対策を数字で比べて早く決められるようにする。

## Portfolio Position (V3.6)
- 正本: 現場ライブ状態の集約ビュー・イベント、対策シミュレーション案（申請）
- 参照のみ: ArcSphere（3D）、CEOS（工程・原価・契約）、MCIP（案件ID・承認・証跡）、CODIP（気象）、Entra ID（認証）
- 詳細: docs/adr/0001-repository-and-sor-scope.html

## Source Priority
1. 全社規程（全体構成 V3.6、リポジトリ構成 BP V3.6、OS・アプリ選定 BP V3.5）
2. docs/00-project/phase-gates.html（フェーズとゲート）
3. docs/01-requirements/requirements.html、docs/02-design/*
4. prototypes/（挙動の参考。仕様の正本ではない）

## Rules
- 日本語で対応する。文書は単体 HTML（docs/_template.html を元にする）。
- 他リポジトリの DB に直接接続しない。版付き契約（contracts/、手編集禁止）・API・イベントで連携する。
- AI は MCAH 経由のみ。Provider を直接呼ばない。
- 権限はサーバー側で必ず判定する。承認は起案者本人を除く（職務分掌）。
- main に直接 push しない。Branch → PR → CI → Human Review。

## Current Phase
構想フェーズ終盤（G0 前）。次は PoC の検証項目 T1〜T7（docs/10-poc/poc-plan.html）。

## Prototypes
prototypes/system-webui/sitelive-system-webui.html は生成物。編集は webui_template.html に行い、
`node build_webui.js ../offline-demo/sitelive-offline-demo.html webui_template.html sitelive-system-webui.html` で再生成する。
