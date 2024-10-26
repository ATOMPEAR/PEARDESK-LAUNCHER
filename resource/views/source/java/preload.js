const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // Add any API methods you want to expose to the renderer here
  // Example:
  // sendMessage: (message) => ipcRenderer.send('message', message)
})

