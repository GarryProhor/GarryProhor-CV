import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {MdOutlineAttachEmail, MdOutlineLocationCity} from 'react-icons/md';
import {GiVibratingSmartphone} from 'react-icons/gi';
import {BsCalendar2Day} from 'react-icons/bs';

import iconDesign from "../assets/images/icon-design.svg";
import iconDev from "../assets/images/icon-dev.svg";
import iconApp from "../assets/images/icon-app.svg";
import iconPhoto from "../assets/images/icon-photo.svg";


import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";

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
        icon: iconApp,
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
        icon: iconPhoto,
        title: 'Рисунок',
        text: 'Делаю качественные рисунки любой категории на профессиональном уровне.'
    }
];

export const testimonials = [
    {
      avatar: avatar1,
      name: 'Сергей Филимончик',
      text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
          '                                    проделанной работой. У него есть\n' +
          '                                    большой опыт\n' +
          '                                    и он очень заботится о мнении клиентов.'
    },
    {
        avatar: avatar2,
        name: 'Ирина Грушник',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    },
    {
        avatar: avatar3,
        name: 'Лера Левицкая',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    },
    {
        avatar: avatar4,
        name: 'Александр Высоконов',
        text: 'Игоря наняли для создания фирменного стиля. Мы были очень довольны\n' +
            '                                    проделанной работой. У него есть\n' +
            '                                    большой опыт\n' +
            '                                    и он очень заботится о мнении клиентов.'
    }
];