// Draws every ABC block on the page as sheet music and adds a play bar under it.
// Uses abcjs (https://www.abcjs.net), loaded in Base.astro.
document.querySelectorAll(".notation-block").forEach((block) => {
  const abc = block.querySelector(".abc-source").textContent.trim();
  const target = block.querySelector(".notation");
  const player = block.querySelector(".player");

  const [visualObj] = ABCJS.renderAbc(target, abc, {
    responsive: "resize",
    add_classes: true,
    paddingtop: 0,
    paddingbottom: 0,
  });

  if (ABCJS.synth.supportsAudio()) {
    const controller = new ABCJS.synth.SynthController();
    controller.load(player, null, {
      displayPlay: true,
      displayProgress: true,
      displayWarp: true,   // tempo slider
    });
    controller.setTune(visualObj, false);
  }
});
