import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  Bell,
  LayoutGrid,
  TrendingUp,
  AlertTriangle,
  ChevronDown,
  MessageCircle,
  Check,
  X,
  Clock,
  Smartphone,
  Shield,
  Zap,
  Menu,
  Star,
  ArrowRight,
  IndianRupee,
  Sparkles,
  BadgeCheck,
  Wallet,
  Lock,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { Link, RouterProvider, createBrowserRouter } from "react-router";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const WA_NUMBER = "919876543210"; // ← Replace with your real WhatsApp number
const WA_DEMO_MSG = encodeURIComponent(
  "Hi libdesk! 👋 I run a library and want to see a quick demo. Please help me get started."
);
const WA_GENERAL_MSG = encodeURIComponent(
  "Hi libdesk! I'd like to know more about the Pro plan."
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Reading Hall",
    city: "Jaipur",
    quote:
      "I recovered ₹3,000 in just one week by tracking defaulters. libdesk pays for itself every single month!",
    img: "https://images.unsplash.com/photo-1690543364186-973ade5dd0c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    stars: 5,
    gain: "₹3,000 recovered",
  },
  {
    name: "Priya Patel",
    role: "Owner, Patel Study Zone",
    city: "Ahmedabad",
    quote:
      "WhatsApp reminders have completely transformed how I collect fees. Students pay on time without any awkward calls.",
    img: "https://images.unsplash.com/photo-1667382137969-a11fd256717d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    stars: 5,
    gain: "100% on-time fees",
  },
  {
    name: "Amit Verma",
    role: "Owner, Verma Library",
    city: "Lucknow",
    quote:
      "Managing 80 seats was a daily headache. Now I see everything on my phone in seconds. Best ₹299 I spend.",
    img: "https://images.unsplash.com/photo-1602922401816-bb13464b2d67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    stars: 5,
    gain: "80 seats managed",
  },
];

const faqs = [
  {
    q: "Do I need a computer to use libdesk?",
    a: "No! libdesk is built 100% for phones. Open it in your mobile browser — no app install, no computer, no laptop needed. If you have a smartphone, you're all set.",
  },
  {
    q: "How does the WhatsApp reminder work?",
    a: "When a student's fee is overdue, libdesk shows them on your dashboard. Tap the WhatsApp icon and it opens WhatsApp with a pre-filled message ready to send. One tap — done. No typing, no awkwardness.",
  },
  {
    q: "Can I track both cash and UPI payments?",
    a: "Yes! Mark any payment as 'Cash' or 'UPI' when recording it. You get a clear daily and monthly breakdown either way.",
  },
  {
    q: "Is my student data safe?",
    a: "Absolutely. Data is encrypted and stored on secure cloud servers. Only you can access your library data with your own login. We take privacy very seriously.",
  },
  {
    q: "Can I try it for free?",
    a: "Yes — start with our free Starter plan with no credit card needed. Upgrade to Pro only when you see the value yourself.",
  },
  {
    q: "What if I have multiple libraries?",
    a: "The Pro plan supports multi-location management from a single account. Perfect if you run more than one study centre.",
  },
];

const stats = [
  { value: "500+", label: "Library Owners" },
  { value: "₹50L+", label: "Fees Collected" },
  { value: "12,000+", label: "Seats Managed" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  {
    icon: AlertTriangle,
    title: "Defaulter Tracking",
    desc: "One-tap list of all overdue students with amounts. Never miss a rupee again.",
    gradient: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    color: "text-rose-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Reminders",
    desc: "Pre-filled messages, sent in one tap. No calls, no awkwardness — just results.",
    gradient: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: LayoutGrid,
    title: "Visual Seat Map",
    desc: "See your library floor digitally. Know which seats are vacant, occupied or due — instantly.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Income Reports",
    desc: "Daily, weekly, monthly revenue charts. Track your library's financial health at a glance.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: Wallet,
    title: "Expense Management",
    desc: "Log rent, electricity, maintenance and other costs. See your net profit — not just revenue.",
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
  {
    icon: Lock,
    title: "Admin & Staff Logins",
    desc: "Staff gets their own login to manage students and seats — but can't see income reports. You stay in control.",
    gradient: "from-indigo-500 to-blue-700",
    bg: "bg-indigo-50",
    color: "text-indigo-600",
  },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 py-3 shadow-sm shadow-slate-900/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-xl tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            libdesk
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          {["Features", "How it Works", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden text-slate-600 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors">
            Log in
          </button>
          <button className="hidden md:flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/25">
            Start Free <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-5 gap-2">
              {["Features", "How it Works", "Pricing", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-base shadow-xl shadow-primary/25 active:scale-95">
                Start Free — No Credit Card Needed →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative pt-28 pb-0 md:pt-36 md:pb-0 px-5 overflow-hidden min-h-screen flex flex-col">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-400/8 rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(67,56,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(67,56,202,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 flex-1">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left pb-10 md:pb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-7 text-sm font-bold text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Made for Indian Library Owners 🇮🇳
          </motion.div>

          <h1
            className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] text-slate-900 mb-7 tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Stop chasing
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                student payments.
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-violet-400/30 rounded-full origin-left"
              />
            </span>
          </h1>

          <p
            className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0"
            style={{ lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}
          >
            Track seats, collect fees, and send WhatsApp reminders in one tap.
            Built for mobile. Made for India.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group overflow-hidden bg-primary text-white px-8 py-4 rounded-2xl font-black text-base shadow-2xl shadow-primary/40 flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative flex items-center gap-2.5">
                Start Free — No Card Needed
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_DEMO_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group overflow-hidden border-2 border-green-400 text-green-700 bg-white px-8 py-4 rounded-2xl font-black text-base shadow-lg shadow-green-100 flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative flex items-center gap-2.5">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.474 5.756L.057 23.882l6.26-1.384A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.579-.481-5.088-1.324l-.366-.216-3.729.824.858-3.638-.237-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Get a Free Demo
              </span>
            </motion.a>
          </div>

          {/* Social proof strip */}
          <div className="flex items-center justify-center md:justify-start gap-5">
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/100?img=11",
                "https://i.pravatar.cc/100?img=22",
                "https://i.pravatar.cc/100?img=33",
                "https://i.pravatar.cc/100?img=44",
                "https://i.pravatar.cc/100?img=55",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm"
                >
                  <ImageWithFallback src={src} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-slate-800 font-bold">500+</span> library owners trust libdesk
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center items-center md:items-end relative pb-0 self-center md:self-end w-full"
        >
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-primary/20 rounded-full blur-3xl" />

          {/* Floating badges */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-24 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 px-4 py-3 flex items-center gap-3 z-20 hidden md:flex"
          >
            <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
              <IndianRupee className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Collected Today</p>
              <p className="text-base font-black text-slate-800">₹8,450</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-48 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 px-4 py-3 flex items-center gap-3 z-20 hidden md:flex"
          >
            <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Dues Pending</p>
              <p className="text-base font-black text-red-600">₹3,200</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-3, 5, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-32 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 px-4 py-2.5 flex items-center gap-2.5 z-20 hidden md:flex"
          >
            <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs font-bold text-slate-700">48/60 seats active</p>
          </motion.div>

          {/* The Phone */}
          <div className="relative z-10 w-[270px] md:w-[300px] mx-auto">
            <div className="bg-slate-900 rounded-[3.2rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-full z-30" />

              <div className="bg-slate-50 h-[600px] flex flex-col overflow-hidden relative">
                {/* App header */}
                <div className="bg-primary px-5 pt-12 pb-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-white/60 text-[11px] font-medium mb-0.5">Good morning 👋</p>
                      <p className="font-black text-base">Vikas Study Point</p>
                    </div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                        <Bell className="w-5 h-5" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-black flex items-center justify-center">3</span>
                    </div>
                  </div>
                  <div className="bg-white/12 rounded-2xl p-4 border border-white/15 backdrop-blur-md">
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-1">Today's Collection</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[2rem] font-black tracking-tight">₹8,450</p>
                      <span className="text-[10px] bg-green-400/20 text-green-300 border border-green-400/20 px-2.5 py-1 rounded-full font-black">+12% ↑</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 px-4 pt-4 pb-16 space-y-3 overflow-hidden bg-slate-50">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Dues", val: "₹3,200", icon: AlertTriangle, iconBg: "bg-red-50", iconColor: "text-red-500", valColor: "text-red-600" },
                      { label: "Active", val: "48/60", icon: Users, iconBg: "bg-primary/8", iconColor: "text-primary", valColor: "text-slate-800" },
                    ].map((card) => (
                      <div key={card.label} className="bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100">
                        <div className={`w-8 h-8 ${card.iconBg} rounded-xl flex items-center justify-center mb-2.5`}>
                          <card.icon className={`w-4 h-4 ${card.iconColor}`} />
                        </div>
                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-tight">{card.label}</p>
                        <p className={`text-lg font-black ${card.valColor}`}>{card.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-black text-slate-700">Defaulters</p>
                      <span className="text-[10px] font-black text-primary">View All</span>
                    </div>
                    {[
                      { name: "Rahul S.", seat: "B-12", amt: "₹500", days: "2d ago" },
                      { name: "Megha K.", seat: "A-04", amt: "₹1,200", days: "4d ago" },
                    ].map((d) => (
                      <div key={d.name} className="flex items-center justify-between py-2 border-t border-slate-50">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">{d.name[0]}</div>
                          <div>
                            <p className="text-[11px] font-black">{d.name}</p>
                            <p className="text-[9px] text-slate-400">{d.seat} · {d.days}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black text-red-500">{d.amt}</span>
                          <button className="w-7 h-7 bg-green-500 rounded-xl flex items-center justify-center">
                            <MessageCircle className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-2xl shadow-lg border border-slate-100 flex justify-around p-2">
                  {[
                    { icon: LayoutGrid, active: true },
                    { icon: Users, active: false },
                    { icon: TrendingUp, active: false },
                    { icon: Shield, active: false },
                  ].map(({ icon: Icon, active }, i) => (
                    <div key={i} className={`p-2 rounded-xl ${active ? "bg-primary/10" : ""}`}>
                      <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-slate-400"}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="max-w-6xl mx-auto w-full pb-6 mt-4 md:mt-0 px-0">
        
      </div>
    </section>
  );
}

// ─── PROBLEM / COMPARISON ─────────────────────────────────────────────────────
function ProblemSection() {
  const oldWay = [
    { t: "Writing in paper registers daily", d: "Slow, messy, and easy to lose" },
    { t: "Forgetting who paid and who didn't", d: "Direct revenue loss every month" },
    { t: "Awkward calls asking for money", d: "Damages your relationship with students" },
    { t: "No idea of real-time seat status", d: "Can't maximize occupancy or revenue" },
  ];
  const newWay = [
    { t: "Everything tracked on your phone", d: "Access your library data anywhere, anytime" },
    { t: "Instant overdue student list", d: "Recover unpaid fees in seconds" },
    { t: "Auto WhatsApp payment reminders", d: "Get paid without a single phone call" },
    { t: "Live seat availability dashboard", d: "Maximize occupancy and income" },
  ];

  return (
    <section className="py-14 md:py-20 px-5 bg-slate-50/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">The Reality</p>
          <h2
            className="text-3xl md:text-5xl text-slate-900 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Still using a paper register? 📒
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Most library owners spend hours every week dealing with{" "}
            <span className="font-bold text-slate-700">messy tracking and chasing dues.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl px-8 py-6 border border-red-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-0.5">The Old Way</p>
                  <p className="font-black text-slate-800 text-lg">Manual Registers</p>
                </div>
              </div>
              <div className="space-y-4">
                {oldWay.map((item) => (
                  <div key={item.t} className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{item.t}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Smart Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl px-8 py-6 border border-primary/15 shadow-2xl shadow-primary/8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-50/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-0.5">The Smart Way</p>
                  <p className="font-black text-slate-800 text-lg">libdesk App</p>
                </div>
              </div>
              <div className="space-y-4">
                {newWay.map((item) => (
                  <div key={item.t} className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{item.t}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-8 md:px-10 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="text-center md:text-left relative z-10">
            <p className="text-white/50 text-sm font-bold mb-1">Think about this…</p>
            <p
              className="text-2xl md:text-3xl text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              If libdesk recovers just <span className="text-amber-400">1 student's fee</span>,
              it pays for itself for the year.
            </p>
          </div>
          <button className="shrink-0 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-2xl relative z-10 whitespace-nowrap">
            Start Free Today →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: BookOpen,
      label: "Setup",
      title: "Create your library in 2 mins",
      desc: "Enter your library name, total seats, and your fee plans. You're ready to go — no training needed.",
      accent: "from-indigo-500 to-violet-600",
      pill: "bg-indigo-50 text-indigo-600",
      preview: (
        <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">NEW LIBRARY SETUP</p>
          <div className="space-y-2">
            <div className="h-7 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center px-3">
              <span className="text-[10px] text-indigo-400 font-medium">Vikas Study Point...</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-7 bg-slate-50 border border-slate-100 rounded-xl flex items-center px-3">
                <span className="text-[10px] text-slate-400">80 Seats</span>
              </div>
              <div className="h-7 bg-slate-50 border border-slate-100 rounded-xl flex items-center px-3">
                <span className="text-[10px] text-slate-400">₹600/mo</span>
              </div>
            </div>
            <div className="h-8 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
              <span className="text-[11px] text-white font-black">Finish Setup →</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      icon: Users,
      label: "Add Students",
      title: "Assign seats in seconds",
      desc: "Add name, mobile number, and assign a seat. Set the start date and plan. That's it — done.",
      accent: "from-violet-500 to-purple-600",
      pill: "bg-violet-50 text-violet-600",
      preview: (
        <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">MEMBERS · 48 Active</p>
          <div className="space-y-2">
            {[
              { name: "Anil Kumar", seat: "B-12", status: "Paid", c: "text-green-700 bg-green-50 border-green-100" },
              { name: "Suman P.", seat: "A-04", status: "Due", c: "text-red-600 bg-red-50 border-red-100" },
              { name: "Ravi Teja", seat: "C-07", status: "Paid", c: "text-green-700 bg-green-50 border-green-100" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2">
                <span className="text-[10px] font-bold text-slate-700">{m.name}</span>
                <span className="text-[9px] text-slate-400 font-bold">{m.seat}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full border font-black ${m.c}`}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "03",
      icon: Bell,
      label: "Collect & Remind",
      title: "Get paid without calling",
      desc: "When fees are due, tap one button to send a WhatsApp reminder. Students pay. You relax.",
      accent: "from-emerald-500 to-teal-600",
      pill: "bg-emerald-50 text-emerald-700",
      preview: (
        <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">SEND REMINDER</p>
          <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black text-green-800">To: Suman P. (+91 98765...)</p>
                <p className="text-[9px] text-green-600 mt-0.5 leading-relaxed">Hi Suman! Your fee of ₹600 for Seat A-04 is due. Please pay at your earliest...</p>
              </div>
            </div>
          </div>
          <div className="h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center gap-1.5">
            <span className="text-[11px] text-white font-black">Send on WhatsApp ↗</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-36 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-5 text-sm font-bold text-primary">
            <Zap className="w-3.5 h-3.5" />
            Ready in under 5 minutes
          </div>
          <h2
            className="text-3xl md:text-5xl text-slate-900 mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            How libdesk works
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Going digital is easier than you think — and faster than your morning chai.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[3.25rem] left-[18%] right-[18%] h-px border-t-2 border-dashed border-slate-200" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-xl`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Step {step.num}</p>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${step.pill}`}>{step.label}</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 flex-1 flex flex-col">
                  <div className="relative mb-3">
                    <span className="absolute -top-5 -right-2 text-7xl font-black text-slate-50 select-none pointer-events-none leading-none">
                      {step.num}
                    </span>
                    <h3
                      className="text-lg text-slate-800 relative z-10"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-7 leading-relaxed">{step.desc}</p>
                  <div className="mt-auto">{step.preview}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom reassurance bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-3xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="flex items-center gap-4 text-white z-10">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm md:text-base font-medium text-white/80">
              Average setup time:{" "}
              <span className="text-white font-black">under 5 minutes</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 z-10">
            {["Works on any Phone", "No Computer Needed", "Free to Start", "Hindi Support Coming"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 uppercase tracking-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-36 px-5 bg-slate-50/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Features</p>
          <h2
            className="text-3xl md:text-5xl text-slate-900 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Everything you need.{" "}
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Simple, powerful tools that save you 10+ hours of manual work every single week.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/6 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col gap-3"
            >
              {/* Decorative background accents */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
                <div className={`absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br ${f.gradient} opacity-[0.12] rounded-full blur-2xl group-hover:opacity-[0.22] transition-opacity duration-500`} />
                <div className={`absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br ${f.gradient} opacity-[0.07] rounded-full blur-xl group-hover:opacity-[0.14] transition-opacity duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />
              </div>

              {/* Icon + Title row — vertically centered */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`shrink-0 w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3
                  className="text-base text-slate-800 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {f.title}
                </h3>
              </div>

              {/* Description — indented to align under title */}
              <p className="text-slate-500 text-sm leading-relaxed relative z-10 pl-14">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 px-5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Testimonials</p>
          <h2
            className="text-3xl md:text-5xl text-slate-900 mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Loved by 500+ Indian library owners
          </h2>
          <p className="text-slate-500 text-lg">Real results. Real numbers. Real owners.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/3 rounded-full blur-3xl group-hover:bg-primary/6 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-7 italic">"{t.quote}"</p>

              {/* Gain badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 text-xs font-black px-3 py-1.5 rounded-full mb-7">
                <TrendingUp className="w-3 h-3" />
                {t.gain}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const monthlyPro = 299;
  const annualPro = Math.round(monthlyPro * 12 * 0.8);

  return (
    <section id="pricing" className="py-24 md:py-36 px-5 bg-slate-50/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Pricing</p>
          <h2
            className="text-3xl md:text-5xl text-slate-900 mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Simple, honest pricing
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Costs less than <span className="text-slate-700 font-bold">one student's monthly fee.</span>
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${!annual ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:text-slate-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${annual ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:text-slate-700"}`}
            >
              Annual
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-9 border border-slate-200 shadow-sm"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Starter</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span
                className="text-5xl text-slate-800"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                ₹0
              </span>
              <span className="text-slate-400 font-semibold">/month</span>
            </div>
            <p className="text-slate-500 text-sm mb-8">Perfect for small libraries just starting out.</p>
            <div className="space-y-4 mb-9">
              {[
                "Up to 20 students",
                "Basic payment tracking",
                "Seat management",
                "1 library location",
                "Community support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-slate-500" />
                  </div>
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-4 rounded-2xl border-2 border-slate-200 text-slate-700 font-bold hover:border-primary hover:text-primary transition-all active:scale-95">
              Get Started Free
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary rounded-3xl p-9 text-white relative overflow-hidden shadow-2xl shadow-primary/25"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="absolute top-7 right-7 bg-white/15 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
              ⭐ Most Popular
            </div>

            <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-4 relative z-10">Pro</p>
            <div className="flex items-baseline gap-1 mb-1 relative z-10">
              <span
                className="text-5xl text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                ₹{annual ? Math.round(annualPro / 12) : monthlyPro}
              </span>
              <span className="text-white/60 font-semibold">/month</span>
            </div>
            {annual && (
              <p className="text-white/60 text-xs mb-3 relative z-10">
                Billed ₹{annualPro}/year · <span className="text-green-300 font-black">Save ₹{monthlyPro * 12 - annualPro}</span>
              </p>
            )}
            <p className="text-white/70 text-sm mb-8 relative z-10">For professional owners who want to grow their income.</p>

            <div className="space-y-4 mb-9 relative z-10">
              {[
                "Unlimited students",
                "1-tap WhatsApp reminders",
                "Advanced defaulter list",
                "Income & revenue reports",
                "Priority 24/7 support",
                "Multi-location & staff access",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <button className="relative z-10 w-full py-4 rounded-2xl bg-white text-primary font-black shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-95">
              Start 14-Day Free Trial →
            </button>
            <p className="text-center text-white/40 text-xs mt-3 relative z-10">No credit card required</p>
          </motion.div>
        </div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-xs font-medium mb-4">Secure payments via</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["UPI", "Razorpay", "PhonePe", "Paytm"].map((p) => (
              <span key={p} className="text-sm font-black text-slate-300 hover:text-slate-400 transition-colors">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-36 px-5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">FAQ</p>
          <h2
            className="text-3xl md:text-5xl text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Got questions?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-primary/30 shadow-lg shadow-primary/8" : "border-slate-100 shadow-sm"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-bold text-sm md:text-base transition-colors ${open === i ? "text-primary" : "text-slate-800"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ml-4 ${
                    open === i ? "bg-primary/10 rotate-180" : "bg-slate-50"
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-colors ${open === i ? "text-primary" : "text-slate-400"}`} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/5 border border-primary/10 rounded-3xl p-8 text-center"
        >
          <p className="font-bold text-slate-700 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Still have questions?
          </p>
          <p className="text-slate-500 text-sm mb-5">Chat with us directly on WhatsApp — we usually reply in minutes.</p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_GENERAL_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-green-600 transition-colors active:scale-95 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 md:py-40 px-5 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] -z-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8 text-sm font-bold text-white/70">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Start free — upgrade when you love it
          </div>

          <h2
            className="text-4xl md:text-6xl text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, lineHeight: 1.1 }}
          >
            Ready to grow your
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              library income?
            </span>
          </h2>

          <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium" style={{ lineHeight: 1.7 }}>
            Join hundreds of library owners across India who save time, eliminate manual work, and collect 100% of their dues with libdesk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-base hover:scale-105 hover:shadow-2xl transition-all shadow-xl flex items-center justify-center gap-2">
              Start Free Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_DEMO_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500/90 text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-green-500 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.474 5.756L.057 23.882l6.26-1.384A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.579-.481-5.088-1.324l-.366-.216-3.729.824.858-3.638-.237-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Get Free Demo on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/30 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Setup in 5 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ──��────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-14 px-5 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl text-slate-900 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                libdesk
              </span>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left leading-relaxed">
              Premium library management built for Indian library owners. Phone-first, simple, and powerful.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Secure Data</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Smartphone className="w-3 h-3" /> Phone Optimized</span>
            </div>
          </div>

          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-black text-slate-700 text-xs uppercase tracking-widest mb-1">Product</p>
              {["Features", "Pricing", "How it Works"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-slate-400 hover:text-primary transition-colors font-medium">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-black text-slate-700 text-xs uppercase tracking-widest mb-1">Support</p>
              <a href="#faq" className="text-slate-400 hover:text-primary transition-colors font-medium">
                FAQ
              </a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_GENERAL_MSG}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors font-medium">
                WhatsApp Support
              </a>
              <Link to="/privacy-policy" className="text-slate-400 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors font-medium">
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 libdesk. Made with ❤️ in India 🇮🇳</p>
          <p>All fees in Indian Rupees (₹ INR). GST applicable on Pro plan.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── STICKY MOBILE CTA ────────────────────────────────────────────────────────
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 p-4 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]"
        >
          <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black shadow-xl shadow-primary/25 active:scale-95 text-sm flex items-center justify-center gap-1.5">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_DEMO_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/25 active:scale-95 shrink-0"
            aria-label="WhatsApp Demo"
          >
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.474 5.756L.057 23.882l6.26-1.384A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.579-.481-5.088-1.324l-.366-.216-3.729.824.858-3.638-.237-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── FLOATING WHATSAPP ────────────────────────────────────────────────────────
function FloatingWhatsApp() {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_DEMO_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      className="hidden md:flex fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25" />
      <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.537 4.049 1.474 5.756L.057 23.882l6.26-1.384A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.579-.481-5.088-1.324l-.366-.216-3.729.824.858-3.638-.237-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>

      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl whitespace-nowrap pointer-events-none"
          >
            <p className="text-xs font-bold">Chat with us on WhatsApp</p>
            <p className="text-[10px] text-white/50">Usually replies in minutes</p>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────
export function LandingPage() {
  return (
    <div
      className="min-h-screen bg-white antialiased"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
    >
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <FloatingWhatsApp />
      {/* Spacer for mobile sticky bar */}
      <div className="h-24 md:hidden" />
    </div>
  );
}

// ─── ROUTER ───────────────────────────────────────────────────────────────────
const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  { path: "/privacy-policy", Component: PrivacyPolicy },
  {
    path: "*",
    Component: () => (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <p className="text-slate-600 mb-6">Page not found</p>
          <a href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all">
            Go Home
          </a>
        </div>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
