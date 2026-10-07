import { commands} from './commands.js'



export function checkFromSpell(string) {

    const arredStr = string.split(' ');

    if(arredStr[0] in commands){

        return commands[arredStr[0]](arredStr[1] != null ? arredStr[1] : null);

    }

    return `<p>The command <span class="font-medium">'${string}'</span> not found</p>`

}
