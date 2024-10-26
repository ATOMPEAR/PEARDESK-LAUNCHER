const { contextBridge, ipcRenderer } = require('electron')

// Add any IPC or API exposure here if needed in the future
contextBridge.exposeInMainWorld('electronAPI', {
    // Add API methods here when needed
    closeWindow: () => ipcRenderer.send('close-window'),
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    toggleStart: () => ipcRenderer.send('toggle-start')
})
