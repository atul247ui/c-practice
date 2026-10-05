// Pane switching for narrow screens (CSS only shows one pane at a time there).
(function () {
    const mq = window.matchMedia('(max-width: 820px)');

    function setPane(modeId, pane) {
        const main = document.getElementById(modeId);
        if (!main) return;
        main.dataset.pane = pane;
        main.querySelectorAll(':scope > .pane-tabs button').forEach(b =>
            b.classList.toggle('active', b.dataset.pane === pane));
        if (pane === 'code') relayoutEditor();
    }

    function relayoutEditor() {
        if (typeof AppState !== 'undefined' && AppState.editor) {
            requestAnimationFrame(() => AppState.editor.layout());
        }
    }

    document.querySelectorAll('.pane-tabs').forEach(nav => {
        nav.addEventListener('click', e => {
            const b = e.target.closest('button[data-pane]');
            if (b) setPane(nav.parentElement.id, b.dataset.pane);
        });
    });

    function onClick(id, selector, fn) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', e => { if (mq.matches && e.target.closest(selector)) fn(); });
    }

    onClick('questions-list', '.question-item', () => setPane('practice-mode', 'problem'));
    onClick('submit-btn', '#submit-btn', () => setPane('practice-mode', 'results'));
    onClick('mistakes-list', '.mistake-item', () => setPane('practice-mode', 'problem'));
    onClick('topics-list', '.topic-item', () => {
        setPane('learn-mode', 'lesson');
        const tc = document.getElementById('theory-content');
        if (tc) tc.scrollTop = 0;
    });

    mq.addEventListener('change', relayoutEditor);
})();
