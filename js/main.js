// 單身獸爺的退休生活攻略 — main.js
// 目前僅用於「人生清單 Bucket List」頁面的打勾記錄（localStorage）。

const CHECKLIST_STORAGE_KEY = 'sbrp_bucket_list_checked';

function loadCheckedSet() {
  try {
    const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCheckedSet(set) {
  localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify([...set]));
}

function updateProgress() {
  const items = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  const progressText = document.getElementById('checklistProgressText');
  const progressFill = document.getElementById('checklistProgressFill');
  if (!items.length || !progressText || !progressFill) return;

  const total = items.length;
  const done = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  progressText.textContent = `已完成 ${done} / ${total} 項（${pct}%）`;
  progressFill.style.width = `${pct}%`;
}

function initChecklist() {
  const items = document.querySelectorAll('.checklist-item');
  if (!items.length) return;

  const checked = loadCheckedSet();

  items.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const id = item.getAttribute('data-id');
    if (!checkbox || !id) return;

    if (checked.has(id)) {
      checkbox.checked = true;
      item.classList.add('checked');
    }

    checkbox.addEventListener('change', () => {
      const set = loadCheckedSet();
      if (checkbox.checked) {
        set.add(id);
        item.classList.add('checked');
      } else {
        set.delete(id);
        item.classList.remove('checked');
      }
      saveCheckedSet(set);
      updateProgress();
    });
  });

  updateProgress();
}

// Highlight active sidebar link while scrolling through sections.
function initSidebarScrollSpy() {
  const links = document.querySelectorAll('.page-sidebar .sidebar-link[href^="#"]');
  if (!links.length) return;

  const sections = [...links]
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-100px 0px -60% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
  initChecklist();
  initSidebarScrollSpy();
});
