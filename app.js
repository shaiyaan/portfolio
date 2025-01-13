document.addEventListener('DOMContentLoaded', () => {
    // Progress Bar
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Main heading typing effect
    const mainText = "Transforming Data into Intelligent Solutions";
    const typingText = document.querySelector('.typing-text');
    let mainIndex = 0;

    function typeMainHeading() {
        if (mainIndex < mainText.length) {
            typingText.textContent += mainText.charAt(mainIndex);
            mainIndex++;
            setTimeout(typeMainHeading, 100);
        } else {
            // Start terminal only after heading is complete
            setTimeout(typeTerminal, 100); // 1 second pause after heading
        }
    }

    // Terminal typing effect with syntax highlighting
    const terminalLines = [
        { text: 'class DataScientist:', indent: '', parts: [
            { text: 'class ', class: 'keyword' },
            { text: 'DataScientist', class: 'class-name' },
            { text: ':' }
        ]},
        { text: '    def __init__(self):', indent: '    ', parts: [
            { text: '    def ', class: 'keyword' },
            { text: '__init__', class: 'function' },
            { text: '(self):' }
        ]},
        { text: '        self.name = "Shaiyaan Habib"', indent: '        ', parts: [
            { text: '        self.name = ' },
            { text: '"Shaiyaan Habib"', class: 'string' }
        ]},
        { text: '        self.role = "Finance & Data Science"', indent: '        ', parts: [
            { text: '        self.role = ' },
            { text: '"Finance & Data Science"', class: 'string' }
        ]},
        { text: '        self.skills = [', indent: '        ', parts: [
            { text: '        self.skills = [' }
        ]},
        { text: '            "Python",', indent: '            ', parts: [
            { text: '            ' },
            { text: '"Python"', class: 'string' },
            { text: ',' }
        ]},
        { text: '            "SQL",', indent: '            ', parts: [
            { text: '            ' },
            { text: '"SQL"', class: 'string' },
            { text: ',' }
        ]},
        { text: '            "Data Analysis",', indent: '            ', parts: [
            { text: '            ' },
            { text: '"Data Analysis"', class: 'string' },
            { text: ',' }
        ]},
        { text: '            "Machine Learning",', indent: '            ', parts: [
            { text: '            ' },
            { text: '"Machine Learning"', class: 'string' },
            { text: ',' }
        ]},
        { text: '            "Financial Modeling"', indent: '            ', parts: [
            { text: '            ' },
            { text: '"Financial Modeling"', class: 'string' }
        ]},
        { text: '        ]', indent: '        ', parts: [
            { text: '        ]' }
        ]},
        { text: '', indent: '', parts: [
            { text: '' }
        ]},
        { text: '# Execute Analysis', indent: '', parts: [
            { text: '# Execute Analysis', class: 'comment' }
        ]},
        { text: 'analyst = DataScientist()', indent: '', parts: [
            { text: 'analyst = ' },
            { text: 'DataScientist', class: 'class-name' },
            { text: '()' }
        ]},
        { text: 'analyst.transform_data()', indent: '', parts: [
            { text: 'analyst.transform_data()' }
        ]}
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentIndent = '';

    function typeTerminal() {
        const terminal = document.getElementById('terminal-text');
        
        if (lineIndex < terminalLines.length) {
            if (charIndex === 0) {
                let displayText = getCompletedLines();
                terminal.innerHTML = displayText + currentIndent + '<span class="typing-cursor text-white">|</span>';
                setTimeout(typeTerminal, 20);
                charIndex++;
                return;
            }

            const currentLine = terminalLines[lineIndex];
            
            if (charIndex <= currentLine.text.length) {
                let displayText = getCompletedLines();
                let currentText = currentLine.text.substring(0, charIndex);
                let coloredLine = applyColors(currentText, currentLine.parts);
                
                terminal.innerHTML = displayText + coloredLine + '<span class="typing-cursor text-white">|</span>';
                charIndex++;
                setTimeout(typeTerminal, 20);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeTerminal, 200);
            }
        } else {
            // Show bio 1 second after terminal completes
            setTimeout(showBio, 10);
        }
    }

    function getCompletedLines() {
        let displayText = '';
        for (let i = 0; i < lineIndex; i++) {
            let lineHtml = '';
            for (const part of terminalLines[i].parts) {
                lineHtml += part.class 
                    ? `<span class="${part.class}">${part.text}</span>`
                    : part.text;
            }
            displayText += lineHtml + '\n';
        }
        return displayText;
    }

    function applyColors(text, parts) {
        let result = '';
        let plainIndex = 0;
        
        for (const part of parts) {
            const partText = part.text;
            const partEnd = plainIndex + partText.length;
            
            if (text.length > plainIndex) {
                const visiblePart = partText.substring(0, text.length - plainIndex);
                if (visiblePart) {
                    result += part.class 
                        ? `<span class="${part.class}">${visiblePart}</span>`
                        : visiblePart;
                }
            }
            plainIndex += partText.length;
        }
        return result;
    }

    function showBio() {
        const bio = document.querySelector('.bio-card');
        bio.classList.remove('opacity-0', 'translate-y-4');
        bio.classList.add('opacity-100', 'translate-y-0');
    }

    const skills = [
        'Python/',
        'SQL/',
        'Machine Learning/',
        'Data Analysis/',
        'Data Visualization/',
        'Statistical Analysis/'
    ];

    // Start the sequence
    typeMainHeading();
});