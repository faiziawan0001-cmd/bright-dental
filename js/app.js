/* ===========================================================================
   Bright Smiles Dental Clinic - Premium Edition
   Designed & built by : Nexus Labs
   Date                : 2026-10-05
   Site                : Bright Smiles Dental Clinic, Lahore
   --------------------------------------------------------------------------
   (c) 2026-10-05 Nexus Labs. All rights reserved.
   --------------------------------------------------------------------------
   This script was delivered as part of a website build. It may not be
   copied, redistributed, resold or reused for any other client or project
   without written permission from the author.
   --------------------------------------------------------------------------
   Enquiries : faiziawan.0001@gmail.com
   =========================================================================== */
/* Bright Smiles Dental Clinic — shared behaviour for every page.
   Paste photo URLs or data: URIs into IMG below to replace the illustrated tiles. */
const IMG={reception:"",rooms:"",steril:"",lounge:""};
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const set=(s,h)=>{const e=$(s);if(e)e.innerHTML=h};

const P={sparkle:"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2",shield:"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",heart:"M12 21s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z",clock:"M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z",tag:"M3 12V4h8l10 10-8 8zM7.5 7.5h.01",user:"M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6",scan:"M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M8 12h8",zap:"M13 2L4 14h7l-1 8 9-12h-7z"};
const ic=k=>`<div class="ic"><svg viewBox="0 0 24 24"><path d="${P[k]}"/></svg></div>`;

const S=[["Cleaning","General","Scale and polish to protect your gums.","30 min",15,"sparkle",["Exam and X-ray","Ultrasonic scaling","Polish and fluoride"],["How often?","Every six months for most people."]],
["Whitening","Cosmetic","Up to 8 shades brighter in one visit.","60 min",60,"zap",["Gum protection","Gel and LED light","Aftercare kit"],["Is it sensitive?","Mild, short-lived sensitivity is common."]],
["Implants","Restorative","A permanent replacement for missing teeth.","2+ visits",450,"shield",["3D scan and plan","Titanium post placed","Crown fitted after healing"],["How long do they last?","With good care, decades."]],
["Braces and aligners","Orthodontics","Straighter teeth, in metal or clear.","6–18 months",90,"scan",["Digital scan","Custom plan preview","Check-ups every 6 weeks"],["Are aligners invisible?","Nearly. Most people will not notice them."]],
["Root canal","Restorative","Relieve pain and save the natural tooth.","60–90 min",120,"heart",["Numb the area","Clean the canal","Seal and crown"],["Does it hurt?","No more than a filling, with modern anaesthesia."]],
["Veneers","Cosmetic","Thin porcelain shells for a flawless smile.","2 visits",200,"sparkle",["Smile design","Minimal prep","Bond the veneers"],["Can I choose the shade?","Yes, you approve a preview first."]],
["Child check-ups","Pediatric","Friendly first visits, sealants and fluoride.","30 min",12,"user",["Meet and play","Gentle exam","Tips for parents"],["First visit age?","Around the first birthday."]],
["Fillings","General","Tooth-coloured, natural-looking repairs.","45 min",25,"tag",["Numb","Remove decay","Shape and polish"],["Are they safe?","Yes, mercury-free composite is used."]]];

const R=[["Hira A.","I was terrified of dentists. Dr. Ayesha made it painless and kind."],["Bilal R.","My aligners finished two months early and the results are perfect."],["Mariam S.","My kids actually ask to go back. That says everything."],["Usman T.","Clear pricing, no surprises, and a great implant result."],["Noor F.","Whitening in one hour. Friends keep asking what I changed."],["Zain K.","An emergency toothache fixed the same afternoon. Thank you."]];

const SERV_IMG = {
  "Cleaning": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Whitening": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Implants": "https://images.unsplash.com/photo-1613846721397-9fc07b1e6d9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Braces and aligners": "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Root canal": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Veneers": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Child check-ups": "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
  "Fillings": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0"
};
const card=(a,i)=>{
  const img = SERV_IMG[a[0]] || "";
  const price = (a[4]*100).toLocaleString();
  let media = img ? '<div class="svc-media"><img src="'+img+'" alt="'+a[0]+' at Bright Smiles Dental Clinic" loading="lazy"><span class="svc-tag">'+a[1]+'</span></div>' : '<div class="svc-media"><div class="svc-fallback">'+ic(a[5])+'</div><span class="svc-tag">'+a[1]+'</span></div>';
  return '<div class="card svc h" style="cursor:pointer" tabindex="0" role="button" data-i="'+i+'">'+media+'<div class="svc-body"><h3>'+a[0]+'</h3><p>'+a[2]+'</p><div class="svc-meta"><span class="svc-price">From Rs '+price+'</span><span class="svc-link">View details <i class="fa-solid fa-arrow-right"></i></span></div></div></div>';
};
const rvCard=r=>`<div class="card"><div class="star">★★★★★</div><p>“${r[1]}”</p><p style="margin-top:8px"><b style="color:var(--navy)">${r[0]}</b></p></div>`;

const open=e=>{const c=e.target.closest("[data-i]");if(!c)return;const a=S[c.dataset.i];set("#sb",`<h2>${a[0]}</h2><p>${a[2]}</p><p><b>Duration:</b> ${a[3]}</p><h3>Steps</h3><div class="tl">${a[6].map(x=>`<p>${x}</p>`).join("")}</div><details open><summary>${a[7][0]}</summary><p>${a[7][1]}</p></details>`);sd.showModal()};

/* --- home: featured services, why-us, before/after, reviews --- */
set("#svp",S.slice(0,6).map(card).join(""));
const svp=$("#svp");if(svp)svp.onclick=open;
set("#why",[["heart","Gentle, pain-free care","Modern anaesthesia and a calm approach."],["tag","Clear pricing","See the full cost before treatment."],["clock","Same-week visits","Urgent slots open every day."],["shield","Strict sterilisation","Hospital-grade protocols throughout."]].map(a=>`<div class="card">${ic(a[0])}<h3>${a[1]}</h3><p>${a[2]}</p></div>`).join(""));
set("#hr",R.slice(0,3).map(rvCard).join(""));

/* --- services: filters, grid, cost estimator --- */
const tb=$("#tb"),sv=$("#sv");
if(tb&&sv){
  const cats=["All",...new Set(S.map(x=>x[1]))];
  tb.innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}">${c}</button>`).join("");
  const show=c=>{sv.innerHTML=S.map((a,i)=>[a,i]).filter(([a])=>c=="All"||a[1]==c).map(([a,i])=>card(a,i)).join("")};
  show("All");
  sv.onclick=open;
  tb.onclick=e=>{if(e.target.tagName!=="BUTTON")return;[...tb.children].forEach(b=>b.classList.remove("on"));e.target.classList.add("on");show(e.target.textContent)};
}
const esSel=$("#es");
if(esSel){
  const s2=$("#s");if(s2)s2.innerHTML=S.map(x=>`<option>${x[0]}</option>`).join("");
  esSel.innerHTML=S.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join("");
  const est=()=>{const a=S[esSel.value],q=+$("#eq").value;$("#ev").textContent=q;$("#eo").textContent="Rs "+(a[4]*q*100).toLocaleString()+" – Rs "+(a[4]*q*140).toLocaleString()};
  esSel.onchange=$("#eq").oninput=est;est();
}

/* --- before/after sliders (home + work) --- */
const teeth=n=>`<svg viewBox="0 0 24 24"><use href="#t"/></svg>`.repeat(n);
const ba=t=>`<div class="card"><div class="ba"><div class="b">${teeth(5)}<em style="left:10px">Before</em></div><div class="a">${teeth(5)}<em style="right:10px">After</em></div><i></i><input type="range" min="0" max="100" value="50" aria-label="Compare before and after"></div><h3 style="margin:14px 0 0">${t}</h3></div>`;
const wk0=$("#wk0");if(wk0)wk0.innerHTML=ba("Teeth whitening");

const WORK_DATA = [
  { name: "Sarah's Wedding Smile", cat: "Veneers", desc: "Sarah wanted a brighter, more symmetrical smile for her wedding. Using 8 custom porcelain veneers, we achieved a natural, radiant look.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" },
  { name: "Ahmed's Transformation", cat: "Aligners", desc: "Ahmed corrected severe crowding over 14 months with clear aligners, entirely discreetly without metal braces.", img: "https://images.unsplash.com/photo-1590611936760-eeb9bcab58dc?q=80&w=800&auto=format&fit=crop" },
  { name: "Fatima's Restoration", cat: "Implants", desc: "A seamless replacement of a missing front tooth using a titanium implant and custom hand-layered ceramic crown.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" },
  { name: "Omar's Refresh", cat: "Whitening", desc: "A dramatic 6-shade improvement in just one in-clinic session, completely rejuvenating his overall appearance.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { name: "Aisha's Makeover", cat: "Makeover", desc: "A combination of gum contouring and cosmetic bonding to fix uneven edges and correct a gummy smile.", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop" },
  { name: "Hassan's Repair", cat: "Veneers", desc: "Quick and minimally invasive repair of chipped front teeth using high-end, color-matched composite bonding.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" }
];

const storyCard = (s) => `
<div class="story-card" data-cat="${s.cat}">
  <div class="story-ba">
    <img src="${s.img}" class="b-img" alt="Before" loading="lazy">
    <img src="${s.img}" class="a-img" alt="After" loading="lazy">
    <em style="left:16px">Before</em>
    <em style="right:16px">After</em>
    <i></i>
    <input type="range" min="0" max="100" value="50" aria-label="Compare before and after">
  </div>
  <div class="story-content">
    <span class="story-cat">${s.cat}</span>
    <h3 class="story-title">${s.name}</h3>
    <p class="story-desc">${s.desc}</p>
    <a href="#" class="story-cta" onclick="bk.showModal(); return false;">Book similar treatment <i class="fa-solid fa-arrow-right"></i></a>
  </div>
</div>
`;

const wk=$("#wk");
const wkf=$("#wk-filters");
if(wk && wkf) {
  wk.innerHTML = WORK_DATA.map(storyCard).join("");
  const cats = ["All", ...new Set(WORK_DATA.map(x => x.cat))];
  wkf.innerHTML = cats.map((c,i) => `<button class="${i===0?'on':''}">${c}</button>`).join("");
  wkf.onclick = (e) => {
    if(e.target.tagName !== "BUTTON") return;
    [...wkf.children].forEach(b => b.classList.remove("on"));
    e.target.classList.add("on");
    const c = e.target.textContent;
    const cards = wk.querySelectorAll(".story-card");
    cards.forEach(card => {
      card.style.display = (c === "All" || card.dataset.cat === c) ? "block" : "none";
    });
  };
} else if (wk) {
  wk.innerHTML=["Teeth whitening","Veneers","Aligners","Cosmetic bonding","Gum contouring","Full smile makeover"].map(ba).join("");
}

document.addEventListener("input",e=>{
  if(e.target.closest(".ba")){
    const b=e.target.parentNode,v=e.target.value;
    b.querySelector(".a").style.clipPath=`inset(0 0 0 ${v}%)`;
    b.querySelector("i").style.left=v+"%";
  }
  if(e.target.closest(".story-ba")){
    const b=e.target.parentNode,v=e.target.value;
    b.querySelector(".a-img").style.clipPath=`inset(0 0 0 ${v}%)`;
    b.querySelector("i").style.left=v+"%";
  }
});

/* --- about: team --- */
set("#tm",[["Dr. Ayesha Khan","Lead Dentist &amp; Founder","BDS, MSc · Implants · RCT · Smile restoration","fa-user-doctor"],["Dr. Omar Siddiqui","Orthodontist","Aligners, braces &amp; bite correction · MOrth","fa-tooth"],["Dr. Sara Malik","Paediatric Dentist","Child dentistry &amp; prevention · BDS, MDS","fa-child"],["Sana Yousaf","Dental Hygienist","Scaling, whitening &amp; gum care","fa-spa"]].map(a=>`<div class="tmc"><div class="tmi"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#t"/></svg></div><div class="tmb"><h3>${a[0]}</h3><div class="rl"><i class="fa-solid ${a[3]}"></i> ${a[1]}</div><p>${a[2]}</p></div></div>`).join(""));

/* --- clinic: gallery, technology --- */
const pic=(k,t,g)=>`<div class="pic" style="--g:${IMG[k]?`url(${IMG[k]})`:g}"><svg viewBox="0 0 24 24"><use href="#t"/></svg><span>${t}</span></div>`;
set("#gal",[pic("reception","Reception and lounge","linear-gradient(135deg,#a8d5f2,#3B8FC9)"),pic("rooms","Treatment rooms","linear-gradient(135deg,#7fb6e0,#1E3A6E)"),pic("steril","Sterilisation suite","linear-gradient(135deg,#cfe9fb,#5aa5d8)"),pic("lounge","Kids' corner","linear-gradient(135deg,#9ad0f0,#2c78b4)")].join(""));
set("#tech",[["scan","Digital X-ray","Low radiation, instant results."],["tag","3D intraoral scanner","No messy impressions."],["zap","Laser dentistry","Gentler gum care, faster healing."]].map(a=>`<div class="card">${ic(a[0])}<h3>${a[1]}</h3><p>${a[2]}</p></div>`).join(""));

/* --- reviews: grid + carousel --- */
set("#rv",R.map(rvCard).join(""));
const cd=$("#cd");
if(cd){
  let ci=0,ct;
  const cs=i=>{ci=i;$("#cq").textContent="“"+R[i][1]+"”";$("#ca").textContent=R[i][0];cd.innerHTML=R.map((_,j)=>`<button class="${j==i?"on":""}" aria-label="Review ${j+1}" data-j="${j}"></button>`).join("")};
  cs(0);
  cd.onclick=e=>{if(e.target.dataset.j){cs(+e.target.dataset.j);clearInterval(ct)}};
  ct=setInterval(()=>cs((ci+1)%R.length),5500);
}

/* --- animated counters (home stats) --- */
const cnt=el=>{const n=parseFloat(el.dataset.count),sfx=el.dataset.suffix||"",dec=+(el.dataset.decimals||0),t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1600),v=n*(1-Math.pow(1-p,3));el.textContent=(dec?v.toFixed(dec):Math.round(v).toLocaleString())+sfx;if(p<1)requestAnimationFrame(f)})(t0)};
const cObs=$$("[data-count]").length&&"IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cnt(e.target);cObs.unobserve(e.target)}}),{threshold:.5}):null;
$$("[data-count]").forEach(el=>cObs?cObs.observe(el):cnt(el));

/* --- header, mobile nav, dark mode --- */
const mn=$("#mn"),nav=$("#nav");
if(mn&&nav){
  mn.onclick=()=>{const o=nav.classList.toggle("open");$("header").classList.toggle("mo",o);mn.setAttribute("aria-expanded",o)};
  nav.onclick=()=>{nav.classList.remove("open");$("header").classList.remove("mo")};
}
addEventListener("scroll",()=>$("header").classList.toggle("sc",scrollY>24),{passive:true});
const th=$("#th");
if(th)th.onclick=()=>{const r=document.documentElement,next=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0b1526"?"light":"dark";r.dataset.theme=next;try{localStorage.setItem("theme",next)}catch(e){}};

/* --- booking form --- */
const go=$("#go");
if(go)go.onclick=()=>{const n=$("#n").value.trim(),p=$("#p").value.trim(),d=$("#d").value;$("#e1").textContent=n?"":"Enter your name.";$("#e2").textContent=/^[+\d\s-]{7,}$/.test(p)?"":"Enter a valid phone number.";$("#e3").textContent=d?"":"Choose a date.";if(n&&/^[+\d\s-]{7,}$/.test(p)&&d){$("#bf").hidden=true;$("#ok").hidden=false}};