import './index.html';
import './index.scss';

import { router } from './modules/utils/router';
import { mainPage } from './modules/controller/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/utils/createElement';
import { categoryPage } from './modules/controller/categoryPage';
import { searchPageController } from './modules/controller/searchController';

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

        router.on('/:gender/:category', categoryPage);

        router.on('search', searchPageController);
        
        // setTimeout(() => {
        //     router.navigate('men');
        // }, 3000)
        
        // setTimeout(() => {
        //     router.navigate('women');
        // }, 6000)
    } catch (e) {
        console.warn(e);
        createElement('h2', {
            textContent: 'Что-то пошло не так, попробуйте позже...'
        }, {
            parent: document.querySelector('main'),
            cb(h2) {
                h2.style.textAlign = 'center'
            }
        })
    } finally {
        router.resolve();
    }
}

init();







