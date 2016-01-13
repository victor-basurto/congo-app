/**
 * Database View
 */
Congo.DatabaseView = Backbone.View.extend({
	tagName: 'tr',
	events: {
		'click': 'hello'
	},
	hello: function() {
		alert('hello from li Tag');
	},

	render: function() {
		this.$el.html('<td>Db Name</td>');
		return this;
	}
});

/**
 * Database List
 */
Congo.DatabaseListView = Backbone.View.extend({
	tagName: 'table',
	className: 'table table-striped',

	render: function() {

		var els = [];

		for ( var i = 1; i <= 5; i++ ) {
			var itemView = new Congo.DatabaseView();
			// this.$el.append( itemView.render().el );
			els.push(itemView.render().el)
		}
		// return this;
		this.$el.html( els );
		$('#database-list').html( this.$el );
	}
});

