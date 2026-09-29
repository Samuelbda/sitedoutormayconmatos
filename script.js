/**
 * ==========================================================================
 * LÓGICA E INTERATIVIDADE - MAYCON MATOS 1078
 * PURE VANILLA JAVASCRIPT
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Alternância de Menu Mobile
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Efeito de Scroll no Header Fixo
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Copiar Número 1078 com Toast
  const toast = document.getElementById('toast');
  window.copyNumber = function(numberStr) {
    navigator.clipboard.writeText(numberStr).then(() => {
      showToast(`Número ${numberStr} copiado com sucesso!`);
    }).catch(() => {
      showToast(`Número para votar: ${numberStr}`);
    });
  };

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2500);
  }

  // 4. Modal Lightbox de Zoom nos Cartazes
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  window.openModal = function(imageSrc, titleText) {
    if (modalOverlay && modalImage && modalTitle) {
      modalImage.src = imageSrc;
      modalTitle.textContent = titleText;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Fechar modal com a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
