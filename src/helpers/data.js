import uuid from 'react-native-uuid'


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

export const roundOf16 = [
    {
        id: uuid.v4(),
        title: 'Oitavas 1',
        info: 'DOM, 27/06/21 - LA CARTUJA DE SEVILLA 16h',
        home: '1º B',
        away: '3º ADEF'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 2',
        info: 'SÁB, 26/06/21 - WEMBLEY 16h',
        home: '1º A',
        away: '2º C'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 3',
        info: 'SEG, 28/06/21 - NACIONAL BUCARESTE 16h',
        home: '1º F',
        away: '3º ABC'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 4',
        info: 'SEG, 28/06/21 - PARKEN 13h',
        home: '2º D',
        away: '2º E'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 5',
        info: 'TER, 29/06/21 - HAMPDEN PARK 16h',
        home: '1º E',
        away: '3º ABCD'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 6',
        info: 'TER, 29/06/21 - WEMBLEY 13h',
        home: '1º D',
        away: '2º F'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 7',
        info: 'DOM, 27/06/21 - PUSKÁS ARÉNA 13h',
        home: '1º C',
        away: '3º DEF'
    },
    {
        id: uuid.v4(),
        title: 'Oitavas 8',
        info: 'SÁB, 26/06/21 - JOHAN CRUIJFF 13h',
        home: '2º A',
        away: '2º B'
    },

]

export const quarterfinals = [
    {
        id: uuid.v4(),
        title: 'Quartas 1',
        info: 'SEX, 02/07/21 ARENA DE MUNIQUE 16h',
        home: 'Venc. Oitavas 1',
        away: 'Venc. Oitavas 2'
    },
    {
        id: uuid.v4(),
        title: 'Quartas 2',
        info: 'SEX, 02/07/21 SÃO PETERSBURGO 13h',
        home: 'Venc. Oitavas 3',
        away: 'Venc. Oitavas 4'
    },
    {
        id: uuid.v4(),
        title: 'Quartas 3',
        info: 'SÁB, 03/07/21 OLÍMPICO DE ROMA 16h',
        home: 'Venc. Oitavas 5',
        away: 'Venc. Oitavas 6'
    },
    {
        id: uuid.v4(),
        title: 'Quartas 4',
        info: 'SÁB, 03/07/21 OLÍMPICO DE BAKU 13h',
        home: 'Venc. Oitavas 7',
        away: 'Venc. Oitavas 8'
    },
]

export const semifinal = [
    {
        id: uuid.v4(),
        title: 'Semifinal 1',
        info: 'TER, 06/07/21 WEMBLEY 16h',
        home: 'Venc. Quartas 1',
        away: 'Venc. Quartas 2'
    },
    {
        id: uuid.v4(),
        title: 'Semifinal 2',
        info: 'QUA, 07/07/21 WEMBLEY 16h',
        home: 'Venc. Quartas 3',
        away: 'Venc. Quartas 4'
    }
]

export const final = [
    {
        id: uuid.v4(),
        title: 'Final',
        info: 'DOM, 11/07/21 WEMBLEY 16h',
        home: 'Venc. Semifinal 1',
        away: 'Venc. Semifinal 2'
    },
]

export const changeFlags = (flag) => {
    const url = '../assets/images/flags'
    if (flag === 'ALE') return require(`${url}/ALE.png`)
    else if (flag === 'AUT') return require(`${url}/AUT.png`)
    else if (flag === 'BEL') return require(`${url}/BEL.png`)
    else if (flag === 'CRO') return require(`${url}/CRO.png`)
    else if (flag === 'DIN') return require(`${url}/DIN.png`)
    else if (flag === 'ESC') return require(`${url}/ESC.png`)
    else if (flag === 'ESP') return require(`${url}/ESP.png`)
    else if (flag === 'EVQ') return require(`${url}/EVQ.png`)
    else if (flag === 'FIN') return require(`${url}/FIN.png`)
    else if (flag === 'FRA') return require(`${url}/FRA.png`)
    else if (flag === 'GAL') return require(`${url}/GAL.png`)
    else if (flag === 'HOL') return require(`${url}/HOL.png`)
    else if (flag === 'HUN') return require(`${url}/HUN.png`)
    else if (flag === 'ING') return require(`${url}/ING.png`)
    else if (flag === 'ITA') return require(`${url}/ITA.png`)
    else if (flag === 'MAC') return require(`${url}/MAC.png`)
    else if (flag === 'POL') return require(`${url}/POL.png`)
    else if (flag === 'POR') return require(`${url}/POR.png`)
    else if (flag === 'RUS') return require(`${url}/RUS.png`)
    else if (flag === 'SUE') return require(`${url}/SUE.png`)
    else if (flag === 'SUI') return require(`${url}/SUI.png`)
    else if (flag === 'TCH') return require(`${url}/TCH.png`)
    else if (flag === 'TUR') return require(`${url}/TUR.png`)
    else return require(`${url}/UCR.png`)
}

export const changeLvColor = (value) => {
    if (value <= 5) return '#022c6f'
    else if (value > 5 && value <= 10) return '#e71d36'
    else if (value > 10 && value <= 20) return '#00b4d8'
    else if (value > 20 && value <= 30) return '#38b000'
    else if (value > 30 && value <= 40) return '#ff758f'
    else if (value > 40 && value <= 50) return '#936639'
    else if (value > 50 && value <= 70) return '#8338ec'
    else if (value > 70 && value <= 100) return '#e36414'
    else if (value > 100 && value <= 150) return '#ffd000'
    else return null
}

export const classes = [
    {
        id: uuid.v4(),
        title: 'Palpiteiro de várzea',
        iconName: 'star',
        iconColor: '#022c6f',
        info: 'Level 1 ao 5',
    },
    {
        id: uuid.v4(),
        title: 'Palpiteiro raiz',
        iconName: 'star',
        iconColor: '#e71d36',
        info: 'Level 6 ao 10',
    },
    {
        id: uuid.v4(),
        title: 'Mestre palpiteiro',
        iconName: 'star',
        iconColor: '#00b4d8',
        info: 'Level 11 ao 20',
    },
    {
        id: uuid.v4(),
        title: 'Palpiteiro animal',
        iconName: 'star',
        iconColor: '#38b000',
        info: 'Level 21 ao 30',
    },
    {
        id: uuid.v4(),
        title: 'Um fenômeno!',
        iconName: 'star',
        iconColor: '#ff758f',
        info: 'Level 31 ao 40',
    },
    {
        id: uuid.v4(),
        title: 'O baixinho ta na área',
        iconName: 'star',
        iconColor: '#936639',
        info: 'Level 41 ao 50',
    },
    {
        id: uuid.v4(),
        title: 'A canhotinha do Messi',
        iconName: 'star',
        iconColor: '#8338ec',
        info: 'Level 51 ao 70',
    },
    {
        id: uuid.v4(),
        title: 'La mano de dios',
        iconName: 'star',
        iconColor: '#e36414',
        info: 'Level 71 ao 100',
    },
    {
        id: uuid.v4(),
        title: 'Rei Pelé dos palpites',
        iconName: 'star',
        iconColor: '#ffd000',
        info: 'Level 101 ao 150',
    },
]



