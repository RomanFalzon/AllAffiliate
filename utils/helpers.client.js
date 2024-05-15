// NOTE: Unlike plugins directory, where we name x.client.js or x.server.js for execution, utils does not provide that, however adding the naming structure anyway for readability.

const isDesktopDevice = () => {
    if (process.client) {
        return window.innerWidth > 720 ? 'desktop' : 'mobile'
    }
}

export { isDesktopDevice }
