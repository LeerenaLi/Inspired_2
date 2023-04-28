import { API_URL, DATA } from '../const';
import { getData } from '../getData';
import { renderCard } from '../render/renderCard';
import { renderGoods } from "../render/renderGoods";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";

export const cardController = async (routerData) => {
    const { id } = routerData.data;

    const data = await getData(`${API_URL}/api/goods/${id}`);
    console.log('data: ', data);

    renderNavigation(data.gender, data.category);
    renderHero(false);
    renderCard(data);
    renderGoods('Вам также может понравиться', {count: 4, gender: data.gender});
}

