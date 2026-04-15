document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.donut').forEach(el => {
    const r = parseFloat(el.dataset.radius) || 48;
    const circ = 2 * Math.PI * r;
    const stroke = parseFloat(el.dataset.stroke) || (1024 / r);
    const p = parseFloat(el.dataset.percent) || 0;

    el.setAttribute("width", `${r}`);
    el.setAttribute("height", `${r}`);
    el.setAttribute("viewBox", "0 0 120 120");
    el.innerHTML = `
        <circle
            cx="60"
            cy="60"
            r="${r}"
            fill="none"
            stroke="#333132"
            stroke-width="${stroke}"
        />

        <circle
            cx="60"
            cy="60"
            r="${r}"
            fill="none"
            stroke="#5271FF"
            stroke-width="${stroke}"
            stroke-dasharray="${circ}"
            stroke-dashoffset="${circ * (1 - p)}"
            transform="rotate(-90 60 60)"
        />
    `;
    });
});