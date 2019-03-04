Vue.component('project', {
    props: ['todo'],
    template: ''
});

function callGithub() {
    return 'this will hold actual data at some point';
}

var app = new Vue({
    el : '#hero',
    data : {
	name : 'Evan',
	message : 'This is a test!',
	val : 'hello',
	github : callGithub()
    }
});
