document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      siteNav.classList.toggle('open');
    });
  }

  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const panel = trigger.nextElementSibling;
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 24 + 'px';
      }
    });
  });

  const qrContainer = document.getElementById('qr-placeholder');
  if (qrContainer) {
    qrContainer.innerHTML = `
      <svg viewBox="0 0 120 120" width="140" height="140" role="img" aria-label="Local Clinic Directory QR Code">
        <rect width="120" height="120" rx="8" fill="#FAF8F8" stroke="#B38697" stroke-width="2"/>
        <rect x="14" y="14" width="28" height="28" fill="none" stroke="#5A3D39" stroke-width="5"/>
        <rect x="22" y="22" width="12" height="12" fill="#86525A"/>
        <rect x="78" y="14" width="28" height="28" fill="none" stroke="#5A3D39" stroke-width="5"/>
        <rect x="86" y="22" width="12" height="12" fill="#86525A"/>
        <rect x="14" y="78" width="28" height="28" fill="none" stroke="#5A3D39" stroke-width="5"/>
        <rect x="22" y="86" width="12" height="12" fill="#86525A"/>
        <rect x="52" y="16" width="8" height="8" fill="#5A3D39"/>
        <rect x="62" y="26" width="8" height="16" fill="#86525A"/>
        <rect x="50" y="50" width="20" height="20" rx="4" fill="#E6B8C8"/>
        <path d="M60 65 C55 60 52 57 52 54 A4 4 0 0 1 60 53 A4 4 0 0 1 68 54 C68 57 65 60 60 65 Z" fill="#86525A"/>
        <rect x="16" y="52" width="16" height="8" fill="#5A3D39"/>
        <rect x="80" y="52" width="10" height="18" fill="#5A3D39"/>
        <rect x="96" y="56" width="10" height="10" fill="#86525A"/>
        <rect x="52" y="80" width="14" height="8" fill="#5A3D39"/>
        <rect x="74" y="78" width="12" height="12" fill="#86525A"/>
        <rect x="92" y="86" width="14" height="20" fill="#5A3D39"/>
        <rect x="54" y="96" width="12" height="10" fill="#86525A"/>
      </svg>
    `;
  }
});