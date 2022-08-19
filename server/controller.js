module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["Courtesy is contagious.", "Disbelief destroys the magic.", "Imagination rules the world."];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },

    touchRubberDucky: (req, res) => {
        const touch = [`Don't touch rubber ducky`]
        res.status(200).send(touch);
    },
    
    sayHelloUser: (req, res) => {
        const hello = ['Hello User']
        res.status(200).send(hello)
    },

    pirateQuote: (req, res) => {
        const quote = ["Do you fear death?", "Ha! You afraid to get wet?", "We who ready to wake... the Kraken!"];
        let randomIndex = Math.floor(Math.random() * quote.length);
        let randomQuote = quote[randomIndex];

        res.status(200).send(randomQuote);
    }


}