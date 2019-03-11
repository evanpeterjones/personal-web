Vue.component('project', {
    props: ['todo'],
    template: ''
});

function callGithub() {
    return 'this will hold actual data at some point';
}

var haikus = [
    "<h1>Hello,<br />I'm Evan.</h1><p>Developer, Creator,</p><p><i>~ this is a Haiku ~</i></p><br/></div>",
    "<p><b>I write, erase, rewrite,<p/><p>erase again, and then</p><p>a poppy blooms</p></b><p><br/><i>~ Hokushi ~</i></p>",
    "<p><b>What a strange thing!</p><p>to be alive</p><p>beneath cherry blossoms.</b></p><p><br/><i>~ Kobayashi Issa ~</i></p>",
]
var savemeh = "<p><b>The wren</p><p>earns his living </p><p>Noiselessly.</b><br/><p><br /><i>~ Kobayashi Issa ~</p></i>"

var index = 0

var app = new Vue({
    el : '#hero',
    data : {
	welcomeHaiku : haikus[0],
	github : callGithub()
    },
    methods : {
	newHaiku() {
	    this.welcomeHaiku = haikus[index%(haikus.length)]
	    index++;
	}
    }
});
