const base_url = 'https://www.baidu.com/s?wd=';

browser.contextMenus.create({
  id: "search-baidu",
  title: "Search Baidu",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "search-baidu":
      console.debug(info.selectionText);
      browser.tabs.create({
        url: base_url + encodeURIComponent(info.selectionText)
      });
      break;
  }
});
