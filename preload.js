window.document.addEventListener("DOMContentLoaded", () => {
    /*
    This is where attaching a preload script to your renderer comes in handy.
    A preload script runs before the renderer process is loaded, and has access to both renderer globals (e.g. window and document) and a Node.js environment.
    */
    document.querySelector('#main-title').innerHTML = "Hello! Elias Pozole"
});