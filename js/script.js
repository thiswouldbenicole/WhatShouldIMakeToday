var advice = ["Hit a creative block?", "Don't be shy...", "Need a new project?"];
var randoAdviceNum = Math.floor(Math.random()*(advice.length));
document.write("<p>" + advice[randoAdviceNum] + "</p>");


var verbs = ["designing", "making", "recreating"];
var randoVerbsNum = Math.floor(Math.random()*(verbs.length));
document.write("<h1>Try " + verbs[randoVerbsNum]);

var nouns = ["a deer", "pop art", "a piñata", "a pokemon", "a data visualization chart", "a voodoo doll", "a business card", "furniture", "a fort", "a piggy bank", "a ruler", "a box of crayons", "a fish", "your favorite tv show", "a teddy bear", "your friends", "your hopes and dreams", "a bike", "a logo", "a stamp", "a website"];
var randoNounsNum = Math.floor(Math.random()*(nouns.length));
document.write(" " +nouns[randoNounsNum]);

var mediums = ["with fabric", "with stencils", "with cheerios", "out of fruit", "with felt", "with wires", "with thread", "with blocks", "with light", "out of soap", "out of clay", "with candy", "with gum", "with paper", "with only found objects", "with trash", "and put it on a tshirt", "with matches", "with tape", "with bread", "out of legos", "with string", "with yarn", "with toothpaste", "with food", "out of vegetables", "out of meat", "with toothpicks", "with eggs", "and put a bird on it", "using only a ball-point pen", "with peanut butter", "out of bread", "with a laser-cutter", "out of wood", "with hot cheetos", "out of chairs", "on a balloon. Deflate it.", "with your lunch", "with your dinner", "with your breakfast", "with an index card", "with the next thing someone hands to you", "with the object closest to your right hand", "with the object closest to your left hand", "in Photoshop", "in Illustrator", ", animated", "as a still life painting"];
var randoMediumsNum = Math.floor(Math.random()*(mediums.length));
document.write(" " + mediums[randoMediumsNum] + "</h1>"); 

document.write("<a href='http://www.whatshouldimaketoday.tumblr.com'><p id='refresh'>or refresh for another?</p></a>"); 

