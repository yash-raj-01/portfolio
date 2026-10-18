import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { viewerProfiles } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/useSmoothScroll';
import CustomCursor from './components/layout/CustomCursor';
import OpeningSequence from './components/overlays/OpeningSequence';
import ProfileSelector from './components/overlays/ProfileSelector';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ContinueWatching from './components/sections/ContinueWatching';
import Scene from './components/layout/Scene';
import About from './components/sections/About';
import Seasons from './components/sections/Seasons';
import Originals from './components/sections/Originals';
import TopPicks from './components/sections/TopPicks';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import ResumeSection from './components/sections/ResumeViewer';
import FinalCTA from './components/sections/FinalCTA';
import { EASE } from './components/ui/fx';
import { STORAGE_KEY } from './constants';
// Overlays are only needed on demand — split them out of the first load.
const PlayIntro = lazy(() => import('./components/overlays/PlayIntro'));
const ProjectModal = lazy(() => import('./components/overlays/ProjectModal'));
const ResumeModal = lazy(() => import('./components/overlays/ResumeModal'));
function readStoredProfile() {
    try {
        const v = sessionStorage.getItem(STORAGE_KEY);
        return viewerProfiles.some((p) => p.id === v) ? v : null;
    }
    catch {
        return null;
    }
}
export default function App() {
    return (<SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>);
}
function Series() {
    const stored = readStoredProfile();
    const [stage, setStage] = useState(stored ? 'home' : 'opening');
    const [profileId, setProfileId] = useState(stored ?? 'yash');
    const [playing, setPlaying] = useState(false);
    const [project, setProject] = useState(null);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [toast, setToast] = useState(null);
    const { scrollTo, lock, unlock } = useSmoothScroll();
    const order = viewerProfiles.find((p) => p.id === profileId).order;
    useEffect(() => {
        if (stage === 'home')
            return;
        lock();
        return unlock;
    }, [stage, lock, unlock]);
    const pickProfile = useCallback((id) => {
        setProfileId(id);
        try {
            sessionStorage.setItem(STORAGE_KEY, id);
        }
        catch {
            /* storage unavailable — profile simply won't persist */
        }
        if (stage !== 'home') {
            window.scrollTo(0, 0);
            setStage('home');
        }
        else {
            const p = viewerProfiles.find((v) => v.id === id);
            setToast(`Now watching as ${p.name} — ${p.blurb.toLowerCase()}`);
            scrollTo(0, { offset: 0 });
        }
    }, [stage, scrollTo]);
    useEffect(() => {
        if (!toast)
            return;
        const t = window.setTimeout(() => setToast(null), 3200);
        return () => clearTimeout(t);
    }, [toast]);
    const closeIntro = useCallback(() => setPlaying(false), []);
    const closeProject = useCallback(() => setProject(null), []);
    const closeResume = useCallback(() => setResumeOpen(false), []);
    const sections = {
        about: <About />,
        journey: <Seasons />,
        originals: <Originals onOpen={setProject}/>,
        picks: <TopPicks />,
        skills: <Skills />,
        moments: <Achievements />,
        story: <ResumeSection onView={() => setResumeOpen(true)}/>,
    };
    return (<LayoutGroup>
      <div className="grain" aria-hidden/>
      <CustomCursor disabled={resumeOpen} />

      <AnimatePresence>
        {stage === 'opening' && <OpeningSequence key="opening" onDone={() => setStage('profiles')}/>}
        {stage === 'profiles' && <ProfileSelector key="profiles" onPick={pickProfile}/>}
      </AnimatePresence>

      {stage === 'home' && (<motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar order={order} profileId={profileId} onSwitch={pickProfile}/>
          <main>
            <Hero key={`hero-${profileId}`} onPlay={() => setPlaying(true)} onResume={() => setResumeOpen(true)} profileId={profileId}/>
            <ContinueWatching order={order}/>
            {order.map((id) => (<Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
                {sections[id]}
              </Scene>))}
            <FinalCTA onReplay={() => setStage('opening')}/>
          </main>
        </motion.div>)}

      <Suspense fallback={null}>
        <AnimatePresence>{playing && <PlayIntro key="intro" onClose={closeIntro}/>}</AnimatePresence>
        <AnimatePresence>{project && <ProjectModal key="project" project={project} onClose={closeProject} onSwitch={setProject}/>}</AnimatePresence>
        <AnimatePresence>{resumeOpen && <ResumeModal key="resume" onClose={closeResume}/>}</AnimatePresence>
      </Suspense>

      <AnimatePresence>
        {toast && (<motion.div role="status" className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}>
            {toast}
          </motion.div>)}
      </AnimatePresence>
    </LayoutGroup>);
}
