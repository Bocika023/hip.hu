var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.SchemaTypes.ObjectId;

var MessageSchema = new Schema({
  guid: String,
  timestamp: Date,
  text: String,
  type: String,
  team: String,
  portals: [{
    guid: String,
    name: String,
    team: String,
    location: {
      latE6: Number,
      lngE6: Number,
      lat: Number,
      lng: Number,
      address: String
    }
  }],
  plain: [String],
  player: {
    guid: String,
    codename: String,
    team: String
  },
  private: Boolean
});
mongoose.model('Message', MessageSchema);