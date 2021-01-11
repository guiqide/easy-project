export interface IFile {
  path: string;
}

export interface IPluginData {
  name: string;
  pkgSetting: any;
  command: string[];
  files: IFile[];
}

export interface IUse {
  install: () => IPluginData;
}
