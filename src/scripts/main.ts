/**
 * Interactions du site — vanilla, sans dépendance.
 * Tout est amélioration progressive : sans JavaScript, le site reste lisible et navigable.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel)) as T[];

/* ---------- Révélations au scroll ---------- */
function initReveal() {
  const items = $$('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Découpe les titres « lines » : chaque ligne marquée .line reçoit son index.
  $$('[data-reveal="lines"]').forEach((el) => {
    $$('.line', el).forEach((line, i) => line.style.setProperty('--l', String(i)));
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- En-tête : se masque en descendant, réapparaît en remontant ---------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const progress = document.querySelector<HTMLElement>('[data-progress]');
  const fab = document.querySelector<HTMLElement>('[data-fab]');
  const contact = document.querySelector('#contact');
  let last = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const delta = y - last;
    header.classList.toggle('is-solid', y > 40);
    if (Math.abs(delta) > 6) {
      header.classList.toggle('is-hidden', delta > 0 && y > window.innerHeight * 0.6 && !document.body.classList.contains('menu-open'));
      last = y;
    }
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty('--p', String(max > 0 ? Math.min(1, y / max) : 0));
    }
    if (fab) {
      const nearContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 1.1 : false;
      fab.classList.toggle('is-on', y > window.innerHeight * 0.8 && !nearContact);
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}

/* ---------- Menu mobile (focus piégé, Échap, retour au bouton) ---------- */
function initMenu() {
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  if (!menu || !openBtn || !closeBtn) return;

  const focusables = () => $$<HTMLElement>('a, button', menu);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = focusables();
      const first = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
    }
  };
  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
    document.addEventListener('keydown', onKey);
  };
  const close = () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKey);
    window.setTimeout(() => { menu.hidden = true; }, reduceMotion ? 0 : 300);
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  $$('a', menu).forEach((a) => a.addEventListener('click', () => { document.body.style.overflow = ''; }));
}

/* ---------- Curseur personnalisé (souris uniquement, mouvement autorisé) ---------- */
function initCursor() {
  if (!finePointer || reduceMotion) return;
  const dot = document.createElement('div');
  dot.className = 'cursor';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);
  document.documentElement.classList.add('has-cursor');

  let x = -100, y = -100, cx = -100, cy = -100;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  const loop = () => {
    cx += (x - cx) * 0.22;
    cy += (y - cy) * 0.22;
    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.addEventListener('pointerover', (e) => {
    const t = (e.target as Element).closest('[data-cursor], a, button, input, textarea, select, label');
    dot.classList.remove('is-link', 'is-label', 'is-text');
    dot.textContent = '';
    if (!t) return;
    const label = t.getAttribute('data-cursor');
    if (label) {
      dot.classList.add('is-label');
      dot.textContent = label;
    } else if (t.matches('input, textarea, select')) {
      dot.classList.add('is-text');
    } else {
      dot.classList.add('is-link');
    }
  });
  document.addEventListener('pointerleave', () => { x = -100; y = -100; });
}

/* ---------- Aperçu image qui suit le pointeur (listes) ---------- */
function initHoverPreview() {
  if (!finePointer) return;
  $$('[data-hover-list]').forEach((list) => {
    const preview = list.querySelector<HTMLElement>('[data-hover-preview]');
    if (!preview) return;
    const imgs = $$<HTMLElement>('[data-preview-key]', preview);
    let tx = 0, ty = 0, px = 0, py = 0, raf = 0;
    const loop = () => {
      px += (tx - px) * 0.16;
      py += (ty - py) * 0.16;
      preview.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    $$('[data-hover-item]', list).forEach((item) => {
      item.addEventListener('pointerenter', () => {
        const key = item.getAttribute('data-hover-item');
        imgs.forEach((img) => img.classList.toggle('is-on', img.dataset.previewKey === key));
        preview.classList.add('is-on');
        if (!raf && !reduceMotion) loop();
      });
      item.addEventListener('pointerleave', () => preview.classList.remove('is-on'));
    });
    list.addEventListener('pointermove', (e) => {
      const r = list.getBoundingClientRect();
      tx = (e as PointerEvent).clientX - r.left;
      ty = (e as PointerEvent).clientY - r.top;
      if (reduceMotion) { px = tx; py = ty; preview.style.transform = `translate3d(${px}px, ${py}px, 0)`; }
    });
  });
}

/* ---------- Bande horizontale pilotée par le scroll (desktop) ---------- */
function initBands() {
  const desktop = window.matchMedia('(min-width: 1024px)');
  const bands = $$('[data-band]');
  if (!bands.length) return;
  let ticking = false;
  const update = () => {
    bands.forEach((band) => {
      const track = band.querySelector<HTMLElement>('[data-band-track]');
      if (!track) return;
      if (!desktop.matches || reduceMotion) {
        band.style.height = '';
        track.style.transform = '';
        return;
      }
      const overflow = Math.max(0, track.scrollWidth - track.clientWidth);
      band.style.height = `${window.innerHeight + overflow}px`;
      const r = band.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -r.top / Math.max(1, overflow)));
      track.style.transform = `translate3d(${-progress * overflow}px, 0, 0)`;
    });
    ticking = false;
  };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  desktop.addEventListener('change', req);
  update();
}

/* ---------- Vidéos : lecture quand visibles, pause sinon, bouton pause accessible ---------- */
function initVideos() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const videos = $$<HTMLVideoElement>('video[data-autoplay-visible]');
  const autoplay = !reduceMotion && !saveData;
  const setLabel = (btn: HTMLButtonElement | null, playing: boolean) => {
    if (!btn) return;
    btn.innerHTML = playing ? '<span aria-hidden="true">❚❚</span> Pause' : '<span aria-hidden="true">▶</span> Lire';
  };
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (v.dataset.userPaused === 'true') return;
          if (e.isIntersecting) {
            if (v.preload === 'none') v.preload = 'auto';
            v.play().catch(() => {});
          } else v.pause();
        });
      }, { threshold: 0.25 })
    : null;
  videos.forEach((v) => {
    const scope = v.closest('[data-video-scope]') ?? v.parentElement;
    const btn = scope?.querySelector<HTMLButtonElement>('[data-video-toggle]') ?? null;
    v.addEventListener('play', () => setLabel(btn, true));
    v.addEventListener('pause', () => setLabel(btn, false));
    setLabel(btn, false);
    if (autoplay && io) io.observe(v);
    btn?.addEventListener('click', () => {
      if (v.paused) { v.dataset.userPaused = 'false'; v.play().catch(() => {}); }
      else { v.dataset.userPaused = 'true'; v.pause(); }
    });
  });
}

/* ---------- Visionneuse d'images ---------- */
function initLightbox() {
  const dlg = document.querySelector<HTMLDialogElement>('[data-lb]');
  if (!dlg) return;
  const img = dlg.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const cap = dlg.querySelector<HTMLElement>('[data-lb-cap]')!;
  const count = dlg.querySelector<HTMLElement>('[data-lb-count]')!;
  let group: HTMLElement[] = [];
  let index = 0;
  let opener: HTMLElement | null = null;

  const show = (i: number) => {
    index = (i + group.length) % group.length;
    const el = group[index];
    img.src = el.dataset.full ?? '';
    img.alt = el.dataset.alt ?? '';
    cap.textContent = el.dataset.alt ?? '';
    count.textContent = `${index + 1} / ${group.length}`;
  };
  document.addEventListener('click', (e) => {
    const trigger = (e.target as Element).closest<HTMLElement>('[data-lightbox]');
    if (!trigger) return;
    e.preventDefault();
    group = $$<HTMLElement>(`[data-lightbox="${trigger.dataset.lightbox}"]`);
    opener = trigger;
    show(group.indexOf(trigger));
    dlg.showModal();
  });
  dlg.querySelector('[data-lb-close]')?.addEventListener('click', () => dlg.close());
  dlg.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(index - 1));
  dlg.querySelector('[data-lb-next]')?.addEventListener('click', () => show(index + 1));
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  dlg.addEventListener('close', () => opener?.focus());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  let startX = 0;
  dlg.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });
}

/* ---------- Index des projets : filtres (URL partageable) et vue images / liste ---------- */
function initFilters() {
  const root = document.querySelector<HTMLElement>('[data-filters]');
  if (!root) return;
  const buttons = $$<HTMLButtonElement>('[data-filter]', root);
  const items = $$<HTMLElement>('[data-tags]');
  const apply = (value: string, push: boolean) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === value)));
    let shown = 0;
    items.forEach((it) => {
      const ok = value === 'tout' || (it.dataset.tags ?? '').split(' ').includes(value);
      it.hidden = !ok;
      if (ok) shown++;
    });
    const status = document.querySelector('[data-filter-status]');
    if (status) status.textContent = `${shown} projet${shown > 1 ? 's' : ''} affiché${shown > 1 ? 's' : ''}`;
    if (push) {
      const url = new URL(window.location.href);
      if (value === 'tout') url.searchParams.delete('filtre');
      else url.searchParams.set('filtre', value);
      history.replaceState(null, '', url);
    }
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter ?? 'tout', true)));
  const initial = new URLSearchParams(window.location.search).get('filtre');
  if (initial && buttons.some((b) => b.dataset.filter === initial)) apply(initial, false);

  const views = $$<HTMLButtonElement>('[data-view]');
  const container = document.querySelector<HTMLElement>('[data-view-container]');
  views.forEach((v) => v.addEventListener('click', () => {
    views.forEach((o) => o.setAttribute('aria-pressed', String(o === v)));
    container?.setAttribute('data-mode', v.dataset.view ?? 'images');
    try { localStorage.setItem('kf-vue', v.dataset.view ?? 'images'); } catch { /* stockage indisponible */ }
  }));
  try {
    const saved = localStorage.getItem('kf-vue');
    if (saved) views.find((v) => v.dataset.view === saved)?.click();
  } catch { /* stockage indisponible */ }
}

/* ---------- Formulaire de contact (envoi sans rechargement, repli HTML natif) ---------- */
function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const label = submit.querySelector('[data-submit-label]')!;
  const started = form.querySelector<HTMLInputElement>('input[name="started"]');
  if (started) started.value = String(Date.now());

  // Puces d'objet → champ caché (mobile et desktop partagent la même source)
  $$<HTMLInputElement>('input[name="objet"]', form).forEach((r) => r.addEventListener('change', () => form.querySelector('[data-objet-error]')?.replaceChildren()));

  const fieldError = (name: string, msg: string) => {
    const input = form.querySelector<HTMLElement>(`[name="${name}"]`);
    const err = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    if (err) err.textContent = msg;
    input?.closest('.field')?.classList.toggle('is-invalid', Boolean(msg));
    input?.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };
  const validate = () => {
    let ok = true;
    const fd = new FormData(form);
    const nom = String(fd.get('nom') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    fieldError('nom', nom.length >= 2 ? '' : 'Ce champ est nécessaire.');
    if (nom.length < 2) ok = false;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    fieldError('email', email ? (emailOk ? '' : 'Adresse email invalide.') : 'Ce champ est nécessaire.');
    if (!emailOk) ok = false;
    fieldError('message', message.length >= 10 ? '' : 'Votre message doit contenir au moins 10 caractères.');
    if (message.length < 10) ok = false;
    return ok;
  };
  $$<HTMLInputElement>('input, textarea', form).forEach((el) => {
    el.addEventListener('blur', () => { if (el.value) validate(); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form-status';
    if (!validate()) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    submit.disabled = true;
    label.textContent = 'Envoi…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        form.reset();
        if (started) started.value = String(Date.now());
        status.classList.add('is-ok');
        status.textContent = 'Message envoyé. Merci, je reviens vers vous rapidement.';
        label.textContent = 'Message envoyé ✓';
      } else {
        throw new Error(data.error || 'erreur');
      }
    } catch (err) {
      status.classList.add('is-error');
      const fallback = form.dataset.fallback;
      status.textContent = `L'envoi n'a pas abouti. Réessayez${fallback ? `, ou écrivez directement à ${fallback}` : ' dans quelques instants'}.`;
      label.textContent = 'Envoyer le message';
    } finally {
      submit.disabled = false;
      status.focus();
    }
  });
}

initReveal();
initHeader();
initMenu();
initCursor();
initHoverPreview();
initBands();
initVideos();
initLightbox();
initFilters();
initContactForm();
