"use client";
import { useState, useEffect } from 'react';
import { Keyboard, Zap, Search, Sparkles, ArrowRight, Check, Globe, Clock, Shield, Mail, Command, FileText, Twitter, X, Play } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';

export default function QuickNoteLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [showQuickNote, setShowQuickNote] = useState(false);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'N' || e.key === 'n')) {
        e.preventDefault();
        setShowQuickNote(prev => !prev);
      }
      if (e.key === 'Escape' && showQuickNote) {
        setShowQuickNote(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showQuickNote]);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: email,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error saving email:', err);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {showQuickNote && (
        <div 
          className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm"
          style={{animation: 'fadeIn 0.2s ease-out'}}
        >
          <div 
            className="fixed bottom-8 right-8 w-[450px]"
            style={{animation: 'slideInFromBottom 0.3s ease-out'}}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-b from-zinc-900 to-black rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Quick Capture</div>
                    <div className="text-gray-400 text-xs">Just now</div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowQuickNote(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors group"
                >
                  <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <textarea
                  autoFocus
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Start typing your thoughts..."
                  className="w-full h-48 bg-transparent text-white placeholder:text-gray-500 resize-none focus:outline-none text-base leading-relaxed"
                />
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{noteText.length} characters</span>
                    </div>
                    <div className="text-gray-500">
                      Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">Esc</kbd> to close
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // In real app, this would save
                      alert('Note saved! (Demo only)');
                    }}
                    className="group relative px-4 py-2 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all group-hover:scale-105"></div>
                    <div className="relative flex items-center gap-2 text-white font-semibold text-sm">
                      <Check className="w-4 h-4" />
                      <span>Save</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Command className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                QuickNote
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Try Demo</a>
              <a href="#how" className="text-gray-400 hover:text-white transition-colors">How it works</a>
              <button 
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="relative group px-6 py-2.5 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform group-hover:scale-105"></div>
                <span className="relative text-white font-medium">Join Waitlist</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-gray-300">Lightning-fast note taking • v1.0 Beta</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2">Thoughts move fast.</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your notes should too.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Press a key. Start typing. That's it. QuickNote appears instantly over any app, 
            capturing your ideas at the speed of thought.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all group-hover:scale-105"></div>
              <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a 
              href="https://x.com/sabacodes2"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Follow me on X</span>
              </div>
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Main Window */}
              <div className="relative bg-gradient-to-b from-zinc-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Keyboard className="w-4 h-4" />
                    <span className="hidden sm:inline">Ctrl + Shift + N</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 transform hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Quick Capture</div>
                          <div className="text-xs text-gray-500">Just now</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-white/10 rounded w-full"></div>
                      <div className="h-4 bg-white/10 rounded w-5/6"></div>
                      <div className="h-4 bg-white/10 rounded w-2/3"></div>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Quick Save</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Search className="w-4 h-4 text-blue-400" />
                        <span>Searchable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div id="demo" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 md:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
                <Play className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">Interactive Demo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experience it <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">right now</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Don't just read about it. Feel the speed yourself.
              </p>
            </div>

            {/* Demo Instructions */}
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Keyboard className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold">Use Keyboard</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Press the shortcut anywhere on this page</p>
                    <div className="flex items-center gap-2 justify-center bg-white/5 rounded-lg p-3">
                      <kbd className="px-3 py-2 bg-white/10 rounded text-sm font-mono">Ctrl</kbd>
                      <span className="text-gray-500">+</span>
                      <kbd className="px-3 py-2 bg-white/10 rounded text-sm font-mono">Shift</kbd>
                      <span className="text-gray-500">+</span>
                      <kbd className="px-3 py-2 bg-white/10 rounded text-sm font-mono">N</kbd>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 px-6 py-[18px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold">Or Click The Button</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Launch the demo of the quicknote with one click</p>
                    <button
                      onClick={() => setShowQuickNote(true)}
                      className="w-full group relative px-6 py-3 rounded-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all group-hover:scale-105"></div>
                      <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                        <Play className="w-4 h-4" />
                        <span>Launch Demo</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  What to expect
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>QuickNote window appears instantly in the bottom right</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>Start typing immediately - cursor is auto-focused</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>Press Escape or hit the keybind again to close</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>Click Save button to store your note</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">speed</span>
          </h2>
          <p className="text-xl text-gray-400">Everything you need, nothing you don't</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Instant Launch",
              description: "Appears in <50ms. No loading, no waiting, no friction between thought and capture.",
              gradient: "from-yellow-500 to-orange-500"
            },
            {
              icon: Keyboard,
              title: "Custom Keybinds",
              description: "Set any keyboard shortcut. Works system-wide, even in fullscreen apps and games.",
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              icon: Search,
              title: "Powerful Search",
              description: "Find anything instantly with fuzzy search across all your notes. Lightning fast.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Check,
              title: "Quick Save",
              description: "One click to save. Your notes are stored securely and ready whenever you need them.",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: Globe,
              title: "Works Anywhere",
              description: "Overlay mode works over any application. Even games, browsers, and fullscreen apps.",
              gradient: "from-pink-500 to-rose-500"
            },
            {
              icon: Shield,
              title: "Private & Secure",
              description: "All notes are secured by supabase. Your data stays safe.",
              gradient: "from-purple-500 to-violet-500"
            }
          ].map((feature, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div id="how" className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple by design
          </h2>
          <p className="text-xl text-gray-400">Three steps to never lose an idea again</p>
        </div>

        <div className="space-y-8">
          {[
            {
              number: "01",
              title: "Press your keybind",
              description: "QuickNote appears instantly over any application",
              icon: Keyboard
            },
            {
              number: "02",
              title: "Start typing",
              description: "Cursor ready, type your thoughts freely",
              icon: FileText
            },
            {
              number: "03",
              title: "Save and close",
              description: "Click Save, then press Escape or the keybind again to close",
              icon: Check
            }
          ].map((step, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-white/50 select-none">{step.number}</div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waitlist Section */}
      <div id="waitlist" className="relative z-10 max-w-3xl mx-auto px-6 py-32">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
            {!isSubmitted ? (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-indigo-300">Limited Beta Access</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get early access
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Join the waitlist and receive the download link straight to your inbox
                </p>

                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all group-hover:scale-105"></div>
                    <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Joining waitlist...</span>
                        </>
                      ) : (
                        <>
                          <span>Join Waitlist</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {error && (
                  <Alert className="bg-red-500/20 border-red-500/30 text-left mt-4">
                    <AlertDescription className="text-red-300">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <p className="text-sm text-gray-500 mt-6">
                  By joining, you'll receive the download link and occasional updates. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6 animate-bounce">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">You're on the list! 🎉</h3>
                <p className="text-xl text-gray-400 mb-6">
                  Check your inbox at <span className="text-white font-medium">{email}</span>
                </p>
                <Alert className="bg-indigo-500/20 border-indigo-500/30 text-left">
                  <Mail className="w-4 h-4 text-white" />
                  <AlertDescription className="text-gray-300">
                    You'll receive the download link for QuickNote v1.0 when it drops (hopefully soon). 
                    Check your spam folder if you don't see it!
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Command className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">QuickNote</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2025 QuickNote. Capture every thought, instantly.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}