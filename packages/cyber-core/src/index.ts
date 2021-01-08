interface IFile {
  path: string;
}

interface IPluginData {
  pkgSetting: any;
  command: string[];
  files: IFile[];
}

interface IUse {
  install: () => IPluginData;
}

// function checkInstallOption(opt: IUse) {}

export class CyberCore {
  static InstallList: IPluginData[];
  constructor() {
    // CyberCore.InstallList.forEach((pluginData) => {
    // });
  }

  // private copyFiles() {}

  // private execCommands() {}

  static use(plugin: IUse): void {
    CyberCore.InstallList.push(plugin.install());
  }
}
