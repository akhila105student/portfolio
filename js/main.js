/**
 * Main Interactions & UI Logic
 * Akhila Developer Portfolio
 */
(function () {
  'use strict';

  // --- 1. Toast Notification Engine ---
  const toastContainer = document.getElementById('toast-container');

  window.showToastNotification = function (message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconSvg = `
      <svg style="width: 18px; height: 18px; stroke: var(--cyan-accent); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      iconSvg = `
        <svg style="width: 18px; height: 18px; stroke: #34d399; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Trigger entrance
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.8 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 350);
    }, 3800);
  };

  // --- 2. Sticky Navbar & Scrollspy ---
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Scrollspy via IntersectionObserver
  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => scrollSpyObserver.observe(section));

  // --- 3. Mobile Navigation Drawer ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Escape key closes modals and drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });

  // --- 4. Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- 5. Interactive Project Details Modal ---
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalKeyPoints = document.getElementById('modal-key-points');
  const modalExternalBtn = document.getElementById('modal-external-link');

  const projectDetails = {
    hangman: {
      title: 'Hangman Game',
      desc: 'A fun interactive Hangman game developed as a programming project, demonstrating programming logic, user interaction, and application development.',
      tech: ['Python', 'Tkinter', 'GUI Programming', 'Application Logic'],
      points: [
        'Structured modular logic handling dynamic letter guessing and game state evaluation.',
        'Interactive desktop graphical interface designed with Python and Tkinter widgets.',
        'Configurable word list and difficulty states designed for practical user interaction.',
        'Clean, maintainable codebase ready for expansion into web or backend architectures.'
      ],
      linkText: 'Project Source Placeholder'
    },
    ai_assistant: {
      title: 'AI Study Assistant',
      desc: 'An AI-powered study assistant designed to help students with learning-related tasks and provide an interactive way to access study assistance.',
      tech: ['Python', 'FastAPI Ready', 'AI/ML Concepts', 'Student Tools'],
      points: [
        'Designed around interactive student workflows for concept explanation and review.',
        'Structured data flow and query handling tailored for academic study assistance.',
        'Clean decoupled architecture ready for backend API integration with FastAPI and database models.',
        'Focus on intuitive user experience and accessible educational assistance.'
      ],
      linkText: 'Project Source Placeholder'
    }
  };

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !projectModal) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Tech tags
    modalTechStack.innerHTML = data.tech
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join('');

    // Key points
    modalKeyPoints.innerHTML = data.points
      .map(
        (p) => `
        <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-secondary); font-size: 0.94rem;">
          <svg style="width: 16px; height: 16px; stroke: var(--cyan-accent); flex-shrink: 0; margin-top: 3px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${p}</span>
        </li>`
      )
      .join('');

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-modal');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // --- 6. Placeholder Links Notification Helper ---
  document.querySelectorAll('[data-placeholder]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const placeholderType = el.getAttribute('data-placeholder');
      e.preventDefault();
      window.showToastNotification(
        `Placeholder link: Replace with your verified ${placeholderType} URL in index.html`,
        'info'
      );
    });
  });

  // --- 7. Contact Form Validation & Submission Simulation ---
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formAlert = document.getElementById('form-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Fields
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const nameGroup = nameInput.closest('.form-group');
      const emailGroup = emailInput.closest('.form-group');
      const messageGroup = messageInput.closest('.form-group');

      // Reset errors
      [nameGroup, emailGroup, messageGroup].forEach((g) => g.classList.remove('has-error'));
      formAlert.className = 'form-status-alert';
      formAlert.style.display = 'none';

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameGroup.classList.add('has-error');
        isValid = false;
      }

      // Validate Email with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailGroup.classList.add('has-error');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageGroup.classList.add('has-error');
        isValid = false;
      }

      if (!isValid) return;

      // Submission simulation
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="spinner"></span>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        formAlert.textContent = "Thank you! Your message has been prepared. Since this is a client-side demo, you can connect directly via the links on the left!";
        formAlert.className = 'form-status-alert success';

        window.showToastNotification('Message received! Thank you for reaching out.', 'success');
      }, 900);
    });
  }

  // --- 8. Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 9. Dynamic Mouse Spotlight on Cards ---
  const spotlightCards = document.querySelectorAll('.glass-card, .tech-skill-card');
  spotlightCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --- 10. Subtle Ambient Cursor Glow Follower ---
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth > 768) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        cursorGlow.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
      isMoving = false;
    });

    function updateCursorGlow() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      requestAnimationFrame(updateCursorGlow);
    }
    updateCursorGlow();
  }

  // --- 11. Copy Email Button Handler ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const val = document.getElementById('email-text-val');
      const textToCopy = val ? val.textContent.trim() : '[Email Placeholder]';

      navigator.clipboard.writeText(textToCopy).then(() => {
        window.showToastNotification('Email placeholder copied! Replace with your actual email in index.html', 'info');
      }).catch(() => {
        window.showToastNotification('Replace email placeholder in index.html with your address.', 'info');
      });
    });
  }
})();
