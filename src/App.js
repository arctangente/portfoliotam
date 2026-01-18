import React, { useState, useEffect } from 'react';
import { X, Mail, Github, Linkedin } from 'lucide-react';

// Données des projets - remplace par tes propres images et infos
const projects = [
  {
    id: 1,
    title: "Projet 1",
    year: "2024",
    dimensions: "100 × 150 cm",
    materials: "Huile sur toile",
    category: "Peinture",
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80",
      "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=1200&q=80",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  },
  {
    id: 2,
    title: "Projet 2",
    year: "2024",
    dimensions: "70 × 100 cm",
    materials: "Aquarelle sur papier",
    category: "Illustration",
    thumbnail: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&q=80",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  },
  {
    id: 3,
    title: "Projet 3",
    year: "2023",
    dimensions: "Digital",
    materials: "Procreate",
    category: "Digital",
    thumbnail: "https://images.unsplash.com/photo-1578926078060-2e883d93e309?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1578926078060-2e883d93e309?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  },
  {
    id: 4,
    title: "Projet 4",
    year: "2024",
    dimensions: "120 × 80 cm",
    materials: "Acrylique sur toile",
    category: "Peinture",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  },
  {
    id: 5,
    title: "Projet 5",
    year: "2023",
    dimensions: "50 × 70 cm",
    materials: "Encre et aquarelle",
    category: "Illustration",
    thumbnail: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  },
  {
    id: 6,
    title: "Projet 6",
    year: "2024",
    dimensions: "Digital",
    materials: "Blender, Photoshop",
    category: "Digital",
    thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&q=80",
      "https://images.unsplash.com/photo-1551732998-9c18e1bb0300?w=1200&q=80"
    ],
    description: "Description de ton œuvre"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('work');
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Charger les fonts Velvetyne
    const fonts = [
      'https://velvetyne.fr/fonts/basteleur/basteleur.css',
      'https://velvetyne.fr/fonts/flor-de-ruina/flor-de-ruina.css',
      'https://velvetyne.fr/fonts/avara/avara.css'
    ];
    
    fonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.href = fontUrl;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
    
    setFontLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
        
        .basteleur {
          font-family: 'Basteleur', serif;
          font-weight: normal;
        }
        
        .flor-de-ruina {
          font-family: 'Flor de Ruina', serif;
          font-weight: normal;
        }
        
        .avara {
          font-family: 'Avara', serif;
          font-weight: normal;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black border-b border-gray-800 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-5xl flor-de-ruina tracking-wide">TON NOM</h1>
          <div className="flex gap-8">
            <button
              onClick={() => setActiveSection('work')}
              className={`text-sm basteleur tracking-wider transition-colors ${
                activeSection === 'work' ? 'text-white' : 'text-gray-500'
              }`}
            >
              TRAVAUX
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm basteleur tracking-wider transition-colors ${
                activeSection === 'about' ? 'text-white' : 'text-gray-500'
              }`}
            >
              À PROPOS
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`text-sm basteleur tracking-wider transition-colors ${
                activeSection === 'contact' ? 'text-white' : 'text-gray-500'
              }`}
            >
              CONTACT
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 max-w-6xl mx-auto px-6">
        {/* Work Section */}
        {activeSection === 'work' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden bg-gray-900 mb-3">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                </div>
                <h3 className="text-sm avara tracking-wide">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{project.category}</p>
              </div>
            ))}
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-2xl mx-auto py-12">
            <h2 className="text-5xl basteleur mb-8">À propos</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed font-light">
              <p>
                Je suis un artiste basé à [Ta ville], spécialisé en [ton domaine]. 
                Mon travail explore [tes thèmes principaux].
              </p>
              <p>
                Diplômé de [ton parcours], j'ai exposé dans [lieux/événements]. 
                Mon approche artistique se concentre sur [ta démarche].
              </p>
              <p>
                Disponible pour des commissions et collaborations.
              </p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="max-w-2xl mx-auto py-12">
            <h2 className="text-5xl basteleur mb-8">Contact</h2>
            <div className="space-y-6">
              <p className="text-gray-300 font-light">
                N'hésite pas à me contacter pour toute question, commission ou collaboration.
              </p>
              <div className="flex gap-6 pt-4">
                <a
                  href="mailto:ton@email.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span className="text-sm">ton@email.com</span>
                </a>
                <a
                  href="https://github.com/tonusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/tonusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 text-white hover:text-gray-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <div className="min-h-screen py-12 px-6" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-4xl mx-auto">
              {/* Informations du projet */}
              <div className="mb-12 pb-8 border-b border-gray-800">
                <h2 className="text-4xl avara mb-4">{selectedProject.title}</h2>
                <div className="space-y-1 text-gray-400 text-sm">
                  <p>{selectedProject.year}</p>
                  <p>{selectedProject.dimensions}</p>
                  <p>{selectedProject.materials}</p>
                </div>
                {selectedProject.description && (
                  <p className="text-gray-300 leading-relaxed font-light mt-6">
                    {selectedProject.description}
                  </p>
                )}
              </div>

              {/* Images du projet */}
              <div className="space-y-8">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-500">
          © 2025 Ton Nom. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;