function SideBar__init() {
    $('.side-bar > nav > ul > li').click(function() {
      var $this = $(this);
      var $ul = $this.find(' > ul');
      $ul.slideToggle();
    });
  }
  