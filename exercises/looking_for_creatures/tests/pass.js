module.exports = function lookingForCreatures() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
        resolve("unicorn 🦄");
        }, 250);
    });
};
