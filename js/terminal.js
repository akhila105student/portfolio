/**
 * Interactive Terminal & Code Window Mockup
 * Akhila Developer Portfolio
 */
(function () {
  'use strict';

  const tabButtons = document.querySelectorAll('.terminal-tab');
  const tabContents = document.querySelectorAll('.terminal-tab-content');
  const runBtn = document.getElementById('run-code-btn');
  const copyBtn = document.getElementById('copy-code-btn');
  const outputPanel = document.getElementById('terminal-output');
  const outputText = document.getElementById('output-text');
  const statusLine = document.getElementById('terminal-status-text');

  if (!tabButtons.length) return;

  // Tab Switching
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }

      if (statusLine) {
        const fileNames = {
          'tab-python': 'Python 3.11 • UTF-8',
          'tab-json': 'JSON • UTF-8',
          'tab-bash': 'Bash Shell • UTF-8'
        };
        statusLine.textContent = fileNames[targetTab] || 'UTF-8';
      }
    });
  });

  // Run Code Simulation
  if (runBtn && outputPanel && outputText) {
    let isRunning = false;

    runBtn.addEventListener('click', () => {
      if (isRunning) return;
      isRunning = true;

      runBtn.innerHTML = `
        <span class="spinner" style="width: 12px; height: 12px; border-width: 1.5px;"></span>
        <span>Running...</span>
      `;
      outputPanel.classList.add('visible');
      outputText.innerHTML = '<span style="color: var(--cyan-accent); font-weight: 600;">$ python3 akhila.py</span><br><span style="color: var(--text-muted); font-size: 0.8rem;">Compiling &amp; executing runtime simulation...</span>';

      setTimeout(() => {
        const output = `
<span style="color: var(--cyan-accent); font-weight: 600;">$ python3 akhila.py</span>
<span style="color: #34d399;">✔ Status 200 OK: Process exited with code 0 (0.042s)</span>
<span style="color: #38bdf8;">==================================================</span>
<span style="color: var(--text-primary); font-weight: 700;">[Candidate Profile Loaded]</span>
• Name: <span style="color: var(--cyan-accent); font-weight: 600;">Akhila</span>
• Education: <span style="color: var(--text-primary);">CMR University, Bengaluru</span>
• Program: <span style="color: var(--text-primary);">B.Tech — Computer Science & Engineering</span>
• Status: <span style="color: #34d399;">Currently Pursuing</span>
• Core Stack: <span style="color: var(--purple-accent); font-weight: 600;">C, Python, FastAPI, PostgreSQL, HTML/CSS/JS</span>
• Certification: <span style="color: #38bdf8;">Data Structures and Algorithms (Simplilearn)</span>
• Mission: <span style="color: #fcd34d;">"Passionate about software development and practical technology solutions."</span>
<span style="color: #38bdf8;">==================================================</span>`;
        outputText.innerHTML = output;

        runBtn.innerHTML = `
          <svg style="width: 13px; height: 13px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>Run Again</span>
        `;
        isRunning = false;
      }, 700);
    });
  }

  // Copy Code Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const activeContent = document.querySelector('.terminal-tab-content.active pre code');
      if (!activeContent) return;

      const textToCopy = activeContent.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg style="width: 13px; height: 13px; stroke: #34d399;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #34d399;">Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
        }, 2000);
      }).catch(() => {
        // Fallback if permission blocked
        if (window.showToastNotification) {
          window.showToastNotification('Code copied to clipboard!');
        }
      });
    });
  }
})();
