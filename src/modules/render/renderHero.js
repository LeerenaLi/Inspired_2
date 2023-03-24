import { createElement } from "../createElement";

const hero = document.querySelector('.hero');
const TITLE = {
    women: {
        title: 'Новая коллекция Бюстгальтер-балконет',
    },
    men: {
        title: 'Боксеры из новой коллекции',
    },
}

const container = createElement('div', 
    {
        className: 'container'
    },
);

const heroContent = createElement('div', 
    {
        className: 'hero__content'
    },
    {
        parent: container
    }
);

const heroTitle = createElement('h2', 
    {
        className: `hero__title`,
    },
    {
        parent: heroContent
    }
);

const heroLink = createElement('a', 
    {
        className: 'hero__link',
        textContent: 'Перейти',
        href: '#'
    },
    {
        parent: heroContent
    }
);

export const renderHero = (gender) => {
    if (!gender) {
        hero.style.display = 'none';
        return;
    }

    hero.style.display = '';

    hero.className = `hero hero_${gender}`;

    hero.append(container);

    heroTitle.textContent = TITLE[gender].title;
}