# SiteLive Twin（現場ライブツイン）

全現場の状況を一目で把握し、問題の原因を3Dで確かめ、対策の効果をその場で試算して、すぐ決めるための業務システムです。
判断の流れ「見る → 気づく → 原因を探す → 対策を比べる → 決める」を1つの画面で回します。

## 現在のフェーズ

**構想フェーズの終盤（G0 前）**。次は PoC（2026/11〜12）です。

| フェーズ | 問い | ゲート |
|---|---|---|
| PoC | 技術的に成立するか？ | G1 Go/No-Go |
| Prototype（必要に応じて） | 利用者が理解・操作できるか？ | G2 |
| MVP | 最小の価値で、本当に使われるか？ | G3 |
| Staging | 本番に近い条件で、安全・安定して運用できるか？ | G4 リリース判定 |
| Release | 本番環境で、対象ユーザーへ正式提供する | — |
| 運用・改善 | 計測 → 学習 → 改善 → 次リリース | G5（四半期） |

## ドキュメント

すべて単体で開ける HTML です。入口は [docs/index.html](docs/index.html)。

## デモ（構想段階の成果物）

| ファイル | 内容 |
|---|---|
| [prototypes/offline-demo/sitelive-offline-demo.html](prototypes/offline-demo/sitelive-offline-demo.html) | 5ステップのデモ（完全オフライン） |
| [prototypes/system-webui/sitelive-system-webui.html](prototypes/system-webui/sitelive-system-webui.html) | システムWebUIサンプル（15画面・ロール・承認ワークフロー・監査ログ） |

どちらもブラウザで開くだけで動きます。データはすべてシミュレーションです。

## ポートフォリオ上の位置付け

「みらい建設土木DX・AI統合基盤 全体構成 V3.6」に従います。

| 項目 | 内容 |
|---|---|
| 正本 | 現場ライブ状態の集約ビュー・イベント、対策シミュレーション案（申請） |
| 参照のみ | 3D（ArcSphere）、工程・原価・契約（CEOS）、案件ID・承認・証跡（MCIP）、気象（CODIP）、認証（Entra ID） |
| 連携方式 | 版付き契約・API・イベント。他リポジトリの DB には直接接続しない。AI は MCAH 経由のみ |

独立リポジトリとする理由と未決事項は [ADR-0001](docs/adr/0001-repository-and-sor-scope.html)。

## フォルダ構成

```
docs/          文書（00-project, 01-requirements, 02-design, adr, 10-poc … 60-operations）
prototypes/    構想段階のデモ（単体HTML）
src/           アプリケーション（PoC から）
contracts/     版付き契約（手編集禁止）
tests/         unit / contract / integration
ai/            context / evals / prompts
deploy/        onprem / cloud
migrations/    自リポジトリの schema のみ
```
