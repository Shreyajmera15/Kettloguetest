/* Enhanced 3D Gallery Styles */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  perspective: 1000px;
}

.kettle-card {
  position: relative;
  height: 400px;
  transform-style: preserve-3d;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.kettle-card:hover {
  transform: translateY(-15px);
}

.kettle-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.kettle-card:hover .kettle-card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.kettle-card-front, .kettle-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
}

.kettle-card-front {
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.kettle-card-back {
  background: linear-gradient(145deg, #ff6a4c, #ff5a3c);
  color: white;
  transform: rotateY(180deg);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kettle-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.kettle-card:hover .kettle-image-container {
  transform: translateZ(50px) rotateY(10deg);
}

.kettle-image {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateZ(0);
}

.kettle-card:hover .kettle-image {
  transform: translateZ(30px) scale(1.1);
  filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.2));
}

.kettle-title {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  font-family: 'Playfair Display', serif;
  position: relative;
}

.kettle-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
}

.kettle-description {
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
}

.btn-view-details {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
}

.btn-view-details::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s ease;
}

.btn-view-details:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn-view-details:hover::before {
  left: 100%;
}

/* Enhanced 3D Experience Section */
.experience-3d {
  padding: 8rem 0;
  background: linear-gradient(145deg, #f9f9f9, #f0f0f0);
  position: relative;
  overflow: hidden;
}

.experience-3d::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(255, 90, 60, 0.05) 0%, transparent 70%);
}

.experience-3d-canvas {
  width: 100%;
  height: 600px;
  margin-top: 3rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
}

#kettle-3d-model {
  width: 100%;
  height: 100%;
}

.experience-controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.experience-3d-canvas:hover .experience-controls {
  opacity: 1;
}

/* Enhanced Product Showcase */
.product-showcase {
  margin-top: 6rem;
}

.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;
}

.product-item:nth-child(even) {
  flex-direction: row-reverse;
}

.product-image {
  flex: 1;
  padding: 2rem;
  position: relative;
  perspective: 1000px;
}

.product-image-container {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.product-item:hover .product-image-container {
  transform: rotateY(10deg);
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
  transform: translateZ(0);
}

.product-item:hover .product-image img {
  transform: translateZ(50px);
  filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.2));
}

.product-details {
  flex: 1;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.product-title {
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.product-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--primary);
}

.product-description {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.product-features {
  margin-bottom: 2.5rem;
}

.product-features li {
  margin-bottom: 0.8rem;
  list-style: none;
  position: relative;
  padding-left: 2rem;
  font-size: 1.05rem;
}

.product-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 10px;
  height: 10px;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(255, 90, 60, 0.2);
}

/* 3D Background Elements */
.bg-3d-element {
  position: absolute;
  pointer-events: none;
  z-index: -1;
  opacity: 0.5;
  filter: blur(2px);
  transform-style: preserve-3d;
  animation: float 15s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0) translateX(0) rotate(0) scale(1); }
  25% { transform: translateY(-20px) translateX(10px) rotate(5deg) scale(1.05); }
  50% { transform: translateY(0) translateX(20px) rotate(10deg) scale(1); }
  75% { transform: translateY(20px) translateX(10px) rotate(5deg) scale(0.95); }
  100% { transform: translateY(0) translateX(0) rotate(0) scale(1); }
}

.bg-3d-element:nth-child(2n) {
  animation-duration: 20s;
  animation-delay: 2s;
}

.bg-3d-element:nth-child(3n) {
  animation-duration: 25s;
  animation-delay: 4s;
}

/* Enhanced Scroll Animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), 
              transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

.fade-in:nth-child(2) {
  transition-delay: 0.1s;
}

.fade-in:nth-child(3) {
  transition-delay: 0.2s;
}

.fade-in:nth-child(4) {
  transition-delay: 0.3s;
}

.fade-in:nth-child(5) {
  transition-delay: 0.4s;
}

.fade-in:nth-child(6) {
  transition-delay: 0.5s;
}

/* Enhanced Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(145deg, rgba(255, 90, 60, 0.05), rgba(255, 90, 60, 0.02));
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 1rem;
  color: var(--primary);
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  padding-left: 30px;
}

.hero-subtitle::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 2px;
  background-color: var(--primary);
  transform: translateY(-50%);
}

.hero-title {
  margin-bottom: 1.5rem;
  line-height: 1.1;
  position: relative;
}

.hero-description {
  margin-bottom: 2.5rem;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  line-height: 1.8;
  color: #555;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
}

.hero-3d-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 1;
}

/* Enhanced 3D Kettle Model Script */
function createPremiumKettle() {
  // Create a group for the entire kettle
  const kettleGroup = new THREE.Group();
  
  // Materials
  const metalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xC0C0C0,
    metalness: 0.9,
    roughness: 0.1,
    reflectivity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });
  
  const woodMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8B4513,
    metalness: 0.0,
    roughness: 0.7,
    clearcoat: 0.3,
    clearcoatRoughness: 0.2
  });
  
  const handleMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8B4513,
    metalness: 0.0,
    roughness: 0.8,
    clearcoat: 0.2
  });
  
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.0,
    roughness: 0.0,
    transmission: 0.9,
    transparent: true,
    opacity: 0.3
  });
  
  // Create kettle body with more segments for smoother appearance
  const bodyGeometry = new THREE.CylinderGeometry(1.2, 1, 2, 64, 4, false);
  const kettleBody = new THREE.Mesh(bodyGeometry, woodMaterial);
  kettleGroup.add(kettleBody);
  
  // Create kettle base
  const baseGeometry = new THREE.CylinderGeometry(1, 1.1, 0.2, 64);
  const base = new THREE.Mesh(baseGeometry, metalMaterial);
  base.position.set(0, -1.1, 0);
  kettleGroup.add(base);
  
  // Create kettle spout
  const spoutCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.5, 0.2, 0),
    new THREE.Vector3(1, 0.3, 0),
    new THREE.Vector3(1.5, 0.2, 0)
  ]);
  
  const spoutGeometry = new THREE.TubeGeometry(spoutCurve, 64, 0.2, 16, false);
  const spout = new THREE.Mesh(spoutGeometry, metalMaterial);
  spout.position.set(0, 0.3, 0);
  spout.rotation.y = Math.PI / 2;
  kettleGroup.add(spout);
  
  // Create kettle handle
  const handleShape = new THREE.Shape();
  handleShape.moveTo(0, 0);
  handleShape.absarc(0, 0, 0.8, 0, Math.PI, false);
  handleShape.lineTo(-0.15, -0.8);
  handleShape.absarc(-0.15, 0, 0.95, Math.PI, 0, true);
  handleShape.lineTo(0, 0);
  
  const handleExtrudeSettings = {
    steps: 1,
    depth: 0.15,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 16
  };
  
  const handleGeometry = new THREE.ExtrudeGeometry(handleShape, handleExtrudeSettings);
  const handle = new THREE.Mesh(handleGeometry, handleMaterial);
  handle.position.set(-1.2, 0, 0);
  handle.rotation.y = Math.PI / 2;
  handle.rotation.z = Math.PI / 2;
  kettleGroup.add(handle);
  
  // Create kettle lid
  const lidBaseGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
  const lidBase = new THREE.Mesh(lidBaseGeometry, woodMaterial);
  lidBase.position.set(0, 1.05, 0);
  kettleGroup.add(lidBase);
  
  const lidTopGeometry = new THREE.CylinderGeometry(0.6, 0.8, 0.2, 32);
  const lidTop = new THREE.Mesh(lidTopGeometry, woodMaterial);
  lidTop.position.set(0, 1.2, 0);
  kettleGroup.add(lidTop);
  
  // Create lid handle
  const lidHandleGeometry = new THREE.SphereGeometry(0.15, 32, 32);
  const lidHandle = new THREE.Mesh(lidHandleGeometry, metalMaterial);
  lidHandle.position.set(0, 1.4, 0);
  kettleGroup.add(lidHandle);
  
  // Create water level indicator
  const indicatorGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 16);
  const indicator = new THREE.Mesh(indicatorGeometry, glassMaterial);
  indicator.position.set(1.15, 0, 0);
  indicator.rotation.z = Math.PI / 2;
  kettleGroup.add(indicator);
  
  // Create water level marks
  for (let i = 0; i < 5; i++) {
    const markGeometry = new THREE.BoxGeometry(0.1, 0.02, 0.02);
    const mark = new THREE.Mesh(markGeometry, metalMaterial);
    mark.position.set(1.15, -0.6 + (i * 0.3), 0.06);
    kettleGroup.add(mark);
  }
  
  // Create decorative elements
  const ringGeometry = new THREE.TorusGeometry(1.01, 0.05, 16, 64);
  const topRing = new THREE.Mesh(ringGeometry, metalMaterial);
  topRing.position.set(0, 0.9, 0);
  topRing.rotation.x = Math.PI / 2;
  kettleGroup.add(topRing);
  
  const bottomRing = new THREE.Mesh(ringGeometry, metalMaterial);
  bottomRing.position.set(0, -0.9, 0);
  bottomRing.rotation.x = Math.PI / 2;
  kettleGroup.add(bottomRing);
  
  // Add subtle wood grain texture to wooden parts
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('/assets/wood_texture.jpg', function(texture) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    woodMaterial.map = texture;
    woodMaterial.needsUpdate = true;
  });
  
  return kettleGroup;
}

// Enhanced 3D Gallery Animation
function initGalleryAnimations() {
  const cards = document.querySelectorAll('.kettle-card');
  
  cards.forEach(card => {
    // Add parallax effect on mouse move
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;
      
      const inner = card.querySelector('.kettle-card-inner');
      const image = card.querySelector('.kettle-image');
      
      // Rotate card slightly based on mouse position
      inner.style.transform = `rotateY(${xPercent * 10}deg) rotateX(${yPercent * -10}deg)`;
      
      // Move image slightly for parallax effect
      image.style.transform = `translateX(${xPercent * 20}px) translateY(${yPercent * 20}px) scale(1.05)`;
    });
    
    // Reset transforms when mouse leaves
    card.addEventListener('mouseleave', function() {
      const inner = card.querySelector('.kettle-card-inner');
      const image = card.querySelector('.kettle-image');
      
      inner.style.transform = 'rotateY(0) rotateX(0)';
      image.style.transform = 'translateX(0) translateY(0) scale(1)';
    });
  });
}

// Enhanced Product Showcase Animation
function initProductShowcaseAnimations() {
  const productItems = document.querySelectorAll('.product-item');
  
  productItems.forEach(item => {
    const image = item.querySelector('.product-image img');
    const imageContainer = item.querySelector('.product-image-container');
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', function() {
      const rect = item.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        const translateY = (0.5 - scrollPercent) * 100;
        image.style.transform = `translateY(${translateY}px) translateZ(30px)`;
      }
    });
    
    // Add parallax effect on mouse move
    item.addEventListener('mousemove', function(e) {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;
      
      imageContainer.style.transform = `rotateY(${xPercent * 5}deg) rotateX(${yPercent * -5}deg)`;
      image.style.transform = `translateX(${xPercent * 20}px) translateY(${yPercent * 20}px) translateZ(30px)`;
    });
    
    // Reset transforms when mouse leaves
    item.addEventListener('mouseleave', function() {
      imageContainer.style.transform = 'rotateY(0) rotateX(0)';
      image.style.transform = 'translateX(0) translateY(0) translateZ(0)';
    });
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
  initGalleryAnimations();
  initProductShowcaseAnimations();
});
