const { contextBridge } = require('electron')

// Add any IPC or API exposure here if needed in the future
contextBridge.exposeInMainWorld('electronAPI', {
    // Add API methods here when needed
})
