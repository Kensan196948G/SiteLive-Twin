// オフラインサンプルのエンジン部分を、システムWebUIのテンプレートへ差し込む
const fs = require('fs');
const [src, tpl, out] = process.argv.slice(2);
const S = fs.readFileSync(src, 'utf8');
let T = fs.readFileSync(tpl, 'utf8');

function slice(from, to){
  const a = S.indexOf(from); if(a < 0) throw new Error('not found: ' + from);
  const b = S.indexOf(to, a); if(b < 0) throw new Error('not found: ' + to);
  return S.slice(a, b);
}
function patch(code, pairs){
  for(const [x, y, all] of pairs){
    if(code.indexOf(x) < 0) throw new Error('patch target not found: ' + x);
    code = all ? code.split(x).join(y) : code.replace(x, y);
  }
  return code;
}
const SPI_CLS = ["e.SPI < .8 ? 'c-ng' : e.SPI < .95 ? 'c-warn' : 'c-ok'", "spiCls(e.SPI)", true];

let A = slice('/* ================= 基本ユーティリティ', '/* ================= 状態と保存');
// 現場マスタはシステム版で項目を拡張して定義し直すため、デモ版の定義を外す
{ const a = A.indexOf('const SITES = ['); const b = A.indexOf('];\n', a); if(a < 0 || b < 0) throw new Error('SITES not found'); A = A.slice(0, a) + A.slice(b + 3); }
let B = slice('/* ================= 指標（EVM・遅れ）', '/* ================= ビュー：共通');
B = patch(B, [
  ["if(spi < .8) return 'ng';\n  if(spi < .95 ||", "if(spi < S.cfg.spiNg) return 'ng';\n  if(spi < S.cfg.spiWarn ||"],
  ["const s2 = spi < .8 ? 2 : spi < .95 ? 1 : 0;", "const s2 = spi < S.cfg.spiNg ? 2 : spi < S.cfg.spiWarn ? 1 : 0;"],
  ["u.bh1 < .6 && !low", "u.bh1 < S.cfg.utilWarn && !low"],
]);
const C1 = slice('const G = {W:1000', "$('#gantt').addEventListener");
const C2 = slice('function state4d(vk){', 'function draw4d(){');
let D = slice('function todayUtil(){', "$('#wiOpts').addEventListener");
D = patch(D, [SPI_CLS, ["util.bh1 < .6", "util.bh1 < S.cfg.utilWarn", true]]);
let E = slice('function renderLegend(){', "$('#twMachines').addEventListener");
E = patch(E, [SPI_CLS]);

for(const [k, v] of [['A', A], ['B', B], ['C1', C1], ['C2', C2], ['D', D], ['E', E]]){
  const tag = '//@@' + k + '\n';
  if(T.indexOf(tag) < 0) throw new Error('placeholder missing: ' + k);
  T = T.replace(tag, () => v + '\n');
}
fs.writeFileSync(out, T);
console.log('ok', T.length, 'chars');
