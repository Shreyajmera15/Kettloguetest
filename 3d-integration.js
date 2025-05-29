/* 3D Integration for Landing Page (Updated for GLB) */

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("hero-3d-container");
  if (!heroContainer) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, heroContainer.clientWidth / heroContainer.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  heroContainer.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  // Load GLB Model
  const loader = new THREE.GLTFLoader();
  let kettleModel;

  loader.load(
    "/assets/Red_Elegance.glb", // Path to the new GLB model
    (gltf) => {
      kettleModel = gltf.scene;
      // Adjust model scale and position as needed
      kettleModel.scale.set(1.5, 1.5, 1.5); // Example scale, adjust as needed
      kettleModel.position.y = -1; // Example position, adjust as needed
      scene.add(kettleModel);
      console.log("GLB model loaded successfully.");
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    (error) => {
      console.error("An error happened loading the GLB model:", error);
    }
  );

  // Camera position
  camera.position.z = 5;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Add subtle rotation or other animations if desired
    if (kettleModel) {
      kettleModel.rotation.y += 0.005; // Slow rotation
    }

    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
  });

  // Mouse interaction for subtle movement (optional)
  let mouseX = 0, mouseY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX - windowHalfX) / 500; // Adjust divisor for sensitivity
    mouseY = (event.clientY - windowHalfY) / 500;
  });

  function updateModelPosition() {
    if (kettleModel) {
      // Apply subtle movement based on mouse position
      gsap.to(kettleModel.rotation, {
        y: kettleModel.rotation.y + mouseX * 0.1, // Adjust multiplier for effect
        x: mouseY * 0.05, // Adjust multiplier for effect
        duration: 0.5,
        ease: "power1.out"
      });
    }
    requestAnimationFrame(updateModelPosition);
  }
  // updateModelPosition(); // Uncomment to enable mouse interaction
});
