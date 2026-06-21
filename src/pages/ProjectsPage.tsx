import { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, ExternalLink, Code, Lock, LogOut, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  codeUrl: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'AI Resume Job Matcher',
    description: 'AI-powered application that intelligently matches resumes with job descriptions using machine learning algorithms for better recruitment.',
    image: '/images/project/1.png',
    liveUrl: 'https://resume-job-matcher-ai-shehriyar.streamlit.app/',
    codeUrl: 'https://github.com/Shehriyar-Ali-Rustam/ai-resume-job-matcher',
  },
  {
    id: 2,
    title: 'Updated Personal Portfolio',
    description: 'Personal portfolio website built with HTML, CSS, and JavaScript featuring responsive design, smooth animations, and interactive elements.',
    image: '/images/project/2.png',
    liveUrl: 'https://shehriyar-ali-rustam.github.io/Updated-Personal-Portfolio/',
    codeUrl: 'https://github.com/Shehriyar-Ali-Rustam/Updated-Personal-Portfolio',
  },
  {
    id: 3,
    title: 'Movie Recommendation Engine',
    description: 'Machine learning-based recommendation system that suggests movies based on user preferences and viewing history using collaborative filtering.',
    image: '/images/project/3.png',
    liveUrl: 'https://movie-recommendation-engine-shehriyar.streamlit.app/',
    codeUrl: 'https://github.com/Shehriyar-Ali-Rustam/Movie-Recommendation-Engine',
  },
  {
    id: 4,
    title: 'E-Voting Console for Students',
    description: 'Secure electronic voting system designed for student elections with real-time results, authentication, and user-friendly interface.',
    image: '/images/project/4.png',
    liveUrl: 'https://e-voting-console-for-students-shehriyar.streamlit.app/',
    codeUrl: 'https://github.com/Shehriyar-Ali-Rustam/E-Voting-Console-for-students',
  },
  {
    id: 5,
    title: 'Chef-Bot (A Kitchen Helper Chat Bot)',
    description: 'AI-powered chatbot that provides cooking assistance, recipe suggestions, and ingredient substitutions to help users in the kitchen.',
    image: '/images/project/5.png',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Personal Assistant (Hello Kitty)',
    description: 'Voice-activated personal assistant with a friendly interface that helps with daily tasks, reminders, and information queries.',
    image: '/images/project/6.png',
    liveUrl: '#',
    codeUrl: '#',
  },
];

const ADMIN_PASSWORD = 'admin123';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '/images/portfolio.png',
    liveUrl: '',
    codeUrl: '',
  });

  useEffect(() => {
    const adminStatus = sessionStorage.getItem('adminLoggedIn');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleAdminLogin = () => {
    const password = prompt('Enter admin password:');
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      sessionStorage.setItem('adminLoggedIn', 'true');
      alert('Admin access granted!');
    } else if (password !== null) {
      alert('Incorrect password!');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('adminLoggedIn');
    alert('Logged out successfully!');
  };

  const openAddModal = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      image: '/images/portfolio.png',
      liveUrl: '',
      codeUrl: '',
    });
    setShowModal(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      liveUrl: project.liveUrl,
      codeUrl: project.codeUrl,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p =>
        p.id === editingProject.id
          ? { ...p, ...formData }
          : p
      ));
    } else {
      const newProject: Project = {
        id: Math.max(...projects.map(p => p.id)) + 1,
        ...formData,
      };
      setProjects([...projects, newProject]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 btn-primary flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        Back to Portfolio
      </Link>

      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          All <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          Browse all my projects
        </p>

        {/* Admin Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {!isAdmin ? (
            <button
              onClick={handleAdminLogin}
              className="btn-outline flex items-center gap-2"
            >
              <Lock size={18} />
              Admin Login
            </button>
          ) : (
            <>
              <button
                onClick={openAddModal}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={18} />
                Add New Project
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-full font-medium border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden card-hover group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3 mb-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
                  >
                    <Code size={16} />
                    Source Code
                  </a>
                </div>

                {isAdmin && (
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <button
                      onClick={() => openEditModal(project)}
                      className="flex-1 py-2 px-4 rounded-lg bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white font-medium hover:bg-red-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="glass-card p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                  placeholder="Project Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none resize-none"
                  placeholder="Project Description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                  placeholder="/images/project/1.png"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Live URL</label>
                <input
                  type="url"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Code URL</label>
                <input
                  type="url"
                  value={formData.codeUrl}
                  onChange={(e) => setFormData({ ...formData, codeUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <Save size={18} />
                  Save Project
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
