(function () {
    /* ── Inject sidebar CSS ── */
    const style = document.createElement('style');
    style.textContent = `
        .sidebar {
            width: var(--sidebar-w);
            flex-shrink: 0;
            position: fixed;
            top: 0; left: 0;
            height: 100vh;
            padding: 32px 28px 32px 24px;
            display: flex;
            flex-direction: column;
            background: var(--bg);
            z-index: 100;
        }
        .sidebar-name {
            font-size: 15px;
            font-weight: 500;
            color: var(--text);
            text-decoration: none;
            letter-spacing: -0.01em;
            margin-bottom: 4px;
            display: block;
        }
        .nav-group { margin-bottom: 24px; }
        .nav-group-label {
            font-size: 11px;
            color: var(--muted);
            font-weight: 300;
            margin-bottom: 6px;
            letter-spacing: 0.02em;
        }
        .nav-link {
            display: block;
            font-size: 15px;
            font-weight: 400;
            color: var(--text);
            text-decoration: none;
            line-height: 1.9;
            transition: color 0.15s;
        }
        .nav-link:hover { color: var(--muted); }
        .nav-link.dim { color: var(--muted); font-weight: 300; }
        .nav-link.active { font-weight: 500; }
        @media (min-width: 1600px) {
            .sidebar { padding: 44px 36px 44px 32px; }
            .sidebar-name { font-size: 18px; margin-bottom: 6px; }
            .nav-link { font-size: 17px; line-height: 2; }
            .nav-group-label { font-size: 12px; margin-bottom: 8px; }
            .nav-group { margin-bottom: 32px; }
        }
        @media (max-width: 680px) {
            .sidebar { position: relative; width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; gap: 16px; padding: 20px; }
            .sidebar-name { margin-bottom: 0; }
            .nav-group { margin-bottom: 0; display: flex; gap: 12px; align-items: center; }
            .nav-group-label { display: none; }
        }
    `;
    document.head.appendChild(style);

    /* ── Render sidebar immediately as plain HTML ── */
    window.initNav = function (active) {
        const aside = document.createElement('aside');
        aside.className = 'sidebar';
        aside.innerHTML = `
            <div style="margin-bottom:40px">
                <a href="index.html" class="sidebar-name">Yi Lu</a>
                <div style="font-size:11px;color:var(--muted);font-weight:300;letter-spacing:0.02em">Product Designer & Researcher</div>
            </div>
            <nav>
                <div class="nav-group">
                    <a href="about.html" class="nav-link${active === 'about' ? ' active' : ''}">About</a>
                    <a href="https://drive.google.com/file/d/1Ejc0vhzJfgfPCsqv5TCkkbdpEy7BgrJR/view" target="_blank" class="nav-link">Resume</a>
                    <a href="https://www.linkedin.com/in/yi-lu-b014b31a7/" target="_blank" rel="noopener noreferrer" class="nav-link">LinkedIn</a>
                </div>
                <div class="nav-group">
                    <div class="nav-group-label">product design</div>
                    <a href="volvo-smartwatch-case-study.html" class="nav-link${active === 'volvo' ? ' active' : ''}">Volvo Group</a>
                    <a href="ricoh_casestudy.html" class="nav-link${active === 'ricoh' ? ' active' : ''}">Ricoh USA</a>
                    <a href="dexcom_casestudy.html" class="nav-link${active === 'dexcom' ? ' active' : ''}">Dexcom</a>
                    <a href="ucsd-library-case-study.html" class="nav-link dim">UCSD Library</a>
                </div>
                <div class="nav-group">
                    <div class="nav-group-label">ai design</div>
                    <a href="index.html#ai-design" class="nav-link">AI Design</a>
                </div>
            </nav>
        `;
        document.body.appendChild(aside);
    };
})();
