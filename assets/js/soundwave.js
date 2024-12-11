

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 20; // Camera distance for better view
camera.position.y = -5; // Tilt slightly downward
camera.rotation.x = Math.PI / 4; // Rotate to face the waves more directly

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create plane geometry
const planeWidth = 90; // Wide enough to cover the screen width
const planeHeight = 20; // Adjust height for a better wave view
const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 300, 100); // Smooth waves

// Dynamic Shader Material for voice-like animation
const material = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec2 vUv;
        uniform float time;

        void main() {
            vUv = uv;
            vec3 pos = position;

            // Dynamic wave height based on sine and cosine
            float amplitude = 4.0 + sin(time) * 3.0; // Changing amplitude
            float frequencyX = 6.0 + cos(time * 0.5) * 2.0; // Varying frequency
            float frequencyY = 3.0 + sin(time * 0.5) * 1.5; // Varying frequency

            // Use sine and cosine for dynamic waves
            pos.z += sin(pos.x * frequencyX + time) * amplitude;
            pos.z += cos(pos.y * frequencyY + time * 0.5) * amplitude * 0.5;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        uniform float time;

        void main() {
            vec3 color1 = vec3(0.18, 0.8, 0.44); // #2ecc71
            vec3 color2 = vec3(0.2, 0.6, 0.86); // #3498db

            // Smooth gradient animation between colors
            vec3 color = mix(color1, color2, sin(vUv.x * 4.0 + time) * 0.5 + 0.5);
            gl_FragColor = vec4(color, 1.0);
        }
    `,
    uniforms: {
        time: { value: 0.0 } // Uniform for time animation
    },
    wireframe: true // Keep wireframe for a soundwave feel
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI / 2.5; // Tilt the plane slightly to make it face the viewer
scene.add(plane);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update time for dynamic changes in waves
    material.uniforms.time.value += 0.005; // Faster animation for smoother sound-like effect

    // Render scene
    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();

//This would be if i wanted to add an image to the background rather than just the color black !!!!


// // Scene setup
// const scene = new THREE.Scene();

// // Load background image texture
// const textureLoader = new THREE.TextureLoader();
// const backgroundTexture = textureLoader.load('../assets/images/black-space-wallpaper.png'); // Path to your background image
// scene.background = backgroundTexture; // Apply the background texture to the scene

// // Camera setup
// const camera = new THREE.PerspectiveCamera(
//     55,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// camera.position.z = 20; // Camera distance for better view
// camera.position.y = -5; // Tilt slightly downward
// camera.rotation.x = Math.PI / 4; // Rotate to face the waves more directly

// // Renderer setup
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create plane geometry
// const planeWidth = 90; // Wide enough to cover the screen width
// const planeHeight = 20; // Adjust height for a better wave view
// const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 300, 100); // Smooth waves

// // Dynamic Shader Material for voice-like animation
// const material = new THREE.ShaderMaterial({
//     vertexShader: `
//         varying vec2 vUv;
//         uniform float time;

//         void main() {
//             vUv = uv;
//             vec3 pos = position;

//             // Dynamic wave height based on sine and cosine
//             float amplitude = 4.0 + sin(time) * 3.0; // Changing amplitude
//             float frequencyX = 6.0 + cos(time * 0.5) * 2.0; // Varying frequency
//             float frequencyY = 3.0 + sin(time * 0.5) * 1.5; // Varying frequency

//             // Use sine and cosine for dynamic waves
//             pos.z += sin(pos.x * frequencyX + time) * amplitude;
//             pos.z += cos(pos.y * frequencyY + time * 0.5) * amplitude * 0.5;

//             gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//         }
//     `,
//     fragmentShader: `
//         varying vec2 vUv;
//         uniform float time;

//         void main() {
//             vec3 color1 = vec3(0.18, 0.8, 0.44); // #2ecc71
//             vec3 color2 = vec3(0.2, 0.6, 0.86); // #3498db

//             // Smooth gradient animation between colors
//             vec3 color = mix(color1, color2, sin(vUv.x * 4.0 + time) * 0.5 + 0.5);
//             gl_FragColor = vec4(color, 1.0);
//         }
//     `,
//     uniforms: {
//         time: { value: 0.0 } // Uniform for time animation
//     },
//     wireframe: true // Keep wireframe for a soundwave feel
// });

// const plane = new THREE.Mesh(geometry, material);
// plane.rotation.x = -Math.PI / 2.5; // Tilt the plane slightly to make it face the viewer
// scene.add(plane);

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Update time for dynamic changes in waves
//     material.uniforms.time.value += 0.005; // Faster animation for smoother sound-like effect

//     // Render scene
//     renderer.render(scene, camera);
// }

// // Handle window resizing
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Start animation
// animate();

