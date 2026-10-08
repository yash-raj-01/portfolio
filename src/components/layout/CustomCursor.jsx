import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../../hooks/useMedia';
const LABELS = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };
/**
 * Minimal cursor: a small dot that grows into a labelled disc over elements with
 * `data-cursor="view|play|link|drag|close"`. Desktop only; disabled for reduced motion.
 */
export default function CustomCursor({ disabled = false }) {
    const fine = useFinePointer();
    const reduced = useReducedMotionPref();
    const enabled = fine && !reduced && !disabled;
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
    const [mode, setMode] = useState(null);
    const [hoverLink, setHoverLink] = useState(false);
    const [visible, setVisible] = useState(false);
    const [down, setDown] = useState(false);
    useEffect(() => {
        if (!enabled) {
            document.documentElement.classList.remove('has-custom-cursor');
            return;
        }
        document.documentElement.classList.add('has-custom-cursor');
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
            const t = e.target;
            const tagged = t?.closest('[data-cursor]');
            setMode(tagged?.dataset.cursor ?? null);
            setHoverLink(!tagged && !!t?.closest('a,button,[role="button"]'));
        };
        const leave = () => {
            setVisible(false);
            setMode(null);
            setHoverLink(false);
        };
        const press = () => setDown(true);
        const release = () => setDown(false);
        const blur = () => {
            setVisible(false);
            setMode(null);
            setHoverLink(false);
        };
        window.addEventListener('pointermove', move, { passive: true });
        document.addEventListener('pointerleave', leave);
        window.addEventListener('blur', blur);
        window.addEventListener('pointerdown', press);
        window.addEventListener('pointerup', release);
        return () => {
            document.documentElement.classList.remove('has-custom-cursor');
            window.removeEventListener('pointermove', move);
            document.removeEventListener('pointerleave', leave);
            window.removeEventListener('blur', blur);
            window.removeEventListener('pointerdown', press);
            window.removeEventListener('pointerup', release);
        };
    }, [enabled, x, y]);
    if (!enabled)
        return null;
    const label = mode ? LABELS[mode] : null;
    const size = label ? (mode === 'view' ? 72 : 52) : hoverLink ? 34 : 10;
    return (<motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full" style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }} animate={{
            width: size,
            height: size,
            opacity: visible ? 1 : 0,
            scale: down ? 0.85 : 1,
            backgroundColor: label ? 'rgba(2,132,199,0.95)' : hoverLink ? 'rgba(56,189,248,0.15)' : 'rgba(244,241,236,1)',
            borderColor: hoverLink && !label ? 'rgba(56,189,248,0.7)' : 'rgba(244,241,236,0)',
            boxShadow: label ? '0 0 25px rgba(14,165,233,0.55)' : undefined,
        }} transition={{ type: 'spring', stiffness: 420, damping: 30 }}>
      <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }}/>
      <AnimatePresence>
        {label && (<motion.span key={label} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="font-sans text-[11px] font-bold tracking-[0.18em] text-white">
            {label}
          </motion.span>)}
      </AnimatePresence>
    </motion.div>);
}
