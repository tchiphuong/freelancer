module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            Piazzolla: ["Piazzolla"],
        },
        extend: {
            backgroundImage: (theme) => ({
                slide: "url('/assets/images/Rectangle 1.png')",
                shadow1: "url('/assets/images/shadow1.png')",
                shadow2: "url('/assets/images/shadow2.png')",
                green: "url('/assets/images/bggreen.png')",
            }),
            height: (theme) => ({
                logo: "91px",
                lglogo: "181px",
                slider: "540px",
                sliderlinear: "526px",
                footer: "463px",
                lgline: "5px",
                mdline: "50px",
                px25: "25px",
                "257px": "257px",
                "350px": "350px",
            }),
            width: (theme) => ({
                logo: "91px",
                lglogo: "181px",
                slider: "1244px",
                footer: "1366px",
                lgline: "306px",
                mdline: "5px",
                "60%": "60%",
                "31.5%": "31.5%",
                "1229px": "1229px",
                "300px": "300px",
                "480px": "480px"
            }),
            inset: (theme) => ({
                px13: "13px",
            }),
            borderWidth: (theme) => ({
                px5: "5px",
            }),
            spacing:{
                "10px": "10px",
                "50px": "50px",
            },
            fontSize: {
              "40px": "40px",
            },
            backgroundColor: (theme) => ({
              footer: "#fbfbfb",
            }),
        },
    },
    variants: {},
    plugins: [],
};
