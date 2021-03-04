const {model, Schema} = require('mongoose'); // destructuring mongoose as we are only using the model and Schema from mongoose. Not using the whole thing.

const musicSchema = new Schema({
    name: {type:String, required: true}, // these keys must match the name values on our New.jsx file where we have the names on our Form since this is where the user is going to enter the data
    description: String,
    image: String,
    price: {type: Number, min: 0},
    quantity: {type: Number, min: 0}
})

const Music = model('Music', musicSchema);
/*
Music.create([
    {
    name: "Linkin Park",
    description: "Hybrid Theory",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",
    price: 10,
    quantity: 50
},
{
    name: "Luke Bryan",
    description: "What Makes You Country",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fa/What_makes_you_country.jpg",
    price: 10,
    quantity: 25
},
{
    name: "Rascal Flatts",
    description: "Me and My Gang",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/Meandmygang.jpg",
    price: 10,
    quantity: 10
},
{
    name: "Luke Combs",
    description: "This One's for You",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/Combs_this_one.jpg",
    price: 10,
    quantity: 100
},
{
    name: "DJ Quik",
    description: "Quik Is The Name",
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/Quik_Is_the_Name.jpg",
    price: 10,
    quantity: 100
},{
    name: "Dr. Dre",
    description: "The Chronic",
    image: "https://upload.wikimedia.org/wikipedia/en/1/19/Dr.DreTheChronic.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Snoop Dogg",
    description: "Doggystyle",
    image: "https://upload.wikimedia.org/wikipedia/en/6/63/SnoopDoggyDoggDoggystyle.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Red Hot Chili Peppers",
    description: "Blood Sugar Sex Magik",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5e/RHCP-BSSM.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Eminem",
    description: "Music to Be Murdered By",
    image: "https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png",
    price: 10,
    quantity: 100
},
{
    name: "2Pac",
    description: "All Eyez on Me",
    image: "https://upload.wikimedia.org/wikipedia/en/1/16/Alleyezonme.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Metallica",
    description: "Hardwired...to Self-Destruct",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Hardwired..._To_Self-Destruct_Album_Cover.jpeg",
    price: 10,
    quantity: 100
},
{
    name: "Usher",
    description: "8701",
    image: "https://upload.wikimedia.org/wikipedia/en/6/62/Usher8701Cover.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Maroon 5",
    description: "V",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png",
    price: 10,
    quantity: 100
},
{
    name: "Far East Movement",
    description: "Dirty Bass",
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Dirty_Bass.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Papa Roach",
    description: "Crooked Teeth",
    image: "https://upload.wikimedia.org/wikipedia/en/1/11/PapaRoachCrookedTeeth.jpg",
    price: 10,
    quantity: 100
},
{
    name: "Beastie Boys",
    description: "Licensed to Ill",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Licensed_to_ill.jpg",
    price: 10,
    quantity: 100
},
])
*/

module.exports = Music; // must export to server.js file so you can use methods and also connect to MongoDB and the only way to do this we have to export