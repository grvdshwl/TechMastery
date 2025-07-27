/**
 * ─────────────────────────────────────────────────────────────
 * 🧠 TOPIC EXCHANGE WILDCARDS — DETAILED EXPLANATION
 * ─────────────────────────────────────────────────────────────
 * In RabbitMQ's topic exchange, both routing keys and binding keys
 * are dot-separated strings like:
 *
 *    "auth.error"
 *    "system.backend.db.failure"
 *    "cron.warning.job.retry"
 *
 * Consumers **bind** their queues to patterns using:
 *
 * ➕ WILDCARDS:
 *   1. `*` (star)
 *      - Matches exactly ONE word
 *
 *   2. `#` (hash)
 *      - Matches zero or more words (like a greedy wildcard)
 *
 * ─────────────────────────────────────────────────────────────
 * 🌟 `*` — STAR WILDCARD (ONE WORD ONLY)
 * ─────────────────────────────────────────────────────────────
 *
 * binding key: "auth.*"
 *
 * ✔ Matches:
 *   - "auth.info"
 *   - "auth.error"
 *   - "auth.warning"
 *
 * ❌ Does NOT match:
 *   - "auth.backend.error"     // has 3 words
 *   - "cron.warning"           // not prefixed with 'auth'
 *
 * binding key: "*.error"
 *
 * ✔ Matches:
 *   - "auth.error"
 *   - "cron.error"
 *
 * ❌ Does NOT match:
 *   - "system.backend.error"
 *   - "error"                  // has only 1 word
 *
 *
 * ─────────────────────────────────────────────────────────────
 * 🌀 `#` — HASH WILDCARD (ZERO OR MORE WORDS)
 * ─────────────────────────────────────────────────────────────
 *
 * binding key: "auth.#"
 *
 * ✔ Matches:
 *   - "auth"
 *   - "auth.error"
 *   - "auth.error.critical"
 *   - "auth.login.failure.attempts"
 *
 * ❌ Does NOT match:
 *   - "backend.auth.error"     // doesn't start with "auth"
 *
 * binding key: "#.warning"
 *
 * ✔ Matches:
 *   - "warning"
 *   - "auth.warning"
 *   - "system.backend.warning"
 *   - "cron.jobs.warning"
 *
 *
 * ─────────────────────────────────────────────────────────────
 * 🧾 EXAMPLES COMPARISON
 * ─────────────────────────────────────────────────────────────
 * Let's say the producer sends the following routing keys:
 *
 *   "auth.error"
 *   "cron.warning"
 *   "system.db.error"
 *   "auth.login.failure"
 *   "kern.info"
 *   "kern.network.alert.critical"
 *
 * Now here’s how different consumer bindings behave:
 *
 *   binding key         matches which?
 * ───────────────────────────────────────
 *   "*.error"         → "auth.error"
 *                     → "system.db.error" ❌ NO (3 words)
 *
 *   "#.warning"       → "cron.warning"
 *
 *   "auth.*"          → "auth.error"
 *                     → "auth.login.failure" ❌ NO (3 words)
 *
 *   "auth.#"          → all that begin with "auth", any depth
 *
 *   "#.alert.critical"→ "kern.network.alert.critical"
 *
 *
 * 🔄 Producers → [topic exchange] → Consumers
 *              ↳ match happens if routing key fits binding pattern
 *
 */
