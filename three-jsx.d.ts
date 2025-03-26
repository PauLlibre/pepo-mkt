import type { Object3DNode } from "@react-three/fiber"
import type * as THREE from "three"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<THREE.Group, typeof THREE.Group>
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>
      instancedMesh: Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
      capsuleGeometry: Object3DNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>
      coneGeometry: Object3DNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
      torusKnotGeometry: Object3DNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
      meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
      meshPhongMaterial: Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>
    }
  }
}

