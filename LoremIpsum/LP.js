const Text = [
    `Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.`,`Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah… wishing for The Cities of Gold.`,`Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold.`,`Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity. Top Cat! The indisputable leader of the gang. He’s the boss, he’s a pip, he’s the championship. He’s the most tip top, Top Cat.`,`One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody. One for all and all for one, it’s a pretty story. Sharing everything with fun, that’s the way to be. One for all and all for one, Muskehounds are always ready. One for all and all for one, helping everybody. One for all and all for one, can sound pretty corny. If you’ve got a problem chum, think how it could be.`,`Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better scenes, and best of all I don’t pay property tax.`,`I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.`,`Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.`,`This is my boss, Jonathan Hart, a self-made millionaire, he’s quite a guy. This is Mrs H., she’s gorgeous, she’s one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which ain’t easy, ’cause when they met it was MURDER! `,
];

const form = document.querySelector('.text-format');
const InputNumber = document.getElementById('number');
const Content = document.querySelector('.para-text');

// <--the Submit event Submit the input value to the server-->
form.addEventListener("submit",function(e) {
    //<--the preventDefault() show the submited value-->
    e.preventDefault(); 

    // <--get the value from the input-->
    const value = parseInt(InputNumber.value);

    // <--generate natural random number which don't surpass the Text length-->
    const random = Math.floor(Math.random() * Text.length);

    // <--if one condition of those is true then generate a random text-->
    if(isNaN(value) || value <= 0 || value > 9) {
        Content.innerHTML = `<p class="content">${Text[random]}</p>`;
    }else {
        /*if the 1 < input number < 9 then generate text according to the entered number || the slice function filter the input || the map funtion let us serf in the Text array's items*/
        let Template = Text.slice(0,value);
        Template = Template.map(function(text) {
            return `<p class="content">${text}</p>`;
        }).join("");
        Content.innerHTML = Template;
    }
})