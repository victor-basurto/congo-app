/**
 * Connection to DB
 */
Congo.Database = Backbone.Model.extend({

});
Congo.DatabaseCollection = Backbone.Collection.extend({
	model: Congo.Database,
	url: '/mongoData'
});

/**
 * Database View
 */
Congo.DatabaseView = Backbone.View.extend({
	tagName: 'tr',

	template: _.template( $('#database-list-template').html() ),

	events: {
		'click button': 'hello'
	},
	hello: function(ev) {
		alert('hello from li Tag');
	},

	render: function() {
		var compiled = this.template(this.model.toJSON());
		this.$el.html( compiled );
		return this;
	}
});

/**
 * Database List
 */
Congo.DatabaseListView = Backbone.View.extend({

	initialize: function() {
		this.collection.bind('reset', this.render, this);
		this.collection.bind('add', this.render, this);
		this.collection.bind('remove', this.render, this);
	},

	tagName: 'tbody',
	// className: 'table table-striped',

	render: function() {

		var els = [];

		// for ( var i = 1; i <= 5; i++ ) {
		this.collection.each(function(item) {
			var itemView = new Congo.DatabaseView({ model: item });
			// this.$el.append( itemView.render().el );
			els.push(itemView.render().el);
		});
		// return this;
		this.$el.html( els );
		$('#database-list').html( this.$el );
	}
});

