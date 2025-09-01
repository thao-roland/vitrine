// Imports des modules
import { 
    animateProgressBars, 
    initializeIntersectionObserver, 
    initializeHoverAnimations, 
    animateBadgeDot,
    initializeParallaxEffects
} from './animations.js';

import { 
    initializePortfolioFilters, 
    resetFiltersOnMobile 
} from './portfolio.js';

import { initializeContactForm } from './form.js';

// Variables globales
let mobileMenuOpen = false;

// Initialisation principale
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollEffects();
    animateProgressBars();
    initializeIntersectionObserver();
    initializeHoverAnimations();
    initializeContactForm();
    initializePortfolioFilters();
    animateBadgeDot();
    initializeParallaxEffects();
    initializeSmoothScroll();
});

// Fonction de scroll fluide vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Fermer le menu mobile si ouvert
        if (mobileMenuOpen) {
            toggleMobileMenu();
        }
    }
}


// Toggle du menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('open');
        menuIcon.style.transform = 'rotate(45deg)';
    } else {
        mobileMenu.classList.remove('open');
        menuIcon.style.transform = 'rotate(0deg)';
    }
}

// Initialisation des effets de scroll pour le header
function initializeScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Effect header au scroll
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scroll pour tous les liens d'ancrage
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gestion du redimensionnement de la fenÃªtre
window.addEventListener('resize', () => {
    // Fermer le menu mobile si on passe en desktop
    if (window.innerWidth > 1024 && mobileMenuOpen) {
        toggleMobileMenu();
    }
    
    // RÃ©initialiser les filtres sur mobile
    resetFiltersOnMobile();
});

// Animation de chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animer l'apparition du header
    const header = document.getElementById('header');
    header.style.animation = 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
});

// Exposition des fonctions globales pour le HTML
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;