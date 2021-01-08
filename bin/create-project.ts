import { program } from "commander";
import chalk from "chalk";

program.version("0.0.1");

program
  .command("create <project-name>")
  .description("create a new project boilerplate")
  .action((options) => {
    console.log(options.action);
  });

program.on("--help", () => {
  console.log();
  console.log(
    `  Run ${chalk.cyan(
      `vue <command> --help`
    )} for detailed usage of given command.`
  );
  console.log();
});

program.parse(process.argv);
