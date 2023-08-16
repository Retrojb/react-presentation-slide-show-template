import AboutMePage from "../pages/AboutMePage";
import IntroPage from "../pages/IntroPage";
import OutroPage from "../pages/OutroPage";
import Pages from "../pages";

export const PageService = {
    getPageData() {
        return [
            {
                name: 'intro',
                title: 'Welcome',
                content:<IntroPage />
            },
            {
                name: 'aboutme',
                title: 'About Me',
                content:<AboutMePage />
            },
            {
                name: 'outro',
                title: 'Exit',
                content: <OutroPage />
            }
        ]
    },

    getPages() {
        return Promise.resolve(this.getPageData());
    }
}