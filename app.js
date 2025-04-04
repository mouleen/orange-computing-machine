let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.net', '.us', '.io'];

// Genero los .com

pronoun.forEach((p)=>{
        adj.forEach((a)=>{
            noun.forEach((n)=>{
                dom.forEach((d)=>{
                    console.log(p + a + n + d);
                })
        })})
});
