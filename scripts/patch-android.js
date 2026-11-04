// Ajusta o projeto Android gerado pelo Capacitor: ícone, tela de abertura,
// tela cheia, modo retrato e número da versão.
// Uso: node scripts/patch-android.js <numeroDaVersao>
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const res = path.join(root, 'android/app/src/main/res');
const build = Number(process.argv[2] || 1);

function edit(file, fn) {
  const p = path.join(root, file);
  const before = fs.readFileSync(p, 'utf8');
  const after = fn(before);
  if (after === before) throw new Error('Nada mudou em ' + file);
  fs.writeFileSync(p, after);
}

// ícones
fs.rmSync(path.join(res, 'mipmap-anydpi-v26'), { recursive: true, force: true });
for (const dir of fs.readdirSync(path.join(root, 'android-res')).filter(d => d.startsWith('mipmap-'))) {
  fs.cpSync(path.join(root, 'android-res', dir), path.join(res, dir), { recursive: true });
}
// tela de abertura
for (const dir of fs.readdirSync(res).filter(d => d.startsWith('drawable'))) {
  const f = path.join(res, dir, 'splash.png');
  if (fs.existsSync(f)) fs.copyFileSync(path.join(root, 'android-res', dir.includes('land') ? 'splash-land.png' : 'splash-port.png'), f);
}
// tela cheia
edit('android/app/src/main/res/values/styles.xml', s =>
  s.replace('<item name="windowNoTitle">true</item>', '<item name="windowNoTitle">true</item>\n        <item name="android:windowFullscreen">true</item>'));
// modo retrato
edit('android/app/src/main/AndroidManifest.xml', s =>
  s.replace('android:name=".MainActivity"', 'android:name=".MainActivity"\n            android:screenOrientation="portrait"'));
// versão
edit('android/app/build.gradle', s =>
  s.replace(/versionCode \d+/, `versionCode ${build}`).replace(/versionName "[^"]*"/, `versionName "0.1.${build}"`));
console.log('Android ajustado, versão 0.1.' + build);
