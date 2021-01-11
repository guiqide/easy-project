import path from "path";
import fs from "fs";
import { IPluginData, IUse } from "./interface";
import shell from "shelljs";

interface IOptions {
  projectName: string;
  selectedPlugins: IPluginData[];
  isExistProject: boolean;
}

const pluginList: IPluginData[] = [];

const pluginsNames: string[] = [];

let options: IOptions;

// function startInteract(): IOptions {}

async function createDir(): Promise<string> {
  const dir = path.resolve(__dirname, options.projectName);

  if (options.isExistProject) {
    return dir;
  }

  fs.mkdirSync(dir, {
    mode: "755",
  });
  return dir;
}

async function initProject() {
  if (!shell.which("npm")) {
    shell.echo("Sorry, this script requires npm");
    shell.exit(1);
  }
  if (shell.exec("npm init").code !== 0) {
    shell.echo("npm initial error, please try again");
    shell.exit(1);
  }
}

function copyFiles(projectDIR: string) {
  pluginList.forEach((pluginData) => {
    pluginData.files.forEach((file) => {
      const name = file;
      fs.copyFile(file, projectDIR, {
        mode: "755",
      });
    });
  });
}

function use(plugin: IUse): void {
  pluginList.push(plugin.install());
}

export async function CLI() {
  pluginList.forEach((pluginData: IPluginData) => {
    pluginsNames.push(pluginData.name);
  });

  await startInteract();
  const dir = await createDir();

  if (!options.isExistProject) {
    await initProject();
  }

  await copyFiles(dir);
}

CLI();
