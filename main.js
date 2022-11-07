const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 1400,
        minHeight: 900,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: false,
        },
        autoHideMenuBar: true
        // resizable: false,        
    });
    win.loadFile("index.html");
}

app.whenReady()
    .then(() => createWindow())

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit()
// })