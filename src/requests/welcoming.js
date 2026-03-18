export default function getWelcomingData(t) {
    const text = {
    title: t("pages.welcoming.title"), 
    highlights : t("pages.welcoming.content.highlights", { returnObjects: true }),
    button: {
        login :t("ui.buttons.login"),
        signup : t("ui.buttons.signup"),
        goToMenu : t("ui.buttons.goToMenu")
    }
};
    return {...text}
} 