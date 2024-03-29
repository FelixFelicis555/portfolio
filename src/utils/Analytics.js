export default class Analytics {

    static shouldSendAnalyticsEvents = () => process.env.NODE_ENV === "production"

    static init = () => {
        //  Global site tag (gtag.js) - Google Analytics 

        if (Analytics.shouldSendAnalyticsEvents() && !window["dataLayer"]) {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FG51BK6SF0';
            script.async = true;
            script.onload = function() {
                window.dataLayer = window.dataLayer || [];
                window.gtag = function() {
                    window.dataLayer.push(arguments);
                }
                window.gtag('js', new Date());
                window.gtag('config', 'G-FG51BK6SF0');
            }
            document.body.appendChild(script);
        }
    }
    static getTitle = (title = "") => {
        return title.toLowerCase().replace(/\s/g, "_")
    }

    static track = (title, payload) => {
        if (Analytics.shouldSendAnalyticsEvents() && window.gtag) {
            window.gtag("event", Analytics.getTitle(title), payload)
        }
    }
}