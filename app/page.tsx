"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Cloud,
  Code,
  Server,
  GitBranch,
  Shield,
  Zap,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Rocket,
  Brain,
  Target,
  Database,
  Monitor,
  Settings,
  ChevronRight,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Download,
  Building,
  Star,
  Trophy,
  Home,
  Network,
  Container,
  Activity,
  Layers,
  Terminal,
  Workflow,
  Eye,
  DollarSign,
  Lightbulb,
  Quote,
} from "lucide-react"

// Add custom glow animation styles
// This can be moved to a global CSS file for reuse, but for now, inject as a <style> tag
const GlowStyles = () => (
  <style>{`
    .glow-hover-blue:hover {
      box-shadow: 0 0 16px 4px rgba(59,130,246,0.7), 0 0 32px 8px rgba(59,130,246,0.3);
      transition: box-shadow 0.3s;
    }
    .glow-hover-purple:hover {
      box-shadow: 0 0 16px 4px rgba(139,92,246,0.7), 0 0 32px 8px rgba(139,92,246,0.3);
      transition: box-shadow 0.3s;
    }
    .glow-hover-green:hover {
      box-shadow: 0 0 16px 4px rgba(34,197,94,0.7), 0 0 32px 8px rgba(34,197,94,0.3);
      transition: box-shadow 0.3s;
    }
    .glow-hover-yellow:hover {
      box-shadow: 0 0 16px 4px rgba(250,204,21,0.7), 0 0 32px 8px rgba(250,204,21,0.3);
      transition: box-shadow 0.3s;
    }
    .glow-hover-red:hover {
      box-shadow: 0 0 16px 4px rgba(239,68,68,0.7), 0 0 32px 8px rgba(239,68,68,0.3);
      transition: box-shadow 0.3s;
    }
  `}</style>
);

// Add custom keyframes for energy animation
const EnergyAnimationStyles = () => (
  <style>{`
    @keyframes energy-pulse1 {
      0% { opacity: 0.7; transform: scale(1); }
      70% { opacity: 0.2; transform: scale(1.25); }
      100% { opacity: 0; transform: scale(1.4); }
    }
    @keyframes energy-pulse2 {
      0% { opacity: 0.5; transform: scale(1); }
      70% { opacity: 0.1; transform: scale(1.18); }
      100% { opacity: 0; transform: scale(1.3); }
    }
    @keyframes energy-pulse3 {
      0% { opacity: 0.3; transform: scale(1); }
      70% { opacity: 0.05; transform: scale(1.1); }
      100% { opacity: 0; transform: scale(1.2); }
    }
    .animate-energy-pulse1 {
      animation: energy-pulse1 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
    }
    .animate-energy-pulse2 {
      animation: energy-pulse2 2.2s cubic-bezier(0.4,0,0.2,1) infinite 0.3s;
    }
    .animate-energy-pulse3 {
      animation: energy-pulse3 2.2s cubic-bezier(0.4,0,0.2,1) infinite 0.6s;
    }
    @keyframes energy-particle {
      0% { opacity: 0.8; transform: scale(1) translateY(0); }
      60% { opacity: 0.2; transform: scale(1.3) translateY(-12px); }
      100% { opacity: 0; transform: scale(1.5) translateY(-24px); }
    }
    .animate-energy-particle {
      animation: energy-particle 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
    }
  `}</style>
);

import React from "react";

export default function AdvancedDevOpsPortfolio() {

  const [activeSection, setActiveSection] = useState("about")
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Loading animation
    setTimeout(() => setIsLoaded(true), 1000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const skills = {
    foundational: [
      { name: "Linux Administration", level: 95, icon: Server, color: "from-red-500 to-orange-500" },
      { name: "Networking & Security", level: 90, icon: Shield, color: "from-blue-500 to-cyan-500" },
      { name: "Git & Version Control", level: 95, icon: GitBranch, color: "from-green-500 to-emerald-500" },
      { name: "Shell Scripting", level: 92, icon: Terminal, color: "from-purple-500 to-violet-500" },
      { name: "Python/Go Programming", level: 88, icon: Code, color: "from-yellow-500 to-amber-500" },
    ],
    intermediate: [
      { name: "Docker & Containerization", level: 95, icon: Container, color: "from-blue-600 to-blue-400" },
      { name: "CI/CD Pipelines", level: 93, icon: Workflow, color: "from-green-600 to-green-400" },
      { name: "Terraform & IaC", level: 90, icon: Settings, color: "from-purple-600 to-purple-400" },
      { name: "Kubernetes", level: 87, icon: Layers, color: "from-indigo-600 to-indigo-400" },
      { name: "AWS/Azure/GCP", level: 92, icon: Cloud, color: "from-cyan-600 to-cyan-400" },
    ],
    advanced: [
      { name: "GitOps & ArgoCD", level: 90, icon: GitBranch, color: "from-emerald-600 to-emerald-400" },
      { name: "Service Mesh (Istio)", level: 85, icon: Network, color: "from-teal-600 to-teal-400" },
      { name: "Platform Engineering", level: 88, icon: Rocket, color: "from-rose-600 to-rose-400" },
      { name: "DevSecOps & SLSA", level: 82, icon: Shield, color: "from-red-600 to-red-400" },
      { name: "Observability Stack", level: 87, icon: Eye, color: "from-orange-600 to-orange-400" },
      { name: "FinOps & Cost Optimization", level: 85, icon: DollarSign, color: "from-yellow-600 to-yellow-400" },
    ],
  }

  const timeline = [
    {
      year: "2018-2020",
      role: "Junior DevOps Engineer",
      company: "TechStart Inc.",
      achievements: [
        "Built first CI/CD pipeline reducing deployment time by 80%",
        "Automated server provisioning with Ansible",
        "Implemented monitoring with Prometheus & Grafana",
      ],
      technologies: ["Jenkins", "Ansible", "Docker", "AWS"],
    },
    {
      year: "2020-2022",
      role: "DevOps Engineer",
      company: "CloudScale Solutions",
      achievements: [
        "Led cloud migration to AWS, reducing costs by 40%",
        "Implemented Kubernetes cluster serving 10M+ requests/day",
        "Established GitOps workflows with ArgoCD",
      ],
      technologies: ["Kubernetes", "ArgoCD", "Terraform", "Istio"],
    },
    {
      year: "2022-2024",
      role: "Senior Platform Engineer",
      company: "InnovateTech Corp",
      achievements: [
        "Designed platform-as-a-product serving 200+ developers",
        "Implemented zero-downtime deployments across 15 services",
        "Reduced MTTR from 4 hours to 15 minutes",
      ],
      technologies: ["Backstage", "Crossplane", "Flux", "Prometheus"],
    },
    {
      year: "2024-Present",
      role: "Lead Platform Architect",
      company: "Enterprise Solutions Ltd",
      achievements: [
        "Leading digital transformation for Fortune 500 clients",
        "Architecting multi-cloud platform strategies",
        "Mentoring team of 12 engineers across 3 time zones",
      ],
      technologies: ["Multi-Cloud", "Platform Engineering", "Team Leadership"],
    },
  ]

  const projects = [
    {
      title: "Enterprise Kubernetes Platform",
      category: "Advanced",
      problem: "Organization needed scalable, secure container orchestration for 50+ microservices",
      solution:
        "Designed and implemented production-ready Kubernetes platform with GitOps, service mesh, and comprehensive observability",
      technologies: ["Kubernetes", "Istio", "ArgoCD", "Prometheus", "Grafana", "Jaeger", "Falco"],
      impact: {
        technical: "99.9% uptime, 50% faster deployments, zero security incidents",
        business: "$2M annual savings, 300% developer productivity increase",
      },
      architecture: "Multi-cluster setup with 500+ pods across 3 regions",
    },
    {
      title: "Multi-Cloud Infrastructure Automation",
      category: "Advanced",
      problem: "Manual infrastructure provisioning causing delays and inconsistencies across AWS, Azure, and GCP",
      solution: "Built comprehensive IaC framework with Terraform modules, automated testing, and policy-as-code",
      technologies: ["Terraform", "Terragrunt", "OPA", "GitHub Actions", "Checkov", "Atlantis"],
      impact: {
        technical: "95% reduction in provisioning time, zero configuration drift",
        business: "$1.5M cost optimization, 80% faster time-to-market",
      },
      architecture: "GitOps-driven infrastructure with automated compliance scanning",
    },
    {
      title: "DevSecOps Pipeline Implementation",
      category: "Advanced",
      problem: "Security vulnerabilities discovered late in development cycle, compliance requirements not met",
      solution: "Implemented shift-left security with automated scanning, SLSA compliance, and security gates",
      technologies: ["Snyk", "SonarQube", "Trivy", "SLSA", "Falco", "OPA Gatekeeper", "Sigstore"],
      impact: {
        technical: "90% reduction in security vulnerabilities, 100% compliance score",
        business: "Avoided potential $5M in security breach costs",
      },
      architecture: "Zero-trust security model with continuous compliance monitoring",
    },
    {
      title: "AI-Powered Platform Observability",
      category: "Innovation",
      problem: "Traditional monitoring couldn't predict failures or automatically remediate issues",
      solution: "Implemented ML-driven observability with predictive analytics and auto-remediation",
      technologies: ["Prometheus", "Grafana", "TensorFlow", "Python", "eBPF", "Cilium"],
      impact: {
        technical: "70% reduction in incidents, 90% faster root cause analysis",
        business: "$800K saved through prevented downtime",
      },
      architecture: "Event-driven architecture with ML pipeline for anomaly detection",
    },
  ]

  const innovations = [
    {
      title: "AI-Driven Incident Response",
      description:
        "Implementing ML models for predictive incident detection and automated remediation using reinforcement learning",
      technologies: ["Python", "TensorFlow", "Prometheus", "Webhook APIs", "eBPF"],
      status: "Production Ready",
      impact: "Reduced MTTR by 85%",
    },
    {
      title: "eBPF-based Zero-Overhead Observability",
      description:
        "Implementing kernel-level observability for microsecond-precision monitoring without performance impact",
      technologies: ["eBPF", "Cilium", "Pixie", "Go", "Rust"],
      status: "In Progress",
      impact: "0.01% performance overhead",
    },
    {
      title: "Quantum-Safe DevSecOps Pipeline",
      description: "Preparing cryptographic infrastructure for post-quantum era with quantum-resistant algorithms",
      technologies: ["Post-Quantum Cryptography", "Sigstore", "SLSA", "OQS"],
      status: "Research Phase",
      impact: "Future-proof security",
    },
    {
      title: "Developer Portal with Backstage",
      description:
        "Building unified developer experience platform with AI-powered service catalog and intelligent scaffolding",
      technologies: ["Backstage", "React", "Node.js", "PostgreSQL", "OpenAI"],
      status: "Production Ready",
      impact: "400% faster onboarding",
    },
  ]

  const awards = [
    {
      title: "DevOps Excellence Award 2024",
      organization: "Cloud Native Computing Foundation",
      description: "Recognition for outstanding contribution to platform engineering and GitOps adoption",
      year: "2024",
    },
    {
      title: "Innovation Leader of the Year",
      organization: "TechCorp Global",
      description: "Led breakthrough AI-driven infrastructure automation project",
      year: "2023",
    },
    {
      title: "Open Source Contributor Award",
      organization: "Kubernetes Community",
      description: "Top 50 contributor to Kubernetes ecosystem with 200+ merged PRs",
      year: "2023",
    },
    {
      title: "Platform Engineering Pioneer",
      organization: "DevOps Institute",
      description: "Early adopter and advocate of platform engineering practices",
      year: "2022",
    },
  ]

  const homelab = [
    {
      title: "Multi-Cloud Kubernetes Lab",
      description: "Personal 12-node cluster spanning AWS, GCP, and bare metal for testing cutting-edge technologies",
      technologies: ["K3s", "Cilium", "ArgoCD", "Prometheus", "Grafana"],
      purpose: "Testing new platform features and training",
    },
    {
      title: "AI/ML Infrastructure Playground",
      description: "GPU-accelerated cluster for experimenting with MLOps and AI-driven operations",
      technologies: ["NVIDIA GPUs", "Kubeflow", "MLflow", "TensorFlow", "PyTorch"],
      purpose: "ML model training and inference testing",
    },
    {
      title: "Edge Computing Testbed",
      description: "IoT and edge computing setup with ARM-based devices for Industry 4.0 experiments",
      technologies: ["Raspberry Pi", "K3s", "EdgeX Foundry", "MQTT", "InfluxDB"],
      purpose: "Edge computing and IoT platform development",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechCorp Global",
      quote:
        "Dinesh transformed our entire infrastructure strategy. His platform engineering approach increased our deployment frequency by 500% while maintaining 99.9% uptime.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "CloudScale Solutions",
      quote:
        "Working with Dinesh was a game-changer. His deep understanding of cloud-native technologies and leadership skills make him an invaluable asset to any organization.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Platform",
      company: "InnovateTech Corp",
      quote:
        "Dinesh's innovative approach to DevSecOps and his ability to mentor teams while delivering complex projects is truly exceptional. He's a visionary leader.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <>
      <GlowStyles />
      <EnergyAnimationStyles />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Loading Animation */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="mt-4 text-center text-blue-400 animate-pulse">Initializing Platform...</div>
          </div>
        </div>
      )}

      {/* Animated Background with Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />

        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Advanced Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center">
            {/* Logo and Name - leftmost */}
            <div className="flex items-center space-x-4 mr-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dinesh Polavarapu
                </div>
                <div className="text-xs text-slate-400">Platform Architect</div>
              </div>
            </div>
            {/* Navigation links and actions - right */}
            <div className="flex-1 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* Navigation links to subheadings with animated underline */}
                {(() => {
                  const sections = [
                    { label: "Executive Summary", id: "executive-summary" },
                    { label: "Skills", id: "skills" },
                    { label: "Career", id: "career" },
                    { label: "Projects", id: "projects" },
                    { label: "Innovation", id: "innovation" },
                    { label: "Metrics", id: "metrics" },
                    { label: "Awards", id: "awards" },
                    { label: "Homelab", id: "homelab" },
                    { label: "Testimonials", id: "testimonials" },
                    { label: "Leadership", id: "leadership" },
                    { label: "Certifications", id: "certifications" },
                    { label: "Contact", id: "contact" },
                  ];
                  const [activeSection, setActiveSection] = React.useState<string>(sections[0].id);
                  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

                  React.useEffect(() => {
                    const handleScroll = () => {
                      // Find the section whose top is closest to but not greater than threshold
                      const threshold = 130; // px from top
                      let closestId = sections[0].id;
                      let minDist = Number.POSITIVE_INFINITY;
                      for (const section of sections) {
                        const el = document.getElementById(section.id);
                        if (el) {
                          const rect = el.getBoundingClientRect();
                          const dist = Math.abs(rect.top - threshold);
                          if (rect.top - threshold <= 0 && dist < minDist) {
                            minDist = dist;
                            closestId = section.id;
                          }
                        }
                      }
                      setActiveSection(closestId);
                    };
                    window.addEventListener('scroll', handleScroll, { passive: true });
                    handleScroll();
                    return () => window.removeEventListener('scroll', handleScroll);
                  }, []);

                  // On nav click, set activeSection immediately
                  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
                    setActiveSection(id);
                    // Let browser scroll, then update activeSection after scroll
                    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                    scrollTimeout.current = setTimeout(() => {
                      setActiveSection(id);
                    }, 300);
                  };

                  return sections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={
                        `relative text-slate-300 hover:text-white px-3 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500` +
                        (activeSection === item.id ? ' nav-underline-animated' : '')
                      }
                      style={{ scrollBehavior: 'smooth' }}
                      onClick={handleNavClick(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute left-0 right-0 mx-auto bottom-0 w-10/12 h-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-underline-flow" />
                      )}
                    </a>
                  ));
                })()}
              </div>
      {/* Animated underline for nav links */}
      <style jsx global>{`
        .nav-underline-animated {
          color: #fff !important;
        }
        .animate-underline-flow {
          display: block;
          animation: underline-flow 2s linear infinite;
          background-size: 200% 100%;
          background-position: 0% 50%;
        }
        @keyframes underline-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
              {/* <div className="flex items-center space-x-3 ml-4">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800/50 glow-hover-blue">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800/50 glow-hover-purple">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        {/* Hero Section with Advanced Animations */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
              {/* Animated Profile Picture */}
              <div className="relative mx-auto mb-8 w-40 h-40">
                {/* Energy releasing animation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  {/* Animated glowing rings */}
                  <div className="absolute w-48 h-48 rounded-full border-4 border-blue-500/30 animate-energy-pulse1"></div>
                  <div className="absolute w-56 h-56 rounded-full border-2 border-purple-500/20 animate-energy-pulse2"></div>
                  <div className="absolute w-64 h-64 rounded-full border border-green-400/10 animate-energy-pulse3"></div>
                  {/* Animated particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-blue-400/60 rounded-full animate-energy-particle`}
                      style={{
                        left: `calc(50% + ${32 * Math.cos((i / 12) * 2 * Math.PI)}px - 4px)` ,
                        top: `calc(50% + ${32 * Math.sin((i / 12) * 2 * Math.PI)}px - 4px)` ,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-spin-slow p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 p-2">
                    <img
                      src="/placeholder.svg?height=140&width=140"
                      alt="Dinesh Polavarapu"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Dinesh Polavarapu
              </h1>
              <div className="text-2xl md:text-3xl text-slate-300 mb-4 animate-fade-in-up">
                Lead Platform Architect & DevOps Visionary
              </div>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-4xl mx-auto animate-fade-in-up-delay">
                Transforming organizations through cloud-native platforms, AI-driven operations, and engineering
                excellence
              </p>

              {/* Animated Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { icon: Cloud, text: "Multi-Cloud Architecture", color: "blue" },
                  { icon: Rocket, text: "Platform Engineering", color: "purple" },
                  { icon: Brain, text: "AI-Driven Operations", color: "green" },
                  { icon: Users, text: "Team Leadership", color: "yellow" },
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`bg-${badge.color}-500/20 text-${badge.color}-300 border-${badge.color}-500/30 px-4 py-2 animate-float glow-hover-${badge.color}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <badge.icon className="w-4 h-4 mr-2" />
                    {badge.text}
                  </Badge>
                ))}
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: Database, position: "top-10 left-10", delay: "0s" },
                  { icon: Server, position: "top-20 right-20", delay: "1s" },
                  { icon: Network, position: "bottom-20 left-20", delay: "2s" },
                  { icon: Monitor, position: "bottom-10 right-10", delay: "0.5s" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} animate-float opacity-20 glow-hover-blue`}
                    style={{ animationDelay: item.delay }}
                  >
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary with Advanced Cards */}
        <section id="executive-summary" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-xl hover:bg-slate-900/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 glow-hover-purple">
              <CardHeader>
                <CardTitle className="text-4xl text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Brain,
                      title: "Vision",
                      description:
                        "Democratizing cloud-native technologies through platform engineering, enabling developers to focus on innovation while maintaining operational excellence.",
                      color: "purple",
                    },
                    {
                      icon: Target,
                      title: "Mission",
                      description:
                        "Building resilient, scalable platforms that accelerate software delivery while reducing operational overhead and improving developer experience.",
                      color: "blue",
                    },
                    {
                      icon: Zap,
                      title: "Impact",
                      description:
                        "Delivered $10M+ in cost savings, improved deployment frequency by 500%, and mentored 50+ engineers across multiple organizations.",
                      color: "green",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center group hover:scale-105 transition-all duration-300 p-6 rounded-lg hover:bg-slate-800/30 glow-hover-purple"
                    >
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 p-3 group-hover:animate-pulse`}
                      >
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 text-${item.color}-300`}>{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 backdrop-blur-sm">
                  <p className="text-lg text-slate-200 leading-relaxed">
                    As a seasoned Platform Architect with 6+ years of experience, I specialize in designing and
                    implementing enterprise-scale cloud-native platforms. My expertise spans from foundational DevOps
                    practices to cutting-edge platform engineering, with a proven track record of leading digital
                    transformations for Fortune 500 companies. I'm passionate about building teams, fostering DevOps
                    culture, and creating platforms that empower developers while maintaining the highest standards of
                    reliability, security, and performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Skills Section */}
        <section id="skills" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technology Stack
            </h2>
            <Tabs defaultValue="foundational" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <TabsTrigger
                  value="foundational"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500"
                >
                  Foundational
                </TabsTrigger>
                <TabsTrigger
                  value="intermediate"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-500"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-500"
                >
                  Advanced
                </TabsTrigger>
              </TabsList>

              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillList.map((skill, index) => (
                      <Card
                        key={index}
                        className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-xl group backdrop-blur-sm"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div
                              className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} p-2 mr-4 group-hover:animate-spin-slow`}
                            >
                              <skill.icon className="w-full h-full text-white" />
                            </div>
                            <h3 className="font-semibold text-slate-200">{skill.name}</h3>
                          </div>
                          <div className="relative">
                            <Progress value={skill.level} className="mb-2 h-3" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                          </div>
                          <p className="text-sm text-slate-400">{skill.level}% Proficiency</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Enhanced Professional Timeline */}
        <section id="career" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Career Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 animate-pulse"></div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"} group`}
                >
                  <Card
                    className={`w-full md:w-5/12 bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-blue-300 group-hover:text-blue-200 transition-colors">
                          {item.role}
                        </CardTitle>
                        <Badge variant="outline" className="border-purple-500 text-purple-300 animate-pulse">
                          {item.year}
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400 flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {item.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0 animate-pulse" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                        {item.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 animate-pulse group-hover:scale-125 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects & Case Studies
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm group glow-hover-blue"
              >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse"
                      >
                        {project.category}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-blue-300 group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.architecture && (
                      <CardDescription className="text-slate-500 italic">{project.architecture}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Problem
                        </h4>
                        <p className="text-sm text-slate-300">{project.problem}</p>
                      </div>
                      <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2" />
                          Solution
                        </h4>
                        <p className="text-sm text-slate-300">{project.solution}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 pt-4 border-t border-slate-700">
                      <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <h5 className="font-medium text-yellow-300 text-sm flex items-center mb-1">
                          <Activity className="w-4 h-4 mr-2" />
                          Technical Impact
                        </h5>
                        <p className="text-xs text-slate-400">{project.impact.technical}</p>
                      </div>
                      <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <h5 className="font-medium text-green-300 text-sm flex items-center mb-1">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Business Impact
                        </h5>
                        <p className="text-xs text-slate-400">{project.impact.business}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Innovation Section */}
        <section id="innovation" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation & Emerging Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm group glow-hover-purple"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-purple-300 group-hover:text-purple-200 transition-colors">
                        {innovation.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={`text-xs animate-pulse ${
                          innovation.status === "Production Ready"
                            ? "border-green-500 text-green-300 bg-green-500/10"
                            : innovation.status === "In Progress"
                              ? "border-yellow-500 text-yellow-300 bg-yellow-500/10"
                              : "border-blue-500 text-blue-300 bg-blue-500/10"
                        }`}
                      >
                        {innovation.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                      {innovation.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {innovation.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-700">
                      <div className="flex items-center text-sm text-green-300">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Impact: {innovation.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Metrics Section */}
        <section id="metrics" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Metrics & Business Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  value: "500%",
                  label: "Deployment Frequency Increase",
                  color: "from-blue-900/50 to-blue-800/50",
                  border: "border-blue-700",
                  iconColor: "text-blue-400",
                },
                {
                  icon: Zap,
                  value: "15min",
                  label: "Average MTTR",
                  color: "from-green-900/50 to-green-800/50",
                  border: "border-green-700",
                  iconColor: "text-green-400",
                },
                {
                  icon: Award,
                  value: "$10M+",
                  label: "Cost Savings Delivered",
                  color: "from-purple-900/50 to-purple-800/50",
                  border: "border-purple-700",
                  iconColor: "text-purple-400",
                },
                {
                  icon: Users,
                  value: "99.9%",
                  label: "Platform Uptime",
                  color: "from-yellow-900/50 to-yellow-800/50",
                  border: "border-yellow-700",
                  iconColor: "text-yellow-400",
                },
              ].map((metric, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${metric.color} ${metric.border} hover:scale-105 transition-all duration-500 hover:shadow-2xl backdrop-blur-sm group glow-hover-blue`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/50 p-3 group-hover:animate-pulse`}
                    >
                      <metric.icon className={`w-full h-full ${metric.iconColor}`} />
                    </div>
                    <div className={`text-4xl font-bold ${metric.iconColor} mb-2 animate-counter`}>{metric.value}</div>
                    <p className="text-slate-300 text-sm">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section id="awards" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm group glow-hover-yellow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-2 group-hover:animate-spin-slow">
                        <Trophy className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                            {award.title}
                          </h3>
                          <Badge variant="outline" className="border-yellow-500 text-yellow-300 text-xs">
                            {award.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{award.organization}</p>
                        <p className="text-sm text-slate-300">{award.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Homelab Section */}
        <section id="homelab" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Personal Homelab & Experiments
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {homelab.map((lab, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm group glow-hover-green"
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Home className="w-6 h-6 mr-3 text-green-400 group-hover:animate-pulse" />
                      <CardTitle className="text-lg text-green-300 group-hover:text-green-200 transition-colors">
                        {lab.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 text-sm">{lab.description}</p>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-slate-800/50 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-700">
                      <div className="flex items-center text-sm text-purple-300">
                        <Target className="w-4 h-4 mr-2" />
                        Purpose: {lab.purpose}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl backdrop-blur-sm group glow-hover-blue"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform"
                      />
                      <div>
                        <h3 className="font-semibold text-blue-300">{testimonial.name}</h3>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                        <p className="text-xs text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="w-6 h-6 text-purple-400 mb-2 opacity-50" />
                      <p className="text-slate-300 text-sm italic leading-relaxed">{testimonial.quote}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Thought Leadership Section */}
        <section id="leadership" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Thought Leadership & Community
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 glow-hover-purple">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Publications & Talks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "KubeCon + CloudNativeCon 2024",
                      subtitle: "Platform Engineering: Building Developer-Centric Infrastructure",
                      type: "Conference Talk",
                    },
                    {
                      title: "DevOps World 2023",
                      subtitle: "GitOps at Scale: Lessons from Production",
                      type: "Keynote",
                    },
                    {
                      title: "CNCF Blog Series",
                      subtitle: "The Future of Platform Engineering (5-part series)",
                      type: "Technical Writing",
                    },
                    {
                      title: "IEEE Software Magazine",
                      subtitle: "AI-Driven Infrastructure Operations",
                      type: "Research Paper",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
                          {item.title}
                        </h4>
                        <Badge variant="outline" className="text-xs border-purple-500 text-purple-300">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{item.subtitle}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 glow-hover-green">
                <CardHeader>
                  <CardTitle className="text-xl text-green-300 flex items-center">
                    <Github className="w-6 h-6 mr-2" />
                    Open Source Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { project: "Kubernetes", contribution: "Core contributor - 200+ merged PRs", stars: "109k" },
                    { project: "ArgoCD", contribution: "Maintainer - ApplicationSet controller", stars: "17k" },
                    { project: "Terraform Providers", contribution: "Created 3 custom providers", downloads: "50k+" },
                    { project: "Backstage", contribution: "Plugin developer - Platform templates", stars: "27k" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-green-300 group-hover:text-green-200 transition-colors">
                          {item.project}
                        </h4>
                        <div className="flex items-center text-xs text-slate-400">
                          <Star className="w-3 h-3 mr-1" />
                          {item.stars || item.downloads}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">{item.contribution}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Certifications */}
        <section id="certifications" className="py-16 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Continuous Learning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "AWS Solutions Architect Professional",
                  issuer: "Amazon Web Services",
                  year: "2024",
                  level: "Expert",
                },
                {
                  name: "Certified Kubernetes Administrator (CKA)",
                  issuer: "CNCF",
                  year: "2023",
                  level: "Professional",
                },
                {
                  name: "Certified Kubernetes Security Specialist (CKS)",
                  issuer: "CNCF",
                  year: "2023",
                  level: "Specialist",
                },
                { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", year: "2022", level: "Associate" },
                {
                  name: "Google Cloud Professional DevOps Engineer",
                  issuer: "Google Cloud",
                  year: "2024",
                  level: "Professional",
                },
                { name: "Azure DevOps Engineer Expert", issuer: "Microsoft", year: "2023", level: "Expert" },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm group glow-hover-yellow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-2 mr-3 group-hover:animate-spin-slow">
                        <Award className="w-full h-full text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-yellow-500 text-yellow-300 text-xs">
                          {cert.year}
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Team Impact */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team Impact & Cultural Contribution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 glow-hover-green">
                <CardHeader>
                  <CardTitle className="text-xl text-green-300">Leadership & Mentorship</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Team Growth",
                      description: "Grew engineering team from 5 to 25 members across 3 time zones",
                      metric: "400% growth",
                    },
                    {
                      icon: BookOpen,
                      title: "Mentorship Program",
                      description: "Established formal mentorship program, mentored 50+ engineers",
                      metric: "50+ mentees",
                    },
                    {
                      icon: TrendingUp,
                      title: "Career Development",
                      description: "15 team members promoted to senior roles under my leadership",
                      metric: "15 promotions",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2 mr-4 group-hover:animate-pulse">
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-slate-200">{item.title}</h4>
                          <Badge variant="outline" className="text-xs border-green-500 text-green-300">
                            {item.metric}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-500 hover:scale-105 glow-hover-purple">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">Culture & Process Innovation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: Target,
                      title: "DevOps Transformation",
                      description: "Led cultural shift from traditional ops to DevOps mindset",
                      metric: "100% adoption",
                    },
                    {
                      icon: Lightbulb,
                      title: "Innovation Culture",
                      description: "Implemented 20% time for innovation, resulting in 12 production features",
                      metric: "12 features",
                    },
                    {
                      icon: Shield,
                      title: "Blameless Culture",
                      description: "Established blameless post-mortems, reducing incident recurrence by 70%",
                      metric: "70% reduction",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 p-2 mr-4 group-hover:animate-pulse">
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-slate-200">{item.title}</h4>
                          <Badge variant="outline" className="text-xs border-purple-500 text-purple-300">
                            {item.metric}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 px-6 scroll-mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Let's Build the Future Together
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Ready to transform your organization with cloud-native platforms, AI-driven operations, and engineering
                excellence?
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent hover:border-blue-500 hover:text-blue-300 transform hover:scale-105 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <a
                  href="https://github.com/WentiQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent hover:border-green-500 hover:text-green-300 transform hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>

              {/* Floating Contact Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "dinesh@example.com",
                    color: "blue",
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    value: "/in/dineshpolavarapu",
                    color: "purple",
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    value: "@dineshpolavarapu",
                    color: "green",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm group glow-hover-blue"
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 p-2 group-hover:animate-pulse`}
                      >
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-800 glow-hover-blue">
          <div className="max-w-7xl mx-auto text-center text-slate-400">
            <p>
              &copy; 2024&nbsp;Dinesh&nbsp;Polavarapu. Built with Next.js, Tailwind CSS, and a passion for platform
              engineering.
            </p>
          </div>
        </footer>
      </div>
      </div>
    </>
  )
}
