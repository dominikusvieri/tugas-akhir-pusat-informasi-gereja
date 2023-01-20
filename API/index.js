import axios from "axios";

export const getNewsData = async () => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
            {
                params: {
                    bl_latitude: '11.847676',
                    tr_latitude: '12.838442',
                    bl_longitude: '109.095887',
                    tr_longitude: '109.149359',
                    limit: '30',
                    currency: 'USD',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '308a475ebdmshe7bb172b00cb178p16278cjsne615141da80c',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        )
        return data
    } catch (error) {
        return null
    }
}