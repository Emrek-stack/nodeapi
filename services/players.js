'use strict';

var uuid = require('node-uuid'),
    mongoose = require('mongoose'),
    post = require('../model/post');


class PlayersService {
    constructor() {
        this.players = [];
    }

    getPlayers() {
        return this.players;
    }



    getSinglePlayer(playerId) {
        return post.find(function (err, drivers) {
            if (!err) {
                return drivers;
            } else {
                return console.log(err);
            }
        });
    }

    addPlayer(info) {
        // prevent a bit of bad/duplicate data
        if (!info || this.players.filter(p => (p.firstName === info.firstName && p.lastName === info.lastName)).length > 0) {
            return null;
        }

        info.id = uuid.v4();

        this.players.push(info);

        return info;
    }

    updatePlayer(playerId, info) {
        var player = this.getSinglePlayer(playerId);
        if (player) {
            player.firstName = info.firstName ? info.firstName : player.firstName;
            player.lastName = info.lastName ? info.lastName : player.lastName;
            player.displayName = info.displayName ? info.displayName : player.displayName;

            return true;
        }
        return false;
    }
}

module.exports = new PlayersService();