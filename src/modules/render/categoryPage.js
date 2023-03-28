import { DATA } from '../const';
import { renderGoods } from "./renderGoods";
import { renderHero } from "./renderHero";
import { renderNavigation } from "./renderNavigation";

export const categoryPage = (routerData) => {
    const { gender, category } = routerData.data;
    const params = {gender, category};

    const { title } = DATA.navigation[gender].list
        .find((item) => item.slug === category);

    renderNavigation(gender, category);
    renderHero(false);
    renderGoods(title, params);
}