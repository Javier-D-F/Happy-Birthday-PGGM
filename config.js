// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Para",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Mi lindo amorcito...",  // 同上...
        "Te das cuenta lo mucho que has crecido", 
        "Hoy es tu cumpleaños, 18 años ya.",
        "¡Es el segundo cumpleaños!",
        "en donde tengo la fortuna de estar presente",
        "y no puedo imaginar mi vida sin ti.",
        "Eres mi mejor amiga,",
        "mi apoyo incondicional,",
        "mi confidente,",
        "mi amor eterno.",
        "Te agradezco",
        "Por permitirme saber de ti",
        "por estar siempre a mi lado",
        "por compartir momentos inigualables.",
        "Tu inteligencia,",
        "tu belleza,",
        "tu ternura,",
        "tu risa contagiosa,",
        "son incomparables.",
        "En este dia especial te deseo",
        "un feliz cumpleaños",
        "lleno de amor, felicidad",
        "y de las cosas mas dulces",
        "que puedas imaginar.",
        "Que este año sea un año",
        "lleno de nuevos desafios",
        "risas y aventuras emocinantes juntos",
        "Te quiero como no tienes idea.",
        "PAU~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"Mi lindo amorcito": "./imgs/xiaokeai.png",
        "Mi lindo amorcito...": "./imgs/pau.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Encender luces",
        play: "Reproducir música",
        bannar_coming: "Vamos a decorar",
        balloons_flying: "Vuela con globos",
        cake_fadein: "¿Pastel?",
        light_candle: "¿Vela?",
        wish_message: "Feliz Cumpleaños!!!",
        story: "Un mensaje para ti",
    }
};
