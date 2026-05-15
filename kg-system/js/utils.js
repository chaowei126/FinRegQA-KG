/**
 * 金融监管知识图谱系统 - 工具函数
 * ========================================
 * 包含通用的工具函数
 */

/**
 * 显示 Toast 提示
 * @param {string} msg - 提示消息
 */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastMsg').textContent = msg;
  t.className = 'toast';
  setTimeout(() => t.className = 'toast hide', 4000);
}

/**
 * 格式化日期时间
 * @param {Date|string} date - 日期对象或日期字符串
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * 获取文件类型图标
 * @param {string} type - 文件类型 (pdf/xlsx/docx)
 * @returns {string} 类型标识
 */
function getFileTypeLabel(type) {
  const labels = { pdf: 'PDF', xlsx: 'XLSX', word: 'WORD', docx: 'WORD', doc: 'WORD' };
  return labels[type.toLowerCase()] || type.toUpperCase();
}

/**
 * 获取文件类型样式类
 * @param {string} type - 文件类型
 * @returns {string} CSS类名
 */
function getFileBadgeClass(type) {
  const classes = { pdf: 'badge-pdf', xlsx: 'badge-xlsx', word: 'badge-word', docx: 'badge-word' };
  return classes[type.toLowerCase()] || 'badge-pdf';
}

/**
 * 格式化文件大小
 * @param {number} bytes - 字节数
 * @returns {string} 格式化后的大小字符串
 */
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * 防抖函数
 * @param {Function} fn - 要防抖的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * 节流函数
 * @param {Function} fn - 要节流的函数
 * @param {number} limit - 时间限制（毫秒）
 * @returns {Function} 节流后的函数
 */
function throttle(fn, limit = 100) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 生成唯一ID
 * @returns {string} 唯一ID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

/**
 * 深拷贝对象
 * @param {any} obj - 要拷贝的对象
 * @returns {any} 拷贝后的对象
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

/**
 * 切换导航菜单
 * @param {string} navId - 导航项ID
 */
function toggleKgMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('kgSubmenu');
  if (menu) {
    menu.classList.toggle('show');
  }
  document.addEventListener('click', closeKgMenu);
}

function closeKgMenu() {
  const menu = document.getElementById('kgSubmenu');
  if (menu) {
    menu.classList.remove('show');
  }
  document.removeEventListener('click', closeKgMenu);
}

/**
 * 跳转到指定页面
 * @param {string} page - 页面名称
 */
function navigateTo(page) {
  // 跳转到对应的 HTML 页面
  window.location.href = page + '.html';
}

// 页面切换函数
function switchNav(nav) {
  navigateTo(nav);
}
