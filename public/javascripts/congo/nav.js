Congo.BreadcrumbView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( '<h1><a href="#">DATABASES</a></h1>' );
		// $(this.el).html( '<h1>DATABASES</h1>' );
	},
	events: {
		'click': 'sayHello'
	},
	sayHello: function() {
		alert('hello');
	}
});