/* Cursor / device-tilt parallax for the ambient light.
   Kept tiny and respectful of reduced-motion preferences. */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var aurora = document.querySelector(".aurora");
  if (!aurora) return;

  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var ticking = false;

  function render() {
    // ease toward the target for a smooth, liquid feel
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    aurora.style.setProperty("--px", currentX.toFixed(4));
    aurora.style.setProperty("--py", currentY.toFixed(4));

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      requestAnimationFrame(render);
    } else {
      ticking = false;
    }
  }

  function kick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  }

  window.addEventListener(
    "pointermove",
    function (e) {
      // normalize to roughly -1..1 around screen center
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      kick();
    },
    { passive: true }
  );

  // Subtle tilt response on mobile
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      function (e) {
        if (e.gamma == null || e.beta == null) return;
        targetX = Math.max(-1, Math.min(1, e.gamma / 45));
        targetY = Math.max(-1, Math.min(1, e.beta / 90));
        kick();
      },
      { passive: true }
    );
  }
})();
