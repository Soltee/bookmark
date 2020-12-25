const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"welcome":{"uri":"\/","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"bookmarks":{"uri":"bookmarks","methods":["GET","HEAD"]},"bookmarks.add":{"uri":"bookmarks\/add","methods":["GET","HEAD"]},"bookmarks.show":{"uri":"bookmarks\/{bookmark}","methods":["GET","HEAD"],"bindings":{"bookmark":"id"}},"bookmarks.store":{"uri":"bookmarks","methods":["POST"]},"bookmarks.active":{"uri":"bookmarks\/make_active","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
