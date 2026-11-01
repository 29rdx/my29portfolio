const commands = {
  help: () => `Available commands:
  • whoami       - View engineering profile & philosophy
  • projects     - Inspect featured flagship repositories
  • skills       - Enumerate cybersecurity and backend arsenal
  • clear        - Clear the terminal screen
  • contact      - Fetch communication channels & email
  • sudo         - Execute privileged operator command`,
  
  whoami: () => `Rupraj Datta (29rdx)
Role: Backend & Cybersecurity Engineer
Location: West Bengal, India
Focus: API Vulnerability Auditing, High-Throughput Microservices, Zero-Trust Architecture`,

  projects: () => `[1] backend-security-sentinel (Python / DevSecOps)
    OWASP API Security Scanner & Automated Posture Auditor.
    https://github.com/29rdx/backend-security-sentinel

[2] distributed-telemetry-engine (Go / Systems)
    High-throughput telemetry & metrics streaming pipeline.
    https://github.com/29rdx/distributed-telemetry-engine

[3] my29portfolio (HTML5 / Vanilla JS / CSS3)
    High-performance engineering portfolio.`,

  skills: () => `Arsenal:
  - Languages: Python, Go, C++, SQL, Bash, JavaScript
  - Cybersecurity: OWASP Top 10, JWT Auditing, CORS Analysis, SAST, Burp Suite
  - Backend: RESTful APIs, FastApi, Microservices, AsyncIO, Docker, Linux
  - Cloud: AWS, Docker, GitHub Actions CI/CD`,

  contact: () => `Email: dattarupraj@gmail.com
LinkedIn: https://www.linkedin.com/in/dattarupraj
GitHub: https://github.com/29rdx
X (Twitter): https://x.com/Rupraj29`,

  sudo: () => `Access Granted: You are now running with root privileges on the 29rdx cluster.`
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");
  if (!input || !body) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim().toLowerCase();
      input.value = "";
      if (val === "clear") {
        body.innerHTML = `
          <div class="term-line prompt-line">
            <span class="prompt">rupraj@sentinel:~$</span>
            <input type="text" id="terminal-input" autofocus autocomplete="off" spellcheck="false">
          </div>`;
        return;
      }
      
      const prevLine = document.createElement("div");
      prevLine.className = "term-line prompt-line";
      prevLine.innerHTML = `<span class="prompt">rupraj@sentinel:~$</span> <span>\${val}</span>`;
      body.insertBefore(prevLine, input.parentElement);

      const respLine = document.createElement("div");
      respLine.className = "term-line output";
      if (commands[val]) {
        respLine.innerText = commands[val]();
      } else if (val === "") {
        respLine.innerText = "";
      } else {
        respLine.innerText = `Command not recognized: '\${val}'. Type 'help' for options.`;
      }
      body.insertBefore(respLine, input.parentElement);
      body.scrollTop = body.scrollHeight;
    }
  });
});

// Added command history buffer
const history = [];
let historyIndex = -1;
