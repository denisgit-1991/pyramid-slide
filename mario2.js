
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for (let i = 1; i != height+1; i++){
        let res = '';
        for (let j = 0; j != height+1; j++){
            if (j >= (height - i)){
                res += '#';
            }else{
                res += ' ';
            }
        }
        console.log(res);
    }

}
