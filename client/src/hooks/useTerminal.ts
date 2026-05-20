import { useState, useCallback, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/lib/terminalData';

export interface TerminalLine {
  type: 'input' | 'output' | 'welcome';
  content: string;
}

export const useTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'welcome', content: '// Welcome — type commands or click buttons to explore\n' }
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   const output = terminalEndRef.current?.parentElement;

if (output) {
  output.scrollTop = output.scrollHeight;
}
  }, [lines]);

  const processCommand = useCallback((command: string) => {
    const cmd = command.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLines([{ type: 'welcome', content: '// Terminal cleared.\n' }]);
      return;
    }

    let output = '';

    switch (cmd) {
      case 'help':      output = PORTFOLIO_DATA.commands.help;      break;
      case 'about':     output = PORTFOLIO_DATA.commands.about;     break;
      case 'projects':  output = PORTFOLIO_DATA.commands.projects;  break;
      case 'skills':    output = PORTFOLIO_DATA.commands.skills;    break;
      case 'contact':   output = PORTFOLIO_DATA.commands.contact;   break;
      case 'ventures':  output = PORTFOLIO_DATA.commands.ventures;  break;
      case 'vibes':     output = PORTFOLIO_DATA.commands.vibes;     break;
      case 'whoami':    output = PORTFOLIO_DATA.commands.whoami;    break;
      case 'status':    output = PORTFOLIO_DATA.commands.status;    break;
      case 'resume':
        output = PORTFOLIO_DATA.commands.resume;
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = '/Divyanshi_Vashistha_Resume.pdf';
          a.download = 'Divyanshi_Vashistha_Resume.pdf';
          a.click();
        }, 500);
        break;
      default:
        output = `bash: ${cmd}: command not found\nType 'help' to see available commands.`;
    }

    setHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setLines(prev => [
      ...prev,
      { type: 'input',  content: `divyanshi@portfolio:~$ ${command}` },
      { type: 'output', content: output },
    ]);
  }, []);

  const handleInput = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) { processCommand(input); setInput(''); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = historyIndex + 1;
      if (idx < history.length) { setHistoryIndex(idx); setInput(history[history.length - 1 - idx]); }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) { const idx = historyIndex - 1; setHistoryIndex(idx); setInput(history[history.length - 1 - idx]); }
      else { setHistoryIndex(-1); setInput(''); }
    }
  }, [input, history, historyIndex, processCommand]);

  const executeCommand = useCallback((cmd: string) => {
    setInput('');
    processCommand(cmd);
  }, [processCommand]);

  return { lines, input, setInput, handleInput, terminalEndRef, processCommand, executeCommand };
};
