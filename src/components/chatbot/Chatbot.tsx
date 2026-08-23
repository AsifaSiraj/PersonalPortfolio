'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatbotQA, defaultChatResponse } from '@/data/portfolio-data';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
 }

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch = defaultChatResponse;
  let bestScore = 0;

  for (const qa of chatbotQA) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (lower.includes(kw.toLowerCase())) {
        score += kw.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa.answer;
    }
  }
  return bestMatch;
}

// Robot Character Component
function BotCharacter({ isThinking, isSpeaking }: { isThinking: boolean; isSpeaking: boolean }) {
  return (
    <div className="relative w-16 h-16 flex-shrink-0">
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl blur-md transition-opacity duration-500 ${
          isSpeaking ? 'opacity-60' : 'opacity-20'
        }`}
        style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
      />

      {/* Body */}
      <div
        className={`relative w-16 h-16 rounded-2xl border-2 transition-all duration-300 ${
          isSpeaking
            ? 'border-[#6c63ff] bg-[#6c63ff]/20'
            : 'border-white/20 bg-white/5'
        }`}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        {/* Eyes */}
        <div className="absolute top-5 left-3 flex gap-3">
          <motion.div
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              isThinking ? 'bg-[#ff6b9d]' : 'bg-[#6c63ff]'
            }`}
            animate={
              isThinking
                ? { scaleY: [1, 0.3, 1], scaleX: [1, 1.2, 1] }
                : isSpeaking
                ? { scaleY: [1, 0.8, 1], y: [0, -1, 0] }
                : { y: [0, 0, -1, 0] }
            }
            transition={{
              duration: isThinking ? 0.4 : isSpeaking ? 0.3 : 3,
              repeat: Infinity,
              repeatDelay: isThinking ? 0 : 2,
            }}
          />
          <motion.div
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              isThinking ? 'bg-[#ff6b9d]' : 'bg-[#6c63ff]'
            }`}
            animate={
              isThinking
                ? { scaleY: [1, 0.3, 1], scaleX: [1, 1.2, 1] }
                : isSpeaking
                ? { scaleY: [1, 0.8, 1], y: [0, -1, 0] }
                : { y: [0, 0, -1, 0] }
            }
            transition={{
              duration: isThinking ? 0.4 : isSpeaking ? 0.3 : 3,
              repeat: Infinity,
              repeatDelay: isThinking ? 0 : 2,
              delay: 0.05,
            }}
          />
        </div>

        {/* Mouth */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          animate={
            isSpeaking
              ? { width: [6, 8, 4, 7, 6], height: [2, 3, 1, 2.5, 2] }
              : isThinking
              ? { width: 4, height: 4, borderRadius: '50%' }
              : { width: 8, height: 2, borderRadius: '2px' }
          }
          transition={{ duration: isSpeaking ? 0.3 : 0.3, repeat: isSpeaking ? Infinity : 0 }}
        >
          <div
            className={`w-full h-full rounded-sm ${
              isThinking ? 'rounded-full bg-[#ff6b9d]/50' : 'bg-[#00d4ff]/50'
            }`}
          />
        </motion.div>

        {/* Antenna */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="w-px h-3 bg-white/20 mx-auto" />
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
            animate={
              isThinking
                ? { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }
                : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }
            }
            transition={{ duration: isThinking ? 0.5 : 2, repeat: Infinity }}
          />
        </div>

        {/* Ear pieces */}
        <div className="absolute top-6 -left-1 w-1 h-3 rounded-full bg-white/10" />
        <div className="absolute top-6 -right-1 w-1 h-3 rounded-full bg-white/10" />
      </div>

      {/* Speaking indicator particles */}
      <AnimatePresence>
        {isSpeaking && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ background: '#00d4ff' }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  x: [0, (i - 1) * 12],
                  y: [0, -8 - i * 4],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm Byte, Asifa's portfolio assistant! Ask me about her experience, skills, projects, or education.",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);
    setIsSpeaking(false);

    // Simulate thinking delay
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

    const answer = findAnswer(userMsg.text);
    const botMsg: Message = { id: Date.now() + 1, text: answer, sender: 'bot' };

    setIsThinking(false);
    setMessages((prev) => [...prev, botMsg]);
    setIsSpeaking(true);

    // Stop speaking after a while
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const suggestions = ['Experience', 'Skills', 'Projects', 'Education', 'Contact', 'Resume'];

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer transition-all ${
          isOpen ? 'bg-white/10 border border-white/10' : ''
        }`}
        style={
          !isOpen
            ? {
                background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                boxShadow: '0 4px 20px rgba(108,99,255,0.3)',
              }
            : undefined
        }
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? { y: [0, -4, 0] } : {}}
        transition={!isOpen ? { duration: 2, repeat: Infinity } : {}}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18" /><path d="M6 6l12 12" />
          </svg>
        ) : (
          <BotCharacter isThinking={false} isSpeaking={false} />
        )}
      </motion.button>

      {/* Notification dot */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-[4.5rem] right-6 z-50 px-2 py-1 rounded-full text-[10px] font-medium bg-[#ff6b9d] text-white"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
          >
            Ask me!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/10"
            style={{
              background: 'rgba(10, 10, 26, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(108,99,255,0.1)',
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.2 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <BotCharacter isThinking={isThinking} isSpeaking={isSpeaking} />
              <div>
                <h3 className="text-sm font-semibold text-white">Byte</h3>
                <p className="text-[11px] text-white/30">
                  {isThinking ? 'Thinking...' : isSpeaking ? 'Speaking...' : 'Portfolio Assistant'}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#6c63ff]/20 text-white/80 border border-[#6c63ff]/20 rounded-br-sm'
                        : 'bg-white/5 text-white/60 border border-white/5 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isThinking && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white/5 border border-white/5 rounded-xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]/50"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setInput(s);
                      setTimeout(() => {
                        const userMsg: Message = { id: Date.now(), text: s, sender: 'user' };
                        setMessages((prev) => [...prev, userMsg]);
                        setInput('');
                        setIsThinking(true);
                        setTimeout(() => {
                          setMessages((prev) => [
                            ...prev,
                            { id: Date.now() + 1, text: findAnswer(s), sender: 'bot' },
                          ]);
                          setIsThinking(false);
                          setIsSpeaking(true);
                          setTimeout(() => setIsSpeaking(false), 3000);
                        }, 1000);
                      }, 0);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white/70 hover:border-[#6c63ff]/30 cursor-pointer transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about Asifa..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 outline-none focus:border-[#6c63ff]/30 transition-colors"
                />
                <motion.button
                  onClick={sendMessage}
                  className="px-3 py-2 rounded-lg bg-[#6c63ff] text-white disabled:opacity-30 cursor-pointer"
                  disabled={!input.trim() || isThinking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}