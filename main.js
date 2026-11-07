import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import {FilesetResolver,HandLandmarker} from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/+esm';
const $=id=>document.getElementById(id),video=$('cam'),canvas=$('hands'),ctx=canvas.getContext('2d');
let tracker,stream,active=false,last=-1,rotation=0,tilt=0,scale=1,prev=null,twoPrev=null,pulseUntil=0,simRunning=true,voiceRecognition=null,voiceOn=false;
const host=$('scene'),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,0,8);
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(host.clientWidth,host.clientHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;host.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0x5b9db5,1.4));const light=new THREE.PointLight(0x4bdcff,100,20);light.position.set(3,3,4);scene.add(light);const blue=new THREE.PointLight(0x315bff,65,20);blue.position.set(-4,-2,-2);scene.add(blue);
const group=new THREE.Group();scene.add(group);
const coreMat=new THREE.MeshStandardMaterial({color:0x64e4ff,emissive:0x137da5,emissiveIntensity:2,metalness:.4,roughness:.2});
const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.7,3),coreMat);group.add(core);
group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.43,2),new THREE.MeshBasicMaterial({color:0xcafaff,wireframe:true,transparent:true,opacity:.55})));
const rings=[];for(let i=0;i<4;i++){const r=new THREE.Mesh(new THREE.TorusGeometry(1.12+i*.2,.018,8,150),new THREE.MeshStandardMaterial({color:0x55cbe8,emissive:0x126b8e,emissiveIntensity:1.5,metalness:.8}));r.rotation.set(Math.PI/2+(i%2)*.7,i*.5,i*.8);group.add(r);rings.push(r)}
for(let i=0;i<44;i++){const a=i/44*Math.PI*2,d=new THREE.Mesh(new THREE.SphereGeometry(.025,8,8),new THREE.MeshBasicMaterial({color:0x8beeff}));d.position.set(Math.cos(a)*2,Math.sin(a)*2,Math.sin(a*3)*.12);group.add(d)}
const grid=new THREE.GridHelper(16,40,0x17445b,0x10283a);grid.position.y=-2.2;grid.material.transparent=true;grid.material.opacity=.3;scene.add(grid);
const addedObjects=[];
function addSatellite(){const orbit=new THREE.Group();group.add(orbit);const body=new THREE.Mesh(new THREE.SphereGeometry(.15,24,16),new THREE.MeshStandardMaterial({color:0xb8d9e8,metalness:.8,roughness:.25,emissive:0x153b50}));body.position.x=2.25;orbit.add(body);const panelMat=new THREE.MeshStandardMaterial({color:0x2677a5,metalness:.5,roughness:.4});for(const side of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.55,.035,.28),panelMat);panel.position.set(2.25+side*.42,0,0);orbit.add(panel)}addedObjects.push({type:'satellite',object:orbit,speed:.45+Math.random()*.35});}
function addOrb(){const orb=new THREE.Mesh(new THREE.IcosahedronGeometry(.2,2),new THREE.MeshStandardMaterial({color:0x9bf6ff,emissive:0x35cfff,emissiveIntensity:3,transparent:true,opacity:.85}));const angle=Math.random()*Math.PI*2;orb.position.set(Math.cos(angle)*2.55,Math.sin(angle)*2.55,(Math.random()-.5)*.5);group.add(orb);addedObjects.push({type:'orb',object:orb,speed:1.1+Math.random()*.7,angle});}
function clearObjects(){for(const item of addedObjects)group.remove(item.object);addedObjects.length=0}
function resize(){camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();renderer.setSize(host.clientWidth,host.clientHeight)}new ResizeObserver(resize).observe(host);
const clock=new THREE.Clock();function animate(){requestAnimationFrame(animate);const t=clock.getElapsedTime(),dt=Math.min(clock.getDelta(),.04);if(simRunning){if(!active)rotation+=.0015;group.rotation.set(tilt,rotation,Math.sin(t*.25)*.03);group.scale.setScalar(scale);core.scale.setScalar(1+Math.sin(t*1.8)*.025+(t<pulseUntil?.18:0));rings.forEach((r,i)=>r.rotation.z+=dt*.22*(i%2?1:-1));addedObjects.forEach(item=>{if(item.type==='satellite')item.object.rotation.y+=dt*item.speed;else{item.angle+=dt*item.speed;item.object.position.x=Math.cos(item.angle)*2.55;item.object.position.y=Math.sin(item.angle)*2.55}});light.intensity=t<pulseUntil?190:100;}renderer.render(scene,camera);$('rot').textContent=String(Math.round((rotation*180/Math.PI+360)%360)).padStart(3,'0')+'°';$('scale').textContent=Math.round(scale*100)+'%'}animate();
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function draw(hands){canvas.width=video.videoWidth||640;canvas.height=video.videoHeight||480;ctx.clearRect(0,0,canvas.width,canvas.height);for(const h of hands){ctx.strokeStyle='#68e9ff';ctx.fillStyle='#d7fbff';ctx.lineWidth=2;for(const [a,b] of [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]]){ctx.beginPath();ctx.moveTo(h[a].x*canvas.width,h[a].y*canvas.height);ctx.lineTo(h[b].x*canvas.width,h[b].y*canvas.height);ctx.stroke()}for(const p of h){ctx.beginPath();ctx.arc(p.x*canvas.width,p.y*canvas.height,3,0,Math.PI*2);ctx.fill()}}}
function update(result){const hands=result.landmarks||[];draw(hands);$('count').textContent=hands.length;if(!hands.length){$('gesture').textContent='—';$('hint').textContent='SHOW YOUR HANDS TO THE CAMERA';prev=null;twoPrev=null;return}const h=hands[0],mid={x:(h[4].x+h[8].x)/2,y:(h[4].y+h[8].y)/2},pinch=dist(h[4],h[8])<.065;if(hands.length>1){const h2=hands[1],m2={x:(h2[4].x+h2[8].x)/2,y:(h2[4].y+h2[8].y)/2},d=dist(mid,m2);if(twoPrev!==null)scale=THREE.MathUtils.clamp(scale*d/twoPrev,.6,1.7);twoPrev=d;$('gesture').textContent='TWO-HAND SCALE';$('hint').textContent='TWO HANDS // SPREAD OR BRING TOGETHER'}else{twoPrev=null;if(pinch){$('gesture').textContent='PINCH / ROTATE';$('hint').textContent='CORE LINKED // MOVE YOUR PINCHED HAND';if(prev){rotation+=(mid.x-prev.x)*5;tilt+=(mid.y-prev.y)*3.5}}else{$('gesture').textContent='HAND TRACKED';$('hint').textContent='PINCH THUMB + INDEX TO GRAB CORE'}}prev=mid}
async function start(){const b=$('start');b.disabled=true;b.textContent='INITIALIZING...';try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480}},audio:false});video.srcObject=stream;await video.play();const vision=await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');tracker=await HandLandmarker.createFromOptions(vision,{baseOptions:{modelAssetPath:'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',delegate:'GPU'},runningMode:'VIDEO',numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.5,minTrackingConfidence:.5});active=true;$('state').textContent='OPTICAL LINK ACTIVE';$('camstate').textContent='CAMERA LIVE';$('note').textContent='LOCAL TRACKING ACTIVE · VIDEO IS NOT UPLOADED';$('hint').textContent='SHOW YOUR HANDS TO THE CAMERA';b.textContent='CAMERA INITIALIZED';loop()}catch(e){console.error(e);$('state').textContent='INITIALIZATION ERROR';$('note').textContent='Camera/tracking could not start: '+e.message;b.disabled=false;b.textContent='RETRY INITIALIZATION'}}
function loop(){if(!active)return;if(video.currentTime!==last&&video.readyState>=2){last=video.currentTime;update(tracker.detectForVideo(video,performance.now()))}requestAnimationFrame(loop)}
function reset(){rotation=0;tilt=0;scale=1;prev=null;twoPrev=null}
function emitPulse(){pulseUntil=clock.getElapsedTime()+1.5;$('coreState').textContent='ENERGY SURGE DETECTED';setTimeout(()=>$('coreState').textContent='CONTAINMENT STABLE',1600)}
function setSimulation(on){simRunning=on;$('simState').textContent=on?'SIMULATION RUNNING':'SIMULATION PAUSED';$('simulation').textContent=on?'Ⅱ PAUSE SIMULATION':'▶ RESUME SIMULATION';$('fieldStatus').textContent=on?'NOMINAL':'PAUSED'}
function updateControls(){const p=Number($('power').value),c=Number($('containment').value);$('powerText').textContent=p+'%';$('containmentText').textContent=c+'%';$('output').textContent=(p*.067).toFixed(2)+' TW';$('outputBar').style.width=p+'%';$('containmentVal').textContent=c.toFixed(1)+'%';$('containmentBar').style.width=c+'%';$('harmonics').textContent=p>90?'ELEVATED':p<25?'LOW':'STABLE';$('harmonicsBar').style.width=Math.max(15,100-Math.abs(p-65)*.7)+'%';$('fieldStatus').textContent=c<75?'CAUTION':simRunning?'NOMINAL':'PAUSED';$('coreState').textContent=c<75?'FIELD INSTABILITY':p>90?'HIGH OUTPUT':'CONTAINMENT STABLE';coreMat.emissiveIntensity=1.2+p/45;light.intensity=65+p*.55}
function voiceCommand(raw){
 const original=raw.trim(),s=original.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\\s+/g,' ').trim();
 $('voiceStatus').textContent='HEARD: “'+original+'”';
 const has=(...terms)=>terms.some(term=>s.includes(term));
 if(has('pulse','fire','energy burst'))emitPulse();
 else if(has('recenter','reset','center core','centre core'))reset();
 else if(has('satellite','add satellite'))addSatellite();
 else if(has('energy orb','add orb','orb'))addOrb();
 else if(has('clear','remove additions'))clearObjects();
 else if(has('pause','freeze simulation'))setSimulation(false);
 else if(has('resume','continue simulation','start simulation'))setSimulation(true);
 else if(has('left','turn left'))rotation-=.45;
 else if(has('right','turn right'))rotation+=.45;
 else if(has('up','tilt up'))tilt-=.25;
 else if(has('down','tilt down'))tilt+=.25;
 else if(has('increase power','power up','more power')){$('power').value=Math.min(100,Number($('power').value)+10);updateControls()}
 else if(has('decrease power','power down','less power')){$('power').value=Math.max(10,Number($('power').value)-10);updateControls()}
 else if(has('help','commands'))$('voiceStatus').textContent='Try short commands: “pulse”, “reset”, “satellite”, “orb”, “left”, “right”, “pause”, “resume”, “power up”.';
 else $('voiceStatus').textContent='I heard “'+original+'” but did not match a command. Try one short command.';
}
function toggleVoice(){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){$('voiceStatus').textContent='Speech recognition is unavailable in this browser. Use a recent version of Chrome.';return}
 if(voiceOn){voiceOn=false;voiceRecognition.stop();$('voice').textContent='◉ ENABLE VOICE COMMANDS';$('voiceStatus').textContent='Voice control is off.';return}
 voiceRecognition=new SR();
 voiceRecognition.continuous=true;
 voiceRecognition.interimResults=true;
 voiceRecognition.maxAlternatives=3;
 voiceRecognition.lang='en-IN';
 voiceRecognition.onresult=e=>{
  for(let i=e.resultIndex;i<e.results.length;i++){
   const result=e.results[i],heard=result[0]?.transcript||'';
   if(!result.isFinal){$('voiceStatus').textContent='HEARING: “'+heard+'”';continue}
   const candidates=Array.from(result).sort((a,b)=>(b.confidence||0)-(a.confidence||0));
   const best=candidates[0];
   if(best && best.transcript.trim())voiceCommand(best.transcript);
  }
 };
 voiceRecognition.onerror=e=>{
  $('voiceStatus').textContent=e.error==='no-speech'?'No speech detected. Try speaking closer to the microphone.':e.error==='not-allowed'?'Microphone permission was blocked. Allow microphone access in the browser address bar.':'VOICE ERROR: '+e.error;
 };
 voiceRecognition.onend=()=>{
  if(voiceOn){try{voiceRecognition.start()}catch(_){}}
 };
 try{
  voiceRecognition.start();voiceOn=true;
  $('voice').textContent='■ DISABLE VOICE COMMANDS';
  $('voiceStatus').textContent='Listening in English (India). Use short commands; say “help” for examples.';
 }catch(e){voiceOn=false;$('voiceStatus').textContent='Could not start voice recognition: '+e.message}
}
$('start').onclick=start;$('reset').onclick=reset;$('pulse').onclick=emitPulse;$('simulation').onclick=()=>setSimulation(!simRunning);$('addSatellite').onclick=addSatellite;$('addOrb').onclick=addOrb;$('clearObjects').onclick=clearObjects;$('voice').onclick=toggleVoice;$('power').oninput=updateControls;$('containment').oninput=updateControls;updateControls();