FoodMeNow.Views.MenuItemShow = Backbone.View.extend({
  tagName: 'ul',
  className: 'menu-item',
  template: JST['menu/item'],
  render: function () {
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
