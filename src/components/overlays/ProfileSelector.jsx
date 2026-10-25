import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles } from '../../data/portfolio';
import { EASE } from '../ui/fx';
export function ProfileAvatar({ id, size = 'lg' }) {
    const p = viewerProfiles.find((v) => v.id === id);
    const box = size === 'lg' ? 'h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl' : 'h-8 w-8 rounded-md';
    if (id === 'yash') {
        return (<span className={`relative block overflow-hidden ${box} ring-1 ring-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.25)]`} style={{ background: 'radial-gradient(circle at 50% 30%, #0d2745, #06111d)' }}>
        <img src="/assets/photo-avatar.webp" alt={profile.displayName} className="h-full w-full object-cover object-center"/>
      </span>);
    }
    const glyph = { recruiter: 'R', developer: '</>', creative: '✦' }[id];
    return (<span className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box}`} style={{ background: `linear-gradient(145deg, ${p.color}, #0b0b10 120%)` }}>
      <span className={size === 'lg' ? 'text-4xl sm:text-5xl' : 'text-sm'}>{glyph}</span>
    </span>);
}
export default function ProfileSelector({ onPick }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape')
                onPick('yash');
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onPick]);
    return (<motion.div className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }} transition={{ duration: 0.7, ease: EASE }} role="dialog" aria-label="Who's watching?">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.18),transparent_70%)]"/>
      <motion.h2 className="relative mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl" initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, ease: EASE }}>
        Who&apos;s watching?
      </motion.h2>
      <motion.ul className="relative grid grid-cols-2 gap-6 sm:flex sm:gap-8" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}>
        {viewerProfiles.map((p) => (<motion.li key={p.id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
            <button type="button" onClick={() => onPick(p.id)} data-cursor="play" className="group flex flex-col items-center gap-3 text-center">
              <span className="relative rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-sky-400 group-focus-visible:ring-sky-400">
                <ProfileAvatar id={p.id}/>
                {p.id === 'yash' && (<span className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white shadow-[0_2px_8px_rgba(6,182,212,0.45)]">MAIN</span>)}
              </span>
              <span className="font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">{p.name}</span>
              <span className="max-w-[9rem] text-[11px] leading-snug text-smoke">{p.blurb}</span>
            </button>
          </motion.li>))}
      </motion.ul>
      <p className="relative mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every profile watches the same true story of {profile.displayName} — it only changes what plays first.
      </p>
    </motion.div>);
}

// Persona selection micro-interactions
