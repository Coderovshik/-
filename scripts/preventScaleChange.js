if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    window.document.addEventListener('touchmove', e => {
        if (e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });
}