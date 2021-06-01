import React from 'react'
import uuid from 'react-native-uuid'

// Flags
import Ita from '../assets/images/flags/italia.svg'
import Ale from '../assets/images/flags/alemanha.svg'
import Bel from '../assets/images/flags/belgica.svg'
import Hol from '../assets/images/flags/holanda.svg'
import Din from '../assets/images/flags/dinamarca.svg'
import Esp from '../assets/images/flags/espanha.svg'
import Por from '../assets/images/flags/portugal.svg'
import Fra from '../assets/images/flags/franca.svg'
import Ing from '../assets/images/flags/inglaterra.svg'
import Rus from '../assets/images/flags/russia.svg'

export const jackpots = [
    {
        key: String(Math.random()),
        name: 'Bolão da Galera',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Moisés',
    },
    {
        key: String(Math.random()),
        name: 'Bolão do Vina',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Vinicius',
    },
    {
        key: String(Math.random()),
        name: 'Bolão das Gatinhas',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Antônio'
    },
    {
        key: String(Math.random()),
        name: 'Bolão da Bagaceira',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Arthur'
    },
    {
        key: String(Math.random()),
        name: 'Bolão do Gamer True',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Ivan Jr'
    },
    {
        key: String(Math.random()),
        name: 'Bolão do Mala',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Jeferson'
    },
]

export const users = [
    {
        key: String(Math.random()),
        name: 'João Pedro',
        pos: 1,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/79993349_2552760481512202_3690026628441702400_o.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=-24SuJCFPW4AX-NdVIG&_nc_ht=scontent.fmvf5-1.fna&oh=2bf69f7d27923a016ae4c5640a235076&oe=60570918',
        pts: 100,
    },
    {
        key: String(Math.random()),
        name: 'Charles',
        pos: 2,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/86224631_2590121481113665_40994668271370240_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=a_n9B9ZT2z0AX-cwrVY&_nc_ht=scontent.fmvf5-1.fna&oh=42784dae768e6b6891fed82d75e6eaad&oe=6059728F',
        pts: 89,
    },
    {
        key: String(Math.random()),
        name: 'Ederson',
        pos: 3,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/14633050_1315880675091346_8996346575251593232_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=2lOwTHcTKmQAX9ub0f1&_nc_oc=AQkuCTK7hk2jOGaVOXjGyvbXUEuaV5HxId1SKZN7I2z121MgnwBt4W8WdVDGY5Fkjec&_nc_ht=scontent.fmvf5-1.fna&oh=3b7d45b5d06754fd733d6a507e11ffbe&oe=605719D5',
        pts: 86,
    },
    {
        key: String(Math.random()),
        name: 'Vinícius',
        pos: 4,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/136400047_3785542021530397_8083868005185306646_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=dVIQ8Ve6YkEAX-M3mKe&_nc_ht=scontent.fmvf5-1.fna&oh=a9fdbbe736a0245edaeef413f1ec933c&oe=60598F3C',
        pts: 83,
    },
    {
        key: String(Math.random()),
        name: 'Rômulo',
        pos: 5,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/544712_10201012833062247_1284964790_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=CFGJ3rtJCycAX-5x8wP&_nc_ht=scontent.fmvf5-1.fna&oh=8f8074b5ae21995ed8a91674c9af85e1&oe=60586E01',
        pts: 78,
    },
    {
        key: String(Math.random()),
        name: 'Gildécio',
        pos: 6,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/151415790_10215748602222925_6618993603787031519_n.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=IbPeXznF-g0AX-Mv6YP&_nc_ht=scontent.fmvf5-1.fna&oh=8bf9a305af61ad34e464f50e0778cead&oe=60572493',
        pts: 45,
    },
]

export const championships = [
    {
        key: String(Math.random()),
        name: 'Copa do Mundo',
        year: 2022,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qatar_2022_Logo.png/404px-Qatar_2022_Logo.png'
    },
    {
        key: String(Math.random()),
        name: 'Champions League',
        year: 2022,
        image: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/116px-UEFA_Champions_League_logo_2_svg.png',
    },
    {
        key: String(Math.random()),
        name: 'Europa League',
        year: 2022,
        image: 'https://i.pinimg.com/originals/10/b1/d8/10b1d8001463bb24c5372c13b67f8475.png',
    },
    {
        key: String(Math.random()),
        name: 'Copa América',
        year: 2022,
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/2019_Copa_Am%C3%A9rica_logo.svg/250px-2019_Copa_Am%C3%A9rica_logo.svg.png',
    },
    {
        key: String(Math.random()),
        name: 'Copa Libertadores',
        year: 2022,
        image: 'https://upload.wikimedia.org/wikipedia/pt/4/4b/Conmebol_Libertadores_Bridgestone_logo.png',
    },
    {
        key: String(Math.random()),
        name: 'Copa do Brasil',
        year: 2022,
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
    }
]

const date = new Date()
const today = date.getDate()
const week_day = date.getDay()
const month = date.getMonth() + 1
const monthFormat = month < 10 ? '0' + month : month
const year = date.getFullYear()
const hour = date.getHours()
const minute = date.getMinutes()
const minuteFormat = minute < 10 ? '0' + minute : minute
const days = new Array('dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb')

export const games = [
    {
        id: uuid.v4(),
        championship: 'Eurocopa',
        stadium: 'OLÍMPICO DE ROMA',
        flag_home: <Ita width={50} height={50} />,
        flag_away: <Ale width={50} height={50} />,
        team_home: 'Itália',
        team_away: 'Alemanha',
        date: `${days[week_day]}, ${today}/${monthFormat} às ${hour}:${minuteFormat}`,
        year: year,
        status: 'Em andamento',
        home_score: 0,
        away_score: 0,
        pn_home_score: 0,
        pn_away_score: 0
    },
    {
        id: uuid.v4(),
        championship: 'Eurocopa',
        stadium: 'OLÍMPICO DE BAKU',
        flag_home: <Bel width={50} height={50} />,
        flag_away: <Hol width={50} height={50} />,
        team_home: 'Bélgica',
        team_away: 'Holanda',
        date: `${days[week_day]}, ${today}/${monthFormat} às ${hour}:${minuteFormat}`,
        year: year,
        status: 'Em andamento',
        home_score: 0,
        away_score: 0
    },
    {
        id: uuid.v4(),
        championship: 'Eurocopa',
        stadium: 'OLÍMPICO DE ROMA',
        flag_home: <Din width={50} height={50} />,
        flag_away: <Esp width={50} height={50} />,
        team_home: 'Dinamarca',
        team_away: 'Espanha',
        date: `${days[week_day]}, ${today}/${monthFormat} às ${hour}:${minuteFormat}`,
        year: year,
        status: 'Encerrado',
        home_score: 2,
        away_score: 2,
        pn_home_score: 3,
        pn_away_score: 5
    },
    {
        id: uuid.v4(),
        championship: 'Eurocopa',
        stadium: 'PARKEN',
        flag_home: <Por width={50} height={50} />,
        flag_away: <Fra width={50} height={50} />,
        team_home: 'Portugal',
        team_away: 'França',
        date: `${days[week_day]}, ${today}/${monthFormat} às ${hour}:${minuteFormat}`,
        year: year,
        status: 'Em andamento',
        home_score: 0,
        away_score: 0
    },
    {
        id: uuid.v4(),
        championship: 'Eurocopa',
        stadium: 'ARENA NAC. BUCARESTE',
        flag_home: <Ing width={50} height={50} />,
        flag_away: <Rus width={50} height={50} />,
        team_home: 'Inglaterra',
        team_away: 'Rússia',
        date: `${days[week_day]}, ${today}/${monthFormat} às ${hour}:${minuteFormat}`,
        year: year,
        status: 'Encerrado',
        home_score: 3,
        away_score: 1
    },
]