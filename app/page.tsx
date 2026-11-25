"use client";
import { useState } from "react";
import {
  ArrowUpRight, CalendarDays, Check,
  Building2, Paintbrush, Hammer, Sparkles,
  Menu, Wrench, ClipboardCheck, X
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Cleaning",
    description: "Professional cleaning for homes, offices and properties.",
    detail: "Residential · Commercial · Deep Cleaning",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Painting",
    description: "Refresh your interiors and exteriors with a professional finish.",
    detail: "Interior · Exterior · Repainting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1000",
    icon: Paintbrush,
  },
  {
    number: "03",
    title: "Renovations",
    description: "Thoughtful improvements that make your property work better.",
    detail: "Repairs · Upgrades · Property Improvements",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Unit Turnovers",
    description: "Get rental units ready for the next tenant, without the hassle.",
    detail: "Move-out · Refresh · Move-in Preparation",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000",
    icon: Building2,
  },
];

const reasons = [
  "One partner for multiple property needs",
  "Flexible scheduling and coordinated services",
  "Solutions tailored to your property",
  "Clear communication from start to finish",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-x-clip bg-[#f7f7f2] text-[#182a22]">
      <header className="sticky top-0 z-50 border-b border-[#182a22]/10 bg-[#f7f7f2]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-[60] flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9ed72]">
              <Sparkles size={22} />
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                DEVAS<span className="text-[#759d42]"> GROUP</span>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[.24em] text-[#69766d]">
                Complete Property Care
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#process">How It Works</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/availability"
              className="rounded-full border border-[#182a22]/25 px-5 py-3 text-sm font-bold">
              Check Availability
            </Link>

            <Link href="/estimate"
              className="rounded-full bg-[#182a22] px-6 py-3 text-sm font-bold text-white">
              Get an Estimate <ArrowUpRight className="ml-2 inline" size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] rounded-full border border-[#182a22]/20 p-3 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-[#182a22]/10 bg-[#f7f7f2] px-6 py-7 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-6 text-base font-semibold">
              {[
                ["Services", "#services"],
                ["About Us", "#about"],
                ["How It Works", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#759d42]"
                >
                  {label}
                </a>
              ))}

              <div className="mt-2 flex flex-col gap-3 border-t border-[#182a22]/10 pt-6">
                <Link
                  href="/availability"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-[#182a22]/25 px-6 py-4 text-center"
                >
                  Check Availability
                </Link>

                <Link
                  href="/estimate"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-[#182a22] px-6 py-4 text-center text-white"
                >
                  Get an Estimate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#759d42]" />
              <span className="text-xs font-bold uppercase tracking-[.25em] text-[#65853d]">
                One group. Every property need.
              </span>
            </div>

            <h1 className="max-w-3xl text-[56px] font-black leading-[.98] tracking-[-.065em] sm:text-7xl lg:text-[88px]">
              Better spaces.
              <br />
              <span className="font-serif font-medium italic text-[#759d42]">
                Better living.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#53635a]">
              From professional cleaning and painting to renovations and
              complete unit turnovers, Devas Group helps you take better
              care of your property.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/estimate"
                className="rounded-full bg-[#182a22] px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#466b36]">
                Get a Free Estimate <ArrowUpRight className="ml-3 inline" size={17} />
              </a>
              <a href="/availability"
                className="rounded-full border border-[#182a22]/25 bg-white/60 px-7 py-4 text-center text-sm font-bold transition hover:bg-[#c9ed72]">
                <CalendarDays className="mr-2 inline" size={17} />
                Check Availability
              </a>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-[#182a22]/15 pt-7">
              <div>
                <div className="text-sm font-extrabold">Cleaning</div>
                <div className="mt-1 text-xs text-[#69766d]">Everyday care</div>
              </div>
              <div>
                <div className="text-sm font-extrabold">Improvements</div>
                <div className="mt-1 text-xs text-[#69766d]">Better spaces</div>
              </div>
              <div>
                <div className="text-sm font-extrabold">Turnovers</div>
                <div className="mt-1 text-xs text-[#69766d]">Ready for what&apos;s next</div>
              </div>
            </div>
          </div>

          {/* EDITORIAL IMAGE COMPOSITION */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-[#dce9c8] blur-3xl" />
            <div className="relative h-[490px] overflow-hidden rounded-t-[48%] rounded-b-[2rem] sm:h-[590px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400"
                alt="Beautiful renovated modern property"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c16]/55 to-transparent" />
              <div className="absolute bottom-9 left-8 text-white">
                <div className="text-xs font-bold uppercase tracking-[.25em]">Complete property care</div>
                <div className="mt-2 font-serif text-3xl italic">From upkeep to transformation.</div>
              </div>
            </div>

            <div className="absolute -left-5 top-14 max-w-[190px] rounded-2xl bg-white p-5 shadow-2xl sm:-left-12">
              <Wrench className="text-[#759d42]" size={25} />
              <div className="mt-3 text-sm font-extrabold">More than maintenance</div>
              <div className="mt-1 text-xs leading-5 text-[#718076]">
                A complete range of property services.
              </div>
            </div>

            <div className="absolute -bottom-12 -right-2 z-20 rounded-2xl bg-[#c9ed72] p-5 shadow-xl sm:-right-6">
  <div className="text-sm font-black">One trusted partner.</div>
  <div className="mt-1 text-xs">Many ways to improve your space.</div>
</div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section id="services" className="bg-[#182a22] py-24 text-white lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-[.25em] text-[#c9ed72]">
                What we do
              </div>
              <h2 className="mt-5 max-w-2xl text-5xl font-black leading-[1.04] tracking-[-.05em] sm:text-6xl">
                Everything your
                <br />
                property needs.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-white/60">
              Whether you own a home, manage rental properties or operate
              a commercial space, we bring multiple services together.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a href="/estimate" key={service.number}
                  className="group relative min-h-[370px] overflow-hidden rounded-[2rem]">
                  <img src={service.image} alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101c16]/90 via-[#101c16]/10 to-transparent" />
                  <div className="absolute left-7 top-7 flex items-center gap-3 text-white">
                    <span className="rounded-full border border-white/40 px-3 py-1 text-xs">{service.number}</span>
                    <Icon size={20} />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                    <div>
                      <h3 className="text-3xl font-black">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{service.description}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#c9ed72]">
                        {service.detail}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c9ed72] text-[#182a22] transition group-hover:rotate-45">
                      <ArrowUpRight size={23} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 text-sm text-white/55">
            Need something else? Ask us about property maintenance and customized projects.
          </div>
        </div>
      </section>

      {/* ABOUT / WHY DEVAS */}
      <section id="about" className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200"
            alt="Beautifully maintained property interior"
            className="h-[490px] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -bottom-12 -right-3 rounded-2xl bg-[#c9ed72] p-6 shadow-xl sm:-right-6">
            <div className="text-2xl font-black">One group.</div>
            <div className="text-sm">Multiple property solutions.</div>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[.25em] text-[#759d42]">
            The Devas Group difference
          </div>
          <h2 className="mt-5 text-5xl font-black leading-[1.05] tracking-[-.05em]">
            Your property.
            <br />
            <span className="font-serif font-medium italic text-[#759d42]">
              Our commitment.
            </span>
          </h2>
          <p className="mt-7 leading-8 text-[#69766d]">
            Managing a property takes time, coordination and the right people.
            Devas Group brings essential property services together to make
            maintaining and improving your space simpler.
          </p>

          <div className="mt-8 space-y-5">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6efd7] text-[#638c3c]">
                  <Check size={16} />
                </span>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="bg-[#eaeedf] py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[.25em] text-[#759d42]">
              A simpler way to get things done
            </div>
            <h2 className="mt-5 text-5xl font-black tracking-[-.05em]">
              From idea to <span className="font-serif font-medium italic text-[#759d42]">done.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Tell us about your project", "Choose a service and share details about your property."],
              ["02", "Estimate or availability", "Get an indicative estimate or check the calendar for a suitable time."],
              ["03", "Let's get started", "We review your request, confirm the details and coordinate the work."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-3xl bg-[#f7f7f2] p-8">
                <div className="font-serif text-5xl italic text-[#759d42]">{number}</div>
                <h3 className="mt-7 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#69766d]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#c9ed72] md:grid-cols-2">
          <div className="p-9 sm:p-14 lg:p-16">
            <ClipboardCheck size={32} />
            <h2 className="mt-7 text-4xl font-black tracking-tight">
              Know what your project might cost?
            </h2>
            <p className="mt-4 leading-7 text-[#405633]">
              Share your property details and service requirements to get
              started with an estimate.
            </p>
            <a href="/estimate"
              className="mt-8 inline-flex items-center rounded-full bg-[#182a22] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#466b36]">
              Get an Estimate <ArrowUpRight className="ml-3" size={18} />
            </a>
          </div>

          <div className="bg-[#e4f3c7] p-9 sm:p-14 lg:p-16">
            <CalendarDays size={32} />
            <h2 className="mt-7 text-4xl font-black tracking-tight">
              Ready to schedule?
            </h2>
            <p className="mt-4 leading-7 text-[#405633]">
              Explore available dates and request a time that works for you.
              Booking details can be confirmed with our team.
            </p>
            <a href="/availability"
              className="mt-8 inline-flex items-center rounded-full border border-[#182a22]/30 px-7 py-4 text-sm font-bold transition hover:bg-[#182a22] hover:text-white">
              Check Availability <ArrowUpRight className="ml-3" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#182a22] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="text-2xl font-black">DEVAS GROUP.</div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Complete property care, from cleaning and painting to
                renovations and unit turnovers.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Explore</h4>
              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a href="#services" className="block hover:text-[#c9ed72]">Services</a>
                <a href="#about" className="block hover:text-[#c9ed72]">About Us</a>
                <a href="#process" className="block hover:text-[#c9ed72]">How It Works</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Get started</h4>
              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a href="/estimate" className="block hover:text-[#c9ed72]">Get an Estimate</a>
                <a href="/availability" className="block hover:text-[#c9ed72]">Check Availability</a>
                <a href="/contact" className="block hover:text-[#c9ed72]">Contact Us</a>
                <a href="/admin" className="block hover:text-[#c9ed72]">Admin Demo</a>
              </div>
            </div>
          </div>
          <div className="mt-14 border-t border-white/10 pt-7 text-xs text-white/40">
            © 2026 Devas Group. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
