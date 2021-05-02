// this is the search code that exists on each page of code.google.com/edu
var coreSearch;
function OnLoad() {
  return;

  var controlRoot = document.getElementById("searchResults");

  // create the search control
  coreSearch = new GSearchControl();
  coreSearch.setLinkTarget(GSearch.LINK_TARGET_SELF);
  coreSearch.setResultSetSize(GSearch.LARGE_RESULTSET);

  // prep for decoupled search form
  var searchFormElement = document.getElementById("searchForm");
  var drawOptions = new GdrawOptions();
  drawOptions.setSearchFormRoot(searchFormElement);
  drawOptions.setDrawMode(GSearchControl.DRAW_MODE_TABBED);

  // populate

  // code.google.com
  var searcher = new GwebSearch();
  searcher.setSiteRestriction("http://code.google.com/");
  searcher.setUserDefinedLabel("code.google.com");
  coreSearch.addSearcher(searcher);

  // the web
  searcher = new GwebSearch();
  coreSearch.addSearcher(searcher);

  // all blogs
  searcher = new GblogSearch();
  coreSearch.addSearcher(searcher);

  // maps api search
  searcher = new GwebSearch();
  searcher.setSiteRestriction("http://www.google.com/apis/maps/");
  searcher.setUserDefinedLabel("Maps API");
  coreSearch.addSearcher(searcher);

  // search api search
  searcher = new GwebSearch();
  searcher.setSiteRestriction("http://code.google.com/apis/ajaxsearch/");
  searcher.setUserDefinedLabel("Search API");
  coreSearch.addSearcher(searcher);

  // google apis search
  searcher = new GwebSearch();
  searcher.setSiteRestriction("http://code.google.com/apis/");
  searcher.setUserDefinedLabel("Google APIs");
  coreSearch.addSearcher(searcher);

  // curriculum search
  searcher = new GwebSearch();
  searcher.setSiteRestriction("000455696194071821846:course_materials");
  searcher.setUserDefinedLabel("Course Materials");
  coreSearch.addSearcher(searcher);

  // draw it
  coreSearch.draw(controlRoot, drawOptions);
}


function registerLoadHandler(handler) {
  var node = window;
  if (node.addEventListener) {
    node.addEventListener("load", handler, false);
  } else if (node.attachEvent) {
    node.attachEvent("onload", handler);
  } else {
    node['onload'] = handler;
  }
  return true;
}

//registerLoadHandler(OnLoad);
