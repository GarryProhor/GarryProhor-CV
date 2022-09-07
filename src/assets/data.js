import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {MdOutlineAttachEmail, MdOutlineLocationCity} from 'react-icons/md';
import {GiVibratingSmartphone} from 'react-icons/gi';
import {BsCalendar2Day} from 'react-icons/bs';
import Profile from '../components/blog/profile/index'


import iconDesign from "../assets/images/icon-design.svg";
import iconDev from "../assets/images/icon-dev.svg";


import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";

import logo1 from "../assets/images/logo-1-color.png";
import logo2 from "../assets/images/logo-2-color.png";
import logo3 from "../assets/images/logo-3-color.png";
import logo4 from "../assets/images/logo-4-color.png";
import logo5 from "../assets/images/logo-5-color.png";
import logo6 from "../assets/images/logo-6-color.png";

import project1 from "../assets/images/chess-1.png";
import project2 from "../assets/images/chess-2.png";
import project3 from "../assets/images/gravity-figma.png";
import project4 from "../assets/images/tailand-figma.png";
import project5 from "../assets/images/tailand-blog-figma.png";
import project6 from "../assets/images/watches-1.png";
import project7 from "../assets/images/watches-2.png";
import project8 from "../assets/images/translate-gomel.png";
import project9 from "../assets/images/translate-gomel-2.png";
import project10 from "../assets/images/translate-gomel-figma.png";
import project11 from "../assets/images/picture-1.jpg";

export const links = [
    {
        name: "Обо мне",
        path: '/'
    },
    {
        name: "Резюме",
        path: '/resume'
    },
    {
        name: "Портфолио",
        path: '/portfolio'
    },
    {
        name: "Блог",
        path: '/blog'
    },
    {
        name: "Контакты",
        path: '/contact'
    },
    {
        name: <Profile />,
        path: '/blog'
    }
];

export const profiles = [
    {
        title: 'Войти',
        path: '/blog'
    },
    {
        title: 'Регистрация',
        path: '/blog'
    },
    {
        title: 'Информация о профиле',
        path: '/blog'
    },
    {
        title: 'Создать новый пост',
        path: '/blog'
    }
];

export const titles = [
    {title: 'ReactJS разработчик'},
    {title: 'Java  разработчик'}
];

export const contacts = [
    {
        icon: <MdOutlineAttachEmail />,
        title: 'Email',
        link: 'proxor-007@mail.ru',
        href: 'mailto:proxor-007@mail.ru'
    },
    {
        icon: <GiVibratingSmartphone />,
        title: 'Phone',
        link: '+375 (29) 6-820-360',
        href: 'tel:+375296820360'
    },
    {
        icon: <BsCalendar2Day />,
        title: 'Birthday',
        link: 'Февраль 7, 1986',
        href: ''
    },
    {
        icon: <MdOutlineLocationCity />,
        title: 'Location',
        link: 'Гомель, Беларусь',
        href: ''
    }
];

export const socials = [
    {
      icon: <AiOutlineLinkedin/>,
      name: 'logo-linkedin',
      href: 'https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-7929a2219/'
    },
    {
        icon: <AiOutlineGithub />,
        name: 'logo-github',
        href: 'https://github.com/GarryProhor'
    },
    {
        icon: <TbBrandTelegram />,
        name: 'logo-t',
        href: 'https://t.me/garry_prohor'
    }
];

export const doing = [
    {
        icon: iconDev,
        title: 'Веб-разработка',
        text: 'Качественная разработка сайтов на профессиональном уровне при помощи ReactJS.'
    },
    {
        icon: iconDev,
        title: 'Разработка серверной части',
        text: 'Профессиональная разработка приложений на Java.'
    },
    {
        icon: iconDesign,
        title: 'Веб дизайн',
        text: 'Самый современный и качественный дизайн, выполненный на профессиональном уровне.'
    },
    {
        icon: iconDesign,
        title: 'Рисунок',
        text: 'Делаю качественные рисунки любой категории на профессиональном уровне.'
    }
];

export const testimonials = [
    {
      id: 0,
      avatar: avatar1,
      name: 'Сергей Филимончик',
      text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
          '                                    проделанной работой. У него есть\n' +
          '                                    большой опыт\n' +
          '                                    и он очень заботится о мнении клиентов.'
    },
    {
        id: 1,
        avatar: avatar2,
        name: 'Ирина Грушник',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    },
    {
        id: 2,
        avatar: avatar3,
        name: 'Лера Левицкая',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    },
    {
        id: 3,
        avatar: avatar4,
        name: 'Александр Высоконов',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    }
];

export const clients = [
    {
        logo: logo1
    },
    {
        logo: logo2
    },
    {
        logo: logo3
    },
    {
        logo: logo4
    },
    {
        logo: logo5
    },
    {
        logo: logo6
    }
];

export const education = [
    {
        name: 'Белорусский национальный технический университет',
        period: '2004 — 2009',
        text: 'Квалификация - инженер.'
    },
    {
        name: 'ИТ-Класс',
        period: '2020-2021',
        text: 'Основы Java.'
    },
    {
        name: 'INTERVALE',
        period: '2021 — 2022',
        text: 'Java Spring'
    },
    {
        name: 'Cамостоятельное изучение',
        period: '2021 — настоящее время',
        text: 'HTML, CSS, JavaScript/ReactJS'
    }
];
export const experience = [
    {
        name: 'Java',
        period: 'декабрь 2021 — март 2022',
        text: 'Выполнил 2 проекта по разработке сервиса поиска, хранения и продажи книг.\n' +
            '                           Реализован командный проект.'
    },
    {
        name: 'ReactJS',
        period: '2022 — настоящее время',
        text: 'Выполнил несколько пет проектов.'
    },
    {
        name: 'Фрилансер',
        period: '2022 — настоящее время',
        text: 'Выполнил 4 заказа на фрилансе.'
    }
];

export const progress = [
    {
       title: 'Java',
       percentage: 70
    },
    {
        title: 'Java Spring',
        percentage: 60
    },
    {
        title: 'HTML/CSS',
        percentage: 70
    },
    {
        title: 'ReactJS',
        percentage: 70
    }
];

export const categories = [
    {
      id: 0,
      title: 'Все',
      path: 'all'
    },
    {
        id: 1,
        title: 'Веб разработка',
        path: 'develop'
    },
    {
        id: 2,
        title: 'Веб дизайн',
        path: 'design'
    },
    {
        id: 3,
        title: 'Приложения',
        path: 'app'
    },
    {
        id: 4,
        title: 'Рисунки',
        path: 'pictures'
    }
];

export const projects = [
    {
        id: 0,
        project: project1,
        title: 'Chess - 1',
        category: 'Приложения'
    },
    {
        id: 1,
        project: project2,
        title: 'Chess - 2',
        category: 'Приложения'
    },
    {
        id: 2,
        project: project3,
        title: 'Gravity',
        category: 'Веб дизайн'
    },
    {
        id: 3,
        project: project9,
        title: 'Translate-gomel ',
        category: 'Веб разработка'
    },
    {
        id: 4,
        project: project4,
        title: 'Thailand',
        category: 'Веб дизайн'
    },
    {
        id: 5,
        project: project5,
        title: 'Thailand Blog',
        category: 'Веб дизайн'
    },
    {
        id: 6,
        project: project7,
        title: 'Watches Shop',
        category: 'Веб разработка'
    },
    {
        id: 7,
        project: project8,
        title: 'Translate-gomel mobile',
        category: 'Веб разработка'
    },
    {
        id: 8,
        project: project6,
        title: 'Watches',
        category: 'Веб разработка'
    },

    {
        id: 9,
        project: project10,
        title: 'Translate-gomel design',
        category: 'Веб дизайн'
    },
    {
        id: 10,
        project: project11,
        title: 'Рисунки',
        category: 'Рисунки'
    },
];