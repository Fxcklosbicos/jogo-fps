import { Game } from "./core/game.js";
import { Hud } from "./ui/hud.js";

// Lê o mapa selecionado no menu (padrão é 'Desert' se nenhum for escolhido)
const selectedMap = localStorage.getItem('selected_game_map') || 'Desert';

const hud = new Hud(document);
const game = new Game({
  hud,
  mount: document.getElementById("viewport"),
  map: selectedMap // Passa o mapa escolhido para o motor do jogo
});

game.init().catch((error) => {
  console.error(error);
  hud.setError("Failed to load the collision world.");
});