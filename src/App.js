import { X, Mail, Instagram, Music, Disc3 } from 'lucide-react';
import logo from './assets/logo.png';
import wings from './assets/wings.png';
import moth from './assets/moth.png';
import chenille from './assets/chenille.png';
import './index.css';
import genscoFont from './fonts/Gensco.otf';
import florRuina from './fonts/FlorDeRuina-Flor.woff2';
import basteleurReg from './fonts/Basteleur-Bold.woff2';
import karrikReg from './fonts/Karrik-Regular.woff2';
import wingSfx from './assets/sounds/heaven.mp3';
import evilSfx from './assets/sounds/mystere.mp3';
import maPhoto from './assets/artistpic.webp';
import React, { useEffect, useState } from "react";

// Projet 1: Vengeance
import v1 from './assets/photos/vengeance1.webp';
import v2 from './assets/photos/vengeance2.webp';
import v3 from './assets/photos/vengeance3.webp';
import v4 from './assets/photos/vengeance4.webp';
import v5 from './assets/photos/vengeance5.webp';

// Projet 2: Amygdala
import s2 from './assets/photos/sigma2.webp';
import s3 from './assets/photos/sigma3.webp';
import s4 from './assets/photos/sigma4.webp';
import s5 from './assets/photos/sigma5.webp';
import s6 from './assets/photos/sigma6.webp';
import s7 from './assets/photos/sigma7.webp';
import s8 from './assets/photos/sigma8.webp';
import s9 from './assets/photos/sigma9.webp';

// Projet 3: Buggin
import b1 from './assets/photos/buggin1.webp';
import b2 from './assets/photos/buggin2.webp';
import b3 from './assets/photos/buggin3.webp';
import b4 from './assets/photos/buggin4.webp';
import b5 from './assets/photos/buggin5.webp';
import b6 from './assets/photos/buggin6.webp';
import b7 from './assets/photos/buggin7.webp';
import b8 from './assets/photos/buggin8.webp';

// Projet 4: Dialing
import d1 from './assets/photos/dialing1.webp';
import d2 from './assets/photos/dialing2.webp';

// Projet 5: Liberty
import l1 from './assets/photos/liberty1.webp';
import l2 from './assets/photos/liberty2.webp';
import l3 from './assets/photos/liberty3.webp';

// Projet 6: Croco
import c1 from './assets/photos/croco1.webp';
import c2 from './assets/photos/croco2.webp';
import c3 from './assets/photos/croco3.webp';
import c4 from './assets/photos/croco4.webp';
import c5 from './assets/photos/croco5.webp';
import c6 from './assets/photos/croco6.webp';
import c7 from './assets/photos/croco7.webp';
import c8 from './assets/photos/croco8.webp';


// Projet 7: Carroussel
import carou1 from './assets/photos/carroussel1.webp';
import carou2 from './assets/photos/carroussel2.webp';
import carou3 from './assets/photos/carroussel3.webp';
import carou4 from './assets/photos/carroussel4.webp';
import carou5 from './assets/photos/carroussel5.webp';

// Projet 8: Hotwheels
import hot1 from './assets/photos/hotwheels1.webp';
import hot2 from './assets/photos/hotwheels2.webp';
import hot3 from './assets/photos/hotwheels3.webp';
import hot4 from './assets/photos/hotwheels4.webp';

// Projet 9: Punching ball
import punch1 from './assets/photos/punchingball2.webp';

// Projet 10: Moto
import moto1 from './assets/photos/moto1.webp';
// Projet 11: nounours
import nounours1 from './assets/photos/nounours1.webp';
// Projet 12: puce
import puce1 from './assets/photos/puce1.webp';
import puce2 from './assets/photos/puce2.webp';
// Projet 13: traumachinepanneau
import panneau1 from './assets/photos/traumachine.webp';
// Projet 14: souris
import souris from './assets/photos/souris1.webp';
// Projet 15: enquete
import enqu1 from './assets/photos/enquete1.webp';
// Projet 16: yahour
import yahour1 from './assets/photos/yahourt1.webp';
// Projet 17: Alien
import alien1 from './assets/photos/alien1.webp';

// Données des projets - remplace par tes propres images et infos
const projects = [
{
    id: 1,
    title: "You licked my wounds but all I wanted was vengeance",
    year: "2025",
    dimensions: "150 * 150 * 120 cm",
    materials: "Installation - Glazed stoneware, found objects",
    thumbnail: v1,
    images: [v1, v2, v3, v4, v5],
    description: "Installation view at Einblick, Ausblick (Kiel). This installation stages the material and symbolic hierarchy inherited from colonial history, where Western opulence continues to oppress, dominate, contaminate, and redefine the cultures it has seized. Upon a white cloth, initially immaculate, stands a beautiful ceramic fountain. Crafted from a single block, it imposes its presence through the technical mastery it embodies. The luxury of the fountain, the whiteness of the fabric, and the continuous flow of wine are seductive; yet, as the gaze explores the work, the illusion cracks. The mouth spitting the liquid, the glistening tongue, and the fuel pistol blend the organic with the industrial. The wine oozes, stains, and accumulates; the cloth becomes soiled, and animals marinate in bowls filled with blood-like fluid. Gradually, sweetness becomes toxic and the magical becomes obscene. The red wine, a symbol of refinement, transforms into a primal and colonial fluid: it sprays and contaminates, revealing the stains of colonization, chemical and ecological wounds, and mental/bodily craters. Surrounding the fountain, Vietnamese bowls containing animals and spoons evoke racist stereotypes while serving as symbolic figures submerged in the colonial liquid. The wine, ready for consumption, suggests the forced ingestion of a dominant culture by bodies and traditions. Ambiguous objects reminiscent of drugs and alcohol, alongside vine branches nourished by the wine, participate in a promise of abundance destined for failure. What is meant to nourish eventually exhausts, and ultimately kills. A symbolic, material, and organic violence. A 'superior' culture that spits, drools, overflows, dirties, and seeps into bodies, objects, and systems."
  },
 {
    id: 2,
    title: "Amygdala, Epicenter of Fear",
    year: "2025",
    dimensions: "Variable dimensions",
    materials: "Installation - Glazed stoneware, steel, glass, sound",
    thumbnail: s2,
    images: [s2, s3, s4, s5, s6, s7, s8, s9],
    description: "Solo Show at ProjektRaum (Kiel). Sound link: https://soundcloud.com/tangurex/amygdala-epicenter-of-fear. The installation is comprised of the centerpiece 'Sigma, Alpha, Beta', five wall ceramics, and a digital sound piece. 'Sigma, Alpha, Beta' is an installation-altar where structure, hierarchy, and violence intersect. The ensemble unfolds as a temporal scene, traversed and activated by invisible forces, where every element seems to know its place. A Sigma rises upon a networked structure—futuristic, yet traditional. It sits on its throne. Silent mastery. It is the structure itself, embodying the flows and messages of indoctrination that it transfers across the landscape. Chains erupt from the structure, restraining the Alphas, who stand ready to attack. Their presence is a promise of perpetual dynamics; they initiate nothing, serving as mere tools of violence. On the ground, the Betas form a heterogeneous mass, swallowing the poison as if it were a mandatory rite of passage toward transcendence. That which wounds is integrated; that which destroys becomes the engine. It is an internalized, ingested violence, hinting at a convergence toward a so-called ideal form. The digital soundtrack, composed after the installation, extends the visual space into the sonic realm. Developed by absorbing the atmosphere, rhythms, and structural elements of the work, it resonates like the messages circulating and propagating through the networks. On the walls, familiar architectures punctuate the space. It is suggested that a poison seeps from the central structures into the local architecture. The poison normalizes, becoming almost imperceptible. Close to the ground lies a victimized sun, unrecognizable. Its light is gone, absorbed. Once an ancient figure of a distant infinite—of an incomprehensible sacred—it has finally been digested by the incarnation of a belief centered on the ascension of the individual. The work proposes a contemporary mythology, replacing ancient divinities with toxic, hierarchical beliefs that have been accepted and normalized."
  },
{
    id: 3,
    title: "Buggin' Around",
    year: "2025",
    dimensions: "Performance, 10 minutes, 4 times",
    materials: "Performance - Bike Helmets, Yoga Balls",
    thumbnail: b1,
    images: [b1, b2, b3, b4, b5, b6, b7, b8],
    description: "Performance played 4 times at Künstlerhaus Bethanien (Berlin), for the MONSTRUMZ exhibition. Written and performed by Tâm Nguyen in collaboration with Marie Borgerding, Lara Meise, and Ruth Pick. Dung beetle bike helmets made by Tâm Nguyen with the help of Ruth. In response to the collective performance MONSTRUMZ, which explored the 'banality of evil' through bureaucratic robotic rituals, worship of the printer, and the boredom and weariness of institutions—we staged a counter-intervention. While the bureaucrats occupied the space with stagnant, repetitive gestures of obedience, we hacked a biological and chaotic glitch into their system. Wearing dung beetle-shaped bike helmets and wielding large yoga balls, we transformed the sterile, holy administrative environment into a playground of absurd, chaotic labor. We drew inspiration from the Egyptian Dung Beetle and Khepri; in Ancient Egypt, the beetle rolling its ball of dung was a sacred metaphor for the movement of the sun across the sky. By bringing this myth into the Künstlerhaus, we replaced dead, static paper-pushing with the vital, solar momentum of the beetle. As small insects can find purpose in waste, we redefine the 'useless' task. Unlike the bureaucrat trapped in a soul-crushing routine, our movement was one of playful, unpredictable, and erratic energy—a noisy manifestation of the organic. We countered the 'weary smile' of the administration with laughter, physical pursuit, and the naivety of the game. By throwing the balls and pursuing the audience, we broke the distance inherent in institutional staging, forcing the viewer to leave the position of the passive observer of bureaucracy and become a participant in this joyful, chaotic revolt. In this space, where the Printer has become the new god of the mundane, we clashed with it by reviving the ancient rhythm of the Sun-bearer, rolling the sphere not as a burden, but as a transcendental cosmic act of play. This counter-performance acted as the 'shaking of the system' mentioned in the exhibition’s premise. We were the monsters that the bureaucracy couldn't file, categorize, or silence—the living proof that play and the grotesque are the ultimate antidotes to the cold ritual of power."
  },
  {
    id: 4,
    title: "Dialing back our clocks one or two centuries",
    year: "2024",
    dimensions: "15 x 20 x 20 cm times two",
    materials: "Sculpture - Glazed Stoneware, found objects",
    thumbnail: d1,
    images: [d1, d2],
    description: "Putting children in jail. Exhibition view at FabrikStrasse (Kiel), for the exhibition Zwei Einheiten"
  },
  {
    id: 5,
    title: "Liberty my arse",
    year: "2025",
    dimensions: "120 x 120 x 300 cm",
    materials: "Installation - Plaster, Found object, rope",
    thumbnail: l1,
    images: [l1, l2, l3],
    description: "Exhibition view at Kunstlerhaus Bethanien (Berlin). The statue of liberty head was bondaged in a classic shibari knot by Mr Red Donkey."
  },
 {
    id: 6,
    title: "The Wise Crocodile",
    year: "2024",
    dimensions: "Performance, 10 minutes",
    materials: "Performance - Glazed Stoneware",
    thumbnail: c1,
    images: [c1, c2, c3, c4, c5, c6, c7, c8],
    description: "Performance view at Ufer Studios (Berlin), for the Wolfstöne exhibition. This work explores the 'Wolf Tone'—an acoustic parasite and harmonic interference—as a metaphor for social and mythological 'disturbing noises.' I address the 'Wolf' not as a creature, but as a construct: a figure used to personify male violence and the predatory 'Alpha' archetype. To dismantle this aggression, I responded through a multisensory ritual of ceramic and breath. The performance opens with a critique of human and animal hierarchies. A series of animal-shaped ceramic instruments are treated as mere objects; scattered across the floor, they are scratched, hit, and manipulated. This reflects our historical relationship with the animal kingdom: treating them as material to be exploited, as survival tools, or as symbols to carry human fears. The initial sound is dry and the gestures are violent. However, the ritual shifts as the performers stop 'using' the objects and start listening to them; the instruments are revealed to be ocarinas and flutes. Led by the 'Wise Crocodile,' the performers rise and advance freely, guided by the will of the clay animals. As the lights dim, the chaotic noise dissolves into a serene, harmonic symphony of breath. In a final questioning of the performer/spectator divide, the performers move to sit directly among the audience. This proximity allows the sound to become an intimate, shared vibration. The wolf's howl is replaced by a collective breath, transforming a motif of exclusion and violence into a moment of guidance and sonic grace."
  },

    {
    id: 7,
    title: "Buddha, Frogs and Bad Decisions",
    year: "2024",
    dimensions: "180x80x200",
    materials: "Installation, bois, objets trouvés, encens, peinture sur toile",
    thumbnail: carou1,
    images: [carou1, carou2, carou3, carou4, carou5],
    description: "Exhibition view at Espace Vanderboght (Brussels). Exploring data overload by the 'carroussel' mechanics"
  },
  {
    id: 8,
    title: "Hotwheels",
    year: "2024",
    dimensions: "Installation - Format variable",
    materials: "Céramique, bave, pièces",
    thumbnail: hot1,
    images: [hot1, hot2, hot3, hot4],
    description: "vitesse. Exhibition view at Espace Vanderboght (Brussels). Exploring the 'pay to remove adds mechanics'."
  },
  {
    id: 9,
    title: "Please Do Hit",
    year: "2023",
    dimensions: "60x60x200",
    materials: "Sculpture - Steel, punching ball, acrylics on wood",
    thumbnail: punch1,
    images: [punch1],
    description: "Exhibition view at Espace Vanderboght (Brussels). Exploring the 'hit the like button' mechanics."
  },
  {
    id: 10,
    title: "MotoGP",
    year: "2023",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: moto1,
    images: [moto1],
    description: ""
  },
  {
    id: 11,
    title: "Spin Doctor Detector",
    year: "2023",
    dimensions: "30 x 20 cm",
    materials: "Paint on canvas",
    thumbnail: nounours1,
    images: [nounours1],
    description: "."
  },
  {
    id: 12,
    title: "S on your Chest",
    year: "2024",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: puce1,
    images: [puce1, puce2],
    description: ""
  },
  {
    id: 13,
    title: "Traumachine",
    year: "2024",
    dimensions: "200 x 120 cm",
    materials: "Mixed Media on wood",
    thumbnail: panneau1,
    images: [panneau1],
    description: "."
  },
  {
    id: 14,
    title: "Work has been good",
    year: "2023",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: souris,
    images: [souris],
    description: ""
  },
  {
    id: 15,
    title: "Une Strange Affaire",
    year: "2022",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: enqu1,
    images: [enqu1],
    description: ""
  },
  {
    id: 16,
    title: "Lactose Free Greek Goghurt",
    year: "2022",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: yahour1,
    images: [yahour1],
    description: ""
  },
  {
    id: 17,
    title: "Mathematics",
    year: "2021",
    dimensions: "",
    materials: "Paint on canvas",
    thumbnail: alien1,
    images: [alien1],
    description: "My first painting ever, i still love it to this day"
  }

];



function App() {
  const [init, setInit] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('work');
  const [showSplash, setShowSplash] = useState(true); 
  const [showBetterText, setShowBetterText] = useState(false);
  
  // Pour le texte quand tu cliques sur les anges
  const handleWingClick = () => {
    playWingSound(); // Joue le son
    setShowBetterText(true);
    setTimeout(() => {
    setShowBetterText(false);
  }, 2000); // Disparaît après 2 secondes
  };


  // Effet pour faire disparaître le splash
  React.useEffect(() => { 
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  // Pour jouer le son des anges
const playWingSound = () => {
  const audio = new Audio(wingSfx);
  audio.volume = 0.5; // Ajustez le volume (0.0 à 1.0)
  audio.play().catch(e => console.log("L'audio n'a pas pu démarrer :", e));
};

// Pour jouer le son démon
const playEvilSound = () => {
  const audio = new Audio(evilSfx);
  audio.volume = 0.7;
  audio.play().catch(e => console.log("L'audio n'a pas pu démarrer :", e));
};

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

               {/* message flippant */}
        {showSplash && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-2000"
            style={{ 
              animation: 'fadeOut 2s forwards',
              opacity: showSplash ? 1 : 0 
            }}
          >
            <h1 className="text-6xl gensco text-red-600">
              There's a sort of evil out there...
            </h1>
          </div>
        )}

        {/* message cool */}
          {showBetterText && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              style={{ 
                animation: 'fadeOut 2s forwards',
                backgroundColor: 'rgba(0,0,0,0.3)' // Un voile très léger
              }}
            >
              <h1 className="text-4xl gensco text-white text-center px-4 tracking-widest">
                You just made the world a tiny bit better...
              </h1>
            </div>
          )}


      <style>{`
    
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
                        
                    
                      @keyframes cocoonOpen {
                0% { 
                  clip-path: circle(0% at 50% 50%); 
                  background: black; 
                }
                100% { 
                  clip-path: circle(150% at 50% 50%); 
                  background: transparent; 
                }
              }

              .cocoon-overlay {
                position: fixed;
                inset: 0;
                background: black;
                z-index: 100;
                /* 0.8s avec une courbe "expo" pour plus de punch */
                animation: cocoonOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }

              /* Apparition du contenu : Presque instantanée après l'ouverture */
              .project-content {
                /* Le contenu attend seulement 0.2s */
                animation: fadeInContent 0.6s ease-out 0.2s forwards;
                opacity: 0;
              }

              @keyframes fadeInContent {
                from { 
                  opacity: 0; 
                  transform: scale(0.95); 
                }
                to { 
                  opacity: 1; 
                  transform: scale(1); 
                }
              }



            @keyframes breathe {
              0% { transform: scale(1); }
              50% { transform: scale(1.03); } /* Grossit très légèrement */
              100% { transform: scale(1); }
            }

            .breathing-logo {
              animation: breathe 4s ease-in-out infinite;
              display: flex;
              align-items: center;
              gap: 1rem;
              /* On s'assure que l'animation ne bloque pas le curseur chenille */
              pointer-events: auto; 
            }

            .breathing-logo:hover {
              animation-duration: 1.5s; /* La respiration devient plus rapide (stressée/excitée) */
            }


    

          * {
            cursor: url(${moth}) 0 0, auto !important;
            a, 
            button, 
            [role="button"], 
            .cursor-pointer, 
            .cursor-pointer * { 
              cursor: url(${chenille}) 16 16, pointer !important;
            }
          }
        
          @keyframes fadeOut {
            0% { opacity: 1; }
            70% { opacity: 1; }
            100% { opacity: 0; }
          }

          

          @font-face {
          font-family: 'Flor de Ruina';
          src: url(${florRuina}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Basteleur';
          src: url(${basteleurReg}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Karrik';
          src: url(${karrikReg}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }



          @font-face {
            font-family: 'Gensco';
            src: url(${genscoFont}) format('opentype');
            font-weight: normal;
            font-style: normal;
          }

          .gensco {
            font-family: 'Gensco', sans-serif;
            
          }
        
          .flor-de-ruina {
            font-family: 'Flor de Ruina', serif;
            font-weight: normal;
          }
        
          .basteleur {
            font-family: 'Basteleur', serif;
            font-weight: normal;
          }
        

          .karrik {
            font-family: 'Karrik', sans-serif;
            font-weight: normal;
            line-height: 1.4;
            letter-spacing: 0.02em; /* Un peu d'espace pour la lisibilité */
          }
      `}
      
      </style>


      {/* les anges */}   
      <img src={wings} className="tiny-floater img-1" alt="" onClick={handleWingClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }} />
      <img src={wings} className="tiny-floater img-2" alt="" onClick={handleWingClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }} />
      <img src={wings} className="tiny-floater img-3" alt="" onClick={handleWingClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }} />
      <img src={wings} className="tiny-floater img-4" alt="" onClick={handleWingClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }} />
        
    

      {/* Header */}
      <header className="fixed top-0 w-full bg-black z-40">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-y-6">
  <div className="flex items-center gap-4">
    <div className="breathing-logo flex items-center gap-4">
      <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
      <h1 
        className="text-5xl flor-de-ruina tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => {
          playEvilSound(); 
          setShowSplash(true);
          setActiveSection('work');
        }}
      >
        Tâm Nguyen
      </h1>
    </div>
  </div>

  {/* La classe flex-wrap ici permet aux boutons de passer en dessous si l'écran est trop petit */}
  <div className="flex flex-wrap gap-8">
    <button
      onClick={() => setActiveSection('work')}
      className={`text-sm basteleur tracking-wider transition-colors ${
        activeSection === 'work' ? 'text-white' : 'text-gray-500'
      }`}
    >
      WORKS
    </button>
    <button
      onClick={() => setActiveSection('about')}
      className={`text-sm basteleur tracking-wider transition-colors ${
        activeSection === 'about' ? 'text-white' : 'text-gray-500'
      }`}
    >
      ABOUT/CV
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
        
      {/* Contenu principal */}
      <main className="pt-24 pb-12 max-w-6xl mx-auto px-6">
        {/* Work Section */}
       {activeSection === 'work' && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 animate-in fade-in duration-700">
    {projects.map((project) => (
      <div 
        key={project.id} 
        className="group cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="relative overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/5]">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            style={{ filter: 'none' }}
          />
        </div>

        {/* Infos sous l'image */}
        <div className="mt-4 space-y-1">
          <div className="flex justify-between items-baseline">
            <h3 className="karrik text-lg text-white group-hover:text-red-600 transition-colors">
              {project.title}
            </h3>
            <span className="basteleur text-xs text-gray-500">{project.year}</span>
          </div>
          <p className="karrik text-xs text-gray-500 uppercase tracking-widest opacity-60">
            {project.materials}
          </p>
        </div>
      </div>
    ))}
  </div>
)}






        {/* About Section */}
        {activeSection === 'about' && (
  <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-16 animate-in fade-in duration-1000 relative z-10">
    
    {/* COLONNE GAUCHE : Statement & Bio*/}
    <div className="md:sticky md:top-32 h-fit space-y-8">
      
      {/* Bio / About  */}
      <div className="karrik space-y-1 text-gray-400 text-base">
        <p></p>
        <p><span className="text-white">Tâm Nguyen</span> 1997</p>
        <p>il/lui</p>
        <p>Artiste Français - Vietnamien</p>
        <p>Vit et travaille à Bruxelles (BE)</p>
      </div>

      {/* Texte de Statement - Taille de police ajustée */}
      <div className="space-y-6">
        <h2 className="text-4xl basteleur uppercase tracking-tighter">Statement</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed karrik text-base">
          <p>
My artistic practice is a satirical dissection of intertwined power structures. Whether they are colonial, social, or technological, I see them as stemming from the same entity. My work digs into profound experiences of alienation: from production culture, the overload of low-quality information, to the collapse of digital utopias. To me, the internet, once a territory of emancipation and wonder, has become a suffocating land, colonized by the same forces responsible for the flatlining of physical spaces, leaving an empty, haunted landscape full of false promises.          </p>
          <p>
I investigate the monsters that feed on our thoughts and annihilate our experiences. To counter this emotional annihilation, I activate a protective practice based on joy, play, absurdity, and grotesque. Through a multidisciplinary approach, I create chaotic ecosystems with an emphasis on organicity. These environments are saturated with references and symbolism, acting as spaces where hierarchies are broken, beliefs are questioned, and levels of importance rewritten.          </p>
          <p>
My current research revolves around the creation of speculative mythologies, digital hauntings, dysfunctional rituals. By hijacking pop culture icons, notably the Pikachu figure, and the life of my ancestors, I address intimate and political themes such as technological obsolescence, the anger of a meaningless life, and the asylum seeking experience. My works functions as spectral bugs: dysfunctional image carousels, new distorted divinities, contaminating fountains… All pinpointing the contradictions between the false expired hopes fed to us, our underlying cultural heritage wounds and our new hollow divinities: the ego, the worship of raw muscles, the violent ascent over others... Maybe we are trying to convince ourselves that through dominating performances and individualism, we might still survive the imminent crash.          </p>
          <p>
I am playing with references ranging from the sacred to the lowbrow to create a permanent tension between humor, the intentional stupidity of play and an uncanny reality. I aim to transform numbness into a form of life-clinging, visceral resistance.          </p>

        </div>
      </div>
    </div>

    {/*  (Exhibitions & Education) --- */}
    <div className="space-y-12">
      
      {/* SECTION EXHIBITIONS  */}
      <section>
        <h2 className="text-2xl basteleur mb-6 uppercase tracking-tighter text-white/90">Exhibitions</h2>
        <div className="karrik space-y-3 text-sm">
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-red-600 text-base">2026</span>
            <div className="border-l border-red-900/30 pl-4">
              <p>Future matters, <span className="opacity-40 italic text-xs">EDJI Gallery, Brussels</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline pt-1">
            <span className="basteleur text-gray-500 text-base">2025</span>
            <div className="border-l border-gray-800 pl-4 space-y-1">
              <p>I’ll see you in my dreams, <span className="opacity-40 italic text-xs">Botanique Galerie + Serres, Brussels</span></p>
              <p>Einblick, Ausblick, <span className="opacity-40 italic text-xs">Muthesius Kunsthochschule, Kiel</span></p>
              <p>Monstrumz, <span className="opacity-40 italic text-xs">Künstlerhaus Bethanien, Berlin</span></p>
              <p>Wolfstöne, Dissonanzen und Geräusche, <span className="opacity-40 italic text-xs">Uferstudios, Berlin</span></p>
              <p>Zwei Einheiten, <span className="opacity-40 italic text-xs">FabrikStrasse, Kiel</span></p>
              <p>Amygdala, epicenter of fear, <span className="opacity-40 italic text-xs">ProjektRaum, Kiel</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline pt-1">
            <span className="basteleur text-gray-500 text-base">2024</span>
            <div className="border-l border-gray-800 pl-4 space-y-1">
              <p>Bachelor Diplomas Jurys, <span className="opacity-40 italic text-xs">Espace Vanderboght, Brussels</span></p>
              <p>Icy Patch, <span className="opacity-40 italic text-xs">L’imprimerie, Brussels</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline pt-1">
            <span className="basteleur text-gray-500 text-base">2022</span>
            <div className="border-l border-gray-800 pl-4 space-y-1">
              <p>Open Jurys, <span className="opacity-40 italic text-xs">ERG un lieu de recherche, Brussels</span></p>
              <p>Meme Meme, <span className="opacity-40 italic text-xs">Jacques Frank, Brussels</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EDUCATION */}
      <section>
        <h2 className="text-2xl basteleur mb-6 uppercase tracking-tighter text-white/90">Education</h2>
        <div className="karrik space-y-2 text-sm">
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-red-600 text-[10px] uppercase">Now</span>
            <div className="border-l border-red-900/30 pl-4">
              <p>MFA. Fine Art, <span className="opacity-40 italic text-xs">Royal Academy of Fine Art, Brussels</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-gray-500 text-[10px]">24—25</span>
            <div className="border-l border-gray-800 pl-4">
              <p>MFA. Fine Art, <span className="opacity-40 italic text-xs">Muthesius Kunsthochschule, Kiel</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-gray-500 text-[10px]">22—24</span>
            <div className="border-l border-gray-800 pl-4">
              <p>BA. Fine Art, <span className="opacity-40 italic text-xs">Royal Academy of Fine Art, Brussels</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-gray-500 text-[10px]">21—22</span>
            <div className="border-l border-gray-800 pl-4">
              <p>BA. Fine Art, <span className="opacity-40 italic text-xs">Ecole de Recherche Graphique, Brussels</span></p>
            </div>
          </div>
          <div className="grid grid-cols-[60px_1fr] gap-2 items-baseline">
            <span className="basteleur text-gray-500 text-[10px]">14—19</span>
            <div className="border-l border-gray-800 pl-4">
              <p>MSC. Computer Engineering, <span className="opacity-40 italic text-xs">Université de Technologie de Troyes</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
)}






{/* Contact Section */}
{activeSection === 'contact' && (
  <div className="max-w-2xl mx-auto py-12 animate-in fade-in duration-700">

    <h2 className="text-5xl basteleur mb-8">Contact</h2>
    
    <div className="space-y-8">

      <div className="w-full py-4"> 
        <div className="relative group mx-auto">
          {/* L'effet de halo rouge */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-black rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <img 
            src={maPhoto} 
            alt="Tâm Nguyen" 
            className="relative rounded-lg grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto object-cover border border-gray-800 shadow-xl"
          />
        </div>
      </div>

      {/* TEXTE Karrik */}
      <p className="text-lg text-gray-300 karrik leading-relaxed">
        Please contact me for any inquiries on my email. The link for any sound piece is in my soundcloud. I also play in a band with Alexe Françoise, called Silicon Balais. This is not a side project and is a musical translation of our artistic thoughts, the bandcamp link is also under there. Thank you for visiting this website.
      </p>

      {/* LIENS Sociaux */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
        <a
          href="mailto:ngutam91@gmail.com"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
        >
          <Mail size={18} />
          <span className="text-sm karrik tracking-widest uppercase">ngutam91@gmail.com</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
        >
          <Instagram size={18} />
          <span className="text-sm karrik tracking-widest uppercase">@tangurex</span>
        </a>

        <a
          href="https://soundcloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
        >
          <Music size={18} />
          <span className="text-sm karrik tracking-widest uppercase">SoundCloud</span>
        </a>

        <a
          href="https://siliconbalais.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all"
        >
          <Disc3 size={18} />
          <span className="text-sm karrik tracking-widest uppercase">Bandcamp</span>
        </a>
      </div>
    </div>
  </div>
)}
      </main>

      {/* Lightbox - Page complète qui scroll */}
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
              {/* Informations du projet EN HAUT */}
              <div className="mb-12 pb-8 border-b border-gray-800">
                <h2 className="text-4xl karrik mb-4">{selectedProject.title}</h2>
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

              {/* Images empilées verticalement */}
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

      

      {/* Footer avec Crédits Typos */}
      <footer className="mt-20 py-10 border-t border-gray-900 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-6">
          
          {/* Section gauche : Crédits */}
          <div className="flex flex-col gap-2">
            <h3 className="basteleur text-xs text-gray-500 uppercase tracking-widest mb-2">Typography Credits</h3>
            <ul className="text-[10px] space-y-1 text-gray-600 karrik uppercase tracking-tighter">
              <li><span className="text-gray-400">Flor de Ruina</span> — by Flor de Ruina</li>
              <li><span className="text-gray-400">Gensco</span> — by OpenType</li>
              <li><span className="text-gray-400">Basteleur</span> — by Keissel & Velvetyne</li>
              <li><span className="text-gray-400">Karrik</span> — by Jean-Baptiste Morizot</li>
            </ul>
          </div>

          {/* Section droite : Copyright ou info supplémentaire */}
          <div className="text-[10px] text-gray-700 basteleur uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Tâm Nguyen - Ceci est un site codé par moi même
          </div>
        </div>
      </footer>



      {/* Vue détaillée (Cocon) */}
{selectedProject && (
  <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">
    {/* L'effet de tissage */}
    <div className="cocoon-overlay pointer-events-none"></div>

    <div className="project-content max-w-6xl mx-auto px-6 py-24 min-h-screen">
      {/* Bouton Fermer */}
      <button 
        onClick={() => setSelectedProject(null)}
        className="fixed top-8 right-8 z-[110] text-white hover:text-red-600 transition-colors"
      >
        <X size={40} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Images du projet */}
        <div className="space-y-8">
  {selectedProject.images.map((img, index) => (
    <img 
      key={index} 
      src={img} 
      className="w-full border border-white/5 transition-transform duration-1000" 
      alt="" 
      style={{ filter: 'none' }} // On s'assure que c'est bien en couleur ici aussi
    />
  ))}
</div>

        {/* Infos du projet */}
        <div className="md:sticky md:top-24 h-fit space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl basteleur leading-tight">{selectedProject.title}</h2>
            <p className="karrik text-xl text-red-600">{selectedProject.year}</p>
          </div>

          <div className="karrik space-y-6 text-gray-300 text-lg leading-relaxed">
            <div className="flex flex-col gap-1 border-l border-gray-800 pl-6 text-sm uppercase tracking-widest text-gray-500">
              <span>{selectedProject.materials}</span>
              <span>{selectedProject.dimensions}</span>
            </div>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      </div>
    </div>
  
  
  </div>
)}












    </div>
  );
}

export default App;