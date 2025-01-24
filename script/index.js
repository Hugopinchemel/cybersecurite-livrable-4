
document.addEventListener('DOMContentLoaded', () => {
    const preloads = [
        'loading.html',
        'desktop.html',
        'pages/2pype.html',
        'pages/6mail.html',
        'pages/doodle.html',
        'stylesheet/2pype-css.css',
        'stylesheet/desktop.css',
        'stylesheet/reset-css.css',
        'stylesheet/loading-css.css',
        'stylesheet/index-css.css',
        'stylesheet/font-css.css',
        'stylesheet/mail-css.css',
        'script/mail.js'
    ];

    preloads.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        if (href.endsWith('.css')) {
            link.as = 'style';
        } else if (href.endsWith('.html')) {
            link.as = 'document';
        } else if (href.endsWith('.js')) {
            link.as = 'script';
        }
        link.href = href;
        document.head.appendChild(link);
    });

    setTimeout(() => {
        window.location.href = 'homepage.html';
    }, 3000);
});