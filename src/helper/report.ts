const report = require("multiple-cucumber-html-reporter");

const executionStartTime = new Date(); 

const executionEndTime = new Date(); 

report.generate({
  jsonDir: "test-results",
  reportPath: "reports",
  reportName: "Playwright BDD Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "137.0.7151.122",
    },
    device: "Thoushika test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      { label: "Execution Start Time", value: executionStartTime.toLocaleString() },
      { label: "Execution End Time", value: executionEndTime.toLocaleString() },
    ],
  },
});
