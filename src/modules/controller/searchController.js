import { renderGoods } from '../render/renderGoods';
import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { router } from '../utils/router';

export const searchController = formSearch => {
    formSearch.addEventListener('submit', e => {
        e.preventDefault();

        router.navigate(`search?value=${formSearch.search.value}`)
    })
}

export const searchPageController = (routerData) => {
    const params = {
        search: routerData.params.value,
    }

    if (routerData.params?.page) {
        params.page = routerData.params.page;
    }

    renderNavigation('all');
    renderHero(false);
    renderGoods(routerData.params.value, params);
}