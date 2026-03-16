"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Mail, MessageSquare, Phone, Send, User, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: string[];
};

const INITIAL_MESSAGE: Message = {
  id: "1",
  type: "bot",
  text: "Welcome to Nirgranth Creations. We manufacture authority. What are you looking to scale today?",
  options: ["🚀 Social Media Dominance", "🎙️ Recording / Voiceover", "🎨 Graphics & Video", "💻 App / Web Development", "📅 Event Management"]
};

export default function PremiumChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState<"service" | "details" | "contact" | "success">("service");
  const [leadData, setLeadData] = useState({ service: "", details: "", contact: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const addMessage = (msg: Message) => {
    setMessages(prev => [...prev, msg]);
  };

  const botReply = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({ id: Date.now().toString(), type: "bot", text, options });
    }, 1200);
  };

  const handleOptionClick = (option: string) => {
    addMessage({ id: Date.now().toString(), type: "user", text: option });
    
    if (step === "service") {
      setLeadData(prev => ({ ...prev, service: option }));
      setStep("details");
      botReply(`Understood. ${option} requires a strategic edge. Briefly describe your goal or a problem you're facing?`);
    }
  };

  const handleUserInput = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue("");
    addMessage({ id: Date.now().toString(), type: "user", text });

    if (step === "details") {
      setLeadData(prev => ({ ...prev, details: text }));
      setStep("contact");
      botReply("Got it. We're ready to execute. Leave your WhatsApp or Email so we can send you our custom roadmap.");
    } else if (step === "contact") {
      const finalData = { ...leadData, contact: text };
      setLeadData(finalData);
      setStep("success");
      
      // Submit Lead
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            message: `Service: ${finalData.service} | Details: ${finalData.details}`, 
            contact: finalData.contact, 
            type: "automated-chat" 
          }),
        });
      } catch (err) {
        console.error(err);
      }
      
      botReply("Signal Received. We will reach out within 2 hours to execute your vision.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-[#FF5851] rounded-2xl flex items-center justify-center text-white shadow-[0_20px_40px_rgba(255,88,81,0.4)] hover:scale-110 transition-transform relative group"
          >
            <div className="absolute inset-0 bg-[#FF5851] rounded-2xl animate-ping opacity-20"></div>
            <MessageSquare size={28} className="relative z-10" />
            <div className="absolute -top-12 right-0 bg-white text-black text-xs font-black px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
              Direct Access
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            className="w-[360px] md:w-[420px] bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[550px]"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#FF5851] to-orange-600 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl p-1 flex items-center justify-center">
                  <Image src="/logo.svg" alt="Nirgranth" width={32} height={32} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-black text-lg leading-tight tracking-tight">Master Execution</h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold opacity-80 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Lead Intel active
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                   setIsOpen(false);
                   // Reset if completed
                   if (step === "success") {
                     setMessages([INITIAL_MESSAGE]);
                     setStep("service");
                   }
                }} 
                className="hover:bg-black/10 p-2 rounded-xl transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto custom-scrollbar flex flex-col gap-4 bg-zinc-900/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] flex gap-2 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === "user" ? "bg-white/10" : "bg-[#FF5851]/10 text-[#FF5851]"}`}>
                      {msg.type === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                          msg.type === "user" 
                            ? "bg-[#FF5851] text-white rounded-tr-none" 
                            : "bg-white/5 border border-white/10 text-white rounded-tl-none"
                        }`}>
                          {msg.text}
                        </div>
                        {msg.options && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {msg.options.map(opt => (
                              <button
                                key={opt}
                                onClick={() => handleOptionClick(opt)}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-white hover:bg-[#FF5851] hover:border-[#FF5851] transition-all"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF5851]/10 text-[#FF5851] flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-white/5 bg-black/20 shrink-0">
              <form 
                onSubmit={handleUserInput}
                className="relative flex items-center gap-2"
              >
                <input
                  disabled={step === "service" || step === "success" || isTyping}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    step === "service" ? "Select an option above..." :
                    step === "details" ? "Type your requirements..." :
                    step === "contact" ? "WhatsApp / Email number..." :
                    "Thank you!"
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-white placeholder:text-white/20 focus:border-[#FF5851] focus:ring-1 focus:ring-[#FF5851] transition-all outline-none text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={step === "service" || step === "success" || isTyping || !inputValue.trim()}
                  className="absolute right-2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-[#FF5851] hover:text-white transition-all disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="mt-4 flex justify-center gap-6">
                <a href="tel:+919826046833" className="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-[#FF5851] transition-colors uppercase tracking-widest">
                  <Phone size={12} /> Call Master
                </a>
                <div className="w-px h-3 bg-white/10"></div>
                <a href="mailto:contact@nirgranthcreations.com" className="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-[#FF5851] transition-colors uppercase tracking-widest">
                  <Mail size={12} /> Email Intel
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
