import { renderCard } from "../render/renderCard";
import { renderGoods } from "../render/renderGoods";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";


export const mainPage = (gender = 'women') => {
    renderNavigation(gender);
    renderHero(gender);
    renderCard(false);
    renderGoods('новинки', {gender});
}
