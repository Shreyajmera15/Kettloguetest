/* Responsive and Interactive Validation */

// Media query breakpoints
const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 992,
  desktop: 1200
};

// Responsive validation functions
function validateResponsiveness() {
  console.log('Validating responsive design across breakpoints...');
  
  // Check viewport meta tag
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    console.error('Missing viewport meta tag - critical for mobile responsiveness');
  } else {
    console.log('✓ Viewport meta tag present');
  }
  
  // Check responsive CSS
  const styleSheets = document.styleSheets;
  let hasMediaQueries = false;
  
  for (let i = 0; i < styleSheets.length; i++) {
    try {
      const rules = styleSheets[i].cssRules || styleSheets[i].rules;
      for (let j = 0; j < rules.length; j++) {
        if (rules[j].type === CSSRule.MEDIA_RULE) {
          hasMediaQueries = true;
          console.log(`✓ Media query found: ${rules[j].conditionText}`);
        }
      }
    } catch (e) {
      console.warn('Could not access stylesheet rules (likely CORS restriction)');
    }
  }
  
  if (!hasMediaQueries) {
    console.warn('No media queries detected - responsive design may be limited');
  }
  
  // Check responsive elements
  const responsiveElements = [
    { selector: 'header', name: 'Header' },
    { selector: '.hero', name: 'Hero section' },
    { selector: '.gallery-grid', name: 'Gallery grid' },
    { selector: '.product-item', name: 'Product items' },
    { selector: '.testimonial-grid', name: 'Testimonial grid' },
    { selector: '.contact-grid', name: 'Contact grid' },
    { selector: '.footer-grid', name: 'Footer grid' }
  ];
  
  responsiveElements.forEach(element => {
    const el = document.querySelector(element.selector);
    if (el) {
      const style = window.getComputedStyle(el);
      if (style.display.includes('flex') || style.display.includes('grid')) {
        console.log(`✓ ${element.name} uses flexible layout (${style.display})`);
      } else {
        console.warn(`${element.name} may not be using responsive layout techniques`);
      }
    } else {
      console.error(`${element.name} not found in document`);
    }
  });
  
  // Check image responsiveness
  const images = document.querySelectorAll('img');
  let responsiveImagesCount = 0;
  
  images.forEach(img => {
    if (img.hasAttribute('srcset') || 
        img.style.maxWidth === '100%' || 
        window.getComputedStyle(img).maxWidth === '100%') {
      responsiveImagesCount++;
    }
  });
  
  console.log(`✓ ${responsiveImagesCount} of ${images.length} images appear to be responsive`);
  
  // Check for potential overflow issues
  const body = document.body;
  const hasHorizontalOverflow = body.scrollWidth > window.innerWidth;
  
  if (hasHorizontalOverflow) {
    console.error('Horizontal overflow detected - may cause mobile usability issues');
  } else {
    console.log('✓ No horizontal overflow detected');
  }
  
  // Check for touch-friendly targets
  const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
  let smallTargetCount = 0;
  
  interactiveElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargetCount++;
    }
  });
  
  if (smallTargetCount > 0) {
    console.warn(`${smallTargetCount} interactive elements may be too small for touch targets (< 44px)`);
  } else {
    console.log('✓ All interactive elements have adequate size for touch targets');
  }
  
  console.log('Responsive validation complete');
}

// 3D and interactive elements validation
function validate3DInteractivity() {
  console.log('Validating 3D and interactive elements...');
  
  // Check for Three.js
  if (typeof THREE === 'undefined') {
    console.error('THREE.js not loaded - 3D functionality will not work');
    return;
  } else {
    console.log('✓ THREE.js library loaded');
  }
  
  // Check for GSAP
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded - animations may be limited');
  } else {
    console.log('✓ GSAP animation library loaded');
  }
  
  // Check 3D containers
  const threeDContainers = [
    { selector: '#hero-3d-container', name: 'Hero 3D container' },
    { selector: '#kettle-3d-model', name: '3D model viewer' }
  ];
  
  threeDContainers.forEach(container => {
    const el = document.querySelector(container.selector);
    if (el) {
      const canvas = el.querySelector('canvas');
      if (canvas) {
        console.log(`✓ ${container.name} contains canvas element for 3D rendering`);
      } else {
        console.error(`${container.name} exists but does not contain a canvas element`);
      }
    } else {
      console.error(`${container.name} not found in document`);
    }
  });
  
  // Check interactive elements
  const interactiveFeatures = [
    { selector: '.kettle-card', name: 'Kettle gallery cards', count: 6 },
    { selector: '.product-image-container', name: 'Product showcase items', count: 6 },
    { selector: '.testimonial-card', name: 'Testimonial cards', count: 3 }
  ];
  
  interactiveFeatures.forEach(feature => {
    const elements = document.querySelectorAll(feature.selector);
    if (elements.length === 0) {
      console.error(`${feature.name} not found in document`);
    } else if (elements.length < feature.count) {
      console.warn(`Expected ${feature.count} ${feature.name}, found ${elements.length}`);
    } else {
      console.log(`✓ Found ${elements.length} ${feature.name}`);
      
      // Check for event listeners
      const sampleElement = elements[0];
      const hasListeners = (
        sampleElement.onclick !== null || 
        sampleElement.onmouseover !== null || 
        sampleElement.onmouseenter !== null ||
        sampleElement.getAttribute('data-product') !== null
      );
      
      if (hasListeners) {
        console.log(`✓ ${feature.name} appear to have interactive event handlers`);
      } else {
        console.warn(`${feature.name} may be missing interactive event handlers`);
      }
    }
  });
  
  // Check scroll animations
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    console.log(`✓ Found ${fadeElements.length} elements with fade-in animations`);
    
    // Check if IntersectionObserver is used
    if ('IntersectionObserver' in window) {
      console.log('✓ IntersectionObserver API available for scroll animations');
    } else {
      console.warn('IntersectionObserver API not available - scroll animations may not work');
    }
  } else {
    console.warn('No fade-in animation elements found');
  }
  
  // Check for WebGL support
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported - 3D elements will not render');
    } else {
      console.log('✓ WebGL supported for 3D rendering');
    }
  } catch (e) {
    console.error('Error checking WebGL support:', e);
  }
  
  console.log('3D and interactivity validation complete');
}

// Performance validation
function validatePerformance() {
  console.log('Validating performance...');
  
  // Check image optimization
  const images = document.querySelectorAll('img');
  console.log(`Total images: ${images.length}`);
  
  let largeImages = 0;
  images.forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      const size = img.naturalWidth * img.naturalHeight * 4; // Rough estimate in bytes
      if (size > 1000000) { // 1MB
        largeImages++;
        console.warn(`Large image detected: ${img.src} (approx. ${Math.round(size/1024/1024)}MB)`);
      }
    }
  });
  
  if (largeImages === 0) {
    console.log('✓ No excessively large images detected');
  }
  
  // Check for render-blocking resources
  const scripts = document.querySelectorAll('script:not([async]):not([defer])');
  if (scripts.length > 0) {
    console.warn(`${scripts.length} scripts may be render-blocking (missing async/defer)`);
  } else {
    console.log('✓ No render-blocking scripts detected');
  }
  
  // Check for heavy animations
  if (typeof gsap !== 'undefined' && gsap.ticker) {
    console.log('Monitoring GSAP animation performance...');
    const originalTick = gsap.ticker.tick;
    let slowFrames = 0;
    let totalFrames = 0;
    
    gsap.ticker.tick = function() {
      const start = performance.now();
      const result = originalTick.apply(this, arguments);
      const duration = performance.now() - start;
      
      totalFrames++;
      if (duration > 16.67) { // 60fps threshold
        slowFrames++;
      }
      
      return result;
    };
    
    setTimeout(() => {
      gsap.ticker.tick = originalTick;
      const slowPercentage = (slowFrames / totalFrames) * 100;
      
      if (slowPercentage > 10) {
        console.warn(`Performance concern: ${slowPercentage.toFixed(1)}% of animation frames took longer than 16.67ms`);
      } else {
        console.log(`✓ Animation performance good: ${slowPercentage.toFixed(1)}% slow frames`);
      }
    }, 3000);
  }
  
  // Check for excessive DOM size
  const domElements = document.querySelectorAll('*').length;
  if (domElements > 1500) {
    console.warn(`Large DOM size: ${domElements} elements (may impact performance)`);
  } else {
    console.log(`✓ DOM size acceptable: ${domElements} elements`);
  }
  
  console.log('Performance validation complete');
}

// Accessibility validation
function validateAccessibility() {
  console.log('Validating basic accessibility...');
  
  // Check for alt text on images
  const images = document.querySelectorAll('img');
  let missingAlt = 0;
  
  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      missingAlt++;
    }
  });
  
  if (missingAlt > 0) {
    console.warn(`${missingAlt} of ${images.length} images missing alt text`);
  } else {
    console.log(`✓ All ${images.length} images have alt text`);
  }
  
  // Check for proper heading hierarchy
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const headingLevels = headings.map(h => parseInt(h.tagName.substring(1)));
  
  let isSequential = true;
  let previousLevel = 0;
  
  for (let i = 0; i < headingLevels.length; i++) {
    const currentLevel = headingLevels[i];
    if (currentLevel > previousLevel + 1 && previousLevel !== 0) {
      isSequential = false;
      console.warn(`Heading hierarchy skip: from h${previousLevel} to h${currentLevel}`);
    }
    previousLevel = currentLevel;
  }
  
  if (isSequential) {
    console.log('✓ Heading hierarchy is properly sequential');
  }
  
  // Check for sufficient color contrast (simplified check)
  const bodyStyle = window.getComputedStyle(document.body);
  const backgroundColor = bodyStyle.backgroundColor;
  const textColor = bodyStyle.color;
  
  console.log(`Text color: ${textColor}, Background color: ${backgroundColor}`);
  console.log('Note: Detailed color contrast analysis requires additional tools');
  
  // Check for keyboard navigability
  const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
  let nonFocusableElements = 0;
  
  interactiveElements.forEach(el => {
    if (el.tabIndex === -1 || el.disabled) {
      nonFocusableElements++;
    }
  });
  
  if (nonFocusableElements > 0) {
    console.warn(`${nonFocusableElements} interactive elements may not be keyboard accessible`);
  } else {
    console.log(`✓ All ${interactiveElements.length} interactive elements appear to be keyboard accessible`);
  }
  
  console.log('Basic accessibility validation complete');
}

// Run all validation functions
function runValidation() {
  console.log('Starting comprehensive validation...');
  validateResponsiveness();
  validate3DInteractivity();
  validatePerformance();
  validateAccessibility();
  console.log('Validation complete!');
}

// Execute validation when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a moment for all resources and scripts to initialize
  setTimeout(runValidation, 2000);
});
