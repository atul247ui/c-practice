/**
 * Runtime configuration.
 *
 * This app checks submitted C code for real, by compiling and running it
 * on Wandbox (https://wandbox.org) — it does not just scan the source text.
 *
 * Wandbox's public API is free with no signup and no API key: it's a
 * community-run service, so be considerate with how hard you hammer it,
 * but there's nothing to configure to get started.
 *
 * If you'd rather not depend on an external service at all (or Wandbox is
 * temporarily down), turn "Real execution" off in the ⚙ Settings panel —
 * the app then falls back to a rough offline structural check and labels
 * every result as unverified.
 */
const CONFIG = {
    WANDBOX_API_URL: "https://wandbox.org/api/compile.json",
    // gcc 13.2.0, C mode (not C++). Wandbox's /api/list.json is the source
    // of truth for compiler names if this ever needs to change.
    WANDBOX_COMPILER: "gcc-13.2.0-c",
    // Abort a single run if Wandbox hasn't responded in this long
    // (covers both a slow network and an infinite-loop submission).
    REQUEST_TIMEOUT_MS: 15000,
    STORAGE_KEY: "realExecutionEnabled",

    isRealExecutionEnabled() {
        return localStorage.getItem(this.STORAGE_KEY) !== "off";
    },

    setRealExecutionEnabled(enabled) {
        localStorage.setItem(this.STORAGE_KEY, enabled ? "on" : "off");
    }
};
