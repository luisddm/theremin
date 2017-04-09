const $ = {
  id(selector, parent = document) {
    return parent.getElementById(selector);
  },

  class(selector, parent = document) {
    return parent.getElementsByClassName(selector);
  },

  name(selector, parent = document) {
    return parent.getElementsByTagName(selector);
  },

  createElement(tagName, className, idName, innerHTML) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    if (idName) el.id = idName;
    return el;
  },

  toggleDisplay(idName) {
    const el = document.getElementById(idName);
    if (el.classList.value.includes('hidden')) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  },
};

export default $;
