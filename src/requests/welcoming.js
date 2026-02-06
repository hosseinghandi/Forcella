export default function getWelcomingData(t) {
    return {
    title: t("pages.welcoming.title"), 
    highlights : t("pages.welcoming.content.highlights", { returnObjects: true }),
    button: {
        login :t("ui.buttons.login"),
        signup : t("ui.buttons.signup")
    }
};
} 