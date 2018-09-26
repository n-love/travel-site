import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }
    
    refreshWaypoints() {
        this.lazyImages.on("load", function(){
           Waypoint.refreshAll(); 
        });
    }
    
    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    
    createHeaderWaypoint() {
        var currentItem = this;
        new Waypoint({
            element: currentItem.headerTriggerElement[0],
            handler: function(direction) {
                
                if (direction == "down"){
                   currentItem.siteHeader.addClass("site-header--dark"); 
                }
                
                else {
                    currentItem.siteHeader.removeClass("site-header--dark"); 
                }
                    
            }
        });
    }
    
    createPageSectionWaypoints() {
        var constThat = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if (direction == "down"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        constThat.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "23%"
           }); 
           
           new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if (direction == "up"){
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        constThat.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-30%"
           }); 
        });
    }
}

export default StickyHeader;