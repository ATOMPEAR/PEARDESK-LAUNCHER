const { app, BrowserWindow, ipcMain, screen } = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
    // Get primary display dimensions
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize

    // Create the window
    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        frame: false,
        resizable: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // Calculate position for bottom right
    const xPosition = screenWidth - 400
    const yPosition = screenHeight - 600

    // Set window position
    mainWindow.setPosition(xPosition, yPosition)

    mainWindow.loadFile(path.join(__dirname, '..', '..', 'index.html'))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// Handle window controls
ipcMain.on('close-window', () => {
    mainWindow.close()
})

ipcMain.on('minimize-window', () => {
    mainWindow.minimize()
})

ipcMain.on('toggle-start', () => {
    console.log('Start menu toggled')
    // Add start menu functionality here
})
