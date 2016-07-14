Router.configure({
	layoutTemplate:'layout',
})


Router.route('/',{
	name:"consent",
	template:"consent"
});

Router.route('/practisegame',{
	name:"practiseGame",
	template:"practiseGame"
});

Router.route('/game',{
	name:"game",
	template:"game"
});

Router.route('/finish',{
	name:"finish",
	template:"finish"
});

Router.route('/instruction',{
	name:"instruction",
	template:"instruction"
});

Router.route('/reassign',{
	name:"reassign",
	template:"reassign"
});

Router.route('/survey',{
	name:"survey",
	template:"survey"
});


