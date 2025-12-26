'use client';

import { MessageSquare, Send, Sparkles, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Adaptive flow state types
type ServiceType = 'website' | 'graphics' | 'ai-video' | 'studio' | 'exploring' | null;

type ChatStep = 
  | 'welcome'
  | 'service'
  | 'web-type'
  | 'web-stage'
  | 'web-goal'
  | 'web-timeline'
  | 'graphics-type'
  | 'graphics-purpose'
  | 'graphics-style'
  | 'video-purpose'
  | 'video-format'
  | 'video-distribution'
  | 'studio-type'
  | 'studio-usage'
  | 'contact'
  | 'confirmation';

interface ChatMessage {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface LeadData {
  service?: ServiceType;
  webType?: string;
  webStage?: string;
  webGoal?: string;
  webTimeline?: string;
  graphicsType?: string;
  graphicsPurpose?: string;
  graphicsStyle?: string;
  videoPurpose?: string;
  videoFormat?: string;
  videoDistribution?: string;
  studioType?: string;
  studioUsage?: string;
  contactMethod?: 'whatsapp' | 'email';
  contactValue?: string;
}

export default function AdaptiveChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [leadData, setLeadData] = useState<LeadData>({});
  const [contactInput, setContactInput] = useState('');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open chat after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openChat();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Add message with typing animation
  const addMessage = (content: string, type: 'bot' | 'user' = 'bot', delay = 800) => {
    if (type === 'bot') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { type, content, timestamp: new Date() }]);
      }, delay);
    } else {
      setMessages(prev => [...prev, { type, content, timestamp: new Date() }]);
    }
  };

  // Handle user selection with adaptive branching
  const handleSelection = (value: string, label: string) => {
    addMessage(label, 'user', 0);

    switch (currentStep) {
      case 'welcome':
        addMessage('What would you like help with today?', 'bot', 1000);
        setTimeout(() => setCurrentStep('service'), 1000);
        break;

      case 'service':
        setLeadData(prev => ({ ...prev, service: value as ServiceType }));
        setSelectedService(value as ServiceType);
        
        if (value === 'website') {
          addMessage('What are you planning to build?', 'bot', 1200);
          setTimeout(() => setCurrentStep('web-type'), 1200);
        } else if (value === 'graphics') {
          addMessage('What kind of content do you need?', 'bot', 1200);
          setTimeout(() => setCurrentStep('graphics-type'), 1200);
        } else if (value === 'ai-video') {
          addMessage('What is the purpose of the video?', 'bot', 1200);
          setTimeout(() => setCurrentStep('video-purpose'), 1200);
        } else if (value === 'studio') {
          addMessage('Which studio service do you need?', 'bot', 1200);
          setTimeout(() => setCurrentStep('studio-type'), 1200);
        } else if (value === 'exploring') {
          addMessage('Feel free to explore our website. If you need assistance, our team is here to help.', 'bot', 1200);
          setTimeout(() => setCurrentStep('confirmation'), 1200);
        }
        break;

      case 'web-type':
        setLeadData(prev => ({ ...prev, webType: value }));
        addMessage('What stage is this project at?', 'bot', 1000);
        setTimeout(() => setCurrentStep('web-stage'), 1000);
        break;

      case 'web-stage':
        setLeadData(prev => ({ ...prev, webStage: value }));
        addMessage('What is the primary goal of this website?', 'bot', 1000);
        setTimeout(() => setCurrentStep('web-goal'), 1000);
        break;

      case 'web-goal':
        setLeadData(prev => ({ ...prev, webGoal: value }));
        addMessage('Do you have a timeline in mind?', 'bot', 1000);
        setTimeout(() => setCurrentStep('web-timeline'), 1000);
        break;

      case 'web-timeline':
        setLeadData(prev => ({ ...prev, webTimeline: value }));
        proceedToContact();
        break;

      case 'graphics-type':
        setLeadData(prev => ({ ...prev, graphicsType: value }));
        addMessage('What is the goal of this content?', 'bot', 1000);
        setTimeout(() => setCurrentStep('graphics-purpose'), 1000);
        break;

      case 'graphics-purpose':
        setLeadData(prev => ({ ...prev, graphicsPurpose: value }));
        addMessage('Which style fits your requirement best?', 'bot', 1000);
        setTimeout(() => setCurrentStep('graphics-style'), 1000);
        break;

      case 'graphics-style':
        setLeadData(prev => ({ ...prev, graphicsStyle: value }));
        proceedToContact();
        break;

      case 'video-purpose':
        setLeadData(prev => ({ ...prev, videoPurpose: value }));
        addMessage('Preferred format?', 'bot', 1000);
        setTimeout(() => setCurrentStep('video-format'), 1000);
        break;

      case 'video-format':
        setLeadData(prev => ({ ...prev, videoFormat: value }));
        addMessage('Where will this be used?', 'bot', 1000);
        setTimeout(() => setCurrentStep('video-distribution'), 1000);
        break;

      case 'video-distribution':
        setLeadData(prev => ({ ...prev, videoDistribution: value }));
        proceedToContact();
        break;

      case 'studio-type':
        setLeadData(prev => ({ ...prev, studioType: value }));
        addMessage('What will this content be used for?', 'bot', 1000);
        setTimeout(() => setCurrentStep('studio-usage'), 1000);
        break;

      case 'studio-usage':
        setLeadData(prev => ({ ...prev, studioUsage: value }));
        proceedToContact();
        break;
    }
  };

  const proceedToContact = () => {
    addMessage('Thank you for the details.\n\nTo continue, please share your preferred contact method.\nA team member will respond personally.', 'bot', 1200);
    setTimeout(() => setCurrentStep('contact'), 1200);
  };

  const handleContactMethod = (method: 'whatsapp' | 'email') => {
    setContactMethod(method);
    addMessage(method === 'whatsapp' ? 'WhatsApp number' : 'Email address', 'user', 0);
    setLeadData(prev => ({ ...prev, contactMethod: method }));
  };

  const handleContactSubmit = async () => {
    if (!contactInput.trim()) return;

    if (contactMethod === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactInput)) {
        addMessage('Please enter a valid email address.', 'bot', 500);
        return;
      }
    } else if (contactMethod === 'whatsapp') {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(contactInput.replace(/\s/g, ''))) {
        addMessage('Please enter a valid phone number (10-15 digits).', 'bot', 500);
        return;
      }
    }

    setIsSubmitting(true);
    addMessage(contactInput, 'user', 0);

    const finalLeadData = {
      ...leadData,
      contactValue: contactInput,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalLeadData),
      });

      if (response.ok) {
        addMessage('Your request has been recorded.\n\nOur team will review the details and contact you shortly.', 'bot', 1000);
        setTimeout(() => {
          setCurrentStep('confirmation');
          setContactInput('');
          setContactMethod(null);
        }, 1000);
      } else {
        addMessage('There was an issue submitting your request. Please try again or contact us directly.', 'bot', 500);
      }
    } catch (error) {
      addMessage('There was an issue submitting your request. Please try again or contact us directly.', 'bot', 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage('Welcome to Nirgranth Creations.\n\nWe design and develop serious, high-impact digital experiences.\nI will help you reach the right solution efficiently.', 'bot', 1500);
      }, 300);
    }
  };

  const renderOptions = () => {
    const buttonClass = "group px-4 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-[#FF5851] hover:bg-gradient-to-r hover:from-[#FF5851] hover:to-[#ff4841] hover:text-white transition-all duration-300 text-sm font-medium text-left shadow-sm hover:shadow-lg transform hover:-translate-y-0.5";

    const options: { [key: string]: Array<{ value: string; label: string }> } = {
      welcome: [{ value: 'continue', label: 'Continue' }],
      service: [
        { value: 'website', label: 'Website / Web App Development' },
        { value: 'graphics', label: 'Visual Content & Graphic Design' },
        { value: 'ai-video', label: 'AI Visual Stories & Videos' },
        { value: 'studio', label: 'Studio Services (Podcast / Recording / Editing)' },
        { value: 'exploring', label: 'Just exploring' },
      ],
      'web-type': [
        { value: 'business', label: 'Business website' },
        { value: 'portfolio', label: 'Portfolio / Personal website' },
        { value: 'webapp', label: 'Web application / platform' },
        { value: 'redesign', label: 'Redesign existing website' },
        { value: 'unsure', label: 'Not sure yet' },
      ],
      'web-stage': [
        { value: 'idea', label: 'Idea stage' },
        { value: 'design-ready', label: 'Design ready' },
        { value: 'in-progress', label: 'Development in progress' },
        { value: 'improvement', label: 'Existing site needs improvement' },
      ],
      'web-goal': [
        { value: 'leads', label: 'Lead generation' },
        { value: 'brand', label: 'Brand presence' },
        { value: 'showcase', label: 'Product / service showcase' },
        { value: 'platform', label: 'Content or community platform' },
      ],
      'web-timeline': [
        { value: 'immediate', label: 'Immediate' },
        { value: '1-2months', label: 'Within 1–2 months' },
        { value: 'flexible', label: 'Flexible' },
        { value: 'research', label: 'Just researching' },
      ],
      'graphics-type': [
        { value: 'social', label: 'Social media graphics' },
        { value: 'brand', label: 'Brand visuals / identity' },
        { value: 'campaign', label: 'Campaign or launch creatives' },
        { value: 'editorial', label: 'Editorial / documentary-style content' },
      ],
      'graphics-purpose': [
        { value: 'credibility', label: 'Build credibility' },
        { value: 'reach', label: 'Increase reach' },
        { value: 'explain', label: 'Explain a serious topic' },
        { value: 'promote', label: 'Promote a project' },
      ],
      'graphics-style': [
        { value: 'minimal', label: 'Clean & minimal' },
        { value: 'editorial', label: 'Editorial / documentary' },
        { value: 'bold', label: 'Bold & experimental' },
        { value: 'guidance', label: 'Not sure — need guidance' },
      ],
      'video-purpose': [
        { value: 'awareness', label: 'Awareness / storytelling' },
        { value: 'promotion', label: 'Promotion / launch' },
        { value: 'education', label: 'Explanation / education' },
        { value: 'positioning', label: 'Brand positioning' },
      ],
      'video-format': [
        { value: 'reels', label: 'Short reels' },
        { value: 'cinematic', label: 'Cinematic visuals' },
        { value: 'motion', label: 'Motion graphics' },
        { value: 'mixed', label: 'Mixed format' },
      ],
      'video-distribution': [
        { value: 'instagram', label: 'Instagram' },
        { value: 'youtube', label: 'YouTube' },
        { value: 'website', label: 'Website' },
        { value: 'multiple', label: 'Multiple platforms' },
      ],
      'studio-type': [
        { value: 'podcast', label: 'Podcast recording' },
        { value: 'voiceover', label: 'Voice-over recording' },
        { value: 'editing', label: 'Video editing' },
        { value: 'production', label: 'Complete production support' },
      ],
      'studio-usage': [
        { value: 'online', label: 'Online platforms' },
        { value: 'promotional', label: 'Promotional material' },
        { value: 'documentary', label: 'Documentary / long-form' },
        { value: 'undecided', label: 'Not decided yet' },
      ],
    };

    if (currentStep === 'contact') {
      if (!contactMethod) {
        return (
          <div className="flex flex-col gap-2 animate-fadeIn">
            <button onClick={() => handleContactMethod('whatsapp')} className={buttonClass}>
              📱 WhatsApp number
            </button>
            <button onClick={() => handleContactMethod('email')} className={buttonClass}>
              ✉️ Email address
            </button>
          </div>
        );
      } else {
        return (
          <div className="flex gap-2 animate-fadeIn">
            <input
              type={contactMethod === 'email' ? 'email' : 'tel'}
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              placeholder={contactMethod === 'email' ? 'your@email.com' : '9876543210'}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FF5851] text-sm transition-all"
              disabled={isSubmitting}
              onKeyPress={(e) => e.key === 'Enter' && handleContactSubmit()}
            />
            <button
              onClick={handleContactSubmit}
              disabled={isSubmitting}
              className="px-5 py-3 bg-gradient-to-r from-[#FF5851] to-[#ff4841] text-white rounded-xl hover:shadow-xl transition-all text-sm font-medium disabled:opacity-50 flex items-center gap-2"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        );
      }
    }

    const stepOptions = options[currentStep];
    if (!stepOptions) return null;

    return (
      <div className="flex flex-col gap-2 animate-fadeIn">
        {stepOptions.map((option, index) => (
          <button
            key={option.value}
            onClick={() => handleSelection(option.value, option.label)}
            className={buttonClass}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Futuristic Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open assistant"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5851] to-[#ff4841] rounded-full blur-xl opacity-60 group-hover:opacity-80 animate-pulse"></div>
            {/* Main button */}
            <div className="relative bg-gradient-to-br from-[#FF5851] to-[#ff4841] text-white p-4 rounded-full shadow-2xl hover:shadow-[#FF5851]/50 transition-all duration-300 hover:scale-110">
              <MessageSquare size={28} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </button>
      )}

      {/* Compact Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] flex flex-col h-[520px] animate-slideUp shadow-2xl">
          {/* Compact Header with Logo */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-t-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5851]/10 to-transparent animate-pulse"></div>
            
            <div className="relative flex items-center justify-between p-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                {/* Compact Logo Container */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5851] to-[#ff4841] rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative w-10 h-10 bg-white rounded-xl p-1.5 shadow-lg flex items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="Nirgranth"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse shadow-lg"></span>
                </div>
                
                <div>
                  <h3 className="font-bold text-sm flex items-center gap-1.5">
                    Nirgranth Creations
                    <Sparkles size={12} className="text-[#FF5851] animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-gray-300 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></span>
                    Online
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all hover:rotate-90 duration-300"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area with Premium Background */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {msg.type === 'bot' && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5851] to-[#ff4841] rounded-lg blur opacity-30"></div>
                    <div className="relative w-7 h-7 bg-gradient-to-br from-[#FF5851] to-[#ff4841] rounded-lg p-1 flex-shrink-0 shadow-md">
                      <Image
                        src="/logo.svg"
                        alt="Bot"
                        width={20}
                        height={20}
                        className="object-contain w-full h-full filter brightness-0 invert"
                      />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl whitespace-pre-line shadow-sm ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-br from-[#FF5851] to-[#ff4841] text-white rounded-br-sm'
                      : 'bg-white text-gray-900 border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  <p className="text-xs leading-relaxed">{msg.content}</p>
                  <p className={`text-[10px] mt-1 ${msg.type === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Compact Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 justify-start animate-fadeIn">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5851] to-[#ff4841] rounded-lg blur opacity-30"></div>
                  <div className="relative w-7 h-7 bg-gradient-to-br from-[#FF5851] to-[#ff4841] rounded-lg p-1 flex-shrink-0 shadow-md">
                    <Image
                      src="/logo.svg"
                      alt="Bot"
                      width={20}
                      height={20}
                      className="object-contain w-full h-full filter brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="bg-white border border-gray-100 px-3 py-2 rounded-xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#FF5851] to-[#ff4841] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gradient-to-r from-[#FF5851] to-[#ff4841] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gradient-to-r from-[#FF5851] to-[#ff4841] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Options/Input Area */}
          {currentStep !== 'confirmation' && (
            <div className="p-3 border-t border-gray-100 bg-white">
              {renderOptions()}
            </div>
          )}

          {/* Compact Footer */}
          <div className="px-3 py-2 text-center text-[10px] bg-gradient-to-r from-gray-900 to-black text-white/60 rounded-b-2xl border-t border-white/10">
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles size={10} className="text-[#FF5851]" />
              <span>Powered by Nirgranth Creations</span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
