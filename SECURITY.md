# 🛡️ Portfolio Security Policy & Content Security Policy (CSP)

## 1. Client-Side Security Guarantees
The `my29portfolio` static web application implements defense-in-depth against client-side script injection:
- **Zero Inline Script Execution**: All terminal logic and theme state managers execute strictly from sandboxed modular JavaScript files.
- **Strict Content Security Policy (CSP)**: Disallows `unsafe-eval` and restricts `script-src` and `connect-src` exclusively to origin and official GitHub APIs.
- **Sanitized Terminal Input**: User commands entered into the virtual terminal emulator are strictly evaluated against an enumerated whitelist of safe commands (`whoami`, `projects`, `skills`, `contact`, `clear`, `help`).

## 2. Reporting Issues
Please report issues to **`dattarupraj@gmail.com`**.
