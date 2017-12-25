'use strict';

var ScoresService = require('../services/scores');

class ScoresController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/:leaderboardId/scores', this.getScores.bind(this));
        this.router.post('/:leaderboardId/scores', this.submitScore.bind(this));
    }

    getScores(req, res) {
        var boardId = req.params.leaderboardId;
        var scores = ScoresService.getScores(boardId);
        res.send(scores);
    }

    submitScore(req, res) {
        var boardId = req.params.leaderboardId;
        ScoresService.addScore(boardId, req.body.playerId, req.body.score);

        res.sendStatus(200);
    }
}

module.exports = ScoresController;