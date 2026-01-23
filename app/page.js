'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from './components/SectionHeading';
import { MineralCard } from './components/MineralCard';
import { minerals } from '../lib/data';
import {
  CheckCircle2,
  Factory,
  Globe2,
  Leaf,
  ShieldCheck,
  Truck,
} from 'lucide-react';

import { Card, CardContent } from './components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';
import HeroSwiper from './components/HeroSwiper';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeroSwiper />

      {/* About Section */}
      <section className='py-20 '>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='aspect-[4/3] rounded-lg overflow-hidden border border-slate-800 relative'>
                <Image
                  src='/assests/About_us.jpeg'
                  alt='Industrial Mining'
                  fill
                  className='object-cover md:object-top'
                />
              </div>

              <div className='absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded border border-slate-800 shadow-xl hidden md:block max-w-xs'>
                <p className='text-4xl font-bold text-[#E0860A] mb-2'>25+</p>
                <p className='text-slate-300 uppercase tracking-wider text-sm'>
                  Years of Excellence in Mineral Extraction
                </p>
              </div>
            </motion.div>

            <div className='space-y-6'>
              <SectionHeading
                title='Building the Foundation of Industry'
                subtitle='Who We Are'
                align='left'
                light
              />

              <p className='text-slate-600 leading-relaxed'>
                Amigos Minerals has been at the forefront of the mining industry
                for over two decades. We specialize in the extraction,
                processing, and export of high-quality industrial minerals
                including Iron Ore, Bauxite, Limestone, and Quartz.
              </p>

              <p className='text-slate-600 leading-relaxed'>
                Our commitment to sustainability, safety, and quality assurance
                makes us the preferred partner for steel, cement, and
                construction industries globally.
              </p>

              <ul className='space-y-3 pt-4'>
                {[
                  'Sustainable Mining Practices',
                  'Global Export Network',
                  'Strict Quality Control',
                  'On-time Delivery',
                ].map((item, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-3 text-slate-600'
                  >
                    <CheckCircle2 className='text-[#E0860A] h-5 w-5' />
                    {item}
                  </li>
                ))}
              </ul>

              <div className='pt-6'>
                <Link
                  href='/about'
                  className='text-[#E0860A] hover:text-[#E0860A]/80 p-0 font-bold uppercase tracking-widest text-sm'
                >
                  Read More About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minerals Grid */}
      <section className='py-20  '>
        <div className='container  mx-auto px-4 md:px-6'>
          <SectionHeading
            title='Minerals We Supply'
            subtitle='Our Products'
            light
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            {minerals.slice(0, 6).map((mineral) => (
              <MineralCard key={mineral.id} mineral={mineral} />
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/minerals'
              className='bg-transparent border border-primary text-[#E0860A] hover:bg-[#E0860A] hover:text-slate-950 uppercase font-bold tracking-wider px-8 h-14 inline-flex items-center justify-center rounded-md'
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-gray-200'>
        <div className='container mx-auto px-4 md:px-6'>
          <SectionHeading
            title='Why Partner With Us'
            subtitle='Our Strengths'
            light
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
            {[
              {
                icon: ShieldCheck,
                title: 'Quality Assurance',
                desc: 'Rigorous testing at every stage of processing.',
              },
              {
                icon: Globe2,
                title: 'Global Logistics',
                desc: 'Seamless export to over 30 countries worldwide.',
              },
              {
                icon: Leaf,
                title: 'Sustainable',
                desc: 'Eco-friendly mining practices and rehabilitation.',
              },
              {
                icon: Truck,
                title: 'Timely Delivery',
                desc: 'Robust supply chain ensuring on-time delivery.',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className='bg-slate-900 border-slate-800 text-center hover:border-primary/30 transition-colors'
              >
                <CardContent className='pt-8 pb-8 flex flex-col items-center gap-4'>
                  <div className='h-16 w-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-[#E0860A] mb-2'>
                    <feature.icon className='h-8 w-8' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-400 text-sm'>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className='py-20 bg-slate-100'>
        <div className='container mx-auto px-4 md:px-6'>
          <SectionHeading
            title='Industries We Serve'
            subtitle='Applications'
            light
          />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
            {[
              'Steel Manufacturing',
              'Cement Production',
              'Glass Industry',
              'Construction',
              'Ceramics',
              'Foundry',
              'Chemical Processing',
              'Infrastructure',
            ].map((ind, i) => (
              <div
                key={i}
                className='bg-slate-800 p-6 rounded text-center border border-slate-700 hover:border-primary transition-colors group'
              >
                <Factory className='h-8 w-8 text-slate-500 mx-auto mb-3 group-hover:text-[#E0860A] transition-colors' />
                <span className='font-bold text-slate-200 uppercase text-sm tracking-wide'>
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-[#E0860A]/10 border-y border-primary/20'>
        <div className='container mx-auto px-4 md:px-6'>
          <SectionHeading
            title='Client Testimonials'
            subtitle='What They Say'
            light
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto'>
            {[
              {
                name: 'Sai kumar',
                role: 'Procurement Manager, SteelCorp',
                quote:
                  'Amigos has been our reliable partner for Iron Ore for over 5 years. Their quality consistency is unmatched.',
              },
              {
                name: 'Amit',
                role: 'Director, Asian Cement Ltd',
                quote:
                  'Excellent logistics and high-purity limestone supply. Highly recommended for international exports.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className='bg-slate-950 p-8 rounded border border-slate-800 relative'
              >
                <div className='text-[#E0860A] text-4xl font-serif absolute top-4 left-4 opacity-50'>
                  "
                </div>
                <p className='text-slate-300 italic mb-6 relative z-10 pl-4'>
                  {t.quote}
                </p>
                <div className='flex items-center gap-4'>
                  <div className='h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400'>
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className='text-white font-bold text-sm'>{t.name}</h4>
                    <p className='text-[#E0860A] text-xs uppercase tracking-wider'>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 '>
        <div className='container mx-auto px-4 md:px-6 max-w-3xl'>
          <SectionHeading
            title='Frequently Asked Questions'
            subtitle='FAQ'
            light
          />

          <Accordion type='single' collapsible className='w-full'>
            {[
              {
                q: 'What is your minimum order quantity?',
                a: 'For most bulk minerals, our MOQ is 500 Metric Tons. However, for high-value minerals like Quartz, we can arrange smaller container loads.',
              },
              {
                q: 'Do you handle export logistics?',
                a: 'Yes, we provide end-to-end logistics solutions including FOB, CFR, and CIF delivery terms to major global ports.',
              },
              {
                q: 'Can you provide lab test reports?',
                a: 'Absolutely. Every shipment is accompanied by a Certificate of Analysis (COA) from independent surveyors like SGS or Bureau Veritas.',
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className='border-slate-800'
              >
                <AccordionTrigger className='text-black hover:text-[#E0860A]'>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className='text-slate-400'>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
