/**
 * Generates a normalized array (0–100%) of vertical positions
 * for each day (1 → 77) using variable spacing rules.
 *
 * Spacing logic:
 * - Tight regions → small step (dense points)
 * - Stretch regions → larger step (spread-out points)
 *
 * This creates a non-linear visual timeline while keeping
 * logical progression (days) uniform.
 */
function generatePositions() {
  const positions = [];   // stores cumulative positions for each day
  let currentPos = 0;     // running total (unnormalized position)

  for (let i = 1; i <= 77; i++) {

    let step = 1; // default step (tight spacing)

    // Define spacing regions based on day index
    if (i === 1) {
      step = 0; // starting point (no movement)
    } 
    else if (i >= 2 && i <= 21) {
      step = 0.8; // tight region
    } 
    else if (i > 21 && i <= 28) {
      step = 2; // stretched region
    } 
    else if (i > 28 && i <= 42) {
      step = 0.8;
    } 
    else if (i > 42 && i <= 49) {
      step = 2;
    } 
    else if (i > 49 && i <= 63) {
      step = 0.8;
    } 
    else if (i > 63 && i <= 70) {
      step = 2;
    } 
    else if (i > 70 && i <= 77) {
      step = 0.8;
    }

    currentPos += step;          // accumulate position
    positions.push(currentPos);  // store raw position
  }

  /**
   * Normalize positions to percentage scale (0–100%)
   * so they fit within the timeline container height.
   */
  const max = positions[positions.length - 1];
  return positions.map(p => (p / max) * 100);
}

/**
 * Determines whether a given day should be visible on the UI.
 *
 * Visible conditions:
 * - First day (start)
 * - Last day (end)
 * - Weekly markers (every 7th day)
 * - Special days (milestones / quizzes)
 */
function shouldShow(i) {
  return i === 1 || i === 77 || i % 7 === 0 || specialDays[i];
}

/**
 * Root timeline container (acts as coordinate system)
 */
const timeline = document.querySelector(".timeline");

/**
 * Precomputed vertical positions for all 77 days
 */
const positions = generatePositions();

/**
 * Map of special days with metadata
 * - type → used for styling (CSS class)
 * - label → used for UI text (via data attributes)
 */
const specialDays = {
  24: { type: "milestone", label: "Milestone 1" },
  45: { type: "milestone", label: "Milestone 2" },
  66: { type: "quiz", label: "Quiz 2" }
};

/**
 * Main render loop:
 * - Creates 77 day nodes
 * - Positions them vertically
 * - Applies visibility rules
 * - Tags weeks and special events
 */
for (let i = 1; i <= 77; i++) {
  const div = document.createElement("div");

  // Base identity
  div.className = "day";
  div.id = "d" + i;

  // Apply vertical position (non-linear mapping)
  div.style.top = positions[i - 1] + "%";

  // Control visibility (hide non-essential points)
  if (!shouldShow(i)) {
    div.style.display = "none";
  }

  /**
   * Week tagging:
   * Every 7th day represents end of a week
   * Adds semantic info for styling and labeling
   */
  if (i % 7 === 0) {
    const weekNum = i / 7;
    div.classList.add("week");
    div.setAttribute("data-week", weekNum);
  }

  /**
   * Special day tagging:
   * Adds type (milestone/quiz) and label metadata
   * Used for styling and UI annotations
   */
  if (specialDays[i]) {
    const data = specialDays[i];
    div.classList.add(data.type);
    div.setAttribute("data-label", data.label);
  }

  // Attach to DOM
  timeline.appendChild(div);
}