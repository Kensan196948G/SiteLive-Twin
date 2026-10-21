# AGENTS.md — SiteLive Twin

## Position (V3.6)
現場ライブ状態と対策シミュレーション案の正本を持つ Domain Product（ADR-0001 で提案中）。3D・工程・原価・承認証跡は他製品の正本を参照する。

## Rules
- 変更は Branch → PR → CI → Human Review（通常2名、重要3名）。main への直接 push 禁止。
- コミットは Conventional Commits。
- contracts/ は生成物のため手編集しない。migrations/ は自リポジトリの schema のみ。
- 他リポジトリの DB へ直接接続しない。AI は MCAH 経由のみ。
- リリースは SBOM・署名・Attestation・digest 固定。latest タグ禁止。
- PoC 以降の build/test コマンドは src/ の実装時にここへ追記する。

## Pointers
- 文書の入口: docs/index.html
- フェーズとゲート: docs/00-project/phase-gates.html
- 要件: docs/01-requirements/requirements.html
- アーキテクチャ: docs/02-design/architecture.html
