// __tests__/integration.test.js

const { execSync } = require("child_process");

test("AgenticJS integration test", () => {
  const output = execSync("node index.js").toString();
  expect(output).toContain("Test completed");
});
