FoodMeNow.Views.MenuItem = Backbone.CompositeView.extend({
  className: 'menu-item',
  template: JST['menu/item'],
  render: function () {
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  events: {
    'click': 'launchItemDetail'
  },
  launchItemDetail: function () {
    PubSub.publish('launchItemModal', this.model);
  },
  addToCart: function () {
    PubSub.publish('order', this.model);
  }
});
