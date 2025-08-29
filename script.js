// 多语言数据
const i18nData = {
    zh: {
        app: {
            title: 'Unix 时间戳转换器'
        },
        header: {
            knowledge: '知识中心',
            code: '代码示例',
            language: '切换语言',
            theme: '切换主题'
        },
        current: {
            title: '当前时间',
            pause: '暂停时间更新',
            resume: '恢复时间更新',
            timestamp_sec: 'Unix 时间戳 (秒)',
            timestamp_ms: 'Unix 时间戳 (毫秒)',
            local_time: '本地时间',
            utc_time: 'UTC 时间'
        },
        tabs: {
            smart: '智能转换',
            batch: '批量转换'
        },
        smart: {
            input_label: '输入时间戳或日期字符串',
            input_placeholder: '例如: 1735689600 或 2025-01-01 08:00:00',
            format_label: '输出格式',
            format_default: '默认格式',
            format_iso: 'ISO 8601',
            format_rfc: 'RFC 2822',
            format_long: '本地化长日期',
            format_short: '本地化短日期',
            local_time: '本地时间',
            utc_time: 'UTC 时间',
            timestamp_sec: '时间戳 (秒)',
            timestamp_ms: '时间戳 (毫秒)',
            copy: '复制'
        },
        batch: {
            input_label: '输入时间戳（每行一个）',
            input_placeholder: '1735689600\n1735776000\n1735862400000',
            output_label: '转换结果',
            convert: '批量转换',
            copy_all: '复制全部'
        },
        modal: {
            title: '知识中心',
            concepts: '核心概念',
            examples: '代码示例'
        },
        concepts: {
            unix_title: '什么是Unix时间戳？',
            unix_desc: 'Unix时间戳是从1970年1月1日00:00:00 UTC（被称为"Unix纪元"或"Epoch"）开始所经过的秒数。它是一个标准的时间表示方法，广泛用于计算机系统中。',
            utc_title: 'UTC vs GMT',
            utc_desc: 'UTC（协调世界时）是现代标准时间，而GMT（格林威治标准时间）是历史标准。在日常使用中，两者基本相同，但UTC更加精确，是基于原子钟的。',
            timezone_title: '时区 (Timezone)',
            timezone_desc: '时区是地球上使用相同标准时间的区域。不同时区相对于UTC有不同的偏移量，例如中国标准时间是UTC+8。',
            leap_title: '闰秒',
            leap_desc: '闰秒是为了补偿地球自转速度变化而偶尔添加的额外秒数。在大多数计算机系统中，闰秒通常被忽略。'
        },
        examples: {
            title: '获取当前Unix时间戳的代码示例',
            python: {
                comment1: '# 获取当前时间戳（秒）',
                comment2: '# 获取当前时间戳（毫秒）',
                comment3: '# 使用datetime模块'
            },
            cpp: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）'
            },
            c: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）'
            },
            java: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）',
                comment3: '// 使用Java 8+ API'
            },
            csharp: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）',
                comment3: '// 传统方法'
            },
            javascript: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）',
                comment3: '// 使用new Date()'
            },
            go: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）',
                comment3: '// 获取当前时间戳（纳秒）'
            },
            perl: {
                comment1: '# 获取当前时间戳（秒）',
                comment2: '# 获取当前时间戳（毫秒）',
                comment3: '# 使用内置time函数'
            },
            pascal: {
                comment1: '// 获取当前时间戳（秒）',
                comment2: '// 获取当前时间戳（毫秒）'
            },
            fortran: {
                comment1: '! 获取当前时间戳（需要系统调用）',
                comment2: '! 或使用date_and_time内置函数'
            },
            sql: {
                comment1: '-- MySQL',
                comment2: '-- PostgreSQL',
                comment3: '-- SQL Server'
            }
        },
        footer: {
            copyright: '© 2025 MRZ | 开发者客户端工具'
        },
        messages: {
            copied: '已复制',
            parse_timestamp_sec: '解析为秒级时间戳',
            parse_timestamp_ms: '解析为毫秒级时间戳',
            parse_timestamp_sec_32: '解析为秒级 (32位兼容) 时间戳',
            parse_date: '解析为日期时间',
            parse_error: '无法解析输入内容，请检查格式',
            error_before_epoch: '日期早于Unix纪元(1970-01-01 00:00:00 UTC)',
            error_invalid_format: '无法识别的日期格式',
            error_year_range: '年份应在1970-9999范围内 (64位时间戳支持)',
            error_month_range: '月份应在1-12范围内',
            error_day_range: '日期应在1-31范围内',
            error_hour_range: '小时应在0-23范围内',
            error_minute_range: '分钟应在0-59范围内',
            error_second_range: '秒数应在0-59范围内',
            batch_error_before_epoch: '错误: 时间戳 "{0}" 早于Unix纪元',
            batch_error_out_of_range: '错误: 时间戳 "{0}" 超出JavaScript Date对象安全范围',
            batch_error_cannot_parse: '错误: 无法解析 "{0}"',
            batch_64bit_note: '(64位时间戳, 超出32位范围)'
        }
    },
    en: {
        app: {
            title: 'Unix Timestamp Converter'
        },
        header: {
            knowledge: 'Knowledge Center',
            code: 'Code Examples',
            language: 'Switch Language',
            theme: 'Toggle Theme'
        },
        current: {
            title: 'Current Time',
            pause: 'Pause time update',
            resume: 'Resume time update',
            timestamp_sec: 'Unix Timestamp (seconds)',
            timestamp_ms: 'Unix Timestamp (milliseconds)',
            local_time: 'Local Time',
            utc_time: 'UTC Time'
        },
        tabs: {
            smart: 'Smart Convert',
            batch: 'Batch Convert'
        },
        smart: {
            input_label: 'Enter timestamp or date string',
            input_placeholder: 'e.g: 1735689600 or 2025-01-01 08:00:00',
            format_label: 'Output Format',
            format_default: 'Default Format',
            format_iso: 'ISO 8601',
            format_rfc: 'RFC 2822',
            format_long: 'Localized Long Date',
            format_short: 'Localized Short Date',
            local_time: 'Local Time',
            utc_time: 'UTC Time',
            timestamp_sec: 'Timestamp (seconds)',
            timestamp_ms: 'Timestamp (milliseconds)',
            copy: 'Copy'
        },
        batch: {
            input_label: 'Enter timestamps (one per line)',
            input_placeholder: '1735689600\n1735776000\n1735862400000',
            output_label: 'Conversion Results',
            convert: 'Batch Convert',
            copy_all: 'Copy All'
        },
        modal: {
            title: 'Knowledge Center',
            concepts: 'Core Concepts',
            examples: 'Code Examples'
        },
        concepts: {
            unix_title: 'What is Unix Timestamp?',
            unix_desc: 'Unix timestamp is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC (known as "Unix Epoch"). It is a standard time representation method widely used in computer systems.',
            utc_title: 'UTC vs GMT',
            utc_desc: 'UTC (Coordinated Universal Time) is the modern standard time, while GMT (Greenwich Mean Time) is the historical standard. In daily use, the two are basically the same, but UTC is more precise and is based on atomic clocks.',
            timezone_title: 'Timezone',
            timezone_desc: 'A timezone is a region on Earth that uses the same standard time. Different timezones have different offsets relative to UTC, for example, China Standard Time is UTC+8.',
            leap_title: 'Leap Second',
            leap_desc: 'A leap second is an extra second occasionally added to compensate for changes in the Earth\'s rotation speed. In most computer systems, leap seconds are usually ignored.'
        },
        examples: {
            title: 'Code Examples for Getting Current Unix Timestamp',
            python: {
                comment1: '# Get current timestamp (seconds)',
                comment2: '# Get current timestamp (milliseconds)',
                comment3: '# Using datetime module'
            },
            cpp: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)'
            },
            c: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)'
            },
            java: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)',
                comment3: '// Using Java 8+ API'
            },
            csharp: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)',
                comment3: '// Traditional method'
            },
            javascript: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)',
                comment3: '// Using new Date()'
            },
            go: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)',
                comment3: '// Get current timestamp (nanoseconds)'
            },
            perl: {
                comment1: '# Get current timestamp (seconds)',
                comment2: '# Get current timestamp (milliseconds)',
                comment3: '# Using built-in time function'
            },
            pascal: {
                comment1: '// Get current timestamp (seconds)',
                comment2: '// Get current timestamp (milliseconds)'
            },
            fortran: {
                comment1: '! Get current timestamp (requires system call)',
                comment2: '! Or use date_and_time built-in function'
            },
            sql: {
                comment1: '-- MySQL',
                comment2: '-- PostgreSQL',
                comment3: '-- SQL Server'
            }
        },
        footer: {
            copyright: '© 2025 MRZ | Client-side Tool for Developers'
        },
        messages: {
            copied: 'Copied',
            parse_timestamp_sec: 'Parsed as second-level timestamp',
            parse_timestamp_ms: 'Parsed as millisecond-level timestamp',
            parse_timestamp_sec_32: 'Parsed as second-level (32-bit compatible) timestamp',
            parse_date: 'Parsed as date time',
            parse_error: 'Unable to parse input, please check format',
            error_before_epoch: 'Date is before Unix epoch (1970-01-01 00:00:00 UTC)',
            error_invalid_format: 'Unrecognized date format',
            error_year_range: 'Year should be in the range 1970-9999 (64-bit timestamp support)',
            error_month_range: 'Month should be in the range 1-12',
            error_day_range: 'Day should be in the range 1-31',
            error_hour_range: 'Hour should be in the range 0-23',
            error_minute_range: 'Minute should be in the range 0-59',
            error_second_range: 'Second should be in the range 0-59',
            batch_error_before_epoch: 'Error: Timestamp "{0}" is before Unix epoch',
            batch_error_out_of_range: 'Error: Timestamp "{0}" exceeds JavaScript Date object safe range',
            batch_error_cannot_parse: 'Error: Cannot parse "{0}"',
            batch_64bit_note: '(64-bit timestamp, exceeds 32-bit range)'
        }
    }
};

// 代码示例模板
const codeTemplates = {
    python: {
        title: 'Python',
        language: 'python',
        code: `import time
import datetime

{comment1}
timestamp_sec = int(time.time())

{comment2}
timestamp_ms = int(time.time() * 1000)

{comment3}
timestamp_sec_dt = int(datetime.datetime.now().timestamp())`
    },
    cpp: {
        title: 'C++',
        language: 'cpp',
        code: `#include <chrono>
#include <iostream>

{comment1}
auto timestampSec = std::chrono::duration_cast<std::chrono::seconds>
    (std::chrono::system_clock::now().time_since_epoch()).count();

{comment2}
auto timestampMs = std::chrono::duration_cast<std::chrono::milliseconds>
    (std::chrono::system_clock::now().time_since_epoch()).count();`
    },
    c: {
        title: 'C',
        language: 'c',
        code: `#include <time.h>
#include <sys/time.h>

{comment1}
time_t timestamp_sec = time(NULL);

{comment2}
struct timeval tv;
gettimeofday(&tv, NULL);
long long timestamp_ms = tv.tv_sec * 1000LL + tv.tv_usec / 1000;`
    },
    java: {
        title: 'Java',
        language: 'java',
        code: `import java.time.Instant;

{comment1}
long timestampSec = System.currentTimeMillis() / 1000;

{comment2}
long timestampMs = System.currentTimeMillis();

{comment3}
long timestampSecJava8 = Instant.now().getEpochSecond();
long timestampMsJava8 = Instant.now().toEpochMilli();`
    },
    csharp: {
        title: 'C#',
        language: 'csharp',
        code: `using System;

{comment1}
long timestampSec = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

{comment2}
long timestampMs = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

{comment3}
DateTime epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
long timestampSecOld = (long)(DateTime.UtcNow - epoch).TotalSeconds;`
    },
    javascript: {
        title: 'JavaScript',
        language: 'javascript',
        code: `{comment1}
const timestampSec = Math.floor(Date.now() / 1000);

{comment2}
const timestampMs = Date.now();

{comment3}
const timestampSecAlt = Math.floor(new Date().getTime() / 1000);`
    },
    go: {
        title: 'Go',
        language: 'go',
        code: `package main

import (
    "time"
    "fmt"
)

func main() {
    {comment1}
    timestampSec := time.Now().Unix()
    
    {comment2}
    timestampMs := time.Now().UnixMilli()
    
    {comment3}
    timestampNs := time.Now().UnixNano()
}`
    },
    perl: {
        title: 'Perl',
        language: 'perl',
        code: `use Time::HiRes qw(time);

{comment1}
my $timestamp_sec = int(time());

{comment2}
my $timestamp_ms = int(time() * 1000);

{comment3}
my $timestamp_builtin = time();`
    },
    pascal: {
        title: 'Delphi/Object Pascal',
        language: 'pascal',
        code: `uses
  System.DateUtils, System.SysUtils;

var
  TimestampSec: Int64;
  TimestampMs: Int64;
  UnixEpoch: TDateTime;

begin
  {comment1}
  TimestampSec := DateTimeToUnix(Now);
  
  {comment2}
  UnixEpoch := EncodeDate(1970, 1, 1);
  TimestampMs := MilliSecondsBetween(Now, UnixEpoch);
end;`
    },
    fortran: {
        title: 'Fortran',
        language: 'fortran',
        code: `program unix_timestamp
    implicit none
    integer :: timestamp_sec
    character(len=20) :: date_string
    
    {comment1}
    call system_clock(timestamp_sec)
    
    {comment2}
    call date_and_time(date=date_string)
    
end program unix_timestamp`
    },
    sql: {
        title: {
            zh: 'SQL (通用)',
            en: 'SQL (General)'
        },
        language: 'sql',
        code: `{comment1}
SELECT UNIX_TIMESTAMP() AS timestamp_sec;
SELECT UNIX_TIMESTAMP() * 1000 AS timestamp_ms;

{comment2}
SELECT EXTRACT(EPOCH FROM NOW()) AS timestamp_sec;
SELECT EXTRACT(EPOCH FROM NOW()) * 1000 AS timestamp_ms;

{comment3}
SELECT DATEDIFF(SECOND, '1970-01-01', GETUTCDATE()) AS timestamp_sec;`
    }
};

class UnixTimestampConverter {
    constructor() {
        // 时间更新控制
        this.isPaused = false;
        this.updateInterval = null;
        this.pausedTime = null;
        
        // 多语言控制
        this.currentLanguage = localStorage.getItem('language') || 'zh';
        
        this.initializeElements();
        this.bindEvents();
        this.loadTheme();
        this.loadLanguage();
        this.startCurrentTimeUpdate();
        this.initializeTabs();
        this.initializeModal();
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
        this.languageToggle = document.getElementById('languageToggle');
        this.knowledgeBtn = document.getElementById('knowledgeBtn');
        this.codeBtn = document.getElementById('codeBtn');

        // 模态框元素
        this.knowledgeModal = document.getElementById('knowledgeModal');
    }

    bindEvents() {
        // 主题切换
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // 语言切换
        this.languageToggle.addEventListener('click', () => this.toggleLanguage());

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

    loadLanguage() {
        this.applyLanguage(this.currentLanguage);
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
        this.currentLanguage = newLanguage;
        this.applyLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    }

    applyLanguage(language) {
        const translations = i18nData[language];
        if (!translations) return;

        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.getNestedProperty(translations, key);
            if (text) {
                element.textContent = text;
            }
        });

        // 更新所有带有 data-i18n-title 属性的元素的title
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const text = this.getNestedProperty(translations, key);
            if (text) {
                element.title = text;
            }
        });

        // 更新所有带有 data-i18n-placeholder 属性的元素的placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const text = this.getNestedProperty(translations, key);
            if (text) {
                element.placeholder = text;
            }
        });

        // 更新暂停按钮的文本和title
        this.updatePauseButtonText();

        // 更新语言切换按钮的title
        this.languageToggle.textContent = language === 'zh' ? 'EN' : '中';

        // 更新代码示例
        this.generateCodeExamples(language);
        
        // 更新复制按钮文本
        document.querySelectorAll('#codeExamples .copy-btn').forEach(btn => {
            btn.textContent = translations.smart.copy;
        });
    }

    getNestedProperty(obj, path) {
        return path.split('.').reduce((current, prop) => current && current[prop], obj);
    }

    updatePauseButtonText() {
        const translations = i18nData[this.currentLanguage];
        if (this.isPaused) {
            this.pauseBtn.title = translations.current.resume;
        } else {
            this.pauseBtn.title = translations.current.pause;
        }
    }

    generateCodeExamples(language = this.currentLanguage) {
        const translations = i18nData[language];
        const codeExamplesContainer = document.getElementById('codeExamples');
        
        if (!codeExamplesContainer) return;
        
        codeExamplesContainer.innerHTML = '';
        
        Object.keys(codeTemplates).forEach(lang => {
            const template = codeTemplates[lang];
            const comments = translations.examples[lang];
            
            if (!comments) return;
            
            // 获取标题
            let title = template.title;
            if (typeof title === 'object') {
                title = title[language] || title.zh;
            }
            
            // 替换注释占位符
            let code = template.code;
            Object.keys(comments).forEach(key => {
                code = code.replace(`{${key}}`, comments[key]);
            });
            
            const codeExample = document.createElement('div');
            codeExample.className = 'code-example';
            
            // 使用Prism.js语法高亮
            const prismLanguage = template.language || 'markup';
            
            codeExample.innerHTML = `
                <h4>${title}</h4>
                <pre><code class="language-${prismLanguage}">${this.escapeHtml(code)}</code></pre>
                <button class="copy-btn" data-copy-code="${lang}" data-i18n="smart.copy">复制</button>
            `;
            
            codeExamplesContainer.appendChild(codeExample);
        });
        
        // 应用Prism.js语法高亮
        if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(codeExamplesContainer);
        }
        
        // 重新绑定复制按钮事件
        this.bindCopyButtons();
    }

    updateCodeExamples() {
        this.generateCodeExamples(this.currentLanguage);
        
        // 更新复制按钮文本
        const translations = i18nData[this.currentLanguage];
        document.querySelectorAll('#codeExamples .copy-btn').forEach(btn => {
            btn.textContent = translations.smart.copy;
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    bindCopyButtons() {
        document.querySelectorAll('#codeExamples [data-copy-code]').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCopy(e));
        });
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
        const translations = i18nData[this.currentLanguage];
        
        if (this.isPaused) {
            // 恢复计时
            this.isPaused = false;
            this.pausedTime = null;
            this.pauseBtn.textContent = '⏸️';
            this.pauseBtn.title = translations.current.pause;
            this.pauseBtn.classList.remove('paused');
        } else {
            // 暂停计时
            this.isPaused = true;
            this.pausedTime = new Date(); // 记录暂停时的确切时间
            this.pauseBtn.textContent = '▶️';
            this.pauseBtn.title = translations.current.resume;
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
                const translations = i18nData[this.currentLanguage];
                const originalText = btn.textContent;
                btn.textContent = translations.messages.copied;
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
        // 生成代码示例
        this.generateCodeExamples();
        
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
