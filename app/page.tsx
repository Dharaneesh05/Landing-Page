'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Users, MessageCircle, Code, Cloud, Zap, ArrowRight, Play, Star, GitBranch, Terminal, Layers } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function DimensionLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const heroRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()
  
  const heroInView = useIntersectionObserver(heroRef as React.RefObject<Element>, { threshold: 0.1 })
  const mockupInView = useIntersectionObserver(mockupRef as React.RefObject<Element>, { threshold: 0.1 })

  useEffect(() => {
    setIsVisible(true)
    setCurrentTime(new Date())
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Parallax effect calculation
  const parallaxOffset = mousePosition.y * 0.02
  const parallaxOffsetX = mousePosition.x * 0.01

  // Floating particles configuration
  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`
  }))

  const reactionCounts = [3, 2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow"
          style={{ transform: `translate(${parallaxOffsetX}px, ${parallaxOffset}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-reverse"
          style={{ transform: `translate(${-parallaxOffsetX}px, ${-parallaxOffset}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ transform: `translate(${parallaxOffsetX * 0.5}px, ${parallaxOffset * 0.5}px)` }}
        ></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        {floatingParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Header */}
      <header className={`relative z-50 px-4 lg:px-8 h-20 flex items-center justify-between backdrop-blur-xl bg-slate-900/50 border-b border-slate-800/50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <div className="w-5 h-5 bg-white rounded-md transform group-hover:rotate-12 transition-transform duration-300"></div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Dimension</span>
        </div>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'About', href: '#' },
            { name: 'Careers', href: '#', badge: '2' },
            { name: 'Blog', href: '#' },
            { name: 'Changelog', href: '#' }
          ].map((item, index) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`text-sm font-medium hover:text-purple-400 transition-all duration-300 relative group ${isVisible ? 'animate-slide-down' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center">
                {item.name}
                {item.badge && (
                  <span className="ml-2 text-xs bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full text-white font-semibold animate-pulse-subtle">
                    {item.badge}
                  </span>
                )}
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Join waitlist</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden relative p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 md:hidden transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <nav className="flex flex-col space-y-4 p-6">
            {['About', 'Careers', 'Blog', 'Changelog'].map((item, index) => (
              <a 
                key={item}
                href="#" 
                className={`text-sm font-medium hover:text-purple-400 transition-all duration-300 transform ${isMenuOpen ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            <Button variant="outline" className="border-purple-500/30 text-white hover:bg-purple-500/10 mt-4 group">
              <span>Join waitlist</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="relative z-10 px-4 lg:px-8">
        {/* Enhanced Hero Section */}
        <div ref={heroRef} className="max-w-7xl mx-auto pt-16 lg:pt-24">
          {/* Status indicators */}
          <div className={`flex justify-center items-center space-x-6 mb-8 transition-all duration-1000 delay-200 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Users size={16} />
              <span>2,847 developers building</span>
            </div>
          </div>

          {/* Enhanced Announcement Badge */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-400 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge 
              variant="outline" 
              className="border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 px-6 py-3 text-sm backdrop-blur-sm group cursor-pointer transform hover:scale-105"
            >
              <Star size={16} className="mr-2 text-yellow-400 animate-pulse" />
              <span>Announcing our $1.4M Fundraise</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Badge>
          </div>

          {/* Enhanced Main Heading */}
          <div className={`text-center mb-8 transition-all duration-1000 delay-600 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
              <span className="block mb-2">Dimension is the new</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-flow bg-300% relative">
                standard for collaboration
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10 animate-pulse-glow"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle with features */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The all-in-one platform that brings together chat, code, cloud, deployments, and everything your team needs to build faster.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {[
                { icon: MessageCircle, text: 'Real-time Chat' },
                { icon: Code, text: 'Code Collaboration' },
                { icon: Cloud, text: 'Cloud Integration' },
                { icon: GitBranch, text: 'Git Workflows' },
                { icon: Terminal, text: 'Built-in Terminal' },
                { icon: Layers, text: 'Project Management' }
              ].map((feature, index) => (
                <div 
                  key={feature.text}
                  className={`flex items-center space-x-2 hover:text-purple-400 transition-all duration-300 cursor-pointer group ${heroInView ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <feature.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Email Signup */}
          <div className={`flex justify-center mb-20 transition-all duration-1000 delay-1000 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex w-full max-w-lg space-x-3 bg-slate-800/50 backdrop-blur-xl p-2 rounded-2xl border border-slate-700/50">
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none flex-1 text-lg"
                />
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/25 group"
                >
                  <span>Join waitlist</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced App Preview */}
          <div ref={mockupRef} className={`relative transition-all duration-1500 delay-1200 ${mockupInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative mx-auto max-w-6xl">
              {/* Enhanced Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl transform scale-110 animate-pulse-glow"></div>
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-rotate-slow"></div>
              
              {/* App mockup container */}
              <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-700">
                {/* Enhanced App header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
                  <div className="flex items-center space-x-4">
                    <div className="relative group">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Dimension</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Core Team</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users size={16} />
                      <span>Members - 3</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>

                {/* Enhanced App content */}
                <div className="flex h-[500px]">
                  {/* Enhanced Sidebar */}
                  <div className="w-72 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-r border-slate-700/50 p-6">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 text-sm group cursor-pointer">
                        <MessageCircle size={18} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Chat</span>
                        <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        {[
                          { name: 'team', active: true, unread: 3 },
                          { name: 'dev', active: false, unread: 0 },
                          { name: 'design', active: false, unread: 1 },
                          { name: 'general', active: false, unread: 0 }
                        ].map((channel, index) => (
                          <div 
                            key={channel.name}
                            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-all duration-300 group ${channel.active ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-slate-700/50 hover:text-white'} ${mockupInView ? 'animate-slide-in-left' : ''}`}
                            style={{ animationDelay: `${1500 + index * 100}ms` }}
                          >
                            <span className="text-gray-500">#</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{channel.name}</span>
                            {channel.unread > 0 && (
                              <div className="ml-auto w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                                {channel.unread}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-slate-700/50">
                        <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Direct Messages</div>
                        <div className="space-y-3">
                          {[
                            { name: 'Tejas', status: 'online', avatar: 'from-blue-500 to-purple-500' },
                            { name: 'Ari', status: 'away', avatar: 'from-green-500 to-blue-500' },
                            { name: 'Landon', status: 'offline', avatar: 'from-orange-500 to-red-500' }
                          ].map((user, index) => (
                            <div 
                              key={user.name}
                              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-slate-700/50 transition-all duration-300 group ${mockupInView ? 'animate-slide-in-left' : ''}`}
                              style={{ animationDelay: `${1800 + index * 100}ms` }}
                            >
                              <div className="relative">
                                <div className={`w-8 h-8 bg-gradient-to-r ${user.avatar} rounded-full group-hover:scale-110 transition-transform duration-300`}></div>
                                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-slate-800 ${user.status === 'online' ? 'bg-green-500' : user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'}`}></div>
                              </div>
                              <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{user.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Main chat area */}
                  <div className="flex-1 p-6 overflow-hidden">
                    <div className="space-y-6">
                      {[
                        {
                          user: 'Tejas',
                          time: '2:18 PM',
                          avatar: 'from-blue-500 to-purple-500',
                          message: "Hey team! I've been working on the new collaboration features. The real-time sync is looking amazing - check out the demo I just pushed to staging!",
                          reactions: ['👍', '🚀', '💯']
                        },
                        {
                          user: 'Ari',
                          time: '2:19 PM',
                          avatar: 'from-green-500 to-blue-500',
                          message: "This is incredible! The performance improvements are exactly what we needed. The UI feels so much more responsive now.",
                          reactions: ['🔥', '✨']
                        },
                        {
                          user: 'Tejas',
                          time: '2:20 PM',
                          avatar: 'from-blue-500 to-purple-500',
                          message: "Thanks! Next up: implementing the advanced code review system with AI-powered suggestions. Should be ready for testing by Friday.",
                          reactions: ['🤖', '⚡']
                        }
                      ].map((msg, index) => (
                        <div 
                          key={index}
                          className={`flex items-start space-x-4 group hover:bg-slate-800/30 p-3 rounded-xl transition-all duration-300 ${mockupInView ? 'animate-slide-in-up' : ''}`}
                          style={{ animationDelay: `${2000 + index * 200}ms` }}
                        >
                          <div className="relative">
                            <div className={`w-10 h-10 bg-gradient-to-r ${msg.avatar} rounded-full group-hover:scale-110 transition-transform duration-300`}></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-semibold text-sm">{msg.user}</span>
                              <span className="text-xs text-gray-500">{msg.time}</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-3">{msg.message}</p>
                            <div className="flex items-center space-x-2">
                              {msg.reactions.map((reaction, i) => (
                                <button
                                  key={i}
                                  className="flex items-center space-x-1 bg-slate-700/50 hover:bg-slate-600/50 px-2 py-1 rounded-full text-xs transition-all duration-300 hover:scale-110"
                                >
                                  <span>{reaction}</span>
                                  <span className="text-gray-400">{reactionCounts[i]}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Right sidebar */}
                  <div className="w-80 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-l border-slate-700/50 p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold mb-4 flex items-center">
                          <Zap size={16} className="mr-2 text-yellow-400" />
                          Quick Access
                        </div>
                        <div className="space-y-3 text-sm">
                          {[
                            { icon: Code, text: 'Code Review', count: 3, color: 'text-blue-400' },
                            { icon: Cloud, text: 'Deployments', count: 1, color: 'text-green-400' },
                            { icon: GitBranch, text: 'Pull Requests', count: 5, color: 'text-purple-400' },
                            { icon: Terminal, text: 'Terminal', count: 0, color: 'text-orange-400' }
                          ].map((item, index) => (
                            <div 
                              key={item.text}
                              className={`flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-all duration-300 group ${mockupInView ? 'animate-slide-in-right' : ''}`}
                              style={{ animationDelay: `${2200 + index * 100}ms` }}
                            >
                              <div className="flex items-center space-x-3">
                                <item.icon size={16} className={`${item.color} group-hover:scale-110 transition-transform duration-300`} />
                                <span className="group-hover:translate-x-1 transition-transform duration-300">{item.text}</span>
                              </div>
                              {item.count > 0 && (
                                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                                  {item.count}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold mb-4 flex items-center">
                          <Layers size={16} className="mr-2 text-purple-400" />
                          Active Tasks
                        </div>
                        <div className="space-y-3 text-sm">
                          {[
                            { task: 'iOS - Onboarding Flow', priority: 'high', progress: 75 },
                            { task: 'API - Rate Limiting', priority: 'medium', progress: 45 },
                            { task: 'UI - Dark Mode Polish', priority: 'low', progress: 90 }
                          ].map((task, index) => (
                            <div 
                              key={task.task}
                              className={`p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group ${mockupInView ? 'animate-slide-in-right' : ''}`}
                              style={{ animationDelay: `${2500 + index * 100}ms` }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-xs group-hover:translate-x-1 transition-transform duration-300">{task.task}</span>
                                <div className={`w-2 h-2 rounded-full ${task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
                              </div>
                              <div className="w-full bg-slate-600 rounded-full h-1.5">
                                <div 
                                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{task.progress}% complete</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
