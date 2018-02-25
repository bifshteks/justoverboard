var mongoose = require('mongoose')

var trackTypeSchema = new mongoose.Schema({
	tracktype: String,
	file: { mime: String, bin: Buffer },
	cost: { type: Number, required: true, min: 0},
})

var stackCostSchema = new mongoose.Schema({
	stackTitle: String,
	cost: { type: Number, required: true, min: 0},
})



var trackSchema = new mongoose.Schema({
	name: { type: String, required: true},
	duration: { type: Number, required: true, min: 0},
	bpm: { type: Number, required: true, min: 0},
	ganre: [String],
	tags: [String],
	files: [trackTypeSchema]
		

	stack: {
		mp3wavCost: Number,
		wavseqCost: Number,
		mp3wavseqCost: Number,
	}
})

mongoose.model('Track', trackSchema, 'Tracks')
