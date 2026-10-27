'use strict';
const PUBLIC_ORIGIN = 'https://q0de.github.io/dmz-squad-guide';
const MISSIONS = [
  {id:'silent-ledger',number:'01',name:'Silent Ledger',place:'Heavenly Luck Casino',short:'Casino / cash & loot',badge:'OUR REPLAY PICK',threat:'MEDIUM BRIEFING',intro:'A casino heist with optional cash bags. Our pick when the squad wants a useful loot run.',route:'Lobby → generator → penthouse cameras → vault → extraction',map:'assets/replay-map.png',mapNumber:'MAP MARKER 1',mapTitle:'1 · Casino, Cheongun Village',mapCaption:'The cyan 1 points to the casino. The numbered areas are separate mission choices.',mapUrl:'https://dmztracker.gg/map/hajin/?markerId=5531',kit:['2-plate vest or better','Medkit + spare plates','Plenty of ammunition','Ammo Box recommended'],tip:'One person operates the terminal or carries bags; the others cover. Wait for the cash-bag carrier before anyone leaves on the chopper.',steps:[
    ['Reach the lobby elevators','Enter the casino and cross the lobby to the elevators. Reaching them triggers the power objective.'],
    ['Start the parking-level generator','Follow the marker down through the back corridors to the parking utility room. Use the generator and press interact when the moving indicator reaches the target zone.'],
    ['Reach Penthouse Security','Return to the powered elevators and follow the objective upstairs. Clear the security office before using its computer.'],
    ['Open the vault fence by camera','Use the parking-level security station. Find the camera looking at the caged vault gate—reported as Camera 01—and select Open Security Fence.','The downstairs fence opens through the security system; go upstairs first.'],
    ['Drill the basement vault','Take the B1/B2 Parking elevator down, pass the opened fence and attach the drill to the round vault door. Hold the approaches until drilling finishes.'],
    ['Take the printing plates','Open the inner cage and collect the Plate Bag. Confirm the objective switches to extraction.'],
    ['Optional: carry out the cash bags','If the area is manageable, load the vault’s cash bags onto the nearby truck and take them to extraction. Put the bags aboard the helicopter.','A documented run had 12 bags at $1,500 each. Payouts vary; the menu’s $25,000 is not a guaranteed replay return. Skip this step if you choose a quick exit.'],
    ['Extract together','Follow the mission’s helicopter marker. Get the plates, any cash bags and the whole squad aboard, then wait for extraction to finish.']
  ],sources:[['Casino mission sequence','https://allthings.how/mw4-dmz-operation-silent-ledger-story-mission-walkthrough-vault-and-plates/'],['Cash bags, squad route and reported payout','https://codcentral.net/blog/mw4-dmz-operation-silent-ledger/']]},
  {id:'critical-extraction',number:'02',name:'Critical Extraction',place:'Mirae General Hospital',short:'Hospital / simpler escort',badge:'STRAIGHTFORWARD ROUTE',threat:'MEDIUM BRIEFING',intro:'Find General Kang, escort his hospital bed and load him into the rooftop helicopter.',route:'Hospital → ICU → elevator escort → rooftop helicopter',map:'assets/replay-map.png',mapNumber:'MAP MARKER 2',mapTitle:'2 · Mirae General Hospital',mapCaption:'The cyan 2 points to the hospital. Follow the active escort marker inside the building.',mapUrl:'https://dmztracker.gg/map/hajin/',kit:['2-plate vest or better','Medkit + spare plates','Ammunition','One designated bed pusher'],tip:'Use one player on the bed and the others clearing ahead and watching the rear. Stop the bed in cover when enemies push; watch the radiation countdown.',steps:[
    ['Reach the hospital','Follow Approach the Hospital to Mirae General Hospital. Clear the entrance and move toward Find General Kang.'],
    ['Find Kang in the ICU','Follow the current marker to his wheeled bed. Use the sedative interaction and wait for Move Gen. Kang to Safety.'],
    ['Push the bed along the escort route','One teammate pushes while the others clear rooms and doorways. Keep the bed close to cover rather than exposed in the lobby.'],
    ['Complete the elevator stages','Bring the bed through each marked elevator. Defend during the opening progress bar, then continue the escort.','Follow the current objective through the full elevator route; older shortcut videos may be outdated.'],
    ['Load Kang into the helicopter','Move the bed onto the rooftop helipad and into the chopper. Reaching the roof is only part of the objective.'],
    ['Confirm completion and board','Check that Secure Gen. Kang in the Exfil Chopper advances. For a clean run, board together and leave with him.']
  ],sources:[['ICU, sedative and extraction checkpoints','https://dmzwiki.com/guides/critical-extraction'],['Escort route and squad roles','https://www.gamerfuzion.com/modern-warfare-4-dmz-operation-critical-extraction-walkthrough/']]},
  {id:'shopping-hacks',number:'03',name:'Shopping Hacks',place:'NuriGO Mall',short:'Mall / robots & lab',badge:'MORE STEPS TO MANAGE',threat:'MEDIUM BRIEFING',intro:'The mall-and-robots mission: unlock security, collect four working cores, defend the lab and Fulton out.',route:'Encampment → parking → annex → cores → lab → roof',map:'assets/replay-map.png',mapNumber:'MAP MARKER 3',mapTitle:'3 · NuriGO Mall',mapCaption:'The cyan 3 points to the mall. Most objectives are inside or below this complex.',mapUrl:'https://dmztracker.gg/map/hajin/',kit:['Armor + spare plates','Medkit and ammunition','Night-vision goggles','Weapon suited to enemy waves'],tip:'During the lab defense, assign one person to restart failed computers and the others to cover entrances. Gather the whole squad at the roof before using the Fulton.',steps:[
    ['Hack the encampment laptop','Find the marked laptop in the mall shops. Finish the hack and read the security code. Take the marked night-vision goggles if you need them.'],
    ['Unlock mall security','Use the underground parking ramp at Entrance 36. Enter your current four-digit code at the security door.','The code changes between matches. Use your note or objective text, not a code from a video.'],
    ['Power and explore the Security Annex','Start the generator with the timing prompt. Inspect the annex laptop and follow the lab-door objective.'],
    ['Collect four intact K9 cores','Disable robot dogs and quickly collect their working K9 Battery Cores before self-destruction. Check the annex for a core as well.','Destroyed K9 Battery Cores do not work.'],
    ['Load the core terminal: 4/4','Move the working cores into the four terminal slots by the lab door. Carrying them in your backpack alone does not advance the counter.'],
    ['Hack the five lab computers','Once the door opens, clear the rooms and start all five computers. Confirm the counter reaches 5/5.'],
    ['Defend and restart failed computers','Hold the lab through the breach. If Computers Running falls below 5/5, find and restart the failed laptop. Wait for the breach and server reboot to finish.'],
    ['Take the Bio-agent Sample','Enter the opened lab vault and collect the sample from the bench. Confirm Escape to the Rooftop Exfil appears.'],
    ['Reach the rooftop Fulton','Leave through the garage exit, return through the mall and use the exterior yellow ascender. Climb to the marked upper-roof crate.'],
    ['Activate, attach and extract','Use Activate Fulton on the crate, then interact again to attach. Everyone should follow their own attachment prompt and remain ready for extraction.']
  ],sources:[['Mall objective sequence and rooftop route','https://allthings.how/operation-shopping-hacks-walkthrough-in-call-of-duty-modern-warfare-4-dmz/'],['Working robot cores','https://www.destructoid.com/how-to-obtain-robot-cores-modern-warfare-4-dmz/'],['Shopping Hacks overview','https://dmzcodex.com/missions/operation-shopping-hacks/']]},
  {id:'iron-citadel',number:'04',name:'Iron Citadel',place:'Chang-san Air Base',short:'Air base / next progression',badge:'HARDER MISSION',threat:'CRITICAL BRIEFING',intro:'A longer air-base operation: upgrade a card, breach the armory, sabotage aircraft and extract the manifest.',route:'Access card → upgrade → bunker → armory → aircraft → SAM → exfil',map:'assets/iron-map.png',mapNumber:'SOUTHERN APPROACH',mapTitle:'Chang-san Air Base · around B5',mapCaption:'The cyan arrow suggests an approach from the southern woods. It is not a guaranteed safe path or an underground floor plan.',mapUrl:'https://dmztracker.gg/map/hajin/?markerId=5490',kit:['3-plate armor vest','Medkit + plenty of plates','Ammo Box','A coordinated squad'],tip:'Stay close enough to revive. Take turns firing and reloading against Colossus, and use the mission’s markers for the search areas and final extraction.',steps:[
    ['Find the access card','Enter the marked search buildings and wait for the scan. Collect the card when its marker appears. The pickup is not fixed across matches.'],
    ['Upgrade at Admin Complex No. 2','Reach the upstairs server room and activate the terminal. Defend while it runs, then take the upgraded Armory Access Card.'],
    ['Reach the bunker armory doors','Follow the objective into the Entrance Garage and through the bunker. Expect heavy resistance.'],
    ['Find all three code fragments','Search the marked bunker rooms until the code counter reaches 3/3. Use the six digits in your own Known Digits tracker at the keypad.'],
    ['Clear the armory and read the manifest','Fight Colossus from cover. Look for an open case with four yellow circular devices and paper on its front. Use Read Note, close it and confirm Standby for Instruction.'],
    ['Plant the armory explosives','Interact with the marked munitions crates. Follow the objective toward the Tank Depot and aircraft after the armory stage advances.'],
    ['Sabotage all three aircraft','Plant charges on each marked aircraft and check that the counter reaches 3/3.'],
    ['Capture the marked SAM site','Hold the capture area until the bar finishes. Cover the squad while teammates heal and reload.'],
    ['Extract the manifest','Follow the mission helicopter marker, board together and stay aboard until extraction succeeds.']
  ],sources:[['Full objective sequence','https://allthings.how/operation-iron-citadel-story-mission-walkthrough-in-mw4-dmz/'],['Manifest identification and interaction','https://dmzwiki.com/guides/iron-citadel'],['Bunker code and squad walkthrough','https://codcentral.net/blog/mw4-dmz-operation-iron-citadel/']]}
];
const $ = id => document.getElementById(id);
const STORAGE_KEY = 'dmz-squad-guide-v1';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch { saved = {}; }
if(typeof saved !== 'object' || Array.isArray(saved)) saved = {};
let current = MISSIONS[0];
let wakeLock = null;
let wantsAwake = false;
let toastTimer;
let visualMode='ground';
let groundIndex=0;
let pictureIndex=0;
function pictures(){const v=VISUALS[current.id];return [
  {file:v.route,title:current.name+' · numbered route',caption:'Follow the numbered arrows. These are the same step numbers as the checklist. The diagram shows objective order, not the building layout.',download:current.id+'-route.svg'},
  {file:current.map,title:current.mapTitle,caption:current.mapCaption+' Map location numbers identify missions; route step numbers start separately at 1.',source:'DMZTracker',url:current.mapUrl,download:current.id+'-location.png'},
  ...v.photos.map(p=>({...p,title:'Step '+(p.step+1)+' · '+p.title,download:current.id+'-step-'+(p.step+1)+'.webp'}))
];}
function groundPhotos(){return VISUALS[current.id].photos.filter(p=>p.ground);}
function showGroundView(scroll=false){
 const list=groundPhotos();groundIndex=Math.max(0,Math.min(groundIndex,list.length-1));const p=list[groundIndex];
 $('groundCount').textContent='VIEW '+(groundIndex+1)+' / '+list.length+' · STEP '+(p.step+1);$('groundImage').src=p.file;$('groundImage').alt=p.title;$('groundImageButton').setAttribute('aria-label','Enlarge ground view: '+p.title);$('groundTitle').textContent=p.title;$('groundLandmark').textContent=p.landmark;$('groundNext').textContent=p.next;$('groundStep').textContent='Go to step '+(p.step+1)+' ↓';$('groundStep').dataset.step=String(p.step);$('groundSource').href=p.url;$('groundSource').textContent=p.source+' ↗';$('groundPrevious').disabled=groundIndex===0;$('groundNextButton').disabled=groundIndex===list.length-1;
 $('groundChoices').innerHTML=list.map((item,i)=>`<button data-ground="${i}" aria-pressed="${i===groundIndex}"><img src="${item.file}" alt="" loading="lazy"><span>STEP ${item.step+1}</span></button>`).join('');
 if(scroll)$('groundImageButton').scrollIntoView({block:'start',behavior:'smooth'});
}
function setVisualMode(mode){visualMode=mode;const route=mode==='route',ground=mode==='ground';$('showGround').setAttribute('aria-pressed',String(ground));$('showRoute').setAttribute('aria-pressed',String(route));$('showLocation').setAttribute('aria-pressed',String(mode==='map'));$('groundView').hidden=!ground;$('visualPreview').hidden=ground;$('visualCaption').hidden=ground;$('downloadRoute').hidden=ground;if(ground){showGroundView();return;}const p=pictures()[route?0:1];$('routePreview').src=p.file;$('routePreview').alt=p.title;$('visualPreview').classList.toggle('location-preview',!route);$('visualPreview').setAttribute('aria-label','Enlarge '+(route?'route picture':'location map'));$('visualCaption').textContent=route?'Follow the numbers and arrows. Each number matches a checklist step below. Schematic—not a floor plan.':p.caption;}
function renderVisuals(){
  const v=VISUALS[current.id];groundIndex=0;setVisualMode('ground');$('downloadRoute').href=v.route;$('downloadRoute').download=current.id+'-route.svg';
  v.photos.forEach((p,i)=>{$('step-'+p.step).insertAdjacentHTML('beforeend',`<figure class="step-photo"><button data-picture="${i+2}" aria-label="Enlarge screenshot: ${p.title}"><img src="${p.file}" alt="${p.title}" loading="lazy" width="1920" height="1080"><span>View full size ↗</span></button><figcaption><strong>${p.title}</strong><p>${p.caption}</p><a href="${p.url}" target="_blank" rel="noopener">${p.source} · Game imagery © Activision ↗</a></figcaption></figure>`);});
}
function showPicture(){const list=pictures();const p=list[pictureIndex];$('pictureCount').textContent='PICTURE '+(pictureIndex+1)+' OF '+list.length;$('pictureTitle').textContent=p.title;$('pictureCaption').textContent=p.caption;$('pictureImage').src=p.file;$('pictureImage').alt=p.title;$('pictureFrame').classList.remove('zoomed');$('pictureFrame').classList.toggle('route-frame',pictureIndex===0);$('zoomPicture').textContent='Zoom in';$('zoomPicture').setAttribute('aria-pressed','false');$('pictureDownload').href=p.file;$('pictureDownload').download=p.download;$('pictureSource').hidden=!p.url;if(p.url){$('pictureSource').href=p.url;$('pictureSource').textContent=p.source+' ↗';}$('previousPicture').disabled=pictureIndex===0;$('nextPicture').disabled=pictureIndex===list.length-1;$('pictureFrame').scrollTop=0;$('pictureFrame').scrollLeft=0;}
function openPicture(index){pictureIndex=index;showPicture();$('visualDialog').showModal();}
function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));}catch{}}
function doneList(){const v=saved[current.id];return Array.isArray(v)?v:[];}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3000);}
function render(){
  current=MISSIONS.find(m=>m.id===location.hash.slice(1))||MISSIONS[0];
  document.title=current.name+' · DMZ Squad Guide';
  $('missionNav').innerHTML=MISSIONS.map(m=>`<button class="mission-tab" data-mission="${m.id}" aria-pressed="${m.id===current.id}"><span class="tab-number">${m.number}</span><span><strong>${m.name}</strong><small>${m.short}</small></span></button>`).join('');
  $('missionHeader').innerHTML=`<div class="mission-kicker"><span>${current.place}</span><span class="badge ${current.id==='iron-citadel'?'critical':''}">${current.badge}</span></div><h1>Operation<br>${current.name}</h1><p class="subtitle">${current.intro}</p><p class="objective-summary">${current.route}</p>`;
  $('steps').innerHTML=current.steps.map((s,i)=>`<li class="step" id="step-${i}"><label><input type="checkbox" data-step="${i}" aria-label="Complete step ${i+1}: ${s[0]}"><span class="step-body"><span class="step-top"><span class="step-index">${String(i+1).padStart(2,'0')}</span><strong>${s[0]}</strong></span><p>${s[1]}</p>${s[2]?`<p class="step-note"><b>REMEMBER</b> · ${s[2]}</p>`:''}</span></label></li>`).join('');
  $('mapImage').src=current.map;$('mapImage').alt=current.id==='iron-citadel'?'Hajin air base with a cyan southern approach arrow':'Hajin map: cyan 1 casino, 2 hospital, 3 mall';
  $('mapNumber').textContent=current.mapNumber;$('mapTitle').textContent=current.mapTitle;$('mapCaption').textContent=current.mapCaption;$('liveMap').href=current.mapUrl;
  $('kit').innerHTML=current.kit.map(k=>'<li>'+k+'</li>').join('');$('squadTip').textContent=current.tip;
  $('sourceLinks').innerHTML='<ul>'+current.sources.map(s=>`<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a></li>`).join('')+'</ul>';
  $('sources').open=false;
  renderVisuals();
  updateProgress();
}
function updateProgress(){
  const done=doneList();const count=current.steps.filter((s,i)=>done[i]===true).length;const next=current.steps.findIndex((s,i)=>done[i]!==true);const percent=Math.round(count/current.steps.length*100);
  $('progressText').textContent=count+' of '+current.steps.length+' steps checked';$('progressFill').style.width=percent+'%';document.querySelector('.progress-track').setAttribute('aria-valuenow',String(percent));
  document.querySelectorAll('.step').forEach((row,i)=>{row.classList.toggle('done',done[i]===true);row.classList.toggle('is-next',i===next);row.querySelector('input').checked=done[i]===true;});
  $('nextLabel').textContent=next<0?'CHECKLIST FINISHED':'NEXT · STEP '+(next+1);$('nextTitle').textContent=next<0?'Confirm extraction in game':current.steps[next][0];$('nextButton').disabled=next<0;$('nextButton').dataset.step=String(next);$('completion').hidden=next>=0;
}
function openMap(){ $('largeMap').src=current.map;$('largeMap').alt=$('mapImage').alt;$('mapDialogTitle').textContent=current.mapTitle;$('mapLegend').textContent=current.id==='iron-citadel'?'Cyan arrow: suggested southern approach. Follow the active objectives for the card, bunker, aircraft, SAM and extraction.':'1 · Silent Ledger — casino     2 · Critical Extraction — hospital     3 · Shopping Hacks — mall. Select one mission per deployment.';$('mapDialog').showModal(); }
function missionUrl(){return PUBLIC_ORIGIN+'/#'+current.id;}
function openShare(){ $('shareUrl').value=missionUrl();$('nativeShare').hidden=!navigator.share;$('shareDialog').showModal(); }
$('missionNav').addEventListener('click',e=>{const b=e.target.closest('[data-mission]');if(!b)return;location.hash=b.dataset.mission;});
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();$('mission').focus();$('mission').scrollIntoView({block:'start'});});
window.addEventListener('hashchange',()=>{render();if(window.matchMedia('(max-width:700px)').matches)$('mission').scrollIntoView({block:'start'});});
$('steps').addEventListener('change',e=>{const input=e.target;if(!input.matches('input[data-step]'))return;const list=doneList().slice();list[Number(input.dataset.step)]=input.checked;saved[current.id]=list;persist();updateProgress();});
$('steps').addEventListener('click',e=>{const b=e.target.closest('[data-picture]');if(b)openPicture(Number(b.dataset.picture));});
$('showRoute').addEventListener('click',()=>setVisualMode('route'));
$('showGround').addEventListener('click',()=>setVisualMode('ground'));
$('groundPrevious').addEventListener('click',()=>{if(groundIndex>0){groundIndex--;showGroundView(true);}});
$('groundNextButton').addEventListener('click',()=>{if(groundIndex<groundPhotos().length-1){groundIndex++;showGroundView(true);}});
$('groundChoices').addEventListener('click',e=>{const b=e.target.closest('[data-ground]');if(b){groundIndex=Number(b.dataset.ground);showGroundView(true);}});
$('groundImageButton').addEventListener('click',()=>{const p=groundPhotos()[groundIndex];openPicture(VISUALS[current.id].photos.indexOf(p)+2);});
$('groundStep').addEventListener('click',()=>{const step=$('step-'+$('groundStep').dataset.step);step.scrollIntoView({block:'start',behavior:'smooth'});step.querySelector('input').focus({preventScroll:true});});
$('showLocation').addEventListener('click',()=>setVisualMode('map'));
$('visualPreview').addEventListener('click',()=>openPicture(visualMode==='route'?0:1));
$('photoJump').addEventListener('click',()=>{const target=document.querySelector('.step-photo');if(target){target.scrollIntoView({block:'center',behavior:'smooth'});target.querySelector('button').focus({preventScroll:true});}});
$('closePicture').addEventListener('click',()=>$('visualDialog').close());
$('previousPicture').addEventListener('click',()=>{if(pictureIndex>0){pictureIndex--;showPicture();}});
$('nextPicture').addEventListener('click',()=>{if(pictureIndex<pictures().length-1){pictureIndex++;showPicture();}});
$('zoomPicture').addEventListener('click',()=>{const zoom=$('pictureFrame').classList.toggle('zoomed');$('zoomPicture').textContent=zoom?'Fit image':'Zoom in';$('zoomPicture').setAttribute('aria-pressed',String(zoom));});
$('resetButton').addEventListener('click',()=>{saved[current.id]=[];persist();updateProgress();toast(current.name+' checklist reset for a new run.');});
$('nextButton').addEventListener('click',()=>{const step=$('step-'+$('nextButton').dataset.step);if(step){step.scrollIntoView({block:'center',behavior:'smooth'});step.querySelector('input').focus({preventScroll:true});}});
$('mapButton').addEventListener('click',openMap);$('mobileMap').addEventListener('click',openMap);$('closeMap').addEventListener('click',()=>$('mapDialog').close());
$('shareButton').addEventListener('click',openShare);$('closeShare').addEventListener('click',()=>$('shareDialog').close());
$('shareUrl').addEventListener('click',e=>e.target.select());
$('copyLink').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(missionUrl());toast('Mission link copied. Send it to your friend.');}catch{$('shareUrl').focus();$('shareUrl').select();toast('Select and copy the link above.');}});
$('nativeShare').addEventListener('click',async()=>{try{await navigator.share({title:'DMZ · '+current.name,text:'Our mission steps and map',url:missionUrl()});}catch(e){if(e.name!=='AbortError')toast('Use Copy link to share this guide.');}});
$('largeText').addEventListener('click',()=>{saved.largeText=!saved.largeText;persist();document.body.classList.toggle('large',saved.largeText);$('largeText').setAttribute('aria-pressed',String(!!saved.largeText));});
$('printButton').addEventListener('click',()=>window.print());
async function acquireWakeLock(){try{wakeLock=await navigator.wakeLock.request('screen');$('wakeButton').textContent='Screen awake ✓';$('wakeButton').setAttribute('aria-pressed','true');wakeLock.addEventListener('release',()=>{wakeLock=null;$('wakeButton').textContent='Keep screen awake';$('wakeButton').setAttribute('aria-pressed','false');});}catch{wantsAwake=false;toast('Screen wake lock is unavailable. Use your device display settings.');}}
$('wakeButton').addEventListener('click',async()=>{if(!('wakeLock'in navigator)){toast('Screen wake lock is unavailable on this browser.');return;}wantsAwake=!wantsAwake;if(wantsAwake)await acquireWakeLock();else if(wakeLock)await wakeLock.release();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&wantsAwake&&!wakeLock)acquireWakeLock();});
document.body.classList.toggle('large',!!saved.largeText);$('largeText').setAttribute('aria-pressed',String(!!saved.largeText));
render();
