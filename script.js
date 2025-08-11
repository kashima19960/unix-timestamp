class UnixTimestampConverter {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.loadTheme();
        this.startCurrentTimeUpdate();
        this.initializeTabs();
        this.initializeModal();
        
        // 时间更新控制
        this.isPaused = false;
        this.updateInterval = null;
        this.pausedTime = null;
    }

    initializeElements() {
        // 当前时间元素
        this.currentTimestamp = document.getElementById('currentTimestamp');
        this.currentTimestampMs = document.getElementById('currentTimestampMs');
        this.currentLocalTime = document.getElementById('currentLocalTime');
        this.currentUtcTime = document.getElementById('currentUtcTime');
        this.pauseBtn = document.getElementById('pauseBtn');

        // 智能转换元素
        this.smartInput = document.getElementById('smartInput');
        this.smartHint = document.getElementById('smartHint');
        this.formatSelect = document.getElementById('formatSelect');
        this.localTimeOutput = document.getElementById('localTimeOutput');
        this.utcTimeOutput = document.getElementById('utcTimeOutput');
        this.timestampSecOutput = document.getElementById('timestampSecOutput');
        this.timestampMsOutput = document.getElementById('timestampMsOutput');

        // 批量转换元素
        this.batchInput = document.getElementById('batchInput');
        this.batchOutput = document.getElementById('batchOutput');
        this.batchConvert = document.getElementById('batchConvert');

        // 控制元素
        this.themeToggle = document.getElementById('themeToggle');
        this.knowledgeBtn = document.getElementById('knowledgeBtn');
        this.codeBtn = document.getElementById('codeBtn');

        // 模态框元素
        this.knowledgeModal = document.getElementById('knowledgeModal');
    }

    bindEvents() {
        // 主题切换
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // 时间暂停/恢复
        this.pauseBtn.addEventListener('click', () => this.togglePause());

        // 智能输入处理
        this.smartInput.addEventListener('input', () => this.handleSmartInput());
        this.formatSelect.addEventListener('change', () => this.handleSmartInput());

        // 批量转换
        this.batchConvert.addEventListener('click', () => this.handleBatchConvert());

        // 复制按钮
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCopy(e));
        });

        // 标签页切换
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e));
        });

        // 知识中心
        this.knowledgeBtn.addEventListener('click', () => this.openModal());
        this.codeBtn.addEventListener('click', () => this.openModal('examples'));

        // 模态框事件
        document.querySelector('.close-btn').addEventListener('click', () => this.closeModal());
        this.knowledgeModal.addEventListener('click', (e) => {
            if (e.target === this.knowledgeModal) this.closeModal();
        });

        // 模态框标签页
        document.querySelectorAll('.modal-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchModalTab(e));
        });

        // ESC 键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    startCurrentTimeUpdate() {
        const updateCurrentTime = () => {
            let now;
            
            if (this.isPaused && this.pausedTime) {
                // 如果暂停，使用暂停时的时间
                now = this.pausedTime;
            } else {
                // 正常情况使用当前时间
                now = new Date();
                // 如果刚从暂停状态恢复，更新暂停时间为null
                if (!this.isPaused) {
                    this.pausedTime = null;
                }
            }
            
            const timestampSec = Math.floor(now.getTime() / 1000);
            const timestampMs = now.getTime();

            this.currentTimestamp.textContent = timestampSec;
            this.currentTimestampMs.textContent = timestampMs;
            this.currentLocalTime.textContent = this.formatDateTime(now, 'local');
            this.currentUtcTime.textContent = this.formatDateTime(now, 'utc');
        };

        updateCurrentTime();
        this.updateInterval = setInterval(updateCurrentTime, 1000);
    }

    togglePause() {
        if (this.isPaused) {
            // 恢复计时
            this.isPaused = false;
            this.pausedTime = null;
            this.pauseBtn.textContent = '⏸️';
            this.pauseBtn.title = '暂停时间更新';
            this.pauseBtn.classList.remove('paused');
        } else {
            // 暂停计时
            this.isPaused = true;
            this.pausedTime = new Date(); // 记录暂停时的确切时间
            this.pauseBtn.textContent = '▶️';
            this.pauseBtn.title = '恢复时间更新';
            this.pauseBtn.classList.add('paused');
        }
    }

    parseTimestamp(input) {
        const num = Number(input);
        if (isNaN(num) || num < 0) return { success: false };

        const str = String(Math.floor(num));
        
        // 扩展时间戳格式支持
        if (str.length === 10) {
            // 标准32位秒级时间戳 (1970-2038)
            return { success: true, timestamp: num, type: '秒级 (32位兼容)' };
        } else if (str.length === 13) {
            // 标准毫秒级时间戳
            return { success: true, timestamp: num / 1000, type: '毫秒级' };
        } else if (str.length >= 11 && str.length <= 12) {
            // 64位秒级时间戳 (可能超出2038年)
            const year = new Date(num * 1000).getFullYear();
            if (year >= 1970 && year <= 9999) {
                return { success: true, timestamp: num, type: `秒级 (64位, ${year}年)` };
            }
        } else if (str.length >= 14 && str.length <= 16) {
            // 扩展毫秒级时间戳
            const timestamp = num / 1000;
            const year = new Date(num).getFullYear();
            if (year >= 1970 && year <= 9999) {
                return { success: true, timestamp: timestamp, type: `毫秒级 (64位, ${year}年)` };
            }
        } else if (str.length >= 16) {
            // 微秒级或纳秒级时间戳
            let divisor = 1;
            let typeDesc = '';
            
            if (str.length >= 16 && str.length <= 18) {
                // 微秒级 (16-18位)
                divisor = 1000000;
                typeDesc = '微秒级';
            } else if (str.length >= 19) {
                // 纳秒级 (19+位)
                divisor = 1000000000;
                typeDesc = '纳秒级';
            }
            
            const timestamp = num / divisor;
            const testDate = new Date(timestamp * 1000);
            const year = testDate.getFullYear();
            
            if (year >= 1970 && year <= 9999 && !isNaN(testDate.getTime())) {
                return { success: true, timestamp: timestamp, type: `${typeDesc} (${year}年)` };
            }
        }
        
        return { success: false };
    }

    parseDate(input) {
        // 常见日期格式的正则表达式
        const patterns = [
            // YYYY-MM-DD HH:mm:ss
            /^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/,
            // YYYY/MM/DD HH:mm:ss
            /^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/,
            // MM-DD-YYYY HH:mm:ss
            /^(\d{1,2})-(\d{1,2})-(\d{4})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/,
            // YYYY-MM-DD
            /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
            // YYYY/MM/DD
            /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
            // MM-DD-YYYY
            /^(\d{1,2})-(\d{1,2})-(\d{4})$/
        ];

        for (let i = 0; i < patterns.length; i++) {
            const match = input.match(patterns[i]);
            if (match) {
                let year, month, day, hour = 0, minute = 0, second = 0;
                
                if (i <= 1) { // YYYY-MM-DD or YYYY/MM/DD format
                    [, year, month, day, hour = 0, minute = 0, second = 0] = match;
                } else if (i === 2) { // MM-DD-YYYY format
                    [, month, day, year, hour = 0, minute = 0, second = 0] = match;
                } else if (i <= 4) { // Date only formats
                    if (i === 3 || i === 4) { // YYYY-MM-DD or YYYY/MM/DD
                        [, year, month, day] = match;
                    } else { // MM-DD-YYYY
                        [, month, day, year] = match;
                    }
                } else { // MM-DD-YYYY date only
                    [, month, day, year] = match;
                }

                // 边界值检查 - 扩展到64位范围
                const yearNum = parseInt(year);
                const monthNum = parseInt(month);
                const dayNum = parseInt(day);
                const hourNum = parseInt(hour);
                const minuteNum = parseInt(minute);
                const secondNum = parseInt(second);

                // 检查基本范围 - 扩展年份范围到64位支持
                if (yearNum < 1970 || yearNum > 9999) {
                    return { success: false, error: '年份应在1970-9999范围内 (64位时间戳支持)' };
                }
                if (monthNum < 1 || monthNum > 12) {
                    return { success: false, error: '月份应在1-12范围内' };
                }
                if (dayNum < 1 || dayNum > 31) {
                    return { success: false, error: '日期应在1-31范围内' };
                }
                if (hourNum < 0 || hourNum > 23) {
                    return { success: false, error: '小时应在0-23范围内' };
                }
                if (minuteNum < 0 || minuteNum > 59) {
                    return { success: false, error: '分钟应在0-59范围内' };
                }
                if (secondNum < 0 || secondNum > 59) {
                    return { success: false, error: '秒数应在0-59范围内' };
                }

                const date = new Date(yearNum, monthNum - 1, dayNum, hourNum, minuteNum, secondNum);
                
                if (!isNaN(date.getTime())) {
                    // 检查Unix时间戳是否为负数
                    const timestamp = date.getTime() / 1000;
                    if (timestamp < 0) {
                        // 对于Unix Epoch边界情况，提供UTC解释选项
                        const utcDate = new Date(Date.UTC(yearNum, monthNum - 1, dayNum, hourNum, minuteNum, secondNum));
                        const utcTimestamp = utcDate.getTime() / 1000;
                        
                        if (utcTimestamp >= 0) {
                            return { 
                                success: true, 
                                date: utcDate,
                                isUtcAdjusted: true,
                                originalTimestamp: timestamp,
                                adjustedTimestamp: utcTimestamp
                            };
                        } else {
                            return { success: false, error: '日期早于Unix纪元(1970-01-01 00:00:00 UTC)' };
                        }
                    }
                    
                    return { success: true, date };
                }
            }
        }

        // 尝试原生 Date 解析
        const date = new Date(input);
        if (!isNaN(date.getTime())) {
            const timestamp = date.getTime() / 1000;
            if (timestamp < 0) {
                return { success: false, error: '日期早于Unix纪元(1970-01-01 00:00:00 UTC)' };
            }
            return { success: true, date };
        }

        return { success: false, error: '无法识别的日期格式' };
    }

    handleSmartInput() {
        const input = this.smartInput.value.trim();
        
        if (!input) {
            this.clearOutputs();
            this.smartHint.textContent = '';
            this.smartHint.className = 'input-hint';
            return;
        }

        // 尝试解析为时间戳
        const timestampResult = this.parseTimestamp(input);
        if (timestampResult.success) {
            this.displayTimestampResult(timestampResult.timestamp);
            this.smartHint.textContent = `解析为 ${timestampResult.type} 时间戳`;
            this.smartHint.className = 'input-hint success';
            return;
        }

        // 尝试解析为日期字符串
        const dateResult = this.parseDate(input);
        if (dateResult.success) {
            this.displayDateResult(dateResult.date);
            
            let hintText = `解析为日期时间: ${dateResult.date.toLocaleString()}`;
            if (dateResult.isUtcAdjusted) {
                hintText += ` (已调整为UTC时间，原本地时间戳为: ${dateResult.originalTimestamp})`;
            }
            
            this.smartHint.textContent = hintText;
            this.smartHint.className = 'input-hint success';
            return;
        }

        // 解析失败
        this.clearOutputs();
        this.smartHint.textContent = dateResult.error || '无法解析输入内容，请检查格式';
        this.smartHint.className = 'input-hint error';
    }

    displayTimestampResult(timestamp) {
        const date = new Date(timestamp * 1000);
        const format = this.formatSelect.value;

        this.localTimeOutput.textContent = this.formatDateTime(date, 'local', format);
        this.utcTimeOutput.textContent = this.formatDateTime(date, 'utc', format);
        this.timestampSecOutput.textContent = Math.floor(timestamp);
        this.timestampMsOutput.textContent = Math.floor(timestamp * 1000);
    }

    displayDateResult(date) {
        const format = this.formatSelect.value;
        const timestamp = date.getTime() / 1000;

        this.localTimeOutput.textContent = this.formatDateTime(date, 'local', format);
        this.utcTimeOutput.textContent = this.formatDateTime(date, 'utc', format);
        this.timestampSecOutput.textContent = Math.floor(timestamp);
        this.timestampMsOutput.textContent = date.getTime();
    }

    formatDateTime(date, timezone, format = 'default') {
        const options = { timeZone: timezone === 'utc' ? 'UTC' : undefined };
        
        switch (format) {
            case 'iso':
                return timezone === 'utc' ? date.toISOString() : date.toISOString().replace('Z', this.getTimezoneOffset(date));
            case 'rfc':
                return date.toString();
            case 'local-long':
                return date.toLocaleDateString('zh-CN', { 
                    ...options,
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            case 'local-short':
                return date.toLocaleDateString('zh-CN', { 
                    ...options,
                    year: '2-digit', 
                    month: '2-digit', 
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            default:
                return timezone === 'utc' 
                    ? date.toISOString().replace('T', ' ').replace('Z', ' UTC')
                    : date.toLocaleString('zh-CN', { hour12: false });
        }
    }

    getTimezoneOffset(date) {
        const offset = date.getTimezoneOffset();
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        const sign = offset <= 0 ? '+' : '-';
        return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }

    clearOutputs() {
        this.localTimeOutput.textContent = '';
        this.utcTimeOutput.textContent = '';
        this.timestampSecOutput.textContent = '';
        this.timestampMsOutput.textContent = '';
    }

    handleBatchConvert() {
        const input = this.batchInput.value.trim();
        if (!input) {
            this.batchOutput.value = '';
            return;
        }

        const lines = input.split('\n');
        const results = lines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';

            const result = this.parseTimestamp(trimmed);
            if (result.success) {
                // 64位时间戳边界值检查
                if (result.timestamp < 0) {
                    return `错误: 时间戳 "${trimmed}" 早于Unix纪元`;
                }
                
                // 检查是否超出JavaScript Date对象的安全范围
                const maxSafeTimestamp = 8640000000000; // JavaScript Date的最大安全时间戳(秒)
                if (result.timestamp > maxSafeTimestamp) {
                    return `错误: 时间戳 "${trimmed}" 超出JavaScript Date对象安全范围`;
                }
                
                // 对于超出2038年的时间戳给出信息提示
                if (result.timestamp > 2147483647) { 
                    const date = new Date(result.timestamp * 1000);
                    return `${this.formatDateTime(date, 'local')} (64位时间戳, 超出32位范围)`;
                }
                
                const date = new Date(result.timestamp * 1000);
                return this.formatDateTime(date, 'local');
            }
            return `错误: 无法解析 "${trimmed}"`;
        });

        this.batchOutput.value = results.join('\n');
    }

    handleCopy(event) {
        const btn = event.target;
        let textToCopy = '';

        if (btn.dataset.copy) {
            const element = document.getElementById(btn.dataset.copy);
            textToCopy = element.tagName === 'TEXTAREA' ? element.value : element.textContent;
        } else if (btn.dataset.copyCode) {
            const codeElement = btn.closest('.code-example').querySelector('code');
            textToCopy = codeElement.textContent;
        }

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '已复制';
                btn.classList.add('success');
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('success');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
    }

    switchTab(event) {
        const tabName = event.target.dataset.tab;
        
        // 更新标签状态
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        // 切换内容
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    initializeTabs() {
        // 默认显示智能转换标签页
        document.querySelector('.tab[data-tab="smart"]').classList.add('active');
        document.getElementById('smartTab').classList.add('active');
    }

    openModal(tab = 'concepts') {
        this.knowledgeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 切换到指定标签页
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
        
        document.querySelector(`.modal-tab[data-modal-tab="${tab}"]`).classList.add('active');
        document.getElementById(`${tab}Tab`).classList.add('active');
    }

    closeModal() {
        this.knowledgeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    switchModalTab(event) {
        const tabName = event.target.dataset.modalTab;
        
        // 更新标签状态
        document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        // 切换内容
        document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    initializeModal() {
        // 为代码示例添加复制按钮事件
        setTimeout(() => {
            document.querySelectorAll('[data-copy-code]').forEach(btn => {
                btn.addEventListener('click', (e) => this.handleCopy(e));
            });
        }, 0);
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new UnixTimestampConverter();
});
