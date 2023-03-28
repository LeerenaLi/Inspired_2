import { API_URL, DATA } from "../const";
import { createElement } from "../createElement";
import { getData } from "../getData";


export const renderGoods = async (title, params) => {
    const goods = document.querySelector('.goods');

    goods.textContent = '';

    const data = await getData(`${API_URL}/api/goods`, params);

    const products = Array.isArray(data) ? data : data.goods;
    
    const container = createElement('div', {
        className: 'container',
    }, {
        parent: goods,
    });

    createElement('h2', {
        className: 'goods__title',
        textContent: title,
    }, {
        parent: container,
    });

    const listCard = products.map(product => {
        const li = createElement('li', {
            className: 'goods__item',
        });

        const article = createElement('article', {
            className: 'product',
            innerHTML: `
                <a href="#/product/${product.id}" class="product__link">
                    <img src="${API_URL}/${product.pic}" alt="${product.title}" class="product__image">
                    <h3 class="product__title">${product.title}</h3>
                </a>

                <div class="product__row">
                    <p class="product__price">руб ${product.price}</p>

                    <button 
                        class="product__btn-favorite 
                        product__btn-favorite_active" 
                        aria-label="Добавить в избранное"
                        data-id="${product.id}"></button>
                </div>
            `
        }, {
            parent: li,
        });

        createElement('ul', {
            className: 'product__color-list'
        }, {
            parent: article,
            appends: product.colors.map((colorId, i) => {
                const color = DATA.colors.find(item => item.id == colorId);

                return createElement('li', {
                    className: `color color_${color.title} ${i ? '' : 'color_check'}`
                })
            })
        });

        

        return li;
    })

    createElement('ul', {
        className: 'goods__list',
    }, {
        appends: listCard,
        parent: container,
    });

    if (data.pages && data.pages > 1) {
        const pagination = createElement('div', {
            className: 'goods__pagination pagination',
        }, {
            parent: container,
        })
    }
}