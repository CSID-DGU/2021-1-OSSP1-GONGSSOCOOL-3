const mongoose = require('mongoose');
const uuid = require('node-uuid');
/**
 *
 */

const TeamSchema = new mongoose.Schema({
    id: {
        type: String,
        default: function genUUID() {
            return uuid.v4();
        }
    },
    name: String,
    owner: String,
    createAt: {
        type: Date,
        default: function() {
            return new Date();
        }
    },
    checked: Boolean,
    color: String,
    bgColor: String,
    dragBgColor: String,
    borderColor: String
});

const Team = mongoose.model('team', TeamSchema);

module.exports = Team;
