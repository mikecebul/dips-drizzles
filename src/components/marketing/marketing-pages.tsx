'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  Baby,
  CakeSlice,
  Candy,
  Facebook,
  Gift,
  GraduationCap,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Notebook,
  Palette,
  Phone,
  PartyPopper,
  X,
} from 'lucide-react'
import { type ReactNode } from 'react'

import { MarketingContactForm } from '@/components/marketing/contact-form'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { DrawerDescription } from '@/components/ui/drawer'
import { websiteContent } from '@/lib/website-content'

const socialIconMap = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  X,
} as const

const occasionItems = [
  { icon: Gift, label: 'Birthdays' },
  { icon: Heart, label: 'Weddings' },
  { icon: Baby, label: 'Baby Showers' },
  { icon: GraduationCap, label: 'Graduations' },
  { icon: PartyPopper, label: '& More' },
] as const

const bestSellers = [
  {
    imageClassName: 'object-[5%_8%]',
    name: 'Cake Pops',
    price: '$35 / dozen',
  },
  {
    imageClassName: 'object-[48%_8%]',
    name: 'Strawberries',
    price: '$35 / dozen',
  },
  {
    imageClassName: 'object-[86%_8%]',
    name: 'Rice Krispies',
    price: '$30 / dozen',
  },
  {
    imageClassName: 'object-[12%_88%]',
    name: 'Oreos',
    price: '$30 / dozen',
  },
  {
    imageClassName: 'object-[50%_88%]',
    name: 'Pretzel Rods',
    price: '$27 / dozen',
  },
  {
    imageClassName: 'object-[88%_88%]',
    name: 'Marshmallows',
    price: '$27 / dozen',
  },
] as const

const partyPackages = [
  {
    description: ['3 of each treat', '2 custom colors & drizzles', 'Add toppings for $8'],
    icon: CakeSlice,
    name: 'Sampler Box',
    price: '$50',
  },
  {
    description: [
      'Pick any 3 dozen sets',
      '2 custom colors & drizzles',
      'Themed toppings for $5/dozen',
    ],
    icon: Candy,
    name: 'Sprinkles Party Package',
    price: '~ $100',
  },
  {
    description: [
      'Pick any 6 dozen sets',
      '2 custom colors & drizzles',
      'Themed toppings for $5/dozen',
    ],
    icon: PartyPopper,
    name: 'Confetti Party Package',
    price: '~ $190',
  },
  {
    description: ['Have something special in mind?', "Let's create it together."],
    icon: Gift,
    name: 'Custom Orders',
    price: '',
  },
] as const

const standardTreats = [
  { name: 'Cake Pops', price: '$35' },
  { name: 'Strawberries', price: '$35' },
  { name: 'Rice Krispies', price: '$30' },
  { name: 'Oreos', price: '$30' },
  { name: 'Pretzel Rods', price: '$27' },
  { name: 'Marshmallows', price: '$27' },
] as const

const customTreats = [
  { name: 'Cake Pops', price: '$40' },
  { name: 'Strawberries', price: '$40' },
  { name: 'Rice Krispies', price: '$35' },
  { name: 'Oreos', price: '$35' },
  { name: 'Pretzel Rods', price: '$32' },
  { name: 'Marshmallows', price: '$32' },
] as const

const menuPackages = [
  {
    name: 'Sampler Box',
    price: '~ $50',
    details: [
      '3 of each treat (18 treats total)',
      'Choose 2 custom colors with drizzles, marble design, theme sprinkles',
      'Add custom chocolate toppings for $8',
    ],
  },
  {
    name: 'Sprinkles Party Package',
    price: '~ $100',
    details: [
      'Pick any 3 dozen sets',
      'Choose 2 custom colors with drizzles, marble design, theme sprinkles',
      'Add custom themed chocolate toppings for $5 per dozen',
    ],
  },
  {
    name: 'Confetti Party Package',
    price: '~ $190',
    details: [
      'Pick any 6 dozen sets',
      'Choose 2 custom colors with drizzles, marble design, theme sprinkles',
      'Add custom themed chocolate toppings for $5 per dozen',
    ],
  },
] as const

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-[linear-gradient(180deg,#fff8fb_0%,#fffefb_42%,#fff8fd_100%)] text-(--marketing-ink)">
      <MarketingNav />
      {children}
      <MarketingFooter />
    </div>
  )
}

export function MarketingHomePage() {
  return (
    <MarketingPageMain>
      <section className="relative mx-auto grid max-w-[1280px] overflow-hidden px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center lg:px-12">
        <div className="relative z-10 max-w-3xl py-10">
          <MarketingEyebrow>{websiteContent.home.eyebrow}</MarketingEyebrow>
          <h1 className="mt-7 font-heading text-6xl leading-14 font-black text-balance uppercase sm:text-7xl lg:text-6xl">
            <span className="block text-(--marketing-gold-strong)">Sweet Treats,</span>
            <span className="block text-(--marketing-sky)">Made Your Way</span>
          </h1>
          <p className="mt-1 font-(family-name:--font-script) text-3xl leading-none font-normal text-(--marketing-ink) sm:text-4xl">
            Dips and Drizzles Chx
          </p>
          <p className="pt-6 text-lg max-w-xl text-balance text-foreground sm:text-xl">
            Custom-dipped treats with colors, drizzles and sprinkles to match any celebration.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MarketingButtonLink href="/menu" showIcon={false}>
              View Menu
            </MarketingButtonLink>
            <MarketingButtonLink href="/contact" showIcon={false} tone="secondary">
              Order Now
            </MarketingButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-5 text-[0.7rem] font-black uppercase leading-4 tracking-[0.08em] sm:grid-cols-3">
            <SweetFeature icon={<Heart className="size-9" />} label="Made with love" />
            <SweetFeature icon={<Palette className="size-9" />} label="Custom colors & designs" />
            <SweetFeature
              icon={<PartyPopper className="size-9" />}
              label="Perfect for celebrations"
            />
          </div>
        </div>

        <div className="pointer-events-none relative hidden items-center justify-center lg:flex">
          <Image
            priority
            alt="Pastel custom cake pops with pink and lavender drizzle"
            className="h-auto w-[132%] max-w-none drop-shadow-[0_28px_42px_rgba(173,118,198,0.24)]"
            src="/marketing/dips-drizzles/hero-cake-pops-cluster.png"
            width={1693}
            height={929}
            sizes="58vw"
          />
        </div>
        <div className="relative mt-4 block overflow-hidden lg:hidden">
          <Image
            priority
            alt="Pastel custom cake pops with pink and lavender drizzle"
            className="mx-auto h-auto w-[112%] max-w-none drop-shadow-[0_20px_34px_rgba(173,118,198,0.2)]"
            src="/marketing/dips-drizzles/hero-cake-pops-cluster.png"
            width={1693}
            height={929}
            sizes="100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(115deg,#d58be4_0%,#a16ed3_52%,#c785e5_100%)] px-5 py-7 text-white shadow-[0_18px_50px_rgba(172,109,210,0.25)]">
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_2px_2px,#ffffff_1.2px,transparent_0)] [background-size:32px_32px]" />
          <p className="relative text-center font-(family-name:--font-script) text-5xl leading-none font-normal">
            Perfect for
          </p>
          <div className="relative mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {occasionItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <item.icon className="size-9 stroke-[1.4]" />
                <span className="text-xs font-bold uppercase tracking-[0.06em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1120px] px-4 text-center sm:px-6 lg:px-12">
        <div className="flex items-center gap-5">
          <span className="h-px flex-1 bg-(--marketing-sky)/45" />
          <h2 className="font-heading text-3xl font-black uppercase tracking-[0.18em] text-(--marketing-gold-strong)">
            Best Sellers
          </h2>
          <span className="h-px flex-1 bg-(--marketing-sky)/45" />
        </div>
        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {bestSellers.map((item) => (
            <article key={item.name} className="text-center">
              <div className="mx-auto size-32 overflow-hidden rounded-full shadow-[0_14px_34px_rgba(174,122,195,0.22)] ring-4 ring-white sm:size-36">
                <Image
                  alt={`${item.name} by Dips and Drizzles CHX`}
                  className={cn('h-full w-full object-cover', item.imageClassName)}
                  src="/marketing/dips-drizzles/treats-collage.png"
                  width={1536}
                  height={1024}
                  sizes="144px"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold">{item.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-(--marketing-copy)">
                <span className="text-(--marketing-sky)">{item.price.split(' / ')[0]}</span> /{' '}
                {item.price.split(' / ')[1]}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <MarketingButtonLink className="min-w-64" href="/menu" showIcon={false} tone="secondary">
            View Full Menu
          </MarketingButtonLink>
        </div>
      </section>

      <section id="party-packages" className="mx-auto mt-10 max-w-[1120px] px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <p className="font-(family-name:--font-script) text-5xl leading-none font-normal text-(--marketing-sky)">
            Celebrate with our
          </p>
          <h2 className="-mt-1 font-heading text-3xl font-black uppercase tracking-[0.08em] text-(--marketing-sky)">
            Party Packages
          </h2>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {partyPackages.map((partyPackage) => (
            <article
              key={partyPackage.name}
              className="flex min-h-[320px] flex-col items-center rounded-[8px] bg-white px-7 py-7 text-center shadow-[0_16px_42px_rgba(80,52,93,0.16)]"
            >
              <div className="flex size-20 items-center justify-center rounded-full border-2 border-(--marketing-sky) text-(--marketing-sky)">
                <partyPackage.icon className="size-10 stroke-[1.5]" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-black uppercase leading-5 tracking-[0.08em] text-(--marketing-sky)">
                {partyPackage.name}
              </h3>
              {partyPackage.price ? (
                <p className="mt-1 font-heading text-xl font-black text-(--marketing-sky)">
                  {partyPackage.price}
                </p>
              ) : null}
              <ul className="mt-5 space-y-2 text-left text-sm leading-6 text-(--marketing-copy)">
                {partyPackage.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <MarketingButtonLink
                className="mt-auto h-10 min-w-36 border-(--marketing-gold-strong) px-4 text-xs"
                href="/contact"
                showIcon={false}
                tone="secondary"
              >
                {partyPackage.name === 'Custom Orders' ? 'Contact Us' : 'Learn More'}
              </MarketingButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-5 bg-[linear-gradient(90deg,#e686cc,#d580d2,#e88fc6)] px-4 py-3 text-center text-white">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-center gap-3 sm:flex-row">
          <p className="font-(family-name:--font-script) text-4xl leading-none font-normal">
            Let&apos;s make your next celebration extra sweet!
          </p>
          <MarketingButtonLink
            className="h-11 border-white bg-transparent px-7 text-white hover:bg-white/15"
            href="/contact"
            showIcon={false}
          >
            Order Now
          </MarketingButtonLink>
        </div>
      </section>
    </MarketingPageMain>
  )
}

export function MarketingMenuPage() {
  return (
    <MarketingPageMain>
      <section className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 lg:px-12">
        <div className="text-center">
          <div className="mx-auto flex size-28 items-center justify-center rounded-full border-2 border-(--marketing-sky) font-serif text-3xl leading-[0.82] text-(--marketing-sky) italic">
            <span>
              Dips
              <span className="block text-base leading-none">and</span>
              Drizzles
            </span>
          </div>
          <h1 className="mt-6 font-heading text-6xl font-black uppercase leading-none tracking-[0.06em] text-[#efc3d9] sm:text-7xl lg:text-8xl">
            Pricing Guide
          </h1>
          <p className="-mt-2 font-serif text-5xl italic text-(--marketing-ink) sm:text-6xl">
            Dips and Drizzles CHX
          </p>
        </div>

        <div className="mt-14 grid gap-10">
          <MenuTreatSection
            title="Standard Treats"
            subtitle="per dozen"
            notes={['Dipped in white and milk chocolate with standard drizzles and sprinkles']}
            items={standardTreats}
          />

          <MenuTreatSection
            title="Custom Treats"
            subtitle="per dozen"
            notes={[
              'Choose 2 custom colors with drizzles, marble design, theme sprinkles',
              'Add custom chocolate toppings for $5 per dozen',
            ]}
            items={customTreats}
          />

          <div id="party-packages" className="grid gap-8">
            {menuPackages.map((menuPackage) => (
              <section key={menuPackage.name}>
                <h2 className="font-heading text-3xl font-black uppercase tracking-[0.16em] text-(--marketing-sky) sm:text-4xl">
                  {menuPackage.name} <span>{menuPackage.price}</span>
                </h2>
                <ul className="mt-4 space-y-3 text-xl leading-8 text-(--marketing-ink) sm:text-2xl">
                  {menuPackage.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="flex items-center justify-center gap-4 text-(--marketing-sky)">
            <span className="h-1 w-1/3 max-w-72 bg-(--marketing-sky)" />
            <p className="font-serif text-5xl italic">Thank You</p>
            <span className="h-1 w-1/3 max-w-72 bg-(--marketing-sky)" />
          </div>
          <p className="mt-4 font-heading text-xl font-black uppercase tracking-[0.2em] text-(--marketing-ink) sm:text-2xl">
            Charlevoix, MI 49720 {websiteContent.contact.phone}
          </p>
          <div className="mt-8 flex justify-center">
            <MarketingButtonLink href="/contact" showIcon={false}>
              Order Now
            </MarketingButtonLink>
          </div>
        </div>
      </section>
    </MarketingPageMain>
  )
}

export function MarketingContactPage() {
  return (
    <MarketingPageMain>
      <section className="mx-auto max-w-[1220px] px-4 pt-6 sm:px-6 lg:px-12">
        <MarketingEyebrow>{websiteContent.contactPage.eyebrow}</MarketingEyebrow>
        <h1 className="mt-3 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.07em] sm:text-6xl">
          {websiteContent.contactPage.title}
        </h1>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)] lg:px-12">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <div className="rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.85)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <h2 className="font-heading text-3xl tracking-[-0.05em]">
              {websiteContent.contactPage.detailsTitle}
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-sm leading-7 text-(--marketing-copy)">
              <ContactInfoItem
                label="Location"
                value={websiteContent.contact.location}
                icon={<MapPin className="size-5" />}
              />
              <ContactInfoItem
                label="Email"
                value={
                  <a
                    className="transition-colors hover:text-(--marketing-heading)"
                    href={`mailto:${websiteContent.contact.email}`}
                  >
                    {websiteContent.contact.email}
                  </a>
                }
                icon={<Notebook className="size-5" />}
              />
              <ContactInfoItem
                label="Phone"
                value={
                  <a
                    className="transition-colors hover:text-(--marketing-heading)"
                    href={`tel:${websiteContent.contact.phoneHref}`}
                  >
                    {websiteContent.contact.phone}
                  </a>
                }
                icon={<Phone className="size-5" />}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.85)]">
            <Image
              alt="Charlevoix harbor at dusk"
              className="h-[280px] w-full object-cover"
              src={websiteContent.images.hero}
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <div className="border-t border-white/8 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.28em] text-(--marketing-gold)">
                Location
              </p>
              <p className="mt-2 text-base text-(--marketing-copy)">
                {websiteContent.contact.location}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(19,27,46,0.98),rgba(12,18,33,0.98))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:p-10 lg:order-2">
          <div className="mb-8">
            <h2 className="font-heading text-3xl tracking-[-0.05em]">
              {websiteContent.contactPage.formTitle}
            </h2>
          </div>
          <MarketingContactForm />
        </div>
      </section>
    </MarketingPageMain>
  )
}

function MarketingPageMain({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}

function SweetFeature({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 text-(--marketing-ink)">
      <span className="shrink-0 text-(--marketing-gold-strong)">{icon}</span>
      <span className="max-w-sm text-balance leading-4">{label}</span>
    </div>
  )
}

function MenuTreatSection({
  items,
  notes,
  subtitle,
  title,
}: {
  items: readonly { name: string; price: string }[]
  notes: string[]
  subtitle: string
  title: string
}) {
  const midpoint = Math.ceil(items.length / 2)
  const columns = [items.slice(0, midpoint), items.slice(midpoint)]

  return (
    <section>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-heading text-3xl font-black uppercase tracking-[0.16em] text-(--marketing-sky) sm:text-4xl">
          {title}
        </h2>
        <p className="text-xl tracking-[0.18em] text-(--marketing-ink)">{subtitle}</p>
      </div>
      <ul className="mt-2 space-y-1 text-xl leading-8 text-(--marketing-ink) sm:text-2xl">
        {notes.map((note) => (
          <li key={note} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-x-24 gap-y-3 sm:grid-cols-2">
        {columns.map((column, index) => (
          <div key={index} className="grid gap-3">
            {column.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-8 text-2xl leading-none text-(--marketing-ink)"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function MarketingNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-20 border-b border-[#f7d9ea] bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
        <Link
          className="flex size-24 shrink-0 items-center justify-center rounded-full border-2 border-(--marketing-sky) text-center font-serif text-[1.65rem] leading-[0.82] text-(--marketing-sky) italic sm:size-28"
          href="/"
        >
          <span>
            Dips
            <span className="block text-sm leading-none">and</span>
            Drizzles
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center justify-center gap-7 text-xs font-bold uppercase tracking-[0.12em] text-(--marketing-ink) md:flex">
          {websiteContent.headerNav.map((item) => (
            <MarketingRouteLink
              key={item.href}
              active={pathname === item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MarketingButtonLink className="hidden sm:inline-flex" href="/contact" showIcon={false}>
            Order Now
          </MarketingButtonLink>
          <MarketingMobileNav />
        </div>
      </div>
    </header>
  )
}

function MarketingMobileNav() {
  const pathname = usePathname()

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#edb9db] bg-white text-(--marketing-gold-strong) transition-colors hover:bg-[#fff4fb] md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-[22rem] border-l border-[#f3c7e4] bg-[#fff8fb] text-(--marketing-ink) sm:max-w-none">
        <div className="flex items-center justify-between border-b border-[#f3c7e4] px-6 py-5">
          <div>
            <DrawerTitle className="font-serif text-3xl italic text-(--marketing-sky)">
              {websiteContent.site.name}
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Main navigation with links to core pages.
            </DrawerDescription>
          </div>
          <DrawerClose asChild>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#edb9db] bg-white text-(--marketing-gold-strong) transition-colors hover:bg-[#fff4fb]"
            >
              <X className="size-5" />
            </button>
          </DrawerClose>
        </div>

        <div className="flex h-full flex-col gap-10 overflow-y-auto px-6 py-8">
          <nav className="flex flex-col gap-3">
            {websiteContent.headerNav.map((item) => (
              <DrawerClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-[18px] border border-[#f0c6e1] bg-white px-5 py-4 font-heading text-xl font-black uppercase tracking-[0.08em] text-(--marketing-copy) transition-colors hover:text-(--marketing-gold-strong)',
                    pathname === item.href &&
                      'border-(--marketing-gold-strong) text-(--marketing-gold-strong)',
                  )}
                >
                  {item.label}
                </Link>
              </DrawerClose>
            ))}
          </nav>

          <div className="mt-auto rounded-[18px] border border-[#f0c6e1] bg-white p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-(--marketing-sky)">
              Contact
            </p>
            <p className="mt-3 text-base text-(--marketing-copy)">{websiteContent.contact.email}</p>
            <p className="mt-1 text-base text-(--marketing-copy)">{websiteContent.contact.phone}</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function MarketingRouteLink({
  active,
  href,
  label,
}: {
  active: boolean
  href: string
  label: string
}) {
  return (
    <Link
      className={cn(
        'transition-colors hover:text-(--marketing-gold-strong)',
        active && 'text-(--marketing-gold-strong)',
      )}
      href={href}
    >
      {label}
    </Link>
  )
}

function MarketingButtonLink({
  children,
  className,
  href,
  showIcon = true,
  tone = 'primary',
}: {
  children: ReactNode
  className?: string
  href: string
  showIcon?: boolean
  tone?: 'primary' | 'secondary'
}) {
  const variant = tone === 'primary' ? 'default' : 'secondary'
  const themeClassName =
    tone === 'primary'
      ? '[--primary:var(--marketing-gold-strong)] [--primary-foreground:var(--marketing-gold-foreground)]'
      : '[--secondary:#fff7fc] [--secondary-foreground:var(--marketing-sky)]'

  return (
    <div className={themeClassName}>
      <Link
        className={cn(
          buttonVariants({ size: 'lg', variant }),
          'h-12 rounded-[6px] border border-(--marketing-gold-strong) px-8 text-xs font-black uppercase tracking-[0.1em] shadow-none',
          className,
        )}
        href={href}
      >
        {children}
        {showIcon ? <ArrowRight data-icon="inline-end" /> : null}
      </Link>
    </div>
  )
}

function MarketingEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--marketing-ink)">
      {children}
    </p>
  )
}

function ContactInfoItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--marketing-panel-strong) text-(--marketing-gold)">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-(--marketing-heading)">{label}</p>
        <div className="mt-1 text-base text-(--marketing-copy)">{value}</div>
      </div>
    </div>
  )
}

function MarketingFooter() {
  return (
    <footer className="border-t-4 border-(--marketing-gold-strong) bg-white/92 text-(--marketing-ink)">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-7 sm:px-6 lg:grid-cols-[minmax(0,1fr)_1px_minmax(320px,0.8fr)] lg:items-center lg:px-12">
        <div className="grid gap-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center">
          <Link
            className="flex size-28 shrink-0 items-center justify-center rounded-full border-2 border-(--marketing-sky) text-center font-(family-name:--font-script) text-3xl leading-[0.78] text-(--marketing-sky)"
            href="/"
          >
            <span>
              Dips
              <span className="block text-xl leading-none">and</span>
              Drizzles
            </span>
          </Link>

          <div>
            <p className="font-heading text-lg font-black uppercase tracking-[0.26em] text-(--marketing-sky)">
              {websiteContent.site.name}
            </p>
            <div className="mt-4 grid gap-2 text-base text-(--marketing-copy)">
              <p className="flex items-center gap-3">
                <MapPin className="size-5 shrink-0 text-(--marketing-sky)" />
                {websiteContent.contact.location}
              </p>
              <a
                className="flex items-center gap-3 transition-colors hover:text-(--marketing-sky)"
                href={`tel:${websiteContent.contact.phoneHref}`}
              >
                <Phone className="size-5 shrink-0 text-(--marketing-sky)" />
                {websiteContent.contact.phone}
              </a>
              <a
                className="flex items-center gap-3 break-all transition-colors hover:text-(--marketing-sky)"
                href={`mailto:${websiteContent.contact.email}`}
              >
                <Mail className="size-5 shrink-0 text-(--marketing-sky)" />
                {websiteContent.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="hidden h-32 bg-(--marketing-copy)/20 lg:block" />

        <div className="space-y-4 lg:pl-6">
          <p className="font-heading text-lg font-black uppercase tracking-[0.26em] text-(--marketing-sky)">
            Stay in the loop
          </p>
          <p className="max-w-md text-base leading-7 text-(--marketing-copy)">
            Follow along for seasonal colors, party ideas, and sweet order inspiration.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <MarketingButtonLink className="h-11 px-6" href="/contact" showIcon={false}>
              Order Now
            </MarketingButtonLink>
            {websiteContent.socialLinks.map((socialLink) => {
              const Icon = socialIconMap[socialLink.label as keyof typeof socialIconMap]

              return (
                <a
                  key={socialLink.href}
                  aria-label={`${websiteContent.site.name} on ${socialLink.label}`}
                  className="flex size-11 items-center justify-center rounded-full bg-(--marketing-sky) text-white transition-transform hover:scale-105"
                  href={socialLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {Icon ? <Icon className="size-5" /> : socialLink.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-[#f4d6e8] px-4 py-4 text-center text-sm text-(--marketing-copy)">
        © {new Date().getFullYear()} {websiteContent.site.legalName}. All rights reserved.
      </div>
    </footer>
  )
}
