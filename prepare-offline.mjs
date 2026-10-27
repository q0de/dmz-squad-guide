import fs from 'node:fs/promises';
const root = new URL('./', import.meta.url);
let html=await fs.readFile(new URL('docs/index.html',root),'utf8');
const css=await fs.readFile(new URL('docs/styles.css',root),'utf8');
let js=(await fs.readFile(new URL('docs/visual-data.js',root),'utf8'))+'\n'+await fs.readFile(new URL('docs/app.js',root),'utf8');
for(const name of await fs.readdir(new URL('docs/assets/',root))){
  if(!/\.(png|webp|svg)$/.test(name))continue;
  const bytes=await fs.readFile(new URL('docs/assets/'+name,root));
  const mime=name.endsWith('.svg')?'image/svg+xml':name.endsWith('.webp')?'image/webp':'image/png';
  js=js.replaceAll('assets/'+name,'data:'+mime+';base64,'+bytes.toString('base64'));
}
html=html.replace('<link rel="stylesheet" href="styles.css">','<style>'+css+'</style>').replace('<script src="visual-data.js"></script>','').replace('<script src="app.js"></script>','<script>'+js+'</script>');
await fs.writeFile(new URL('docs/dmz-guide-offline.html',root),html);
console.log('Single-file offline guide prepared.');
