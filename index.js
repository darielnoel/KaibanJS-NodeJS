// ╔══════════════════════════════════════════════════════╗
// ║ GETTING STARTED WITH AGENTICJS                       ║
// ║                                                       ║
// ║ 1. Install AgenticJS via npm:                        ║
// ║ npm install agenticjs --save                         ║
// ║                                                       ║                                                       ║
// ║ 2. Import AgenticJS in your JavaScript file:         ║
// ╚══════════════════════════════════════════════════════╝

const { Agent, Task, Team } = require("agenticjs");

// ╔══════════════════════════════════════════════════════╗
// ║ How to Use AgenticJS:                                ║
// ║ 1. Define your Agents with specific roles and goals  ║
// ║ 2. Define the Tasks each Agent will perform          ║
// ║ 3. Create the Team and assign Agents and their Tasks ║
// ║ 4. Start the Team to execute the defined tasks       ║
// ╚══════════════════════════════════════════════════════╝

// ──── Agents ────────────────────────────────────────────
// ─ Agents are autonomous entities designed to perform
// ─ specific roles and achieve goals based on the
// ─ tasks assigned to them.
// ────────────────────────────────────────────────────────

const researcher = new Agent({
  name: "Alice",
  role: "Researcher",
  goal: "Analyze AI advancements about {topic}",
  background: "AI researcher",
  tools: [],
});

const writer = new Agent({
  name: "Bob",
  role: "Writer",
  goal: "Write an article about {topic}",
  background: "Tech writer",
  tools: [],
});

// ──── Tasks ─────────────────────────────────────────────
// ─ Tasks define the specific actions each agent must
// ─ take, their expected outputs, and mark critical
// ─ outputs as deliverables if they are the final
// ─ products.
// ────────────────────────────────────────────────────────

const researchTask = new Task({
  description: `Identify the next big trend in {topic}.
    Focus on identifying pros and cons and the overall narrative.
    Your final report should clearly articulate the key points,
    its market opportunities, and potential risks.`,
  expectedOutput: "One sentence with the name of the AI trend",
  agent: researcher,
});

const writingTask = new Task({
  description: `Compose an insightful article on {topic}.
    Focus on the latest trends and how it's impacting the industry.
    This article should be easy to understand, engaging, and positive.`,
  expectedOutput:
    "A 1 paragraph article on {topic} advancements formatted as markdown.",
  agent: writer,
});

// ──── Team ────────────────────────────────────────────
// ─ The Team coordinates the agents and their tasks.
// ─ It starts with an initial input and manages the
// ─ flow of information between tasks.
// ──────────────────────────────────────────────────────

const team = new Team({
  name: "Productivity Team",
  agents: [researcher, writer],
  tasks: [researchTask, writingTask],
  inputs: { topic: "AI Agents" }, // Initial input for the first task
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  }, // Environment variables for the team
});

// Start the team: This initiates the sequence of tasks as defined, leading to the generation of the final deliverable.
const result = team.start().then((result) => {
  console.log(result);
  console.log("Test completed");
});
