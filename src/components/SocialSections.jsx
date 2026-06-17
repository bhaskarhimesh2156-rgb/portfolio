import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Copy, Check, ExternalLink, Star, GitFork } from 'lucide-react';
import { PROFILE } from '../utils/data';
import { SectionWrapper } from './ProjectsSection';

export function LinkedInSection({ onClose }) {
  return (
    <SectionWrapper title="LINKEDIN" onClose={onClose}>
      <div className="flex justify-center">
        <motion.a
          href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          className="block w-full max-w-md rounded-lg p-6 sm:p-8 text-center cursor-pointer"
          style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.5)', boxShadow: '0 0 30px rgba(220,20,60,0.2)' }}
        >
          <Linkedin size={42} color="#dc143c" className="mx-auto mb-4" />
          <h3 className="font-orbitron text-base sm:text-xl font-bold text-white mb-2">Bhaskar Himesh Malluri</h3>
          <p className="text-xs sm:text-sm font-mono-tech mb-6" style={{ color: '#dc143c' }}>EEE Student • AI Research Intern • ML Enthusiast</p>
          <div className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded font-orbitron text-xs sm:text-sm"
            style={{ background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.5)', color: '#dc143c' }}>
            <ExternalLink size={14} /> Open LinkedIn Profile
          </div>
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
      className="block rounded-lg p-4 card-hover"
      style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}>
      <h4 className="font-orbitron text-sm font-bold text-white mb-1 truncate">{repo.name}</h4>
      <p className="text-gray-400 text-xs mb-2 line-clamp-2">{repo.description || 'No description'}</p>
      <div className="flex gap-3 text-xs font-mono-tech text-gray-500 flex-wrap">
        {repo.language && <span style={{ color: '#ff4466' }}>{repo.language}</span>}
        <span className="flex items-center gap-1"><Star size={11} /> {repo.stargazers_count}</span>
        <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks_count}</span>
      </div>
    </a>
  );
}

export function GitHubSection({ onClose }) {
  const [repos, setRepos]   = useState([]);
  const [stats, setStats]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = 'bhaskarhimesh2156-rgb';
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then(r => r.json()),
    ]).then(([user, repos]) => {
      setStats(user);
      setRepos(Array.isArray(repos) ? repos : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper title="GITHUB" onClose={onClose}>
      {loading ? (
        <div className="text-center font-mono-tech py-20" style={{ color: '#dc143c' }}>Loading GitHub data...</div>
      ) : (
        <>
          {stats && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { label: 'Repositories', value: stats.public_repos },
                { label: 'Followers',    value: stats.followers     },
                { label: 'Following',    value: stats.following     },
              ].map(s => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg p-3 sm:p-4 text-center"
                  style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <p className="font-orbitron text-xl sm:text-2xl font-bold" style={{ color: '#dc143c' }}>{s.value}</p>
                  <p className="text-xs text-gray-500 font-mono-tech mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          )}
          <h3 className="font-orbitron text-xs sm:text-sm mb-4 tracking-widest" style={{ color: '#dc143c' }}>RECENT REPOSITORIES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {repos.map((r, i) => (
              <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <RepoCard repo={r} />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded font-orbitron text-xs sm:text-sm transition-all"
              style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.5)', color: '#dc143c' }}>
              <Github size={16} /> View Full GitHub Profile
            </a>
          </div>
        </>
      )}
    </SectionWrapper>
  );
}

export function EmailSection({ onClose }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper title="EMAIL" onClose={onClose}>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-lg p-6 sm:p-8 text-center"
          style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(220,20,60,0.5)' }}>
          <Mail size={42} color="#dc143c" className="mx-auto mb-4" />
          <p className="font-mono-tech text-sm sm:text-lg text-white mb-6 break-all">{PROFILE.email}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded font-orbitron text-xs sm:text-sm"
              style={{ background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.5)', color: '#dc143c' }}>
              <Mail size={14} /> Send Email
            </a>
            <button onClick={copy}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded font-orbitron text-xs sm:text-sm cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#aaa' }}>
              {copied ? <><Check size={14} color="#4ade80" /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export function ResumeSection({ onClose }) {
  return (
    <SectionWrapper title="RESUME" onClose={onClose}>
      <div className="space-y-5 sm:space-y-6">
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <a href="/resume.pdf" download
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded font-orbitron text-xs sm:text-sm"
            style={{ background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.5)', color: '#dc143c' }}>
            ⬇ Download Resume
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded font-orbitron text-xs sm:text-sm"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#aaa' }}>
            <ExternalLink size={14} /> Open in New Tab
          </a>
        </div>
        {/* iframe hidden on very small screens where it's unusable */}
        <div
          className="rounded-lg overflow-hidden hidden sm:block"
          style={{ border: '1px solid rgba(220,20,60,0.3)', height: 'clamp(300px, 60vh, 600px)' }}
        >
          <iframe src="/resume.pdf" className="w-full h-full" title="Resume Preview"
            style={{ background: '#111' }} />
        </div>
        <p className="text-center text-xs font-mono-tech text-gray-600 sm:hidden">
          Use the buttons above to view or download your resume.
        </p>
      </div>
    </SectionWrapper>
  );
}
