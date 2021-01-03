import Player from "../src/Player";

describe('Player', () => {
    it('has name', () => {
        const player = new Player('Denis');
        expect(player.name).toBe('Denis');
    });
})
