# prototypes

構想段階のデモです。仕様の正本ではなく、挙動の参考と G0・Prototype の説明に使います。

| フォルダ | 内容 |
|---|---|
| offline-demo/ | 5ステップのデモ。シミュレーションエンジンの元にもなっている |
| system-webui/ | システムWebUIサンプル。`sitelive-system-webui.html` は生成物 |

## システムWebUIの再生成

`webui_template.html` を編集し、system-webui フォルダで次を実行します。オフラインデモからエンジン部分を取り出して差し込みます。

```
node build_webui.js ../offline-demo/sitelive-offline-demo.html webui_template.html sitelive-system-webui.html
```
