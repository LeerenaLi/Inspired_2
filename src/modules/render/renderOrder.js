import { order } from "../const"
import { createElement } from "../utils/createElement";

export const renderOrder = ({render}) => {
    order.textContent = '';

    if(!render) {
        return;
    }

    const container = createElement('div', {
        className: 'container',
        innerHTML: '<h2 class="order__title">Оформление заказа</h2>',
    }, {
        parent: order,
    });

    const orderForm = createElement('form', {
        className: 'order__form',
    }, {
        parent: container,
        cb(form) {

        }
    });

    orderForm.insertAdjacentHTML('beforeend', `
        <fieldset class="order__personal">
            <label class="order__label">
                <input type="text" class="order__input" placeholder="ФИО" name="fio" required>
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="Адрес доставки" name="adresse">
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="Телефон" name="phone" required>
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="E-mail" name="mail">
            </label>
        </fieldset>

        <fieldset class="order__radio-list">
            <label class="order__radio radio">
                <input class="radio__input" type="radio" name="delivery" value="delivery" required>
                <span class="radio__text">Доставка</span>
            </label>

            <label class="order__radio radio">
                <input class="radio__input" type="radio" name="delivery" value="self">
                <span class="radio__text">Самовывоз</span>
            </label>
        </fieldset>

        <button class="order__submit main-button" type="submit">Оформить</button>
    `)
};

/*
<div class="container">
    <h2 class="order__title">Оформление заказа</h2>

    <form class="order__form">
        <fieldset class="order__personal">
            <label class="order__label">
                <input type="text" class="order__input" placeholder="ФИО" name="fio">
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="Адрес доставки" name="adresse">
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="Телефон" name="phone">
            </label>
            <label class="order__label">
                <input type="text" class="order__input" placeholder="E-mail" name="mail">
            </label>
        </fieldset>

        <fieldset class="order__radio-list">
            <label class="order__radio radio">
                <input class="radio__input" type="radio" name="delivery" value="delivery">
                <span class="radio__text">Доставка</span>
            </label>

            <label class="order__radio radio">
                <input class="radio__input" type="radio" name="delivery" value="self">
                <span class="radio__text">Самовывоз</span>
            </label>
        </fieldset>

        <button class="order__submit main-button" type="submit">Оформить</button>
    </form>
</div>
*/