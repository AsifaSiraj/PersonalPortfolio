'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a1a, 0.035);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a1a, 1);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6c63ff, 2, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d4ff, 1.5, 50);
    pointLight2.position.set(-10, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff6b9d, 1, 40);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    // Floating geometries
    const geometries: THREE.Mesh[] = [];
    const geomConfigs = [
      { geo: new THREE.IcosahedronGeometry(1.2, 0), pos: [-8, 4, -5], color: 0x6c63ff, speed: 0.8 },
      { geo: new THREE.OctahedronGeometry(0.8, 0), pos: [7, -3, -8], color: 0x00d4ff, speed: 1.2 },
      { geo: new THREE.TorusGeometry(1.5, 0.4, 16, 32), pos: [-5, -5, -10], color: 0xff6b9d, speed: 0.6 },
      { geo: new THREE.TetrahedronGeometry(1, 0), pos: [10, 6, -6], color: 0x6c63ff, speed: 1 },
      { geo: new THREE.DodecahedronGeometry(0.9, 0), pos: [-10, -2, -12], color: 0x00d4ff, speed: 0.9 },
      { geo: new THREE.TorusKnotGeometry(0.8, 0.25, 64, 8), pos: [5, 5, -15], color: 0xff6b9d, speed: 0.5 },
      { geo: new THREE.BoxGeometry(1.2, 1.2, 1.2), pos: [-3, 7, -8], color: 0x6c63ff, speed: 1.1 },
      { geo: new THREE.ConeGeometry(0.8, 1.5, 6), pos: [8, -6, -7], color: 0x00d4ff, speed: 0.7 },
      { geo: new THREE.IcosahedronGeometry(0.6, 1), pos: [0, 8, -20], color: 0xff6b9d, speed: 1.3 },
      { geo: new THREE.OctahedronGeometry(0.5, 0), pos: [-7, -7, -9], color: 0x6c63ff, speed: 1.4 },
      { geo: new THREE.TorusGeometry(0.7, 0.2, 8, 16), pos: [12, 2, -11], color: 0x00d4ff, speed: 0.8 },
      { geo: new THREE.DodecahedronGeometry(0.7, 0), pos: [-12, 3, -14], color: 0xff6b9d, speed: 0.6 },
    ];

    geomConfigs.forEach(({ geo, pos, color, speed }) => {
      const material = new THREE.MeshPhongMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        emissive: color,
        emissiveIntensity: 0.15,
      });
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(pos[0], pos[1], pos[2]);
      mesh.userData = {
        originalPos: new THREE.Vector3(...pos),
        rotSpeed: { x: (Math.random() - 0.5) * speed, y: (Math.random() - 0.5) * speed, z: (Math.random() - 0.5) * speed },
        floatSpeed: speed * 0.5,
        floatOffset: Math.random() * Math.PI * 2,
      };
      scene.add(mesh);
      geometries.push(mesh);
    });

    // Particle system
    const particleCount = 2000;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colorOptions = [
      new THREE.Color(0x6c63ff),
      new THREE.Color(0x00d4ff),
      new THREE.Color(0xff6b9d),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 20;
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Grid floor
    const gridHelper = new THREE.GridHelper(80, 40, 0x6c63ff, 0x1a1a3e);
    gridHelper.position.y = -12;
    gridHelper.material.transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.15;
    scene.add(gridHelper);

    // Connection lines between nearby geometries
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x6c63ff,
      transparent: true,
      opacity: 0.1,
    });

    const linesGeom = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    for (let i = 0; i < geometries.length; i++) {
      for (let j = i + 1; j < geometries.length; j++) {
        const dist = geometries[i].position.distanceTo(geometries[j].position);
        if (dist < 15) {
          linePositions.push(
            geometries[i].position.x, geometries[i].position.y, geometries[i].position.z,
            geometries[j].position.x, geometries[j].position.y, geometries[j].position.z
          );
        }
      }
    }
    linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(linesGeom, linesMaterial);
    scene.add(lines);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Camera follow mouse
      camera.position.x += (mouseRef.current.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, -10);

      // Animate geometries
      geometries.forEach((mesh) => {
        const ud = mesh.userData;
        mesh.rotation.x += ud.rotSpeed.x * 0.01;
        mesh.rotation.y += ud.rotSpeed.y * 0.01;
        mesh.rotation.z += ud.rotSpeed.z * 0.01;
        mesh.position.y = ud.originalPos.y + Math.sin(elapsed * ud.floatSpeed + ud.floatOffset) * 1.5;
      });

      // Animate particles
      const posArr = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += Math.sin(elapsed + i) * 0.002;
        posArr[i * 3] += Math.cos(elapsed + i * 0.5) * 0.001;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsed * 0.02;

      // Animate lights
      pointLight1.position.x = Math.sin(elapsed * 0.5) * 15;
      pointLight1.position.z = Math.cos(elapsed * 0.5) * 15;
      pointLight2.position.y = Math.sin(elapsed * 0.3) * 10;

      // Update connection lines
      const lp = lines.geometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let i = 0; i < geometries.length; i++) {
        for (let j = i + 1; j < geometries.length; j++) {
          const dist = geometries[i].position.distanceTo(geometries[j].position);
          if (dist < 15 && idx < lp.length - 5) {
            lp[idx++] = geometries[i].position.x;
            lp[idx++] = geometries[i].position.y;
            lp[idx++] = geometries[i].position.z;
            lp[idx++] = geometries[j].position.x;
            lp[idx++] = geometries[j].position.y;
            lp[idx++] = geometries[j].position.z;
          }
        }
      }
      lines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0" />;
}
