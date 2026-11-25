
import {
    LayoutDashboard,
    Users,
    CalendarDays,
    ClipboardList,
    Settings,
    Search,
    Bell,
    Plus,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal,
    MapPin,
    ChevronDown,
    Sparkles,
    Building2,
    CheckCircle2,
    Menu,
  } from "lucide-react";
import Link from "next/link";
  
  const stats = [
    {
      title: "Total Enquiries",
      value: "128",
      change: "+18.2%",
      positive: true,
      note: "vs. last month",
      icon: Users,
    },
    {
      title: "Pending Estimates",
      value: "24",
      change: "+6",
      positive: true,
      note: "awaiting review",
      icon: ClipboardList,
    },
    {
      title: "Upcoming Bookings",
      value: "16",
      change: "+12.5%",
      positive: true,
      note: "next 7 days",
      icon: CalendarDays,
    },
    {
      title: "Pipeline Value",
      value: "$28,450",
      change: "+9.4%",
      positive: true,
      note: "potential revenue",
      icon: ArrowUpRight,
    },
  ];
  
  const leads = [
    {
      name: "Sarah Thompson",
      initials: "ST",
      service: "Residential Cleaning",
      date: "Today, 10:42 AM",
      amount: "$240",
      status: "New",
      color: "bg-blue-50 text-blue-700",
    },
    {
      name: "Michael Anderson",
      initials: "MA",
      service: "Interior Painting",
      date: "Today, 9:15 AM",
      amount: "$1,850",
      status: "Estimate Sent",
      color: "bg-amber-50 text-amber-700",
    },
    {
      name: "Harbour Properties",
      initials: "HP",
      service: "Unit Turnover",
      date: "Yesterday",
      amount: "$680",
      status: "In Review",
      color: "bg-violet-50 text-violet-700",
    },
    {
      name: "Jennifer Wilson",
      initials: "JW",
      service: "Deep Cleaning",
      date: "Yesterday",
      amount: "$320",
      status: "Confirmed",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      name: "Atlantic Offices",
      initials: "AO",
      service: "Commercial Cleaning",
      date: "Nov 22, 2026",
      amount: "$1,200",
      status: "New",
      color: "bg-blue-50 text-blue-700",
    },
  ];
  
  const bookings = [
    {
      time: "09:00 AM",
      name: "Sarah Thompson",
      service: "Residential Cleaning",
      address: "Bedford, NS",
      status: "Confirmed",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      time: "11:30 AM",
      name: "Harbour Properties",
      service: "Unit Turnover",
      address: "Downtown Halifax",
      status: "Confirmed",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      time: "02:00 PM",
      name: "Michael Anderson",
      service: "Painting Consultation",
      address: "Dartmouth, NS",
      status: "Pending",
      color: "bg-amber-100 text-amber-700",
    },
  ];
  
  const serviceMix = [
    { name: "Cleaning", value: 46, amount: "$13,080", width: "46%", color: "bg-emerald-600" },
    { name: "Painting", value: 24, amount: "$6,820", width: "24%", color: "bg-amber-500" },
    { name: "Renovations", value: 18, amount: "$5,120", width: "18%", color: "bg-violet-500" },
    { name: "Unit Turnovers", value: 12, amount: "$3,430", width: "12%", color: "bg-sky-500" },
  ];
  
  const navItems = [
    { label: "Overview", icon: LayoutDashboard, active: true },
    { label: "Leads & Enquiries", icon: Users },
    { label: "Estimates", icon: ClipboardList },
    { label: "Bookings & Calendar", icon: CalendarDays },
    { label: "Customers", icon: Building2 },
  ];
  
  export default function AdminDashboard() {
    return (
      <main className="min-h-screen bg-[#f5f7f5] text-slate-900">
        <div className="flex min-h-screen">
  
          {/* SIDEBAR */}
          <aside className="hidden w-[255px] shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-7 lg:flex">
            <Link href="/" className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white">
                <Sparkles size={21} />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">DEVAS GROUP</div>
                <div className="text-[9px] font-semibold uppercase tracking-[.2em] text-slate-400">
                  Management Portal
                </div>
              </div>
            </Link>
  
            <div className="mt-12 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
              Workspace
            </div>
  
            <nav className="mt-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      item.active
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon size={19} />
                    {item.label}
                    {item.label === "Leads & Enquiries" && (
                      <span className="ml-auto rounded-full bg-emerald-700 px-2 py-0.5 text-[10px] font-bold text-white">
                        8
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
  
            <div className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
              Configuration
            </div>
  
            <nav className="mt-4 space-y-1">
              <a href="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50">
                <Settings size={19} /> Settings
              </a>
            </nav>
  
            <div className="mt-auto rounded-2xl bg-[#edf5e9] p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-emerald-800">
                <Sparkles size={18} />
              </div>
              <div className="mt-4 text-sm font-extrabold">Need assistance?</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Manage your services and business operations from one place.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-800">
                Help centre <ArrowUpRight size={14} />
              </a>
            </div>
  
            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-bold">
                DG
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold">Devas Admin</div>
                <div className="text-xs text-slate-400">Administrator</div>
              </div>
              <MoreHorizontal size={20} className="text-slate-400" />
            </div>
          </aside>
  
          {/* MAIN CONTENT */}
          <div className="min-w-0 flex-1">
  
            {/* TOP BAR */}
            <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <button className="rounded-lg border border-slate-200 p-2 lg:hidden" aria-label="Open sidebar">
                  <Menu size={19} />
                </button>
                <div>
                  <div className="text-sm font-bold">Business Overview</div>
                  <div className="mt-0.5 text-xs text-slate-400">Monday, November 24, 2026</div>
                </div>
              </div>
  
              <div className="flex items-center gap-3">
                <button className="hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 sm:flex">
                  <Search size={15} /> Search
                </button>
                <button className="relative rounded-xl border border-slate-200 p-2.5">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                </button>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">
                  DG
                </div>
              </div>
            </header>
  
            <div className="mx-auto max-w-[1500px] p-5 sm:p-8">
  
              {/* PAGE TITLE */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                    Good morning, Devas Group 👋
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    Here&apos;s what&apos;s happening across your business.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold">
                    <CalendarDays size={17} /> View Calendar
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-900">
                    <Plus size={17} /> Add New Lead
                  </a>
                </div>
              </div>
  
              {/* KPI CARDS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-500">{stat.title}</span>
                        <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-800">
                          <Icon size={19} />
                        </div>
                      </div>
                      <div className="mt-5 text-3xl font-black tracking-tight">{stat.value}</div>
                      <div className="mt-3 flex items-center gap-2 text-xs">
                        {stat.positive ? (
                          <ArrowUpRight className="text-emerald-600" size={15} />
                        ) : (
                          <ArrowDownRight className="text-red-600" size={15} />
                        )}
                        <span className="font-bold text-emerald-700">{stat.change}</span>
                        <span className="text-slate-400">{stat.note}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
  
              {/* MAIN GRID */}
              <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
  
                {/* LEADS TABLE */}
                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                    <div>
                      <h2 className="font-extrabold">Recent Enquiries</h2>
                      <p className="mt-1 text-xs text-slate-400">Latest customer requests</p>
                    </div>
                    <a href="#" className="text-xs font-bold text-emerald-800">
                      View all <ArrowUpRight className="ml-1 inline" size={14} />
                    </a>
                  </div>
  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                      <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400">
                        <tr>
                          <th className="px-6 py-4 font-bold">Customer</th>
                          <th className="px-4 py-4 font-bold">Service</th>
                          <th className="px-4 py-4 font-bold">Estimate</th>
                          <th className="px-4 py-4 font-bold">Status</th>
                          <th className="px-4 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {leads.map((lead) => (
                          <tr key={lead.name} className="transition hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                                  {lead.initials}
                                </div>
                                <div>
                                  <div className="text-sm font-bold">{lead.name}</div>
                                  <div className="mt-1 text-[10px] text-slate-400">{lead.date}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-xs font-semibold text-slate-600">{lead.service}</td>
                            <td className="px-4 py-4 text-sm font-bold">{lead.amount}</td>
                            <td className="px-4 py-4">
                              <span className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-bold ${lead.color}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <button aria-label={`More actions for ${lead.name}`}><MoreHorizontal size={18} className="text-slate-400" /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
  
                {/* BOOKINGS */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-extrabold">Upcoming Bookings</h2>
                      <p className="mt-1 text-xs text-slate-400">Tuesday, November 25</p>
                    </div>
                    <a href="#" className="rounded-xl bg-emerald-50 p-2.5 text-emerald-800">
                      <CalendarDays size={19} />
                    </a>
                  </div>
  
                  <div className="mt-6 space-y-5">
                    {bookings.map((booking) => (
                      <div key={booking.name} className="flex gap-4">
                        <div className="w-[76px] shrink-0 pt-1 text-xs font-bold text-slate-500">
                          {booking.time}
                        </div>
                        <div className="min-w-0 flex-1 border-l-2 border-emerald-100 pl-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="truncate text-sm font-extrabold">{booking.name}</div>
                            <span className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${booking.color}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-slate-500">{booking.service}</div>
                          <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                            <MapPin size={12} /> {booking.address}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
  
                  <a href="#" className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-xs font-bold transition hover:bg-slate-50">
                    View full calendar <ArrowUpRight size={15} />
                  </a>
                </section>
              </div>
  
              {/* LOWER GRID */}
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
  
                {/* SERVICE BREAKDOWN */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-extrabold">Service Breakdown</h2>
                      <p className="mt-1 text-xs text-slate-400">Estimated revenue by service category</p>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold">
                      This Month <ChevronDown size={14} />
                    </button>
                  </div>
  
                  <div className="mt-8 space-y-6">
                    {serviceMix.map((service) => (
                      <div key={service.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-semibold">{service.name}</span>
                          <span className="text-sm font-extrabold">{service.amount}</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                          <div className={`h-full rounded-full ${service.color}`} style={{ width: service.width }} />
                        </div>
                        <div className="mt-1 text-right text-[10px] text-slate-400">{service.value}% of pipeline</div>
                      </div>
                    ))}
                  </div>
                </section>
  
                {/* LEAD PIPELINE */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-extrabold">Lead Pipeline</h2>
                      <p className="mt-1 text-xs text-slate-400">Track customer requests through the sales process</p>
                    </div>
                    <a href="#" className="text-xs font-bold text-emerald-800">Manage</a>
                  </div>
  
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["New", "08", "bg-blue-50 text-blue-700"],
                      ["In Review", "12", "bg-amber-50 text-amber-700"],
                      ["Quoted", "09", "bg-violet-50 text-violet-700"],
                      ["Confirmed", "16", "bg-emerald-50 text-emerald-700"],
                    ].map(([label, value, color]) => (
                      <div key={label} className="rounded-xl border border-slate-100 p-4">
                        <div className={`inline-flex rounded-lg px-2 py-1 text-[10px] font-bold ${color}`}>
                          {label}
                        </div>
                        <div className="mt-4 text-3xl font-black">{value}</div>
                        <div className="mt-1 text-[10px] text-slate-400">Enquiries</div>
                      </div>
                    ))}
                  </div>
  
                  <div className="mt-8 rounded-xl bg-[#f2f7ef] p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white p-3 text-emerald-800">
                        <CheckCircle2 size={21} />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold">Stay on top of every enquiry</div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Follow up with customers, update estimates and convert requests into bookings.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
  
              {/* QUICK ACTIONS */}
              <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-extrabold">Quick Actions</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Create an Estimate", ClipboardList],
                    ["Add a Booking", CalendarDays],
                    ["Add a Customer", Users],
                    ["Manage Services", Building2],
                  ].map(([label, Icon]) => (
                    <a key={label as string} href="#"
                      className="flex items-center justify-between rounded-xl border border-slate-200 p-4 text-sm font-bold transition hover:border-emerald-300 hover:bg-emerald-50">
                      <span className="flex items-center gap-3">
                        <span className="rounded-lg bg-slate-100 p-2 text-emerald-800">
                          <Icon size={18} />
                        </span>
                        {label as string}
                      </span>
                      <ArrowUpRight size={16} className="text-slate-400" />
                    </a>
                  ))}
                </div>
              </section>
  
              <div className="mt-8 text-center text-[10px] text-slate-400">
                Devas Group Management Portal · Demo data for presentation purposes
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  