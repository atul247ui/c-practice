# C Practice Platform

A dedicated space for mastering C programming, hosted on Netlify.

## Features

- Interactive C tutorials — Basics through Advanced, plus Linked Lists, Stacks,
  Queues, Trees, Hashing, and Graphs
- Syntax practice — 98 problems, real-graded (see below)
- Progress tracking (solved count, streak, mistakes log — stored in your browser)

## Code execution

Submitted code is graded by actually **compiling and running it** on
[Wandbox](https://wandbox.org) (gcc 13.2.0) — not by guessing from the source
text. This works out of the box: Wandbox's API is free and requires no
signup or API key.

If Wandbox is ever unreachable, or you'd rather not depend on an external
service, open the **⚙** button in the header and turn "Real execution" off.
The app then falls back to a rough offline structural check and clearly
labels every result as unverified — it never pretends a guess is a real
pass.

Note: Wandbox is a free, community-run service with no published rate
limit, so it's usable for practicing but can occasionally be slow under
load. If you outgrow it, `js/checker.js` and `js/config.js` are the only
two files that talk to it — swapping in Judge0, a self-hosted judge, or
anything else that accepts source + stdin and returns stdout only touches
those two files.

## Project structure

```
index.html
css/style.css
js/
  config.js     - execution settings (Wandbox endpoint, on/off toggle)
  questions.js  - the 98 practice problems
  theory.js     - Learn-mode topic content
  checker.js    - grading (Wandbox execution + offline fallback)
  app.js        - UI logic
```
