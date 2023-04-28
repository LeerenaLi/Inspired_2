import './index.html';
import './index.scss';

import { router } from './modules/utils/router';
import { mainPage } from './modules/controller/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { getData } from './modules/getData';
import { API_URL, DATA, main } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/utils/createElement';
import { categoryPageController } from './modules/controller/categoryPageController';
import { searchPageController } from './modules/controller/searchController';
import { favoriteController } from './modules/controller/favoriteController';
import { cardController } from './modules/controller/cardController';

const init = async () => {
    try {
        router.on('*', () => {
            renderHeader();
            renderFooter();
        });

        DATA.navigation = await getData(`${API_URL}/api/categories`);
        DATA.colors = await getData(`${API_URL}/api/colors`);

        createCssColors(DATA.colors);

        router.on('/', () => {
            mainPage();
        });
        
        router.on('women', () => {
            mainPage('women');
        });
        
        router.on('men', () => {
            mainPage('men');
        });

        router.on('/:gender/:category', categoryPageController);

        router.on('/product/:id', cardController);

        router.on('search', searchPageController);

        router.on('favorite', favoriteController);
        
    } catch (e) {
        console.warn(e);
        createElement('h2', {
            textContent: 'Что-то пошло не так, попробуйте позже...'
        }, {
            parent: main,
            cb(h2) {
                h2.style.textAlign = 'center'
            }
        })
    } finally {
        router.resolve();
    }
}

init();







