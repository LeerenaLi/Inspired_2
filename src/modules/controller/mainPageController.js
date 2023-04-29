import { renderCard } from "../render/renderCard";
import { renderCart } from "../render/renderCart";
import { renderGoods } from "../render/renderGoods";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderOrder } from "../render/renderOrder";


export const mainPage = (gender = 'women') => {
    renderNavigation({gender, render: true});
    renderHero({gender, render: true});
    renderCard({render: false});
    renderGoods({title: 'новинки', params: {gender}, render: true});
    renderCart({render: false});
    renderOrder({render: false});
}
