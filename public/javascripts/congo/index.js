// namespace
Congo = {
	/**
	 * Render the view
	 */
	initialize: function() {
		var breadcrumbView = new Congo.BreadcrumbView({ el: '#breadcrumbs' });
		breadcrumbView.render();
	}
}