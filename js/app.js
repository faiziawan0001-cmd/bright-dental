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

/* Responsive images: the Unsplash URLs already carry a w= parameter, so one
   source becomes several widths without adding any new asset. Declared up here
   because the card templates below are called before the slider section runs. */
const srcset=u=>{if(!u)return"";const p=u.replace(/([?&]w=)\d+/,"$1{W}");return [400,600,900,1200].map(w=>p.replace("{W}",w)+" "+w+"w").join(", ")};
const SRV_SIZES="(max-width:560px) 90vw, (max-width:820px) 46vw, 340px";
const WK_SIZES="(max-width:600px) 90vw, (max-width:1024px) 46vw, 420px";

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
  let media = img ? '<div class="svc-media"><img src="'+img+'" srcset="'+srcset(img)+'" sizes="'+SRV_SIZES+'" alt="'+a[0]+' at Bright Smiles Dental Clinic" loading="lazy" decoding="async" width="1200" height="675"><span class="svc-tag">'+a[1]+'</span></div>' : '<div class="svc-media"><div class="svc-fallback">'+ic(a[5])+'</div><span class="svc-tag">'+a[1]+'</span></div>';
  return '<div class="card svc h" style="cursor:pointer" tabindex="0" role="button" aria-haspopup="dialog" data-i="'+i+'">'+media+'<div class="svc-body"><h3>'+a[0]+'</h3><p>'+a[2]+'</p><div class="svc-meta"><span class="svc-price">From Rs '+price+'</span><span class="svc-link">View details <i class="fa-solid fa-arrow-right"></i></span></div></div></div>';
};

/* Dialog helpers. Calling showModal() on an already-open <dialog> throws, and
   every "Book" button on the site routes through here. */
const openDialog=d=>{
  if(!d||d.open)return;
  /* Always start from a clean form. Done on open rather than on the dialog's
     close event, which is not dispatched consistently. */
  const form=$("#bf"),ok=$("#ok");
  if(form)form.hidden=false;
  if(ok)ok.hidden=true;
  if(d.showModal)d.showModal();else d.setAttribute("open","");
  /* No scroll-lock class here on purpose: the close event is unreliable, and
     a class left behind would freeze the page for good. The
     html:has(dialog:modal) rule in the stylesheet handles it instead. */
};
const closeDialog=d=>{if(!d||!d.open)return;if(d.close)d.close();else d.removeAttribute("open")};
/* Service currently open in the #sd details modal. Carried over to the booking
   form (pre-selected dropdown) and to the WhatsApp deep link by the modal CTAs. */
let sdSvc="";
window.openBooking=svc=>{
  const sel=$("#s");
  if(sel&&svc&&[...sel.options].some(o=>o.value===svc))sel.value=svc;
  openDialog(document.getElementById("bk"));
};
window.closeDialog=closeDialog;
/* Details modal -> booking form, with that service pre-selected. */
window.bookService=()=>{closeDialog(document.getElementById("sd"));openBooking(sdSvc)};

const open=e=>{const c=e.target.closest("[data-i]");if(!c)return;const a=S[c.dataset.i];if(!a)return;set("#sb",`<h2>${a[0]}</h2><p>${a[2]}</p><p><b>Duration:</b> ${a[3]}</p><h3>Steps</h3><div class="tl">${a[6].map(x=>`<p>${x}</p>`).join("")}</div><details open><summary>${a[7][0]}</summary><p>${a[7][1]}</p></details>`);sdSvc=a[0];const wa=$("#sd-wa");if(wa)wa.href="https://wa.me/923211048740?text="+encodeURIComponent("Hi! I would like to book an appointment for "+a[0]);openDialog(document.getElementById("sd"))};

/* --- home: featured services, why-us, before/after, reviews --- */
set("#svp",S.slice(0,6).map(card).join(""));
const svp=$("#svp");if(svp)svp.onclick=open;
set("#why",[["heart","Gentle, pain-free care","Modern anaesthesia and a calm approach."],["tag","Clear pricing","See the full cost before treatment."],["clock","Same-week visits","Urgent slots open every day."],["shield","Strict sterilisation","Hospital-grade protocols throughout."]].map(a=>`<div class="card">${ic(a[0])}<h3>${a[1]}</h3><p>${a[2]}</p></div>`).join(""));

/* --- services: filters, grid, cost estimator --- */
const tb=$("#tb"),sv=$("#sv");
if(tb&&sv){
  const cats=["All",...new Set(S.map(x=>x[1]))];
  tb.innerHTML=cats.map((c,i)=>`<button type="button" class="${i?"":"on"}">${c}</button>`).join("");
  const show=c=>{sv.innerHTML=S.map((a,i)=>[a,i]).filter(([a])=>c=="All"||a[1]==c).map(([a,i])=>card(a,i)).join("")};
  show("All");
  sv.onclick=open;
  tb.onclick=e=>{if(e.target.tagName!=="BUTTON")return;[...tb.children].forEach(b=>b.classList.remove("on"));e.target.classList.add("on");show(e.target.textContent)};
}
/* The "Service" dropdown lives in the booking dialog, which is on every page —
   so it has to be filled on every page, not just the services page. */
const svcSel=$("#s");
if(svcSel)svcSel.innerHTML=S.map(x=>`<option>${x[0]}</option>`).join("");
const esSel=$("#es"),eq=$("#eq"),ev=$("#ev"),eo=$("#eo");
if(esSel&&eq&&ev&&eo){
  esSel.innerHTML=S.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join("");
  const est=()=>{const a=S[esSel.value];if(!a)return;const q=+eq.value||1;ev.textContent=q;eo.textContent="Rs "+(a[4]*q*100).toLocaleString()+" – Rs "+(a[4]*q*140).toLocaleString()};
  esSel.onchange=eq.oninput=est;est();
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
    <img src="${s.img}" srcset="${srcset(s.img)}" sizes="${WK_SIZES}" class="b-img" alt="Before" loading="lazy" decoding="async" width="1200" height="900">
    <img src="${s.img}" srcset="${srcset(s.img)}" sizes="${WK_SIZES}" class="a-img" alt="After" loading="lazy" decoding="async" width="1200" height="900">
    <em style="left:16px">Before</em>
    <em style="right:16px">After</em>
    <i></i>
    <input type="range" min="0" max="100" value="50" aria-label="Compare before and after of ${s.name}">
  </div>
  <div class="story-content">
    <span class="story-cat">${s.cat}</span>
    <h3 class="story-title">${s.name}</h3>
    <p class="story-desc">${s.desc}</p>
    <a href="#book" class="story-cta" onclick="openBooking(); return false;">Book similar treatment <i class="fa-solid fa-arrow-right"></i></a>
  </div>
</div>
`;

const wk=$("#wk");
const wkf=$("#wk-filters");
if(wk && wkf) {
  wk.innerHTML = WORK_DATA.map(storyCard).join("");
  const cats = ["All", ...new Set(WORK_DATA.map(x => x.cat))];
  wkf.innerHTML = cats.map((c,i) => `<button type="button" class="${i===0?'on':''}">${c}</button>`).join("");
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

/* --- home: smile gallery teaser (explore-style image cards) --------------- */
const wkHome=$("#wk-home");
if(wkHome){
  const teaser=WORK_DATA.slice(0,3);
  wkHome.innerHTML=teaser.map(s=>{
    const line=(s.desc.split(".")[0]||s.desc).trim()+".";
    return `<a href="work.html" class="smile-card js-rev">
      <img src="${s.img}" srcset="${srcset(s.img)}" sizes="${WK_SIZES}" alt="${s.name} — ${s.cat} result at Bright Smiles Dental Clinic" loading="lazy" decoding="async" width="1200" height="900">
      <div class="smile-ov">
        <h3>${s.name}</h3>
        <p>${line}</p>
      </div>
    </a>`;
  }).join("");
}
/* Reference-style scroll reveal: sections rise into place as they enter view. */
const revs=$$(".js-rev");
if(revs.length){
  if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
    const rObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rObs.unobserve(e.target)}}),{threshold:.15,rootMargin:"0px 0px -40px 0px"});
    revs.forEach(el=>rObs.observe(el));
  }else{
    revs.forEach(el=>el.classList.add("in"));
  }
}

/* --- before/after slider behaviour (mouse, touch and keyboard) ------------ */
/* The slider is a real <input type="range"> stretched over the whole frame, so
   it stays keyboard and screen-reader friendly for free. CSS gives it
   touch-action:pan-y, which means a vertical swipe still scrolls the page while
   a horizontal drag moves the divider. */
const syncBA=(box,v)=>{
  if(!box)return;
  const layer=box.querySelector(".a,.a-img,.ec-a"),handle=box.querySelector("i");
  if(layer)layer.style.clipPath=`inset(0 0 0 ${v}%)`;
  if(handle)handle.style.left=v+"%";
};
document.addEventListener("input",e=>{
  const t=e.target;
  if(!t||t.tagName!=="INPUT"||t.type!=="range")return;
  const box=t.closest(".ba,.story-ba,.explore-card-ba");
  if(!box)return;
  syncBA(box,t.value);
},true);
/* Tapping the frame focuses the range first — some mobile browsers only start
   tracking the drag once the control has focus. No preventDefault(), so the
   page keeps its normal vertical scroll. */
document.addEventListener("pointerdown",e=>{
  const t=e.target;
  if(!t||t.tagName==="INPUT")return;
  const box=t.closest(".ba,.story-ba,.explore-card-ba");
  if(!box)return;
  const r=box.querySelector('input[type="range"]');
  if(r)r.focus({preventScroll:true});
},{passive:true});

/* --- about: team --- */
set("#tm",[["Dr. Ayesha Khan","Lead Dentist &amp; Founder","BDS, MSc · Implants · RCT · Smile restoration","fa-user-doctor"],["Dr. Omar Siddiqui","Orthodontist","Aligners, braces &amp; bite correction · MOrth","fa-tooth"],["Dr. Sara Malik","Paediatric Dentist","Child dentistry &amp; prevention · BDS, MDS","fa-child"],["Sana Yousaf","Dental Hygienist","Scaling, whitening &amp; gum care","fa-spa"]].map(a=>`<div class="tmc"><div class="tmi"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#t"/></svg></div><div class="tmb"><h3>${a[0]}</h3><div class="rl"><i class="fa-solid ${a[3]}"></i> ${a[1]}</div><p>${a[2]}</p></div></div>`).join(""));

/* --- clinic: gallery, technology --- */
const pic=(k,t,g)=>`<div class="pic" style="--g:${IMG[k]?`url(${IMG[k]})`:g}"><svg viewBox="0 0 24 24"><use href="#t"/></svg><span>${t}</span></div>`;
set("#gal",[pic("reception","Reception and lounge","linear-gradient(135deg,#a8d5f2,#3B8FC9)"),pic("rooms","Treatment rooms","linear-gradient(135deg,#7fb6e0,#1E3A6E)"),pic("steril","Sterilisation suite","linear-gradient(135deg,#cfe9fb,#5aa5d8)"),pic("lounge","Kids' corner","linear-gradient(135deg,#9ad0f0,#2c78b4)")].join(""));
set("#tech",[["scan","Digital X-ray","Low radiation, instant results."],["tag","3D intraoral scanner","No messy impressions."],["zap","Laser dentistry","Gentler gum care, faster healing."]].map(a=>`<div class="card">${ic(a[0])}<h3>${a[1]}</h3><p>${a[2]}</p></div>`).join(""));

/* --- testimonials: single pausable, labelled carousel --- */

const tc=$("#testimonials-carousel");
if(tc){
  const N=R.length;
  tc.setAttribute('role','region');
  tc.setAttribute('aria-roledescription','carousel');
  tc.setAttribute('aria-label','Patient testimonials');
  const stars=`<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`.repeat(5);
  tc.innerHTML = R.map((r,i) => {
    const init = r[0].split(' ').map(n=>n[0]).join('');
    return `<div class="testimonial-card ${i===0?'active':''}" data-idx="${i}" role="group" aria-roledescription="slide" aria-label="Testimonial ${i+1} of ${N}">
      <div class="testimonial__stars" aria-hidden="true">${stars}</div>
      <blockquote class="testimonial__quote">"${r[1]}"</blockquote>
      <div class="testimonial__author">
        <div class="testimonial__avatar" aria-hidden="true">${init}</div>
        <div class="testimonial__meta">
          <div class="testimonial__name">${r[0]}</div>
          <div class="testimonial__role">Verified Patient</div>
        </div>
      </div>
    </div>`;
  }).join("") + `
    <div class="testimonials__controls">
      <button type="button" class="testimonials__ctrl-btn" id="t-prev" aria-label="Previous testimonial"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
      <div class="testimonials__dots">
        ${R.map((_,i)=>`<button type="button" class="testimonials__dot ${i===0?'active':''}" data-dot="${i}" aria-label="Show testimonial ${i+1} of ${N}"${i===0?' aria-current="true"':''}></button>`).join('')}
      </div>
      <button type="button" class="testimonials__ctrl-btn" id="t-next" aria-label="Next testimonial"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
      <button type="button" class="testimonials__ctrl-btn" id="t-toggle" aria-label="Pause automatic rotation"><i class="fa-solid fa-pause" aria-hidden="true"></i></button>
    </div>
    <p class="sr-only" aria-live="polite"></p>
  `;
  let ci=0, ct=null, userPaused=false, hovered=false, focused=false;
  const cards = tc.querySelectorAll('.testimonial-card');
  const dots = tc.querySelectorAll('.testimonials__dot');
  const toggle = tc.querySelector('#t-toggle');
  const live = tc.querySelector('.sr-only');
  const stop = () => { if(ct){ clearInterval(ct); ct=null; } };
  const shouldRun = () => !userPaused && !hovered && !focused;
  const start = () => { stop(); if(shouldRun()) ct = setInterval(()=>go(ci+1), 5500); };
  const setPaused = (p) => {
    userPaused = p;
    toggle.setAttribute('aria-label', p ? 'Resume automatic rotation' : 'Pause automatic rotation');
    toggle.querySelector('i').className = 'fa-solid fa-' + (p ? 'play' : 'pause');
    start();
  };
  const go = (i) => {
    if(i<0) i=N-1; if(i>=N) i=0; ci=i;
    cards.forEach((c,j) => c.classList.toggle('active', j===ci));
    dots.forEach((d,j) => {
      d.classList.toggle('active', j===ci);
      if(j===ci) d.setAttribute('aria-current','true'); else d.removeAttribute('aria-current');
    });
    live.textContent = 'Testimonial ' + (ci+1) + ' of ' + N;
    start();
  };
  tc.addEventListener('click', (e) => {
    if(e.target.closest('#t-prev')) return go(ci-1);
    if(e.target.closest('#t-next')) return go(ci+1);
    if(e.target.closest('#t-toggle')) return setPaused(!userPaused);
    const dot = e.target.closest('.testimonials__dot');
    if(dot) go(+dot.dataset.dot);
  });
  tc.addEventListener('keydown', (e) => {
    if(e.key==='ArrowLeft')  { e.preventDefault(); go(ci-1); }
    if(e.key==='ArrowRight') { e.preventDefault(); go(ci+1); }
  });
  /* Don't rotate out from under someone who is reading, hovering or tabbing. */
  tc.addEventListener('mouseenter', () => { hovered=true;  start(); });
  tc.addEventListener('mouseleave', () => { hovered=false; start(); });
  tc.addEventListener('focusin',   () => { focused=true;  start(); });
  tc.addEventListener('focusout',  (e) => { if(!tc.contains(e.relatedTarget)){ focused=false; start(); } });
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
  else start();
  live.textContent = 'Testimonial 1 of ' + N;
}

/* --- animated counters (home stats) --- */
const cnt=el=>{const n=parseFloat(el.dataset.count),sfx=el.dataset.suffix||"",dec=+(el.dataset.decimals||0),t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1600),v=n*(1-Math.pow(1-p,3));el.textContent=(dec?v.toFixed(dec):Math.round(v).toLocaleString())+sfx;if(p<1)requestAnimationFrame(f)})(t0)};
const cObs=$$("[data-count]").length&&"IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cnt(e.target);cObs.unobserve(e.target)}}),{threshold:.5}):null;
$$("[data-count]").forEach(el=>cObs?cObs.observe(el):cnt(el));

/* --- header, mobile nav, dark mode --- */
const hdr=document.querySelector("header"),mn=$("#mn"),nav=$("#nav");
const NAV_MQ=matchMedia("(max-width: 980px)");
if(mn&&nav&&hdr){
  mn.setAttribute("aria-controls","nav");
  mn.setAttribute("aria-label","Open menu");
  const setMenu=o=>{
    nav.classList.toggle("open",o);
    hdr.classList.toggle("mo",o);
    mn.setAttribute("aria-expanded",o?"true":"false");
    mn.setAttribute("aria-label",o?"Close menu":"Open menu");
    /* Stop the page scrolling behind the open menu. */
    document.documentElement.classList.toggle("lock",o);
  };
  mn.onclick=()=>setMenu(!nav.classList.contains("open"));
  /* Close when a link is tapped. */
  nav.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
  /* Escape closes it and returns focus to the button that opened it. */
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"&&nav.classList.contains("open")){setMenu(false);mn.focus()}
  });
  /* Close on outside tap and when the layout goes back to desktop. */
  document.addEventListener("click",e=>{
    if(nav.classList.contains("open")&&!hdr.contains(e.target))setMenu(false);
  });
  NAV_MQ.addEventListener&&NAV_MQ.addEventListener("change",e=>{if(!e.matches)setMenu(false)});
  addEventListener("resize",()=>{if(!NAV_MQ.matches)setMenu(false)},{passive:true});
}
/* Anything marked role="button" that is not a real button must still work
   with Enter and Space (service cards, video cards). */
document.addEventListener("keydown",e=>{
  if(e.key!=="Enter"&&e.key!==" "&&e.key!=="Spacebar")return;
  const t=e.target.closest&&e.target.closest('[role="button"]');
  if(!t||t.tagName==="BUTTON"||t.tagName==="A")return;
  e.preventDefault();
  t.click();
});
if(hdr)addEventListener("scroll",()=>hdr.classList.toggle("sc",scrollY>24),{passive:true});
const th=$("#th");
if(th){
  th.setAttribute("aria-pressed",document.documentElement.dataset.theme==="dark"?"true":"false");
  th.onclick=()=>{const r=document.documentElement,next=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0b1526"?"light":"dark";r.dataset.theme=next;th.setAttribute("aria-pressed",next==="dark"?"true":"false");try{localStorage.setItem("theme",next)}catch(e){}};
}

/* --- booking form --- */
const bkDlg=$("#bk"),bf=$("#bf"),sent=$("#ok"),goBtn=$("#go");
if(goBtn){
  const nIn=$("#n"),pIn=$("#p"),dIn=$("#d"),e1=$("#e1"),e2=$("#e2"),e3=$("#e3");
  const validPhone=v=>/^[+\d\s-]{7,}$/.test(v);
  const submit=()=>{
    if(!nIn||!pIn||!dIn)return;
    const n=nIn.value.trim(),p=pIn.value.trim(),d=dIn.value;
    if(e1)e1.textContent=n?"":"Enter your name.";
    if(e2)e2.textContent=validPhone(p)?"":"Enter a valid phone number.";
    if(e3)e3.textContent=d?"":"Choose a date.";
    if(n&&validPhone(p)&&d){if(bf)bf.hidden=true;if(sent)sent.hidden=false;}
  };
  goBtn.onclick=submit;
  /* Enter anywhere in the booking form submits it. */
  if(bf)bf.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.tagName!=="TEXTAREA"){e.preventDefault();submit()}});
}