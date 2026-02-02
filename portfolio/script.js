// Initialisation des particules avancées
document.addEventListener('DOMContentLoaded', function() {
    // Configuration particles.js avancée
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 120,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: ["#00f3ff", "#ff00ff", "#00ff9d", "#9d00ff", "#ff6b00"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 200,
                    color: "#00f3ff",
                    opacity: 0.3,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 800,
                        rotateY: 1600
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "bubble"]
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 8,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ===== ANIMATION DE TEXTE ULTRA RAPIDE =====
    const typingText = document.getElementById('typing-text');
    const texts = [
        "SYSTEM INITIALIZED...",
        "LOADING PROFILE: RAMANAMISATA TENDRY...",
        "AI DEVELOPER & AUTOMATION SPECIALIST...",
        "AGE: 20 | PASSION: INNOVATION...",
        "SYSTEM FULLY OPERATIONAL...",
        "READY FOR DIGITAL TRANSFORMATION..."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50; // Ultra rapide
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30; // Encore plus rapide pour effacer
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50;
        }
        
        // Pause à la fin du texte
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 1000; // Pause courte
            setTimeout(() => isDeleting = true, typingSpeed);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 300; // Pause très courte entre textes
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Démarrer instantanément
    setTimeout(typeText, 500);

    // ===== COMPTEURS ANIMÉS ULTRA RAPIDES =====
    function animateCounter(element, target, duration = 800) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const updateCounter = () => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
            } else {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    }

    // Observer pour déclencher les compteurs au scroll
    const statObservers = document.querySelectorAll('.stat-value[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target, 800); // 800ms pour l'animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statObservers.forEach(stat => observer.observe(stat));

    // ===== ANIMATION DES NIVEAUX TECH =====
    const techLevels = document.querySelectorAll('.tech-level');
    techLevels.forEach(level => {
        const width = level.style.width;
        level.style.width = '0%';
        
        setTimeout(() => {
            level.style.transition = 'width 1s ease-out';
            level.style.width = width;
        }, 500);
    });

    // ===== SCROLL SMOOTH AVEC OFFSET =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== EFFETS DE SURVOL DES CARTES =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(-20px)';
            }
            card.style.zIndex = '10';
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0)';
            } else {
                card.style.transform = 'translateY(-30px)';
            }
            card.style.zIndex = '1';
        });
    });

    // ===== ANIMATION DU SCANNER =====
    const scannerChars = document.querySelectorAll('.scanner-char');
    setInterval(() => {
        scannerChars.forEach(char => {
            const random = Math.random();
            char.style.opacity = random > 0.7 ? '1' : random > 0.4 ? '0.6' : '0.3';
            char.style.transform = `translateY(${Math.random() * 5 - 2.5}px)`;
            char.style.transition = 'all 0.3s ease';
        });
    }, 300);

    // ===== EFFETS DE GLOW SUR LES BOUTONS =====
    const cyberButtons = document.querySelectorAll('.cyber-btn');
    cyberButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 40px var(--neon-blue), 0 0 80px rgba(0, 243, 255, 0.3)';
            button.style.transform = 'translateY(-3px) scale(1.02)';
            button.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '';
            button.style.transform = '';
        });
    });

    // ===== ANIMATION DU STATUT EN LIGNE =====
    const statusIndicators = document.querySelectorAll('.status-indicator.active');
    setInterval(() => {
        statusIndicators.forEach(indicator => {
            indicator.style.opacity = indicator.style.opacity === '0.3' ? '1' : '0.3';
        });
    }, 800);

    // ===== ANIMATION DU STREAM DE DONNÉES =====
    const dataStream = document.querySelector('.stream-container');
    if (dataStream) {
        setInterval(() => {
            const bytes = dataStream.querySelectorAll('.stream-byte');
            bytes.forEach(byte => {
                if (Math.random() > 0.7) {
                    byte.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
                }
            });
        }, 500);
    }

    // ===== EFFET DE PARALLAXE OPTIMISÉ =====
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero-section');
                
                // Parallaxe légère pour le hero
                if (hero) {
                    const speed = 0.3;
                    hero.style.backgroundPositionY = `${scrolled * speed}px`;
                }
                
                // Animation des sections au scroll
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const windowHeight = window.innerHeight;
                    
                    if (scrolled > sectionTop - windowHeight + 200) {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    }
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // ===== INITIALISATION DES SECTIONS =====
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.transitionDelay = `${index * 0.1}s`;
    });

    // ===== ANIMATION DE LA BARRE DE CHARGEMENT =====
    const loadFill = document.querySelector('.load-fill');
    if (loadFill) {
        setInterval(() => {
            const currentWidth = parseInt(loadFill.style.width) || 85;
            const newWidth = 85 + Math.random() * 5;
            loadFill.style.width = `${newWidth}%`;
            loadFill.style.transition = 'width 1s ease';
            
            const loadText = document.querySelector('.load-text');
            if (loadText) {
                loadText.textContent = `CHARGE: ${Math.round(newWidth)}%`;
            }
        }, 2000);
    }

    // ===== EFFET DE VIBRATION SUR LES ICÔNES =====
    const icons = document.querySelectorAll('.nav-link i, .card-icon i, .channel-icon i, .skill i');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.animation = 'vibrate 0.2s linear';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animation = '';
        });
    });

    // ===== AJOUT DES ANIMATIONS CSS =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vibrate {
            0%, 100% { transform: translateX(0) rotate(0); }
            25% { transform: translateX(-2px) rotate(-1deg); }
            75% { transform: translateX(2px) rotate(1deg); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes shine {
            0% { background-position: -100px; }
            100% { background-position: 200px; }
        }
        
        @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // ===== EFFET DE CLIC SUR LES CARTES DE CONTACT =====
    const channelCards = document.querySelectorAll('.channel-card');
    channelCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.left = `${e.offsetX}px`;
            ripple.style.top = `${e.offsetY}px`;
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.4s linear';
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 400);
        });
    });

    // ===== ANIMATION DE L'HOLOGRAMME =====
    const hologramFrame = document.querySelector('.hologram-frame');
    if (hologramFrame) {
        let mouseX = 0;
        let mouseY = 0;
        let frameX = 0;
        let frameY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });
        
        function updateHologram() {
            frameX += (mouseX * 10 - frameX) * 0.05;
            frameY += (mouseY * 10 - frameY) * 0.05;
            
            hologramFrame.style.transform = `
                translateY(-20px)
                rotateX(${frameY}deg)
                rotateY(${frameX}deg)
                scale(1.02)
            `;
            
            requestAnimationFrame(updateHologram);
        }
        
        updateHologram();
    }

    // ===== SIMULATION D'ACTIVITÉ SYSTÈME =====
    setInterval(() => {
        // Changer aléatoirement l'opacité des éléments flottants
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach(el => {
            if (Math.random() > 0.8) {
                el.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
            }
        });
        
        // Effet de scintillement sur le logo
        const logoDot = document.querySelector('.logo-dot');
        if (logoDot && Math.random() > 0.9) {
            logoDot.style.animation = 'none';
            setTimeout(() => {
                logoDot.style.animation = 'pulse 1.5s infinite';
            }, 100);
        }
    }, 1000);

    // ===== GESTION DU RESIZE =====
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (typeof particlesJS !== 'undefined') {
                particlesJS();
            }
        }, 250);
    });

    // ===== EFFET DE CHARGEMENT INITIAL =====
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animation d'entrée rapide
        setTimeout(() => {
            const hero = document.querySelector('.hero-section');
            if (hero) {
                hero.style.opacity = '1';
                hero.style.transform = 'translateY(0)';
                hero.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            }
            
            // Animation des compétences
            const skills = document.querySelectorAll('.skill');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 300);
    });

    // ===== ANIMATION DES BARS DE SIGNAL =====
    const signalBars = document.querySelectorAll('.signal-bars .bar');
    setInterval(() => {
        signalBars.forEach((bar, index) => {
            setTimeout(() => {
                const randomHeight = 5 + Math.random() * 20;
                bar.style.height = `${randomHeight}px`;
                bar.style.transition = 'height 0.3s ease';
            }, index * 100);
        });
    }, 2000);
});

// ===== FONCTION POUR SIMULER LA TRANSMISSION =====
function showTransmissionEffect() {
    const effect = document.getElementById('transmission-effect');
    if (effect) {
        effect.style.display = 'block';
        effect.style.animation = 'fadeIn 0.2s';
        
        setTimeout(() => {
            effect.style.animation = 'fadeOut 0.2s';
            setTimeout(() => {
                effect.style.display = 'none';
            }, 200);
        }, 1000);
    }
}

// ===== GESTION DES ERREURS =====
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 50, 50, 0.9);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        border: 2px solid #ff0000;
        z-index: 9999;
        font-family: 'Orbitron', sans-serif;
        box-shadow: 0 0 20px #ff0000;
        display: none;
    `;
    errorDiv.textContent = 'SYSTEM ERROR - Continuing operation...';
    document.body.appendChild(errorDiv);
    errorDiv.style.display = 'block';
    setTimeout(() => errorDiv.style.display = 'none', 3000);
});

// ===== FONCTION POUR ANIMATIONS RAPIDES =====
function quickAnimation(element) {
    element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

// ===== INITIALISATION DES ANIMATIONS RAPIDES =====
document.querySelectorAll('.service-card, .presentation-card, .contact-card, .skill, .stat-large').forEach(card => {
    quickAnimation(card);
});