// Performance optimization utilities
export const imageOptimization = {
    // Service card images
    serviceCard: {
        loading: 'lazy' as const,
        quality: 75,
        sizes: '(max-width: 768px) 100vw, 50vw',
    },

    // Portfolio/gallery images
    gallery: {
        loading: 'lazy' as const,
        quality: 80,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    },

    // Hero/banner images
    hero: {
        priority: true,
        quality: 85,
        sizes: '100vw',
    },
};

// Reduced motion variants for framer-motion
export const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

// Optimized animation variants
export const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother animation
        },
    },
};

export const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Debounce utility for scroll events
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Intersection Observer hook for lazy loading
export const observerOptions = {
    root: null,
    rootMargin: '50px', // Start loading 50px before element enters viewport
    threshold: 0.01,
};
