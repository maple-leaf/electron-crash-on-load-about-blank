const { app, BrowserWindow } = require("electron");

app.allowRendererProcessReuse = false; // key thing to crash the electron by visit 'about:blank'

app.on("ready", () => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL("https://google.com");
});
