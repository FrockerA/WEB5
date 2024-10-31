function calculateSphereVolume() {
    const radius = document.getElementById('radiusSphere').value;
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volumeSphere').value = volume.toFixed(4);
}

function calculateCylinderVolume() {
    const radius = document.getElementById('radiusCylinder').value;
    const height = document.getElementById('heightCylinder').value;
    const volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('volumeCylinder').value = volume.toFixed(4);
}

function calculateConeVolume() {
    const radius = document.getElementById('radiusCone').value;
    const height = document.getElementById('heightCone').value;
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('volumeCone').value = volume.toFixed(4);
}

function calculatePrismVolume() {
    const baseA = document.getElementById('baseA').value;
    const baseB = document.getElementById('baseB').value;
    const height = document.getElementById('heightPrism').value;
    const baseArea = baseA * baseB;
    const volume = baseArea * height;
    document.getElementById('volumePrism').value = volume.toFixed(4);
}

function calculateTriangleArea() {
    const base = document.getElementById('baseTriangle').value;
    const height = document.getElementById('heightTriangle').value;
    const area = 0.5 * base * height;
    document.getElementById('areaTriangle').value = area.toFixed(4);
}