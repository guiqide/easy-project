import path from "path";
import fs from "fs";
import { IPluginData, IUse } from "./interface";
import shell from "shelljs";

interface IOptions {
  projectName: string;
  selectedPlugins: IPluginData[];
  isExistProject: boolean;
}

export class ImportCore {
  static pluginList: IPluginData[];
  pluginsNames: string[];
  options: IOptions;
  constructor() {
    this.start();
  }

  async start(): Promise<void> {
    ImportCore.pluginList.forEach((pluginData) => {
      this.pluginsNames.push(pluginData.name);
    });

    await this.startInteract();
    const dir = await this.createDir();
    if (!this.options.isExistProject) {
      await this.initProject();
    }
    await this.copyFiles(dir);
  }

  // async startInteract(): IOptions {}

  async createDir(): Promise<string> {
    const dir = path.resolve(__dirname, this.options.projectName);

    if (this.options.isExistProject) {
      return dir;
    }

    fs.mkdirSync(dir, {
      mode: "755",
    });
    return dir;
  }

  async initProject() {
    if (!shell.which("npm")) {
      shell.echo("Sorry, this script requires npm");
      shell.exit(1);
    }
    if (shell.exec("npm init").code !== 0) {
      shell.echo("npm initial error, please try again");
      shell.exit(1);
    }
  }

  private copyFiles(projectDIR: string) {
    ImportCore.pluginList.forEach((pluginData) => {
      pluginData.files.forEach((file) => {
        const name = file;
        fs.copyFile(file, projectDIR, {
          mode: "755",
        });
      });
    });
  }

  // private execCommands() {}
  use(plugin: IUse): void {
    ImportCore.pluginList.push(plugin.install());
  }
}
