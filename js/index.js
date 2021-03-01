let configs = [
  {
    reg: 'feish',
    groupName: '字节',
  },
  {
    reg: 'github',
    groupName: 'github',
  },
];
const saveBtn = document.querySelector('#save');
const plusBtn = document.querySelector('#plus button');
const tips = document.querySelector('#tips');

function generateItem(reg = '', name = '') {
  const configWrap = document.querySelector('#wrapper');
  const wrapper = document.createElement('div');
  wrapper.classList.add('config-item');

  const inner = `
  <div class="item-reg"><input class="reg" value="${reg}"/></div>
  <div class="item-name">=> group: <input class="name" value="${name}"/></div>
  `;
  wrapper.innerHTML = inner;
  configWrap.append(wrapper);
}

function init() {
  configs.forEach(({ reg, groupName }) => {
    // console.log(reg, groupName);
    generateItem(reg, groupName);
  });
}

function getConfig(cb) {
  chrome.storage.sync.get(['config'], cb);
}

function saveConfig(config, cb) {
  chrome.storage.sync.set({ config }, cb);
}

function addItem() {
  const item = {
    reg: '',
    name: '',
  };
  generateItem(item.reg, item.name);
  configs.push(item);
}

function collectConfig() {
  const newConfigs = [];
  const wrapper = document.querySelectorAll('.config-item');
  wrapper.forEach(wrap => {
    const reg = wrap.querySelector('.reg').value;
    const name = wrap.querySelector('.name').value;

    // console.log(reg, name);
    newConfigs.push({
      reg,
      groupName: name,
    });
  });
  return newConfigs;
}

function updateTips(content = '') {
  tips.innerHTML = content;
}

function save() {
  try {
    const newConfigs = collectConfig();
    saveConfig(newConfigs, () => {
      updateTips('保存成功');
    });
  } catch (e) {
    updateTips('保存失败');
  }
}

getConfig(result => {
  if (result && result.config) {
    configs = result.config;
    init();
  }
});

saveBtn.addEventListener('click', () => {
  updateTips();
  save();
});
plusBtn.addEventListener('click', () => {
  addItem();
});
