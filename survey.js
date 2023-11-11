const readline = require('readline');

// Create a readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the first question
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    console.log(`That's a very interesting nickname, ${name}`);

    // Nested question about activity
    rl.question("What's an activity you like doing?", (activity) => {
        console.log(`No way! I love doing ${activity} too!`);

        // Nested question about music
        rl.question("What do you listen to while doing that?", (music) => {
            console.log(`That's pretty cool, I also like ${music}`);

            // Nested question about favorite meal
            rl.question("Which meal is your favourite (e.g: dinner, brunch, etc)? ", (mealType) => {
                console.log(`Nice! Have you tried ${mealType}?`);

                // Nested question about favorite food
                rl.question("What's your favourite thing to eat?", (food) => {
                    console.log(`Wow, I would have chosen ${food} as well! Great minds think alike`);

                    // Nested question about superpower
                    rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                        console.log(`You're a very talented person! I would have not expected you to be so good at ${superpower}!`);

                        // Close the readline interface
                        rl.close();
                    });
                });
            });
        });
    });
});