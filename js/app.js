/**
 * C Practice Platform - Main Application with Advanced Features
 */

// App State
const AppState = {
    currentQuestion: null,
    currentTopic: null,
    currentMode: 'practice',
    solvedQuestions: JSON.parse(localStorage.getItem('solvedQuestions') || '[]'),
    readTopics: JSON.parse(localStorage.getItem('readTopics') || '[]'),
    bookmarkedQuestions: JSON.parse(localStorage.getItem('bookmarkedQuestions') || '[]'),
    mistakes: JSON.parse(localStorage.getItem('mistakes') || '{}'), // { questionId: { count: 0, lastTime: '' } }
    notes: JSON.parse(localStorage.getItem('questionNotes') || '{}'),
    activity: JSON.parse(localStorage.getItem('activity') || '[]'),
    totalTime: parseInt(localStorage.getItem('totalTime') || '0'),
    editor: null,
    timer: null,
    timerSeconds: 0,
    timerIsRunning: false,
    currentFilter: 'all',
    searchQuery: ''
};



// DOM Elements
const DOM = {
    // Practice Mode
    practiceMode: document.getElementById('practice-mode'),
    learnMode: document.getElementById('learn-mode'),
    statsMode: document.getElementById('stats-mode'),
    questionsList: document.getElementById('questions-list'),
    questionTitle: document.getElementById('question-title'),
    questionDifficulty: document.getElementById('question-difficulty'),
    questionDescription: document.getElementById('question-description'),
    questionExamples: document.getElementById('question-examples'),
    resultsContent: document.getElementById('results-content'),
    submitBtn: document.getElementById('submit-btn'),
    resetBtn: document.getElementById('reset-btn'),
    difficultyFilter: document.getElementById('difficulty-filter'),
    solvedCount: document.getElementById('solved-count'),
    totalCount: document.getElementById('total-count'),
    // New Features
    searchInput: document.getElementById('question-search'),
    bookmarkBtn: document.getElementById('bookmark-btn'),
    timerValue: document.getElementById('timer-value'),
    hintsSection: document.getElementById('hints-section'),
    showHintBtn: document.getElementById('show-hint-btn'),
    showSolutionBtn: document.getElementById('show-solution-btn'),
    hintContent: document.getElementById('hint-content'),
    solutionContent: document.getElementById('solution-content'),
    questionNotes: document.getElementById('question-notes'),
    saveNotesBtn: document.getElementById('save-notes-btn'),
    timerControlBtn: document.getElementById('timer-control-btn'),
    mistakesList: document.getElementById('mistakes-list'),
    // Learn Mode
    topicsList: document.getElementById('topics-list'),
    theoryTitle: document.getElementById('theory-title'),
    theoryCategory: document.getElementById('theory-category'),
    theoryBody: document.getElementById('theory-body'),
    categoryFilter: document.getElementById('category-filter'),
    // Mode Buttons
    learnModeBtn: document.getElementById('learn-mode-btn'),
    practiceModeBtn: document.getElementById('practice-mode-btn'),
    statsModeBtn: document.getElementById('stats-mode-btn')
};

// Category Icons
const CATEGORY_ICONS = {
    basics: '📘', control: '🔀', loops: '🔄', arrays: '📊',
    strings: '📝', functions: '⚙️', pointers: '👆', advanced: '🚀'
};

// ===== INITIALIZATION =====
function initMonaco() {
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });
    require(['vs/editor/editor.main'], function () {
        AppState.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
            value: '// Select a question to start coding\n#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}',
            language: 'c',
            theme: 'vs-dark',
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            roundedSelection: true,
            padding: { top: 16 },
            tabSize: 4
        });
    });
}

// ===== MODE SWITCHING =====
function switchMode(mode) {
    AppState.currentMode = mode;
    DOM.practiceMode.style.display = mode === 'practice' ? 'grid' : 'none';
    DOM.learnMode.style.display = mode === 'learn' ? 'grid' : 'none';
    DOM.statsMode.style.display = mode === 'stats' ? 'grid' : 'none';

    DOM.practiceModeBtn.classList.toggle('active', mode === 'practice');
    DOM.learnModeBtn.classList.toggle('active', mode === 'learn');
    DOM.statsModeBtn.classList.toggle('active', mode === 'stats');

    if (mode === 'stats') updateStatsDisplay();
}

// ===== TIMER =====
function toggleTimer() {
    if (AppState.timerIsRunning) {
        pauseTimer();
    } else {
        resumeTimer();
    }
}

function startTimer() {
    // Reset and start
    if (AppState.timer) clearInterval(AppState.timer);
    AppState.timerSeconds = 0;
    AppState.timerIsRunning = true;
    updateTimerDisplay();
    AppState.timer = setInterval(timerTick, 1000);
    updateTimerControlButton();
}

function pauseTimer() {
    if (AppState.timer) {
        clearInterval(AppState.timer);
        AppState.timer = null;
    }
    AppState.timerIsRunning = false;
    updateTimerControlButton();
}

function resumeTimer() {
    if (!AppState.timer) {
        AppState.timer = setInterval(timerTick, 1000);
    }
    AppState.timerIsRunning = true;
    updateTimerControlButton();
}

function stopTimer() {
    pauseTimer();
    AppState.timerSeconds = 0;
    updateTimerDisplay();
}

function timerTick() {
    AppState.timerSeconds++;
    AppState.totalTime++;
    localStorage.setItem('totalTime', AppState.totalTime);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(AppState.timerSeconds / 60).toString().padStart(2, '0');
    const secs = (AppState.timerSeconds % 60).toString().padStart(2, '0');
    DOM.timerValue.textContent = `${mins}:${secs}`;
}

function updateTimerControlButton() {
    if (DOM.timerControlBtn) {
        DOM.timerControlBtn.textContent = AppState.timerIsRunning ? '⏸' : '▶';
        DOM.timerControlBtn.title = AppState.timerIsRunning ? 'Pause Timer' : 'Resume Timer';
    }
}

// ===== BOOKMARKS =====
function toggleBookmark() {
    if (!AppState.currentQuestion) return;
    const id = AppState.currentQuestion.id;
    const idx = AppState.bookmarkedQuestions.indexOf(id);
    if (idx >= 0) {
        AppState.bookmarkedQuestions.splice(idx, 1);
    } else {
        AppState.bookmarkedQuestions.push(id);
    }
    localStorage.setItem('bookmarkedQuestions', JSON.stringify(AppState.bookmarkedQuestions));
    updateBookmarkBtn();
    renderQuestionsList();
}

function updateBookmarkBtn() {
    if (!AppState.currentQuestion) return;
    const isBookmarked = AppState.bookmarkedQuestions.includes(AppState.currentQuestion.id);
    DOM.bookmarkBtn.classList.toggle('active', isBookmarked);
}

// ===== NOTES =====
function loadNotes() {
    if (!AppState.currentQuestion) return;
    const note = AppState.notes[AppState.currentQuestion.id] || '';
    DOM.questionNotes.value = note;
}

function saveNotes() {
    if (!AppState.currentQuestion) return;
    AppState.notes[AppState.currentQuestion.id] = DOM.questionNotes.value;
    localStorage.setItem('questionNotes', JSON.stringify(AppState.notes));
    showToast('Notes saved!');
}

// ===== HINTS & SOLUTIONS =====
function showHint() {
    if (!AppState.currentQuestion) return;
    const hint = AppState.currentQuestion.hint || 'Think about the logic step by step. What input do you need? What output should you produce?';
    DOM.hintContent.innerHTML = `<strong>💡 Hint:</strong> ${hint}`;
    DOM.hintContent.style.display = 'block';
}

function showSolution() {
    if (!AppState.currentQuestion) return;
    const solution = AppState.currentQuestion.solution || AppState.currentQuestion.starterCode;
    DOM.solutionContent.innerHTML = `<strong>📝 Solution:</strong><pre>${escapeHtml(solution)}</pre>`;
    DOM.solutionContent.style.display = 'block';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== SEARCH & FILTER =====
function filterQuestions() {
    renderQuestionsList();
}

function setFilterTab(filter) {
    AppState.currentFilter = filter;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
    });
    renderQuestionsList();
}

// ===== QUESTIONS LIST =====
function renderQuestionsList() {
    DOM.questionsList.innerHTML = '';
    const diffFilter = DOM.difficultyFilter.value;
    const search = AppState.searchQuery.toLowerCase();

    let filtered = QUESTIONS;

    // Difficulty filter
    if (diffFilter !== 'all') {
        filtered = filtered.filter(q => q.difficulty === diffFilter);
    }

    // Search filter
    if (search) {
        filtered = filtered.filter(q => q.title.toLowerCase().includes(search));
    }

    // Tab filter
    if (AppState.currentFilter === 'bookmarked') {
        filtered = filtered.filter(q => AppState.bookmarkedQuestions.includes(q.id));
    } else if (AppState.currentFilter === 'unsolved') {
        filtered = filtered.filter(q => !AppState.solvedQuestions.includes(q.id));
    }

    filtered.forEach(question => {
        const isSolved = AppState.solvedQuestions.includes(question.id);
        const isActive = AppState.currentQuestion?.id === question.id;
        const isBookmarked = AppState.bookmarkedQuestions.includes(question.id);

        const li = document.createElement('li');
        li.className = `question-item ${isSolved ? 'solved' : ''} ${isActive ? 'active' : ''} ${isBookmarked ? 'bookmarked' : ''}`;
        li.innerHTML = `
            <span class="question-status">${isSolved ? '✓' : question.id}</span>
            <div class="question-info">
                <span class="question-name">${question.title}</span>
                <div class="question-meta">
                    <span class="difficulty-badge ${question.difficulty}">${question.difficulty}</span>
                </div>
            </div>
        `;
        li.addEventListener('click', () => selectQuestion(question));
        DOM.questionsList.appendChild(li);
    });
}

function selectQuestion(question) {
    AppState.currentQuestion = question;
    startTimer();

    DOM.questionTitle.textContent = question.title;
    DOM.questionDifficulty.textContent = question.difficulty;
    DOM.questionDifficulty.className = `difficulty-badge ${question.difficulty}`;
    DOM.questionDescription.innerHTML = `<p>${question.description.replace(/\n/g, '</p><p>')}</p>`;

    DOM.questionExamples.innerHTML = question.examples.map(ex => `
        <div class="example-box">
            <h4>Example</h4>
            <pre><strong>Input:</strong> ${ex.input}\n<strong>Output:</strong> ${ex.output}</pre>
        </div>
    `).join('');

    if (AppState.editor) AppState.editor.setValue(question.starterCode);

    // Reset hints/solution
    DOM.hintsSection.style.display = 'block';
    DOM.hintContent.style.display = 'none';
    DOM.solutionContent.style.display = 'none';

    updateBookmarkBtn();
    loadNotes();
    showResultsPlaceholder();
    renderQuestionsList();
}

// ===== RESULTS =====
function showResultsPlaceholder() {
    DOM.resultsContent.innerHTML = `
        <div class="results-placeholder">
            <div class="placeholder-icon">📋</div>
            <p>Submit your code to see results</p>
        </div>
    `;
}

function showLoading() {
    DOM.resultsContent.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Checking your code...</p>
        </div>
    `;
}

function submitCode() {
    if (!AppState.currentQuestion || !AppState.editor) {
        alert('Please select a question first!');
        return;
    }

    const code = AppState.editor.getValue();
    showLoading();

    setTimeout(() => {
        const results = CodeChecker.checkCode(code, AppState.currentQuestion);
        displayResults(results);

        if (results.allPassed) {
            if (!AppState.solvedQuestions.includes(AppState.currentQuestion.id)) {
                AppState.solvedQuestions.push(AppState.currentQuestion.id);
                localStorage.setItem('solvedQuestions', JSON.stringify(AppState.solvedQuestions));

                // Add activity
                addActivity('solved', AppState.currentQuestion.title);

                // If it was in mistakes, we could mark it as cleared or keep it
                // For now, let's keep it in mistakes history but maybe note it's solved

                updateStats();
                renderQuestionsList();
                stopTimer();
            }
        } else {
            // RECORD MISTAKE
            recordMistake(AppState.currentQuestion);
        }
    }, 800);
}

function recordMistake(question) {
    if (!AppState.mistakes[question.id]) {
        AppState.mistakes[question.id] = {
            id: question.id,
            title: question.title,
            count: 0,
            lastTime: ''
        };
    }
    AppState.mistakes[question.id].count++;
    AppState.mistakes[question.id].lastTime = new Date().toISOString();
    localStorage.setItem('mistakes', JSON.stringify(AppState.mistakes));

    // Add activity for mistake
    addActivity('mistake', question.title);

    if (AppState.currentMode === 'stats') updateStatsDisplay();
}

function displayResults(results) {
    const summaryClass = results.allPassed ? 'success' : 'failure';
    const summaryIcon = results.allPassed ? '🎉' : '❌';
    const summaryText = results.allPassed ? 'All Tests Passed!' : 'Some Tests Failed';

    let html = `
        <div class="results-summary ${summaryClass}">
            <h3>${summaryIcon} ${summaryText}</h3>
            <p>${results.passed}/${results.total} test cases passed</p>
        </div>
        <div class="test-cases">
    `;

    results.testResults.forEach(test => {
        const statusClass = test.passed ? 'passed' : 'failed';
        const statusIcon = test.passed ? '✓' : '✗';
        html += `
            <div class="test-case">
                <div class="test-case-header">
                    <span class="test-case-name">${test.name}</span>
                    <span class="test-case-status ${statusClass}">${statusIcon} ${test.passed ? 'Passed' : 'Failed'}</span>
                </div>
                <div class="test-case-body">
                    <div class="test-detail">
                        <div class="test-detail-label">User Output</div>
                        <div class="test-detail-value user-output">${test.userOutput}</div>
                    </div>
                    <div class="test-detail">
                        <div class="test-detail-label">Expected Output</div>
                        <div class="test-detail-value">${test.expectedOutput}</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    DOM.resultsContent.innerHTML = html;
}

function resetCode() {
    if (AppState.currentQuestion && AppState.editor) {
        AppState.editor.setValue(AppState.currentQuestion.starterCode);
        showResultsPlaceholder();
        startTimer();
    }
}

// ===== ACTIVITY =====
function addActivity(type, title) {
    const activity = {
        type,
        title,
        time: new Date().toISOString()
    };
    AppState.activity.unshift(activity);
    if (AppState.activity.length > 20) AppState.activity.pop();
    localStorage.setItem('activity', JSON.stringify(AppState.activity));
}

// ===== STATS =====
function updateStats() {
    DOM.solvedCount.textContent = AppState.solvedQuestions.length;
    DOM.totalCount.textContent = QUESTIONS.length;
}

function updateStatsDisplay() {
    // Overview
    document.getElementById('stat-total-solved').textContent = AppState.solvedQuestions.length;
    const hours = Math.floor(AppState.totalTime / 3600);
    const mins = Math.floor((AppState.totalTime % 3600) / 60);
    document.getElementById('stat-total-time').textContent = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    document.getElementById('stat-topics-read').textContent = AppState.readTopics.length;
    document.getElementById('stat-streak').textContent = calculateStreak();

    // Progress by difficulty
    ['easy', 'medium', 'hard'].forEach(diff => {
        const total = QUESTIONS.filter(q => q.difficulty === diff).length;
        const solved = QUESTIONS.filter(q => q.difficulty === diff && AppState.solvedQuestions.includes(q.id)).length;
        const pct = total > 0 ? (solved / total * 100) : 0;
        document.getElementById(`${diff}-progress`).style.width = `${pct}%`;
        document.getElementById(`${diff}-progress-text`).textContent = `${solved}/${total}`;
    });

    // Activity
    const activityList = document.getElementById('activity-list');
    if (AppState.activity.length === 0) {
        activityList.innerHTML = '<p class="no-activity">Start solving questions to see your activity!</p>';
    } else {
        activityList.innerHTML = AppState.activity.slice(0, 10).map(a => {
            let icon = '📖';
            if (a.type === 'solved') icon = '✅';
            if (a.type === 'mistake') icon = '❌';

            return `
                <div class="activity-item">
                    <span class="activity-icon">${icon}</span>
                    <div class="activity-info">
                        <div class="activity-title">${a.type === 'solved' ? 'Solved' : a.type === 'read' ? 'Read' : 'Mistake'}: ${a.title}</div>
                        <div class="activity-time">${formatTimeAgo(a.time)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Mistakes Log
    updateMistakesDisplay();
}

function updateMistakesDisplay() {
    const list = DOM.mistakesList;
    if (!list) return;

    const mistakesArr = Object.values(AppState.mistakes).sort((a, b) => new Date(b.lastTime) - new Date(a.lastTime));

    if (mistakesArr.length === 0) {
        list.innerHTML = '<p class="no-mistakes">No mistakes tracked yet. Keep up the good work!</p>';
    } else {
        list.innerHTML = mistakesArr.map(m => {
            const question = QUESTIONS.find(q => q.id === m.id);
            return `
                <div class="mistake-item" onclick="retryQuestion(${m.id})">
                    <span class="mistake-icon">❌</span>
                    <div class="mistake-info">
                        <div class="mistake-title">${m.title}</div>
                        <div class="mistake-meta">
                            <span class="mistake-count">${m.count} failed attempts</span>
                            <span class="mistake-time">${formatTimeAgo(m.lastTime)}</span>
                        </div>
                    </div>
                    <button class="retry-btn">Retry</button>
                </div>
            `;
        }).join('');
    }
}

function retryQuestion(id) {
    const question = QUESTIONS.find(q => q.id === id);
    if (question) {
        switchMode('practice');
        selectQuestion(question);
    }
}

function calculateStreak() {
    // Simple streak - count consecutive days with activity
    return AppState.activity.length > 0 ? 1 : 0;
}

function formatTimeAgo(isoTime) {
    const diff = Date.now() - new Date(isoTime).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
}

function showToast(message) {
    // Simple alert for now
    console.log(message);
}

// ===== LEARN MODE =====
function renderTopicsList(filter = 'all') {
    DOM.topicsList.innerHTML = '';
    const filtered = filter === 'all' ? THEORY : THEORY.filter(t => t.category === filter);

    filtered.forEach(topic => {
        const isRead = AppState.readTopics.includes(topic.id);
        const isActive = AppState.currentTopic?.id === topic.id;
        const icon = CATEGORY_ICONS[topic.category] || '📄';

        const li = document.createElement('li');
        li.className = `topic-item ${isRead ? 'read' : ''} ${isActive ? 'active' : ''}`;
        li.innerHTML = `
            <span class="topic-icon">${icon}</span>
            <div class="topic-info">
                <span class="topic-name">${topic.title}</span>
                <div class="topic-meta">
                    <span class="category-badge">${THEORY_CATEGORIES[topic.category]}</span>
                </div>
            </div>
        `;
        li.addEventListener('click', () => selectTopic(topic));
        DOM.topicsList.appendChild(li);
    });
}

function selectTopic(topic) {
    AppState.currentTopic = topic;
    DOM.theoryTitle.textContent = topic.title;
    DOM.theoryCategory.textContent = THEORY_CATEGORIES[topic.category];
    DOM.theoryBody.innerHTML = topic.content;

    if (!AppState.readTopics.includes(topic.id)) {
        AppState.readTopics.push(topic.id);
        localStorage.setItem('readTopics', JSON.stringify(AppState.readTopics));
        addActivity('read', topic.title);
    }
    renderTopicsList(DOM.categoryFilter.value);
}

// ===== EVENT LISTENERS =====
DOM.submitBtn.addEventListener('click', submitCode);
DOM.resetBtn.addEventListener('click', resetCode);
DOM.difficultyFilter.addEventListener('change', () => renderQuestionsList());
DOM.categoryFilter.addEventListener('change', (e) => renderTopicsList(e.target.value));
DOM.learnModeBtn.addEventListener('click', () => switchMode('learn'));
DOM.practiceModeBtn.addEventListener('click', () => switchMode('practice'));
DOM.statsModeBtn.addEventListener('click', () => switchMode('stats'));
DOM.bookmarkBtn.addEventListener('click', toggleBookmark);
DOM.saveNotesBtn.addEventListener('click', saveNotes);
DOM.timerControlBtn.addEventListener('click', toggleTimer);
DOM.showHintBtn.addEventListener('click', showHint);
DOM.showSolutionBtn.addEventListener('click', showSolution);
DOM.searchInput.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value;
    filterQuestions();
});

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => setFilterTab(tab.dataset.filter));
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initMonaco();
    renderQuestionsList();
    renderTopicsList();
    updateStats();

    if (QUESTIONS.length > 0) {
        setTimeout(() => selectQuestion(QUESTIONS[0]), 500);
    }
});
