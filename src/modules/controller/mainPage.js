import { renderGoods } from "../render/renderGoods";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";


export const mainPage = (gender = 'women') => {
    renderNavigation(gender);
    renderHero(gender);
    renderGoods('новинки', {gender});
}
