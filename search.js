const base_url = 'https://www.baidu.com/s?wd=';

chrome.contextMenus.create({
  id: 'search-baidu',
  title: 'Search Baidu for "%s"',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {

  switch (info.menuItemId) {
    case 'search-baidu':
      console.debug(info.selectionText);
      chrome.tabs.create({
        url: base_url + encodeURIComponent(info.selectionText)
      });
      break;
  }
});
