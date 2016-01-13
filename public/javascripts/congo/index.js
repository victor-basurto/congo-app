// namespace
Congo = {
	/**
	 * Render the view
	 */
	initialize: function() {
		// instantialize data first
		Congo.databases = new Congo.DatabaseCollection();

		//initialize views
		Congo.breadcrumbView = new Congo.BreadcrumbView({ el: '#breadcrumbs' });
		Congo.databaseList = new Congo.DatabaseListView({ collection: Congo.databases });

		// inittialize
		Congo.start();
	},
	// on initialize
	start: function() {
		// fetch data form DB
		Congo.databases.fetch();
	}
}