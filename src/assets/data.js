import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {MdOutlineAttachEmail, MdOutlineLocationCity} from 'react-icons/md';
import {GiVibratingSmartphone} from 'react-icons/gi';
import {BsCalendar2Day} from 'react-icons/bs';


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