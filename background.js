let config = [];

function preserveRegExp(text) {
  return text.replace(/(^\/|\/$)/g, '');
}

function assignToGroup(tabid, groupName) {
  let groupId = undefined;

  chrome.tabGroups.query(
    {
      title: groupName,
      windowId: -2,
    },
    result => {
      if (result && result.length) {
        groupId = result[0].id;
      }
      chrome.tabs.group(
        {
          groupId,
          tabIds: tabid,
        },
        groupId => {
          chrome.tabGroups.update(groupId, {
            title: groupName,
          });
        }
      );
    }
  );
}

function resolveTab(tab) {
  const url = tab.url + '';
  let flag = false;
  chrome.storage.sync.get(['config'], result => {
    if (result && result.config) {
      config = result.config;
    }
    config.forEach(conf => {
      if (new RegExp(preserveRegExp(conf.reg)).test(url)) {
        flag = true;
        assignToGroup(tab.id, conf.groupName);
      }
    });
    if (!flag) {
      assignToGroup(tab.id, 'others');
    }
  });
}

chrome.tabs.onCreated.addListener(resolveTab);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo && changeInfo.url) {
    resolveTab(tab);
  }
});
