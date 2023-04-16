const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (node) => {

  rl.question("What's your name ? Nicknames are also acceptable :) ", (name) => {

    rl.question("What's an activity you like doing? ", (activity) => {

      rl.question("What do you listen to while doing that? ", (music) => {

        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {

          rl.question("What's your favourite thing to eat for that meal? ", (food) => {

            rl.question("Which sport is your absolute favourite? ", (sport) => {

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                // console.log(`Thank you for your valuable feedback: ${answer}`);
                console.log(`\n I like node and I think that it's ${node} , my name is ${name}, but you can call me ${name.split(' ')[0]}. I love ${activity} and listening to ${music} while doing it. My favorite meal of the day is ${meal}, and I love to eat ${food} during that time. I'm a huge fan of ${sport}, and my superpower is ${superpower}.\n`);

                rl.close();

              });
            });
          });
        });
      });
    });
  });
});

/*
// template
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/