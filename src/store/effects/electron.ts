export default {
  initialize(options: any) {
    const { onQuit } = options
    onQuit && window.ipcRenderer.on('app-quitting', onQuit)
  },

  relaunch() {
    window.ipcRenderer.invoke('relaunch')
  },

  openExternalLink(url: string) {
    window.ipcRenderer.invoke('open-external-link', url)
  },

  async openFile() {
    return await window.ipcRenderer.invoke('show-open-dialog', {
      properties: ['openFile'],
    })
  },

  async openFolder(options: any = {}, properties: string[] = []) {
    return await window.ipcRenderer.invoke('show-open-dialog', {
      ...options,
      properties: [...properties, 'openDirectory'],
    })
  },

  async showSaveDialog(options: any = {}, properties: string[] = []) {
    return await window.ipcRenderer.invoke('show-save-dialog', {
      ...options,
      properties: [...properties, 'createDirectory'],
    })
  },
}
